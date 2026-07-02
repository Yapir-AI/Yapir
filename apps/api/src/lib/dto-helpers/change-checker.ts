export const changeChecker = <T extends object>(
  o: T,
): T & { hasAnyChange: boolean } => ({
  ...o,
  hasAnyChange: Object.values(o).some((v) => v !== undefined),
});
