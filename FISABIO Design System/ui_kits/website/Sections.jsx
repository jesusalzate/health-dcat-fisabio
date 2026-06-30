/* FISABIO website UI kit — page sections. Composes DS primitives from the bundle.
   Icons: Lucide (CDN) via <i data-lucide>. Shared to window for sibling babel scripts. */
const { Button, Badge, Card, Stat, Logo, Input } = window.FISABIODesignSystem_61892e;
const LOGOS = "../../assets/logos";

function useLucide(dep) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}
const Ic = ({ n, size = 18, style }) =>
  React.createElement("i", { "data-lucide": n, style: { width: size, height: size, ...style } });

const NAV = ["Investigació", "Centres", "Formació", "Transferència", "Actualitat"];

function SiteHeader({ route, go }) {
  useLucide();
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{position:"sticky",top:0,zIndex:30,background:"rgba(255,255,255,.86)",
      backdropFilter:"blur(12px)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"14px 32px",
        display:"flex",alignItems:"center",gap:28}}>
        <a href="#" onClick={(e)=>{e.preventDefault();go("home");}} style={{display:"flex"}}>
          <Logo variant="lockup" tone="indigo" height={38} basePath={LOGOS} />
        </a>
        <nav style={{display:"flex",gap:4,marginLeft:8}}>
          {NAV.map((n) => {
            const on = route === "areas" && n === "Investigació";
            return (
              <a key={n} href="#" onClick={(e)=>{e.preventDefault(); if(n==="Investigació")go("areas");}}
                style={{fontFamily:"var(--font-display)",fontWeight:500,fontSize:15,
                  color: on ? "var(--brand)" : "var(--text-body)",padding:"8px 12px",
                  borderRadius:"var(--radius-sm)",textDecoration:"none"}}
                onMouseEnter={(e)=>e.currentTarget.style.background="var(--fs-indigo-50)"}
                onMouseLeave={(e)=>e.currentTarget.style.background="transparent"}>{n}</a>
            );
          })}
        </nav>
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:10}}>
          <button aria-label="Cerca" style={{display:"grid",placeItems:"center",width:40,height:40,
            border:"1px solid var(--border-strong)",borderRadius:"var(--radius-pill)",background:"#fff",
            color:"var(--brand)",cursor:"pointer"}}><Ic n="search" /></button>
          <Button variant="primary" size="sm">Àrea privada</Button>
        </div>
      </div>
    </header>
  );
}

function Hero({ go }) {
  useLucide();
  return (
    <section style={{position:"relative",overflow:"hidden",background:"var(--surface-brand)",color:"#fff"}}>
      <div aria-hidden style={{position:"absolute",inset:0,opacity:.5,
        background:"radial-gradient(420px circle at 86% 18%, var(--fs-indigo-600), transparent 60%),"+
        "radial-gradient(360px circle at 70% 95%, var(--fs-coral-700), transparent 55%)"}} />
      <DotField />
      <div style={{position:"relative",maxWidth:"var(--content-max)",margin:"0 auto",
        padding:"86px 32px 92px",display:"grid",gridTemplateColumns:"1.15fr .85fr",gap:48,alignItems:"center"}}>
        <div>
          <span className="fs-eyebrow" style={{color:"var(--fs-coral-400)"}}>Fundació per al foment de la investigació</span>
          <h1 style={{fontSize:"var(--text-6xl)",lineHeight:1.02,margin:"16px 0 18px",color:"#fff",
            letterSpacing:"-.03em"}}>Ciència que cuida la salut valenciana</h1>
          <p style={{fontSize:"var(--text-lg)",color:"var(--text-on-brand-muted)",maxWidth:"46ch",margin:"0 0 30px"}}>
            Impulsem la investigació sanitària i biomèdica d'excel·lència a la Comunitat Valenciana,
            de la recerca bàsica fins a la salut pública.</p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <Button variant="accent" size="lg" icon={<Ic n="arrow-right" size={20}/>} iconRight
              onClick={()=>go("areas")}>Explora la investigació</Button>
            <Button variant="secondary" size="lg" as="a" href="#"
              style={{color:"#fff",borderColor:"var(--border-on-brand)"}}>Coneix la fundació</Button>
          </div>
        </div>
        <div style={{display:"grid",gap:14}}>
          <div style={{background:"rgba(255,255,255,.07)",border:"1px solid var(--border-on-brand)",
            borderRadius:"var(--radius-xl)",padding:"22px 24px",display:"flex",gap:34}}>
            <Stat value="680" suffix="+" tone="onbrand" size="sm" label="Investigadors" />
            <Stat value="2.8k" tone="onbrand" size="sm" label="Publicacions" />
          </div>
          <div style={{background:"var(--accent)",borderRadius:"var(--radius-xl)",padding:"22px 24px",
            display:"flex",alignItems:"center",gap:16}}>
            <div style={{display:"grid",placeItems:"center",width:46,height:46,borderRadius:"50%",
              background:"rgba(255,255,255,.22)",color:"#fff"}}><Ic n="microscope" size={24}/></div>
            <div>
              <div style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:18,color:"#fff"}}>Memòria 2025</div>
              <a href="#" style={{color:"#fff",fontSize:14,fontWeight:500}}>Descarrega el resum →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Brand circular motif — DNA-like rows of dots, generated (not hand-iconography). */
function DotField() {
  const rows = 3, cols = 16;
  return (
    <svg aria-hidden viewBox="0 0 640 180" preserveAspectRatio="none"
      style={{position:"absolute",right:-40,top:-20,width:560,height:240,opacity:.16}}>
      {Array.from({length:rows}).map((_,r)=>
        Array.from({length:cols}).map((_,c)=>{
          const x=20+c*40, y=40+r*52+Math.sin(c*0.6+r)*14;
          return <circle key={r+"-"+c} cx={x} cy={y} r={r===1?9:6} fill="#fff" />;
        }))}
    </svg>
  );
}

window.FSWeb = Object.assign(window.FSWeb||{}, { SiteHeader, Hero, Ic, useLucide, LOGOS, NAV });
