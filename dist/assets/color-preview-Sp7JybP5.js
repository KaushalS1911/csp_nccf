import{r as f,j as a,S as h,ba as j,a1 as d,i as m,a5 as t,B as g}from"./index-qJigJXRM.js";const b=f.forwardRef(({colors:i,selected:e,onSelectColor:o,limit:p="auto",sx:c,...x},u)=>{const r=typeof e=="string",y=f.useCallback(n=>{if(r)n!==e&&o(n);else{const l=e.includes(n)?e.filter(s=>s!==n):[...e,n];o(l)}},[o,e,r]);return a.jsx(h,{ref:u,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...p!=="auto"&&{width:p*36,justifyContent:"flex-end"},...c},...x,children:i.map(n=>{const l=r?e===n:e.includes(n);return a.jsx(j,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{y(n)},children:a.jsx(h,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:n,borderRadius:"50%",border:s=>`solid 1px ${d(s.palette.grey[500],.16)}`,...l&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${d(n,.48)}`,outline:`solid 2px ${d(n,.08)}`,transition:s=>s.transitions.create("all",{duration:s.transitions.duration.shortest})}},children:a.jsx(m,{width:l?12:0,icon:"eva:checkmark-fill",sx:{color:s=>s.palette.getContrastText(n),transition:s=>s.transitions.create("all",{duration:s.transitions.duration.shortest})}})})},n)})})});b.propTypes={colors:t.oneOfType([t.string,t.arrayOf(t.string)]),limit:t.number,onSelectColor:t.func,selected:t.oneOfType([t.string,t.arrayOf(t.string)]),sx:t.object};const k=b;function w({colors:i,limit:e=3,sx:o}){const p=i.slice(0,e),c=i.length-e;return a.jsxs(h,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:o,children:[p.map((x,u)=>a.jsx(g,{sx:{ml:-.75,width:16,height:16,bgcolor:x,borderRadius:"50%",border:r=>`solid 2px ${r.palette.background.paper}`,boxShadow:r=>`inset -1px 1px 2px ${d(r.palette.common.black,.24)}`}},x+u)),i.length>e&&a.jsx(g,{component:"span",sx:{typography:"subtitle2"},children:`+${c}`})]})}w.propTypes={colors:t.arrayOf(t.string),limit:t.number,sx:t.object};export{w as C,k as a};