import{j as e,q as x,bM as m,bT as L,B as b,D as M,i as u,_ as r,S as E,az as V,aA as z,di as K,r as U,bw as q,x as J,cx as Q,h as X,by as Y,cf as y,O as Z,a8 as k,df as T,dh as O,aD as H,dg as v,T as g,dj as ee,a0 as se,cl as te,aK as re,C as ie,am as p,cR as f,dk as ae,dl as le,dm as ne,dn as oe,H as ce}from"./index-fhA8hu8c.js";import{T as de,t as pe,a as he,b as xe,c as me,d as je,e as ue}from"./TimelineItem-emjgvv4b.js";function _({title:t,subheader:l,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l,sx:{mb:1}}),e.jsx(L,{children:a.map(s=>e.jsx(I,{news:s},s.id))}),e.jsx(b,{sx:{p:2,textAlign:"right"},children:e.jsx(M,{size:"small",color:"inherit",endIcon:e.jsx(u,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}_.propTypes={list:r.array,subheader:r.string,title:r.string};function I({news:t}){const{coverUrl:l,title:a,description:i,postedAt:s}=t;return e.jsxs(E,{spacing:2,direction:"row",alignItems:"center",sx:{py:2,px:3,minWidth:640,borderBottom:c=>`dashed 1px ${c.palette.divider}`},children:[e.jsx(V,{variant:"rounded",alt:a,src:l,sx:{width:48,height:48,flexShrink:0}}),e.jsx(z,{primary:a,secondary:i,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"}}),e.jsx(b,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:K(s)})]})}I.propTypes={news:r.object};function D({title:t,subheader:l,list:a,...i}){const[s,c]=U.useState(["2"]),d=n=>{const h=s.includes(n)?s.filter(o=>o!==n):[...s,n];c(h)};return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l}),a.map(n=>e.jsx($,{task:n,checked:s.includes(n.id),onChange:()=>d(n.id)},n.id))]})}D.propTypes={list:r.array,subheader:r.string,title:r.string};function $({task:t,checked:l,onChange:a}){const i=q(),s=()=>{i.onClose(),console.info("MARK COMPLETE",t.id)},c=()=>{i.onClose(),console.info("SHARE",t.id)},d=()=>{i.onClose(),console.info("EDIT",t.id)},n=()=>{i.onClose(),console.info("DELETE",t.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"row",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:h=>`dashed 1px ${h.palette.divider}`},...l&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(J,{control:e.jsx(Q,{checked:l,onChange:a}),label:t.name,sx:{flexGrow:1,m:0}}),e.jsx(X,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(Y,{open:i.open,onClose:i.onClose,arrow:"right-top",children:[e.jsxs(y,{onClick:s,children:[e.jsx(u,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),e.jsxs(y,{onClick:d,children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(y,{onClick:c,children:[e.jsx(u,{icon:"solar:share-bold"}),"Share"]}),e.jsx(Z,{sx:{borderStyle:"dashed"}}),e.jsxs(y,{onClick:n,sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}$.propTypes={checked:r.bool,onChange:r.func,task:r.object};const C=400,S=72,ge=H(v)(({theme:t})=>({height:C,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:S,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${C-S}px) !important`}}));function G({title:t,subheader:l,chart:a,...i}){const s=k(),{colors:c,series:d,options:n}=a,h=d.map(j=>j.value),o=T({chart:{sparkline:{enabled:!0}},colors:c,labels:d.map(j=>j.label),stroke:{colors:[s.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:j=>O(j),title:{formatter:j=>`${j}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...n});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l,sx:{mb:5}}),e.jsx(ge,{dir:"ltr",type:"pie",series:h,options:o,width:"100%",height:280})]})}G.propTypes={chart:r.object,subheader:r.string,title:r.string};function N({title:t,subheader:l,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l}),e.jsx(de,{sx:{m:0,p:3,[`& .${pe.root}:before`]:{flex:0,padding:0}},children:a.map((s,c)=>e.jsx(P,{item:s,lastTimeline:c===a.length-1},s.id))})]})}N.propTypes={list:r.array,subheader:r.string,title:r.string};function P({item:t,lastTimeline:l}){const{type:a,title:i,time:s}=t;return e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(me,{color:a==="order1"&&"primary"||a==="order2"&&"success"||a==="order3"&&"info"||a==="order4"&&"warning"||"error"}),l?null:e.jsx(je,{})]}),e.jsxs(ue,{children:[e.jsx(g,{variant:"subtitle2",children:i}),e.jsx(g,{variant:"caption",sx:{color:"text.disabled"},children:ee(s)})]})]})}P.propTypes={item:r.object,lastTimeline:r.bool};function R({title:t,subheader:l,chart:a,...i}){const{labels:s,colors:c,series:d,options:n}=a,h=T({colors:c,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:d.map(o=>o.fill)},labels:s,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:o=>typeof o<"u"?`${o.toFixed(0)} visits`:o}},...n});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l}),e.jsx(b,{sx:{p:3,pb:1},children:e.jsx(v,{dir:"ltr",type:"line",series:d,options:h,width:"100%",height:364})})]})}R.propTypes={chart:r.object,subheader:r.string,title:r.string};function W({title:t,subheader:l,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l}),e.jsx(b,{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:a.map(s=>e.jsxs(se,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[e.jsx(u,{icon:s.icon,color:s.value==="facebook"&&"#1877F2"||s.value==="google"&&"#DF3E30"||s.value==="linkedin"&&"#006097"||s.value==="twitter"&&"#1C9CEA"||"",width:32}),e.jsx(g,{variant:"h6",sx:{mt:.5},children:te(s.total)}),e.jsx(g,{variant:"body2",sx:{color:"text.secondary"},children:s.label})]},s.label))})]})}W.propTypes={list:r.array,subheader:r.string,title:r.string};const w=400,A=72,be=H(v)(({theme:t})=>({height:w,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:A,borderTop:`dashed 1px ${t.palette.divider}`,top:`calc(${w-A}px) !important`}}));function B({title:t,subheader:l,chart:a,...i}){const s=k(),{series:c,colors:d,categories:n,options:h}=a,o=T({colors:d,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:n,labels:{style:{colors:[...Array(6)].map(()=>s.palette.text.secondary)}}},...h});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l,sx:{mb:5}}),e.jsx(be,{dir:"ltr",type:"radar",series:c,options:o,width:"100%",height:340})]})}B.propTypes={chart:r.object,subheader:r.string,title:r.string};function F({title:t,subheader:l,chart:a,...i}){const{colors:s,series:c,options:d}=a,n=c.map(o=>o.value),h=T({colors:s,tooltip:{marker:{show:!1},y:{formatter:o=>O(o),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:c.map(o=>o.label)},...d});return e.jsxs(x,{...i,children:[e.jsx(m,{title:t,subheader:l}),e.jsx(b,{sx:{mx:3},children:e.jsx(v,{dir:"ltr",type:"bar",series:[{data:n}],options:h,width:"100%",height:364})})]})}F.propTypes={chart:r.object,subheader:r.string,title:r.string};function ye(){const t=re();return e.jsxs(ie,{maxWidth:t.themeStretch?!1:"xl",children:[e.jsx(g,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Hi, Welcome back 👋"}),e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"Weekly Sales",total:714e3,icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(f,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(R,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(G,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(F,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(B,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(_,{title:"News",list:ae})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(N,{title:"Order Timeline",list:le})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(W,{title:"Traffic by Site",list:ne})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(D,{title:"Tasks",list:oe})})]})]})}function ve(){return e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsx("title",{children:" Dashboard: Analytics"})}),e.jsx(ye,{})]})}export{ve as default};