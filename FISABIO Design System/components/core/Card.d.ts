import * as React from "react";

/**
 * Surface container with the FISABIO card treatment (soft indigo shadow,
 * generous radius, optional coral accent bar).
 *
 * @startingPoint section="Core" subtitle="Content card with brand & interactive variants" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Heading rendered at the top of the card. */
  title?: React.ReactNode;
  /** Show the short coral accent bar above the title. @default false */
  accent?: boolean;
  /** Indigo brand surface with light text. @default false */
  brand?: boolean;
  /** Lift on hover (for clickable cards). @default false */
  interactive?: boolean;
  /** Remove the shadow. @default false */
  flat?: boolean;
  /** Apply default internal padding. @default true */
  padded?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
