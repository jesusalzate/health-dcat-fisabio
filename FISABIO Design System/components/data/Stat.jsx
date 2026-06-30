import React from "react";

function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.fs-stat{display:flex;flex-direction:column;gap:4px;font-family:var(--font-body)}
.fs-stat__value{
  font-family:var(--font-display);font-weight:var(--weight-bold);line-height:1;
  letter-spacing:var(--tracking-tighter);color:var(--brand);
  font-size:var(--text-5xl);display:flex;align-items:baseline;gap:.12em;
}
.fs-stat--accent .fs-stat__value{color:var(--accent)}
.fs-stat--onbrand .fs-stat__value{color:#fff}
.fs-stat__suffix{font-size:.5em;font-weight:var(--weight-semibold)}
.fs-stat__label{font-family:var(--font-display);font-weight:var(--weight-semibold);
  font-size:var(--text-base);color:var(--text-strong);margin-top:6px}
.fs-stat--onbrand .fs-stat__label{color:#fff}
.fs-stat__desc{font-size:var(--text-sm);color:var(--text-muted);max-width:26ch}
.fs-stat--onbrand .fs-stat__desc{color:var(--text-on-brand-muted)}
.fs-stat--sm .fs-stat__value{font-size:var(--text-3xl)}
`;

export function Stat({
  value, suffix, label, desc, tone = "brand", size = "md", className = "", ...rest
}) {
  useStyleOnce("fs-stat-css", CSS);
  const toneCls = tone === "accent" ? "fs-stat--accent" : tone === "onbrand" ? "fs-stat--onbrand" : "";
  return (
    <div className={`fs-stat ${toneCls} ${size === "sm" ? "fs-stat--sm" : ""} ${className}`.trim()} {...rest}>
      <span className="fs-stat__value">
        {value}{suffix && <span className="fs-stat__suffix">{suffix}</span>}
      </span>
      {label && <span className="fs-stat__label">{label}</span>}
      {desc && <span className="fs-stat__desc">{desc}</span>}
    </div>
  );
}
