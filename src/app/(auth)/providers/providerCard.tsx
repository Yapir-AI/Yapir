import type { ProviderListElement } from "@/lib/provider/service";
import { z } from "zod";
import { updateProvider } from "@/lib/provider/actions";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DeleteProviderButton } from "@/app/(auth)/providers/deleteProviderButton";

export function ProviderCard({
  icon,
  defaultUrl,
  name,
  apiKeyPrefix,
  modelSuggestions,
  model,
  id,
  baseUrl,
}: ProviderListElement) {
  const formSchema = z.object({
    baseUrl: z
      .string()
      .url()
      .default(baseUrl ?? "")
      .optional(),
    apiKey: z.string().optional(),
    model: z.string().optional().default(model),
  });

  const update = updateProvider.bind(null, id);

  return (
    <AccordionItem asChild value={id}>
      <Card className={cn("p-8")}>
        <AccordionTrigger>
          <CardTitle className={cn("text-xl transition-all duration-500")}>
            {icon}
            {name}
          </CardTitle>
          <Badge
            className="ml-auto transition-all duration-500"
            variant="outline"
          >
            {model}
          </Badge>
        </AccordionTrigger>
        <AccordionContent className="overflow-visible">
          <AutoForm
            onSubmit={(values) => update(values)}
            className="m-10"
            formSchema={formSchema}
            fieldConfig={{
              baseUrl: {
                inputProps: {
                  placeholder: defaultUrl,
                  autoFocus: true,
                },
                description:
                  "Use a different URL prefix for API calls, e.g. to use proxy servers. Default to provider default url.",
              },
              apiKey: {
                inputProps: {
                  type: "password",
                  placeholder: `${apiKeyPrefix ?? ""}` + "\u2022".repeat(30),
                },
                description: `Your ${name} API Key.`,
              },
              model: {
                fieldType: "autocomplete",
                inputProps: {
                  defaultValue: modelSuggestions[0],
                  //@ts-expect-error todo move custom props to real typed props instead of inputProps
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
            }}
          >
            <div className="flex justify-end gap-2">
              <DeleteProviderButton id={id} />
              <AutoFormSubmit className="block">Update</AutoFormSubmit>
            </div>
          </AutoForm>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
