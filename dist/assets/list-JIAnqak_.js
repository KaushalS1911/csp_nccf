import{aF as v,c as L,r as a,dV as k,eQ as T,j as e,S as b,p as j,eP as I,eO as G,c3 as q,eW as B,C as E,ct as _,w as N,R as P,i as V,aV as A,dZ as H,H as U}from"./index-irVo58Dc.js";import{o as g}from"./orderBy-ds8ipVgO.js";import{a as W,b as Q,c as Z,d as z,e as D}from"./tour-details-view-iw-g1yi-.js";import"./_baseEach-1pkuGF0S.js";import"./custom-date-range-picker-b7PXT7A-.js";import"./DatePicker-owy5jdMw.js";import"./country-select-2BpgW6vC.js";const C={destination:[],tourGuides:[],services:[],startDate:null,endDate:null};function J(){const s=v(),c=L(),[i,S]=a.useState("latest"),[n,d]=a.useState({query:"",results:[]}),[r,f]=a.useState(C),x=k(r.startDate,r.endDate),l=K({inputData:T,filters:r,sortBy:i,dateError:x}),t=!!r.destination.length||!!r.tourGuides.length||!!r.services.length||!!r.startDate&&!!r.endDate,u=!l.length&&t,p=a.useCallback((o,h)=>{f(m=>({...m,[o]:h}))},[]),F=a.useCallback(()=>{f(C)},[]),O=a.useCallback(o=>{S(o)},[]),y=a.useCallback(o=>{if(d(h=>({...h,query:o})),o){const h=T.filter(m=>m.name.toLowerCase().indexOf(n.query.toLowerCase())!==-1);d(m=>({...m,results:h}))}},[n.query]),R=e.jsxs(b,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(W,{query:n.query,results:n.results,onSearch:y,hrefItem:o=>j.dashboard.tour.details(o)}),e.jsxs(b,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Q,{open:c.value,onOpen:c.onTrue,onClose:c.onFalse,filters:r,onFilters:p,canReset:t,onResetFilters:F,serviceOptions:I.map(o=>o.label),tourGuideOptions:G,destinationOptions:q.map(o=>o.label),dateError:x}),e.jsx(Z,{sort:i,onSort:O,sortOptions:B})]})]}),w=e.jsx(z,{filters:r,onResetFilters:F,canReset:t,onFilters:p,results:l.length});return e.jsxs(E,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(_,{heading:"List",links:[{name:"Dashboard",href:j.dashboard.root},{name:"Tour",href:j.dashboard.tour.root},{name:"List"}],action:e.jsx(N,{component:P,href:j.dashboard.tour.new,variant:"contained",startIcon:e.jsx(V,{icon:"mingcute:add-line"}),children:"New Tour"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[R,t&&w]}),u&&e.jsx(A,{title:"No Data",filled:!0,sx:{py:10}}),e.jsx(D,{tours:l})]})}const K=({inputData:s,filters:c,sortBy:i,dateError:S})=>{const{services:n,destination:d,startDate:r,endDate:f,tourGuides:x}=c,l=x.map(t=>t.id);return i==="latest"&&(s=g(s,["createdAt"],["desc"])),i==="oldest"&&(s=g(s,["createdAt"],["asc"])),i==="popular"&&(s=g(s,["totalViews"],["desc"])),d.length&&(s=s.filter(t=>d.includes(t.destination))),l.length&&(s=s.filter(t=>t.tourGuides.some(u=>l.includes(u.id)))),n.length&&(s=s.filter(t=>t.services.some(u=>n.includes(u)))),S||r&&f&&(s=s.filter(t=>H(r,t.available.startDate,t.available.endDate))),s};function re(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Dashboard: Tour List"})}),e.jsx(J,{})]})}export{re as default};