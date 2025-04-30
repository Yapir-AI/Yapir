import { useCallback, useEffect, useRef } from "react";
import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";

export function useDebouncedMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
>(
  options: UseMutationOptions<TData, TError, TVariables> & {
    delay?: number;
  },
): UseMutationResult<TData, TError, TVariables> & {
  debouncedMutate: (variables: TVariables) => void;
} {
  const { delay = 500 } = options;
  const timeoutRef = useRef<number>(undefined);
  const latestVariablesRef = useRef<TVariables>(undefined);

  const mutation = useMutation(options);

  const debouncedMutate = useCallback(
    (variables: TVariables) => {
      latestVariablesRef.current = variables;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (latestVariablesRef.current !== undefined) {
          mutation.mutate(latestVariablesRef.current);
        }
      }, delay);
    },
    [delay, mutation.mutate],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    ...mutation,
    debouncedMutate,
  };
}
