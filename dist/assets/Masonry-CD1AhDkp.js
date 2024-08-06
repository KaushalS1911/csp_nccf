import{bb as Q,bc as X,ay as Y,r as S,b4 as Z,b5 as ee,b3 as g,bh as te,bi as se,j as P,b7 as ne,b8 as oe,bj as T,bk as re,bl as $,bm as F,bn as ie,bo as E}from"./index-AyhP95hO.js";function ae(e){return Q("MuiMasonry",e)}X("MuiMasonry",["root"]);const le=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],m=e=>Number(e.replace("px","")),ce={flexBasis:"100%",width:0,margin:0,padding:0},ue=e=>{const{classes:n}=e;return oe({root:["root"]},ae,n)},me=({ownerState:e,theme:n})=>{let r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const c={};if(e.isSSR){const s={},t=m(n.spacing(e.defaultSpacing));for(let o=1;o<=e.defaultColumns;o+=1)s[`&:nth-of-type(${e.defaultColumns}n+${o%e.defaultColumns})`]={order:o};return c.height=e.defaultHeight,c.margin=-(t/2),c["& > *"]=g({},r["& > *"],s,{margin:t/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${t}px)`}),g({},r,c)}const i=T({values:e.spacing,breakpoints:n.breakpoints.values}),h=re(n);r=$(r,F({theme:n},i,s=>{let t;if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"){const o=Number(s);t=E(h,o)}else t=s;return g({margin:`calc(0px - (${t} / 2))`,"& > *":{margin:`calc(${t} / 2)`}},e.maxColumnHeight&&{height:typeof t=="number"?Math.ceil(e.maxColumnHeight+m(t)):`calc(${e.maxColumnHeight}px + ${t})`})}));const a=T({values:e.columns,breakpoints:n.breakpoints.values});return r=$(r,F({theme:n},a,s=>{const o=`${(100/Number(s)).toFixed(2)}%`,b=typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"?E(h,Number(i)):"0px";return{"& > *":{width:`calc(${o} - ${b})`}}})),typeof i=="object"&&(r=$(r,F({theme:n},i,(s,t)=>{if(t){const o=Number(s),b=Object.keys(a).pop(),u=E(h,o);return{"& > *":{width:`calc(${`${(100/(typeof a=="object"?a[t]||a[b]:a)).toFixed(2)}%`} - ${u})`}}}return null}))),r},de=Y("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,n)=>[n.root]})(me),fe=S.forwardRef(function(n,r){const c=Z({props:n,name:"MuiMasonry"}),{children:i,className:h,component:H="div",columns:a=4,spacing:R=1,defaultColumns:s,defaultHeight:t,defaultSpacing:o}=c,b=ee(c,le),u=S.useRef(),[k,w]=S.useState(),B=!k&&t&&s!==void 0&&o!==void 0,[U,W]=S.useState(B?s-1:0),j=g({},c,{spacing:R,columns:a,maxColumnHeight:k,defaultColumns:s,defaultHeight:t,defaultSpacing:o,isSSR:B}),_=ue(j),A=d=>{if(!u.current||!d||d.length===0)return;const l=u.current,x=u.current.firstChild,O=l.clientWidth,V=x.clientWidth;if(O===0||V===0)return;const z=window.getComputedStyle(x),q=m(z.marginLeft),G=m(z.marginRight),v=Math.round(O/(V+q+G)),C=new Array(v).fill(0);let y=!1;l.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||y)return;const M=window.getComputedStyle(f),J=m(M.marginTop),K=m(M.marginBottom),L=m(M.height)?Math.ceil(m(M.height))+J+K:0;if(L===0){y=!0;return}for(let p=0;p<f.childNodes.length;p+=1){const N=f.childNodes[p];if(N.tagName==="IMG"&&N.clientHeight===0){y=!0;break}}if(!y){const p=C.indexOf(Math.min(...C));C[p]+=L;const N=p+1;f.style.order=N}}),y||ie.flushSync(()=>{w(Math.max(...C)),W(v>0?v-1:0)})};te(()=>{if(typeof ResizeObserver>"u")return;let d;const l=new ResizeObserver(()=>{d=requestAnimationFrame(A)});return u.current&&u.current.childNodes.forEach(x=>{l.observe(x)}),()=>{d&&window.cancelAnimationFrame(d),l&&l.disconnect()}},[a,R,i]);const D=se(r,u),I=new Array(U).fill("").map((d,l)=>P.jsx("span",{"data-class":"line-break",style:g({},ce,{order:l+1})},l));return P.jsxs(de,g({as:H,className:ne(_.root,h),ref:D,ownerState:j},b,{children:[i,I]}))}),ge=fe;export{ge as M};
