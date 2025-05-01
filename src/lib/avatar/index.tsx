import { createAvatar, type Style, type StyleOptions } from "@dicebear/core";
import { type PropsWithChildren, useMemo } from "react";
import { cn } from "@/lib/utils";

type AvatarProps<O extends {}> = {
  style: Style<O>;
  options: StyleOptions<O>;
  className?: string;
};

const useAvatar = <O extends {}>({ style, options }: AvatarProps<O>) =>
  useMemo(() => {
    return createAvatar(style, options).toDataUri();
  }, []);

export function Avatar<O extends {}>({
  style,
  options,
  className,
}: AvatarProps<O>) {
  const avatar = useAvatar({ style, options });
  return (
    <img src={avatar} className={className} alt={`${options.seed}-avatar`} />
  );
}

export function AvatarBackground<O extends {}>({
  children,
  className,
  ...options
}: PropsWithChildren<AvatarProps<O> & { className?: string }>) {
  const avatar = useAvatar(options);
  return (
    <div className={cn("relative h-full")}>
      <img
        src={avatar}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
