import{bb as S,bc as w,ay as M,T as j,gA as W,r as l,b4 as A,b5 as B,j as e,b3 as T,b7 as L,b8 as R,c as d,D as o,bs as u,bt as h,bu as m,a6 as I,bv as g,gB as k,ag as C,au as F,i as b,av as v,B as P,E,cG as G,cH as U,cd as x,x as O,aB as H,ac as V,ad as N,h as _,O as q,gC as y,cu as $,p as z,C as Y,H as J}from"./index-AyhP95hO.js";import{C as K}from"./component-hero-FXW6jF7h.js";import{C as c}from"./component-block-fJyFI6v9.js";import{M as Q}from"./Masonry-CD1AhDkp.js";function X(n){return S("MuiDialogContentText",n)}w("MuiDialogContentText",["root"]);const Z=["children","className"],ee=n=>{const{classes:s}=n,i=R({root:["root"]},X,s);return T({},s,i)},ne=M(j,{shouldForwardProp:n=>W(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,s)=>s.root})({}),se=l.forwardRef(function(s,r){const i=A({props:s,name:"MuiDialogContentText"}),{className:t}=i,a=B(i,Z),p=ee(a);return e.jsx(ne,T({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:a,className:L(p.root,t)},i,{classes:p}))}),oe=se;function ie(){const n=d();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"warning",onClick:n.onTrue,children:"Form Dialogs"}),e.jsxs(u,{open:n.value,onClose:n.onFalse,children:[e.jsx(h,{children:"Subscribe"}),e.jsxs(m,{children:[e.jsx(j,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(I,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function le(){const n=d();return e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"info",variant:"outlined",onClick:n.onTrue,children:"Open alert dialog"}),e.jsxs(u,{open:n.value,onClose:n.onFalse,children:[e.jsx(h,{children:"Use Google's location service?"}),e.jsx(m,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function te(){const n=d(),[s,r]=l.useState("paper"),i=l.useCallback(a=>()=>{n.onTrue(),r(a)},[n]),t=l.useRef(null);return l.useEffect(()=>{if(n.value){const{current:a}=t;a&&a.focus()}},[n.value]),e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:i("paper"),sx:{mr:2},children:"scroll=paper"}),e.jsx(o,{variant:"outlined",onClick:i("body"),children:"scroll=body"}),e.jsxs(u,{open:n.value,onClose:n.onFalse,scroll:s,children:[e.jsx(h,{sx:{pb:2},children:"Subscribe"}),e.jsx(m,{dividers:s==="paper",children:e.jsx(oe,{ref:t,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,children:"Cancel"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,children:"Subscribe"})]})]})]})}const D=["username@gmail.com","user02@gmail.com"];function ae(){const n=d(),[s,r]=l.useState(D[1]),i=l.useCallback(t=>{n.onFalse(),r(t)},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{variant:"subtitle1",children:["Selected: ",s]}),e.jsx("br",{}),e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Open simple dialog"}),e.jsxs(u,{open:n.value,onClose:()=>i(s),children:[e.jsx(h,{children:"Set backup account"}),e.jsxs(k,{children:[D.map(t=>e.jsxs(C,{onClick:()=>i(t),children:[e.jsx(F,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:e.jsx(b,{icon:"solar:user-rounded-bold"})}),e.jsx(v,{primary:t})]},t)),e.jsxs(C,{autoFocus:!0,onClick:()=>i("addAccount"),children:[e.jsx(F,{sx:{mr:2},children:e.jsx(b,{icon:"mingcute:add-line"})}),e.jsx(v,{primary:"Add account"})]})]})]})]})}function re(){const n=d(),[s,r]=l.useState(!0),[i,t]=l.useState("sm"),a=l.useCallback(f=>{t(f.target.value)},[]),p=l.useCallback(f=>{r(f.target.checked)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Max Width Dialog"}),e.jsxs(u,{open:n.value,maxWidth:i,onClose:n.onFalse,fullWidth:s,children:[e.jsx(h,{children:"Optional sizes"}),e.jsxs(m,{children:[e.jsx(j,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(P,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[e.jsxs(E,{sx:{my:3,minWidth:160},children:[e.jsx(G,{htmlFor:"max-width",children:"maxWidth"}),e.jsxs(U,{autoFocus:!0,value:i,onChange:a,label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[e.jsx(x,{value:!1,children:"false"}),e.jsx(x,{value:"xs",children:"xs"}),e.jsx(x,{value:"sm",children:"sm"}),e.jsx(x,{value:"md",children:"md"}),e.jsx(x,{value:"lg",children:"lg"}),e.jsx(x,{value:"xl",children:"xl"})]})]}),e.jsx(O,{control:e.jsx(H,{checked:s,onChange:p}),label:"Full width",sx:{mt:1}})]})]}),e.jsx(g,{children:e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Close"})})]})]})}const ce=l.forwardRef((n,s)=>e.jsx(y,{direction:"up",ref:s,...n}));function de(){const n=d();return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",color:"error",onClick:n.onTrue,children:"Full Screen Dialogs"}),e.jsxs(u,{fullScreen:!0,open:n.value,onClose:n.onFalse,TransitionComponent:ce,children:[e.jsx(V,{position:"relative",color:"default",children:e.jsxs(N,{children:[e.jsx(_,{color:"inherit",edge:"start",onClick:n.onFalse,children:e.jsx(b,{icon:"mingcute:close-line"})}),e.jsx(j,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),e.jsx(o,{autoFocus:!0,color:"inherit",variant:"contained",onClick:n.onFalse,children:"Save"})]})}),e.jsxs(k,{children:[e.jsx(C,{children:e.jsx(v,{primary:"Phone ringtone",secondary:"Titania"})}),e.jsx(q,{}),e.jsx(C,{children:e.jsx(v,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}const ue=l.forwardRef((n,s)=>e.jsx(y,{direction:"up",ref:s,...n}));function xe(){const n=d();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"success",onClick:n.onTrue,children:"Transitions Dialogs"}),e.jsxs(u,{keepMounted:!0,open:n.value,TransitionComponent:ue,onClose:n.onFalse,children:[e.jsx(h,{children:"Use Google's location service?"}),e.jsx(m,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx($,{heading:"Dialog",links:[{name:"Components",href:z.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})}),e.jsx(Y,{sx:{my:10},children:e.jsxs(Q,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(c,{title:"Simple",children:e.jsx(ae,{})}),e.jsx(c,{title:"Alerts",children:e.jsx(le,{})}),e.jsx(c,{title:"Transitions",children:e.jsx(xe,{})}),e.jsx(c,{title:"Form",children:e.jsx(ie,{})}),e.jsx(c,{title:"Full Screen",children:e.jsx(de,{})}),e.jsx(c,{title:"Max Width Dialog",children:e.jsx(re,{})}),e.jsx(c,{title:"Scrolling Content Dialogs",children:e.jsx(te,{})})]})})]})}function Ce(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("title",{children:" MUI: Dialog"})}),e.jsx(he,{})]})}export{Ce as default};
