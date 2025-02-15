"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { safeWindow } from "@/lib/utils";
import { GitHubIcon } from "@/components/icons/github";

export function GithubConnectorButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [organization, setOrganization] = useState(false);
  const [orgName, setOrgName] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <GitHubIcon />
          GitHub
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <GitHubIcon className="inline-block size-5 fill-foreground" />
            Create a GitHub connexion
          </DialogTitle>
          <DialogDescription>
            This will create a GitHub application, you will then be prompted to
            add it to your repository.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-2"
          action={
            organization
              ? `https://github.com/organizations/${orgName}/settings/apps/new `
              : "https://github.com/settings/apps/new"
          }
          method="post"
        >
          <input
            value={JSON.stringify({
              name: `Yapir-${new Date().toLocaleDateString().replaceAll("/", "-")}`,
              url: "https://yapir.ai",
              hook_attributes: {
                url: safeWindow()?.origin + "/api/github/webhooks",
              },
              redirect_url: safeWindow()?.origin + "/api/github/redirect",
              callback_urls: ["https://example.com/callback"],
              public: false,
              default_permissions: {
                pull_requests: "write",
                contents: "read",
                metadata: "read",
              },
              default_events: ["pull_request"],
            })}
            readOnly
            className="hidden"
            ref={inputRef}
            type="text"
            name="manifest"
            id="manifest"
          />
          <div className="flex items-center">
            <Label htmlFor="org">Organization?</Label>
            <Switch
              checked={organization}
              onCheckedChange={setOrganization}
              className="ml-2"
              id="org"
            />
          </div>
          {organization && (
            <Input
              autoFocus
              placeholder="Organization name"
              minLength={3}
              required
              onChange={(e) => setOrgName(e.target.value)}
              value={orgName}
            />
          )}
          <DialogFooter className="w-full items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              {organization
                ? `This will create an application for your whole Github org.`
                : "This will create a personal application"}
            </p>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
