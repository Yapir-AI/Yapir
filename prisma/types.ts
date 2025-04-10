import type { GitMergeRequestDiffs as Diffs } from "@/lib/git/parsing/model/GitMergeRequestDiffs";

declare global {
  namespace PrismaJson {
    type GitMergeRequestDiffs = DeepRemoveMethods<Diffs>;
  }
}

type DeepRemoveMethods<T> = T extends (...args: any[]) => any
  ? never
  : T extends object
    ? T extends Array<infer U>
      ? Array<DeepRemoveMethods<U>>
      : T extends Map<infer K, infer V>
        ? Map<DeepRemoveMethods<K>, DeepRemoveMethods<V>>
        : T extends Set<infer U>
          ? Set<DeepRemoveMethods<U>>
          : T extends Date
            ? Date
            : T extends RegExp
              ? RegExp
              : {
                  [K in keyof T as T[K] extends (...args: any[]) => any
                    ? never
                    : K]: DeepRemoveMethods<T[K]>;
                }
    : T;
