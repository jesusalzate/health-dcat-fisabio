import React from "react";

function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.fs-card{
  background:var(--surface-card);border:1px solid var(--border);
  border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);
  overflow:hidden;display:flex;flex-direction:column;
  transition:box-shadow var(--dur) var(--ease-out),transform var(--dur) var(--ease-out),border-color var(--dur) var(--ease-out);
}
.fs-card--pad{padding:var(--space-6)}
.fs-card--interactive{cursor:pointer}
.fs-card--interactive:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:var(--fs-indigo-200)}
.fs-card--brand{background:var(--surface-brand);border-color:transparent;color:var(--text-on-brand)}
.fs-card--brand .fs-card__title{color:#fff}
.fs-card--flat{box-shadow:none}
.fs-card__accent{height:4px;background:var(--accent);border-radius:var(--radius-pill);width:44px;margin-bottom:var(--space-4)}
.fs-card__title{font-family:var(--font-display);font-weight:var(--weight-semibold);
  font-size:var(--text-lg);color:var(--text-strong);margin:0 0 6px;letter-spacing:var(--tracking-tight)}
.fs-card__body{font-family:var(--font-body);font-size:var(--text-sm);color:var(--text-body);line-height:var(--leading-relaxed)}
.fs-card--brand .fs-card__body{color:var(--text-on-brand-muted)}
`;

export function Card({
  children, title, accent = false, brand = false, interactive = false,
  flat = false, padded = true, className = "", ...rest
}) {
  useStyleOnce("fs-card-css", CSS);
  const cls = [
    "fs-card",
    padded ? "fs-card--pad" : "",
    brand ? "fs-card--brand" : "",
    interactive ? "fs-card--interactive" : "",
    flat ? "fs-card--flat" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {accent && <span className="fs-card__accent" />}
      {title && <h3 className="fs-card__title">{title}</h3>}
      {title ? <div className="fs-card__body">{children}</div> : children}
    </div>
  );
}
