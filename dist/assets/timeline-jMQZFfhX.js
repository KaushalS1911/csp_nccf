import{O as M,T as j,_ as h,r as y,U as w,X as O,j as e,Y as I,a0 as R,bW as P,p as S,C as E,K as N,a9 as L,i as l,H as U}from"./index-4yL3xM3x.js";import{C as _}from"./component-hero-jDr-Aodb.js";import{C as r}from"./component-block-Bv1IObcX.js";import{M as A}from"./Masonry-QTMX9fm3.js";import{f as T,g as D,h as F,T as c,a,b as x,c as d,d as m,e as p}from"./TimelineItem-4SIjAbRq.js";const H=["className"],W=i=>{const{position:t,classes:s}=i,o={root:["root",T(t)]};return R(o,F,s)},B=M(j,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:s}=i;return[t.root,t[T(s.position)]]}})(({ownerState:i})=>h({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},i.position==="left"&&{textAlign:"left"})),C=y.forwardRef(function(t,s){const o=w({props:t,name:"MuiTimelineOppositeContent"}),{className:g}=o,k=O(o,H),{position:v}=y.useContext(D),u=h({},o,{position:v||"left"}),b=W(u);return e.jsx(B,h({component:"div",className:I(b.root,g),ownerState:u,ref:s},k))});C.muiName="TimelineOppositeContent";const f=C,n=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:e.jsx(l,{icon:"eva:folder-add-fill",width:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:e.jsx(l,{icon:"eva:image-2-fill",width:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:e.jsx(l,{icon:"eva:pantone-fill",width:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:e.jsx(l,{icon:"eva:tv-fill",width:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:e.jsx(l,{icon:"eva:activity-fill",width:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:e.jsx(l,{icon:"eva:cube-fill",width:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:e.jsx(l,{icon:"eva:film-fill",width:24})}];function z(){const i=n[n.length-1].key,t=n.slice(n.length-3);return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(P,{heading:"Timeline",links:[{name:"Components",href:S.components},{name:"Timeline"}],moreLink:["https://mui.com/components/timeline"]})}),e.jsxs(E,{sx:{my:10},children:[e.jsxs(A,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(r,{title:"Default",children:e.jsx(c,{children:t.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Right",children:e.jsx(c,{position:"right",children:t.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Alternating",children:e.jsx(c,{position:"alternate",children:t.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Filled",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Outlined",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[e.jsx(d,{variant:"outlined",color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:s.title})]},s.key))})}),e.jsx(r,{title:"Opposite content",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsx(f,{children:e.jsx(j,{sx:{color:"text.secondary"},children:s.time})}),e.jsxs(x,{children:[e.jsx(d,{color:s.color}),i===s.key?null:e.jsx(m,{})]}),e.jsx(p,{children:e.jsxs(j,{children:[" ",s.title]})})]},s.key))})})]}),e.jsx(r,{title:"Customized",children:e.jsx(c,{position:"alternate",children:n.map(s=>e.jsxs(a,{children:[e.jsx(f,{children:e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.time})}),e.jsxs(x,{children:[e.jsx(d,{color:s.color,children:s.icon}),e.jsx(m,{})]}),e.jsx(p,{children:e.jsxs(N,{sx:{p:3,bgcolor:o=>L(o.palette.grey[500],.12)},children:[e.jsx(j,{variant:"subtitle2",children:s.title}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.des})]})})]},s.key))})})]})]})}function q(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" MUI: Timeline"})}),e.jsx(z,{})]})}export{q as default};
