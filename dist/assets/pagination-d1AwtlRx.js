import{r as s,j as t,cu as j,p as h,C as p,ck as n,gF as g,H as m}from"./index-KMW5Xsh7.js";import{C as P}from"./component-hero-cfXy4Qb9.js";import{C as e}from"./component-block-fAsSYedI.js";import{M as C}from"./Masonry-wvOd3hNf.js";const o=["standard","primary","secondary","info","success","warning","error"],v=["small","medium","large"];function f(){const[i,r]=s.useState(2),[u,c]=s.useState(10),d=s.useCallback((a,x)=>{r(x)},[]),l=s.useCallback(a=>{c(parseInt(a.target.value,10)),r(0)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(P,{children:t.jsx(j,{heading:"Pagination",links:[{name:"Components",href:h.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})}),t.jsx(p,{sx:{my:10},children:t.jsxs(C,{columns:{xs:1,md:2},spacing:3,children:[t.jsxs(e,{title:"Circular",children:[t.jsx(n,{shape:"circular",count:10,variant:"text"}),t.jsx(n,{shape:"circular",count:10,variant:"text",disabled:!0}),t.jsx(n,{shape:"circular",count:10,variant:"outlined"}),t.jsx(n,{shape:"circular",count:10,variant:"outlined",disabled:!0}),t.jsx(n,{shape:"circular",count:10,variant:"soft"}),t.jsx(n,{shape:"circular",count:10,variant:"soft",disabled:!0})]}),t.jsxs(e,{title:"Rounded",children:[t.jsx(n,{shape:"rounded",count:10,variant:"text"}),t.jsx(n,{shape:"rounded",count:10,variant:"text",disabled:!0}),t.jsx(n,{shape:"rounded",count:10,variant:"outlined"}),t.jsx(n,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),t.jsx(n,{shape:"rounded",count:10,variant:"soft"}),t.jsx(n,{shape:"rounded",count:10,variant:"soft",disabled:!0})]}),t.jsxs(e,{title:"Colors",children:[o.map(a=>t.jsx(n,{color:a,count:10,variant:"text"},a)),o.map(a=>t.jsx(n,{color:a,count:10,variant:"outlined"},a)),o.map(a=>t.jsx(n,{color:a,count:10,variant:"soft"},a))]}),t.jsx(e,{title:"Sizes",children:v.map(a=>t.jsx(n,{count:10,size:a},a))}),t.jsxs(e,{title:"Buttons",children:[t.jsx(n,{count:10,showFirstButton:!0,showLastButton:!0}),t.jsx(n,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),t.jsxs(e,{title:"Ranges",children:[t.jsx(n,{count:11,defaultPage:6,siblingCount:0}),t.jsx(n,{count:11,defaultPage:6}),t.jsx(n,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),t.jsx(n,{count:11,defaultPage:6,boundaryCount:2})]}),t.jsx(e,{title:"Table",children:t.jsx(g,{component:"div",count:100,page:i,onPageChange:d,rowsPerPage:u,onRowsPerPageChange:l})})]})})]})}function k(){return t.jsxs(t.Fragment,{children:[t.jsx(m,{children:t.jsx("title",{children:" MUI: Pagination"})}),t.jsx(f,{})]})}export{k as default};