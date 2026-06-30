The primary action control for FISABIO interfaces — pill-shaped, set in the display face. Use `primary` (indigo) for the main action on a view; reserve `accent` (coral) for a single high-emphasis CTA.

```jsx
<Button variant="primary" size="lg" onClick={submit}>Sol·licitar accés</Button>
<Button variant="accent" icon={<span>→</span>} iconRight>Descobreix la recerca</Button>
<Button variant="secondary">Cancel·la</Button>
<Button variant="ghost" size="sm">Més informació</Button>
```

Variants: `primary` · `accent` · `secondary` (outline) · `ghost` · `danger`. Sizes: `sm` · `md` · `lg`. Props: `icon`, `iconRight`, `block`, `disabled`, `as` (render as `"a"` for links). Never place two coral `accent` buttons in the same view.
