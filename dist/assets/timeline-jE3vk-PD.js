import{ax as M,T as j,b2 as h,r as y,b3 as w,b4 as O,j as e,b6 as I,b7 as R,ct as P,p as S,C as E,V as N,a3 as L,i as l,H as A}from"./index-A8uSmfRr.js";import{C as D}from"./component-hero-6Uv6ht7O.js";import{C as r}from"./component-block-weNLDXy7.js";import{M as F}from"./Masonry-IGXipiTg.js";import{f as T,g as H,h as U,T as c,a,b as x,c as d,d as m,e as p}from"./TimelineItem-0zSo8y5y.js";const _=["className"],B=i=>{const{position:t,classes:s}=i,o={root:["root",T(t)]};return R(o,U,s)},V=M(j,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:s}=i;return[t.root,t[T(s.position)]]}})(({ownerState:i})=>h({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},i.position==="left"&&{textAlign:"left"})),C=y.forwardRef(function(t,s){const o=w({props:t,name:"MuiTimelineOppositeContent"}),{className:g}=o,k=O(o,_),{position:b}=y.useContext(H),u=h({},o,{position:b||"left"}),v=B(u);return e.jsx(V,h({component:"div",className:I(v.root,g),ownerState:u,ref:s},k))});C.muiName="TimelineOppositeContent";const f=C,n=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:e.jsx(l,{icon:"eva:folder-add-fill",width:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:e.jsx(l,{icon:"eva:image-2-fill",width:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:e.jsx(l,{icon:"eva:pantone-fill",width:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:e.jsx(l,{icon:"eva:tv-fill",width:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:e.jsx(l,{icon:"eva:activity-fill",width:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:e.jsx(l,{icon:"eva:cube-fill",width:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:e.jsx(l,{icon:"eva:film-fill",width:24})}];function W(){const i=n[n.length-1].key,t=n.slice(n.length-3);return e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsx(P,{heading:"Timeline",links:[{name:"Components",href:S.components},{name:"Timeline"}],moreLink:["https://mui.com/components/timeline"]})}),e.jsxs(E,{sx:{my:10},children:[e.jsxs(F,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(r,{title:"Default",children:e.jsx(c,{children:t.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Right",children:e.jsx(c,{position:"right",children:t.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Alternating",children:e.jsx(c,{position:"alternate",children:t.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Filled",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Outlined",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{variant:"outlined",color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Opposite content",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsx(f,{children:e.jsx(j,{sx:{color:"text.secondary"},children:s.time})}),e.jsxs(x,{children:[e.jsx(d,{color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:e.jsxs(j,{children:[" ",s.title]})})]},s.key))})})]}),e.jsx(r,{title:"Customized",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsx(f,{children:e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.time})}),e.jsxs(x,{children:[e.jsx(d,{color:s.color,children:s.icon}),e.jsx(m,{})]}),e.jsx(p,{children:e.jsxs(N,{sx:{p:3,bgcolor:o=>L(o.palette.grey[500],.12)},children:[e.jsx(j,{variant:"subtitle2",children:s.title}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.des})]})})]},s.key))})})]})]})}function K(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" MUI: Timeline"})}),e.jsx(W,{})]})}export{K as default};