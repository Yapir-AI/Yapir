import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { type KeyboardEvent, useCallback, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type Option = Record<"value" | "label", string> & Record<string, string>;

type AutoCompleteProps = {
  options: Option[];
  emptyMessage: string;
  value?: Option;
  onValueChange?: (value: Option) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  allowCustomValues?: boolean;
  heading?: string;
  addValueHeading?: string;
  addValueHint?: string;
};

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  disabled,
  isLoading = false,
  allowCustomValues = true,
  heading,
  addValueHeading,
  addValueHint,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(value as Option);
  const [inputValue, setInputValue] = useState<string>(value?.label || "");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      if (!isOpen) {
        setOpen(true);
      }

      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.label.toLowerCase() === input.value.toLowerCase(),
        );

        if (optionToSelect) {
          handleSelectOption(optionToSelect);
        } else if (allowCustomValues) {
          // Create and select a custom option
          const customOption: Option = {
            value: `${input.value}`,
            label: input.value,
          };
          handleSelectOption(customOption);
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, onValueChange, allowCustomValues],
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    setInputValue(selected?.label || "");
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);
      setSelected(selectedOption);
      onValueChange?.(selectedOption);

      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange],
  );

  const handleInputChange = useCallback(
    (value: string) => {
      if (isLoading) return;

      setInputValue(value);

      // Filter options based on input
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredOptions(filtered);
    },
    [isLoading, options],
  );

  const showCustomOption =
    allowCustomValues &&
    inputValue &&
    !filteredOptions.some(
      (option) => option.label.toLowerCase() === inputValue.toLowerCase(),
    );

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="text-base"
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "absolute top-0 z-10 w-full rounded-xl bg-background outline-none animate-in fade-in-0 zoom-in-95",
            isOpen ? "block" : "hidden",
          )}
        >
          <CommandList className="max-h-32 rounded-lg">
            {isLoading ? (
              <CommandPrimitive.Loading>
                <div className="p-1">
                  <Skeleton className="h-8 w-full" />
                </div>
              </CommandPrimitive.Loading>
            ) : null}

            {filteredOptions.length > 0 && !isLoading ? (
              <CommandGroup heading={heading ?? "Suggestions"}>
                {filteredOptions.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        "flex w-full items-center gap-2",
                        !isSelected ? "pl-8" : null,
                      )}
                    >
                      {isSelected ? <Check className="w-4" /> : null}
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : null}

            {/* Custom Value Option */}
            {showCustomOption && !isLoading ? (
              <CommandGroup heading={addValueHeading ?? "Add Custom Value"}>
                <CommandItem
                  value={inputValue}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                  onSelect={() => {
                    const customOption: Option = {
                      value: `${inputValue}`,
                      label: inputValue,
                    };
                    handleSelectOption(customOption);
                  }}
                  className="flex w-full items-center gap-2"
                >
                  <Plus className="w-4" />
                  {addValueHint ?? "Add"} &#34;{inputValue}&#34;
                </CommandItem>
              </CommandGroup>
            ) : null}

            {!isLoading && filteredOptions.length === 0 && !showCustomOption ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                {emptyMessage}
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
