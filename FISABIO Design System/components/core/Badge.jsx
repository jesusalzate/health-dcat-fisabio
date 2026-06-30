import React from "react";

function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.fs-badge{
  display:inline-flex;align-items:center;gap:.4em;font-family:var(--font-display);
  font-weight:var(--weight-semibold);font-size:var(--text-xs);line-height:1;
  padding:5px 11px;border-radius:var(--radius-pill);letter-spacing:.01em;
  border:1px solid transparent;white-space:nowrap;
}
.fs-badge--solid{background:var(--brand);color:#fff}
.fs-badge--accent{background:var(--accent);color:#fff}
.fs-badge--soft{background:var(--fs-indigo-50);color:var(--brand);border-color:var(--fs-indigo-100)}
.fs-badge--sky{background:var(--fs-sky-100);color:var(--fs-indigo-800);border-color:var(--fs-sky-200)}
.fs-badge--coral{background:var(--fs-coral-100);color:var(--fs-coral-700);border-color:var(--fs-coral-200)}
.fs-badge--success{background:var(--fs-success-soft);color:#0f6b43}
.fs-badge--warning{background:var(--fs-warning-soft);color:#8a5d05}
.fs-badge--danger{background:var(--fs-danger-soft);color:#a80d26}
.fs-badge--outline{background:transparent;color:var(--text-muted);border-color:var(--border-strong)}
.fs-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor}
`;

export function Badge({ children, variant = "soft", dot = false, className = "", ...rest }) {
  useStyleOnce("fs-badge-css", CSS);
  return (
    <span className={`fs-badge fs-badge--${variant} ${className}`.trim()} {...rest}>
      {dot && <span className="fs-badge__dot" />}
      {children}
    </span>
  );
}
