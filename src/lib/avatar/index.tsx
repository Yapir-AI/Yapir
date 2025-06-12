import BoringAvatar from "boring-avatars";
import type { ComponentProps } from "react";

export function Avatar(props: ComponentProps<typeof BoringAvatar>) {
  return (
    <BoringAvatar
      {...props}
      colors={["#4BA6D5", "#133C55", "#E3E7D3", "#922D50", "#E6E49F"]}
    />
  );
}
