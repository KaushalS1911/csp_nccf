import{j as s,cv as l,p,C as x,S as r,q as a,bM as t,B as n,ak as i,T as c,gi as m,H as j}from"./index-fhA8hu8c.js";import{C as h}from"./component-hero-BFyHkDk7.js";const g=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"],o=g.map((e,d)=>({ratio:e,url:m.image.cover(d+1)}));function u(){return s.jsxs(s.Fragment,{children:[s.jsx(h,{children:s.jsx(l,{heading:"Image",links:[{name:"Components",href:p.components},{name:"Image"}]})}),s.jsx(x,{sx:{my:10},children:s.jsxs(r,{spacing:5,children:[s.jsxs(a,{children:[s.jsx(t,{title:"List"}),s.jsx(n,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:o.map(e=>s.jsx(i,{alt:e.ratio,src:e.url,sx:{borderRadius:2}},e.ratio))})]}),s.jsxs(a,{children:[s.jsx(t,{title:"Aspect Ratio"}),s.jsx(n,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:o.map(e=>s.jsxs(r,{spacing:1,children:[s.jsx(c,{variant:"overline",sx:{color:"text.secondary"},children:e.ratio}),s.jsx(i,{alt:e.ratio,src:e.url,ratio:e.ratio,sx:{borderRadius:2}})]},e.ratio))})]})]})})]})}function I(){return s.jsxs(s.Fragment,{children:[s.jsx(j,{children:s.jsx("title",{children:" Components: Image"})}),s.jsx(u,{})]})}export{I as default};