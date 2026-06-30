import React from "react";

/* Injects a component's CSS once (pseudo-states can't be inline). */
function useStyleOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}

const CSS = `
.fs-btn{
  font-family:var(--font-display);font-weight:var(--weight-semibold);
  display:inline-flex;align-items:center;justify-content:center;gap:.55em;
  border:1px solid transparent;border-radius:var(--radius-pill);cursor:pointer;
  text-decoration:none;white-space:nowrap;line-height:1;
  transition:background var(--dur) var(--ease-out),color var(--dur) var(--ease-out),
    border-color var(--dur) var(--ease-out),transform var(--dur-fast) var(--ease-out),
    box-shadow var(--dur) var(--ease-out);
}
.fs-btn:focus-visible{outline:none;box-shadow:var(--ring-focus)}
.fs-btn:active{transform:translateY(1px)}
.fs-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none}
.fs-btn--sm{font-size:var(--text-sm);padding:8px 16px}
.fs-btn--md{font-size:var(--text-base);padding:11px 22px}
.fs-btn--lg{font-size:var(--text-md);padding:14px 28px}
.fs-btn--primary{background:var(--brand);color:var(--brand-contrast)}
.fs-btn--primary:hover:not([disabled]){background:var(--brand-hover);box-shadow:var(--shadow-brand)}
.fs-btn--accent{background:var(--accent);color:var(--accent-contrast)}
.fs-btn--accent:hover:not([disabled]){background:var(--accent-hover);box-shadow:0 12px 30px rgba(255,100,125,.34)}
.fs-btn--secondary{background:transparent;color:var(--brand);border-color:var(--border-strong)}
.fs-btn--secondary:hover:not([disabled]){border-color:var(--brand);background:var(--fs-indigo-50)}
.fs-btn--ghost{background:transparent;color:var(--brand)}
.fs-btn--ghost:hover:not([disabled]){background:var(--fs-indigo-50)}
.fs-btn--danger{background:var(--fs-danger);color:#fff}
.fs-btn--danger:hover:not([disabled]){background:#a80d26}
.fs-btn--block{display:flex;width:100%}
.fs-btn__icon{display:inline-flex;font-size:1.15em}
`;

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = false,
  block = false,
  disabled = false,
  as = "button",
  className = "",
  ...rest
}) {
  useStyleOnce("fs-btn-css", CSS);
  const Tag = as;
  const cls = [
    "fs-btn",
    `fs-btn--${variant}`,
    `fs-btn--${size}`,
    block ? "fs-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} disabled={Tag === "button" ? disabled : undefined} {...rest}>
      {icon && !iconRight && <span className="fs-btn__icon">{icon}</span>}
      {children}
      {icon && iconRight && <span className="fs-btn__icon">{icon}</span>}
    </Tag>
  );
}
