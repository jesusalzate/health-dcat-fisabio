/* FISABIO website UI kit — content blocks: areas, impact, news, footer. */
const { Button: FBtn, Badge: FBadge, Card: FCard, Stat: FStat, Logo: FLogo } = window.FISABIODesignSystem_61892e;
const { Ic: WIc, useLucide: wuseLucide, LOGOS: WLOGOS } = window.FSWeb;

const AREAS = [
  { icon:"activity", tag:"Salut Pública", title:"Epidemiologia i Vigilància", desc:"Vigilància de malalties i resposta davant amenaces per a la salut de la població.", n:"34 grups" },
  { icon:"dna", tag:"Genòmica", title:"Genòmica i Bioinformàtica", desc:"Seqüenciació, microbioma i medicina de precisió aplicada a la clínica.", n:"21 grups" },
  { icon:"syringe", tag:"Prevenció", title:"Vacunes i Immunització", desc:"Avaluació de l'efectivitat vacunal i estratègies de prevenció poblacional.", n:"12 grups" },
  { icon:"eye", tag:"Oftalmologia", title:"FISABIO Oftalmologia (FOM)", desc:"Recerca clínica i quirúrgica en patologia ocular i salut visual.", n:"18 grups" },
  { icon:"bug", tag:"Microbiologia", title:"Resistència Antimicrobiana", desc:"Estudi de la resistència a antibiòtics i salut global One Health.", n:"15 grups" },
  { icon:"heart-pulse", tag:"Clínica", title:"Malalties Cròniques", desc:"Abordatge integral de patologies cròniques i desigualtats en salut.", n:"27 grups" },
];

function AreasGrid({ title="Àrees d'investigació", limit=6, onOpen }) {
  wuseLucide();
  return (
    <section style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"84px 32px"}}>
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:34,gap:20,flexWrap:"wrap"}}>
        <div>
          <span className="fs-eyebrow">Què investiguem</span>
          <h2 style={{fontSize:"var(--text-3xl)",margin:"10px 0 0"}}>{title}</h2>
        </div>
        <FBtn variant="ghost" icon={<WIc n="arrow-right"/>} iconRight onClick={onOpen}>Veure totes</FBtn>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
        {AREAS.slice(0,limit).map((a)=>(
          <FCard key={a.title} interactive onClick={onOpen}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
              <div style={{display:"grid",placeItems:"center",width:46,height:46,borderRadius:"var(--radius-md)",
                background:"var(--fs-indigo-50)",color:"var(--brand)"}}><WIc n={a.icon} size={22}/></div>
              <FBadge variant="soft">{a.tag}</FBadge>
            </div>
            <h3 style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"var(--text-lg)",
              color:"var(--text-strong)",margin:"0 0 6px",letterSpacing:"-.01em"}}>{a.title}</h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-body)",lineHeight:1.6,margin:"0 0 14px"}}>{a.desc}</p>
            <div style={{display:"flex",alignItems:"center",gap:7,color:"var(--text-muted)",fontSize:13,
              fontFamily:"var(--font-mono)"}}><WIc n="users" size={14}/>{a.n}</div>
          </FCard>
        ))}
      </div>
    </section>
  );
}

function ImpactBand() {
  return (
    <section style={{background:"var(--surface-brand)",color:"#fff"}}>
      <div style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"66px 32px",
        display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:30,alignItems:"start"}}>
        <div style={{gridColumn:"span 1"}}>
          <span className="fs-eyebrow" style={{color:"var(--fs-coral-400)"}}>Impacte 2025</span>
          <h2 style={{color:"#fff",fontSize:"var(--text-2xl)",margin:"10px 0 0"}}>La recerca, en xifres</h2>
        </div>
        <FStat value="42" suffix="M€" tone="onbrand" label="Finançament captat" desc="Convocatòries competitives" />
        <FStat value="2,847" tone="onbrand" label="Publicacions" desc="Articles indexats 2020–25" />
        <FStat value="3" suffix="províncies" tone="onbrand" label="Territori" desc="València · Castelló · Alacant" />
      </div>
    </section>
  );
}

