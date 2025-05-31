"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface Tag {
  id: string;
  label: string;
  value: string;
}

export function useMultiSelect({
  onSearchChange,
  maxTags,
  initialTags = [],
  onTagSelectionChange,
}: {
  initialTags: Tag[];
  onTagSelectionChange?: (tags: Tag[]) => void;
  onSearchChange?: (search: string) => void;
  maxTags?: number;
  searching?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>(initialTags);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange?.(value);
  };

  const handleTagChange = (tags: Tag[]) => {
    setSelectedTags(tags);
    onTagSelectionChange?.(tags);
  };

  const handleTagSelect = (tag: Tag) => {
    const isSelected = selectedTags.some((t) => t.id === tag.id);

    if (isSelected) {
      handleTagChange(selectedTags.filter((t) => t.id !== tag.id));
    } else {
      if (maxTags && selectedTags.length >= maxTags) {
        return;
      }
      handleTagChange([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tagId: string) => {
    handleTagChange(selectedTags.filter((t) => t.id !== tagId));
  };

  const clear = () => handleTagChange([]);

  return {
    maxTags,
    selectedTags,
    handleTagRemove,
    handleSearchChange,
    handleTagSelect,
    open,
    setOpen,
    clear,
    search,
    setSearch,
  };
}

export type MultiTagSelectProps = ReturnType<typeof useMultiSelect> & {
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
  tags: Tag[];
};

export function MultiTagSelect({
  tags,
  selectedTags,
  search,
  handleSearchChange,
  handleTagSelect,
  handleTagRemove,
  placeholder = "Select tags...",
  emptyMessage = "No tags found.",
  className,
  disabled = false,
  maxTags,
}: MultiTagSelectProps) {
  const [open, setOpen] = React.useState(false);

  const availableTags = tags.filter(
    (tag) => !selectedTags.some((selected) => selected.id === tag.id),
  );

  return (
    <div className={cn("w-full", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-auto min-h-10 w-full justify-between"
            disabled={disabled}
          >
            <div className="flex flex-1 flex-wrap gap-1">
              {selectedTags.length > 0 ? (
                selectedTags.map((tag) => (
                  <Badge
                    key={tag.id}
                    variant="secondary"
                    className="text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTagRemove(tag.id);
                    }}
                  >
                    {tag.label}
                    <X className="ml-1 h-3 w-3 cursor-pointer" />
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput
              placeholder="Search tags..."
              value={search}
              onValueChange={handleSearchChange}
            />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {availableTags.map((tag) => (
                  <CommandItem
                    key={tag.id}
                    value={tag.value}
                    onSelect={() => handleTagSelect(tag)}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedTags.some((t) => t.id === tag.id)
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {tag.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {maxTags && (
        <p className="text-muted-foreground mt-1 text-xs">
          {selectedTags.length}/{maxTags} tags selected
        </p>
      )}
    </div>
  );
}
