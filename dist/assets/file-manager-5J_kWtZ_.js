import{V as ee,r as i,bG as K,e$ as te,a as oe,c as D,bx as H,ch as ne,a9 as _,j as e,cK as je,f0 as Ce,f1 as N,cL as M,S as w,au as Y,T as B,d8 as se,av as fe,d9 as ae,bC as U,bZ as le,i as R,ci as re,da as q,t as P,ad as n,B as L,df as ye,bY as Z,h as G,cM as we,cN as ve,cO as De,cP as Re,di as Te,dj as Se,f2 as ke,db as ce,ab as Ie,I as Fe,az as Pe,f3 as Ae,d0 as Ee,d1 as Le,K as ie,f4 as de,f5 as Oe,c4 as Be,f6 as Me,b9 as _e,f7 as V,bR as W,dc as ze,aE as $e,u as We,A as Ne,e1 as Ye,dd as Ge,f8 as Ve,C as Ke,aM as He,f9 as Ue,e3 as qe,H as Ze}from"./index-rcXNTvDP.js";import{u as Je}from"./use-double-click-ZPdeGahO.js";import"./product-details-carousel--KD1O_YJ.js";import{s as Qe}from"./custom-date-range-picker-ef13lUwn.js";import{C as Xe}from"./CardActionArea-gVvLM3no.js";import{T as J}from"./text-max-line-2kXxqeyB.js";import{T as et,a as Q}from"./ToggleButtonGroup-jFwdRLAc.js";import"./carousel-arrow-index-swnvHKpw.js";import"./DatePicker-PGCNFiGH.js";function pe({row:t,selected:o,onSelectRow:j,onDeleteRow:s,index:l}){const{doc_type:m,object_url:g,uploaded_on:c}=t,b=g.indexOf("/",8),p=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/file${g.substring(b)}`,r=ee();i.useState(!1);const[f,T]=i.useState([]),{enqueueSnackbar:u}=K(),{copy:x}=te(),[y,S]=i.useState("");oe();const a=D();D();const C=D(),A=H();function O(k){T([k]),A.onClose(),I.onOpen(k)}const E=f.map(k=>({src:k})),I=ne(E);i.useCallback(k=>{S(k.target.value)},[]),Je({click:()=>{a.onTrue()},doubleClick:()=>console.info("DOUBLE CLICK")}),i.useCallback(()=>{u("Copied!"),x(t.url)},[x,u,t.url]);const F={borderTop:`solid 1px ${_(r.palette.grey[500],.16)}`,borderBottom:`solid 1px ${_(r.palette.grey[500],.16)}`,"&:first-of-type":{borderTopLeftRadius:16,borderBottomLeftRadius:16,borderLeft:`solid 1px ${_(r.palette.grey[500],.16)}`},"&:last-of-type":{borderTopRightRadius:16,borderBottomRightRadius:16,borderRight:`solid 1px ${_(r.palette.grey[500],.16)}`}};return e.jsxs(e.Fragment,{children:[e.jsxs(je,{selected:o,sx:{borderRadius:2,[`&.${Ce.selected}, &:hover`]:{backgroundColor:"background.paper",boxShadow:r.customShadows.z20,transition:r.transitions.create(["background-color","box-shadow"],{duration:r.transitions.duration.shortest}),"&:hover":{backgroundColor:"background.paper",boxShadow:r.customShadows.z20}},[`& .${N.root}`]:{...F},...a.value&&{[`& .${N.root}`]:{...F}}},children:[e.jsx(M,{sx:{whiteSpace:"nowrap"},children:l+1}),e.jsx(M,{children:e.jsx(w,{direction:"row",alignItems:"center",spacing:2,children:e.jsx(Y,{alt:"Document Image",src:p,sx:{mr:2,height:"48px",width:"48px",cursor:"pointer"},variant:"rounded",onClick:()=>O(p)})})}),e.jsx(M,{children:e.jsx(B,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer",...a.value&&{fontWeight:"fontWeightBold"}},children:se(m)})}),e.jsx(M,{sx:{whiteSpace:"nowrap"},children:e.jsx(fe,{primary:ae(c).format("DD/MM/YYYY"),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(M,{children:e.jsx(B,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer",...a.value&&{fontWeight:"fontWeightBold"}},children:"completed"})})]}),e.jsx(U,{open:A.open,onClose:A.onClose,arrow:"right-top",sx:{width:160},children:e.jsxs(le,{onClick:()=>O(p),children:[e.jsx(R,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(re,{index:I.selected,slides:E,open:I.open,close:I.onClose,onGetCurrentIndex:k=>I.setSelected(k)}),e.jsx(q,{open:C.value,onClose:C.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:s,children:"Delete"})})]})}pe.propTypes={row:n.object,selected:n.bool,onDeleteRow:n.func,onSelectRow:n.func};const tt=[{id:"srNo",label:"Sr No",width:88},{id:"document_img",label:"Document Image",width:88},{id:"document",label:"Document Type",width:100},{id:"date",label:"Date",width:100},{id:"status",label:"Status",width:100}];function ue({table:t,notFound:o,onDeleteRow:j,dataFiltered:s,onOpenConfirm:l}){const m=ee(),{dense:g,page:c,order:b,orderBy:d,rowsPerPage:p,selected:r,onSelectRow:f,onSelectAllRows:T,onSort:u,onChangeDense:x,onChangePage:y,onChangeRowsPerPage:S}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(L,{sx:{position:"relative",m:m.spacing(-2,-3,-3,-3)},children:[e.jsx(ye,{dense:g,numSelected:r.length,rowCount:s.length,onSelectAllRows:a=>T(a,s.map(C=>C.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(Z,{title:"Share",children:e.jsx(G,{color:"primary",children:e.jsx(R,{icon:"solar:share-bold"})})}),e.jsx(Z,{title:"Delete",children:e.jsx(G,{color:"primary",onClick:l,children:e.jsx(R,{icon:"solar:trash-bin-trash-bold"})})})]}),sx:{pl:1,pr:2,top:16,left:24,right:24,width:"auto",borderRadius:1.5}}),e.jsx(we,{sx:{p:m.spacing(0,3,3,3)},children:e.jsxs(ve,{size:g?"small":"medium",sx:{minWidth:960,borderCollapse:"separate",borderSpacing:"0 16px"},children:[e.jsx(De,{order:b,orderBy:d,headLabel:tt,rowCount:s.length,numSelected:r.length,onSort:u,onSelectAllRows:a=>T(a,s.map(C=>C.id)),sx:{[`& .${N.head}`]:{"&:first-of-type":{borderTopLeftRadius:12,borderBottomLeftRadius:12},"&:last-of-type":{borderTopRightRadius:12,borderBottomRightRadius:12}}}}),e.jsxs(Re,{children:[s.slice(c*p,c*p+p).map((a,C)=>e.jsx(pe,{row:a,index:C,selected:r.includes(a.object),onSelectRow:()=>f(a.object_url),onDeleteRow:()=>j(a.object_url)},a.id)),e.jsx(Te,{notFound:o,sx:{m:-2,borderRadius:1.5,border:`dashed 1px ${m.palette.divider}`}})]})]})})]}),e.jsx(Se,{count:s.length,page:c,rowsPerPage:p,onPageChange:y,onRowsPerPageChange:S,dense:!0,onChangeDense:x,sx:{[`& .${ke.toolbar}`]:{borderTopColor:"transparent"}}})]})}ue.propTypes={dataFiltered:n.array,notFound:n.bool,onDeleteRow:n.func,onOpenConfirm:n.func,table:n.object};function he({openDateRange:t,onCloseDateRange:o,onOpenDateRange:j,filters:s,onFilters:l,dateError:m,typeOptions:g}){const c=H(),b=s.type.length?s.type.map(ce).slice(0,2).join(", "):"All type",d=i.useCallback(u=>{l("name",u.target.value)},[l]);i.useCallback(u=>{l("startDate",u)},[l]),i.useCallback(u=>{l("endDate",u)},[l]);const p=i.useCallback(u=>{const x=s.type.includes(u)?s.type.filter(y=>y!==u):[...s.type,u];l("type",x)},[s.type,l]),r=i.useCallback(()=>{c.onClose(),l("type",[])},[l,c]),f=e.jsx(Ie,{value:s.name,onChange:d,placeholder:"Search...",InputProps:{startAdornment:e.jsx(Fe,{position:"start",children:e.jsx(R,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,md:260}}}),T=e.jsxs(e.Fragment,{children:[e.jsxs(P,{color:"inherit",onClick:c.onOpen,endIcon:e.jsx(R,{icon:c.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:[b,s.type.length>2&&e.jsxs(Pe,{color:"info",sx:{ml:1},children:["+",s.type.length-2]})]}),e.jsx(U,{open:c.open,onClose:c.onClose,sx:{p:2.5},children:e.jsxs(w,{spacing:2.5,children:[e.jsx(L,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},children:g.map(u=>{const x=s.type.includes(u.value);return e.jsx(Xe,{onClick:()=>p(u.value),sx:{p:1,borderRadius:1,cursor:"pointer",border:y=>`solid 1px ${_(y.palette.grey[500],.08)}`,...x&&{bgcolor:"action.selected"}},children:e.jsxs(w,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(Ae,{file:u.label}),e.jsx(B,{variant:x?"subtitle2":"body2",children:u.label})]})},u.value)})}),e.jsxs(w,{spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(P,{variant:"outlined",color:"inherit",onClick:r,children:"Clear"}),e.jsx(P,{variant:"contained",onClick:c.onClose,children:"Apply"})]})]})})]});return e.jsxs(w,{spacing:1,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},sx:{width:1},children:[f,e.jsx(w,{spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-end",flexGrow:1,children:T})]})}he.propTypes={dateError:n.bool,filters:n.object,onCloseDateRange:n.func,onFilters:n.func,onOpenDateRange:n.func,openDateRange:n.bool,typeOptions:n.array};function xe({file:t,selected:o,onSelect:j,onDelete:s,sx:l,...m}){var v;const g=t.object_url.indexOf("/",8),b=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/file${t.object_url.substring(g)}`,{enqueueSnackbar:d}=K(),{copy:p}=te(),[r,f]=i.useState("");i.useState(!1);const[T,u]=i.useState([]),x=D(),y=D(),S=D(),a=D(),C=H(),A=i.useCallback(h=>{f(h.target.value)},[]),O=i.useCallback(()=>{d("Copied!"),p(t.url)},[p,d,t.url]);function E(h){C.onClose(),u([h]),F.onOpen(h)}const I=T.map(h=>({src:h})),F=ne(I);w,G,C.open,C.onOpen,R;const k=e.jsxs(e.Fragment,{children:[e.jsx(Y,{alt:t.object_url,src:b,sx:{mr:2,height:"60px",width:"60px"},variant:"rounded",onClick:()=>E(b)}),e.jsx(J,{persistent:!0,variant:"subtitle2",onClick:a.onTrue,sx:{width:1,mt:2},children:se(t.doc_type)}),e.jsx(w,{direction:"row",alignItems:"center",sx:{maxWidth:.99,whiteSpace:"nowrap",typography:"caption",color:"text.disabled"},children:e.jsx(B,{noWrap:!0,component:"span",variant:"caption",children:ae(t.uploaded_on).format("DD/MM/YYYY")})}),e.jsx(J,{persistent:!0,variant:"subtitle2",onClick:a.onTrue,sx:{width:1,mt:1},children:"completed"})]});return Ee,`& .${Le.avatar}`+"",(v=t.shared)==null||v.map(h=>e.jsx(Y,{alt:h.name,src:h.avatarUrl},h.id)),e.jsxs(e.Fragment,{children:[e.jsx(w,{component:ie,variant:"outlined",alignItems:"flex-start",sx:{p:2.5,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(x.value||o)&&{bgcolor:"background.paper",boxShadow:h=>h.customShadows.z20},...l},...m,children:k}),e.jsx(U,{open:C.open,onClose:C.onClose,arrow:"right-top",sx:{width:160},children:e.jsxs(le,{onClick:()=>E(b),children:[e.jsx(R,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(de,{open:y.value,shared:t.shared,inviteEmail:r,onChangeInvite:A,onCopyLink:O,onClose:()=>{y.onFalse(),f("")}}),e.jsx(re,{index:F.selected,slides:I,open:F.open,close:F.onClose,onGetCurrentIndex:h=>F.setSelected(h)}),e.jsx(q,{open:S.value,onClose:S.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:s,children:"Delete"})})]})}xe.propTypes={file:n.oneOfType([n.string,n.object]),onDelete:n.func,onSelect:n.func,selected:n.bool,sx:n.object};function me({action:t,selected:o,rowCount:j,numSelected:s,onSelectAllItems:l,sx:m,...g}){return e.jsx(Oe,{children:e.jsxs(L,{sx:{right:0,zIndex:9,bottom:0,display:"flex",borderRadius:1.5,position:"fixed",alignItems:"center",bgcolor:"text.primary",p:c=>c.spacing(1.5,2,1.5,1),boxShadow:c=>c.customShadows.z20,m:{xs:2,md:3},...m},...g,children:[e.jsx(Be,{indeterminate:!!s&&s<j,checked:!!j&&s===j,onChange:c=>l(c.target.checked),icon:e.jsx(R,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(R,{icon:"eva:checkmark-circle-2-fill"}),indeterminateIcon:e.jsx(R,{icon:"eva:minus-circle-fill"})}),o&&e.jsxs(B,{variant:"subtitle2",sx:{mr:2,color:c=>c.palette.mode==="light"?"common.white":"grey.800"},children:[o.length," Items selected"]}),t&&t]})})}me.propTypes={action:n.node,numSelected:n.number,onSelectAllItems:n.func,rowCount:n.number,selected:n.array,sx:n.object};function ge({table:t,dataFiltered:o,onDeleteItem:j,onOpenConfirm:s}){const{selected:l,onSelectRow:m,onSelectAllRows:g}=t,c=i.useRef(null),[b,d]=i.useState(""),[p,r]=i.useState(""),f=D(),T=D(),u=D(),x=D();D();const y=i.useCallback(a=>{r(a.target.value)},[]),S=i.useCallback(a=>{d(a.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(L,{ref:c,children:[e.jsx(Me,{title:"Files",subTitle:`${o.filter(a=>a.doc_type!=="folder").length} files`,onOpen:u.onTrue,collapse:x.value,onCollapse:x.onToggle}),e.jsx(_e,{in:!x.value,unmountOnExit:!0,children:e.jsx(L,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:3,children:o.filter(a=>a.doc_type!=="folder").map(a=>e.jsx(xe,{file:a,selected:l.includes(a.id),onSelect:()=>m(a.id),onDelete:()=>j(a.id),sx:{maxWidth:"auto"}},a.id))})}),!!(l!=null&&l.length)&&e.jsx(me,{numSelected:l.length,rowCount:o.length,selected:l,onSelectAllItems:a=>g(a,o.map(C=>C.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(P,{size:"small",color:"error",variant:"contained",startIcon:e.jsx(R,{icon:"solar:trash-bin-trash-bold"}),onClick:s,sx:{mr:1},children:"Delete"}),e.jsx(P,{color:"primary",size:"small",variant:"contained",startIcon:e.jsx(R,{icon:"solar:share-bold"}),onClick:f.onTrue,children:"Share"})]})})]}),e.jsx(de,{open:f.value,inviteEmail:p,onChangeInvite:y,onClose:()=>{f.onFalse(),r("")}}),e.jsx(V,{open:u.value,onClose:u.onFalse}),e.jsx(V,{open:T.value,onClose:T.onFalse,title:"New Folder",onCreate:()=>{T.onFalse(),d(""),console.info("CREATE NEW FOLDER",b)},folderName:b,onChangeFolderName:S})]})}ge.propTypes={dataFiltered:n.array,onDeleteItem:n.func,onOpenConfirm:n.func,table:n.object};function be({filters:t,onFilters:o,canReset:j,onResetFilters:s,results:l,...m}){const g=Qe(t.startDate,t.endDate),c=i.useCallback(()=>{o("name","")},[o]),b=i.useCallback(p=>{const r=t.type.filter(f=>f!==p);o("type",r)},[t.type,o]),d=i.useCallback(()=>{o("startDate",null),o("endDate",null)},[o]);return e.jsxs(w,{spacing:1.5,...m,children:[e.jsxs(L,{sx:{typography:"body2"},children:[e.jsx("strong",{children:l}),e.jsx(L,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(w,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!t.type.length&&e.jsx(z,{label:"Types:",children:t.type.map(p=>e.jsx(W,{label:ce(p),size:"small",onDelete:()=>b(p)},p))}),t.startDate&&t.endDate&&e.jsx(z,{label:"Date:",children:e.jsx(W,{size:"small",label:g,onDelete:d})}),!!t.name&&e.jsx(z,{label:"Keyword:",children:e.jsx(W,{label:t.name,size:"small",onDelete:c})}),j&&e.jsx(P,{color:"error",onClick:s,startIcon:e.jsx(R,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}be.propTypes={canReset:n.bool,filters:n.object,onFilters:n.func,onResetFilters:n.func,results:n.number};function z({label:t,children:o,sx:j,...s}){return e.jsxs(w,{component:ie,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...j},...s,children:[e.jsx(L,{component:"span",sx:{typography:"subtitle2"},children:t}),e.jsx(w,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}z.propTypes={children:n.node,label:n.string,sx:n.object};const X={name:"",type:[],startDate:null,endDate:null};function ot(){const{enqueueSnackbar:t}=K(),o=ze({defaultRowsPerPage:10}),j=$e(),s=D(),{vendor:l}=We(),m=D(),g=D(),[c,b]=i.useState("list");oe();const[d,p]=i.useState([]),[r,f]=i.useState(X);i.useEffect(()=>{T()},[]);function T(){Ne.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${l==null?void 0:l.csp_code}/documents`).then(v=>{var h;return p((h=v==null?void 0:v.data)==null?void 0:h.data)}).catch(v=>v)}const u=Ye(r.startDate,r.endDate),x=nt({inputData:d,comparator:Ge(o.order,o.orderBy),filters:r,dateError:u}),y=x.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage),S=!!r.name||!!r.type.length||!!r.startDate&&!!r.endDate,a=!x.length&&S||!x.length,C=i.useCallback((v,h)=>{h!==null&&b(h)},[]),A=i.useCallback((v,h)=>{o.onResetPage(),f($=>({...$,[v]:h}))},[o]),O=i.useCallback(()=>{f(X)},[]),E=i.useCallback(v=>{const h=d.filter($=>$.id!==v);t("Delete success!"),p(h),o.onUpdatePageDeleteRow(y.length)},[y.length,t,o,d]),I=i.useCallback(()=>{const v=d.filter(h=>!o.selected.includes(h.id));t("Delete success!"),p(v),o.onUpdatePageDeleteRows({totalRowsInPage:y.length,totalRowsFiltered:x.length})},[x.length,y.length,t,o,d]),F=e.jsxs(w,{spacing:2,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(he,{openDateRange:s.value,onCloseDateRange:s.onFalse,onOpenDateRange:s.onTrue,filters:r,onFilters:A,dateError:u,typeOptions:Ve}),e.jsxs(et,{size:"small",value:c,exclusive:!0,onChange:C,children:[e.jsx(Q,{value:"list",children:e.jsx(R,{icon:"solar:list-bold"})}),e.jsx(Q,{value:"grid",children:e.jsx(R,{icon:"mingcute:dot-grid-fill"})})]})]}),k=e.jsx(be,{filters:r,onResetFilters:O,canReset:S,onFilters:A,results:x.length});return e.jsxs(e.Fragment,{children:[e.jsxs(Ke,{maxWidth:j.themeStretch?!1:"xl",children:[e.jsx(w,{direction:"row",alignItems:"center",justifyContent:"space-between",children:e.jsx(B,{variant:"h4",children:"Documents"})}),e.jsxs(w,{spacing:2.5,sx:{my:{xs:3,md:5}},children:[F,S&&k]}),a?e.jsx(He,{filled:!0,title:"No Data",sx:{py:10}}):e.jsx(e.Fragment,{children:c==="list"?e.jsx(ue,{table:o,dataFiltered:x,onDeleteRow:E,notFound:a,onOpenConfirm:m.onTrue}):e.jsx(ge,{table:o,dataFiltered:x,onDeleteItem:E,onOpenConfirm:m.onTrue})})]}),e.jsx(V,{open:g.value,onClose:g.onFalse}),e.jsx(q,{open:m.value,onClose:m.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",o.selected.length," "]})," items?"]}),action:e.jsx(P,{variant:"contained",color:"error",onClick:()=>{I(),m.onFalse()},children:"Delete"})})]})}function nt({inputData:t,comparator:o,filters:j,dateError:s}){const{name:l,type:m,startDate:g,endDate:c}=j,b=t.map((d,p)=>[d,p]);return b.sort((d,p)=>{const r=o(d[0],p[0]);return r!==0?r:d[1]-p[1]}),t=b.map(d=>d[0]),l&&(t=t.filter(d=>d.doc_type.toLowerCase().indexOf(l.toLowerCase())!==-1)),m.length&&(t=t.filter(d=>m.includes(Ue(d.doc_type)))),s||g&&c&&(t=t.filter(d=>qe(d.createdAt,g,c))),t}function ht(){return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:e.jsx("title",{children:" Dashboard: Documents"})}),e.jsx(ot,{})]})}export{ht as default};
