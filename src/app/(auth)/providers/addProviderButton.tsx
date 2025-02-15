"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AutoForm from "@/components/ui/auto-form";
import { useState } from "react";

import { providerConfigs } from "@/lib/provider/model/configs";
import { createProvider } from "@/lib/provider/actions";
import { ProviderCreate } from "@/lib/provider/operation/create";

export function AddProviderButton() {
  const [values, setValues] = useState<Partial<ProviderCreate.Schema>>({});
  const [open, setOpen] = useState(false);

  const { defaultUrl, apiKeyPrefix, modelSuggestions, name } = values.type
    ? providerConfigs[values.type]
    : providerConfigs["anthropic"];

  async function create(values: ProviderCreate.Schema) {
    await createProvider(values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          Add Provider
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create a new provider</DialogTitle>
          <DialogDescription>
            Time to BYOP ! (Bring Your Own Provider)
          </DialogDescription>
        </DialogHeader>
        <AutoForm
          // values={values}
          onValuesChange={setValues}
          onSubmit={create}
          formSchema={ProviderCreate.schema}
          fieldConfig={{
            provider: {},
            baseUrl: {
              inputProps: {
                placeholder: defaultUrl,
              },
              description:
                "Use a different URL prefix for API calls, e.g. to use proxy servers. Default to provider default url.",
            },
            apiKey: {
              inputProps: {
                type: "password",
                placeholder: `${apiKeyPrefix ?? ""}` + "\u2022".repeat(30),
                autoFocus: true,
              },
              description: `Your ${name} API Key.`,
            },
            model: {
              fieldType: "autocomplete",
              inputProps: {
                defaultValue: modelSuggestions[0],
                //@ts-expect-error todo proper typing
                options: modelSuggestions.map((model) => ({
                  value: model,
                  label: model,
                })),
                allowCustomValues: true,
                heading: "Provider models",
                addValueHeading: "Custom model",
                addValueHint: "Use",
                placeholder: "The model you want to use",
                emptyMessage: "No model found",
              },
              description:
                "The model you want to use, make sure you select a performant enough model.",
            },
            enabled: {
              fieldType: "switch",
              description:
                "Should we enable this provider? This will disable the current selected provider",
            },
          }}
        >
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </AutoForm>
      </DialogContent>
    </Dialog>
  );
}
