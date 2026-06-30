/* @ds-bundle: {"format":3,"namespace":"FISABIODesignSystem_61892e","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"49ee77aa3c5a","components/core/Badge.jsx":"0c580976cbce","components/core/Button.jsx":"2fe20e5a2192","components/core/Card.jsx":"b4e2fabb906c","components/core/Input.jsx":"510864f4589c","components/core/Tabs.jsx":"05d7759a5dec","components/data/Stat.jsx":"de93bef4c52f","ui_kits/website/Blocks.jsx":"eae21f0b91be","ui_kits/website/Screens.jsx":"c0c6c7506de6","ui_kits/website/Sections.jsx":"ba6467e22f64"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FISABIODesignSystem_61892e = window.FISABIODesignSystem_61892e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Renders an official FISABIO logo asset (SVG) by variant + tone.
 * Points at the design-system `assets/logos` folder; override `basePath`
 * when the assets live elsewhere in a consuming project.
 */
const FILES = {
  lockup: tone => `fisabio-gva-lockup-${tone}.svg`,
  // GVA + Fisabio (institutional)
  logo: tone => `fisabio-logo-${tone}.svg`,
  // Fisabio imagotip
  symbol: tone => `fisabio-symbol-${tone}.svg` // isotip only
};
const ALT = {
  lockup: "Generalitat Valenciana · Fundació Fisabio",
  logo: "Fundació Fisabio",
  symbol: "Fisabio"
};
function Logo({
  variant = "logo",
  tone = "indigo",
  height = 40,
  basePath = "assets/logos",
  className = "",
  style = {},
  alt,
  ...rest
}) {
  const file = (FILES[variant] || FILES.logo)(tone);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${file}`,
    alt: alt ?? ALT[variant],
    className: `fs-logo ${className}`.trim(),
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
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
function Badge({
  children,
  variant = "soft",
  dot = false,
  className = "",
  ...rest
}) {
  useStyleOnce("fs-badge-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `fs-badge fs-badge--${variant} ${className}`.trim()
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fs-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["fs-btn", `fs-btn--${variant}`, `fs-btn--${size}`, block ? "fs-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === "button" ? disabled : undefined
  }, rest), icon && !iconRight && /*#__PURE__*/React.createElement("span", {
    className: "fs-btn__icon"
  }, icon), children, icon && iconRight && /*#__PURE__*/React.createElement("span", {
    className: "fs-btn__icon"
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
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
function Card({
  children,
  title,
  accent = false,
  brand = false,
  interactive = false,
  flat = false,
  padded = true,
  className = "",
  ...rest
}) {
  useStyleOnce("fs-card-css", CSS);
  const cls = ["fs-card", padded ? "fs-card--pad" : "", brand ? "fs-card--brand" : "", interactive ? "fs-card--interactive" : "", flat ? "fs-card--flat" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    className: "fs-card__accent"
  }), title && /*#__PURE__*/React.createElement("h3", {
    className: "fs-card__title"
  }, title), title ? /*#__PURE__*/React.createElement("div", {
    className: "fs-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
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
function Input({
  label,
  hint,
  error,
  required = false,
  icon = null,
  id,
  className = "",
  ...rest
}) {
  useStyleOnce("fs-input-css", CSS);
  const fieldId = id || (label ? `fs-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fs-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fs-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "fs-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "fs-input__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ["fs-input", icon ? "fs-input--icon" : "", error ? "fs-input--error" : "", className].filter(Boolean).join(" "),
    "aria-invalid": error ? "true" : undefined
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `fs-field__hint ${error ? "fs-field__hint--error" : ""}`.trim()
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
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
function Tabs({
  tabs = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  useStyleOnce("fs-tabs-css", CSS);
  const items = tabs.map(t => typeof t === "string" ? {
    id: t,
    label: t
  } : t);
  const active = value ?? items[0]?.id;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `fs-tabs ${className}`.trim(),
    role: "tablist"
  }, rest), items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      className: `fs-tab ${on ? "fs-tab--active" : ""}`.trim(),
      onClick: () => onChange && onChange(t.id)
    }, t.label, on && /*#__PURE__*/React.createElement("span", {
      className: "fs-tab__underline"
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyleOnce(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
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
function Stat({
  value,
  suffix,
  label,
  desc,
  tone = "brand",
  size = "md",
  className = "",
  ...rest
}) {
  useStyleOnce("fs-stat-css", CSS);
  const toneCls = tone === "accent" ? "fs-stat--accent" : tone === "onbrand" ? "fs-stat--onbrand" : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `fs-stat ${toneCls} ${size === "sm" ? "fs-stat--sm" : ""} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fs-stat__value"
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    className: "fs-stat__suffix"
  }, suffix)), label && /*#__PURE__*/React.createElement("span", {
    className: "fs-stat__label"
  }, label), desc && /*#__PURE__*/React.createElement("span", {
    className: "fs-stat__desc"
  }, desc));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blocks.jsx
try { (() => {
/* FISABIO website UI kit — content blocks: areas, impact, news, footer. */
const {
  Button: FBtn,
  Badge: FBadge,
  Card: FCard,
  Stat: FStat,
  Logo: FLogo
} = window.FISABIODesignSystem_61892e;
const {
  Ic: WIc,
  useLucide: wuseLucide,
  LOGOS: WLOGOS
} = window.FSWeb;
const AREAS = [{
  icon: "activity",
  tag: "Salut Pública",
  title: "Epidemiologia i Vigilància",
  desc: "Vigilància de malalties i resposta davant amenaces per a la salut de la població.",
  n: "34 grups"
}, {
  icon: "dna",
  tag: "Genòmica",
  title: "Genòmica i Bioinformàtica",
  desc: "Seqüenciació, microbioma i medicina de precisió aplicada a la clínica.",
  n: "21 grups"
}, {
  icon: "syringe",
  tag: "Prevenció",
  title: "Vacunes i Immunització",
  desc: "Avaluació de l'efectivitat vacunal i estratègies de prevenció poblacional.",
  n: "12 grups"
}, {
  icon: "eye",
  tag: "Oftalmologia",
  title: "FISABIO Oftalmologia (FOM)",
  desc: "Recerca clínica i quirúrgica en patologia ocular i salut visual.",
  n: "18 grups"
}, {
  icon: "bug",
  tag: "Microbiologia",
  title: "Resistència Antimicrobiana",
  desc: "Estudi de la resistència a antibiòtics i salut global One Health.",
  n: "15 grups"
}, {
  icon: "heart-pulse",
  tag: "Clínica",
  title: "Malalties Cròniques",
  desc: "Abordatge integral de patologies cròniques i desigualtats en salut.",
  n: "27 grups"
}];
function AreasGrid({
  title = "Àrees d'investigació",
  limit = 6,
  onOpen
}) {
  wuseLucide();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 34,
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "fs-eyebrow"
  }, "Qu\xE8 investiguem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "10px 0 0"
    }
  }, title)), /*#__PURE__*/React.createElement(FBtn, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(WIc, {
      n: "arrow-right"
    }),
    iconRight: true,
    onClick: onOpen
  }, "Veure totes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, AREAS.slice(0, limit).map(a => /*#__PURE__*/React.createElement(FCard, {
    key: a.title,
    interactive: true,
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 46,
      height: 46,
      borderRadius: "var(--radius-md)",
      background: "var(--fs-indigo-50)",
      color: "var(--brand)"
    }
  }, /*#__PURE__*/React.createElement(WIc, {
    n: a.icon,
    size: 22
  })), /*#__PURE__*/React.createElement(FBadge, {
    variant: "soft"
  }, a.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      margin: "0 0 6px",
      letterSpacing: "-.01em"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.6,
      margin: "0 0 14px"
    }
  }, a.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "var(--text-muted)",
      fontSize: 13,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement(WIc, {
    n: "users",
    size: 14
  }), a.n)))));
}
function ImpactBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-brand)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "66px 32px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 30,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 1"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-eyebrow",
    style: {
      color: "var(--fs-coral-400)"
    }
  }, "Impacte 2025"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: "var(--text-2xl)",
      margin: "10px 0 0"
    }
  }, "La recerca, en xifres")), /*#__PURE__*/React.createElement(FStat, {
    value: "42",
    suffix: "M\u20AC",
    tone: "onbrand",
    label: "Finan\xE7ament captat",
    desc: "Convocat\xF2ries competitives"
  }), /*#__PURE__*/React.createElement(FStat, {
    value: "2,847",
    tone: "onbrand",
    label: "Publicacions",
    desc: "Articles indexats 2020\u201325"
  }), /*#__PURE__*/React.createElement(FStat, {
    value: "3",
    suffix: "prov\xEDncies",
    tone: "onbrand",
    label: "Territori",
    desc: "Val\xE8ncia \xB7 Castell\xF3 \xB7 Alacant"
  })));
}
const NEWS = [{
  tag: "Genòmica",
  date: "18 JUN 2025",
  title: "Un nou consorci europeu situa FISABIO en la vanguarda del microbioma",
  read: "4 min"
}, {
  tag: "Vacunes",
  date: "11 JUN 2025",
  title: "L'efectivitat vacunal davant la grip s'eleva al 68% en població de risc",
  read: "3 min"
}, {
  tag: "Premis",
  date: "02 JUN 2025",
  title: "Dos projectes de la fundació reben finançament del Carlos III",
  read: "2 min"
}];
function NewsList({
  onOpen
}) {
  wuseLucide();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "fs-eyebrow"
  }, "Actualitat"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "10px 0 0"
    }
  }, "\xDAltimes not\xEDcies")), /*#__PURE__*/React.createElement(FBtn, {
    variant: "secondary",
    size: "sm"
  }, "Sala de premsa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, NEWS.map((n, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    onClick: onOpen,
    style: {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      borderRadius: "var(--radius-lg)",
      marginBottom: 16,
      background: i === 0 ? "linear-gradient(135deg,var(--fs-indigo-700),var(--fs-coral-600))" : i === 1 ? "linear-gradient(135deg,var(--fs-sky-300),var(--fs-indigo-500))" : "linear-gradient(135deg,var(--fs-coral-500),var(--fs-indigo-700))",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(FBadge, {
    variant: "solid"
  }, n.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      whiteSpace: "nowrap",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, n.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, n.read)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      margin: 0,
      lineHeight: 1.25,
      letterSpacing: "-.01em"
    }
  }, n.title)))));
}
function SiteFooter() {
  wuseLucide();
  const cols = [["La fundació", ["Qui som", "Equip directiu", "Transparència", "Treballa amb nosaltres"]], ["Investigació", ["Àrees", "Grups", "Publicacions", "Plataformes"]], ["Recursos", ["Convocatòries", "Formació", "Premsa", "Contacte"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--fs-indigo-950)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "56px 32px 28px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FLogo, {
    variant: "logo",
    tone: "white",
    height: 34,
    basePath: WLOGOS
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-brand-muted)",
      fontSize: 14,
      marginTop: 16,
      maxWidth: "32ch"
    }
  }, "Fundaci\xF3 per al Foment de la Investigaci\xF3 Sanit\xE0ria i Biom\xE8dica de la Comunitat Valenciana."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18
    }
  }, ["twitter", "linkedin", "youtube"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      display: "grid",
      placeItems: "center",
      width: 38,
      height: 38,
      borderRadius: "50%",
      border: "1px solid var(--border-on-brand)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(WIc, {
    n: s,
    size: 16
  }))))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 14,
      color: "#fff"
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: "block",
      color: "var(--text-on-brand-muted)",
      fontSize: 14,
      padding: "5px 0",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "18px 32px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      color: "var(--text-on-brand-muted)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Fundaci\xF3 Fisabio \xB7 Generalitat Valenciana"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Av\xEDs legal"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Privacitat"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Accessibilitat")))));
}
window.FSWeb = Object.assign(window.FSWeb || {}, {
  AreasGrid,
  ImpactBand,
  NewsList,
  SiteFooter,
  AREAS,
  NEWS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
/* FISABIO website UI kit — full screens composed from sections. */
const {
  Tabs: FTabs,
  Badge: FBg,
  Button: FB2,
  Stat: FSt,
  Card: FCd
} = window.FISABIODesignSystem_61892e;
const W = window.FSWeb;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(W.Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(W.AreasGrid, {
    limit: 6,
    onOpen: () => go("areas")
  }), /*#__PURE__*/React.createElement(W.ImpactBand, null), /*#__PURE__*/React.createElement(W.NewsList, {
    onOpen: () => go("article")
  }));
}
function AreasScreen({
  go
}) {
  W.useLucide();
  const [tab, setTab] = React.useState("totes");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-subtle)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "48px 32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      color: "inherit"
    }
  }, "Inici"), /*#__PURE__*/React.createElement(W.Ic, {
    n: "chevron-right",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, "Investigaci\xF3")), /*#__PURE__*/React.createElement("span", {
    className: "fs-eyebrow"
  }, "Investigaci\xF3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      margin: "12px 0 14px",
      maxWidth: "18ch"
    }
  }, "\xC0rees i grups d'investigaci\xF3"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-body)",
      maxWidth: "52ch",
      marginBottom: 26
    }
  }, "M\xE9s de 120 grups treballen en sis grans \xE0rees, des de la salut p\xFAblica fins a la gen\xF2mica."), /*#__PURE__*/React.createElement(FTabs, {
    tabs: [{
      id: "totes",
      label: "Totes"
    }, {
      id: "publica",
      label: "Salut Pública"
    }, {
      id: "genomica",
      label: "Genòmica"
    }, {
      id: "clinica",
      label: "Clínica"
    }],
    value: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "40px 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, W.AREAS.map(a => /*#__PURE__*/React.createElement(FCd, {
    key: a.title,
    interactive: true,
    onClick: () => go("article")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 46,
      height: 46,
      borderRadius: "var(--radius-md)",
      background: "var(--fs-indigo-50)",
      color: "var(--brand)"
    }
  }, /*#__PURE__*/React.createElement(W.Ic, {
    n: a.icon,
    size: 22
  })), /*#__PURE__*/React.createElement(FBg, {
    variant: "soft"
  }, a.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.6,
      margin: "0 0 14px"
    }
  }, a.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "var(--text-muted)",
      fontSize: 13,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement(W.Ic, {
    n: "users",
    size: 14
  }), a.n))))));
}
function ArticleScreen({
  go
}) {
  W.useLucide();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 340,
      background: "linear-gradient(135deg,var(--fs-indigo-800),var(--fs-coral-600))",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "760px",
      margin: "0 auto",
      padding: "0 32px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,.8)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      color: "inherit"
    }
  }, "Actualitat"), /*#__PURE__*/React.createElement(W.Ic, {
    n: "chevron-right",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, "Gen\xF2mica")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(FBg, {
    variant: "solid"
  }, "Gen\xF2mica")), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: "var(--text-4xl)",
      margin: 0,
      maxWidth: "22ch",
      lineHeight: 1.08
    }
  }, "Un nou consorci europeu situa FISABIO en la vanguarda del microbioma"))), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: "680px",
      margin: "0 auto",
      padding: "40px 32px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingBottom: 24,
      marginBottom: 30,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--fs-indigo-100)",
      display: "grid",
      placeItems: "center",
      color: "var(--brand)",
      fontFamily: "var(--font-display)",
      fontWeight: 700
    }
  }, "FS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Gabinet de Comunicaci\xF3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, "18 JUN 2025 \xB7 4 min de lectura")), /*#__PURE__*/React.createElement("button", {
    style: {
      marginLeft: "auto",
      display: "grid",
      placeItems: "center",
      width: 40,
      height: 40,
      border: "1px solid var(--border-strong)",
      borderRadius: "50%",
      background: "#fff",
      color: "var(--brand)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(W.Ic, {
    n: "share-2",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fs-prose",
    style: {
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      color: "var(--text-strong)",
      fontWeight: 500
    }
  }, "La fundaci\xF3 liderar\xE0 la pota valenciana d'un projecte de 14 milions d'euros per cartografiar el microbioma hum\xE0 i el seu paper en la malaltia cr\xF2nica."), /*#__PURE__*/React.createElement("p", null, "El consorci, format per dotze institucions de set pa\xEFsos, situa la Comunitat Valenciana al centre d'una de les l\xEDnies de recerca biom\xE8dica amb major projecci\xF3 de la d\xE8cada. La participaci\xF3 de FISABIO es concentra en la seq\xFCenciaci\xF3 d'alt rendiment i l'an\xE0lisi bioinform\xE0tica de mostres poblacionals."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "28px 0",
      padding: "4px 0 4px 22px",
      borderLeft: "3px solid var(--accent)",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 500,
      color: "var(--text-strong)",
      lineHeight: 1.35
    }
  }, "\xAB\xC9s una oportunitat \xFAnica per traduir la recerca b\xE0sica en millores tangibles per a la salut de la poblaci\xF3.\xBB"), /*#__PURE__*/React.createElement("p", null, "Els primers resultats s'esperen per al segon semestre de 2026, amb la creaci\xF3 d'una plataforma de dades oberta per a la comunitat cient\xEDfica internacional.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FB2, {
    variant: "primary",
    onClick: () => go("home"),
    icon: /*#__PURE__*/React.createElement(W.Ic, {
      n: "arrow-left"
    })
  }, "Torna a l'inici"), /*#__PURE__*/React.createElement(FB2, {
    variant: "secondary"
  }, "Compartir"))));
}
window.FSWeb = Object.assign(window.FSWeb || {}, {
  HomeScreen,
  AreasScreen,
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* FISABIO website UI kit — page sections. Composes DS primitives from the bundle.
   Icons: Lucide (CDN) via <i data-lucide>. Shared to window for sibling babel scripts. */
const {
  Button,
  Badge,
  Card,
  Stat,
  Logo,
  Input
} = window.FISABIODesignSystem_61892e;
const LOGOS = "../../assets/logos";
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
const Ic = ({
  n,
  size = 18,
  style
}) => React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size,
    ...style
  }
});
const NAV = ["Investigació", "Centres", "Formació", "Transferència", "Actualitat"];
function SiteHeader({
  route,
  go
}) {
  useLucide();
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(255,255,255,.86)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "14px 32px",
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "indigo",
    height: 38,
    basePath: LOGOS
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 8
    }
  }, NAV.map(n => {
    const on = route === "areas" && n === "Investigació";
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        if (n === "Investigació") go("areas");
      },
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 15,
        color: on ? "var(--brand)" : "var(--text-body)",
        padding: "8px 12px",
        borderRadius: "var(--radius-sm)",
        textDecoration: "none"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--fs-indigo-50)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, n);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerca",
    style: {
      display: "grid",
      placeItems: "center",
      width: 40,
      height: 40,
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      color: "var(--brand)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "search"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "\xC0rea privada"))));
}
function Hero({
  go
}) {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-brand)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      opacity: .5,
      background: "radial-gradient(420px circle at 86% 18%, var(--fs-indigo-600), transparent 60%)," + "radial-gradient(360px circle at 70% 95%, var(--fs-coral-700), transparent 55%)"
    }
  }), /*#__PURE__*/React.createElement(DotField, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "86px 32px 92px",
      display: "grid",
      gridTemplateColumns: "1.15fr .85fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "fs-eyebrow",
    style: {
      color: "var(--fs-coral-400)"
    }
  }, "Fundaci\xF3 per al foment de la investigaci\xF3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-6xl)",
      lineHeight: 1.02,
      margin: "16px 0 18px",
      color: "#fff",
      letterSpacing: "-.03em"
    }
  }, "Ci\xE8ncia que cuida la salut valenciana"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-on-brand-muted)",
      maxWidth: "46ch",
      margin: "0 0 30px"
    }
  }, "Impulsem la investigaci\xF3 sanit\xE0ria i biom\xE8dica d'excel\xB7l\xE8ncia a la Comunitat Valenciana, de la recerca b\xE0sica fins a la salut p\xFAblica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: "arrow-right",
      size: 20
    }),
    iconRight: true,
    onClick: () => go("areas")
  }, "Explora la investigaci\xF3"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "#",
    style: {
      color: "#fff",
      borderColor: "var(--border-on-brand)"
    }
  }, "Coneix la fundaci\xF3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.07)",
      border: "1px solid var(--border-on-brand)",
      borderRadius: "var(--radius-xl)",
      padding: "22px 24px",
      display: "flex",
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "680",
    suffix: "+",
    tone: "onbrand",
    size: "sm",
    label: "Investigadors"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2.8k",
    tone: "onbrand",
    size: "sm",
    label: "Publicacions"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--accent)",
      borderRadius: "var(--radius-xl)",
      padding: "22px 24px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 46,
      height: 46,
      borderRadius: "50%",
      background: "rgba(255,255,255,.22)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "microscope",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "#fff"
    }
  }, "Mem\xF2ria 2025"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      fontSize: 14,
      fontWeight: 500
    }
  }, "Descarrega el resum \u2192"))))));
}

/* Brand circular motif — DNA-like rows of dots, generated (not hand-iconography). */
function DotField() {
  const rows = 3,
    cols = 16;
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": true,
    viewBox: "0 0 640 180",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      right: -40,
      top: -20,
      width: 560,
      height: 240,
      opacity: .16
    }
  }, Array.from({
    length: rows
  }).map((_, r) => Array.from({
    length: cols
  }).map((_, c) => {
    const x = 20 + c * 40,
      y = 40 + r * 52 + Math.sin(c * 0.6 + r) * 14;
    return /*#__PURE__*/React.createElement("circle", {
      key: r + "-" + c,
      cx: x,
      cy: y,
      r: r === 1 ? 9 : 6,
      fill: "#fff"
    });
  })));
}
window.FSWeb = Object.assign(window.FSWeb || {}, {
  SiteHeader,
  Hero,
  Ic,
  useLucide,
  LOGOS,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Stat = __ds_scope.Stat;

})();
