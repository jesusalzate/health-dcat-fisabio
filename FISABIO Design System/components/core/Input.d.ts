import * as React from "react";

/** Labelled text field with hint, error and optional leading icon. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — overrides hint and turns the field red. */
  error?: React.ReactNode;
  /** Mark as required (coral asterisk). @default false */
  required?: boolean;
  /** Leading icon node. */
  icon?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
