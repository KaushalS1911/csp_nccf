import{ae as i,bH as V,d as J,e as g,r as h,f as X,o as U,j as e,bz as ee,F as oe,bA as ae,bB as se,B as k,bM as le,d4 as te,b_ as D,g as j,E as ne,cU as ie,bC as de,t as I,c as M,by as W,co as ce,cI as re,cJ as T,av as ue,d5 as he,d6 as me,aA as H,bD as G,i as v,cp as pe,d7 as $,S as R,ac as xe,I as be,bS as B,d8 as ge,M as je,u as we,A as Ce,d9 as fe,aF as ye,a as ve,da as Se,aH as Re,p as q,C as Pe,bX as Te,m as De,ci as ke,aa as Ae,cj as Fe,db as _e,cK as qe,dc as Ee,bZ as Ie,h as Le,c7 as Ne,cL as Be,cM as ze,cN as Me,dd as Oe,de as Ve,df as We,dg as He}from"./index-ZfuUZpXM.js";import{A as Ge}from"./Alert-zj0HSG75.js";import{L as $e}from"./LoadingButton-6a62LWbt.js";import"./product-details-carousel-yALWEHRK.js";import"./CircularProgress-Gku5N6zV.js";import"./carousel-arrow-index-eBnktrVK.js";const Ye=[{value:"all",label:"All"},{value:"Aadhar",label:"Aadhar"},{value:"pan_number",label:"PAN"},{value:"gst_number",label:"GST"},{value:"certificates",label:"Certificates"},{value:"milling_unit_video",label:"Milling Unit Video"},{value:"milling_unit_photo",label:"Milling Unit Photo"}];i.string,i.array,i.array,i.string;i.object;function Y({currentUser:o,open:t,onClose:c}){const{enqueueSnackbar:r}=V(),p=J().shape({name:g().required("Name is required"),email:g().required("Email is required").email("Email must be a valid email address"),phoneNumber:g().required("Phone number is required"),address:g().required("Address is required"),country:g().required("Country is required"),company:g().required("Company is required"),state:g().required("State is required"),city:g().required("City is required"),role:g().required("Role is required")}),a=h.useMemo(()=>({name:(o==null?void 0:o.name)||"",email:(o==null?void 0:o.email)||"",phoneNumber:(o==null?void 0:o.phoneNumber)||"",address:(o==null?void 0:o.address)||"",country:(o==null?void 0:o.country)||"",state:(o==null?void 0:o.state)||"",city:(o==null?void 0:o.city)||"",zipCode:(o==null?void 0:o.zipCode)||"",status:o==null?void 0:o.status,company:(o==null?void 0:o.company)||"",role:(o==null?void 0:o.role)||""}),[o]),x=X({resolver:U(p),defaultValues:a}),{reset:n,handleSubmit:d,formState:{isSubmitting:m}}=x,w=d(async l=>{try{await new Promise(b=>setTimeout(b,500)),n(),c(),r("Update success!"),console.info("DATA",l)}catch(b){console.error(b)}});return e.jsx(ee,{fullWidth:!0,maxWidth:!1,open:t,onClose:c,PaperProps:{sx:{maxWidth:720}},children:e.jsxs(oe,{methods:x,onSubmit:w,children:[e.jsx(ae,{children:"Quick Update"}),e.jsxs(se,{children:[e.jsx(Ge,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),e.jsxs(k,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(le,{name:"status",label:"Status",children:te.map(l=>e.jsx(D,{value:l.value,children:l.label},l.value))}),e.jsx(k,{sx:{display:{xs:"none",sm:"block"}}}),e.jsx(j,{name:"name",label:"Full Name"}),e.jsx(j,{name:"email",label:"Email Address"}),e.jsx(j,{name:"phoneNumber",label:"Phone Number"}),e.jsx(ne,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",fullWidth:!0,options:ie.map(l=>l.label),getOptionLabel:l=>l}),e.jsx(j,{name:"state",label:"State/Region"}),e.jsx(j,{name:"city",label:"City"}),e.jsx(j,{name:"address",label:"Address"}),e.jsx(j,{name:"zipCode",label:"Zip/Code"}),e.jsx(j,{name:"company",label:"Company"}),e.jsx(j,{name:"role",label:"Role"})]})]}),e.jsxs(de,{children:[e.jsx(I,{variant:"outlined",onClick:c,children:"Cancel"}),e.jsx($e,{type:"submit",variant:"contained",loading:m,children:"Update"})]})]})})}Y.propTypes={open:i.bool,onClose:i.func,currentUser:i.object};function K({row:o,selected:t,onEditRow:c,onSelectRow:r,onViewRow:p,onDeleteRow:a,index:x}){const{doc_type:n,object_url:d,uploaded_on:m}=o;h.useState(!1);const[w,l]=h.useState([]),b=d.indexOf("/",8),S=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/file${d.substring(b)}`,A=M(),f=M(),P=W();function F(C){l([C]),P.onClose(),y.onOpen(C)}const _=w.map(C=>({src:C})),y=ce(_),L="completed";return e.jsxs(e.Fragment,{children:[e.jsxs(re,{hover:!0,selected:t,children:[e.jsx(T,{sx:{whiteSpace:"nowrap"},children:x+1}),e.jsx(T,{children:e.jsx(ue,{alt:d,src:S,sx:{mr:2,height:46,width:46,cursor:"pointer"},variant:"rounded",onClick:()=>F(S)})}),e.jsx(T,{sx:{whiteSpace:"nowrap"},children:he(n)}),e.jsx(T,{sx:{whiteSpace:"nowrap"},children:me(m).format("DD/MM/YYYY")}),e.jsx(T,{children:e.jsx(H,{variant:"soft",color:"success",children:L})})]}),e.jsx(Y,{currentUser:o,open:f.value,onClose:f.onFalse}),e.jsx(G,{open:P.open,onClose:P.onClose,arrow:"right-top",sx:{width:140},children:e.jsxs(D,{onClick:()=>F(S),children:[e.jsx(v,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(pe,{index:y.selected,slides:_,open:y.open,close:y.onClose,onGetCurrentIndex:C=>y.setSelected(C)}),e.jsx($,{open:A.value,onClose:A.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(I,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}K.propTypes={onDeleteRow:i.func,onEditRow:i.func,onSelectRow:i.func,row:i.object,selected:i.bool};function Q({filters:o,onFilters:t,roleOptions:c}){const r=W(),p=h.useCallback(a=>{t("name",a.target.value)},[t]);return h.useCallback(a=>{t("role",typeof a.target.value=="string"?a.target.value.split(","):a.target.value)},[t]),e.jsxs(e.Fragment,{children:[e.jsx(R,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:2.5},children:e.jsx(R,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:e.jsx(xe,{fullWidth:!0,value:o.name,onChange:p,placeholder:"Search...",InputProps:{startAdornment:e.jsx(be,{position:"start",children:e.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}),e.jsxs(G,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(D,{onClick:()=>{r.onClose()},children:[e.jsx(v,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(D,{onClick:()=>{r.onClose()},children:[e.jsx(v,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(D,{onClick:()=>{r.onClose()},children:[e.jsx(v,{icon:"solar:export-bold"}),"Export"]})]})]})}Q.propTypes={filters:i.object,onFilters:i.func,roleOptions:i.array};function Z({filters:o,onFilters:t,onResetFilters:c,results:r,...p}){const a=h.useCallback(()=>{t("name","")},[t]),x=h.useCallback(()=>{t("status","all")},[t]),n=h.useCallback(d=>{const m=o.role.filter(w=>w!==d);t("role",m)},[o.role,t]);return e.jsxs(R,{spacing:1.5,...p,children:[e.jsxs(k,{sx:{typography:"body2"},children:[e.jsx("strong",{children:r}),e.jsx(k,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(R,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[o.status!=="all"&&e.jsx(E,{label:"Status:",children:e.jsx(B,{size:"small",label:ge(o.status),onDelete:x})}),!!o.role.length&&e.jsx(E,{label:"Role:",children:o.role.map(d=>e.jsx(B,{label:d,size:"small",onDelete:()=>n(d)},d))}),!!o.name&&e.jsx(E,{label:"Keyword:",children:e.jsx(B,{label:o.name,size:"small",onDelete:a})}),e.jsx(I,{color:"error",onClick:c,startIcon:e.jsx(v,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}Z.propTypes={filters:i.object,onFilters:i.func,onResetFilters:i.func,results:i.number};function E({label:o,children:t,sx:c,...r}){return e.jsxs(R,{component:je,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...c},...r,children:[e.jsx(k,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(R,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]})}E.propTypes={children:i.node,label:i.string,sx:i.object};const Ke=[{id:"srNo",label:"Sr No",width:88},{id:"object_url",label:"Document Image",width:100},{id:"doc_type",label:"Document Type",width:100},{id:"uploaded_on",label:"Date",width:100},{id:"status",label:"Status",width:100}],z={name:"",role:[],status:"all"};function Qe(){const{vendor:o}=we(),{enqueueSnackbar:t}=V(),[c,r]=h.useState([]);h.useEffect(()=>{p()},[]);function p(){Ce.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${o==null?void 0:o.csp_code}/documents`).then(s=>{var u;return r((u=s==null?void 0:s.data)==null?void 0:u.data)}).catch(s=>console.error(s))}const a=fe(),x=ye(),n=ve(),d=M(),[m,w]=h.useState(z),l=Ze({inputData:c,comparator:Se(a.order,a.orderBy),filters:m}),b=l.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage),O=a.dense?56:76,S=!Re(z,m),A=!l.length&&S||!l.length,f=h.useCallback((s,u)=>{a.onResetPage(),w(N=>({...N,[s]:u}))},[a]),P=h.useCallback(()=>{w(z)},[]),F=h.useCallback(s=>{const u=c.filter(N=>N.id!==s);t("Delete success!"),r(u),a.onUpdatePageDeleteRow(b.length)},[b.length,t,a,c]),_=h.useCallback(()=>{const s=c.filter(u=>!a.selected.includes(u.id));t("Delete success!"),r(s),a.onUpdatePageDeleteRows({totalRowsInPage:b.length,totalRowsFiltered:l.length})},[l.length,b.length,t,a,c]),y=h.useCallback(s=>{n.push(q.dashboard.user.edit(s))},[n]),L=h.useCallback(s=>{n.push(q.dashboard.document.document_view)},[n]),C=h.useCallback((s,u)=>{f("status",u)},[f]);return e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{maxWidth:x.themeStretch?!1:"xl",children:[e.jsx(Te,{heading:"List",links:[{name:"Dashboard",href:q.dashboard.root},{name:"Document",href:q.dashboard.document},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(De,{children:[e.jsx(ke,{value:m.status,onChange:C,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${Ae(s.palette.grey[500],.08)}`},children:Ye.map(s=>e.jsx(Fe,{iconPosition:"end",value:s.value,label:s.label,icon:e.jsx(H,{variant:(s.value==="all"||s.value===m.status)&&"filled"||"soft",color:s.value==="Aadhar"&&"secondary"||s.value==="certificates"&&"warning"||s.value==="gst_number"&&"success"||s.value==="pan_number"&&"info"||s.value==="milling_unit_video"&&"error"||"default",children:s.value==="all"?c.length:c.filter(u=>u.doc_type===s.value).length})},s.value))}),e.jsx(Q,{filters:m,onFilters:f,roleOptions:_e}),S&&e.jsx(Z,{filters:m,onFilters:f,onResetFilters:P,results:l.length,sx:{p:2.5,pt:0}}),e.jsxs(qe,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(Ee,{dense:!0,numSelected:a.selected.length,rowCount:l.length,onSelectAllRows:s=>a.onSelectAllRows(s,l.map(u=>u.id)),action:e.jsx(Ie,{title:"Delete",children:e.jsx(Le,{color:"primary",onClick:d.onTrue,children:e.jsx(v,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(Ne,{children:e.jsxs(Be,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ze,{order:a.order,orderBy:a.orderBy,headLabel:Ke,rowCount:l.length,numSelected:a.selected.length,onSort:a.onSort,onSelectAllRows:s=>a.onSelectAllRows(s,l.map(u=>u.id))}),e.jsxs(Me,{children:[l.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map((s,u)=>e.jsx(K,{index:u,row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>F(s.id),onViewRow:()=>L(s.id),onEditRow:()=>y(s.id)},s.id)),e.jsx(Oe,{height:O,emptyRows:Ve(a.page,a.rowsPerPage,l.length)}),e.jsx(We,{notFound:A})]})]})})]}),e.jsx(He,{count:l.length,page:a.page,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,dense:!0,onChangeDense:a.onChangeDense})]})]}),e.jsx($,{open:d.value,onClose:d.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsx("strong",{children:a.selected.length})," items?"]}),action:e.jsx(I,{variant:"contained",color:"error",onClick:()=>{_(),d.onFalse()},children:"Delete"})})]})}function Ze({inputData:o,comparator:t,filters:c}){const{name:r,status:p,role:a}=c,x=o.map((n,d)=>[n,d]);return x.sort((n,d)=>{const m=t(n[0],d[0]);return m!==0?m:n[1]-d[1]}),o=x.map(n=>n[0]),r&&(o=o.filter(n=>n.doc_type.toLowerCase().indexOf(r.toLowerCase())!==-1)),p!=="all"&&(o=o.filter(n=>n.doc_type===p)),a.length&&(o=o.filter(n=>a.includes(n.role))),o}const so=()=>e.jsx(e.Fragment,{children:e.jsx(Qe,{})});export{so as default};
