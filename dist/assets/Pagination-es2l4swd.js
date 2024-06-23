import{N as D,M as H,X as U,b7 as J,_ as r,aN as F,j as g,O as j,cs as c,ba as K,a9 as k,r as V,U as E,V as Q,ct as T,cu as W,Y as h,aO as m,a0 as G,cv as Z}from"./index-4yL3xM3x.js";function w(a){return H("MuiPagination",a)}const S=D("MuiPagination",["root","ul","outlined","text"]),fa=S,aa=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ta(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:b=!1,hideNextButton:x=!1,hidePrevButton:e=!1,onChange:p,page:f,showFirstButton:I=!1,showLastButton:R=!1,siblingCount:y=1}=a,l=U(a,aa),[i,O]=J({controlled:f,default:v,name:o,state:"page"}),N=(n,P)=>{f||O(P),p&&p(n,P)},d=(n,P)=>{const Y=P-n+1;return Array.from({length:Y},(ba,q)=>n+q)},z=d(1,Math.min(t,s)),u=d(Math.max(s-t+1,t+1),s),B=Math.max(Math.min(i-y,s-t-y*2-1),t+2),$=Math.min(Math.max(i+y,t+y*2+2),u.length>0?u[0]-2:s-1),M=[...I?["first"]:[],...e?[]:["previous"],...z,...B>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...d(B,$),...$<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...u,...x?[]:["next"],...R?["last"]:[]],L=n=>{switch(n){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return s;default:return null}},C=M.map(n=>typeof n=="number"?{onClick:P=>{N(P,n)},type:"page",page:n,selected:n===i,disabled:b,"aria-current":n===i?"true":void 0}:{onClick:P=>{N(P,L(n))},type:n,page:L(n),selected:!1,disabled:b||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?i>=s:i<=1)});return r({items:C},l)}const _=F(g.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),A=F(g.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),oa=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],X=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${m(o.size)}`],o.variant==="text"&&t[`text${m(o.color)}`],o.variant==="outlined"&&t[`outlined${m(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},sa=a=>{const{classes:t,color:o,disabled:s,selected:v,size:b,shape:x,type:e,variant:p}=a,f={root:["root",`size${m(b)}`,p,x,o!=="standard"&&`${p}${m(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[e]],icon:["icon"]};return G(f,Z,t)},na=j("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:X})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ia=j(K,{name:"MuiPaginationItem",slot:"Root",overridesResolver:X})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:k(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:k(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>r({},t.variant==="text"&&{[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${c.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:k(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:k(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:k(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:k(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${c.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),ea=j("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>r({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),ra=V.forwardRef(function(t,o){const s=E({props:t,name:"MuiPaginationItem"}),{className:v,color:b="standard",component:x,components:e={},disabled:p=!1,page:f,selected:I=!1,shape:R="circular",size:y="medium",slots:l={},type:i="page",variant:O="text"}=s,N=U(s,oa),d=r({},s,{color:b,disabled:p,selected:I,shape:R,size:y,type:i,variant:O}),z=Q(),u=sa(d),$=(z.direction==="rtl"?{previous:l.next||e.next||A,next:l.previous||e.previous||_,last:l.first||e.first||T,first:l.last||e.last||W}:{previous:l.previous||e.previous||_,next:l.next||e.next||A,first:l.first||e.first||T,last:l.last||e.last||W})[i];return i==="start-ellipsis"||i==="end-ellipsis"?g.jsx(na,{ref:o,ownerState:d,className:h(u.root,v),children:"…"}):g.jsxs(ia,r({ref:o,ownerState:d,component:x,disabled:p,className:h(u.root,v)},N,{children:[i==="page"&&f,$?g.jsx(ea,{as:$,ownerState:d,className:u.icon}):null]}))}),la=ra,ca=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],pa=a=>{const{classes:t,variant:o}=a;return G({root:["root",o],ul:["ul"]},w,t)},da=j("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),ua=j("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ga(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const va=V.forwardRef(function(t,o){const s=E({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:b,color:x="standard",count:e=1,defaultPage:p=1,disabled:f=!1,getItemAriaLabel:I=ga,hideNextButton:R=!1,hidePrevButton:y=!1,renderItem:l=C=>g.jsx(la,r({},C)),shape:i="circular",showFirstButton:O=!1,showLastButton:N=!1,siblingCount:d=1,size:z="medium",variant:u="text"}=s,B=U(s,ca),{items:$}=ta(r({},s,{componentName:"Pagination"})),M=r({},s,{boundaryCount:v,color:x,count:e,defaultPage:p,disabled:f,getItemAriaLabel:I,hideNextButton:R,hidePrevButton:y,renderItem:l,shape:i,showFirstButton:O,showLastButton:N,siblingCount:d,size:z,variant:u}),L=pa(M);return g.jsx(da,r({"aria-label":"pagination navigation",className:h(L.root,b),ownerState:M,ref:o},B,{children:g.jsx(ua,{className:L.ul,ownerState:M,children:$.map((C,n)=>g.jsx("li",{children:l(r({},C,{color:x,"aria-label":I(C.type,C.page,C.selected),shape:i,size:z,variant:u}))},n))})}))}),ya=va;export{ya as P,fa as p};
