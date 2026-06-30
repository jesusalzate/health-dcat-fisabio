import * as React from "react";

/** Small status / category label, pill-shaped. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "soft" */
  variant?: "solid" | "accent" | "soft" | "sky" | "coral" | "success" | "warning" | "danger" | "outline";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
