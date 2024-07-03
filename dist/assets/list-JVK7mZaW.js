import{ax as w,c as L,r as a,ee as k,eU as T,j as e,S as b,p,eT as I,eS as G,cV as q,eY as B,C as E,bY as _,v as N,R as A,i as P,aF as U,eg as V,H}from"./index-qJigJXRM.js";import{o as g}from"./orderBy-cV0YAJEI.js";import{a as Y,b as W,c as z,d as D,e as J}from"./tour-details-view-Q7M1yN3w.js";import"./_baseToString-dGVG0frc.js";import"./_baseIteratee--mgbbDVn.js";import"./_baseEach-naCX0FEM.js";import"./custom-date-range-picker-xlMcYI7a.js";import"./DatePicker-2dws45FR.js";import"./Pagination-C_hpxp7K.js";import"./country-select-vGuygmEH.js";import"./LoadingButton-2E-VIOUU.js";import"./CircularProgress-P2BcVD5b.js";import"./markdown-NTa2FRZc.js";const C={destination:[],tourGuides:[],services:[],startDate:null,endDate:null};function K(){const s=w(),c=L(),[i,S]=a.useState("latest"),[n,d]=a.useState({query:"",results:[]}),[r,f]=a.useState(C),x=k(r.startDate,r.endDate),l=M({inputData:T,filters:r,sortBy:i,dateError:x}),t=!!r.destination.length||!!r.tourGuides.length||!!r.services.length||!!r.startDate&&!!r.endDate,u=!l.length&&t,j=a.useCallback((o,m)=>{f(h=>({...h,[o]:m}))},[]),F=a.useCallback(()=>{f(C)},[]),y=a.useCallback(o=>{S(o)},[]),O=a.useCallback(o=>{if(d(m=>({...m,query:o})),o){const m=T.filter(h=>h.name.toLowerCase().indexOf(n.query.toLowerCase())!==-1);d(h=>({...h,results:m}))}},[n.query]),R=e.jsxs(b,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(Y,{query:n.query,results:n.results,onSearch:O,hrefItem:o=>p.dashboard.tour.details(o)}),e.jsxs(b,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(W,{open:c.value,onOpen:c.onTrue,onClose:c.onFalse,filters:r,onFilters:j,canReset:t,onResetFilters:F,serviceOptions:I.map(o=>o.label),tourGuideOptions:G,destinationOptions:q.map(o=>o.label),dateError:x}),e.jsx(z,{sort:i,onSort:y,sortOptions:B})]})]}),v=e.jsx(D,{filters:r,onResetFilters:F,canReset:t,onFilters:j,results:l.length});return e.jsxs(E,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(_,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"Tour",href:p.dashboard.tour.root},{name:"List"}],action:e.jsx(N,{component:A,href:p.dashboard.tour.new,variant:"contained",startIcon:e.jsx(P,{icon:"mingcute:add-line"}),children:"New Tour"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[R,t&&v]}),u&&e.jsx(U,{title:"No Data",filled:!0,sx:{py:10}}),e.jsx(J,{tours:l})]})}const M=({inputData:s,filters:c,sortBy:i,dateError:S})=>{const{services:n,destination:d,startDate:r,endDate:f,tourGuides:x}=c,l=x.map(t=>t.id);return i==="latest"&&(s=g(s,["createdAt"],["desc"])),i==="oldest"&&(s=g(s,["createdAt"],["asc"])),i==="popular"&&(s=g(s,["totalViews"],["desc"])),d.length&&(s=s.filter(t=>d.includes(t.destination))),l.length&&(s=s.filter(t=>t.tourGuides.some(u=>l.includes(u.id)))),n.length&&(s=s.filter(t=>t.services.some(u=>n.includes(u)))),S||r&&f&&(s=s.filter(t=>V(r,t.available.startDate,t.available.endDate))),s};function ce(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Dashboard: Tour List"})}),e.jsx(K,{})]})}export{ce as default};