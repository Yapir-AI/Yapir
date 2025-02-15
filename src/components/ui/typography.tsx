export function H1({ children }: { children?: string }) {
  return <h1 className="text-xl font-bold lg:text-3xl">{children}</h1>;
}

export function HSub({ children }: { children?: string }) {
  return <h2 className="text-muted-foreground">{children}</h2>;
}
