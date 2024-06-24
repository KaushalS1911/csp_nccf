import{j as e,m as x,bK as m,c6 as V,B as b,t as K,i as j,ad as s,S as C,au as z,av as U,dH as J,r as Z,bx as q,y as Q,c4 as X,h as Y,bC as ee,bZ as f,E as se,V as S,dF as T,dv as H,O as I,dG as v,T as u,dI as te,a8 as re,a9 as w,cb as _,K as ie,aE as ae,C as ne,am as h,dJ as le,dK as oe,dL as ce,dM as de,H as he}from"./index-rcXNTvDP.js";import{T as pe,t as xe,a as me,b as ge,c as je,d as ue,e as be}from"./TimelineItem-qTCb_lLG.js";function $({title:r,subheader:n,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n,sx:{mb:1}}),e.jsx(V,{children:a.map(t=>e.jsx(D,{news:t},t.id))}),e.jsx(b,{sx:{p:2,textAlign:"right"},children:e.jsx(K,{size:"small",color:"inherit",endIcon:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}$.propTypes={list:s.array,subheader:s.string,title:s.string};function D({news:r}){const{coverUrl:n,title:a,description:i,postedAt:t}=r;return e.jsxs(C,{spacing:2,direction:"row",alignItems:"center",sx:{py:2,px:3,minWidth:640,borderBottom:l=>`dashed 1px ${l.palette.divider}`},children:[e.jsx(z,{variant:"rounded",alt:a,src:n,sx:{width:48,height:48,flexShrink:0}}),e.jsx(U,{primary:a,secondary:i,primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,component:"span"}}),e.jsx(b,{sx:{flexShrink:0,color:"text.disabled",typography:"caption"},children:J(t)})]})}D.propTypes={news:s.object};function G({title:r,subheader:n,list:a,...i}){const[t,l]=Z.useState(["2"]),d=o=>{const p=t.includes(o)?t.filter(c=>c!==o):[...t,o];l(p)};return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n}),a.map(o=>e.jsx(N,{task:o,checked:t.includes(o.id),onChange:()=>d(o.id)},o.id))]})}G.propTypes={list:s.array,subheader:s.string,title:s.string};function N({task:r,checked:n,onChange:a}){const i=q(),t=()=>{i.onClose(),console.info("MARK COMPLETE",r.id)},l=()=>{i.onClose(),console.info("SHARE",r.id)},d=()=>{i.onClose(),console.info("EDIT",r.id)},o=()=>{i.onClose(),console.info("DELETE",r.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(C,{direction:"row",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:p=>`dashed 1px ${p.palette.divider}`},...n&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(Q,{control:e.jsx(X,{checked:n,onChange:a}),label:r.name,sx:{flexGrow:1,m:0}}),e.jsx(Y,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(ee,{open:i.open,onClose:i.onClose,arrow:"right-top",children:[e.jsxs(f,{onClick:t,children:[e.jsx(j,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),e.jsxs(f,{onClick:d,children:[e.jsx(j,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(f,{onClick:l,children:[e.jsx(j,{icon:"solar:share-bold"}),"Share"]}),e.jsx(se,{sx:{borderStyle:"dashed"}}),e.jsxs(f,{onClick:o,sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}N.propTypes={checked:s.bool,onChange:s.func,task:s.object};const A=400,E=72,ye=I(v)(({theme:r})=>({height:A,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:E,borderTop:`dashed 1px ${r.palette.divider}`,top:`calc(${A-E}px) !important`}}));function P({title:r,subheader:n,chart:a,...i}){const t=S(),{colors:l,series:d,options:o}=a,p=d.map(g=>g.value),c=T({chart:{sparkline:{enabled:!0}},colors:l,labels:d.map(g=>g.label),stroke:{colors:[t.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:g=>H(g),title:{formatter:g=>`${g}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...o});return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n,sx:{mb:5}}),e.jsx(ye,{dir:"ltr",type:"pie",series:p,options:c,width:"100%",height:280})]})}P.propTypes={chart:s.object,subheader:s.string,title:s.string};function R({title:r,subheader:n,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n}),e.jsx(pe,{sx:{m:0,p:3,[`& .${xe.root}:before`]:{flex:0,padding:0}},children:a.map((t,l)=>e.jsx(W,{item:t,lastTimeline:l===a.length-1},t.id))})]})}R.propTypes={list:s.array,subheader:s.string,title:s.string};function W({item:r,lastTimeline:n}){const{type:a,title:i,time:t}=r;return e.jsxs(me,{children:[e.jsxs(ge,{children:[e.jsx(je,{color:a==="order1"&&"primary"||a==="order2"&&"success"||a==="order3"&&"info"||a==="order4"&&"warning"||"error"}),n?null:e.jsx(ue,{})]}),e.jsxs(be,{children:[e.jsx(u,{variant:"subtitle2",children:i}),e.jsx(u,{variant:"caption",sx:{color:"text.disabled"},children:te(t)})]})]})}W.propTypes={item:s.object,lastTimeline:s.bool};function B({title:r,subheader:n,chart:a,...i}){const{labels:t,colors:l,series:d,options:o}=a,p=T({colors:l,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:d.map(c=>c.fill)},labels:t,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:c=>typeof c<"u"?`${c.toFixed(0)} visits`:c}},...o});return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n}),e.jsx(b,{sx:{p:3,pb:1},children:e.jsx(v,{dir:"ltr",type:"line",series:d,options:p,width:"100%",height:364})})]})}B.propTypes={chart:s.object,subheader:s.string,title:s.string};function y({title:r,total:n,icon:a,color:i="primary",sx:t,...l}){const d=S();return e.jsxs(C,{alignItems:"center",sx:{...re({direction:"135deg",startColor:w(d.palette[i].light,.2),endColor:w(d.palette[i].main,.2)}),py:5,borderRadius:2,textAlign:"center",color:`${i}.darker`,backgroundColor:"common.white",...t},...l,children:[a&&e.jsx(b,{sx:{width:64,height:64,mb:1},children:a}),e.jsx(u,{variant:"h3",children:_(n)}),e.jsx(u,{variant:"subtitle2",sx:{opacity:.64},children:r})]})}y.propTypes={color:s.string,icon:s.oneOfType([s.element,s.string]),sx:s.object,title:s.string,total:s.number};function F({title:r,subheader:n,list:a,...i}){return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n}),e.jsx(b,{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:a.map(t=>e.jsxs(ie,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[e.jsx(j,{icon:t.icon,color:t.value==="facebook"&&"#1877F2"||t.value==="google"&&"#DF3E30"||t.value==="linkedin"&&"#006097"||t.value==="twitter"&&"#1C9CEA"||"",width:32}),e.jsx(u,{variant:"h6",sx:{mt:.5},children:_(t.total)}),e.jsx(u,{variant:"body2",sx:{color:"text.secondary"},children:t.label})]},t.label))})]})}F.propTypes={list:s.array,subheader:s.string,title:s.string};const k=400,O=72,fe=I(v)(({theme:r})=>({height:k,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:O,borderTop:`dashed 1px ${r.palette.divider}`,top:`calc(${k-O}px) !important`}}));function L({title:r,subheader:n,chart:a,...i}){const t=S(),{series:l,colors:d,categories:o,options:p}=a,c=T({colors:d,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:o,labels:{style:{colors:[...Array(6)].map(()=>t.palette.text.secondary)}}},...p});return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n,sx:{mb:5}}),e.jsx(fe,{dir:"ltr",type:"radar",series:l,options:c,width:"100%",height:340})]})}L.propTypes={chart:s.object,subheader:s.string,title:s.string};function M({title:r,subheader:n,chart:a,...i}){const{colors:t,series:l,options:d}=a,o=l.map(c=>c.value),p=T({colors:t,tooltip:{marker:{show:!1},y:{formatter:c=>H(c),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:l.map(c=>c.label)},...d});return e.jsxs(x,{...i,children:[e.jsx(m,{title:r,subheader:n}),e.jsx(b,{sx:{mx:3},children:e.jsx(v,{dir:"ltr",type:"bar",series:[{data:o}],options:p,width:"100%",height:364})})]})}M.propTypes={chart:s.object,subheader:s.string,title:s.string};function Te(){const r=ae();return e.jsxs(ne,{maxWidth:r.themeStretch?!1:"xl",children:[e.jsx(u,{variant:"h4",sx:{mb:{xs:3,md:5}},children:"Hi, Welcome back 👋"}),e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"Weekly Sales",total:714e3,icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(h,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(h,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(h,{xs:12,sm:6,md:3,children:e.jsx(y,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(B,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(P,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(M,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(L,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx($,{title:"News",list:le})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(R,{title:"Order Timeline",list:oe})}),e.jsx(h,{xs:12,md:6,lg:4,children:e.jsx(F,{title:"Traffic by Site",list:ce})}),e.jsx(h,{xs:12,md:6,lg:8,children:e.jsx(G,{title:"Tasks",list:de})})]})]})}function Se(){return e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsx("title",{children:" Dashboard: Analytics"})}),e.jsx(Te,{})]})}export{Se as default};
