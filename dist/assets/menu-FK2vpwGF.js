import{r as s,j as e,ct as I,p as O,C as H,B as S,w as v,ga as a,cc as o,ec as B,af as T,au as y,h as L,i as P,H as w}from"./index-OKHCej4L.js";import{C as E}from"./component-hero-X6jmTeIa.js";import{C as i}from"./component-block-Eim1tL7z.js";const C=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],A=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function N(){const[c,j]=s.useState(1),[r,d]=s.useState(null),[u,m]=s.useState(null),[h,p]=s.useState(null),k=s.useCallback(n=>{p(n.currentTarget)},[]),g=s.useCallback(n=>{m(n.currentTarget)},[]),f=s.useCallback((n,t)=>{j(t),m(null)},[]),M=s.useCallback(n=>{d(n.currentTarget)},[]),l=s.useCallback(()=>{d(null)},[]),x=s.useCallback(()=>{p(null)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(I,{heading:"Menu",links:[{name:"Components",href:O.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})}),e.jsx(H,{sx:{my:10},children:e.jsxs(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(i,{title:"Simple",children:[e.jsx(v,{variant:"outlined",onClick:M,children:"Open Menu"}),e.jsx(a,{id:"simple-menu",anchorEl:r,onClose:l,open:!!r,children:["Profile","My account","Logout"].map(n=>e.jsx(o,{selected:n==="Profile",onClick:l,children:n},n))})]}),e.jsxs(i,{title:"Selected",children:[e.jsx(B,{component:"nav","aria-label":"Device settings",children:e.jsx(T,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:g,children:e.jsx(y,{primary:"When device is locked",secondary:C[c]})})}),e.jsx(a,{id:"lock-menu",anchorEl:u,onClose:l,open:!!u,children:C.map((n,t)=>e.jsx(o,{disabled:t===0,selected:t===c,onClick:b=>f(b,t),children:n},n))})]}),e.jsxs(i,{title:"Max height",children:[e.jsx(L,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:k,children:e.jsx(P,{icon:"eva:more-vertical-fill"})}),e.jsx(a,{id:"long-menu",anchorEl:h,onClose:x,open:!!h,slotProps:{paper:{sx:{width:"20ch",maxHeight:48*4.5}}},children:A.map(n=>e.jsx(o,{selected:n==="Pyxis",onClick:x,children:n},n))})]})]})})]})}function G(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:" MUI: Accordion"})}),e.jsx(N,{})]})}export{G as default};
