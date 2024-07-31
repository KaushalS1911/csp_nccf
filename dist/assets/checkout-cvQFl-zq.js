import{j as e,q as v,bK as f,D as x,i as c,s as G,S as l,T as p,bL as y,O as w,B as h,a6 as D,I as H,a8 as n,bM as Q,bN as C,au as q,aA as U,bO as M,bP as Y,h as K,bQ as Z,bR as J,bS as X,bT as ee,bU as se,aG as S,ah as j,aV as te,R as ne,p as re,ay as oe,bV as P,v as A,W as T,av as O,c as F,bW as ae,d as ie,e as ce,f as le,F as de,k as pe,o as xe,bX as he,bs as ue,Z as je,a5 as me,bY as ye,L as be,bZ as Ce,aF as ve,C as fe,b_ as ge,H as Se}from"./index-cpUTk0A7.js";import{S as ke,a as we,b as Te,s as Ie,c as De,d as g}from"./Stepper-FD89hzD1.js";import{P as Pe}from"./payment-new-card-dialog-gFUcqEMT.js";import{A as Ae,a as Oe}from"./address-list-dialog-Hhn42rw9.js";function k({total:s,discount:t,subTotal:a,shipping:o,onEdit:r,onApplyDiscount:i}){const d=o!==null?"Free":"-";return e.jsxs(v,{sx:{mb:3},children:[e.jsx(f,{title:"Order Summary",action:r&&e.jsx(x,{size:"small",onClick:r,startIcon:e.jsx(c,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsx(G,{children:e.jsxs(l,{spacing:2,children:[e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),e.jsx(p,{variant:"subtitle2",children:y(a)})]}),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),e.jsx(p,{variant:"subtitle2",children:t?y(-t):"-"})]}),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),e.jsx(p,{variant:"subtitle2",children:o?y(o):d})]}),e.jsx(w,{sx:{borderStyle:"dashed"}}),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(p,{variant:"subtitle1",children:"Total"}),e.jsxs(h,{sx:{textAlign:"right"},children:[e.jsx(p,{variant:"subtitle1",sx:{color:"error.main"},children:y(s)}),e.jsx(p,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),i&&e.jsx(D,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(H,{position:"end",children:e.jsx(x,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})})]})}k.propTypes={total:n.number,discount:n.number,shipping:n.number,subTotal:n.number,onEdit:n.func,onApplyDiscount:n.func};function B({row:s,onDelete:t,onDecrease:a,onIncrease:o}){const{name:r,size:i,price:d,colors:u,coverUrl:b,quantity:m,available:I}=s;return e.jsxs(Q,{children:[e.jsxs(C,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(q,{variant:"rounded",alt:r,src:b,sx:{width:64,height:64,mr:2}}),e.jsxs(l,{spacing:.5,children:[e.jsx(p,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:r}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(U,{sx:{ml:.5},children:[" ",i," "]}),e.jsx(w,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(M,{colors:u})]})]})]}),e.jsx(C,{children:y(d)}),e.jsx(C,{children:e.jsxs(h,{sx:{width:88,textAlign:"right"},children:[e.jsx(Y,{quantity:m,onDecrease:a,onIncrease:o,disabledDecrease:m<=1,disabledIncrease:m>=I}),e.jsxs(p,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",I]})]})}),e.jsx(C,{align:"right",children:y(d*m)}),e.jsx(C,{align:"right",sx:{px:1},children:e.jsx(K,{onClick:t,children:e.jsx(c,{icon:"solar:trash-bin-trash-bold"})})})]})}B.propTypes={row:n.object,onDelete:n.func,onDecrease:n.func,onIncrease:n.func};const Fe=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function W({products:s,onDelete:t,onIncreaseQuantity:a,onDecreaseQuantity:o}){return e.jsx(Z,{sx:{overflow:"unset"},children:e.jsx(J,{children:e.jsxs(X,{sx:{minWidth:720},children:[e.jsx(ee,{headLabel:Fe}),e.jsx(se,{children:s.map(r=>e.jsx(B,{row:r,onDelete:()=>t(r.id),onDecrease:()=>o(r.id),onIncrease:()=>a(r.id)},r.id))})]})})})}W.propTypes={onDelete:n.func,products:n.array,onDecreaseQuantity:n.func,onIncreaseQuantity:n.func};function Be(){const s=S(),t=!s.items.length;return e.jsxs(j,{container:!0,spacing:3,children:[e.jsxs(j,{xs:12,md:8,children:[e.jsxs(v,{sx:{mb:3},children:[e.jsx(f,{title:e.jsxs(p,{variant:"h6",children:["Cart",e.jsxs(p,{component:"span",sx:{color:"text.secondary"},children:[" (",s.totalItems," item)"]})]}),sx:{mb:3}}),t?e.jsx(te,{title:"Cart is Empty!",description:"Look like you have no items in your shopping cart.",imgUrl:"/assets/icons/empty/ic_cart.svg",sx:{pt:5,pb:10}}):e.jsx(W,{products:s.items,onDelete:s.onDeleteCart,onIncreaseQuantity:s.onIncreaseQuantity,onDecreaseQuantity:s.onDecreaseQuantity})]}),e.jsx(x,{component:ne,href:re.product.root,color:"inherit",startIcon:e.jsx(c,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),e.jsxs(j,{xs:12,md:4,children:[e.jsx(k,{total:s.total,discount:s.discount,subTotal:s.subTotal,onApplyDiscount:s.onApplyDiscount}),e.jsx(x,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:t,onClick:s.onNextStep,children:"Check Out"})]})]})}const We=oe(De)(({theme:s})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${g.line}`]:{borderTopWidth:2,borderColor:s.palette.divider},[`&.${g.active}, &.${g.completed}`]:{[`& .${g.line}`]:{borderColor:s.palette.primary.main}}}));function E({steps:s,activeStep:t,sx:a,...o}){return e.jsx(ke,{alternativeLabel:!0,activeStep:t,connector:e.jsx(We,{}),sx:{mb:{xs:3,md:5},...a},...o,children:s.map(r=>e.jsx(we,{children:e.jsx(Te,{StepIconComponent:L,sx:{[`& .${Ie.label}`]:{fontWeight:"fontWeightSemiBold"}},children:r})},r))})}E.propTypes={activeStep:n.number,steps:n.arrayOf(n.string),sx:n.object};function L({active:s,completed:t}){return e.jsx(l,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...s&&{color:"primary.main"}},children:t?e.jsx(c,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(h,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}L.propTypes={active:n.bool,completed:n.bool};function z({options:s,onApplyShipping:t,...a}){const{control:o}=P();return e.jsxs(v,{...a,children:[e.jsx(f,{title:"Delivery"}),e.jsx(A,{name:"delivery",control:o,render:({field:r})=>e.jsx(h,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:s.map(i=>e.jsx(R,{option:i,selected:r.value===i.value,onClick:()=>{r.onChange(i.value),t(i.value)}},i.label))})})]})}z.propTypes={onApplyShipping:n.func,options:n.array};function R({option:s,selected:t,...a}){const{value:o,label:r,description:i}=s;return e.jsxs(T,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...t&&{boxShadow:d=>`0 0 0 2px ${d.palette.text.primary}`}},...a,children:[r==="Free"&&e.jsx(c,{icon:"carbon:bicycle",width:32}),r==="Standard"&&e.jsx(c,{icon:"carbon:delivery",width:32}),r==="Express"&&e.jsx(c,{icon:"carbon:rocket",width:32}),e.jsx(O,{sx:{ml:2},primary:e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(h,{component:"span",sx:{flexGrow:1},children:r}),e.jsx(h,{component:"span",sx:{typography:"h6"},children:`$${o}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},o)}R.propTypes={option:n.object,selected:n.bool};function $({billing:s,onBackStep:t}){return e.jsxs(v,{sx:{mb:3},children:[e.jsx(f,{title:"Address",action:e.jsx(x,{size:"small",startIcon:e.jsx(c,{icon:"solar:pen-bold"}),onClick:t,children:"Edit"})}),e.jsxs(l,{spacing:1,sx:{p:3},children:[e.jsxs(h,{sx:{typography:"subtitle2"},children:[`${s==null?void 0:s.name} `,e.jsxs(h,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",s==null?void 0:s.addressType,")"]})]}),e.jsx(h,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.fullAddress}),e.jsx(h,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.phoneNumber})]})]})}$.propTypes={billing:n.object,onBackStep:n.func};function N({options:s,cardOptions:t,...a}){const{control:o}=P(),r=F();return e.jsxs(e.Fragment,{children:[e.jsxs(v,{...a,children:[e.jsx(f,{title:"Payment"}),e.jsx(A,{name:"payment",control:o,render:({field:i,fieldState:{error:d}})=>e.jsxs(l,{sx:{px:3,pb:3},children:[s.map(u=>e.jsx(V,{option:u,onOpen:r.onTrue,cardOptions:t,selected:i.value===u.value,isCredit:u.value==="credit"&&i.value==="credit",onClick:()=>{i.onChange(u.value)}},u.label)),!!d&&e.jsx(ae,{error:!0,sx:{pt:1,px:2},children:d.message})]})})]}),e.jsx(Pe,{open:r.value,onClose:r.onFalse})]})}N.propTypes={cardOptions:n.array,options:n.array};function V({option:s,cardOptions:t,selected:a,isCredit:o,onOpen:r,...i}){const{value:d,label:u,description:b}=s;return e.jsxs(T,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...a&&{boxShadow:m=>`0 0 0 2px ${m.palette.text.primary}`}},...i,children:[e.jsx(O,{primary:e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(h,{component:"span",sx:{flexGrow:1},children:u}),e.jsxs(l,{spacing:1,direction:"row",alignItems:"center",children:[d==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(c,{icon:"logos:mastercard",width:24}),",",e.jsx(c,{icon:"logos:visa",width:24})]}),d==="paypal"&&e.jsx(c,{icon:"logos:paypal",width:24}),d==="cash"&&e.jsx(c,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:b,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),o&&e.jsxs(l,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(D,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:t.map(m=>e.jsx("option",{value:m.value,children:m.label},m.value))}),e.jsx(x,{size:"small",color:"primary",startIcon:e.jsx(c,{icon:"mingcute:add-line"}),onClick:r,children:"Add New Card"})]})]},d)}V.propTypes={cardOptions:n.array,isCredit:n.bool,onOpen:n.func,option:n.object,selected:n.bool};const Ee=[{value:0,label:"Free",description:"5-7 Days delivery"},{value:10,label:"Standard",description:"3-5 Days delivery"},{value:20,label:"Express",description:"2-3 Days delivery"}],Le=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your head-office is delivered."}],ze=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Re(){const s=S(),t=ie().shape({payment:ce().required("Payment is required")}),a={delivery:s.shipping,payment:""},o=le({resolver:xe(t),defaultValues:a}),{handleSubmit:r,formState:{isSubmitting:i}}=o,d=r(async u=>{try{s.onNextStep(),s.onReset(),console.info("DATA",u)}catch(b){console.error(b)}});return e.jsx(de,{methods:o,onSubmit:d,children:e.jsxs(j,{container:!0,spacing:3,children:[e.jsxs(j,{xs:12,md:8,children:[e.jsx(z,{onApplyShipping:s.onApplyShipping,options:Ee}),e.jsx(N,{cardOptions:ze,options:Le,sx:{my:3}}),e.jsx(x,{size:"small",color:"inherit",onClick:s.onBackStep,startIcon:e.jsx(c,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(j,{xs:12,md:4,children:[e.jsx($,{billing:s.billing,onBackStep:s.onBackStep}),e.jsx(k,{total:s.total,subTotal:s.subTotal,discount:s.discount,shipping:s.shipping,onEdit:()=>s.onGotoStep(0)}),e.jsx(pe,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:i,children:"Complete Order"})]})]})})}function _({open:s,onReset:t,onDownloadPDF:a}){const o=e.jsxs(l,{spacing:5,sx:{m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(p,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(ye,{sx:{height:260}}),e.jsxs(p,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(be,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{})," ",e.jsx("br",{}),"All the best,"]}),e.jsx(w,{sx:{borderStyle:"dashed"}}),e.jsxs(l,{spacing:2,justifyContent:"space-between",direction:{xs:"column-reverse",sm:"row"},children:[e.jsx(x,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",onClick:t,startIcon:e.jsx(c,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),e.jsx(x,{fullWidth:!0,size:"large",variant:"contained",startIcon:e.jsx(c,{icon:"eva:cloud-download-fill"}),onClick:a,children:"Download as PDF"})]})]});return e.jsx(he,{children:s&&e.jsx(ue,{fullWidth:!0,fullScreen:!0,open:s,PaperComponent:r=>e.jsx(h,{component:je.div,...me({distance:120,durationIn:.32,durationOut:.24,easeIn:"easeInOut"}).inUp,sx:{width:1,height:1,p:{md:3}},children:e.jsx(T,{...r,children:r.children})}),children:o})})}_.propTypes={open:n.bool,onReset:n.func,children:n.node,onDownloadPDF:n.func};function $e(){const s=S(),t=F();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{container:!0,spacing:3,children:[e.jsxs(j,{xs:12,md:8,children:[Ce.slice(0,4).map(a=>e.jsx(Ae,{address:a,action:e.jsxs(l,{flexDirection:"row",flexWrap:"wrap",flexShrink:0,children:[!a.primary&&e.jsx(x,{size:"small",color:"error",sx:{mr:1},children:"Delete"}),e.jsx(x,{variant:"outlined",size:"small",onClick:()=>s.onCreateBilling(a),children:"Deliver to this Address"})]}),sx:{p:3,mb:3,borderRadius:2,boxShadow:o=>o.customShadows.card}},a.id)),e.jsxs(l,{direction:"row",justifyContent:"space-between",children:[e.jsx(x,{size:"small",color:"inherit",onClick:s.onBackStep,startIcon:e.jsx(c,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(x,{size:"small",color:"primary",onClick:t.onTrue,startIcon:e.jsx(c,{icon:"mingcute:add-line"}),children:"New Address"})]})]}),e.jsx(j,{xs:12,md:4,children:e.jsx(k,{total:s.total,subTotal:s.subTotal,discount:s.discount})})]}),e.jsx(Oe,{open:t.value,onClose:t.onFalse,onCreate:s.onCreateBilling})]})}function Ne(){const s=ve(),t=S();return e.jsxs(fe,{maxWidth:s.themeStretch?!1:"lg",sx:{mb:10},children:[e.jsx(p,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(j,{container:!0,justifyContent:t.completed?"center":"flex-start",children:e.jsx(j,{xs:12,md:8,children:e.jsx(E,{activeStep:t.activeStep,steps:ge})})}),t.completed?e.jsx(_,{open:t.completed,onReset:t.onReset,onDownloadPDF:()=>{}}):e.jsxs(e.Fragment,{children:[t.activeStep===0&&e.jsx(Be,{}),t.activeStep===1&&e.jsx($e,{}),t.activeStep===2&&t.billing&&e.jsx(Re,{})]})]})}function Qe(){return e.jsxs(e.Fragment,{children:[e.jsx(Se,{children:e.jsx("title",{children:" Checkout"})}),e.jsx(Ne,{})]})}export{Qe as default};