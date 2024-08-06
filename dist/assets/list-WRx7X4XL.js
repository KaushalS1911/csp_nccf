import{aF as T,c as R,r as a,aJ as _,ex as S,j as s,S as u,p as x,c4 as w,ep as B,ew as I,es as L,er as N,eA as k,C as P,cu as q,D as A,R as v,i as H,aV as M,H as V}from"./index-AyhP95hO.js";import{o as p}from"./orderBy-b91dLs2Y.js";import{a as Y,b as W,c as X,d as z,e as G}from"./job-details-view-sK18hy0N.js";import"./_baseEach-i_s7DWor.js";import"./country-select-MaP4O-pW.js";const j={roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]};function K(){const e=T(),c=R(),[i,f]=a.useState("latest"),[n,d]=a.useState({query:"",results:[]}),[l,m]=a.useState(j),o=Q({inputData:S,filters:l,sortBy:i}),r=!_(j,l),F=!o.length&&r,O=a.useCallback((t,h)=>{m(b=>({...b,[t]:h}))},[]),y=a.useCallback(()=>{m(j)},[]),g=a.useCallback(t=>{f(t)},[]),J=a.useCallback(t=>{if(d(h=>({...h,query:t})),t){const h=S.filter(b=>b.title.toLowerCase().indexOf(n.query.toLowerCase())!==-1);d(b=>({...b,results:h}))}},[n.query]),C=s.jsxs(u,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[s.jsx(Y,{query:n.query,results:n.results,onSearch:J,hrefItem:t=>x.dashboard.job.details(t)}),s.jsxs(u,{direction:"row",spacing:1,flexShrink:0,children:[s.jsx(W,{open:c.value,onOpen:c.onTrue,onClose:c.onFalse,filters:l,onFilters:O,canReset:r,onResetFilters:y,locationOptions:w.map(t=>t.label),roleOptions:B,benefitOptions:I.map(t=>t.label),experienceOptions:["all",...L.map(t=>t.label)],employmentTypeOptions:N.map(t=>t.label)}),s.jsx(X,{sort:i,onSort:g,sortOptions:k})]})]}),E=s.jsx(z,{filters:l,onResetFilters:y,canReset:r,onFilters:O,results:o.length});return s.jsxs(P,{maxWidth:e.themeStretch?!1:"lg",children:[s.jsx(q,{heading:"List",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Job",href:x.dashboard.job.root},{name:"List"}],action:s.jsx(A,{component:v,href:x.dashboard.job.new,variant:"contained",startIcon:s.jsx(H,{icon:"mingcute:add-line"}),children:"New Job"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(u,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[C,r&&E]}),F&&s.jsx(M,{filled:!0,title:"No Data",sx:{py:10}}),s.jsx(G,{jobs:o})]})}const Q=({inputData:e,filters:c,sortBy:i})=>{const{employmentTypes:f,experience:n,roles:d,locations:l,benefits:m}=c;return i==="latest"&&(e=p(e,["createdAt"],["desc"])),i==="oldest"&&(e=p(e,["createdAt"],["asc"])),i==="popular"&&(e=p(e,["totalViews"],["desc"])),f.length&&(e=e.filter(o=>o.employmentTypes.some(r=>f.includes(r)))),n!=="all"&&(e=e.filter(o=>o.experience===n)),d.length&&(e=e.filter(o=>d.includes(o.role))),l.length&&(e=e.filter(o=>o.locations.some(r=>l.includes(r)))),m.length&&(e=e.filter(o=>o.benefits.some(r=>m.includes(r)))),e};function se(){return s.jsxs(s.Fragment,{children:[s.jsx(V,{children:s.jsx("title",{children:" Dashboard: Job List"})}),s.jsx(K,{})]})}export{se as default};
