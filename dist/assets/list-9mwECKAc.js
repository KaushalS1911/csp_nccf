import{aF as f,r as o,j as s,C as g,T as j,S as P,p as y,H as b}from"./index-C8MvU68k.js";import"./_baseToString-99KzpFQn.js";import{u as C,a as L,P as O,b as T,c as w,d as F}from"./post-details-home-view-winhTM-O.js";import{o as a}from"./orderBy-0g9N2iKQ.js";import{u as H}from"./use-debounce-GPk5WkmR.js";import"./text-max-line-ONblrHWl.js";import"./Pagination-9VD7hwAS.js";import"./markdown-KP1mUT4r.js";import"./LoadingButton-WMfiV3kn.js";import"./CircularProgress-3TyCY-Xe.js";import"./CardContent-3zRs8IxD.js";import"./Skeleton-kv9aS-VR.js";import"./Fab-63I5Z8ji.js";import"./Zoom-UBjILxMW.js";import"./_baseIteratee-isgI34Kt.js";import"./_baseEach-a8BcqFGC.js";function k(){const t=f(),[e,i]=o.useState("latest"),[c,m]=o.useState(""),n=H(c),{posts:l,postsLoading:p}=C(),{searchResults:d,searchLoading:u}=L(n),h=B({inputData:l,sortBy:e}),x=o.useCallback(r=>{i(r)},[]),S=o.useCallback(r=>{m(r)},[]);return s.jsxs(g,{maxWidth:t.themeStretch?!1:"lg",children:[s.jsx(j,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Blog"}),s.jsxs(P,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(O,{query:n,results:d,onSearch:S,loading:u,hrefItem:r=>y.post.details(r)}),s.jsx(T,{sort:e,onSort:x,sortOptions:w})]}),s.jsx(F,{posts:h,loading:p})]})}const B=({inputData:t,sortBy:e})=>e==="latest"?a(t,["createdAt"],["desc"]):e==="oldest"?a(t,["createdAt"],["asc"]):e==="popular"?a(t,["totalViews"],["desc"]):t;function U(){return s.jsxs(s.Fragment,{children:[s.jsx(b,{children:s.jsx("title",{children:" Post: List"})}),s.jsx(k,{})]})}export{U as default};
