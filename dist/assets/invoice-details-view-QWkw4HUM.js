import{j as e,S as d,i as C,ef as M,aa as Se,T as g,B as y,cl as Te,bN as w,_ as x,c as $,bw as oe,bO as H,bP as h,cx as de,az as De,aA as K,L as ke,aB as q,dv as te,aF as ce,h as R,by as xe,cf as F,O as z,d6 as _e,D as N,r as T,E as Fe,cI as Re,cJ as Ae,cK as Ne,eg as Q,eh as Pe,ac as he,I as X,ei as We,cu as L,a0 as ze,bH as $e,ej as qe,bC as Ee,bX as ee,ek as Be,el as le,g as A,em as pe,en as Oe,ag as Ve,b$ as Y,v as ie,a as je,d as ne,cp as I,eo as Le,ep as E,e as G,f as Ie,p as P,F as Ge,q as me,k as ae,cq as He,o as Qe,aK as ue,ee as be,C as ye,cv as ge,eq as Ue,er as Ke,es as i,et as Je,eu as o,ev as Me,ew as Xe,cb as W,ex as Ye,W as Ze,bx as es,ey as ss,bS as ts,bT as ls,bU as is,ez as ns,bW as as,eA as rs,aD as os,am as J}from"./index-XFh7EM9A.js";import{b as re}from"./address-list-dialog-7jDlViok.js";function ds({title:t,total:l,icon:r,color:a,percent:c,price:j}){return e.jsxs(d,{spacing:2.5,direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[e.jsxs(d,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[e.jsx(C,{icon:r,width:32,sx:{color:a,position:"absolute"}}),e.jsx(M,{variant:"determinate",value:c,size:56,thickness:2,sx:{color:a,opacity:.48}}),e.jsx(M,{variant:"determinate",value:100,size:56,thickness:3,sx:{top:0,left:0,opacity:.48,position:"absolute",color:u=>Se(u.palette.grey[500],.16)}})]}),e.jsxs(d,{spacing:.5,children:[e.jsx(g,{variant:"subtitle1",children:t}),e.jsxs(y,{component:"span",sx:{color:"text.disabled",typography:"body2"},children:[Te(l)," invoices"]}),e.jsx(g,{variant:"subtitle2",children:w(j)})]})]})}ds.propTypes={color:x.string,icon:x.oneOfType([x.element,x.string]),percent:x.number,price:x.number,title:x.string,total:x.number};function cs({row:t,selected:l,onSelectRow:r,onViewRow:a,onEditRow:c,onDeleteRow:j}){const{sent:u,invoiceNumber:n,createDate:f,dueDate:p,status:m,invoiceTo:_,totalAmount:k}=t,s=$(),D=oe();return e.jsxs(e.Fragment,{children:[e.jsxs(H,{hover:!0,selected:l,children:[e.jsx(h,{padding:"checkbox",children:e.jsx(de,{checked:l,onClick:r})}),e.jsxs(h,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(De,{alt:_.name,sx:{mr:2},children:_.name.charAt(0).toUpperCase()}),e.jsx(K,{disableTypography:!0,primary:e.jsx(g,{variant:"body2",noWrap:!0,children:_.name}),secondary:e.jsx(ke,{noWrap:!0,variant:"body2",onClick:a,sx:{color:"text.disabled",cursor:"pointer"},children:n})})]}),e.jsx(h,{children:e.jsx(K,{primary:q(f),secondary:te(f),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(h,{children:e.jsx(K,{primary:q(p),secondary:te(p),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(h,{children:w(k)}),e.jsx(h,{align:"center",children:u}),e.jsx(h,{children:e.jsx(ce,{variant:"soft",color:m==="paid"&&"success"||m==="pending"&&"warning"||m==="overdue"&&"error"||"default",children:m})}),e.jsx(h,{align:"right",sx:{px:1},children:e.jsx(R,{color:D.open?"inherit":"default",onClick:D.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(xe,{open:D.open,onClose:D.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(F,{onClick:()=>{a(),D.onClose()},children:[e.jsx(C,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(F,{onClick:()=>{c(),D.onClose()},children:[e.jsx(C,{icon:"solar:pen-bold"}),"Edit"]}),e.jsx(z,{sx:{borderStyle:"dashed"}}),e.jsxs(F,{onClick:()=>{s.onTrue(),D.onClose()},sx:{color:"error.main"},children:[e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(_e,{open:s.value,onClose:s.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(N,{variant:"contained",color:"error",onClick:j,children:"Delete"})})]})}cs.propTypes={onDeleteRow:x.func,onEditRow:x.func,onSelectRow:x.func,onViewRow:x.func,row:x.object,selected:x.bool};function xs({filters:t,onFilters:l,dateError:r,serviceOptions:a}){const c=oe(),j=T.useCallback(p=>{l("name",p.target.value)},[l]),u=T.useCallback(p=>{l("service",typeof p.target.value=="string"?p.target.value.split(","):p.target.value)},[l]),n=T.useCallback(p=>{l("startDate",p)},[l]),f=T.useCallback(p=>{l("endDate",p)},[l]);return e.jsxs(e.Fragment,{children:[e.jsxs(d,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(Fe,{sx:{flexShrink:0,width:{xs:1,md:180}},children:[e.jsx(Re,{children:"Commodity"}),e.jsx(Ae,{multiple:!0,value:t.service,onChange:u,input:e.jsx(Ne,{label:"Commodity"}),renderValue:p=>p.map(m=>m).join(", "),sx:{textTransform:"capitalize"},children:a.map(p=>e.jsxs(F,{value:p,children:[e.jsx(de,{disableRipple:!0,size:"small",checked:t.service.includes(p)}),p]},p))})]}),e.jsx(Q,{label:"Start date",value:t.startDate,onChange:n,slotProps:{textField:{fullWidth:!0}},sx:{maxWidth:{md:180}}}),e.jsx(Q,{label:"End date",value:t.endDate,onChange:f,slotProps:{textField:{fullWidth:!0,error:r,helperText:r&&"End date must be later than start date"}},sx:{maxWidth:{md:180},[`& .${Pe.root}`]:{position:{md:"absolute"},bottom:{md:-40}}}}),e.jsxs(d,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(he,{fullWidth:!0,value:t.name,onChange:j,placeholder:"Search customer or invoice number...",InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(C,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(R,{onClick:c.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(xe,{open:c.open,onClose:c.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(F,{onClick:()=>{c.onClose()},children:[e.jsx(C,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(F,{onClick:()=>{c.onClose()},children:[e.jsx(C,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(F,{onClick:()=>{c.onClose()},children:[e.jsx(C,{icon:"solar:export-bold"}),"Export"]})]})]})}xs.propTypes={dateError:x.bool,filters:x.object,onFilters:x.func,serviceOptions:x.array};function hs({filters:t,onFilters:l,onResetFilters:r,results:a,...c}){const j=We(t.startDate,t.endDate),u=T.useCallback(()=>{l("name","")},[l]),n=T.useCallback(m=>{const _=t.service.filter(k=>k!==m);l("service",_)},[t.service,l]),f=T.useCallback(()=>{l("status","all")},[l]),p=T.useCallback(()=>{l("startDate",null),l("endDate",null)},[l]);return e.jsxs(d,{spacing:1.5,...c,children:[e.jsxs(y,{sx:{typography:"body2"},children:[e.jsx("strong",{children:a}),e.jsx(y,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(d,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!t.service.length&&e.jsx(O,{label:"Service:",children:t.service.map(m=>e.jsx(L,{label:m,size:"small",onDelete:()=>n(m)},m))}),t.status!=="all"&&e.jsx(O,{label:"Status:",children:e.jsx(L,{size:"small",label:t.status,onDelete:f})}),t.startDate&&t.endDate&&e.jsx(O,{label:"Date:",children:e.jsx(L,{size:"small",label:j,onDelete:p})}),!!t.name&&e.jsx(O,{label:"Keyword:",children:e.jsx(L,{label:t.name,size:"small",onDelete:u})}),e.jsx(N,{color:"error",onClick:r,startIcon:e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}hs.propTypes={filters:x.object,onFilters:x.func,onResetFilters:x.func,results:x.number};function O({label:t,children:l,sx:r,...a}){return e.jsxs(d,{component:ze,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...r},...a,children:[e.jsx(y,{component:"span",sx:{typography:"subtitle2"},children:t}),e.jsx(d,{spacing:1,direction:"row",flexWrap:"wrap",children:l})]})}O.propTypes={children:x.node,label:x.string,sx:x.object};var ps=qe,js=Ee;function ms(t){return t&&t.length?ps(t,js):0}var us=ms;const bs=$e(us);function ys(){const{control:t,setValue:l,watch:r,resetField:a}=ee(),{fields:c,append:j,remove:u}=Be({control:t,name:"items"}),n=r(),f=n.items.map(S=>S.quantity*S.price),p=bs(f),m=p-n.discount-n.shipping+n.taxes;T.useEffect(()=>{l("totalAmount",m)},[l,m]);const _=()=>{j({title:"",description:"",service:"",quantity:1,price:0,total:0})},k=S=>{u(S)},s=T.useCallback(S=>{a(`items[${S}].quantity`),a(`items[${S}].price`),a(`items[${S}].total`)},[a]),D=T.useCallback((S,b)=>{var v;l(`items[${S}].price`,(v=le.find(V=>V.name===b))==null?void 0:v.price),l(`items[${S}].total`,n.items.map(V=>V.quantity*V.price)[S])},[l,n.items]),U=T.useCallback((S,b)=>{l(`items[${b}].quantity`,Number(S.target.value)),l(`items[${b}].total`,n.items.map(v=>v.quantity*v.price)[b])},[l,n.items]),se=T.useCallback((S,b)=>{l(`items[${b}].price`,Number(S.target.value)),l(`items[${b}].total`,n.items.map(v=>v.quantity*v.price)[b])},[l,n.items]),ve=e.jsxs(d,{spacing:2,alignItems:"flex-end",sx:{mt:3,textAlign:"right",typography:"body2"},children:[e.jsxs(d,{direction:"row",children:[e.jsx(y,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(y,{sx:{width:160,typography:"subtitle2"},children:w(p)||"-"})]}),e.jsxs(d,{direction:"row",children:[e.jsx(y,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(y,{sx:{width:160,...n.shipping&&{color:"error.main"}},children:n.shipping?`- ${w(n.shipping)}`:"-"})]}),e.jsxs(d,{direction:"row",children:[e.jsx(y,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(y,{sx:{width:160,...n.discount&&{color:"error.main"}},children:n.discount?`- ${w(n.discount)}`:"-"})]}),e.jsxs(d,{direction:"row",children:[e.jsx(y,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(y,{sx:{width:160},children:n.taxes?w(n.taxes):"-"})]}),e.jsxs(d,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx(y,{children:"Total"}),e.jsx(y,{sx:{width:160},children:w(m)||"-"})]})]});return e.jsxs(y,{sx:{p:3},children:[e.jsx(g,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),e.jsx(d,{divider:e.jsx(z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:c.map((S,b)=>e.jsxs(d,{alignItems:"flex-end",spacing:1.5,children:[e.jsxs(d,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:[e.jsx(A,{size:"small",name:`items[${b}].title`,label:"Title",InputLabelProps:{shrink:!0}}),e.jsx(A,{size:"small",name:`items[${b}].description`,label:"Description",InputLabelProps:{shrink:!0}}),e.jsxs(pe,{name:`items[${b}].service`,size:"small",label:"Service",InputLabelProps:{shrink:!0},sx:{maxWidth:{md:160}},children:[e.jsx(F,{value:"",onClick:()=>s(b),sx:{fontStyle:"italic",color:"text.secondary"},children:"None"}),e.jsx(z,{sx:{borderStyle:"dashed"}}),le.map(v=>e.jsx(F,{value:v.name,onClick:()=>D(b,v.name),children:v.name},v.id))]}),e.jsx(A,{size:"small",type:"number",name:`items[${b}].quantity`,label:"Quantity",placeholder:"0",onChange:v=>U(v,b),InputLabelProps:{shrink:!0},sx:{maxWidth:{md:96}}}),e.jsx(A,{size:"small",type:"number",name:`items[${b}].price`,label:"Price",placeholder:"0.00",onChange:v=>se(v,b),InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(y,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})},sx:{maxWidth:{md:96}}}),e.jsx(A,{disabled:!0,size:"small",type:"number",name:`items[${b}].total`,label:"Total",placeholder:"0.00",value:n.items[b].total===0?"":n.items[b].total.toFixed(2),onChange:v=>se(v,b),InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(y,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})},sx:{maxWidth:{md:104},[`& .${Oe.input}`]:{textAlign:{md:"right"}}}})]}),e.jsx(N,{size:"small",color:"error",startIcon:e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),onClick:()=>k(b),children:"Remove"})]},S.id))}),e.jsx(z,{sx:{my:3,borderStyle:"dashed"}}),e.jsxs(d,{spacing:3,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(N,{size:"small",color:"primary",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),onClick:_,sx:{flexShrink:0},children:"Add Item"}),e.jsxs(d,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1},children:[e.jsx(A,{size:"small",label:"Shipping($)",name:"shipping",type:"number",sx:{maxWidth:{md:120}}}),e.jsx(A,{size:"small",label:"Discount($)",name:"discount",type:"number",sx:{maxWidth:{md:120}}}),e.jsx(A,{size:"small",label:"Taxes(%)",name:"taxes",type:"number",sx:{maxWidth:{md:120}}})]})]}),ve]})}function gs(){var p;const{watch:t,setValue:l,formState:{errors:r}}=ee(),a=Ve("up","md"),c=t(),{invoiceFrom:j,invoiceTo:u}=c,n=$(),f=$();return e.jsxs(e.Fragment,{children:[e.jsxs(d,{spacing:{xs:3,md:5},direction:{xs:"column",md:"row"},divider:e.jsx(z,{flexItem:!0,orientation:a?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[e.jsxs(d,{sx:{width:1},children:[e.jsxs(d,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(g,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"From:"}),e.jsx(R,{onClick:n.onTrue,children:e.jsx(C,{icon:"solar:pen-bold"})})]}),e.jsxs(d,{spacing:1,children:[e.jsx(g,{variant:"subtitle2",children:j.name}),e.jsx(g,{variant:"body2",children:j.fullAddress}),e.jsxs(g,{variant:"body2",children:[" ",j.phoneNumber]})]})]}),e.jsxs(d,{sx:{width:1},children:[e.jsxs(d,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(g,{variant:"h6",sx:{color:"text.disabled",flexGrow:1},children:"To:"}),e.jsx(R,{onClick:f.onTrue,children:e.jsx(C,{icon:u?"solar:pen-bold":"mingcute:add-line"})})]}),u?e.jsxs(d,{spacing:1,children:[e.jsx(g,{variant:"subtitle2",children:u.name}),e.jsx(g,{variant:"body2",children:u.fullAddress}),e.jsxs(g,{variant:"body2",children:[" ",u.phoneNumber]})]}):e.jsx(g,{typography:"caption",sx:{color:"error.main"},children:(p=r.invoiceTo)==null?void 0:p.message})]})]}),e.jsx(re,{title:"Customers",open:n.value,onClose:n.onFalse,selected:m=>(j==null?void 0:j.id)===m,onSelect:m=>l("invoiceFrom",m),list:Y,action:e.jsx(N,{size:"small",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})}),e.jsx(re,{title:"Customers",open:f.value,onClose:f.onFalse,selected:m=>(u==null?void 0:u.id)===m,onSelect:m=>l("invoiceTo",m),list:Y,action:e.jsx(N,{size:"small",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}function Cs(){const{control:t,watch:l}=ee(),r=l();return e.jsxs(d,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[e.jsx(A,{disabled:!0,name:"invoiceNumber",label:"Invoice number",value:r.invoiceNumber}),e.jsx(pe,{fullWidth:!0,name:"status",label:"Status",InputLabelProps:{shrink:!0},PaperPropsSx:{textTransform:"capitalize"},children:["paid","pending","overdue","draft"].map(a=>e.jsx(F,{value:a,children:a},a))}),e.jsx(ie,{name:"createDate",control:t,render:({field:a,fieldState:{error:c}})=>e.jsx(Q,{label:"Date create",value:a.value,onChange:j=>{a.onChange(j)},slotProps:{textField:{fullWidth:!0,error:!!c,helperText:c==null?void 0:c.message}}})}),e.jsx(ie,{name:"dueDate",control:t,render:({field:a,fieldState:{error:c}})=>e.jsx(Q,{label:"Due date",value:a.value,onChange:j=>{a.onChange(j)},slotProps:{textField:{fullWidth:!0,error:!!c,helperText:c==null?void 0:c.message}}})})]})}function Ce({currentInvoice:t}){const l=je(),r=$(),a=$(),c=ne().shape({invoiceTo:I().nullable().required("Invoice to is required"),createDate:I().nullable().required("Create date is required"),dueDate:I().required("Due date is required").test("date-min","Due date must be later than create date",(k,{parent:s})=>k.getTime()>s.createDate.getTime()),items:Le(()=>He().of(ne({title:G().required("Title is required"),service:G().required("Service is required"),quantity:E().required("Quantity is required").min(1,"Quantity must be more than 0")}))),taxes:E(),status:G(),discount:E(),shipping:E(),invoiceFrom:I(),totalAmount:E(),invoiceNumber:G()}),j=T.useMemo(()=>({invoiceNumber:(t==null?void 0:t.invoiceNumber)||"INV-1990",createDate:(t==null?void 0:t.createDate)||new Date,dueDate:(t==null?void 0:t.dueDate)||null,taxes:(t==null?void 0:t.taxes)||0,shipping:(t==null?void 0:t.shipping)||0,status:(t==null?void 0:t.status)||"draft",discount:(t==null?void 0:t.discount)||0,invoiceFrom:(t==null?void 0:t.invoiceFrom)||Y[0],invoiceTo:(t==null?void 0:t.invoiceTo)||null,items:(t==null?void 0:t.items)||[{title:"",description:"",service:"",quantity:1,price:0,total:0}],totalAmount:(t==null?void 0:t.totalAmount)||0}),[t]),u=Ie({resolver:Qe(c),defaultValues:j}),{reset:n,handleSubmit:f,formState:{isSubmitting:p}}=u,m=f(async k=>{r.onTrue();try{await new Promise(s=>setTimeout(s,500)),n(),r.onFalse(),l.push(P.dashboard.invoice.root),console.info("DATA",JSON.stringify(k,null,2))}catch(s){console.error(s),r.onFalse()}}),_=f(async k=>{a.onTrue();try{await new Promise(s=>setTimeout(s,500)),n(),a.onFalse(),l.push(P.dashboard.invoice.root),console.info("DATA",JSON.stringify(k,null,2))}catch(s){console.error(s),a.onFalse()}});return e.jsxs(Ge,{methods:u,children:[e.jsxs(me,{children:[e.jsx(gs,{}),e.jsx(Cs,{}),e.jsx(ys,{})]}),e.jsxs(d,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:[e.jsx(ae,{color:"inherit",size:"large",variant:"outlined",loading:r.value&&p,onClick:m,children:"Save as Draft"}),e.jsxs(ae,{size:"large",variant:"contained",loading:a.value&&p,onClick:_,children:[t?"Update":"Create"," & Send"]})]})]})}Ce.propTypes={currentInvoice:x.object};function fs({id:t}){const l=ue(),r=be.find(a=>a.id===t);return e.jsxs(ye,{maxWidth:l.themeStretch?!1:"lg",children:[e.jsx(ge,{heading:"Edit",links:[{name:"Dashboard",href:P.dashboard.root},{name:"Invoice",href:P.dashboard.invoice.root},{name:r==null?void 0:r.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ce,{currentInvoice:r})]})}fs.propTypes={id:x.string};Me.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});const ws=()=>T.useMemo(()=>Xe.create({col4:{width:"25%"},col8:{width:"75%"},col6:{width:"50%"},mb4:{marginBottom:4},mb8:{marginBottom:8},mb40:{marginBottom:40},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},body2:{fontSize:9},subtitle1:{fontSize:10,fontWeight:700},subtitle2:{fontSize:9,fontWeight:700},alignRight:{textAlign:"right"},page:{fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#FFFFFF",textTransform:"capitalize",padding:"40px 24px 120px 24px"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#DFE3E8"},gridContainer:{flexDirection:"row",justifyContent:"space-between"},table:{display:"flex",width:"auto"},tableRow:{padding:"8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#DFE3E8"},noBorder:{paddingTop:8,paddingBottom:0,borderBottomWidth:0},tableCell_1:{width:"5%"},tableCell_2:{width:"50%",paddingRight:16},tableCell_3:{width:"15%"}}),[]);function Z({invoice:t,currentStatus:l}){const{items:r,taxes:a,dueDate:c,discount:j,shipping:u,invoiceTo:n,createDate:f,totalAmount:p,invoiceFrom:m,invoiceNumber:_,subTotal:k}=t,s=ws();return e.jsx(Ue,{children:e.jsxs(Ke,{size:"A4",style:s.page,children:[e.jsxs(i,{style:[s.gridContainer,s.mb40],children:[e.jsx(Je,{source:"/logo/logo_single.png",style:{width:48,height:48}}),e.jsxs(i,{style:{alignItems:"flex-end",flexDirection:"column"},children:[e.jsx(o,{style:s.h3,children:l}),e.jsxs(o,{children:[" ",_," "]})]})]}),e.jsxs(i,{style:[s.gridContainer,s.mb40],children:[e.jsxs(i,{style:s.col6,children:[e.jsx(o,{style:[s.subtitle2,s.mb4],children:"Invoice from"}),e.jsx(o,{style:s.body2,children:m.name}),e.jsx(o,{style:s.body2,children:m.fullAddress}),e.jsx(o,{style:s.body2,children:m.phoneNumber})]}),e.jsxs(i,{style:s.col6,children:[e.jsx(o,{style:[s.subtitle2,s.mb4],children:"Invoice to"}),e.jsx(o,{style:s.body2,children:n.name}),e.jsx(o,{style:s.body2,children:n.fullAddress}),e.jsx(o,{style:s.body2,children:n.phoneNumber})]})]}),e.jsxs(i,{style:[s.gridContainer,s.mb40],children:[e.jsxs(i,{style:s.col6,children:[e.jsx(o,{style:[s.subtitle2,s.mb4],children:"Date create"}),e.jsx(o,{style:s.body2,children:q(f)})]}),e.jsxs(i,{style:s.col6,children:[e.jsx(o,{style:[s.subtitle2,s.mb4],children:"Due date"}),e.jsx(o,{style:s.body2,children:q(c)})]})]}),e.jsx(o,{style:[s.subtitle1,s.mb8],children:"Invoice Details"}),e.jsxs(i,{style:s.table,children:[e.jsx(i,{children:e.jsxs(i,{style:s.tableRow,children:[e.jsx(i,{style:s.tableCell_1,children:e.jsx(o,{style:s.subtitle2,children:"#"})}),e.jsx(i,{style:s.tableCell_2,children:e.jsx(o,{style:s.subtitle2,children:"Description"})}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{style:s.subtitle2,children:"Qty"})}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{style:s.subtitle2,children:"Unit price"})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{style:s.subtitle2,children:"Total"})})]})}),e.jsxs(i,{children:[r.map((D,U)=>e.jsxs(i,{style:s.tableRow,children:[e.jsx(i,{style:s.tableCell_1,children:e.jsx(o,{children:U+1})}),e.jsxs(i,{style:s.tableCell_2,children:[e.jsx(o,{style:s.subtitle2,children:D.title}),e.jsx(o,{children:D.description})]}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{children:D.quantity})}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{children:D.price})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{children:w(D.price*D.quantity)})})]},D.id)),e.jsxs(i,{style:[s.tableRow,s.noBorder],children:[e.jsx(i,{style:s.tableCell_1}),e.jsx(i,{style:s.tableCell_2}),e.jsx(i,{style:s.tableCell_3}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{children:"Subtotal"})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{children:w(k)})})]}),e.jsxs(i,{style:[s.tableRow,s.noBorder],children:[e.jsx(i,{style:s.tableCell_1}),e.jsx(i,{style:s.tableCell_2}),e.jsx(i,{style:s.tableCell_3}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{children:"Shipping"})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{children:w(-u)})})]}),e.jsxs(i,{style:[s.tableRow,s.noBorder],children:[e.jsx(i,{style:s.tableCell_1}),e.jsx(i,{style:s.tableCell_2}),e.jsx(i,{style:s.tableCell_3}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{children:"Discount"})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{children:w(-j)})})]}),e.jsxs(i,{style:[s.tableRow,s.noBorder],children:[e.jsx(i,{style:s.tableCell_1}),e.jsx(i,{style:s.tableCell_2}),e.jsx(i,{style:s.tableCell_3}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{children:"Taxes"})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{children:w(a)})})]}),e.jsxs(i,{style:[s.tableRow,s.noBorder],children:[e.jsx(i,{style:s.tableCell_1}),e.jsx(i,{style:s.tableCell_2}),e.jsx(i,{style:s.tableCell_3}),e.jsx(i,{style:s.tableCell_3,children:e.jsx(o,{style:s.h4,children:"Total"})}),e.jsx(i,{style:[s.tableCell_3,s.alignRight],children:e.jsx(o,{style:s.h4,children:w(p)})})]})]})]}),e.jsxs(i,{style:[s.gridContainer,s.footer],fixed:!0,children:[e.jsxs(i,{style:s.col8,children:[e.jsx(o,{style:s.subtitle2,children:"NOTES"}),e.jsx(o,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),e.jsxs(i,{style:[s.col4,s.alignRight],children:[e.jsx(o,{style:s.subtitle2,children:"Have a Question?"}),e.jsx(o,{children:"support@abcapp.com"})]})]})]})})}Z.propTypes={currentStatus:x.string,invoice:x.object};function fe({invoice:t,currentStatus:l,statusOptions:r,onChangeStatus:a}){const c=je(),j=$(),u=T.useCallback(()=>{c.push(P.dashboard.invoice.edit(t.id))},[t.id,c]);return e.jsxs(e.Fragment,{children:[e.jsxs(d,{spacing:3,direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:[e.jsxs(d,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[e.jsx(W,{title:"Edit",children:e.jsx(R,{onClick:u,children:e.jsx(C,{icon:"solar:pen-bold"})})}),e.jsx(W,{title:"View",children:e.jsx(R,{onClick:j.onTrue,children:e.jsx(C,{icon:"solar:eye-bold"})})}),e.jsx(Ye,{document:e.jsx(Z,{invoice:t,currentStatus:l}),fileName:t.invoiceNumber,style:{textDecoration:"none"},children:({loading:n})=>e.jsx(W,{title:"Download",children:e.jsx(R,{children:n?e.jsx(M,{size:24,color:"inherit"}):e.jsx(C,{icon:"eva:cloud-download-fill"})})})}),e.jsx(W,{title:"Print",children:e.jsx(R,{children:e.jsx(C,{icon:"solar:printer-minimalistic-bold"})})}),e.jsx(W,{title:"Send",children:e.jsx(R,{children:e.jsx(C,{icon:"iconamoon:send-fill"})})}),e.jsx(W,{title:"Share",children:e.jsx(R,{children:e.jsx(C,{icon:"solar:share-bold"})})})]}),e.jsx(he,{fullWidth:!0,select:!0,label:"Status",value:l,onChange:a,sx:{maxWidth:160},children:r.map(n=>e.jsx(F,{value:n.value,children:n.label},n.value))})]}),e.jsx(Ze,{fullScreen:!0,open:j.value,children:e.jsxs(y,{sx:{height:1,display:"flex",flexDirection:"column"},children:[e.jsx(es,{sx:{p:1.5},children:e.jsx(N,{color:"inherit",variant:"contained",onClick:j.onFalse,children:"Close"})}),e.jsx(y,{sx:{flexGrow:1,height:1,overflow:"hidden"},children:e.jsx(ss,{width:"100%",height:"100%",style:{border:"none"},children:e.jsx(Z,{invoice:t,currentStatus:l})})})]})})]})}fe.propTypes={currentStatus:x.string,invoice:x.object,onChangeStatus:x.func,statusOptions:x.array};const B=os(H)(({theme:t})=>({"& td":{textAlign:"right",borderBottom:"none",paddingTop:t.spacing(1),paddingBottom:t.spacing(1)}}));function we({invoice:t}){const[l,r]=T.useState(t.status),a=T.useCallback(n=>{r(n.target.value)},[]),c=e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(h,{colSpan:3}),e.jsxs(h,{sx:{color:"text.secondary"},children:[e.jsx(y,{sx:{mt:2}}),"Subtotal"]}),e.jsxs(h,{width:120,sx:{typography:"subtitle2"},children:[e.jsx(y,{sx:{mt:2}}),w(t.subTotal)]})]}),e.jsxs(B,{children:[e.jsx(h,{colSpan:3}),e.jsx(h,{sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(h,{width:120,sx:{color:"error.main",typography:"body2"},children:w(-t.shipping)})]}),e.jsxs(B,{children:[e.jsx(h,{colSpan:3}),e.jsx(h,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(h,{width:120,sx:{color:"error.main",typography:"body2"},children:w(-t.discount)})]}),e.jsxs(B,{children:[e.jsx(h,{colSpan:3}),e.jsx(h,{sx:{color:"text.secondary"},children:"Taxes"}),e.jsx(h,{width:120,children:w(t.taxes)})]}),e.jsxs(B,{children:[e.jsx(h,{colSpan:3}),e.jsx(h,{sx:{typography:"subtitle1"},children:"Total"}),e.jsx(h,{width:140,sx:{typography:"subtitle1"},children:w(t.totalAmount)})]})]}),j=e.jsxs(J,{container:!0,children:[e.jsxs(J,{xs:12,md:9,sx:{py:3},children:[e.jsx(g,{variant:"subtitle2",children:"NOTES"}),e.jsx(g,{variant:"body2",children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),e.jsxs(J,{xs:12,md:3,sx:{py:3,textAlign:"right"},children:[e.jsx(g,{variant:"subtitle2",children:"Have a Question?"}),e.jsx(g,{variant:"body2",children:"support@minimals.cc"})]})]}),u=e.jsx(ts,{sx:{overflow:"unset",mt:5},children:e.jsx(ls,{children:e.jsxs(is,{sx:{minWidth:960},children:[e.jsx(ns,{children:e.jsxs(H,{children:[e.jsx(h,{width:40,children:"#"}),e.jsx(h,{sx:{typography:"subtitle2"},children:"Description"}),e.jsx(h,{children:"Qty"}),e.jsx(h,{align:"right",children:"Unit price"}),e.jsx(h,{align:"right",children:"Total"})]})}),e.jsxs(as,{children:[t.items.map((n,f)=>e.jsxs(H,{children:[e.jsx(h,{children:f+1}),e.jsx(h,{children:e.jsxs(y,{sx:{maxWidth:560},children:[e.jsx(g,{variant:"subtitle2",children:n.title}),e.jsx(g,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n.description})]})}),e.jsx(h,{children:n.quantity}),e.jsx(h,{align:"right",children:w(n.price)}),e.jsx(h,{align:"right",children:w(n.price*n.quantity)})]},f)),c]})]})})});return e.jsxs(e.Fragment,{children:[e.jsx(fe,{invoice:t,currentStatus:l||"",onChangeStatus:a,statusOptions:rs}),e.jsxs(me,{sx:{pt:5,px:5},children:[e.jsxs(y,{rowGap:5,display:"grid",alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(y,{component:"img",alt:"logo",src:"/logo/logo_single.svg",sx:{width:48,height:48}}),e.jsxs(d,{spacing:1,alignItems:{xs:"flex-start",md:"flex-end"},children:[e.jsx(ce,{variant:"soft",color:l==="paid"&&"success"||l==="pending"&&"warning"||l==="overdue"&&"error"||"default",children:l}),e.jsx(g,{variant:"h6",children:t.invoiceNumber})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(g,{variant:"subtitle2",sx:{mb:1},children:"Invoice From"}),t.invoiceFrom.name,e.jsx("br",{}),t.invoiceFrom.fullAddress,e.jsx("br",{}),"Phone: ",t.invoiceFrom.phoneNumber,e.jsx("br",{})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(g,{variant:"subtitle2",sx:{mb:1},children:"Invoice To"}),t.invoiceTo.name,e.jsx("br",{}),t.invoiceTo.fullAddress,e.jsx("br",{}),"Phone: ",t.invoiceTo.phoneNumber,e.jsx("br",{})]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(g,{variant:"subtitle2",sx:{mb:1},children:"Date Create"}),q(t.createDate)]}),e.jsxs(d,{sx:{typography:"body2"},children:[e.jsx(g,{variant:"subtitle2",sx:{mb:1},children:"Due Date"}),q(t.dueDate)]})]}),u,e.jsx(z,{sx:{mt:5,borderStyle:"dashed"}}),j]})]})}we.propTypes={invoice:x.object};function vs({id:t}){const l=ue(),r=be.filter(a=>a.id===t)[0];return e.jsxs(ye,{maxWidth:l.themeStretch?!1:"lg",children:[e.jsx(ge,{heading:r==null?void 0:r.invoiceNumber,links:[{name:"Dashboard",href:P.dashboard.root},{name:"Invoice",href:P.dashboard.invoice.root},{name:r==null?void 0:r.invoiceNumber}],sx:{mb:{xs:3,md:5}}}),e.jsx(we,{invoice:r})]})}vs.propTypes={id:x.string};export{ds as I,xs as a,hs as b,cs as c,vs as d,Ce as e,fs as f};
