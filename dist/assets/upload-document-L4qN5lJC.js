import{ad as i,bG as V,d as J,e as g,r as h,f as X,o as U,j as e,by as ee,F as oe,bz as ae,bA as se,B as k,bL as le,d7 as te,bZ as D,g as j,D as ne,cW as ie,bB as de,t as I,c as O,bx as G,ch as ce,cK as re,cL as T,au as ue,d8 as he,d9 as me,az as M,bC as H,i as v,ci as pe,da as Y,S,ab as xe,I as be,bR as B,db as ge,K as je,u as we,A as Ce,dc as fe,aE as ye,a as ve,dd as Re,aG as Se,p as q,C as Pe,bW as Te,m as De,a9 as ke,de as Ae,cM as Fe,df as _e,bY as qe,h as Ee,c6 as Ie,cN as Le,cO as Ne,cP as Be,dg as ze,dh as Oe,di as We,dj as Ve}from"./index-rcXNTvDP.js";import{A as Ge}from"./Alert-nIhZ0ctz.js";import{L as Me}from"./LoadingButton-7Wl_UZwm.js";import"./product-details-carousel--KD1O_YJ.js";import{T as He,a as Ye}from"./Tabs-LL1nZZU6.js";import"./CircularProgress-UE5rdxfP.js";import"./carousel-arrow-index-swnvHKpw.js";const $e=[{value:"all",label:"All"},{value:"Aadhar",label:"Aadhar"},{value:"pan_number",label:"PAN"},{value:"gst_number",label:"GST"},{value:"certificates",label:"Certificates"},{value:"milling_unit_video",label:"Milling Unit Video"},{value:"milling_unit_photo",label:"Milling Unit Photo"}];i.string,i.array,i.array,i.string;i.object;function $({currentUser:o,open:t,onClose:c}){const{enqueueSnackbar:r}=V(),p=J().shape({name:g().required("Name is required"),email:g().required("Email is required").email("Email must be a valid email address"),phoneNumber:g().required("Phone number is required"),address:g().required("Address is required"),country:g().required("Country is required"),company:g().required("Company is required"),state:g().required("State is required"),city:g().required("City is required"),role:g().required("Role is required")}),a=h.useMemo(()=>({name:(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",phoneNumber:(o==null?void 0:o.phoneNumber)||"",address:(o==null?void 0:o.address)||"",country:(o==null?void 0:o.country)||"",state:(o==null?void 0:o.state)||"",city:(o==null?void 0:o.city)||"",zipCode:(o==null?void 0:o.zipCode)||"",status:o==null?void 0:o.status,company:(o==null?void 0:o.company)||"",role:(o==null?void 0:o.role)||""}),[o]),x=X({resolver:U(p),defaultValues:a}),{reset:n,handleSubmit:d,formState:{isSubmitting:m}}=x,w=d(async l=>{try{await new Promise(b=>setTimeout(b,500)),n(),c(),r("Update success!"),console.info("DATA",l)}catch(b){console.error(b)}});return e.jsx(ee,{fullWidth:!0,maxWidth:!1,open:t,onClose:c,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(oe,{methods:x,onSubmit:w,children:[e.jsx(ae,{children:"Quick Update"}),e.jsxs(se,{children:[e.jsx(Ge,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(k,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(le,{name:"status",label:"Status",children:te.map(l=>e.jsx(D,{value:l.value,children:l.label},l.value))}),e.jsx(k,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(j,{name:"name",label:"Full Name"}),e.jsx(j,{name:"email",label:"Email Address"}),e.jsx(j,{name:"phoneNumber",label:"Phone Number"}),e.jsx(ne,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:ie.map(l=>l.label),getOptionLabel:l=>l}),e.jsx(j,{name:"state",label:"State/Region"}),e.jsx(j,{name:"city",label:"City"}),e.jsx(j,{name:"address",label:"Address"}),e.jsx(j,{name:"zipCode",label:"Zip/Code"}),e.jsx(j,{name:"company",label:"Company"}),e.jsx(j,{name:"role",label:"Role"})]})]}),e.jsxs(de,{children:[e.jsx(I,{variant:"outlined",onClick:c,children:"Cancel"}),e.jsx(Me,{type:"submit",variant:"contained",loading:m,children:"Update"})]})]})})}$.propTypes={open:i.bool,onClose:i.func,currentUser:i.object};function K({row:o,selected:t,onEditRow:c,onSelectRow:r,onViewRow:p,onDeleteRow:a,index:x}){const{doc_type:n,object_url:d,uploaded_on:m}=o;h.useState(!1);const[w,l]=h.useState([]),b=d.indexOf("/",8),R=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/file${d.substring(b)}`,A=O(),f=O(),P=G();function F(C){l([C]),P.onClose(),y.onOpen(C)}const _=w.map(C=>({src:C})),y=ce(_),L="completed";return e.jsxs(e.Fragment,{children:[e.jsxs(re,{hover:!0,selected:t,children:[e.jsx(T,{sx:{whiteSpace:"nowrap"},children:x+1}),e.jsx(T,{children:e.jsx(ue,{alt:d,src:R,sx:{mr:2,height:46,width:46,cursor:"pointer"},variant:"rounded",onClick:()=>F(R)})}),e.jsx(T,{sx:{whiteSpace:"nowrap"},children:he(n)}),e.jsx(T,{sx:{whiteSpace:"nowrap"},children:me(m).format("DD/MM/YYYY")}),e.jsx(T,{children:e.jsx(M,{variant:"soft",color:"success",children:L})})]}),e.jsx($,{currentUser:o,open:f.value,onClose:f.onFalse}),e.jsx(H,{open:P.open,onClose:P.onClose,arrow:"right-top",sx:{width:140},children:e.jsxs(D,{onClick:()=>F(R),children:[e.jsx(v,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(pe,{index:y.selected,slides:_,open:y.open,close:y.onClose,onGetCurrentIndex:C=>y.setSelected(C)}),e.jsx(Y,{open:A.value,onClose:A.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(I,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}K.propTypes={onDeleteRow:i.func,onEditRow:i.func,onSelectRow:i.func,row:i.object,selected:i.bool};function Q({filters:o,onFilters:t,roleOptions:c}){const r=G(),p=h.useCallback(a=>{t("name",a.target.value)},[t]);return h.useCallback(a=>{t("role",typeof a.target.value=="string"?a.target.value.split(","):a.target.value)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(S,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:2.5},children:e.jsx(S,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:e.jsx(xe,{fullWidth:!0,value:o.name,onChange:p,placeholder:"Search...",InputProps:{startAdornment:e.jsx(be,{position:"start",children:e.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}),e.jsxs(H,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(D,{onClick:()=>{r.onClose()},children:[e.jsx(v,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(D,{onClick:()=>{r.onClose()},children:[e.jsx(v,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(D,{onClick:()=>{r.onClose()},children:[e.jsx(v,{icon:"solar:export-bold"}),"Export"]})]})]})}Q.propTypes={filters:i.object,onFilters:i.func,roleOptions:i.array};function Z({filters:o,onFilters:t,onResetFilters:c,results:r,...p}){const a=h.useCallback(()=>{t("name","")},[t]),x=h.useCallback(()=>{t("status","all")},[t]),n=h.useCallback(d=>{const m=o.role.filter(w=>w!==d);t("role",m)},[o.role,t]);return e.jsxs(S,{spacing:1.5,...p,children:[e.jsxs(k,{sx:{typography:"body2"},children:[e.jsx("strong",{children:r}),e.jsx(k,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(S,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o.status!=="all"&&e.jsx(E,{label:"Status:",children:e.jsx(B,{size:"small",label:ge(o.status),onDelete:x})}),!!o.role.length&&e.jsx(E,{label:"Role:",children:o.role.map(d=>e.jsx(B,{label:d,size:"small",onDelete:()=>n(d)},d))}),!!o.name&&e.jsx(E,{label:"Keyword:",children:e.jsx(B,{label:o.name,size:"small",onDelete:a})}),e.jsx(I,{color:"error",onClick:c,startIcon:e.jsx(v,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}Z.propTypes={filters:i.object,onFilters:i.func,onResetFilters:i.func,results:i.number};function E({label:o,children:t,sx:c,...r}){return e.jsxs(S,{component:je,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...c},...r,children:[e.jsx(k,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(S,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]})}E.propTypes={children:i.node,label:i.string,sx:i.object};const Ke=[{id:"srNo",label:"Sr No",width:88},{id:"object_url",label:"Document Image",width:100},{id:"doc_type",label:"Document Type",width:100},{id:"uploaded_on",label:"Date",width:100},{id:"status",label:"Status",width:100}],z={name:"",role:[],status:"all"};function Qe(){const{vendor:o}=we(),{enqueueSnackbar:t}=V(),[c,r]=h.useState([]);h.useEffect(()=>{p()},[]);function p(){Ce.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${o==null?void 0:o.csp_code}/documents`).then(s=>{var u;return r((u=s==null?void 0:s.data)==null?void 0:u.data)}).catch(s=>console.error(s))}const a=fe(),x=ye(),n=ve(),d=O(),[m,w]=h.useState(z),l=Ze({inputData:c,comparator:Re(a.order,a.orderBy),filters:m}),b=l.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),W=a.dense?56:76,R=!Se(z,m),A=!l.length&&R||!l.length,f=h.useCallback((s,u)=>{a.onResetPage(),w(N=>({...N,[s]:u}))},[a]),P=h.useCallback(()=>{w(z)},[]),F=h.useCallback(s=>{const u=c.filter(N=>N.id!==s);t("Delete success!"),r(u),a.onUpdatePageDeleteRow(b.length)},[b.length,t,a,c]),_=h.useCallback(()=>{const s=c.filter(u=>!a.selected.includes(u.id));t("Delete success!"),r(s),a.onUpdatePageDeleteRows({totalRowsInPage:b.length,totalRowsFiltered:l.length})},[l.length,b.length,t,a,c]),y=h.useCallback(s=>{n.push(q.dashboard.user.edit(s))},[n]),L=h.useCallback(s=>{n.push(q.dashboard.document.document_view)},[n]),C=h.useCallback((s,u)=>{f("status",u)},[f]);return e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{maxWidth:x.themeStretch?!1:"xl",children:[e.jsx(Te,{heading:"List",links:[{name:"Dashboard",href:q.dashboard.root},{name:"Document",href:q.dashboard.document},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(De,{children:[e.jsx(He,{value:m.status,onChange:C,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${ke(s.palette.grey[500],.08)}`},children:$e.map(s=>e.jsx(Ye,{iconPosition:"end",value:s.value,label:s.label,icon:e.jsx(M,{variant:(s.value==="all"||s.value===m.status)&&"filled"||"soft",color:s.value==="Aadhar"&&"secondary"||s.value==="certificates"&&"warning"||s.value==="gst_number"&&"success"||s.value==="pan_number"&&"info"||s.value==="milling_unit_video"&&"error"||"default",children:s.value==="all"?c.length:c.filter(u=>u.doc_type===s.value).length})},s.value))}),e.jsx(Q,{filters:m,onFilters:f,roleOptions:Ae}),R&&e.jsx(Z,{filters:m,onFilters:f,onResetFilters:P,results:l.length,sx:{p:2.5,pt:0}}),e.jsxs(Fe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(_e,{dense:!0,numSelected:a.selected.length,rowCount:l.length,onSelectAllRows:s=>a.onSelectAllRows(s,l.map(u=>u.id)),action:e.jsx(qe,{title:"Delete",children:e.jsx(Ee,{color:"primary",onClick:d.onTrue,children:e.jsx(v,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Ie,{children:e.jsxs(Le,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ne,{order:a.order,orderBy:a.orderBy,headLabel:Ke,rowCount:l.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:s=>a.onSelectAllRows(s,l.map(u=>u.id))}),e.jsxs(Be,{children:[l.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map((s,u)=>e.jsx(K,{index:u,row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>F(s.id),onViewRow:()=>L(s.id),onEditRow:()=>y(s.id)},s.id)),e.jsx(ze,{height:W,emptyRows:Oe(a.page,a.rowsPerPage,l.length)}),e.jsx(We,{notFound:A})]})]})})]}),e.jsx(Ve,{count:l.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,dense:!0,onChangeDense:a.onChangeDense})]})]}),e.jsx(Y,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsx("strong",{children:a.selected.length})," items?"]}),action:e.jsx(I,{variant:"contained",color:"error",onClick:()=>{_(),d.onFalse()},children:"Delete"})})]})}function Ze({inputData:o,comparator:t,filters:c}){const{name:r,status:p,role:a}=c,x=o.map((n,d)=>[n,d]);return x.sort((n,d)=>{const m=t(n[0],d[0]);return m!==0?m:n[1]-d[1]}),o=x.map(n=>n[0]),r&&(o=o.filter(n=>n.doc_type.toLowerCase().indexOf(r.toLowerCase())!==-1)),p!=="all"&&(o=o.filter(n=>n.doc_type===p)),a.length&&(o=o.filter(n=>a.includes(n.role))),o}const lo=()=>e.jsx(e.Fragment,{children:e.jsx(Qe,{})});export{lo as default};
