import{bG as U,dc as k,aE as D,a as L,c as A,r as i,eF as E,dd as B,aG as N,p as x,j as s,C as I,bW as O,t as j,R as _,i as P,m as H,a9 as z,az as W,de as q,cM as G,df as M,bY as V,h as Y,c6 as $,cN as J,cO as K,cP as Q,dg as X,dh as Z,di as ee,dj as se,da as te,d7 as ae,H as le}from"./index-rcXNTvDP.js";import{e as ne,f as oe,g as re}from"./profile-followers-W6r4U9Im.js";import{T as ie,a as de}from"./Tabs-LL1nZZU6.js";import"./LoadingButton-7Wl_UZwm.js";import"./CircularProgress-UE5rdxfP.js";import"./Alert-nIhZ0ctz.js";import"./Fab-jur5lFXJ.js";const ce=[{value:"all",label:"All"},...ae],he=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],w={name:"",role:[],status:"all"};function ue(){const{enqueueSnackbar:n}=U(),e=k(),b=D(),h=L(),d=A(),[r,u]=i.useState(E),[a,c]=i.useState(w),l=ge({inputData:r,comparator:B(e.order,e.orderBy),filters:a}),g=l.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),R=e.dense?56:76,f=!N(w,a),C=!l.length&&f||!l.length,m=i.useCallback((t,o)=>{e.onResetPage(),c(p=>({...p,[t]:o}))},[e]),S=i.useCallback(()=>{c(w)},[]),T=i.useCallback(t=>{const o=r.filter(p=>p.id!==t);n("Delete success!"),u(o),e.onUpdatePageDeleteRow(g.length)},[g.length,n,e,r]),v=i.useCallback(()=>{const t=r.filter(o=>!e.selected.includes(o.id));n("Delete success!"),u(t),e.onUpdatePageDeleteRows({totalRowsInPage:g.length,totalRowsFiltered:l.length})},[l.length,g.length,n,e,r]),F=i.useCallback(t=>{h.push(x.dashboard.user.edit(t))},[h]),y=i.useCallback((t,o)=>{m("status",o)},[m]);return console.log(a,"fffffi"),s.jsxs(s.Fragment,{children:[s.jsxs(I,{maxWidth:b.themeStretch?!1:"lg",children:[s.jsx(O,{heading:"List",links:[{name:"Dashboard",href:x.dashboard.root},{name:"User",href:x.dashboard.user.root},{name:"List"}],action:s.jsx(j,{component:_,href:x.dashboard.user.new,variant:"contained",startIcon:s.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(H,{children:[s.jsx(ie,{value:a.status,onChange:y,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${z(t.palette.grey[500],.08)}`},children:ce.map(t=>s.jsx(de,{iconPosition:"end",value:t.value,label:t.label,icon:s.jsx(W,{variant:(t.value==="all"||t.value===a.status)&&"filled"||"soft",color:t.value==="active"&&"success"||t.value==="pending"&&"warning"||t.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(t.value)?r.filter(o=>o.status===t.value).length:r.length})},t.value))}),s.jsx(ne,{filters:a,onFilters:m,roleOptions:q}),f&&s.jsx(oe,{filters:a,onFilters:m,onResetFilters:S,results:l.length,sx:{p:2.5,pt:0}}),s.jsxs(G,{sx:{position:"relative",overflow:"unset"},children:[s.jsx(M,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:t=>e.onSelectAllRows(t,l.map(o=>o.id)),action:s.jsx(V,{title:"Delete",children:s.jsx(Y,{color:"primary",onClick:d.onTrue,children:s.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),s.jsx($,{children:s.jsxs(J,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx(K,{order:e.order,orderBy:e.orderBy,headLabel:he,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:t=>e.onSelectAllRows(t,l.map(o=>o.id))}),s.jsxs(Q,{children:[l.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(t=>s.jsx(re,{row:t,selected:e.selected.includes(t.id),onSelectRow:()=>e.onSelectRow(t.id),onDeleteRow:()=>T(t.id),onEditRow:()=>F(t.id)},t.id)),s.jsx(X,{height:R,emptyRows:Z(e.page,e.rowsPerPage,l.length)}),s.jsx(ee,{notFound:C})]})]})})]}),s.jsx(se,{count:l.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),s.jsx(te,{open:d.value,onClose:d.onFalse,title:"Delete",content:s.jsxs(s.Fragment,{children:["Are you sure want to delete ",s.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:s.jsx(j,{variant:"contained",color:"error",onClick:()=>{v(),d.onFalse()},children:"Delete"})})]})}function ge({inputData:n,comparator:e,filters:b}){const{name:h,status:d,role:r}=b,u=n.map((a,c)=>[a,c]);return u.sort((a,c)=>{const l=e(a[0],c[0]);return l!==0?l:a[1]-c[1]}),n=u.map(a=>a[0]),h&&(n=n.filter(a=>a.name.toLowerCase().indexOf(h.toLowerCase())!==-1)),d!=="all"&&(n=n.filter(a=>a.status===d)),r.length&&(n=n.filter(a=>r.includes(a.role))),n}function Pe(){return s.jsxs(s.Fragment,{children:[s.jsx(le,{children:s.jsx("title",{children:" Dashboard: User List"})}),s.jsx(ue,{})]})}export{Pe as default};
