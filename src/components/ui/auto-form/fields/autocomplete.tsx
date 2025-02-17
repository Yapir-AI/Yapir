import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import AutoFormLabel from "../common/label";
import type { AutoFormInputComponentProps } from "../types";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import AutoFormTooltip from "@/components/ui/auto-form/common/tooltip";

export default function AutoFormAutoComplete({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  return (
    <FormItem>
      <AutoFormLabel
        label={fieldConfigItem?.label || label}
        isRequired={isRequired}
      />
      <FormControl>
        <AutoComplete
          options={fieldProps.options || []}
          value={
            field.value ? { value: field.value, label: field.value } : undefined
          }
          onValueChange={(option: Option) => {
            field.onChange(option.value);
          }}
          placeholder={fieldProps.placeholder}
          heading={fieldProps.heading}
          addValueHeading={fieldProps.addValueHeading}
          addValueHint={fieldProps.addValueHint}
          emptyMessage={fieldProps.emptyMessage || "No options found."}
          allowCustomValues={fieldProps.allowCustomValues}
          disabled={fieldProps.disabled}
          isLoading={fieldProps.isLoading}
        />
      </FormControl>
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
      <FormMessage />
    </FormItem>
  );
}
