Renders an official FISABIO logo SVG. The `lockup` (GVA + Fundació Fisabio) is the mandatory institutional pairing for official communications; `logo` is the standalone imagotip; `symbol` is the isotip alone (favicons, avatars, watermarks).

```jsx
<Logo variant="lockup" tone="indigo" height={48} />
<Logo variant="logo" tone="white" height={40} basePath="../assets/logos" />
<Logo variant="symbol" tone="coral" height={64} />
```

Tones: `indigo` `white` `coral` `black` `periwinkle`. Not every tone exists for every variant — `indigo`/`white` are safe everywhere. Set `basePath` to wherever the `assets/logos` SVGs were copied. Use `white` on the indigo brand surface; never recolour the lockup outside the supplied tones.
