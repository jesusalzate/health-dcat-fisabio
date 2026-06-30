import React from "react";

/**
 * Renders an official FISABIO logo asset (SVG) by variant + tone.
 * Points at the design-system `assets/logos` folder; override `basePath`
 * when the assets live elsewhere in a consuming project.
 */
const FILES = {
  lockup: (tone) => `fisabio-gva-lockup-${tone}.svg`, // GVA + Fisabio (institutional)
  logo: (tone) => `fisabio-logo-${tone}.svg`,         // Fisabio imagotip
  symbol: (tone) => `fisabio-symbol-${tone}.svg`,     // isotip only
};

const ALT = {
  lockup: "Generalitat Valenciana · Fundació Fisabio",
  logo: "Fundació Fisabio",
  symbol: "Fisabio",
};

export function Logo({
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
  return (
    <img
      src={`${basePath}/${file}`}
      alt={alt ?? ALT[variant]}
      className={`fs-logo ${className}`.trim()}
      style={{ height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
