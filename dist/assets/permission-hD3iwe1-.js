import{aE as d,r,j as e,C as u,bW as m,p as x,fG as h,B as c,m as p,bK as g,T as j,H as b}from"./index-rcXNTvDP.js";import{T as f,a as i}from"./ToggleButtonGroup-jFwdRLAc.js";function v(){const n=d(),[a,t]=r.useState("admin"),l=r.useCallback((o,s)=>{s!==null&&t(s)},[]);return e.jsxs(u,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(m,{heading:"Permission Denied",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Permission Denied"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(f,{exclusive:!0,value:a,size:"small",onChange:l,sx:{mb:5},children:[e.jsx(i,{value:"admin","aria-label":"admin role",children:"isAdmin"}),e.jsx(i,{value:"user","aria-label":"user role",children:"isUser"})]}),e.jsx(h,{hasContent:!0,roles:[a],sx:{py:10},children:e.jsx(c,{gap:3,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[...Array(8)].map((o,s)=>e.jsxs(p,{children:[e.jsx(g,{title:`Card ${s+1}`,subheader:"Proin viverra ligula"}),e.jsx(j,{variant:"body2",sx:{px:3,py:2,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},s))})})]})}function D(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:" Dashboard: Permission Denied"})}),e.jsx(v,{})]})}export{D as default};
