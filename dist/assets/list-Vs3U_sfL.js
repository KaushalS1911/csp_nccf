import{bD as G,bE as M,r as m,bG as q,V as Y,aE as $,a as J,dc as K,c as Q,en as X,e1 as Z,dd as ee,p as f,j as e,C as te,bW as oe,t as F,R as se,i as j,m as A,c6 as k,S as I,E as ae,a9 as ne,az as le,cM as re,df as ie,bY as y,h as S,cN as ce,cO as de,cP as ue,dg as me,dh as he,di as ge,dj as pe,da as xe,e3 as be,H as fe}from"./index-rcXNTvDP.js";import{s as L}from"./sumBy-428BOIO4.js";import{I as w,a as je,b as we,c as ve}from"./invoice-details-view-rYylHa7N.js";import{T as Pe,a as Ce}from"./Tabs-LL1nZZU6.js";import"./_baseIteratee-fcGgQAag.js";import"./_baseToString-0qpWapwU.js";import"./_baseSum-gu02AyRp.js";import"./CircularProgress-UE5rdxfP.js";import"./DatePicker-PGCNFiGH.js";import"./custom-date-range-picker-ef13lUwn.js";import"./address-list-dialog-ShcHR2vj.js";import"./LoadingButton-7Wl_UZwm.js";function Re(){const s="http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/commodity",{data:c,isLoading:d,error:x,isValidating:u}=G(s,M);return m.useMemo(()=>({commodities:(c==null?void 0:c.data)||[],commoditiesLoading:d,commoditiesError:x,commoditiesValidating:u,commoditiesEmpty:!d&&!(c!=null&&c.data.length)}),[c==null?void 0:c.data,x,d,u])}const ye=[{id:"invoiceNumber",label:"Customer"},{id:"createDate",label:"Create"},{id:"dueDate",label:"Due"},{id:"price",label:"Amount"},{id:"sent",label:"Sent",align:"center"},{id:"status",label:"Status"},{id:""}],B={name:"",service:[],status:"all",startDate:null,endDate:null};function Se(){const{enqueueSnackbar:s}=q(),{commodities:c}=Re(),d=Y(),x=$(),u=J(),t=K({defaultOrderBy:"createDate"}),p=Q(),[i,b]=m.useState(X),[l,a]=m.useState(B),h=Z(l.startDate,l.endDate),n=De({inputData:i,comparator:ee(t.order,t.orderBy),filters:l,dateError:h}),v=n.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage),E=t.dense?56:76,T=!!l.name||!!l.service.length||l.status!=="all"||!!l.startDate&&!!l.endDate,V=!n.length&&T||!n.length,g=o=>i.filter(r=>r.status===o).length,P=o=>L(i.filter(r=>r.status===o),"totalAmount"),C=o=>g(o)/i.length*100,O=[{value:"all",label:"All",color:"default",count:i.length},{value:"paid",label:"Paid",color:"success",count:g("paid")},{value:"pending",label:"Pending",color:"warning",count:g("pending")},{value:"overdue",label:"Overdue",color:"error",count:g("overdue")},{value:"draft",label:"Draft",color:"default",count:g("draft")}],R=m.useCallback((o,r)=>{t.onResetPage(),a(D=>({...D,[o]:r}))},[t]),z=m.useCallback(()=>{a(B)},[]),H=m.useCallback(o=>{const r=i.filter(D=>D.id!==o);s("Delete success!"),b(r),t.onUpdatePageDeleteRow(v.length)},[v.length,s,t,i]),N=m.useCallback(()=>{const o=i.filter(r=>!t.selected.includes(r.id));s("Delete success!"),b(o),t.onUpdatePageDeleteRows({totalRowsInPage:v.length,totalRowsFiltered:n.length})},[n.length,v.length,s,t,i]),W=m.useCallback(o=>{u.push(f.dashboard.invoice.edit(o))},[u]),U=m.useCallback(o=>{u.push(f.dashboard.invoice.details(o))},[u]),_=m.useCallback((o,r)=>{R("status",r)},[R]);return e.jsxs(e.Fragment,{children:[e.jsxs(te,{maxWidth:x.themeStretch?!1:"lg",children:[e.jsx(oe,{heading:"Payment",links:[{name:"Dashboard",href:f.dashboard.root},{name:"Payment",href:f.dashboard.invoice.root},{name:"List"}],action:e.jsx(F,{component:se,href:f.dashboard.invoice.new,variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"New Invoice"}),sx:{mb:{xs:3,md:5}}}),e.jsx(A,{sx:{mb:{xs:3,md:5}},children:e.jsx(k,{children:e.jsxs(I,{direction:"row",divider:e.jsx(ae,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[e.jsx(w,{title:"Total",total:i.length,percent:100,price:L(i,"totalAmount"),icon:"solar:bill-list-bold-duotone",color:d.palette.info.main}),e.jsx(w,{title:"Paid",total:g("paid"),percent:C("paid"),price:P("paid"),icon:"solar:file-check-bold-duotone",color:d.palette.success.main}),e.jsx(w,{title:"Pending",total:g("pending"),percent:C("pending"),price:P("pending"),icon:"solar:sort-by-time-bold-duotone",color:d.palette.warning.main}),e.jsx(w,{title:"Overdue",total:g("overdue"),percent:C("overdue"),price:P("overdue"),icon:"solar:bell-bing-bold-duotone",color:d.palette.error.main}),e.jsx(w,{title:"Draft",total:g("draft"),percent:C("draft"),price:P("draft"),icon:"solar:file-corrupted-bold-duotone",color:d.palette.text.secondary})]})})}),e.jsxs(A,{children:[e.jsx(Pe,{value:l.status,onChange:_,sx:{px:2.5,boxShadow:`inset 0 -2px 0 0 ${ne(d.palette.grey[500],.08)}`},children:O.map(o=>e.jsx(Ce,{value:o.value,label:o.label,iconPosition:"end",icon:e.jsx(le,{variant:(o.value==="all"||o.value===l.status)&&"filled"||"soft",color:o.color,children:o.count})},o.value))}),e.jsx(je,{filters:l,onFilters:R,dateError:h,serviceOptions:c.map(o=>o.commodity_name)}),T&&e.jsx(we,{filters:l,onFilters:R,onResetFilters:z,results:n.length,sx:{p:2.5,pt:0}}),e.jsxs(re,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(ie,{dense:t.dense,numSelected:t.selected.length,rowCount:n.length,onSelectAllRows:o=>{t.onSelectAllRows(o,n.map(r=>r.id))},action:e.jsxs(I,{direction:"row",children:[e.jsx(y,{title:"Sent",children:e.jsx(S,{color:"primary",children:e.jsx(j,{icon:"iconamoon:send-fill"})})}),e.jsx(y,{title:"Download",children:e.jsx(S,{color:"primary",children:e.jsx(j,{icon:"eva:download-outline"})})}),e.jsx(y,{title:"Print",children:e.jsx(S,{color:"primary",children:e.jsx(j,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(y,{title:"Delete",children:e.jsx(S,{color:"primary",onClick:p.onTrue,children:e.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})]})}),e.jsx(k,{children:e.jsxs(ce,{size:t.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(de,{order:t.order,orderBy:t.orderBy,headLabel:ye,rowCount:n.length,numSelected:t.selected.length,onSort:t.onSort,onSelectAllRows:o=>t.onSelectAllRows(o,n.map(r=>r.id))}),e.jsxs(ue,{children:[n.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map(o=>e.jsx(ve,{row:o,selected:t.selected.includes(o.id),onSelectRow:()=>t.onSelectRow(o.id),onViewRow:()=>U(o.id),onEditRow:()=>W(o.id),onDeleteRow:()=>H(o.id)},o.id)),e.jsx(me,{height:E,emptyRows:he(t.page,t.rowsPerPage,n.length)}),e.jsx(ge,{notFound:V})]})]})})]}),e.jsx(pe,{count:n.length,page:t.page,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage,dense:t.dense,onChangeDense:t.onChangeDense})]})]}),e.jsx(xe,{open:p.value,onClose:p.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",t.selected.length," "]})," items?"]}),action:e.jsx(F,{variant:"contained",color:"error",onClick:()=>{N(),p.onFalse()},children:"Delete"})})]})}function De({inputData:s,comparator:c,filters:d,dateError:x}){const{name:u,status:t,service:p,startDate:i,endDate:b}=d,l=s.map((a,h)=>[a,h]);return l.sort((a,h)=>{const n=c(a[0],h[0]);return n!==0?n:a[1]-h[1]}),s=l.map(a=>a[0]),u&&(s=s.filter(a=>a.invoiceNumber.toLowerCase().indexOf(u.toLowerCase())!==-1||a.invoiceTo.name.toLowerCase().indexOf(u.toLowerCase())!==-1)),t!=="all"&&(s=s.filter(a=>a.status===t)),p.length&&(s=s.filter(a=>a.items.some(h=>p.includes(h.service)))),x||i&&b&&(s=s.filter(a=>be(a.createDate,i,b))),s}function Ne(){return e.jsxs(e.Fragment,{children:[e.jsx(fe,{children:e.jsx("title",{children:" Dashboard: Payment"})}),e.jsx(Se,{})]})}export{Ne as default};
