import{r as s,j as t,bY as j,p as h,C as m,e6 as p,H as g}from"./index-8oEAyshB.js";import{C as P}from"./component-hero-ZuglGT4k.js";import{C as a}from"./component-block-SwyO0YRk.js";import{M as C}from"./Masonry-BgTYXhDU.js";import{P as n}from"./Pagination-wGti3Pjw.js";const o=["standard","primary","secondary","info","success","warning","error"],f=["small","medium","large"];function v(){const[i,r]=s.useState(2),[u,c]=s.useState(10),d=s.useCallback((e,x)=>{r(x)},[]),l=s.useCallback(e=>{c(parseInt(e.target.value,10)),r(0)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(P,{children:t.jsx(j,{heading:"Pagination",links:[{name:"Components",href:h.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})}),t.jsx(m,{sx:{my:10},children:t.jsxs(C,{columns:{xs:1,md:2},spacing:3,children:[t.jsxs(a,{title:"Circular",children:[t.jsx(n,{shape:"circular",count:10,variant:"text"}),t.jsx(n,{shape:"circular",count:10,variant:"text",disabled:!0}),t.jsx(n,{shape:"circular",count:10,variant:"outlined"}),t.jsx(n,{shape:"circular",count:10,variant:"outlined",disabled:!0}),t.jsx(n,{shape:"circular",count:10,variant:"soft"}),t.jsx(n,{shape:"circular",count:10,variant:"soft",disabled:!0})]}),t.jsxs(a,{title:"Rounded",children:[t.jsx(n,{shape:"rounded",count:10,variant:"text"}),t.jsx(n,{shape:"rounded",count:10,variant:"text",disabled:!0}),t.jsx(n,{shape:"rounded",count:10,variant:"outlined"}),t.jsx(n,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),t.jsx(n,{shape:"rounded",count:10,variant:"soft"}),t.jsx(n,{shape:"rounded",count:10,variant:"soft",disabled:!0})]}),t.jsxs(a,{title:"Colors",children:[o.map(e=>t.jsx(n,{color:e,count:10,variant:"text"},e)),o.map(e=>t.jsx(n,{color:e,count:10,variant:"outlined"},e)),o.map(e=>t.jsx(n,{color:e,count:10,variant:"soft"},e))]}),t.jsx(a,{title:"Sizes",children:f.map(e=>t.jsx(n,{count:10,size:e},e))}),t.jsxs(a,{title:"Buttons",children:[t.jsx(n,{count:10,showFirstButton:!0,showLastButton:!0}),t.jsx(n,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),t.jsxs(a,{title:"Ranges",children:[t.jsx(n,{count:11,defaultPage:6,siblingCount:0}),t.jsx(n,{count:11,defaultPage:6}),t.jsx(n,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),t.jsx(n,{count:11,defaultPage:6,boundaryCount:2})]}),t.jsx(a,{title:"Table",children:t.jsx(p,{component:"div",count:100,page:i,onPageChange:d,rowsPerPage:u,onRowsPerPageChange:l})})]})})]})}function S(){return t.jsxs(t.Fragment,{children:[t.jsx(g,{children:t.jsx("title",{children:" MUI: Pagination"})}),t.jsx(v,{})]})}export{S as default};