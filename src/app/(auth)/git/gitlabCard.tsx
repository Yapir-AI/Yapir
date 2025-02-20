"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { GitLabIcon } from "@/components/icons/gitlab";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Route } from "next";
import buildUrl from "build-url-ts";
import { safeWindow } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  connectToRepository,
  listUserRepositories,
} from "@/lib/git/connectors/gitlab/actions";
import type { GitLabConnectorListElement } from "@/lib/git/connectors/gitlab/connectorService";

export function GitlabCard(elem: GitLabConnectorListElement) {
  const { displayName, creationDate, url, applicationId, id, ready } = elem;

  const setupUrl = buildUrl(url, {
    path: "/oauth/authorize",
    queryParams: {
      client_id: applicationId,
      response_type: "code",
      scope: "api read_user read_repository read_api",
      redirect_uri:
        safeWindow()?.location?.origin + `/api/gitlab/redirect?id=${id}`,
    },
  }) as Route;

  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    currentRef.href = setupUrl;
  }, []);

  return (
    <Card className="flex items-center gap-5 p-5">
      <GitLabIcon className="size-8 fill-foreground" />
      <div>
        <CardTitle>GitLab</CardTitle>
        <CardDescription>{displayName}</CardDescription>
        <CardDescription suppressHydrationWarning>
          Created {creationDate.toLocaleDateString()}
        </CardDescription>
      </div>
      <div className="ml-auto">
        {ready ? (
          <AddToProjectButton {...elem} />
        ) : (
          <Button asChild variant="link" className="ml-auto">
            <a ref={ref} target="_blank">
              Connect
              <ExternalLink />
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}

function AddToProjectButton(elem: GitLabConnectorListElement) {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    enabled: open,
    queryKey: ["listUserRepositories", elem.id],
    queryFn: async () => await listUserRepositories(elem.id),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link">Connect to repository</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Connect to a repository</DialogTitle>
        <DialogDescription>
          Gitlab does not have an embedded way to add a new repository, we have
          to add them manually.
          <br />
          Make sure your account has access.
          <br />
          This operation will setup webhooks for Yapir on your repository.
        </DialogDescription>
        {isLoading ? (
          <p className="animate-pulse text-center">Loading your repos</p>
        ) : (
          <div className="max-h-64 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Repository</TableHead>
                  <TableHead className="text-center">Connect</TableHead>
                  <TableHead className="text-center">Check</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((repo) => (
                  <AddWebhookToRepository
                    elem={elem}
                    key={repo.id}
                    id={repo.id}
                    name={repo.name}
                    url={repo.web_url}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function AddWebhookToRepository({
  id,
  name,
  elem,
  url,
}: {
  id: number;
  name: string;
  elem: GitLabConnectorListElement;
  url: string;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: async () =>
      connectToRepository({
        repoId: id,
        connectorId: elem.id,
        origin: window.location.origin,
      }),
    onSuccess: () => {
      setConnected(true);
    },
  });

  const [connected, setConnected] = useState(false);

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell className="p-0">
        {connected ? (
          <p className="text-center text-xs">Connected</p>
        ) : (
          <Button
            size="sm"
            variant="ghost"
            className="w-full"
            disabled={isPending}
            onClick={() => mutate()}
          >
            Setup webhooks
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Link href={(url + "/-/hooks") as Route} target="_blank">
          <ExternalLink className="mx-auto size-4 fill-muted" />
        </Link>
      </TableCell>
    </TableRow>
  );
}
