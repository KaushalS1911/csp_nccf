import{ap as d,j as e,q as i,as as x,ak as j,ha as v,_ as n,S as I,s as l,T as m,a8 as b,de as D,B as c,aq as w,aD as B,ax as q,h as O,aa as g,i as P,ab as S,a0 as N,a9 as T,a2 as V,a3 as y,D as G,r as X,az as Z,L as J,cv as K,p as Q,C as Y,bM as u,gi as f,H as ee}from"./index-XFh7EM9A.js";import{C as re}from"./component-hero-9yjVC3_1.js";import{T as te}from"./text-max-line-Q7eJl-W5.js";function k({data:t}){const r=d({autoplay:!0});return e.jsxs(i,{children:[e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsx(j,{alt:s.title,src:s.coverUrl,ratio:"1/1"},s.id))}),e.jsx(v,{index:r.currentIndex,total:t.length,onNext:r.onNext,onPrev:r.onPrev})]})}k.propTypes={data:n.array};function R({data:t}){const r=d({fade:!0,autoplay:!0,initialSlide:2});return e.jsxs(i,{children:[e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsxs(I,{children:[e.jsx(j,{alt:s.title,src:s.coverUrl,ratio:"4/3"}),e.jsxs(l,{sx:{textAlign:"left"},children:[e.jsx(m,{variant:"h6",noWrap:!0,gutterBottom:!0,children:s.title}),e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:s.description})]})]},s.id))}),e.jsx(v,{index:r.currentIndex,total:t.length,onNext:r.onNext,onPrev:r.onPrev,sx:{bottom:120}})]})}R.propTypes={data:n.array};function M({data:t}){const r=b(),s=d({autoplay:!0,...D({rounded:!0,sx:{mt:3}})});return e.jsx(c,{sx:{position:"relative","& .slick-list":{borderRadius:2,boxShadow:r.customShadows.z16}},children:e.jsx(w,{filled:!0,shape:"rounded",onNext:s.onNext,onPrev:s.onPrev,children:e.jsx(x,{ref:s.carouselRef,...s.carouselSettings,children:t.map(o=>e.jsx(U,{item:o},o.id))})})})}M.propTypes={data:n.array};function U({item:t}){const{coverUrl:r,title:s}=t;return e.jsx(j,{alt:s,src:r,ratio:"1/1"})}U.propTypes={item:n.object};const se=B("div")(({theme:t})=>({...q({color:t.palette.grey[900]}),bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:t.spacing(3),borderBottomLeftRadius:16,borderBottomRightRadius:16,justifyContent:"space-between",flexDirection:t.direction==="rtl"?"row-reverse":"row"}));function $({data:t}){const r=d({autoplay:!0,fade:!0});return e.jsx(i,{children:e.jsx(w,{filled:!0,shape:"rounded",onNext:r.onNext,onPrev:r.onPrev,children:e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsx(A,{item:s},s.id))})})})}$.propTypes={data:n.array};function A({item:t}){const{coverUrl:r,title:s}=t;return e.jsxs(c,{sx:{position:"relative",zIndex:0},children:[e.jsx(j,{alt:s,src:r,ratio:"1/1"}),e.jsxs(se,{children:[e.jsx(m,{variant:"h6",sx:{color:"common.white"},children:t.title}),e.jsx(O,{onClick:()=>{},sx:{color:"common.white","&:hover":{bgcolor:o=>g(o.palette.common.white,o.palette.action.hoverOpacity)}},children:e.jsx(P,{icon:"eva:more-horizontal-fill"})})]})]})}A.propTypes={item:n.object};function W({data:t}){const r=d({speed:800,autoplay:!0});return e.jsxs(i,{children:[e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map((s,o)=>e.jsx(L,{item:s,active:o===r.currentIndex},s.id))}),e.jsx(v,{index:r.currentIndex,total:t.length,onNext:r.onNext,onPrev:r.onPrev})]})}W.propTypes={data:n.array};function L({item:t,active:r}){const s=b(),{coverUrl:o,title:C}=t,a=s.direction==="rtl"?S().inLeft:S().inRight;return e.jsxs(N,{sx:{position:"relative"},children:[e.jsx(j,{dir:"ltr",alt:C,src:o,ratio:"16/9"}),e.jsx(c,{sx:{top:0,width:1,height:1,position:"absolute",...T({direction:"to top",startColor:`${s.palette.grey[900]} 0%`,endColor:`${g(s.palette.grey[900],0)} 100%`})}}),e.jsxs(l,{component:V,animate:r,action:!0,sx:{left:0,bottom:0,maxWidth:720,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(y.div,{variants:a,children:e.jsx(m,{variant:"h3",gutterBottom:!0,children:t.title})}),e.jsx(y.div,{variants:a,children:e.jsx(m,{variant:"body2",noWrap:!0,gutterBottom:!0,children:t.description})}),e.jsx(y.div,{variants:a,children:e.jsx(G,{variant:"contained",sx:{mt:3},children:"View More"})})]})]})}L.propTypes={active:n.bool,item:n.object};const h=64,oe=B("div")(({length:t,theme:r})=>({position:"relative",margin:r.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...t===1&&{maxWidth:h*1+16},...t===2&&{maxWidth:h*2+32},...(t===3||t===4)&&{maxWidth:h*3+48},...t>=5&&{maxWidth:h*6},...t>3&&{"&:before, &:after":{...T({direction:"to left",startColor:`${g(r.palette.background.default,0)} 0%`,endColor:`${r.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:h*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function z({data:t}){const r=d({rtl:!1,draggable:!1,adaptiveHeight:!0}),s=d({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:t.length>3?3:t.length});X.useEffect(()=>{r.onSetNav(),s.onSetNav()},[r,s]);const o=e.jsxs(c,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(x,{...r.carouselSettings,asNavFor:s.nav,ref:r.carouselRef,children:t.map(a=>e.jsx(j,{alt:a.title,src:a.coverUrl,ratio:"16/9"},a.id))}),e.jsx(v,{index:r.currentIndex,total:t.length,onNext:s.onNext,onPrev:s.onPrev})]}),C=e.jsx(oe,{length:t.length,children:e.jsx(x,{...s.carouselSettings,asNavFor:r.nav,ref:s.carouselRef,children:t.map((a,F)=>e.jsx(c,{sx:{px:.5},children:e.jsx(Z,{variant:"rounded",alt:a.title,src:a.coverUrl,sx:{width:h,height:h,opacity:.48,cursor:"pointer",...r.currentIndex===F&&{opacity:1,border:_=>`solid 2.5px ${_.palette.primary.main}`}}})},a.id))})});return e.jsxs(c,{sx:{"& .slick-slide":{float:a=>a.direction==="rtl"?"right":"left"}},children:[o,C]})}z.propTypes={data:n.array};function H({data:t}){const r=d({slidesToShow:3,centerMode:!0,centerPadding:"60px",responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]});return e.jsx(c,{sx:{overflow:"hidden",position:"relative"},children:e.jsx(w,{filled:!0,icon:"noto:rightwards-hand",onNext:r.onNext,onPrev:r.onPrev,children:e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsx(c,{sx:{px:1},children:e.jsx(E,{item:s})},s.id))})})})}H.propTypes={data:n.array};function E({item:t}){const r=b(),{coverUrl:s,title:o}=t;return e.jsxs(N,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(j,{alt:o,src:s,ratio:"3/4"}),e.jsxs(l,{sx:{bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white",...T({direction:"to top",startColor:`${r.palette.grey[900]} 25%`,endColor:`${g(r.palette.grey[900],0)} 100%`})},children:[e.jsx(te,{variant:"h4",sx:{mb:2},children:o}),e.jsxs(J,{color:"inherit",variant:"overline",sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:r.transitions.create(["opacity"]),"&:hover":{opacity:1}},children:["learn More",e.jsx(P,{icon:"eva:arrow-forward-fill",width:16,sx:{ml:1}})]})]})]})}E.propTypes={item:n.object};const p=[...Array(20)].map((t,r)=>({id:f.id(r),title:f.postTitle(r),coverUrl:f.image.cover(r),description:f.description(r)}));function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsx(K,{heading:"Carousel",links:[{name:"Components",href:Q.components},{name:"Carousel"}],moreLink:["https://react-slick.neostack.com"]})}),e.jsxs(Y,{sx:{my:10},children:[e.jsxs(c,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3,alignItems:"flex-start"},children:[e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Basic 1"}),e.jsx(l,{children:e.jsx(k,{data:p.slice(0,4)})})]}),e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Basic 2"}),e.jsx(l,{children:e.jsx(R,{data:p.slice(4,8)})})]}),e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Basic 3"}),e.jsx(l,{children:e.jsx(M,{data:p.slice(8,12)})})]}),e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Basic 4"}),e.jsx(l,{children:e.jsx($,{data:p.slice(12,16)})})]})]}),e.jsxs(I,{spacing:3,children:[e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Thumbnail"}),e.jsx(l,{children:e.jsx(z,{data:p.slice(0,8)})})]}),e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Center Mode",subheader:"Customs shape & icon button"}),e.jsx(l,{children:e.jsx(H,{data:p.slice(8,16)})})]}),e.jsxs(i,{children:[e.jsx(u,{title:"Carousel Animation"}),e.jsx(l,{children:e.jsx(W,{data:p.slice(12,16)})})]})]})]})]})}function ce(){return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsx("title",{children:" Components: Carousel"})}),e.jsx(ae,{})]})}export{ce as default};
