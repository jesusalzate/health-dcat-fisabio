Labelled text input with hint/error states and an optional leading icon. Focus ring is indigo; errors use the GVA red.

```jsx
<Input label="Correu electrònic" type="email" placeholder="nom@gva.es" required />
<Input label="Cerca" icon={<SearchIcon/>} placeholder="Cerca projectes…" />
<Input label="DNI" error="Format no vàlid" defaultValue="123" />
```

Props: `label`, `hint`, `error`, `required`, `icon` plus all native input attributes.
