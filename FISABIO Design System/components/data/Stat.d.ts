import * as React from "react";

/**
 * Headline metric for impact figures (projects, publications, funding).
 *
 * @startingPoint section="Data" subtitle="Big-number impact metric" viewport="700x180"
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big number (string or node). */
  value: React.ReactNode;
  /** Small unit after the value, e.g. "%", "M€", "+". */
  suffix?: React.ReactNode;
  /** Bold label under the number. */
  label?: React.ReactNode;
  /** Supporting description line. */
  desc?: React.ReactNode;
  /** Colour of the number. @default "brand" */
  tone?: "brand" | "accent" | "onbrand";
  /** @default "md" */
  size?: "sm" | "md";
}

export function Stat(props: StatProps): JSX.Element;
