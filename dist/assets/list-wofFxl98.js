import{aF as f,r as o,j as s,C as g,T as j,S as P,p as y,H as b}from"./index-AyhP95hO.js";import{u as C,a as L,P as O,b as T,c as w,d as F}from"./post-details-home-view-gJKgdkuI.js";import{o as a}from"./orderBy-b91dLs2Y.js";import{u as H}from"./use-debounce-pWM0Vfxn.js";import"./text-max-line-Xhr7U2ZF.js";import"./Zoom-kZAc7KOn.js";import"./_baseEach-i_s7DWor.js";function k(){const t=f(),[e,c]=o.useState("latest"),[i,l]=o.useState(""),n=H(i),{posts:d,postsLoading:u}=C(),{searchResults:m,searchLoading:h}=L(n),p=B({inputData:d,sortBy:e}),x=o.useCallback(r=>{c(r)},[]),S=o.useCallback(r=>{l(r)},[]);return s.jsxs(g,{maxWidth:t.themeStretch?!1:"lg",children:[s.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),s.jsxs(P,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(O,{query:n,results:m,onSearch:S,loading:h,hrefItem:r=>y.post.details(r)}),s.jsx(T,{sort:e,onSort:x,sortOptions:w})]}),s.jsx(F,{posts:p,loading:u})]})}const B=({inputData:t,sortBy:e})=>e==="latest"?a(t,["createdAt"],["desc"]):e==="oldest"?a(t,["createdAt"],["asc"]):e==="popular"?a(t,["totalViews"],["desc"]):t;function q(){return s.jsxs(s.Fragment,{children:[s.jsx(b,{children:s.jsx("title",{children:" Post: List"})}),s.jsx(k,{})]})}export{q as default};
