import * as React from "react";

/**
 * FISABIO primary action control. Pill-shaped, Larsseit/Figtree, semibold.
 *
 * @startingPoint section="Core" subtitle="Pill buttons in every brand variant" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "danger";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Optional leading icon (or trailing if iconRight). */
  icon?: React.ReactNode;
  /** Render the icon after the label. @default false */
  iconRight?: boolean;
  /** Full-width button. @default false */
  block?: boolean;
  /** Element/component to render as (e.g. "a"). @default "button" */
  as?: any;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
