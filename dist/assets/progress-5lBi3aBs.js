import{j as r,ao as l,T as p,ad as u,r as c,bW as g,p as v,C as y,S as C,H as R}from"./index-4yL3xM3x.js";import{C as k}from"./component-hero-jDr-Aodb.js";import{C as i}from"./component-block-Bv1IObcX.js";import{M as f}from"./Masonry-QTMX9fm3.js";import{C as o}from"./CircularProgress-gwCWj6_h.js";const x=["inherit","primary","secondary","info","success","warning","error"];function j({progress:s,buffer:a}){const n=e=>r.jsx(p,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:e});return r.jsxs(f,{columns:{xs:1,md:2},spacing:3,children:[r.jsxs("div",{children:[n("Indeterminate"),r.jsx(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Determinate"),r.jsx(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,value:s,variant:"determinate",sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Buffer"),r.jsx(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,variant:"buffer",value:s,valueBuffer:a,sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Query"),r.jsx(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:x.map(e=>r.jsx(l,{color:e,variant:"query",value:s,valueBuffer:a,sx:{mb:2,width:1}},e))})]})]})}j.propTypes={buffer:u.number,progress:u.number};const P=["inherit","primary","secondary","info","success","warning","error"];function h({progress:s}){const a=n=>r.jsx(p,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:n});return r.jsxs(f,{columns:{xs:1,md:3},spacing:3,children:[r.jsxs("div",{children:[a("Indeterminate"),r.jsx(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:P.map(n=>r.jsx(o,{color:n},n))})]}),r.jsxs("div",{children:[a("Determinate"),r.jsxs(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:[r.jsx(o,{color:"info"}),r.jsx(o,{color:"info",variant:"determinate",value:25}),r.jsx(o,{color:"info",variant:"determinate",value:50}),r.jsx(o,{color:"info",variant:"determinate",value:75}),r.jsx(o,{color:"info",variant:"determinate",value:100}),r.jsx(o,{color:"info",variant:"determinate",value:s})]})]}),r.jsxs("div",{children:[a("Sizes"),r.jsxs(i,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:[r.jsx(o,{size:48,color:"info"}),r.jsx(o,{color:"info"}),r.jsx(o,{size:32,color:"info"}),r.jsx(o,{size:24,color:"info"})]})]})]})}h.propTypes={progress:u.number};function L(){const[s,a]=c.useState(0),[n,e]=c.useState(10);c.useEffect(()=>{const t=setInterval(()=>{a(d=>{if(d===100)return 0;const b=Math.random()*10;return Math.min(d+b,100)})},500);return()=>{clearInterval(t)}},[]);const m=c.useRef(()=>{});return c.useEffect(()=>{m.current=()=>{if(s>100)a(0),e(10);else{const t=Math.random()*10,d=Math.random()*10;a(s+t),e(s+t+d)}}}),c.useEffect(()=>{const t=setInterval(()=>{m.current()},500);return()=>{clearInterval(t)}},[]),r.jsxs(r.Fragment,{children:[r.jsx(k,{children:r.jsx(g,{heading:"Progress",links:[{name:"Components",href:v.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})}),r.jsx(y,{sx:{my:10},children:r.jsxs(C,{spacing:5,children:[r.jsx(i,{title:"Circular",children:r.jsx(h,{progress:s})}),r.jsx(i,{title:"Linear",children:r.jsx(j,{progress:s,buffer:n})})]})})]})}function E(){return r.jsxs(r.Fragment,{children:[r.jsx(R,{children:r.jsx("title",{children:" MUI: Progress"})}),r.jsx(L,{})]})}export{E as default};
