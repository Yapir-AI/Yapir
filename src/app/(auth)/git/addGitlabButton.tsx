"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GitLabIcon } from "@/components/icons/gitlab";
import { safeWindow } from "@/lib/utils";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";
import { z } from "zod";
import { GitlabConnectorCreate } from "@/lib/git/connectors/gitlab/operation/connectorCreate";
import { createGitlabConnector } from "@/lib/git/connectors/gitlab/actions";

const formSchema = GitlabConnectorCreate.schema.pick({
  url: true,
  applicationId: true,
  applicationSecret: true,
  displayName: true,
  groupName: true,
});
type FormSchema = z.infer<typeof formSchema>;

export function GitlabConnectorButton() {
  const [values, setValues] = useState<Partial<FormSchema>>({});
  const [open, setOpen] = useState(false);

  const applicationUrl = (() => {
    const domain = values.url ?? "https://gitlab.com";

    const pathName = values.groupName
      ? `/groups/${values.groupName}/-/settings/applications`
      : "/-/profile/applications";

    return (domain + pathName) as Route;
  })();

  async function submit(values: FormSchema) {
    await createGitlabConnector({
      ...values,
      redirectUri: window.location.origin + "/api/gitlab/redirect",
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <GitLabIcon className="fill-primary-foreground" />
          GitLab
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <GitLabIcon className="inline-block size-5 fill-foreground" />
            Create a GitLab connexion
          </DialogTitle>
          <DialogDescription asChild>
            <div>
              <p>
                To integrate your GitLab account, you need to create a new
                application in your GitLab settings. Follow these steps:
              </p>
              <br />
              <Link
                target="_blank"
                className="underline hover:no-underline"
                href={applicationUrl}
              >
                Go to your GitLab profile settings
                <ExternalLink className="ml-1 inline-block size-4" />
              </Link>
              <ol className="list-inside list-decimal">
                <li>Navigate to Applications</li>
                <li>
                  Create a new application with the following details:
                  <ul className="list-inside list-disc pl-4">
                    <li>Name: Dokploy</li>
                    <li>
                      Redirect URI:{" "}
                      <span className="text-foreground">
                        {safeWindow()?.location.origin}
                        /api/gitlab/redirect
                      </span>
                    </li>
                    <li>Scopes: api, read_api, read_user, read_repository</li>
                  </ul>
                </li>
                <li>
                  After creating, you'll receive an Application ID and Secret,
                  copy them and paste them below.
                </li>
              </ol>
            </div>
          </DialogDescription>
          <AutoForm
            values={values}
            onValuesChange={setValues}
            className="mt-4"
            formSchema={formSchema}
            onSubmit={submit}
            fieldConfig={{
              applicationId: {
                inputProps: {
                  placeholder: "GitLab Application ID",
                },
              },
              applicationSecret: {
                inputProps: {
                  placeholder: "GitLab Application Secret",
                  type: "password",
                },
              },
              groupName: {
                inputProps: {
                  placeholder: "Optional, GitLab slugish name of the group.",
                },
              },
              displayName: {
                inputProps: {
                  placeholder: "Just a simple friendly name, this is for you.",
                },
              },
            }}
          >
            <AutoFormSubmit className="ml-auto block">Configure</AutoFormSubmit>
          </AutoForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
