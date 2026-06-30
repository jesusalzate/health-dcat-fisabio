import React from "react";

function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.fs-tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);font-family:var(--font-display)}
.fs-tab{
  appearance:none;background:none;border:none;cursor:pointer;
  font-family:var(--font-display);font-weight:var(--weight-medium);font-size:var(--text-base);
  color:var(--text-muted);padding:12px 16px;position:relative;
  transition:color var(--dur) var(--ease-out);
}
.fs-tab:hover{color:var(--text-strong)}
.fs-tab--active{color:var(--brand);font-weight:var(--weight-semibold)}
.fs-tab__underline{
  position:absolute;left:12px;right:12px;bottom:-1px;height:3px;
  background:var(--accent);border-radius:var(--radius-pill);
}
.fs-tab:focus-visible{outline:none;box-shadow:var(--ring-focus);border-radius:var(--radius-sm)}
`;

export function Tabs({ tabs = [], value, onChange, className = "", ...rest }) {
  useStyleOnce("fs-tabs-css", CSS);
  const items = tabs.map((t) => (typeof t === "string" ? { id: t, label: t } : t));
  const active = value ?? items[0]?.id;
  return (
    <div className={`fs-tabs ${className}`.trim()} role="tablist" {...rest}>
      {items.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            className={`fs-tab ${on ? "fs-tab--active" : ""}`.trim()}
            onClick={() => onChange && onChange(t.id)}
          >
            {t.label}
            {on && <span className="fs-tab__underline" />}
          </button>
        );
      })}
    </div>
  );
}
