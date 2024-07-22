import{j as e,B as u,T as s,S as r,az as f,aA as w,N as m,w as y,i,a7 as c,c as P,r as j,V as C,au as S,a5 as d,C as T,ag as p,H as I}from"./index-OKHCej4L.js";import{P as k}from"./payment-new-card-dialog-KwBmUn4d.js";function b({sx:n,...t}){const l=e.jsxs(r,{direction:"row",justifyContent:"flex-end",children:[e.jsx(s,{variant:"h4",children:"$"}),e.jsx(s,{variant:"h2",children:"9.99"}),e.jsx(s,{component:"span",sx:{alignSelf:"center",color:"text.disabled",ml:1,typography:"body2"},children:"/ mo"})]});return e.jsxs(u,{sx:{p:5,borderRadius:2,bgcolor:"background.neutral",...n},...t,children:[e.jsx(s,{variant:"h6",sx:{mb:5},children:"Summary"}),e.jsxs(r,{spacing:2.5,children:[e.jsxs(r,{direction:"row",justifyContent:"space-between",children:[e.jsx(s,{variant:"body2",sx:{color:"text.secondary"},children:"Subscription"}),e.jsx(f,{color:"error",children:"PREMIUM"})]}),e.jsxs(r,{direction:"row",justifyContent:"space-between",children:[e.jsx(s,{variant:"body2",sx:{color:"text.secondary"},children:"Billed Monthly"}),e.jsx(w,{defaultChecked:!0})]}),l,e.jsx(m,{sx:{borderStyle:"dashed"}}),e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{variant:"subtitle1",children:"Total Billed"}),e.jsx(s,{variant:"subtitle1",children:"$9.99*"})]}),e.jsx(m,{sx:{borderStyle:"dashed"}})]}),e.jsx(s,{component:"div",variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),e.jsx(y,{fullWidth:!0,size:"large",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade My Plan"}),e.jsxs(r,{alignItems:"center",spacing:1,children:[e.jsxs(r,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(i,{icon:"solar:shield-check-bold",sx:{color:"success.main"}}),e.jsx(s,{variant:"subtitle2",children:"Secure credit card payment"})]}),e.jsx(s,{variant:"caption",sx:{color:"text.disabled",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}b.propTypes={sx:c.object};const A=[{value:"paypal",label:"Paypal"},{value:"credit",label:"Credit / Debit Card"}],M=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}];function B(){const n=P(),[t,l]=j.useState("paypal"),h=j.useCallback(a=>{l(a)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:5,children:[e.jsx(s,{variant:"h6",children:"Payment Method"}),e.jsx(r,{spacing:3,children:A.map(a=>e.jsx(g,{option:a,selected:t===a.value,isCredit:a.value==="credit"&&t==="credit",onOpen:n.onTrue,onClick:()=>h(a.value)},a.label))})]}),e.jsx(k,{open:n.value,onClose:n.onFalse})]})}function g({option:n,selected:t,isCredit:l,onOpen:h,...a}){const{value:x,label:v}=n;return e.jsxs(C,{variant:"outlined",sx:{p:2.5,cursor:"pointer",...t&&{boxShadow:o=>`0 0 0 2px ${o.palette.text.primary}`}},...a,children:[e.jsx(S,{primary:e.jsxs(r,{direction:"row",alignItems:"center",children:[e.jsx(i,{icon:t?"eva:checkmark-circle-2-fill":"eva:radio-button-off-fill",width:24,sx:{mr:2,color:t?"primary.main":"text.secondary"}}),e.jsx(u,{component:"span",sx:{flexGrow:1},children:v}),e.jsxs(r,{spacing:1,direction:"row",alignItems:"center",children:[x==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"logos:mastercard",width:24}),",",e.jsx(i,{icon:"logos:visa",width:24})]}),x==="paypal"&&e.jsx(i,{icon:"logos:paypal",width:24}),x==="cash"&&e.jsx(i,{icon:"solar:wad-of-money-bold",width:24})]})]}),primaryTypographyProps:{typography:"subtitle2"}}),l&&e.jsxs(r,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(d,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:M.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))}),e.jsx(y,{size:"small",color:"primary",startIcon:e.jsx(i,{icon:"mingcute:add-line"}),onClick:h,children:"Add New Card"})]})]},x)}g.propTypes={isCredit:c.bool,onOpen:c.func,option:c.object,selected:c.bool};function O(){return e.jsxs("div",{children:[e.jsx(s,{variant:"h6",children:"Billing Address"}),e.jsxs(r,{spacing:3,mt:5,children:[e.jsx(d,{fullWidth:!0,label:"Person name"}),e.jsx(d,{fullWidth:!0,label:"Phone number"}),e.jsx(d,{fullWidth:!0,label:"Email"}),e.jsx(d,{fullWidth:!0,label:"Address"})]})]})}function N(){return e.jsxs(T,{sx:{pt:15,pb:10,minHeight:1},children:[e.jsx(s,{variant:"h3",align:"center",sx:{mb:2},children:"Let's finish powering you up!"}),e.jsx(s,{align:"center",sx:{color:"text.secondary",mb:5},children:"Professional plan is right for you."}),e.jsxs(p,{container:!0,rowSpacing:{xs:5,md:0},columnSpacing:{xs:0,md:5},children:[e.jsx(p,{xs:12,md:8,children:e.jsxs(u,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:{md:5},borderRadius:2,border:n=>({md:`dashed 1px ${n.palette.divider}`})},children:[e.jsx(O,{}),e.jsx(B,{})]})}),e.jsx(p,{xs:12,md:4,children:e.jsx(b,{})})]})]})}function F(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:" Payment"})}),e.jsx(N,{})]})}export{F as default};
