import{r as j,j as n,bW as u,p as f,C as g,S as C,i as c,T as o,fB as r,H as A}from"./index-4yL3xM3x.js";import{C as v}from"./component-hero-jDr-Aodb.js";import{C as l}from"./component-block-Bv1IObcX.js";import{A as d,a as t,b as h}from"./AccordionSummary-onf5C7KS.js";const x=[...Array(4)].map((i,s)=>({id:r.id(s),value:`panel${s+1}`,heading:`Accordion ${s+1}`,subHeading:r.postTitle(s),detail:r.description(s)}));function b(){const[i,s]=j.useState(!1),p=e=>(a,m)=>{s(m?e:!1)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{children:n.jsx(u,{heading:"Accordion",links:[{name:"Components",href:f.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})}),n.jsx(g,{sx:{my:10},children:n.jsxs(C,{spacing:5,children:[n.jsx(l,{title:"Simple",spacing:0,children:x.map((e,a)=>n.jsxs(d,{disabled:a===3,children:[n.jsx(t,{expandIcon:n.jsx(c,{icon:"eva:arrow-ios-downward-fill"}),children:n.jsx(o,{variant:"subtitle1",children:e.heading})}),n.jsx(h,{children:n.jsx(o,{children:e.detail})})]},e.value))}),n.jsx(l,{title:"Controlled",spacing:0,children:x.map((e,a)=>n.jsxs(d,{disabled:a===3,expanded:i===e.value,onChange:p(e.value),children:[n.jsxs(t,{expandIcon:n.jsx(c,{icon:"eva:arrow-ios-downward-fill"}),children:[n.jsx(o,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),n.jsx(o,{sx:{color:"text.secondary"},children:e.subHeading})]}),n.jsx(h,{children:n.jsx(o,{children:e.detail})})]},e.value))})]})})]})}function H(){return n.jsxs(n.Fragment,{children:[n.jsx(A,{children:n.jsx("title",{children:" MUI: Accordion"})}),n.jsx(b,{})]})}export{H as default};
