import{j as r,N as l,T as p,y as x,r as c,p as b,C as v,S as y,H as C}from"./index-6b9YNlCU.js";import{C as R}from"./custom-breadcrumbs-KB-dcLue.js";import{C as k}from"./component-hero-ZlfpvXk7.js";import{C as a}from"./component-block-0B444uWv.js";import{M as f}from"./Masonry-tvBFsOXL.js";import{C as o}from"./CircularProgress-A1qORUTS.js";import"./index-q81m-9gd.js";import"./CardHeader-T304ptW8.js";const m=["inherit","primary","secondary","info","success","warning","error"];function j({progress:s,buffer:i}){const n=e=>r.jsx(p,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:e});return r.jsxs(f,{columns:{xs:1,md:2},spacing:3,children:[r.jsxs("div",{children:[n("Indeterminate"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:m.map(e=>r.jsx(l,{color:e,sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Determinate"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:m.map(e=>r.jsx(l,{color:e,value:s,variant:"determinate",sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Buffer"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:m.map(e=>r.jsx(l,{color:e,variant:"buffer",value:s,valueBuffer:i,sx:{mb:2,width:1}},e))})]}),r.jsxs("div",{children:[n("Query"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:m.map(e=>r.jsx(l,{color:e,variant:"query",value:s,valueBuffer:i,sx:{mb:2,width:1}},e))})]})]})}j.propTypes={buffer:x.number,progress:x.number};const P=["inherit","primary","secondary","info","success","warning","error"];function h({progress:s}){const i=n=>r.jsx(p,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:n});return r.jsxs(f,{columns:{xs:1,md:3},spacing:3,children:[r.jsxs("div",{children:[i("Indeterminate"),r.jsx(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:P.map(n=>r.jsx(o,{color:n},n))})]}),r.jsxs("div",{children:[i("Determinate"),r.jsxs(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:[r.jsx(o,{color:"info"}),r.jsx(o,{color:"info",variant:"determinate",value:25}),r.jsx(o,{color:"info",variant:"determinate",value:50}),r.jsx(o,{color:"info",variant:"determinate",value:75}),r.jsx(o,{color:"info",variant:"determinate",value:100}),r.jsx(o,{color:"info",variant:"determinate",value:s})]})]}),r.jsxs("div",{children:[i("Sizes"),r.jsxs(a,{sx:{bgcolor:"background.paper",borderRadius:1.5},children:[r.jsx(o,{size:48,color:"info"}),r.jsx(o,{color:"info"}),r.jsx(o,{size:32,color:"info"}),r.jsx(o,{size:24,color:"info"})]})]})]})}h.propTypes={progress:x.number};function L(){const[s,i]=c.useState(0),[n,e]=c.useState(10);c.useEffect(()=>{const t=setInterval(()=>{i(d=>{if(d===100)return 0;const g=Math.random()*10;return Math.min(d+g,100)})},500);return()=>{clearInterval(t)}},[]);const u=c.useRef(()=>{});return c.useEffect(()=>{u.current=()=>{if(s>100)i(0),e(10);else{const t=Math.random()*10,d=Math.random()*10;i(s+t),e(s+t+d)}}}),c.useEffect(()=>{const t=setInterval(()=>{u.current()},500);return()=>{clearInterval(t)}},[]),r.jsxs(r.Fragment,{children:[r.jsx(k,{children:r.jsx(R,{heading:"Progress",links:[{name:"Components",href:b.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})}),r.jsx(v,{sx:{my:10},children:r.jsxs(y,{spacing:5,children:[r.jsx(a,{title:"Circular",children:r.jsx(h,{progress:s})}),r.jsx(a,{title:"Linear",children:r.jsx(j,{progress:s,buffer:n})})]})})]})}function O(){return r.jsxs(r.Fragment,{children:[r.jsx(C,{children:r.jsx("title",{children:" MUI: Progress"})}),r.jsx(L,{})]})}export{O as default};
