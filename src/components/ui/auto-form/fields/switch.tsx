import { FormControl, FormItem } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import AutoFormLabel from "../common/label";
import AutoFormTooltip from "../common/tooltip";
import type { AutoFormInputComponentProps } from "../types";

export default function AutoFormSwitch({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  return (
    <div>
      <FormItem>
        <div className="flex items-center gap-3">
          <AutoFormLabel
            label={fieldConfigItem?.label || label}
            isRequired={isRequired}
          />
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              {...fieldProps}
            />
          </FormControl>
        </div>
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
      </FormItem>
    </div>
  );
}
