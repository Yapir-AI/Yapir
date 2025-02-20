import { createAvatar, type Style, type StyleOptions } from "@dicebear/core";
import { useMemo } from "react";

export function Avatar<O extends {}>({
  style,
  options,
}: {
  style: Style<O>;
  options: StyleOptions<O>;
}) {
  const avatar = useMemo(() => {
    return createAvatar(style, options).toDataUri();
  }, []);

  return <img src={avatar} alt={`${options.seed}-avatar`} />;
}
