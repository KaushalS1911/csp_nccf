import{r as c,O as g,K as I,b6 as R,_ as n,U as S,X as M,b7 as P,j as l,Y as v,a0 as j,b8 as T,b9 as V,M as E,N as W,ba as _,bb as m,bc as q}from"./index-4yL3xM3x.js";const L=c.createContext({}),D=L,H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],O=o=>{const{classes:s,square:e,expanded:t,disabled:r,disableGutters:i}=o;return j({root:["root",!e&&"rounded",t&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]},T,s)},K=g(I,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),X=c.forwardRef(function(s,e){const t=S({props:s,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:d=!1,disabled:p=!1,disableGutters:b=!1,expanded:h,onChange:x,square:y=!1,TransitionComponent:C=V,TransitionProps:A}=t,$=M(t,H),[a,u]=P({controlled:h,default:d,name:"Accordion",state:"expanded"}),f=c.useCallback(B=>{u(!a),x&&x(B,!a)},[a,x,u]),[N,...U]=c.Children.toArray(r),w=c.useMemo(()=>({expanded:a,disabled:p,disableGutters:b,toggle:f}),[a,p,b,f]),G=n({},t,{square:y,disabled:p,disableGutters:b,expanded:a}),k=O(G);return l.jsxs(K,n({className:v(k.root,i),ref:e,ownerState:G,square:y},$,{children:[l.jsx(D.Provider,{value:w,children:N}),l.jsx(C,n({in:a,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":N.props.id,id:N.props["aria-controls"],role:"region",className:k.region,children:U})}))]}))}),no=X;function Y(o){return E("MuiAccordionDetails",o)}W("MuiAccordionDetails",["root"]);const z=["className"],F=o=>{const{classes:s}=o;return j({root:["root"]},Y,s)},J=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),Q=c.forwardRef(function(s,e){const t=S({props:s,name:"MuiAccordionDetails"}),{className:r}=t,i=M(t,z),d=t,p=F(d);return l.jsx(J,n({className:v(p.root,r),ref:e,ownerState:d},i))}),io=Q,Z=["children","className","expandIcon","focusVisibleClassName","onClick"],oo=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:r}=o;return j({root:["root",e&&"expanded",t&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},q,s)},so=g(_,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${m.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${m.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${m.expanded}`]:{minHeight:64}})}),eo=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}})),to=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}})),ao=c.forwardRef(function(s,e){const t=S({props:s,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:d,focusVisibleClassName:p,onClick:b}=t,h=M(t,Z),{disabled:x=!1,disableGutters:y,expanded:C,toggle:A}=c.useContext(D),$=f=>{A&&A(f),b&&b(f)},a=n({},t,{expanded:C,disabled:x,disableGutters:y}),u=oo(a);return l.jsxs(so,n({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":C,className:v(u.root,i),focusVisibleClassName:v(u.focusVisible,p),onClick:$,ref:e,ownerState:a},h,{children:[l.jsx(eo,{className:u.content,ownerState:a,children:r}),d&&l.jsx(to,{className:u.expandIconWrapper,ownerState:a,children:d})]}))}),co=ao;export{no as A,co as a,io as b};
