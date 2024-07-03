import{ax as T,c as R,r as i,az as _,eO as S,j as s,S as p,p as x,cV as B,dc as I,eN as L,eK as N,eJ as w,eR as k,C as P,bY as q,v,R as Y,i as A,aF as H,H as M}from"./index-8oEAyshB.js";import{o as u}from"./orderBy-6Plcx1b3.js";import{a as V,b as z,c as K,d as W,e as X}from"./job-details-view-QLtgMXRb.js";import"./_baseToString-F-N5B_3O.js";import"./_baseIteratee-8pHP-8PR.js";import"./_baseEach-OHMKNVFO.js";import"./Pagination-wGti3Pjw.js";import"./country-select-a_JIPmpl.js";import"./DatePicker-Bueyo1m-.js";import"./LoadingButton-Qy0ELVUm.js";import"./CircularProgress-XcS_0YSz.js";import"./markdown-KnvcduF3.js";const j={roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]};function G(){const e=T(),c=R(),[a,f]=i.useState("latest"),[n,d]=i.useState({query:"",results:[]}),[l,m]=i.useState(j),o=Q({inputData:S,filters:l,sortBy:a}),r=!_(j,l),F=!o.length&&r,O=i.useCallback((t,b)=>{m(h=>({...h,[t]:b}))},[]),y=i.useCallback(()=>{m(j)},[]),g=i.useCallback(t=>{f(t)},[]),J=i.useCallback(t=>{if(d(b=>({...b,query:t})),t){const b=S.filter(h=>h.title.toLowerCase().indexOf(n.query.toLowerCase())!==-1);d(h=>({...h,results:b}))}},[n.query]),C=s.jsxs(p,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[s.jsx(V,{query:n.query,results:n.results,onSearch:J,hrefItem:t=>x.dashboard.job.details(t)}),s.jsxs(p,{direction:"row",spacing:1,flexShrink:0,children:[s.jsx(z,{open:c.value,onOpen:c.onTrue,onClose:c.onFalse,filters:l,onFilters:O,canReset:r,onResetFilters:y,locationOptions:B.map(t=>t.label),roleOptions:I,benefitOptions:L.map(t=>t.label),experienceOptions:["all",...N.map(t=>t.label)],employmentTypeOptions:w.map(t=>t.label)}),s.jsx(K,{sort:a,onSort:g,sortOptions:k})]})]}),E=s.jsx(W,{filters:l,onResetFilters:y,canReset:r,onFilters:O,results:o.length});return s.jsxs(P,{maxWidth:e.themeStretch?!1:"lg",children:[s.jsx(q,{heading:"List",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Job",href:x.dashboard.job.root},{name:"List"}],action:s.jsx(v,{component:Y,href:x.dashboard.job.new,variant:"contained",startIcon:s.jsx(A,{icon:"mingcute:add-line"}),children:"New Job"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(p,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[C,r&&E]}),F&&s.jsx(H,{filled:!0,title:"No Data",sx:{py:10}}),s.jsx(X,{jobs:o})]})}const Q=({inputData:e,filters:c,sortBy:a})=>{const{employmentTypes:f,experience:n,roles:d,locations:l,benefits:m}=c;return a==="latest"&&(e=u(e,["createdAt"],["desc"])),a==="oldest"&&(e=u(e,["createdAt"],["asc"])),a==="popular"&&(e=u(e,["totalViews"],["desc"])),f.length&&(e=e.filter(o=>o.employmentTypes.some(r=>f.includes(r)))),n!=="all"&&(e=e.filter(o=>o.experience===n)),d.length&&(e=e.filter(o=>d.includes(o.role))),l.length&&(e=e.filter(o=>o.locations.some(r=>l.includes(r)))),m.length&&(e=e.filter(o=>o.benefits.some(r=>m.includes(r)))),e};function ae(){return s.jsxs(s.Fragment,{children:[s.jsx(M,{children:s.jsx("title",{children:" Dashboard: Job List"})}),s.jsx(G,{})]})}export{ae as default};
