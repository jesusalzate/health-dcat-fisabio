import * as React from "react";

/**
 * Official FISABIO logo renderer (SVG assets).
 *
 * @startingPoint section="Brand" subtitle="Logo lockup, imagotip & symbol" viewport="700x160"
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Which mark. `lockup` = GVA + Fisabio (institutional, mandatory pairing). @default "logo" */
  variant?: "lockup" | "logo" | "symbol";
  /** Colour treatment. @default "indigo" */
  tone?: "indigo" | "white" | "coral" | "black" | "periwinkle";
  /** Pixel height. @default 40 */
  height?: number;
  /** Folder containing the logo SVGs. @default "assets/logos" */
  basePath?: string;
}

export function Logo(props: LogoProps): JSX.Element;
