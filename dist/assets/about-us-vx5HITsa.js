import{j as e,B as o,C as u,a2 as C,ab as t,S as h,a3 as n,T as a,_ as m,a8 as g,ag as k,aa as y,af as b,am as x,ak as v,an as S,ao as M,D as w,i as p,ap as P,aq as W,ar as f,as as _,q as B,at as z,h as D,au as L,av as O,aw as q,a9 as F,ax as G,ay as H,az as N,aA as V,aB as $,H as E}from"./index-XFh7EM9A.js";import{M as K}from"./Masonry-cDNFnkmr.js";function J(){return e.jsx(o,{sx:{height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)"},children:e.jsx(u,{component:C,children:e.jsxs(o,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(j,{text:"Who",variants:t().inRight,sx:{color:"primary.main"}}),e.jsx("br",{}),e.jsxs(h,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[e.jsx(j,{text:"we"}),e.jsx(j,{text:"are?"})]}),e.jsx(n.div,{variants:t().inRight,children:e.jsxs(a,{variant:"h4",sx:{mt:3,color:"common.white",fontWeight:"fontWeightSemiBold"},children:["Let's work together and",e.jsx("br",{})," make awesome site easily"]})})]})})})}function j({text:i,variants:s,sx:c,...l}){return e.jsx(o,{component:n.div,sx:{typography:"h1",overflow:"hidden",display:"inline-flex",...c},...l,children:i.split("").map((r,d)=>e.jsx(n.span,{variants:s||t().inUp,children:r},d))})}j.propTypes={sx:m.object,text:m.string,variants:m.object};const Q=[...Array(3)].map((i,s)=>({label:["Development","Design","Marketing"][s],value:[20,40,60][s]}));function X(){const i=g(),s=k("up","md"),c=i.palette.mode==="light",l=`-40px 40px 80px ${y(c?i.palette.grey[500]:i.palette.common.black,.24)}`;return e.jsx(u,{component:b,sx:{py:{xs:10,md:15},textAlign:{xs:"center",md:"unset"}},children:e.jsxs(x,{container:!0,columnSpacing:{md:3},alignItems:"flex-start",children:[s&&e.jsxs(x,{container:!0,xs:12,md:6,lg:7,alignItems:"center",sx:{pr:{md:7}},children:[e.jsx(x,{xs:6,children:e.jsx(n.div,{variants:t().inUp,children:e.jsx(v,{alt:"our office 2",src:"/assets/images/about/what_2.png",ratio:"1/1",sx:{borderRadius:3,boxShadow:l}})})}),e.jsx(x,{xs:6,children:e.jsx(n.div,{variants:t().inUp,children:e.jsx(v,{alt:"our office 1",src:"/assets/images/about/what_1.png",ratio:"3/4",sx:{borderRadius:3,boxShadow:l}})})})]}),e.jsxs(x,{xs:12,md:6,lg:5,children:[e.jsx(n.div,{variants:t().inRight,children:e.jsx(a,{variant:"h2",sx:{mb:3},children:"What is Minimal?"})}),e.jsx(n.div,{variants:t().inRight,children:e.jsx(a,{sx:{color:i.palette.mode==="light"?"text.secondary":"common.white"},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),e.jsx(h,{spacing:3,sx:{my:5},children:Q.map((r,d)=>e.jsxs(o,{component:n.div,variants:t().inRight,children:[e.jsxs(h,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(a,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"left"},children:r.label}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:S(r.value)})]}),e.jsx(M,{color:d===0&&"primary"||d===1&&"warning"||"error",variant:"determinate",value:r.value})]},r.label))}),e.jsx(n.div,{variants:t().inRight,children:e.jsx(w,{variant:"outlined",color:"inherit",size:"large",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill"}),children:"Our Work"})})]})]})})}function Y(){const i=P({infinite:!1,slidesToShow:4,responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]});return e.jsxs(u,{component:b,sx:{textAlign:"center",py:{xs:10,md:15}},children:[e.jsx(n.div,{variants:t().inDown,children:e.jsx(a,{variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(a,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(a,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),e.jsx(o,{sx:{position:"relative"},children:e.jsx(W,{filled:!0,shape:"rounded",onNext:i.onNext,onPrev:i.onPrev,leftButtonProps:{sx:{left:24,...f.length<5&&{display:"none"}}},rightButtonProps:{sx:{right:24,...f.length<5&&{display:"none"}}},children:e.jsx(_,{ref:i.carouselRef,...i.carouselSettings,children:f.map(s=>e.jsx(o,{component:n.div,variants:t().in,sx:{px:1.5,py:{xs:8,md:10}},children:e.jsx(T,{member:s})},s.id))})})}),e.jsx(w,{size:"large",color:"inherit",variant:"outlined",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill",width:24}),sx:{mx:"auto"},children:"All Members"})]})}function T({member:i}){const{name:s,role:c,avatarUrl:l}=i;return e.jsxs(B,{children:[e.jsx(a,{variant:"subtitle1",sx:{mt:2.5,mb:.5},children:s}),e.jsx(a,{variant:"body2",sx:{mb:2.5,color:"text.secondary"},children:c}),e.jsx(o,{sx:{px:1},children:e.jsx(v,{alt:s,src:l,ratio:"1/1",sx:{borderRadius:2}})}),e.jsx(h,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:z.map(r=>e.jsx(D,{sx:{color:r.color,"&:hover":{bgcolor:y(r.color,.08)}},children:e.jsx(p,{icon:r.icon})},r.name))})]},s)}T.propTypes={member:m.object};function Z(){const i=g(),s=e.jsx(v,{src:"/assets/images/about/vision.jpg",alt:"about-vision",overlay:y(i.palette.grey[900],.48)}),c=e.jsx(h,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{width:1,zIndex:9,bottom:0,opacity:.48,position:"absolute",py:{xs:1.5,md:2.5}},children:["ibm","lya","spotify","netflix","hbo","amazon"].map(l=>e.jsx(o,{component:n.img,variants:t().in,alt:l,src:`/assets/icons/brands/ic_brand_${l}.svg`,sx:{m:{xs:1.5,md:2.5},height:{xs:20,md:32}}},l))});return e.jsx(o,{sx:{pb:10,position:"relative",bgcolor:"background.neutral","&:before":{top:0,left:0,width:1,content:"''",position:"absolute",height:{xs:80,md:120},bgcolor:"background.default"}},children:e.jsxs(u,{component:b,children:[e.jsxs(o,{sx:{mb:10,borderRadius:2,display:"flex",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center"},children:[s,c,e.jsx(L,{sx:{position:"absolute",zIndex:9},children:e.jsx(p,{icon:"solar:play-broken",width:24})})]}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(a,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})})}function ee(){const i=g(),s=k("up","md"),c=e.jsx(w,{color:"primary",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill"}),children:"Read more testimonials"}),l=e.jsxs(o,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(n.div,{variants:t().inUp,children:e.jsx(a,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(n.div,{variants:t().inUp,children:e.jsxs(a,{variant:"h2",sx:{my:3,color:"common.white"},children:["Who love ",e.jsx("br",{}),"my work"]})}),e.jsx(n.div,{variants:t().inUp,children:e.jsx(a,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!s&&e.jsx(o,{component:n.div,variants:t().inUp,sx:{mt:3,display:"flex",justifyContent:"center"},children:c})]}),r=e.jsx(o,{sx:{py:{md:10},height:{md:1},...s&&{...O.y}},children:e.jsx(K,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:q.map(d=>e.jsx(n.div,{variants:t().inUp,children:e.jsx(A,{testimonial:d})},d.name))})});return e.jsx(o,{sx:{...F({color:y(i.palette.grey[900],.9),imgUrl:"/assets/images/about/testimonials.jpg"}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsxs(u,{component:b,sx:{position:"relative",height:1},children:[e.jsxs(x,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(x,{xs:10,md:4,children:l}),e.jsx(x,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:r})]}),s&&e.jsx(o,{component:n.div,variants:t().inUp,sx:{bottom:60,position:"absolute"},children:c})]})})}function A({testimonial:i,sx:s,...c}){const l=g(),{name:r,ratingNumber:d,postedDate:I,content:U,avatarUrl:R}=i;return e.jsxs(h,{spacing:3,sx:{...G({color:l.palette.common.white,opacity:.08}),p:3,borderRadius:2,color:"common.white",...s},...c,children:[e.jsx(p,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(a,{variant:"body2",children:U}),e.jsx(H,{value:d,readOnly:!0,size:"small"}),e.jsxs(h,{direction:"row",children:[e.jsx(N,{alt:r,src:R,sx:{mr:2}}),e.jsx(V,{primary:r,secondary:$(I),primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{typography:"caption",color:"inherit",sx:{opacity:.64}}})]})]})}A.propTypes={sx:m.object,testimonial:m.object};function se(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(X,{}),e.jsx(Z,{}),e.jsx(Y,{}),e.jsx(ee,{})]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx("title",{children:" About us"})}),e.jsx(se,{})]})}export{ie as default};
