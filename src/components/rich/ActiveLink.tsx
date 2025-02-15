"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import type { Route } from "next";

interface ActiveLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  href: Route;
  exact?: boolean;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
}

const ActiveLink = ({
  href,
  exact = false,
  children,
  className = "",
  activeClassName = "",
  style,
  activeStyle = {},
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname() as Route;

  const normalizeTrailingSlash = (path: Route) => {
    return path === "/" ? path : path.replace(/\/$/, "");
  };

  const normalizedHref = normalizeTrailingSlash(href);
  const normalizedPathname = normalizeTrailingSlash(pathname || "");

  let isActive = false;

  if (exact) {
    isActive = normalizedPathname === normalizedHref;
  } else {
    isActive =
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`);
  }

  const finalClassName = [className, isActive ? activeClassName : null]
    .filter(Boolean)
    .join(" ");

  const finalStyle = isActive ? { ...style, ...activeStyle } : style;

  return (
    <Link href={href} className={finalClassName} style={finalStyle} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
