import{bG as I,d as z,e as f,c_ as oe,bJ as re,f as F,o as O,r as j,j as e,F as N,am as x,m as v,eD as te,T as q,eE as ie,bT as le,t as C,B as A,g as w,D as ce,cW as de,S as h,dE as xe,bx as _,K as H,i,az as G,h as T,bC as W,bZ as S,ad as b,by as pe,ab as ue,I as k,c0 as me,c as P,bK as D,E as $,av as M,aw as he,bX as be,L as je,c9 as ye,y as ge,aA as fe,l as we,aE as Ce,C as ve,bW as Se,p as U,eH as Pe,eI as Ae,eJ as Te,eK as ke,ey as Ie,H as Fe}from"./index-rcXNTvDP.js";import{L as E}from"./LoadingButton-7Wl_UZwm.js";import{a as Ne,b as qe,c as De}from"./new-password-icon-pAsCOY2v.js";import{b as Ee,A as Le,a as Be}from"./address-list-dialog-ShcHR2vj.js";import{P as Re}from"./payment-new-card-dialog-3OCXQKyj.js";import{T as Ue,a as ze}from"./Tabs-LL1nZZU6.js";import"./CircularProgress-UE5rdxfP.js";function Oe(){const{enqueueSnackbar:n}=I(),{user:s}=xe(),o=z().shape({displayName:f().required("Name is required"),email:f().required("Email is required").email("Email must be a valid email address"),photoURL:oe().nullable().required("Avatar is required"),phoneNumber:f().required("Phone number is required"),country:f().required("Country is required"),address:f().required("Address is required"),state:f().required("State is required"),city:f().required("City is required"),zipCode:f().required("Zip code is required"),about:f().required("About is required"),isPublic:re()}),r={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",photoURL:(s==null?void 0:s.photoURL)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},c=F({resolver:O(o),defaultValues:r}),{setValue:m,handleSubmit:y,formState:{isSubmitting:l}}=c,u=y(async t=>{try{await new Promise(p=>setTimeout(p,500)),n("Update success!"),console.info("DATA",t)}catch(p){console.error(p)}}),a=j.useCallback(t=>{const p=t[0],g=Object.assign(p,{preview:URL.createObjectURL(p)});p&&m("photoURL",g,{shouldValidate:!0})},[m]);return e.jsx(N,{methods:c,onSubmit:u,children:e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:4,children:e.jsxs(v,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(te,{name:"photoURL",maxSize:3145728,onDrop:a,helperText:e.jsxs(q,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",ie(3145728)]})}),e.jsx(le,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}}),e.jsx(C,{variant:"soft",color:"error",sx:{mt:3},children:"Delete User"})]})}),e.jsx(x,{xs:12,md:8,children:e.jsxs(v,{sx:{p:3},children:[e.jsxs(A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(w,{name:"displayName",label:"Name"}),e.jsx(w,{name:"email",label:"Email Address"}),e.jsx(w,{name:"phoneNumber",label:"Phone Number"}),e.jsx(w,{name:"address",label:"Address"}),e.jsx(ce,{name:"country",type:"country",label:"Country",placeholder:"Choose a country",options:de.map(t=>t.label),getOptionLabel:t=>t}),e.jsx(w,{name:"state",label:"State/Region"}),e.jsx(w,{name:"city",label:"City"}),e.jsx(w,{name:"zipCode",label:"Zip/Code"})]}),e.jsxs(h,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(w,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(E,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})]})})]})})}function B({card:n,sx:s,...o}){const r=_();return e.jsxs(e.Fragment,{children:[e.jsxs(h,{spacing:1,component:H,variant:"outlined",sx:{p:2.5,width:1,position:"relative",...s},...o,children:[e.jsxs(h,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:n.cardType==="visa"&&"logos:visa"||"logos:mastercard",width:36}),n.primary&&e.jsx(G,{color:"info",children:"Default"})]}),e.jsx(q,{variant:"subtitle2",children:n.cardNumber}),e.jsx(T,{onClick:r.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(i,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(W,{open:r.open,onClose:r.onClose,children:[e.jsxs(S,{onClick:r.onClose,children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:r.onClose,children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:r.onClose,sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}B.propTypes={card:b.object,sx:b.object};function V({open:n,list:s,onClose:o,selected:r,onSelect:c}){const[m,y]=j.useState(""),u=!_e({inputData:s,query:m}).length&&!!m,a=j.useCallback(g=>{y(g.target.value)},[]),t=j.useCallback(g=>{c(g),y(""),o()},[o,c]),p=e.jsx(h,{spacing:2.5,sx:{p:3},children:s.map(g=>e.jsx(B,{card:g,onClick:()=>t(g),sx:{cursor:"pointer",...r(g.id)&&{boxShadow:L=>`0 0 0 2px ${L.palette.text.primary}`}}},g.id))});return e.jsxs(pe,{fullWidth:!0,maxWidth:"xs",open:n,onClose:o,children:[e.jsxs(h,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(q,{variant:"h6",children:" Cards "}),e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(h,{sx:{px:3},children:e.jsx(ue,{value:m,onChange:a,placeholder:"Search...",InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),u?e.jsx(me,{query:m,sx:{px:3,pt:5,pb:10}}):p]})}V.propTypes={list:b.array,onClose:b.func,onSelect:b.func,open:b.bool,selected:b.func};function _e({inputData:n,query:s}){return s?n.filter(o=>o.cardNumber.toLowerCase().indexOf(s.toLowerCase())!==-1):n}function K({cardList:n,addressBook:s,plans:o}){const r=P(),c=P(),m=s.filter(d=>d.primary)[0],y=n.filter(d=>d.primary)[0],[l,u]=j.useState(""),[a,t]=j.useState(m),[p,g]=j.useState(y),L=j.useCallback(d=>{o.filter(ae=>ae.primary)[0].subscription!==d&&u(d)},[o]),ee=j.useCallback(d=>{t(d)},[]),se=j.useCallback(d=>{g(d)},[]),ne=o.map(d=>e.jsx(x,{xs:12,md:4,children:e.jsxs(h,{component:H,variant:"outlined",onClick:()=>L(d.subscription),sx:{p:2.5,position:"relative",cursor:"pointer",...d.primary&&{opacity:.48,cursor:"default"},...d.subscription===l&&{boxShadow:R=>`0 0 0 2px ${R.palette.text.primary}`}},children:[d.primary&&e.jsx(G,{color:"info",startIcon:e.jsx(i,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),e.jsxs(A,{sx:{width:48,height:48},children:[d.subscription==="basic"&&e.jsx(Ne,{}),d.subscription==="starter"&&e.jsx(qe,{}),d.subscription==="premium"&&e.jsx(De,{})]}),e.jsx(A,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:d.subscription}),e.jsxs(h,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[d.price||"Free",!!d.price&&e.jsx(A,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},d.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(D,{title:"Plan"}),e.jsx(x,{container:!0,spacing:2,sx:{p:3},children:ne}),e.jsxs(h,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(x,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:l||"-"})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(x,{xs:12,md:8,children:e.jsx(C,{onClick:r.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:a==null?void 0:a.name})})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(x,{xs:12,md:8,sx:{color:"text.secondary"},children:a==null?void 0:a.fullAddress})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(x,{xs:12,md:8,sx:{color:"text.secondary"},children:a==null?void 0:a.phoneNumber})]}),e.jsxs(x,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(x,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(x,{xs:12,md:8,children:e.jsx(C,{onClick:c.onTrue,endIcon:e.jsx(i,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:p==null?void 0:p.cardNumber})})]})]}),e.jsx($,{sx:{borderStyle:"dashed"}}),e.jsxs(h,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(C,{variant:"outlined",children:"Cancel Plan"}),e.jsx(C,{variant:"contained",children:"Upgrade Plan"})]})]}),e.jsx(V,{list:n,open:c.value,onClose:c.onFalse,selected:d=>(p==null?void 0:p.id)===d,onSelect:se}),e.jsx(Ee,{list:s,open:r.value,onClose:r.onFalse,selected:d=>(a==null?void 0:a.id)===d,onSelect:ee,action:e.jsx(C,{size:"small",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}K.propTypes={addressBook:b.array,cardList:b.array,plans:b.array};function Z({cards:n}){const s=P();return e.jsxs(e.Fragment,{children:[e.jsxs(v,{sx:{my:3},children:[e.jsx(D,{title:"Payment Method",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:s.onTrue,children:"New Card"})}),e.jsx(A,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:n.map(o=>e.jsx(B,{card:o},o.id))})]}),e.jsx(Re,{open:s.value,onClose:s.onFalse})]})}Z.propTypes={cards:b.array};function J({invoices:n}){const s=P();return e.jsxs(v,{children:[e.jsx(D,{title:"Invoice History"}),e.jsxs(h,{spacing:1.5,sx:{px:3,pt:3},children:[(s.value?n:n.slice(0,8)).map(o=>e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(M,{primary:o.invoiceNumber,secondary:he(o.createdAt),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsx(q,{variant:"body2",sx:{textAlign:"right",mr:5},children:be(o.price)}),e.jsx(je,{color:"inherit",underline:"always",variant:"body2",href:"#",children:"PDF"})]},o.id)),e.jsx($,{sx:{borderStyle:"dashed"}})]}),e.jsx(h,{alignItems:"flex-start",sx:{p:2},children:e.jsx(C,{size:"small",color:"inherit",startIcon:e.jsx(i,{icon:s.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),onClick:s.onToggle,children:s.value?"Show Less":"Show More"})})]})}J.propTypes={invoices:b.array};function X({addressBook:n}){const[s,o]=j.useState(""),r=_(),c=P(),m=j.useCallback(u=>{console.info("ADDRESS",u)},[]),y=j.useCallback((u,a)=>{r.onOpen(u),o(a)},[r]),l=j.useCallback(()=>{r.onClose(),o("")},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(D,{title:"Address Book",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:c.onTrue,children:"Address"})}),e.jsx(h,{spacing:2.5,sx:{p:3},children:n.map(u=>e.jsx(Le,{variant:"outlined",address:u,action:e.jsx(T,{onClick:a=>{y(a,`${u.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(i,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},u.id))})]}),e.jsxs(W,{open:r.open,onClose:l,children:[e.jsxs(S,{onClick:()=>{l(),console.info("SET AS PRIMARY",s)},children:[e.jsx(i,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(S,{onClick:()=>{l(),console.info("EDIT",s)},children:[e.jsx(i,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(S,{onClick:()=>{l(),console.info("DELETE",s)},sx:{color:"error.main"},children:[e.jsx(i,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(Be,{open:c.value,onClose:c.onFalse,onCreate:m})]})}X.propTypes={addressBook:b.array};function Y({cards:n,plans:s,invoices:o,addressBook:r}){return e.jsxs(x,{container:!0,spacing:5,disableEqualOverflow:!0,children:[e.jsxs(x,{xs:12,md:8,children:[e.jsx(K,{plans:s,cardList:n,addressBook:r}),e.jsx(Z,{cards:n}),e.jsx(X,{addressBook:r})]}),e.jsx(x,{xs:12,md:4,children:e.jsx(J,{invoices:o})})]})}Y.propTypes={addressBook:b.array,cards:b.array,invoices:b.array,plans:b.array};function Q({socialLinks:n}){const{enqueueSnackbar:s}=I(),o={facebook:n.facebook,instagram:n.instagram,linkedin:n.linkedin,twitter:n.twitter},r=F({defaultValues:o}),{handleSubmit:c,formState:{isSubmitting:m}}=r,y=c(async l=>{try{await new Promise(u=>setTimeout(u,500)),s("Update success!"),console.info("DATA",l)}catch(u){console.error(u)}});return e.jsx(N,{methods:r,onSubmit:y,children:e.jsxs(h,{component:v,spacing:3,sx:{p:3},children:[Object.keys(n).map(l=>e.jsx(w,{name:l,InputProps:{startAdornment:e.jsx(k,{position:"start",children:e.jsx(i,{width:24,icon:l==="facebook"&&"eva:facebook-fill"||l==="instagram"&&"ant-design:instagram-filled"||l==="linkedin"&&"eva:linkedin-fill"||l==="twitter"&&"eva:twitter-fill"||"",color:l==="facebook"&&"#1877F2"||l==="instagram"&&"#DF3E30"||l==="linkedin"&&"#006097"||l==="twitter"&&"#1C9CEA"||""})})}},l)),e.jsx(E,{type:"submit",variant:"contained",loading:m,sx:{ml:"auto"},children:"Save Changes"})]})})}Q.propTypes={socialLinks:b.object};const He=[{subheader:"Activity",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"activity_comments",label:"Email me when someone comments onmy article"},{id:"activity_answers",label:"Email me when someone answers on my form"},{id:"activityFollows",label:"Email me hen someone follows me"}]},{subheader:"Application",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"application_news",label:"News and announcements"},{id:"application_product",label:"Weekly product updates"},{id:"application_blog",label:"Weekly blog digest"}]}];function Ge(){const{enqueueSnackbar:n}=I(),s=F({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:o,control:r,handleSubmit:c,formState:{isSubmitting:m}}=s,y=o(),l=c(async a=>{try{await new Promise(t=>setTimeout(t,500)),n("Update success!"),console.info("DATA",a)}catch(t){console.error(t)}}),u=(a,t)=>a.includes(t)?a.filter(p=>p!==t):[...a,t];return e.jsx(N,{methods:s,onSubmit:l,children:e.jsxs(h,{component:v,spacing:3,sx:{p:3},children:[He.map(a=>e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:4,children:e.jsx(M,{primary:a.subheader,secondary:a.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(x,{xs:12,md:8,children:e.jsx(h,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(ye,{name:"selected",control:r,render:({field:t})=>e.jsx(e.Fragment,{children:a.items.map(p=>e.jsx(ge,{label:p.label,labelPlacement:"start",control:e.jsx(fe,{checked:t.value.includes(p.id),onChange:()=>t.onChange(u(y.selected,p.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},p.id))})})})})]},a.subheader)),e.jsx(E,{type:"submit",variant:"contained",loading:m,sx:{ml:"auto"},children:"Save Changes"})]})})}function We(){const{enqueueSnackbar:n}=I(),s=P(),o=z().shape({oldPassword:f().required("Old Password is required"),newPassword:f().required("New Password is required").min(6,"Password must be at least 6 characters").test("no-match","New password must be different than old password",(a,{parent:t})=>a!==t.oldPassword),confirmNewPassword:f().oneOf([we("newPassword")],"Passwords must match")}),r={oldPassword:"",newPassword:"",confirmNewPassword:""},c=F({resolver:O(o),defaultValues:r}),{reset:m,handleSubmit:y,formState:{isSubmitting:l}}=c,u=y(async a=>{try{await new Promise(t=>setTimeout(t,500)),m(),n("Update success!"),console.info("DATA",a)}catch(t){console.error(t)}});return e.jsx(N,{methods:c,onSubmit:u,children:e.jsxs(h,{component:v,spacing:3,sx:{p:3},children:[e.jsx(w,{name:"oldPassword",type:s.value?"text":"password",label:"Old Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(w,{name:"newPassword",label:"New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(h,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(i,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(w,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm New Password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(T,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(E,{type:"submit",variant:"contained",loading:l,sx:{ml:"auto"},children:"Save Changes"})]})})}const $e=[{value:"general",label:"General",icon:e.jsx(i,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:e.jsx(i,{icon:"solar:bill-list-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(i,{icon:"solar:bell-bing-bold",width:24})},{value:"social",label:"Social links",icon:e.jsx(i,{icon:"solar:share-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(i,{icon:"ic:round-vpn-key",width:24})}];function Me(){const n=Ce(),[s,o]=j.useState("general"),r=j.useCallback((c,m)=>{o(m)},[]);return e.jsxs(ve,{maxWidth:n.themeStretch?!1:"lg",children:[e.jsx(Se,{heading:"Account",links:[{name:"Dashboard",href:U.dashboard.root},{name:"User",href:U.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ue,{value:s,onChange:r,sx:{mb:{xs:3,md:5}},children:$e.map(c=>e.jsx(ze,{label:c.label,icon:c.icon,value:c.value},c.value))}),s==="general"&&e.jsx(Oe,{}),s==="billing"&&e.jsx(Y,{plans:Pe,cards:Ae,invoices:Te,addressBook:ke}),s==="notifications"&&e.jsx(Ge,{}),s==="social"&&e.jsx(Q,{socialLinks:Ie.socialLinks}),s==="security"&&e.jsx(We,{})]})}function es(){return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:e.jsx("title",{children:" Dashboard: Account Settings"})}),e.jsx(Me,{})]})}export{es as default};
