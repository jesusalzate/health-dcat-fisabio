import React from "react";

function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.fs-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body)}
.fs-field__label{font-family:var(--font-display);font-weight:var(--weight-medium);
  font-size:var(--text-sm);color:var(--text-strong)}
.fs-field__req{color:var(--accent);margin-left:2px}
.fs-input-wrap{position:relative;display:flex;align-items:center}
.fs-input{
  width:100%;font-family:var(--font-body);font-size:var(--text-base);color:var(--text-strong);
  background:var(--surface-card);border:1.5px solid var(--border-strong);
  border-radius:var(--radius-md);padding:11px 14px;line-height:1.3;
  transition:border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out);
}
.fs-input::placeholder{color:var(--text-faint)}
.fs-input:hover{border-color:var(--fs-grey-400)}
.fs-input:focus{outline:none;border-color:var(--brand);box-shadow:0 0 0 3px var(--fs-indigo-100)}
.fs-input--icon{padding-left:42px}
.fs-input__icon{position:absolute;left:14px;color:var(--text-muted);display:inline-flex;pointer-events:none}
.fs-input--error{border-color:var(--fs-danger)}
.fs-input--error:focus{box-shadow:0 0 0 3px var(--fs-danger-soft)}
.fs-field__hint{font-size:var(--text-xs);color:var(--text-muted)}
.fs-field__hint--error{color:var(--fs-danger)}
.fs-input:disabled{background:var(--surface-subtle);color:var(--text-faint);cursor:not-allowed}
`;

export function Input({
  label, hint, error, required = false, icon = null, id, className = "", ...rest
}) {
  useStyleOnce("fs-input-css", CSS);
  const fieldId = id || (label ? `fs-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return (
    <div className="fs-field">
      {label && (
        <label className="fs-field__label" htmlFor={fieldId}>
          {label}{required && <span className="fs-field__req">*</span>}
        </label>
      )}
      <div className="fs-input-wrap">
        {icon && <span className="fs-input__icon">{icon}</span>}
        <input
          id={fieldId}
          className={[
            "fs-input",
            icon ? "fs-input--icon" : "",
            error ? "fs-input--error" : "",
            className,
          ].filter(Boolean).join(" ")}
          aria-invalid={error ? "true" : undefined}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span className={`fs-field__hint ${error ? "fs-field__hint--error" : ""}`.trim()}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