const NEWS = [
  { tag:"Genòmica", date:"18 JUN 2025", title:"Un nou consorci europeu situa FISABIO en la vanguarda del microbioma", read:"4 min" },
  { tag:"Vacunes", date:"11 JUN 2025", title:"L'efectivitat vacunal davant la grip s'eleva al 68% en població de risc", read:"3 min" },
  { tag:"Premis", date:"02 JUN 2025", title:"Dos projectes de la fundació reben finançament del Carlos III", read:"2 min" },
];

function NewsList({ onOpen }) {
  wuseLucide();
  return (
    <section style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"84px 32px"}}>
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:30}}>
        <div><span className="fs-eyebrow">Actualitat</span>
          <h2 style={{fontSize:"var(--text-3xl)",margin:"10px 0 0"}}>Últimes notícies</h2></div>
        <FBtn variant="secondary" size="sm">Sala de premsa</FBtn>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
        {NEWS.map((n,i)=>(
          <article key={i} onClick={onOpen} style={{cursor:"pointer",display:"flex",flexDirection:"column"}}>
            <div style={{height:168,borderRadius:"var(--radius-lg)",marginBottom:16,
              background:i===0?"linear-gradient(135deg,var(--fs-indigo-700),var(--fs-coral-600))"
                :i===1?"linear-gradient(135deg,var(--fs-sky-300),var(--fs-indigo-500))"
                :"linear-gradient(135deg,var(--fs-coral-500),var(--fs-indigo-700))",
              position:"relative",overflow:"hidden"}}>
              <span style={{position:"absolute",left:14,top:14}}><FBadge variant="solid">{n.tag}</FBadge></span>
            </div>
            <div style={{display:"flex",gap:10,fontFamily:"var(--font-mono)",fontSize:12,whiteSpace:"nowrap",
              color:"var(--text-muted)",marginBottom:8}}><span>{n.date}</span><span>·</span><span>{n.read}</span></div>
            <h3 style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"var(--text-lg)",
              color:"var(--text-strong)",margin:0,lineHeight:1.25,letterSpacing:"-.01em"}}>{n.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function SiteFooter() {
  wuseLucide();
  const cols = [
    ["La fundació",["Qui som","Equip directiu","Transparència","Treballa amb nosaltres"]],
    ["Investigació",["Àrees","Grups","Publicacions","Plataformes"]],
    ["Recursos",["Convocatòries","Formació","Premsa","Contacte"]],
  ];
  return (
    <footer style={{background:"var(--fs-indigo-950)",color:"#fff"}}>
      <div style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"56px 32px 28px",
        display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr",gap:36}}>
        <div>
          <FLogo variant="logo" tone="white" height={34} basePath={WLOGOS} />
          <p style={{color:"var(--text-on-brand-muted)",fontSize:14,marginTop:16,maxWidth:"32ch"}}>
            Fundació per al Foment de la Investigació Sanitària i Biomèdica de la Comunitat Valenciana.</p>
          <div style={{display:"flex",gap:10,marginTop:18}}>
            {["twitter","linkedin","youtube"].map(s=>(
              <a key={s} href="#" aria-label={s} style={{display:"grid",placeItems:"center",width:38,height:38,
                borderRadius:"50%",border:"1px solid var(--border-on-brand)",color:"#fff"}}><WIc n={s} size={16}/></a>
            ))}
          </div>
        </div>
        {cols.map(([h,links])=>(
          <div key={h}>
            <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:14,marginBottom:14,color:"#fff"}}>{h}</div>
            {links.map(l=>(<a key={l} href="#" style={{display:"block",color:"var(--text-on-brand-muted)",
              fontSize:14,padding:"5px 0",textDecoration:"none"}}>{l}</a>))}
          </div>
        ))}
      </div>
      <div style={{borderTop:"1px solid var(--border-on-brand)"}}>
        <div style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"18px 32px",display:"flex",
          justifyContent:"space-between",flexWrap:"wrap",gap:12,color:"var(--text-on-brand-muted)",fontSize:13}}>
          <span>© 2025 Fundació Fisabio · Generalitat Valenciana</span>
          <span style={{display:"flex",gap:18}}><a href="#" style={{color:"inherit"}}>Avís legal</a>
            <a href="#" style={{color:"inherit"}}>Privacitat</a><a href="#" style={{color:"inherit"}}>Accessibilitat</a></span>
        </div>
      </div>
    </footer>
  );
}

window.FSWeb = Object.assign(window.FSWeb||{}, { AreasGrid, ImpactBand, NewsList, SiteFooter, AREAS, NEWS });
