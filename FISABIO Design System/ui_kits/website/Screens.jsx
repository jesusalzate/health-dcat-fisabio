/* FISABIO website UI kit — full screens composed from sections. */
const { Tabs: FTabs, Badge: FBg, Button: FB2, Stat: FSt, Card: FCd } = window.FISABIODesignSystem_61892e;
const W = window.FSWeb;

function HomeScreen({ go }) {
  return (
    <div>
      <W.Hero go={go} />
      <W.AreasGrid limit={6} onOpen={()=>go("areas")} />
      <W.ImpactBand />
      <W.NewsList onOpen={()=>go("article")} />
    </div>
  );
}

function AreasScreen({ go }) {
  W.useLucide();
  const [tab,setTab] = React.useState("totes");
  return (
    <div>
      <div style={{background:"var(--surface-subtle)",borderBottom:"1px solid var(--border)"}}>
        <div style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"48px 32px 0"}}>
          <div style={{display:"flex",gap:8,alignItems:"center",fontFamily:"var(--font-mono)",fontSize:12,
            color:"var(--text-muted)",marginBottom:16}}>
            <a href="#" onClick={(e)=>{e.preventDefault();go("home");}} style={{color:"inherit"}}>Inici</a>
            <W.Ic n="chevron-right" size={13}/><span style={{color:"var(--text-strong)"}}>Investigació</span></div>
          <span className="fs-eyebrow">Investigació</span>
          <h1 style={{fontSize:"var(--text-5xl)",margin:"12px 0 14px",maxWidth:"18ch"}}>Àrees i grups d'investigació</h1>
          <p style={{fontSize:"var(--text-lg)",color:"var(--text-body)",maxWidth:"52ch",marginBottom:26}}>
            Més de 120 grups treballen en sis grans àrees, des de la salut pública fins a la genòmica.</p>
          <FTabs tabs={[{id:"totes",label:"Totes"},{id:"publica",label:"Salut Pública"},
            {id:"genomica",label:"Genòmica"},{id:"clinica",label:"Clínica"}]} value={tab} onChange={setTab}/>
        </div>
      </div>
      <section style={{maxWidth:"var(--content-max)",margin:"0 auto",padding:"40px 32px 84px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
          {W.AREAS.map((a)=>(
            <FCd key={a.title} interactive onClick={()=>go("article")}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
                <div style={{display:"grid",placeItems:"center",width:46,height:46,borderRadius:"var(--radius-md)",
                  background:"var(--fs-indigo-50)",color:"var(--brand)"}}><W.Ic n={a.icon} size={22}/></div>
                <FBg variant="soft">{a.tag}</FBg>
              </div>
              <h3 style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"var(--text-lg)",
                color:"var(--text-strong)",margin:"0 0 6px"}}>{a.title}</h3>
              <p style={{fontSize:"var(--text-sm)",color:"var(--text-body)",lineHeight:1.6,margin:"0 0 14px"}}>{a.desc}</p>
              <div style={{display:"flex",alignItems:"center",gap:7,color:"var(--text-muted)",fontSize:13,
                fontFamily:"var(--font-mono)"}}><W.Ic n="users" size={14}/>{a.n}</div>
            </FCd>
          ))}
        </div>
      </section>
    </div>
  );
}

function ArticleScreen({ go }) {
  W.useLucide();
  return (
    <div>
      <div style={{height:340,background:"linear-gradient(135deg,var(--fs-indigo-800),var(--fs-coral-600))",
        position:"relative"}}>
        <div style={{maxWidth:"760px",margin:"0 auto",padding:"0 32px",height:"100%",
          display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:34}}>
          <div style={{display:"flex",gap:8,alignItems:"center",fontFamily:"var(--font-mono)",fontSize:12,
            color:"rgba(255,255,255,.8)",marginBottom:14}}>
            <a href="#" onClick={(e)=>{e.preventDefault();go("home");}} style={{color:"inherit"}}>Actualitat</a>
            <W.Ic n="chevron-right" size={13}/><span style={{color:"#fff"}}>Genòmica</span></div>
          <span style={{marginBottom:14}}><FBg variant="solid">Genòmica</FBg></span>
          <h1 style={{color:"#fff",fontSize:"var(--text-4xl)",margin:0,maxWidth:"22ch",lineHeight:1.08}}>
            Un nou consorci europeu situa FISABIO en la vanguarda del microbioma</h1>
        </div>
      </div>
      <article style={{maxWidth:"680px",margin:"0 auto",padding:"40px 32px 80px"}}>
        <div style={{display:"flex",alignItems:"center",gap:14,paddingBottom:24,marginBottom:30,
          borderBottom:"1px solid var(--border)"}}>
          <div style={{width:44,height:44,borderRadius:"50%",background:"var(--fs-indigo-100)",
            display:"grid",placeItems:"center",color:"var(--brand)",fontFamily:"var(--font-display)",fontWeight:700}}>FS</div>
          <div><div style={{fontFamily:"var(--font-display)",fontWeight:600,color:"var(--text-strong)"}}>Gabinet de Comunicació</div>
            <div style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-muted)",whiteSpace:"nowrap"}}>18 JUN 2025 · 4 min de lectura</div></div>
          <button style={{marginLeft:"auto",display:"grid",placeItems:"center",width:40,height:40,
            border:"1px solid var(--border-strong)",borderRadius:"50%",background:"#fff",color:"var(--brand)",cursor:"pointer"}}>
            <W.Ic n="share-2" size={16}/></button>
        </div>
        <div className="fs-prose" style={{fontSize:17}}>
          <p style={{fontSize:20,color:"var(--text-strong)",fontWeight:500}}>La fundació liderarà la pota valenciana
            d'un projecte de 14 milions d'euros per cartografiar el microbioma humà i el seu paper en la malaltia crònica.</p>
          <p>El consorci, format per dotze institucions de set països, situa la Comunitat Valenciana al centre
            d'una de les línies de recerca biomèdica amb major projecció de la dècada. La participació de FISABIO
            es concentra en la seqüenciació d'alt rendiment i l'anàlisi bioinformàtica de mostres poblacionals.</p>
          <blockquote style={{margin:"28px 0",padding:"4px 0 4px 22px",borderLeft:"3px solid var(--accent)",
            fontFamily:"var(--font-display)",fontSize:22,fontWeight:500,color:"var(--text-strong)",lineHeight:1.35}}>
            «És una oportunitat única per traduir la recerca bàsica en millores tangibles per a la salut de la població.»</blockquote>
          <p>Els primers resultats s'esperen per al segon semestre de 2026, amb la creació d'una plataforma
            de dades oberta per a la comunitat científica internacional.</p>
        </div>
        <div style={{marginTop:36,display:"flex",gap:12}}>
          <FB2 variant="primary" onClick={()=>go("home")} icon={<W.Ic n="arrow-left"/>}>Torna a l'inici</FB2>
          <FB2 variant="secondary">Compartir</FB2>
        </div>
      </article>
    </div>
  );
}

window.FSWeb = Object.assign(window.FSWeb||{}, { HomeScreen, AreasScreen, ArticleScreen });
