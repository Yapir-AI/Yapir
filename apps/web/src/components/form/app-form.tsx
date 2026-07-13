import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import { Button } from "#web/components/ui/button";
import { Input } from "#web/components/ui/input";
import { Label } from "#web/components/ui/label";
import * as React from "react";

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
  const errors =
    field.state.meta.isBlurred || field.form.state.submissionAttempts > 0
      ? field.state.meta.errors.map(String)
      : [];

  return (
    <div className="grid gap-1">
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
      <p id={errorId} className="min-h-4 text-xs text-destructive">
        {errors[0]}
      </p>
    </div>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" disabled={isSubmitting}>
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}

function Form({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  const form = useFormContext();

  return (
    <form
      className="grid gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit().catch(() => undefined);
      }}
    >
      {children}
      <p
        role="alert"
        aria-live="polite"
        className="min-h-4 text-xs text-destructive"
      >
        {error}
      </p>
    </form>
  );
}

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { TextField },
  formComponents: { Form, SubmitButton },
});
