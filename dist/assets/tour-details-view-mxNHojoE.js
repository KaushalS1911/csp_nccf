import{bq as J,j as e,S as l,B as k,bK as ee,ae as z,au as X,dc as Ie,L as de,R as M,p as I,h as S,i as x,n as N,bv as Y,cc as G,a7 as r,a as Z,r as g,cj as Re,ck as Oe,w as q,cd as pe,c5 as Pe,ce as Ee,a5 as xe,I as Le,cf as Te,cg as Fe,at as A,T as v,cs as F,D as he,cv as me,dl as se,ad as Ae,N as K,bQ as Ue,c8 as Q,V as Be,aa as We,cm as ze,d as ae,e as V,co as H,cn as ne,f as Ge,ag as T,bJ as ie,M as _,eO as qe,bV as te,g as oe,c3 as Ve,eD as He,eP as je,cr as Me,F as Ne,cp as $e,cq as _e,aA as Ke,k as be,o as Qe,aE as ge,eQ as ue,C as ve,ct as Je,eR as Xe,Y as re,eS as le,eT as Ye,av as ce,cl as Ze,a3 as U,dW as es,eU as ss,dX as as,az as ns,eV as is}from"./index-OKHCej4L.js";import{s as ye}from"./custom-date-range-picker-QV34OcWQ.js";import{C as ts}from"./country-select-cNBCt8_F.js";import{D as $}from"./DatePicker-p2JFwr9Q.js";function fe({tour:s,onView:c,onEdit:t,onDelete:n}){const o=J(),{id:d,name:f,price:b,images:p,bookers:u,createdAt:h,available:m,priceSale:w,destination:y,ratingNumber:R}=s,O=ye(m.startDate,m.endDate),P=e.jsxs(l,{direction:"row",alignItems:"center",sx:{top:8,right:8,zIndex:9,borderRadius:1,position:"absolute",p:"2px 6px 2px 4px",typography:"subtitle2",bgcolor:"warning.lighter"},children:[e.jsx(x,{icon:"eva:star-fill",sx:{color:"warning.main",mr:.25}})," ",R]}),E=e.jsxs(l,{direction:"row",alignItems:"center",sx:{top:8,left:8,zIndex:9,borderRadius:1,bgcolor:"grey.800",position:"absolute",p:"2px 6px 2px 4px",color:"common.white",typography:"subtitle2"},children:[!!w&&e.jsx(k,{component:"span",sx:{color:"grey.500",mr:.25,textDecoration:"line-through"},children:ee(w)}),ee(b)]}),L=e.jsxs(l,{spacing:.5,direction:"row",sx:{p:a=>a.spacing(1,1,0,1)},children:[e.jsxs(l,{flexGrow:1,sx:{position:"relative"},children:[E,P,e.jsx(z,{alt:p[0],src:p[0],sx:{borderRadius:1,height:164,width:1}})]}),e.jsxs(l,{spacing:.5,children:[e.jsx(z,{alt:p[1],src:p[1],ratio:"1/1",sx:{borderRadius:1,width:80}}),e.jsx(z,{alt:p[2],src:p[2],ratio:"1/1",sx:{borderRadius:1,width:80}})]})]}),j=e.jsx(X,{sx:{p:a=>a.spacing(2.5,2.5,2,2.5)},primary:`Posted date: ${Ie(h)}`,secondary:e.jsx(de,{component:M,href:I.dashboard.tour.details(d),color:"inherit",children:f}),primaryTypographyProps:{typography:"caption",color:"text.disabled"},secondaryTypographyProps:{mt:1,noWrap:!0,component:"span",color:"text.primary",typography:"subtitle1"}}),B=e.jsxs(l,{spacing:1.5,sx:{position:"relative",p:a=>a.spacing(0,2.5,2.5,2.5)},children:[e.jsx(S,{onClick:o.onOpen,sx:{position:"absolute",bottom:20,right:8},children:e.jsx(x,{icon:"eva:more-vertical-fill"})}),[{label:y,icon:e.jsx(x,{icon:"mingcute:location-fill",sx:{color:"error.main"}})},{label:O,icon:e.jsx(x,{icon:"solar:clock-circle-bold",sx:{color:"info.main"}})},{label:`${u.length} Booked`,icon:e.jsx(x,{icon:"solar:users-group-rounded-bold",sx:{color:"primary.main"}})}].map(a=>e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",sx:{typography:"body2"},children:[a.icon,a.label]},a.label))]});return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[L,j,B]}),e.jsxs(Y,{open:o.open,onClose:o.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(G,{onClick:()=>{o.onClose(),c()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(G,{onClick:()=>{o.onClose(),t()},children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(G,{onClick:()=>{o.onClose(),n()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}fe.propTypes={onDelete:r.func,onEdit:r.func,onView:r.func,tour:r.object};function os({tours:s}){const c=Z(),t=g.useCallback(d=>{c.push(I.dashboard.tour.details(d))},[c]),n=g.useCallback(d=>{c.push(I.dashboard.tour.edit(d))},[c]),o=g.useCallback(d=>{console.info("DELETE",d)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(d=>e.jsx(fe,{tour:d,onView:()=>t(d.id),onEdit:()=>n(d.id),onDelete:()=>o(d.id)},d.id))}),s.length>8&&e.jsx(Re,{count:8,sx:{mt:8,[`& .${Oe.ul}`]:{justifyContent:"center"}}})]})}os.propTypes={tours:r.array};function rs({sort:s,onSort:c,sortOptions:t}){const n=J();return e.jsxs(e.Fragment,{children:[e.jsxs(q,{disableRipple:!0,color:"inherit",onClick:n.onOpen,endIcon:e.jsx(x,{icon:n.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(k,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(Y,{open:n.open,onClose:n.onClose,sx:{width:140},children:t.map(o=>e.jsx(G,{selected:o.value===s,onClick:()=>{n.onClose(),c(o.value)},children:o.label},o.value))})]})}rs.propTypes={onSort:r.func,sort:r.string,sortOptions:r.array};function ls({query:s,results:c,onSearch:t,hrefItem:n}){const o=Z(),d=b=>{o.push(n(b))},f=b=>{if(s&&b.key==="Enter"){const p=c.filter(u=>u.name===s)[0];d(p.id)}};return e.jsx(pe,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:c,onInputChange:(b,p)=>t(p),getOptionLabel:b=>b.name,noOptionsText:e.jsx(Pe,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(b,p)=>b.id===p.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${Ee.option}`]:{pl:.75}}}},renderInput:b=>e.jsx(xe,{...b,placeholder:"Search...",onKeyUp:f,InputProps:{...b.InputProps,startAdornment:e.jsx(Le,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(b,p,{inputValue:u})=>{const h=Te(p.name,u),m=Fe(p.name,h);return g.createElement(k,{component:"li",...b,onClick:()=>d(p.id),key:p.id},e.jsx(A,{alt:p.name,src:p.images[0],variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},p.id),e.jsx("div",{children:m.map((w,y)=>e.jsx(v,{component:"span",color:w.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:w.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:w.text},y))},u))}})}ls.propTypes={hrefItem:r.func,onSearch:r.func,query:r.string,results:r.array};function cs({open:s,onOpen:c,onClose:t,filters:n,onFilters:o,canReset:d,onResetFilters:f,destinationOptions:b,tourGuideOptions:p,serviceOptions:u,dateError:h}){const m=g.useCallback(a=>{const i=n.services.includes(a)?n.services.filter(C=>C!==a):[...n.services,a];o("services",i)},[n.services,o]),w=g.useCallback(a=>{o("startDate",a)},[o]),y=g.useCallback(a=>{o("endDate",a)},[o]),R=g.useCallback(a=>{o("destination",a)},[o]),O=g.useCallback(a=>{o("tourGuides",a)},[o]),P=e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(v,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(Q,{title:"Reset",children:e.jsx(S,{onClick:f,children:e.jsx(se,{color:"error",variant:"dot",invisible:!d,children:e.jsx(x,{icon:"solar:restart-bold"})})})}),e.jsx(S,{onClick:t,children:e.jsx(x,{icon:"mingcute:close-line"})})]}),E=e.jsxs(l,{children:[e.jsx(v,{variant:"subtitle2",sx:{mb:1.5},children:"Durations"}),e.jsxs(l,{spacing:2.5,children:[e.jsx($,{label:"Start date",value:n.startDate,onChange:w}),e.jsx($,{label:"End date",value:n.endDate,onChange:y,slotProps:{textField:{error:h,helperText:h&&"End date must be later than start date"}}})]})]}),L=e.jsxs(l,{children:[e.jsx(v,{variant:"subtitle2",sx:{mb:1.5},children:"Destination"}),e.jsx(ts,{placeholder:n.destination.length?"+ Destination":"Select Destination",fullWidth:!0,multiple:!0,value:n.destination,onChange:(a,i)=>R(i),options:b,getOptionLabel:a=>a})]}),j=e.jsxs(l,{children:[e.jsx(v,{variant:"subtitle2",sx:{mb:1.5},children:"Tour Guide"}),e.jsx(pe,{multiple:!0,disableCloseOnSelect:!0,options:p,value:n.tourGuides,onChange:(a,i)=>O(i),getOptionLabel:a=>a.name,renderInput:a=>e.jsx(xe,{placeholder:"Select Tour Guides",...a}),renderOption:(a,i)=>g.createElement("li",{...a,key:i.id},e.jsx(A,{alt:i.avatarUrl,src:i.avatarUrl,sx:{width:24,height:24,flexShrink:0,mr:1}},i.id),i.name),renderTags:(a,i)=>a.map((C,D)=>g.createElement(F,{...i({index:D}),key:C.id,size:"small",variant:"soft",label:C.name,avatar:e.jsx(A,{alt:C.name,src:C.avatarUrl})}))})]}),B=e.jsxs(l,{children:[e.jsx(v,{variant:"subtitle2",sx:{mb:1},children:"Services"}),u.map(a=>e.jsx(he,{control:e.jsx(me,{checked:n.services.includes(a),onClick:()=>m(a)}),label:a},a))]});return e.jsxs(e.Fragment,{children:[e.jsx(q,{disableRipple:!0,color:"inherit",endIcon:e.jsx(se,{color:"error",variant:"dot",invisible:!d,children:e.jsx(x,{icon:"ic:round-filter-list"})}),onClick:c,children:"Filters"}),e.jsxs(Ae,{anchor:"right",open:s,onClose:t,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[P,e.jsx(K,{}),e.jsx(Ue,{sx:{px:2.5,py:3},children:e.jsxs(l,{spacing:3,children:[E,L,j,B]})})]})]})}cs.propTypes={open:r.bool,onOpen:r.func,onClose:r.func,canReset:r.bool,dateError:r.bool,filters:r.object,onFilters:r.func,onResetFilters:r.func,serviceOptions:r.array,tourGuideOptions:r.array,destinationOptions:r.array};function ds({filters:s,onFilters:c,canReset:t,onResetFilters:n,results:o,...d}){const f=ye(s.startDate,s.endDate),b=m=>{const w=s.services.filter(y=>y!==m);c("services",w)},p=()=>{c("startDate",null),c("endDate",null)},u=m=>{const w=s.tourGuides.filter(y=>y.name!==m.name);c("tourGuides",w)},h=m=>{const w=s.destination.filter(y=>y!==m);c("destination",w)};return e.jsxs(l,{spacing:1.5,...d,children:[e.jsxs(k,{sx:{typography:"body2"},children:[e.jsx("strong",{children:o}),e.jsx(k,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(l,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[s.startDate&&s.endDate&&e.jsx(W,{label:"Available:",children:e.jsx(F,{size:"small",label:f,onDelete:p})}),!!s.services.length&&e.jsx(W,{label:"Services:",children:s.services.map(m=>e.jsx(F,{label:m,size:"small",onDelete:()=>b(m)},m))}),!!s.tourGuides.length&&e.jsx(W,{label:"Tour guide:",children:s.tourGuides.map(m=>e.jsx(F,{size:"small",avatar:e.jsx(A,{alt:m.name,src:m.avatarUrl}),label:m.name,onDelete:()=>u(m)},m.id))}),!!s.destination.length&&e.jsx(W,{label:"Destination:",children:s.destination.map(m=>e.jsx(F,{label:m,size:"small",onDelete:()=>h(m)},m))}),t&&e.jsx(q,{color:"error",onClick:n,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ds.propTypes={canReset:r.bool,filters:r.object,onFilters:r.func,onResetFilters:r.func,results:r.number};function W({label:s,children:c,sx:t,...n}){return e.jsxs(l,{component:Be,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...t},...n,children:[e.jsx(k,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(l,{spacing:1,direction:"row",flexWrap:"wrap",children:c})]})}W.propTypes={children:r.node,label:r.string,sx:r.object};function Ce({currentTour:s}){const c=Z(),t=We("up","md"),{enqueueSnackbar:n}=ze(),o=ae().shape({name:V().required("Name is required"),content:V().required("Content is required"),images:H().min(1,"Images is required"),tourGuides:H().min(1,"Must have at least 1 guide"),durations:V().required("Duration is required"),tags:H().min(2,"Must have at least 2 tags"),services:H().min(2,"Must have at least 2 services"),destination:V().required("Destination is required"),available:ae().shape({startDate:ne().nullable().required("Start date is required"),endDate:ne().required("End date is required").test("date-min","End date must be later than start date",(a,{parent:i})=>a.getTime()>i.startDate.getTime())})}),d=g.useMemo(()=>({name:(s==null?void 0:s.name)||"",content:(s==null?void 0:s.content)||"",images:(s==null?void 0:s.images)||[],tourGuides:(s==null?void 0:s.tourGuides)||[],tags:(s==null?void 0:s.tags)||[],durations:(s==null?void 0:s.durations)||"",destination:(s==null?void 0:s.destination)||"",services:(s==null?void 0:s.services)||[],available:{startDate:(s==null?void 0:s.available.startDate)||null,endDate:(s==null?void 0:s.available.endDate)||null}}),[s]),f=Ge({resolver:Qe(o),defaultValues:d}),{watch:b,reset:p,control:u,setValue:h,handleSubmit:m,formState:{isSubmitting:w}}=f,y=b();g.useEffect(()=>{s&&p(d)},[s,d,p]);const R=m(async a=>{try{await new Promise(i=>setTimeout(i,500)),p(),n(s?"Update success!":"Create success!"),c.push(I.dashboard.tour.root),console.info("DATA",a)}catch(i){console.error(i)}}),O=g.useCallback(a=>{const i=y.images||[],C=a.map(D=>Object.assign(D,{preview:URL.createObjectURL(D)}));h("images",[...i,...C],{shouldValidate:!0})},[h,y.images]),P=g.useCallback(a=>{var C;const i=y.images&&((C=y.images)==null?void 0:C.filter(D=>D!==a));h("images",i)},[h,y.images]),E=g.useCallback(()=>{h("images",[])},[h]),L=e.jsxs(e.Fragment,{children:[t&&e.jsxs(T,{md:4,children:[e.jsx(v,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(v,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(T,{xs:12,md:8,children:e.jsxs(N,{children:[!t&&e.jsx(ie,{title:"Details"}),e.jsxs(l,{spacing:3,sx:{p:3},children:[e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Name"}),e.jsx(oe,{name:"name",placeholder:"Ex: Adventure Seekers Expedition..."})]}),e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Content"}),e.jsx($e,{simple:!0,name:"content"})]}),e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Images"}),e.jsx(_e,{multiple:!0,thumbnail:!0,name:"images",maxSize:3145728,onDrop:O,onRemove:P,onRemoveAll:E,onUpload:()=>console.info("ON UPLOAD")})]})]})]})})]}),j=e.jsxs(e.Fragment,{children:[t&&e.jsxs(T,{md:4,children:[e.jsx(v,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(v,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(T,{xs:12,md:8,children:e.jsxs(N,{children:[!t&&e.jsx(ie,{title:"Properties"}),e.jsxs(l,{spacing:3,sx:{p:3},children:[e.jsxs(l,{children:[e.jsx(v,{variant:"subtitle2",sx:{mb:1.5},children:"Tour Guide"}),e.jsx(_,{multiple:!0,name:"tourGuides",placeholder:"+ Tour Guides",disableCloseOnSelect:!0,options:qe,getOptionLabel:a=>a.name,isOptionEqualToValue:(a,i)=>a.id===i.id,renderOption:(a,i)=>g.createElement("li",{...a,key:i.id},e.jsx(A,{alt:i.avatarUrl,src:i.avatarUrl,sx:{width:24,height:24,flexShrink:0,mr:1}},i.id),i.name),renderTags:(a,i)=>a.map((C,D)=>g.createElement(F,{...i({index:D}),key:C.id,size:"small",variant:"soft",label:C.name,avatar:e.jsx(A,{alt:C.name,src:C.avatarUrl})}))})]}),e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Available"}),e.jsxs(l,{direction:{xs:"column",md:"row"},spacing:2,children:[e.jsx(te,{name:"available.startDate",control:u,render:({field:a,fieldState:{error:i}})=>e.jsx($,{...a,format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!i,helperText:i==null?void 0:i.message}}})}),e.jsx(te,{name:"available.endDate",control:u,render:({field:a,fieldState:{error:i}})=>e.jsx($,{...a,format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!i,helperText:i==null?void 0:i.message}}})})]})]}),e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Duration"}),e.jsx(oe,{name:"durations",placeholder:"Ex: 2 days, 4 days 3 nights..."})]}),e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Destination"}),e.jsx(_,{name:"destination",type:"country",placeholder:"+ Destination",options:Ve.map(a=>a.label),getOptionLabel:a=>a})]}),e.jsxs(l,{spacing:1,children:[e.jsx(v,{variant:"subtitle2",children:"Services"}),e.jsx(He,{name:"services",options:je,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]}),e.jsxs(l,{spacing:1.5,children:[e.jsx(v,{variant:"subtitle2",children:"Tags"}),e.jsx(_,{name:"tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Me.map(a=>a),getOptionLabel:a=>a,renderOption:(a,i)=>g.createElement("li",{...a,key:i},i),renderTags:(a,i)=>a.map((C,D)=>g.createElement(F,{...i({index:D}),key:C,label:C,size:"small",color:"info",variant:"soft"}))})]})]})]})})]}),B=e.jsxs(e.Fragment,{children:[t&&e.jsx(T,{md:4}),e.jsxs(T,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(he,{control:e.jsx(Ke,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(be,{type:"submit",variant:"contained",size:"large",loading:w,sx:{ml:2},children:s?"Save Changes":"Create Tour"})]})]});return e.jsx(Ne,{methods:f,onSubmit:R,children:e.jsxs(T,{container:!0,spacing:3,children:[L,j,B]})})}Ce.propTypes={currentTour:r.object};function ps({id:s}){const c=ge(),t=ue.find(n=>n.id===s);return e.jsxs(ve,{maxWidth:c.themeStretch?!1:"lg",children:[e.jsx(Je,{heading:"Edit",links:[{name:"Dashboard",href:I.dashboard.root},{name:"Tour",href:I.dashboard.tour.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ce,{currentTour:t})]})}ps.propTypes={id:r.string};function we({publish:s,backLink:c,editLink:t,liveLink:n,publishOptions:o,onChangePublish:d,sx:f,...b}){const p=J();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...f},...b,children:[e.jsx(q,{component:M,href:c,startIcon:e.jsx(x,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(k,{sx:{flexGrow:1}}),s==="published"&&e.jsx(Q,{title:"Go Live",children:e.jsx(S,{component:M,href:n,children:e.jsx(x,{icon:"eva:external-link-fill"})})}),e.jsx(Q,{title:"Edit",children:e.jsx(S,{component:M,href:t,children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsx(be,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"}),onClick:p.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(Y,{open:p.open,onClose:p.onClose,arrow:"top-right",sx:{width:140},children:o.map(u=>e.jsxs(G,{selected:u.value===s,onClick:()=>{p.onClose(),d(u.value)},children:[u.value==="published"&&e.jsx(x,{icon:"eva:cloud-upload-fill"}),u.value==="draft"&&e.jsx(x,{icon:"solar:file-text-bold"}),u.label]},u.value))})]})}we.propTypes={backLink:r.string,editLink:r.string,liveLink:r.string,onChangePublish:r.func,publish:r.string,publishOptions:r.array,sx:r.object};function ke({tour:s}){const{name:c,images:t,content:n,services:o,tourGuides:d,available:f,durations:b,destination:p,ratingNumber:u}=s,h=t.map(j=>({src:j})),{selected:m,open:w,onOpen:y,onClose:R}=Xe(h),O=e.jsxs(e.Fragment,{children:[e.jsxs(k,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:{xs:3,md:5}},children:[e.jsx(re.div,{whileHover:"hover",variants:{hover:{opacity:.8}},transition:le(),children:e.jsx(z,{alt:h[0].src,src:h[0].src,ratio:"1/1",onClick:()=>y(h[0].src),sx:{borderRadius:2,cursor:"pointer"}})},h[0].src),e.jsx(k,{gap:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:h.slice(1,5).map(j=>e.jsx(re.div,{whileHover:"hover",variants:{hover:{opacity:.8}},transition:le(),children:e.jsx(z,{alt:j.src,src:j.src,ratio:"1/1",onClick:()=>y(j.src),sx:{borderRadius:2,cursor:"pointer"}})},j.src))})]}),e.jsx(Ye,{index:m,slides:h,open:w,close:R})]}),P=e.jsxs(e.Fragment,{children:[e.jsxs(l,{direction:"row",sx:{mb:3},children:[e.jsx(v,{variant:"h4",sx:{flexGrow:1},children:c}),e.jsx(S,{children:e.jsx(x,{icon:"solar:share-bold"})}),e.jsx(me,{defaultChecked:!0,color:"error",icon:e.jsx(x,{icon:"solar:heart-outline"}),checkedIcon:e.jsx(x,{icon:"solar:heart-bold"})})]}),e.jsxs(l,{spacing:3,direction:"row",flexWrap:"wrap",alignItems:"center",children:[e.jsxs(l,{direction:"row",alignItems:"center",spacing:.5,sx:{typography:"body2"},children:[e.jsx(x,{icon:"eva:star-fill",sx:{color:"warning.main"}}),e.jsx(k,{component:"span",sx:{typography:"subtitle2"},children:u}),e.jsx(de,{sx:{color:"text.secondary"},children:"(234 reviews)"})]}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:.5,sx:{typography:"body2"},children:[e.jsx(x,{icon:"mingcute:location-fill",sx:{color:"error.main"}}),p]}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:.5,sx:{typography:"subtitle2"},children:[e.jsx(x,{icon:"solar:flag-bold",sx:{color:"info.main"}}),e.jsx(k,{component:"span",sx:{typography:"body2",color:"text.secondary"},children:"Guide by"}),d.map(j=>j.name).join(", ")]})]})]}),E=e.jsx(k,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[{label:"Available",value:`${ce(f.startDate)} - ${ce(f.endDate)}`,icon:e.jsx(x,{icon:"solar:calendar-date-bold"})},{label:"Contact name",value:d.map(j=>j.phoneNumber).join(", "),icon:e.jsx(x,{icon:"solar:user-rounded-bold"})},{label:"Durations",value:b,icon:e.jsx(x,{icon:"solar:clock-circle-bold"})},{label:"Contact phone",value:d.map(j=>j.name).join(", "),icon:e.jsx(x,{icon:"solar:phone-bold"})}].map(j=>e.jsxs(l,{spacing:1.5,direction:"row",children:[j.icon,e.jsx(X,{primary:j.label,secondary:j.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},j.label))}),L=e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:n}),e.jsxs(l,{spacing:2,children:[e.jsx(v,{variant:"h6",children:" Services"}),e.jsx(k,{rowGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:je.map(j=>e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",sx:{...o.includes(j.label)&&{color:"text.disabled"}},children:[e.jsx(x,{icon:"eva:checkmark-circle-2-outline",sx:{color:"primary.main",...o.includes(j.label)&&{color:"text.disabled"}}}),j.label]},j.label))})]})]});return e.jsxs(e.Fragment,{children:[O,e.jsxs(l,{sx:{maxWidth:720,mx:"auto"},children:[P,e.jsx(K,{sx:{borderStyle:"dashed",my:5}}),E,e.jsx(K,{sx:{borderStyle:"dashed",my:5}}),L]})]})}ke.propTypes={tour:r.object};function De({bookers:s}){const[c,t]=g.useState([]),n=g.useCallback(o=>{const d=c.includes(o)?c.filter(f=>f!==o):[...c,o];t(d)},[c]);return e.jsx(k,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(o=>e.jsx(Se,{booker:o,selected:c.includes(o.id),onSelected:()=>n(o.id)},o.id))})}De.propTypes={bookers:r.array};function Se({booker:s,selected:c,onSelected:t}){return e.jsxs(l,{component:N,direction:"row",spacing:2,sx:{p:3},children:[e.jsx(A,{alt:s.name,src:s.avatarUrl,sx:{width:48,height:48}}),e.jsxs(l,{spacing:2,flexGrow:1,children:[e.jsx(X,{primary:s.name,secondary:e.jsxs(l,{direction:"row",alignItems:"center",spacing:.5,children:[e.jsx(x,{icon:"solar:users-group-rounded-bold",width:16}),s.guests," guests"]}),secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(l,{spacing:1,direction:"row",children:[e.jsx(S,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:n=>U(n.palette.error.main,.08),"&:hover":{bgcolor:n=>U(n.palette.error.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:phone-bold"})}),e.jsx(S,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:n=>U(n.palette.info.main,.08),"&:hover":{bgcolor:n=>U(n.palette.info.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(S,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:n=>U(n.palette.primary.main,.08),"&:hover":{bgcolor:n=>U(n.palette.primary.main,.16)}},children:e.jsx(x,{width:18,icon:"fluent:mail-24-filled"})})]})]}),e.jsx(q,{size:"small",variant:c?"text":"outlined",color:c?"success":"inherit",startIcon:c?e.jsx(x,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:t,children:c?"Approved":"Approve"})]},s.id)}Se.propTypes={booker:r.object,onSelected:r.func,selected:r.bool};function xs({id:s}){const c=ge(),t=ue.filter(h=>h.id===s)[0],[n,o]=g.useState(t==null?void 0:t.publish),[d,f]=g.useState("content"),b=g.useCallback((h,m)=>{f(m)},[]),p=g.useCallback(h=>{o(h)},[]),u=e.jsx(es,{value:d,onChange:b,sx:{mb:{xs:3,md:5}},children:ss.map(h=>e.jsx(as,{iconPosition:"end",value:h.value,label:h.label,icon:h.value==="bookers"?e.jsx(ns,{variant:"filled",children:t==null?void 0:t.bookers.length}):""},h.value))});return e.jsxs(ve,{maxWidth:c.themeStretch?!1:"lg",children:[e.jsx(we,{backLink:I.dashboard.tour.root,editLink:I.dashboard.tour.edit(`${t==null?void 0:t.id}`),liveLink:"#",publish:n||"",onChangePublish:p,publishOptions:is}),u,d==="content"&&e.jsx(ke,{tour:t}),d==="bookers"&&e.jsx(De,{bookers:t==null?void 0:t.bookers})]})}xs.propTypes={id:r.string};export{xs as T,ls as a,cs as b,rs as c,ds as d,os as e,Ce as f,ps as g};
