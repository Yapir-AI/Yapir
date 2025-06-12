import { useDebounce } from "@/hooks/use-debounce";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import { CommandInput } from "@/components/ui/command";
import { Loader2 } from "lucide-react";

export function useSearchCommand<T extends { id: string }>({
  initialItems = [],
  queryFn,
  queryKey,
  onItemAdded,
  onItemRemoved,
}: {
  initialItems?: T[];
  queryFn: (params: { query: string; excludeIds: string[] }) => Promise<T[]>;
  queryKey: string[];
  onItemAdded?: (item: T) => Promise<any>;
  onItemRemoved?: (item: T) => Promise<any>;
}) {
  const [items, setItems] = useState<T[]>(initialItems);

  const select = (item: T) => {
    setItems((prev) => [...prev, item]);
    return onItemAdded ? onItemAdded(item) : Promise.resolve();
  };

  const remove = (id: string) => {
    const item = items.find((item) => item.id === id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    return item && onItemRemoved ? onItemRemoved(item) : Promise.resolve();
  };

  const reset = () => setItems([]);

  const excludeIds = items.map((item) => item.id);

  return {
    items,
    select,
    remove,
    reset,
    excludeIds,
    queryFn,
    queryKey,
  };
}

interface SearchCommandProps<T extends { id: string }> {
  queryFn: (params: { query: string; excludeIds: string[] }) => Promise<T[]>;
  queryKey: string[];
  ItemComponent: React.ComponentType<{ item: T }>;
  select: (item: T) => void;
  excludeIds?: string[];
  placeholder?: string;
  children: React.ReactNode;
}

export function SearchCommand<T extends { id: string }>({
  select,
  queryFn,
  queryKey,
  ItemComponent,
  excludeIds = [],
  placeholder = "Search items...",
  children,
}: SearchCommandProps<T>) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);

  const {
    data: availableItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [...queryKey, debouncedSearch, excludeIds],
    queryFn: () => queryFn({ query: debouncedSearch, excludeIds }),
    enabled: open,
    staleTime: 60 * 1000,
  });

  const handleSelect = (item: T) => {
    select(item);
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder={placeholder}
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="text-muted-foreground text-sm">
                  Searching...
                </span>
              </div>
            )}

            {error && (
              <div className="p-4 text-center">
                <p className="text-destructive text-sm">
                  Failed to load items. Please try again.
                </p>
              </div>
            )}

            {!isLoading && !error && availableItems.length === 0 && (
              <CommandEmpty>
                No items found. Try a different search.
              </CommandEmpty>
            )}

            {!isLoading && !error && availableItems.length > 0 && (
              <CommandGroup>
                {availableItems.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={String(item.id)}
                    onSelect={() => handleSelect(item)}
                    className="cursor-pointer"
                  >
                    <ItemComponent item={item} />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
