import{a2 as T,j as e,S as c,a3 as z,a4 as v,T as l,a8 as t,ak as U,de as $,q as j,an as q,af as F,B as b,s as M,D as S,br as Y,r as P,d5 as E,bK as w,bd as _,i as I,d4 as B,bw as K,cd as Q,bQ as J,bR as W,bS as V,bT as X,bU as Z,bM as ee,bN as f,au as A,bL as u,aA as re,d3 as k,ay as te,ai as O,aj as se,av as ae,L as ne,bO as oe}from"./index-AyhP95hO.js";function ie({title:r,description:s,action:n,img:a,...o}){const i=T();return e.jsxs(c,{flexDirection:{xs:"column",md:"row"},sx:{...z({direction:"135deg",startColor:v(i.palette.primary.light,.2),endColor:v(i.palette.primary.main,.2)}),height:{md:1},borderRadius:2,position:"relative",color:"primary.darker",backgroundColor:"common.white"},...o,children:[e.jsxs(c,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{p:{xs:i.spacing(5,3,0,3),md:i.spacing(5)},textAlign:{xs:"center",md:"left"}},children:[e.jsx(l,{variant:"h4",sx:{mb:2,whiteSpace:"pre-line"},children:r}),e.jsx(l,{variant:"body2",sx:{opacity:.8,maxWidth:360,mb:{xs:3,xl:5}},children:s}),n&&n]}),a&&e.jsx(c,{component:"span",justifyContent:"center",sx:{p:{xs:5,md:3},maxWidth:360,mx:"auto"},children:a})]})}ie.propTypes={action:t.node,description:t.string,img:t.node,title:t.string};function le({list:r,...s}){const n=U({speed:800,autoplay:!0,...$({sx:{right:20,bottom:20,position:"absolute",color:"primary.light"}})});return e.jsx(j,{...s,children:e.jsx(q,{...n.carouselSettings,children:r.map(a=>e.jsx(D,{item:a},a.id))})})}le.propTypes={list:t.array};function D({item:r}){const s=T(),{coverUrl:n,name:a}=r,o=e.jsx(F,{alt:a,src:n,overlay:`linear-gradient(to bottom, ${v(s.palette.grey[900],0)} 0%, ${s.palette.grey[900]} 75%)`,sx:{width:1,height:{xs:280,xl:320}}});return e.jsxs(b,{sx:{position:"relative"},children:[e.jsxs(M,{sx:{left:0,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(l,{variant:"overline",sx:{opacity:.48},children:"New"}),e.jsx(l,{noWrap:!0,variant:"h5",sx:{mt:1,mb:3},children:a}),e.jsx(S,{color:"primary",variant:"contained",children:"Buy Now"})]}),o]})}D.propTypes={item:t.object};function ce({title:r,subheader:s,chart:n,...a}){const{colors:o,categories:i,series:p,options:m}=n,x=Y(),[y,g]=P.useState("2019"),d=E({colors:o,legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:i},...m}),C=P.useCallback(h=>{x.onClose(),g(h)},[x]);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{...a,children:[e.jsx(w,{title:r,subheader:s,action:e.jsxs(_,{onClick:x.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[y,e.jsx(I,{width:16,icon:x.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),p.map(h=>e.jsx(b,{sx:{mt:3,mx:3},children:h.year===y&&e.jsx(B,{dir:"ltr",type:"area",series:h.data,options:d,width:"100%",height:364})},h.year))]}),e.jsx(K,{open:x.open,onClose:x.onClose,sx:{width:140},children:p.map(h=>e.jsx(Q,{selected:h.year===y,onClick:()=>C(h.year),children:h.year},h.year))})]})}ce.propTypes={chart:t.object,subheader:t.string,title:t.string};function de({title:r,subheader:s,tableData:n,tableLabels:a,...o}){return e.jsxs(j,{...o,children:[e.jsx(w,{title:r,subheader:s,sx:{mb:3}}),e.jsx(J,{sx:{overflow:"unset"},children:e.jsx(W,{children:e.jsxs(V,{sx:{minWidth:640},children:[e.jsx(X,{headLabel:a}),e.jsx(Z,{children:n.map(i=>e.jsx(G,{row:i},i.id))})]})})})]})}de.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};function G({row:r}){return e.jsxs(ee,{children:[e.jsxs(f,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(A,{alt:r.name,src:r.avatarUrl,sx:{mr:2}}),r.name]}),e.jsx(f,{children:r.category}),e.jsx(f,{align:"center",children:e.jsx(I,{icon:r.flag,sx:{borderRadius:.65,width:28}})}),e.jsx(f,{align:"right",children:u(r.totalAmount)}),e.jsx(f,{align:"right",children:e.jsx(re,{variant:"soft",color:r.rank==="Top 1"&&"primary"||r.rank==="Top 2"&&"info"||r.rank==="Top 3"&&"success"||r.rank==="Top 4"&&"warning"||"error",children:r.rank})})]})}G.propTypes={row:t.object};const L=400,R=72,pe=te(B)(({theme:r})=>({height:L,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:R,borderTop:`dashed 1px ${r.palette.divider}`,top:`calc(${L-R}px) !important`}}));function xe({title:r,subheader:s,total:n,chart:a,...o}){const i=T(),{colors:p=[[i.palette.primary.light,i.palette.primary.main],[i.palette.warning.light,i.palette.warning.main]],series:m,options:x}=a,y=m.map(d=>d.value),g=E({colors:p.map(d=>d[1]),chart:{sparkline:{enabled:!0}},labels:m.map(d=>d.label),legend:{floating:!0,position:"bottom",horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:p.map(d=>[{offset:0,color:d[0],opacity:1},{offset:100,color:d[1],opacity:1}])}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:()=>k(n)}}}},...x});return e.jsxs(j,{...o,children:[e.jsx(w,{title:r,subheader:s,sx:{mb:5}}),e.jsx(pe,{dir:"ltr",type:"radialBar",series:y,options:g,width:"100%",height:300})]})}xe.propTypes={chart:t.object,subheader:t.string,title:t.string,total:t.number};function he({title:r,subheader:s,data:n,...a}){return e.jsxs(j,{...a,children:[e.jsx(w,{title:r,subheader:s}),e.jsx(c,{spacing:4,sx:{px:3,pt:3,pb:5},children:n.map(o=>e.jsx(H,{progress:o},o.label))})]})}he.propTypes={data:t.array,subheader:t.string,title:t.string};function H({progress:r}){return e.jsxs(c,{spacing:1,children:[e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(l,{variant:"subtitle2",sx:{flexGrow:1},children:r.label}),e.jsx(l,{variant:"subtitle2",children:u(r.totalAmount)}),e.jsxs(l,{variant:"body2",sx:{color:"text.secondary"},children:[" (",O(r.value),")"]})]}),e.jsx(se,{variant:"determinate",value:r.value,color:r.label==="Total Income"&&"info"||r.label==="Total Expenses"&&"warning"||"primary"})]})}H.propTypes={progress:t.object};function me({title:r,percent:s,total:n,chart:a,sx:o,...i}){const p=T(),{colors:m=[p.palette.primary.light,p.palette.primary.main],series:x,options:y}=a,g=E({colors:[m[1]],fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:m[0],opacity:1},{offset:100,color:m[1],opacity:1}]}},chart:{animations:{enabled:!0},sparkline:{enabled:!0}},tooltip:{x:{show:!1},y:{formatter:C=>k(C),title:{formatter:()=>""}},marker:{show:!1}},...y}),d=e.jsxs(c,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[e.jsx(I,{icon:s<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:{mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:v(p.palette.success.main,.16),...s<0&&{color:"error.main",bgcolor:v(p.palette.error.main,.16)}}}),e.jsxs(l,{variant:"subtitle2",component:"div",noWrap:!0,children:[s>0&&"+",O(s),e.jsx(b,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:" than last week"})]})]});return e.jsxs(j,{sx:{display:"flex",alignItems:"center",p:3,...o},...i,children:[e.jsxs(b,{sx:{flexGrow:1},children:[e.jsx(l,{variant:"subtitle2",sx:{mb:2},children:r}),e.jsx(l,{variant:"h3",gutterBottom:!0,children:k(n)}),d]}),e.jsx(B,{dir:"ltr",type:"line",series:[{data:x}],options:g,width:96,height:64})]})}me.propTypes={chart:t.object,percent:t.number,sx:t.object,title:t.string,total:t.number};function ue({title:r,subheader:s,list:n,...a}){return e.jsxs(j,{...a,children:[e.jsx(w,{title:r,subheader:s}),e.jsx(W,{children:e.jsx(c,{spacing:3,sx:{p:3,minWidth:360},children:n.map(o=>e.jsx(N,{product:o},o.id))})})]})}ue.propTypes={list:t.array,subheader:t.string,title:t.string};function N({product:r}){const{name:s,coverUrl:n,price:a,priceSale:o}=r;return e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(A,{variant:"rounded",alt:s,src:n,sx:{width:48,height:48,flexShrink:0}}),e.jsx(ae,{primary:e.jsx(ne,{sx:{color:"text.primary",typography:"subtitle2"},children:s}),secondary:e.jsxs(e.Fragment,{children:[!!o&&e.jsx(b,{component:"span",sx:{textDecoration:"line-through",mr:.5},children:u(o)}),e.jsx(b,{component:"span",sx:{color:o?"error.main":"text.secondary"},children:u(a)})]}),primaryTypographyProps:{noWrap:!0},secondaryTypographyProps:{mt:.5}}),e.jsx(oe,{limit:3,colors:r.colors})]})}N.propTypes={product:t.object};function je({title:r,sentAmount:s,currentBalance:n,sx:a,...o}){const i=n-s;return e.jsxs(j,{sx:{p:3,...a},...o,children:[e.jsx(l,{variant:"subtitle2",gutterBottom:!0,children:r}),e.jsxs(c,{spacing:2,children:[e.jsx(l,{variant:"h3",children:u(i)}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Order Total"}),e.jsx(l,{variant:"body2",children:u(n)})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Earning"}),e.jsxs(l,{variant:"body2",children:["- ",u(s)]})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:"Refunded"}),e.jsx(l,{variant:"subtitle1",children:u(i)})]}),e.jsxs(c,{direction:"row",spacing:1.5,children:[e.jsx(S,{fullWidth:!0,variant:"contained",color:"warning",children:"Request"}),e.jsx(S,{fullWidth:!0,variant:"contained",color:"primary",children:"Transfer"})]})]})]})}je.propTypes={currentBalance:t.number,sentAmount:t.number,sx:t.object,title:t.string};export{ie as E,le as a,me as b,xe as c,ce as d,he as e,je as f,de as g,ue as h};
