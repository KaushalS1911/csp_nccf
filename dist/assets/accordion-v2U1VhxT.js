import{r as j,j as n,cu as u,p as g,C as f,S as C,i as c,T as o,g7 as r,H as A}from"./index-AyhP95hO.js";import{C as v}from"./component-hero-FXW6jF7h.js";import{C as l}from"./component-block-fJyFI6v9.js";import{A as d,a as t,b as h}from"./AccordionSummary-WsQ9OC7v.js";const x=[...Array(4)].map((i,s)=>({id:r.id(s),value:`panel${s+1}`,heading:`Accordion ${s+1}`,subHeading:r.postTitle(s),detail:r.description(s)}));function b(){const[i,s]=j.useState(!1),p=e=>(a,m)=>{s(m?e:!1)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{children:n.jsx(u,{heading:"Accordion",links:[{name:"Components",href:g.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})}),n.jsx(f,{sx:{my:10},children:n.jsxs(C,{spacing:5,children:[n.jsx(l,{title:"Simple",spacing:0,children:x.map((e,a)=>n.jsxs(d,{disabled:a===3,children:[n.jsx(t,{expandIcon:n.jsx(c,{icon:"eva:arrow-ios-downward-fill"}),children:n.jsx(o,{variant:"subtitle1",children:e.heading})}),n.jsx(h,{children:n.jsx(o,{children:e.detail})})]},e.value))}),n.jsx(l,{title:"Controlled",spacing:0,children:x.map((e,a)=>n.jsxs(d,{disabled:a===3,expanded:i===e.value,onChange:p(e.value),children:[n.jsxs(t,{expandIcon:n.jsx(c,{icon:"eva:arrow-ios-downward-fill"}),children:[n.jsx(o,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),n.jsx(o,{sx:{color:"text.secondary"},children:e.subHeading})]}),n.jsx(h,{children:n.jsx(o,{children:e.detail})})]},e.value))})]})})]})}function H(){return n.jsxs(n.Fragment,{children:[n.jsx(A,{children:n.jsx("title",{children:" MUI: Accordion"})}),n.jsx(b,{})]})}export{H as default};
