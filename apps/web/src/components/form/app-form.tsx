import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import { Button } from "#web/components/ui/button";
import { Input } from "#web/components/ui/input";
import { Label } from "#web/components/ui/label";

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

function TextField({
  label,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();
  const errorId = `${field.name}-error`;
  const errors = field.state.meta.errors.map(String);

  return (
    <div className="grid gap-2">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        name={field.name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={field.state.value}
        aria-describedby={errorId}
        aria-invalid={errors.length > 0}
        onBlur={field.handleBlur}
        onChange={(event) => field.handleChange(event.target.value)}
      />
      <p id={errorId} className="min-h-5 text-sm text-destructive">
        {errors[0]}
      </p>
    </div>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button type="submit" disabled={!canSubmit || isSubmitting}>
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { TextField },
  formComponents: { SubmitButton },
});
