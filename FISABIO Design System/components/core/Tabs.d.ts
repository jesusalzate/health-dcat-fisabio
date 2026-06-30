import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
}

/** Underlined tab bar with a coral active indicator. Controlled. */
export interface TabsProps {
  /** Tab list — strings or {id,label} objects. */
  tabs: (string | TabItem)[];
  /** Active tab id (defaults to first). */
  value?: string;
  /** Called with the id of the clicked tab. */
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
