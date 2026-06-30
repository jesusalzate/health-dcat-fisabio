Controlled underlined tab bar with a coral active indicator. Drive it with React state.

```jsx
const [tab, setTab] = useState("recerca");
<Tabs
  tabs={[{id:"recerca",label:"Recerca"},{id:"equip",label:"Equip"},{id:"publicacions",label:"Publicacions"}]}
  value={tab}
  onChange={setTab}
/>
```

Pass `tabs` as plain strings for quick cases. `value`/`onChange` are the controlled pair.
