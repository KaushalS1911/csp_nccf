import{bw as V,j as e,q as B,h as S,i as x,S as o,az as $,aA as U,L as Te,R as A,p as P,aB as M,O as ie,B as T,bN as oe,T as j,by as K,cf as W,_ as a,a as Y,r as g,cm as we,cn as Se,D as G,cg as te,c8 as Ee,ac as re,I as ce,ci as Oe,cj as Pe,x as H,cx as Q,y as Re,cu as E,dt as Z,aj as Ie,bT as Le,cb as q,a0 as X,ag as De,V as Be,d as J,e as _,cq as N,cp as Fe,ep as _e,c4 as Ne,e4 as ee,f as We,am as w,bM as se,eB as ne,eC as ze,c5 as Ae,eD as He,N as z,eE as qe,eF as Ge,c6 as Me,v as ae,eg as Ve,bi as $e,g as le,eG as Ue,eH as Ke,F as Ye,cr as Xe,aG as Qe,k as de,o as Ze,aK as pe,eI as xe,C as he,cv as Je,co as es,aa as O,e0 as ss,eJ as ns,e1 as as,aF as ls,eK as is}from"./index-XFh7EM9A.js";import{C as os}from"./country-select-oR0d42AK.js";function me({job:s,onView:t,onEdit:n,onDelete:i}){const r=V(),{id:p,title:C,company:h,createdAt:u,candidates:b,experience:f,employmentTypes:c,salary:v,role:y}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(S,{onClick:r.onOpen,sx:{position:"absolute",top:8,right:8},children:e.jsx(x,{icon:"eva:more-vertical-fill"})}),e.jsxs(o,{sx:{p:3,pb:2},children:[e.jsx($,{alt:h.name,src:h.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),e.jsx(U,{sx:{mb:1},primary:e.jsx(Te,{component:A,href:P.dashboard.job.details(p),color:"inherit",children:C}),secondary:`Posted date: ${M(u)}`,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(o,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[e.jsx(x,{width:16,icon:"solar:users-group-rounded-bold"}),b.length," Candidates"]})]}),e.jsx(ie,{sx:{borderStyle:"dashed"}}),e.jsx(T,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:f,icon:e.jsx(x,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:c.join(", "),icon:e.jsx(x,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:v.negotiable?"Negotiable":oe(v.price),icon:e.jsx(x,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:y,icon:e.jsx(x,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map(R=>e.jsxs(o,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[R.icon,e.jsx(j,{variant:"caption",noWrap:!0,children:R.label})]},R.label))})]}),e.jsxs(K,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:140},children:[e.jsxs(W,{onClick:()=>{r.onClose(),t()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(W,{onClick:()=>{r.onClose(),n()},children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(W,{onClick:()=>{r.onClose(),i()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}me.propTypes={job:a.object,onDelete:a.func,onEdit:a.func,onView:a.func};function ts({jobs:s}){const t=Y(),n=g.useCallback(p=>{t.push(P.dashboard.job.details(p))},[t]),i=g.useCallback(p=>{t.push(P.dashboard.job.edit(p))},[t]),r=g.useCallback(p=>{console.info("DELETE",p)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(T,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:s.map(p=>e.jsx(me,{job:p,onView:()=>n(p.id),onEdit:()=>i(p.id),onDelete:()=>r(p.id)},p.id))}),s.length>8&&e.jsx(we,{count:8,sx:{mt:8,[`& .${Se.ul}`]:{justifyContent:"center"}}})]})}ts.propTypes={jobs:a.array};function rs({sort:s,onSort:t,sortOptions:n}){const i=V();return e.jsxs(e.Fragment,{children:[e.jsxs(G,{disableRipple:!0,color:"inherit",onClick:i.onOpen,endIcon:e.jsx(x,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort By:",e.jsx(T,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:s})]}),e.jsx(K,{open:i.open,onClose:i.onClose,sx:{width:140},children:n.map(r=>e.jsx(W,{selected:r.value===s,onClick:()=>{i.onClose(),t(r.value)},children:r.label},r.value))})]})}rs.propTypes={onSort:a.func,sort:a.string,sortOptions:a.array};function cs({query:s,results:t,onSearch:n,hrefItem:i}){const r=Y(),p=h=>{r.push(i(h))},C=h=>{if(s&&h.key==="Enter"){const u=t.filter(b=>b.title===s)[0];p(u.id)}};return e.jsx(te,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:t,onInputChange:(h,u)=>n(u),getOptionLabel:h=>h.title,noOptionsText:e.jsx(Ee,{query:s,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(h,u)=>h.id===u.id,renderInput:h=>e.jsx(re,{...h,placeholder:"Search...",onKeyUp:C,InputProps:{...h.InputProps,startAdornment:e.jsx(ce,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(h,u,{inputValue:b})=>{const f=Oe(u.title,b),c=Pe(u.title,f);return g.createElement(T,{component:"li",...h,onClick:()=>p(u.id),key:u.id},e.jsx("div",{children:c.map((v,y)=>e.jsx(j,{component:"span",color:v.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:v.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:v.text},y))}))}})}cs.propTypes={hrefItem:a.func,onSearch:a.func,query:a.string,results:a.array};function ds({open:s,onOpen:t,onClose:n,filters:i,onFilters:r,canReset:p,onResetFilters:C,roleOptions:h,locationOptions:u,benefitOptions:b,experienceOptions:f,employmentTypeOptions:c}){const v=g.useCallback(l=>{const k=i.employmentTypes.includes(l)?i.employmentTypes.filter(L=>L!==l):[...i.employmentTypes,l];r("employmentTypes",k)},[i.employmentTypes,r]),y=g.useCallback(l=>{r("experience",l)},[r]),R=g.useCallback(l=>{r("roles",l)},[r]),d=g.useCallback(l=>{r("locations",l)},[r]),m=g.useCallback(l=>{const k=i.benefits.includes(l)?i.benefits.filter(L=>L!==l):[...i.benefits,l];r("benefits",k)},[i.benefits,r]),I=e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(j,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(q,{title:"Reset",children:e.jsx(S,{onClick:C,children:e.jsx(Z,{color:"error",variant:"dot",invisible:!p,children:e.jsx(x,{icon:"solar:restart-bold"})})})}),e.jsx(S,{onClick:n,children:e.jsx(x,{icon:"mingcute:close-line"})})]}),F=e.jsxs(o,{children:[e.jsx(j,{variant:"subtitle2",sx:{mb:1},children:"Employment Types"}),c.map(l=>e.jsx(H,{control:e.jsx(Q,{checked:i.employmentTypes.includes(l),onClick:()=>v(l)}),label:l},l))]}),ge=e.jsxs(o,{children:[e.jsx(j,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),f.map(l=>e.jsx(H,{control:e.jsx(Re,{checked:l===i.experience,onClick:()=>y(l)}),label:l,sx:{...l==="all"&&{textTransform:"capitalize"}}},l))]}),fe=e.jsxs(o,{children:[e.jsx(j,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),e.jsx(te,{multiple:!0,disableCloseOnSelect:!0,options:h.map(l=>l),getOptionLabel:l=>l,value:i.roles,onChange:(l,k)=>R(k),renderInput:l=>e.jsx(re,{placeholder:"Select Roles",...l}),renderOption:(l,k)=>g.createElement("li",{...l,key:k},k),renderTags:(l,k)=>l.map((L,ke)=>g.createElement(E,{...k({index:ke}),key:L,label:L,size:"small",variant:"soft"}))})]}),ve=e.jsxs(o,{children:[e.jsx(j,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),e.jsx(os,{placeholder:i.locations.length?"+ Locations":"Select Locations",fullWidth:!0,multiple:!0,value:i.locations,onChange:(l,k)=>d(k),options:u,getOptionLabel:l=>l})]}),Ce=e.jsxs(o,{children:[e.jsx(j,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),b.map(l=>e.jsx(H,{control:e.jsx(Q,{checked:i.benefits.includes(l),onClick:()=>m(l)}),label:l},l))]});return e.jsxs(e.Fragment,{children:[e.jsx(G,{disableRipple:!0,color:"inherit",endIcon:e.jsx(Z,{color:"error",variant:"dot",invisible:!p,children:e.jsx(x,{icon:"ic:round-filter-list"})}),onClick:t,children:"Filters"}),e.jsxs(Ie,{anchor:"right",open:s,onClose:n,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:280}},children:[I,e.jsx(ie,{}),e.jsx(Le,{sx:{px:2.5,py:3},children:e.jsxs(o,{spacing:3,children:[F,ge,fe,ve,Ce]})})]})]})}ds.propTypes={open:a.bool,onOpen:a.func,onClose:a.func,canReset:a.bool,filters:a.object,onFilters:a.func,roleOptions:a.array,onResetFilters:a.func,benefitOptions:a.array,locationOptions:a.array,experienceOptions:a.array,employmentTypeOptions:a.array};function ps({filters:s,onFilters:t,canReset:n,onResetFilters:i,results:r,...p}){const C=c=>{const v=s.employmentTypes.filter(y=>y!==c);t("employmentTypes",v)},h=()=>{t("experience","all")},u=c=>{const v=s.roles.filter(y=>y!==c);t("role",v)},b=c=>{const v=s.locations.filter(y=>y!==c);t("locations",v)},f=c=>{const v=s.benefits.filter(y=>y!==c);t("benefits",v)};return e.jsxs(o,{spacing:1.5,...p,children:[e.jsxs(T,{sx:{typography:"body2"},children:[e.jsx("strong",{children:r}),e.jsx(T,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(o,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!s.employmentTypes.length&&e.jsx(D,{label:"Employment Types:",children:s.employmentTypes.map(c=>e.jsx(E,{label:c,size:"small",onDelete:()=>C(c)},c))}),s.experience!=="all"&&e.jsx(D,{label:"Experience:",children:e.jsx(E,{size:"small",label:s.experience,onDelete:h})}),!!s.roles.length&&e.jsx(D,{label:"Roles:",children:s.roles.map(c=>e.jsx(E,{label:c,size:"small",onDelete:()=>u(c)},c))}),!!s.locations.length&&e.jsx(D,{label:"Locations:",children:s.locations.map(c=>e.jsx(E,{label:c,size:"small",onDelete:()=>b(c)},c))}),!!s.benefits.length&&e.jsx(D,{label:"Benefits:",children:s.benefits.map(c=>e.jsx(E,{label:c,size:"small",onDelete:()=>f(c)},c))}),n&&e.jsx(G,{color:"error",onClick:i,startIcon:e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}ps.propTypes={canReset:a.bool,filters:a.object,onFilters:a.func,onResetFilters:a.func,results:a.number};function D({label:s,children:t,sx:n,...i}){return e.jsxs(o,{component:X,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...i,children:[e.jsx(T,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(o,{spacing:1,direction:"row",flexWrap:"wrap",children:t})]})}D.propTypes={children:a.node,label:a.string,sx:a.object};function je({currentJob:s}){const t=Y(),n=De("up","md"),{enqueueSnackbar:i}=Be(),r=J().shape({title:_().required("Title is required"),content:_().required("Content is required"),employmentTypes:N().min(1,"Choose at least one option"),role:_().required("Role is required"),skills:N().min(1,"Choose at least one option"),workingSchedule:N().min(1,"Choose at least one option"),benefits:N().min(1,"Choose at least one option"),locations:N().min(1,"Choose at least one option"),expiredDate:Fe().nullable().required("Expired date is required"),salary:J().shape({type:_(),price:_e().min(1,"Price is required"),negotiable:Ne()}),experience:_()}),p=g.useMemo(()=>({title:(s==null?void 0:s.title)||"",content:(s==null?void 0:s.content)||"",employmentTypes:(s==null?void 0:s.employmentTypes)||[],experience:(s==null?void 0:s.experience)||"1 year exp",role:(s==null?void 0:s.role)||ee[1],skills:(s==null?void 0:s.skills)||[],workingSchedule:(s==null?void 0:s.workingSchedule)||[],locations:(s==null?void 0:s.locations)||[],benefits:(s==null?void 0:s.benefits)||[],expiredDate:(s==null?void 0:s.expiredDate)||null,salary:(s==null?void 0:s.salary)||{type:"Hourly",price:0,negotiable:!1}}),[s]),C=We({resolver:Ze(r),defaultValues:p}),{reset:h,control:u,handleSubmit:b,formState:{isSubmitting:f}}=C;g.useEffect(()=>{s&&h(p)},[s,p,h]);const c=b(async d=>{try{await new Promise(m=>setTimeout(m,500)),h(),i(s?"Update success!":"Create success!"),t.push(P.dashboard.job.root),console.info("DATA",d)}catch(m){console.error(m)}}),v=e.jsxs(e.Fragment,{children:[n&&e.jsxs(w,{md:4,children:[e.jsx(j,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(w,{xs:12,md:8,children:e.jsxs(B,{children:[!n&&e.jsx(se,{title:"Details"}),e.jsxs(o,{spacing:3,sx:{p:3},children:[e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Title"}),e.jsx(le,{name:"title",placeholder:"Ex: Software Engineer..."})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Content"}),e.jsx(Xe,{simple:!0,name:"content"})]})]})]})})]}),y=e.jsxs(e.Fragment,{children:[n&&e.jsxs(w,{md:4,children:[e.jsx(j,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(w,{xs:12,md:8,children:e.jsxs(B,{children:[!n&&e.jsx(se,{title:"Properties"}),e.jsxs(o,{spacing:3,sx:{p:3},children:[e.jsxs(o,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:"Employment type"}),e.jsx(ne,{row:!0,spacing:4,name:"employmentTypes",options:ze})]}),e.jsxs(o,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:"Experience"}),e.jsx(Ae,{row:!0,spacing:4,name:"experience",options:He})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Role"}),e.jsx(z,{name:"role",autoHighlight:!0,options:ee.map(d=>d),getOptionLabel:d=>d,renderOption:(d,m)=>g.createElement("li",{...d,key:m},m)})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Skills"}),e.jsx(z,{name:"skills",placeholder:"+ Skills",multiple:!0,disableCloseOnSelect:!0,options:qe.map(d=>d),getOptionLabel:d=>d,renderOption:(d,m)=>g.createElement("li",{...d,key:m},m),renderTags:(d,m)=>d.map((I,F)=>g.createElement(E,{...m({index:F}),key:I,label:I,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Working schedule"}),e.jsx(z,{name:"workingSchedule",placeholder:"+ Schedule",multiple:!0,disableCloseOnSelect:!0,options:Ge.map(d=>d),getOptionLabel:d=>d,renderOption:(d,m)=>g.createElement("li",{...d,key:m},m),renderTags:(d,m)=>d.map((I,F)=>g.createElement(E,{...m({index:F}),key:I,label:I,size:"small",color:"info",variant:"soft"}))})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Locations"}),e.jsx(z,{name:"locations",type:"country",placeholder:"+ Locations",multiple:!0,options:Me.map(d=>d.label),getOptionLabel:d=>d})]}),e.jsxs(o,{spacing:1.5,children:[e.jsx(j,{variant:"subtitle2",children:"Expired"}),e.jsx(ae,{name:"expiredDate",control:u,render:({field:d,fieldState:{error:m}})=>e.jsx(Ve,{...d,format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!m,helperText:m==null?void 0:m.message}}})})]}),e.jsxs(o,{spacing:2,children:[e.jsx(j,{variant:"subtitle2",children:"Salary"}),e.jsx(ae,{name:"salary.type",control:u,render:({field:d})=>e.jsx(T,{gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[{label:"Hourly",icon:e.jsx(x,{icon:"solar:clock-circle-bold",width:32,sx:{mb:2}})},{label:"Custom",icon:e.jsx(x,{icon:"solar:wad-of-money-bold",width:32,sx:{mb:2}})}].map(m=>e.jsxs(X,{component:$e,variant:"outlined",onClick:()=>d.onChange(m.label),sx:{p:2.5,borderRadius:1,typography:"subtitle2",flexDirection:"column",...m.label===d.value&&{borderWidth:2,borderColor:"text.primary"}},children:[m.icon,m.label]},m.label))})}),e.jsx(le,{name:"salary.price",placeholder:"0.00",type:"number",InputProps:{startAdornment:e.jsx(ce,{position:"start",children:e.jsx(T,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})}}),e.jsx(Ue,{name:"salary.negotiable",label:"Salary is negotiable"})]}),e.jsxs(o,{spacing:1,children:[e.jsx(j,{variant:"subtitle2",children:"Benefits"}),e.jsx(ne,{name:"benefits",options:Ke,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]})]})]})})]}),R=e.jsxs(e.Fragment,{children:[n&&e.jsx(w,{md:4}),e.jsxs(w,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(H,{control:e.jsx(Qe,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(de,{type:"submit",variant:"contained",size:"large",loading:f,sx:{ml:2},children:s?"Save Changes":"Create Job"})]})]});return e.jsx(Ye,{methods:C,onSubmit:c,children:e.jsxs(w,{container:!0,spacing:3,children:[v,y,R]})})}je.propTypes={currentJob:a.object};function xs({id:s}){const t=pe(),n=xe.find(i=>i.id===s);return e.jsxs(he,{maxWidth:t.themeStretch?!1:"lg",children:[e.jsx(Je,{heading:"Edit",links:[{name:"Dashboard",href:P.dashboard.root},{name:"Job",href:P.dashboard.job.root},{name:n==null?void 0:n.title}],sx:{mb:{xs:3,md:5}}}),e.jsx(je,{currentJob:n})]})}xs.propTypes={id:a.string};function ue({publish:s,backLink:t,editLink:n,liveLink:i,publishOptions:r,onChangePublish:p,sx:C,...h}){const u=V();return e.jsxs(e.Fragment,{children:[e.jsxs(o,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...C},...h,children:[e.jsx(G,{component:A,href:t,startIcon:e.jsx(x,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(T,{sx:{flexGrow:1}}),s==="published"&&e.jsx(q,{title:"Go Live",children:e.jsx(S,{component:A,href:i,children:e.jsx(x,{icon:"eva:external-link-fill"})})}),e.jsx(q,{title:"Edit",children:e.jsx(S,{component:A,href:n,children:e.jsx(x,{icon:"solar:pen-bold"})})}),e.jsx(de,{color:"inherit",variant:"contained",loading:!s,loadingIndicator:"Loading…",endIcon:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"}),onClick:u.onOpen,sx:{textTransform:"capitalize"},children:s})]}),e.jsx(K,{open:u.open,onClose:u.onClose,arrow:"top-right",sx:{width:140},children:r.map(b=>e.jsxs(W,{selected:b.value===s,onClick:()=>{u.onClose(),p(b.value)},children:[b.value==="published"&&e.jsx(x,{icon:"eva:cloud-upload-fill"}),b.value==="draft"&&e.jsx(x,{icon:"solar:file-text-bold"}),b.label]},b.value))})]})}ue.propTypes={backLink:a.string,editLink:a.string,liveLink:a.string,onChangePublish:a.func,publish:a.string,publishOptions:a.array,sx:a.object};function ye({job:s}){const{title:t,skills:n,salary:i,content:r,benefits:p,createdAt:C,experience:h,expiredDate:u,employmentTypes:b}=s,f=e.jsxs(o,{component:B,spacing:3,sx:{p:3},children:[e.jsx(j,{variant:"h4",children:t}),e.jsx(es,{children:r}),e.jsxs(o,{spacing:2,children:[e.jsx(j,{variant:"h6",children:"Skills"}),e.jsx(o,{direction:"row",alignItems:"center",spacing:1,children:n.map(y=>e.jsx(E,{label:y,variant:"soft"},y))})]}),e.jsxs(o,{spacing:2,children:[e.jsx(j,{variant:"h6",children:"Benefits"}),e.jsx(o,{direction:"row",alignItems:"center",spacing:1,children:p.map(y=>e.jsx(E,{label:y,variant:"soft"},y))})]})]}),c=e.jsx(o,{component:B,spacing:2,sx:{p:3},children:[{label:"Date Posted",value:M(C),icon:e.jsx(x,{icon:"solar:calendar-date-bold"})},{label:"Expiration date",value:M(u),icon:e.jsx(x,{icon:"solar:calendar-date-bold"})},{label:"Employment type",value:b,icon:e.jsx(x,{icon:"solar:clock-circle-bold"})},{label:"Offered salary",value:i.negotiable?"Negotiable":oe(i.price),icon:e.jsx(x,{icon:"solar:wad-of-money-bold"})},{label:"Experience",value:h,icon:e.jsx(x,{icon:"carbon:skill-level-basic"})}].map(y=>e.jsxs(o,{spacing:1.5,direction:"row",children:[y.icon,e.jsx(U,{primary:y.label,secondary:y.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{typography:"subtitle2",color:"text.primary",component:"span"}})]},y.label))}),v=e.jsxs(o,{component:X,variant:"outlined",spacing:2,direction:"row",sx:{p:3,borderRadius:2,mt:3},children:[e.jsx($,{alt:s.company.name,src:s.company.logo,variant:"rounded",sx:{width:64,height:64}}),e.jsxs(o,{spacing:1,children:[e.jsx(j,{variant:"subtitle1",children:s.company.name}),e.jsx(j,{variant:"body2",children:s.company.fullAddress}),e.jsx(j,{variant:"body2",children:s.company.phoneNumber})]})]});return e.jsxs(w,{container:!0,spacing:3,children:[e.jsx(w,{xs:12,md:8,children:f}),e.jsxs(w,{xs:12,md:4,children:[c,v]})]})}ye.propTypes={job:a.object};function be({candidates:s}){return e.jsx(T,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:s.map(t=>e.jsxs(o,{component:B,direction:"row",spacing:2,sx:{p:3},children:[e.jsx(S,{sx:{position:"absolute",top:8,right:8},children:e.jsx(x,{icon:"eva:more-vertical-fill"})}),e.jsx($,{alt:t.name,src:t.avatarUrl,sx:{width:48,height:48}}),e.jsxs(o,{spacing:2,children:[e.jsx(U,{primary:t.name,secondary:t.role,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsxs(o,{spacing:1,direction:"row",children:[e.jsx(S,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:n=>O(n.palette.error.main,.08),"&:hover":{bgcolor:n=>O(n.palette.error.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:phone-bold"})}),e.jsx(S,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:n=>O(n.palette.info.main,.08),"&:hover":{bgcolor:n=>O(n.palette.info.main,.16)}},children:e.jsx(x,{width:18,icon:"solar:chat-round-dots-bold"})}),e.jsx(S,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:n=>O(n.palette.primary.main,.08),"&:hover":{bgcolor:n=>O(n.palette.primary.main,.16)}},children:e.jsx(x,{width:18,icon:"fluent:mail-24-filled"})}),e.jsx(q,{title:"Download CV",children:e.jsx(S,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:n=>O(n.palette.secondary.main,.08),"&:hover":{bgcolor:n=>O(n.palette.secondary.main,.16)}},children:e.jsx(x,{width:18,icon:"eva:cloud-download-fill"})})})]})]})]},t.id))})}be.propTypes={candidates:a.array};function hs({id:s}){const t=pe(),n=xe.filter(f=>f.id===s)[0],[i,r]=g.useState(n==null?void 0:n.publish),[p,C]=g.useState("content"),h=g.useCallback((f,c)=>{C(c)},[]),u=g.useCallback(f=>{r(f)},[]),b=e.jsx(ss,{value:p,onChange:h,sx:{mb:{xs:3,md:5}},children:ns.map(f=>e.jsx(as,{iconPosition:"end",value:f.value,label:f.label,icon:f.value==="candidates"?e.jsx(ls,{variant:"filled",children:n==null?void 0:n.candidates.length}):""},f.value))});return e.jsxs(he,{maxWidth:t.themeStretch?!1:"lg",children:[e.jsx(ue,{backLink:P.dashboard.job.root,editLink:P.dashboard.job.edit(`${n==null?void 0:n.id}`),liveLink:"#",publish:i||"",onChangePublish:u,publishOptions:is}),b,p==="content"&&e.jsx(ye,{job:n}),p==="candidates"&&e.jsx(be,{candidates:n==null?void 0:n.candidates})]})}hs.propTypes={id:a.string};export{hs as J,cs as a,ds as b,rs as c,ps as d,ts as e,je as f,xs as g};
