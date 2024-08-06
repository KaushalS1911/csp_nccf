import{bb as x,bc as u,ay as p,T as j,r as f,b4 as T,b5 as g,j as t,b3 as A,b7 as v,b8 as y,cu as C,p as b,C as k,A as e,D as n,a4 as w,H as M}from"./index-AyhP95hO.js";import{C as U}from"./component-hero-FXW6jF7h.js";import{C as r}from"./component-block-fJyFI6v9.js";import{M as z}from"./Masonry-CD1AhDkp.js";function R(s){return x("MuiAlertTitle",s)}u("MuiAlertTitle",["root"]);const F=["className"],B=s=>{const{classes:i}=s;return y({root:["root"]},R,i)},H=p(j,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(s,i)=>i.root})(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2})),L=f.forwardRef(function(i,l){const a=T({props:i,name:"MuiAlertTitle"}),{className:d}=a,h=g(a,F),c=a,m=B(c);return t.jsx(H,A({gutterBottom:!0,component:"div",ownerState:c,ref:l,className:v(m.root,d)},h))}),N=L,o=["info","success","warning","error"];function O(){return t.jsxs(t.Fragment,{children:[t.jsx(U,{children:t.jsx(C,{heading:"Alert",links:[{name:"Components",href:b.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})}),t.jsx(k,{sx:{my:10},children:t.jsxs(z,{columns:{xs:1,sm:2},spacing:3,children:[t.jsx(r,{title:"Standard",children:o.map(s=>t.jsxs(e,{severity:s,onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Filled",children:o.map(s=>t.jsxs(e,{severity:s,variant:"filled",onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Outlined",children:o.map(s=>t.jsxs(e,{severity:s,variant:"outlined",onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Description",children:o.map(s=>t.jsxs(e,{severity:s,onClose:()=>{},sx:{width:1},children:[t.jsxs(N,{sx:{textTransform:"capitalize"},children:[" ",s," "]}),"This is an ",s," alert — ",t.jsx("strong",{children:"check it out!"})]},s))}),t.jsxs(r,{title:"Actions",children:[t.jsx(e,{severity:"info",sx:{width:1},action:t.jsx(n,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),t.jsx(e,{severity:"info",variant:"filled",sx:{width:1},action:t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:s=>`1px solid ${w(s.palette.common.white,.48)}`},children:"Undo"}),t.jsx(n,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),t.jsx(e,{severity:"info",variant:"outlined",sx:{width:1},action:t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),t.jsx(n,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})]})})]})}function D(){return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:t.jsx("title",{children:" MUI: Alert"})}),t.jsx(O,{})]})}export{D as default};
