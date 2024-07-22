import{r as h,j as e,B as u,i as x,L as g,R as y,a7 as a,ax as N,af as L,a3 as b,gk as v,gl as W,ad as A,a1 as G,S as M,h as Y,T as j,N as C,bQ as O,ec as Z,aj as ee,da as te,ak as ne,am as ie,ae,V as re,gc as oe,ap as se,c as le,ab as ce,ac as he,C as $,n as pe,fG as T,w as de,gm as ue,ct as me,p as xe,H as ge}from"./index-OKHCej4L.js";import{T as fe}from"./text-max-line-sW40g-ni.js";import{M as q}from"./Masonry-d4VMi549.js";import{C as ye}from"./component-hero-X6jmTeIa.js";const P=h.forwardRef(({title:t,path:n,icon:i,active:o,hasChild:r,externalLink:s,...l},p)=>{const c=e.jsxs(be,{ref:p,active:o,...l,children:[i&&e.jsx(u,{component:"span",className:"icon",children:i}),t&&e.jsx(u,{component:"span",className:"label",children:t}),r&&e.jsx(x,{width:16,className:"arrow",icon:"eva:arrow-ios-forward-fill"})]});return s?e.jsx(g,{href:n,target:"_blank",rel:"noopener",underline:"none",color:"inherit",children:c}):r?c:e.jsx(g,{component:y,href:n,underline:"none",color:"inherit",children:c})});P.propTypes={open:a.bool,active:a.bool,path:a.string,icon:a.element,title:a.string,hasChild:a.bool,externalLink:a.bool};const Me=P,be=N(L,{shouldForwardProp:t=>t!=="active"})(({active:t,theme:n})=>({...n.typography.body2,paddingLeft:n.spacing(2.5),paddingRight:n.spacing(1.5),fontWeight:n.typography.fontWeightMedium,"& .icon":{width:20,height:20,flexShrink:0,marginRight:n.spacing(2)},"& .label":{flexGrow:1},"& .arrow":{marginLeft:n.spacing(.75)},...t&&{color:n.palette.primary.main,fontWeight:n.typography.fontWeightSemiBold,backgroundColor:b(n.palette.primary.main,.08),"&:hover":{backgroundColor:b(n.palette.primary.main,.16)}}}));function H({data:t,slotProps:n}){const i=v(),o=W(t.path,!!t.children),[r,s]=h.useState(!1),[l,p]=h.useState(0);h.useEffect(()=>{r&&d()},[i]),h.useEffect(()=>{const m=document.getElementById("mega-menu-mobile");if(m){const f=m==null?void 0:m.getBoundingClientRect();p(f.width)}},[]);const c=h.useCallback(()=>{t.children&&s(!0)},[t.children]),d=h.useCallback(()=>{s(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(Me,{open:r,onClick:c,title:t.title,path:t.path,icon:t.icon,hasChild:!!t.children,externalLink:t.path.includes("http"),active:o,className:o?"active":"",sx:n==null?void 0:n.rootItem}),!!t.children&&e.jsx(A,{open:r,onClose:d,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:l-8}},children:e.jsx(D,{title:t.title,onCloseMenu:d,data:t.children,slotProps:n})})]})}H.propTypes={data:a.object,slotProps:a.object};function D({data:t,slotProps:n,title:i,onCloseMenu:o}){const r=G(),s=v();return e.jsxs(e.Fragment,{children:[e.jsxs(M,{direction:"row",alignItems:"center",px:1,py:1.5,spacing:1,children:[e.jsx(Y,{onClick:o,children:e.jsx(x,{icon:"eva:arrow-ios-back-fill",width:16})}),e.jsx(j,{noWrap:!0,variant:"subtitle1",sx:{textTransform:"capitalize"},children:i})]}),e.jsx(C,{}),e.jsx(O,{children:t.map((l,p)=>e.jsxs(Z,{disablePadding:!0,children:[l.subheader&&e.jsx(j,{noWrap:!0,component:"div",variant:"overline",sx:{mt:2,mb:1,px:2.5,fontSize:11,color:"text.secondary",...n==null?void 0:n.subheader},children:l.subheader}),l.items.map(c=>{const d=s===c.path||s===`${c.path}/`;return e.jsxs(L,{component:y,href:c.path,className:d?"active":"",sx:{...r.typography.body2,fontSize:13,...d&&{fontWeight:"fontWeightSemiBold",color:r.palette.mode==="light"?"primary.main":"primary.light",bgcolor:b(r.palette.primary.main,.08),"&:hover":{bgcolor:b(r.palette.primary.main,.16)}},...n==null?void 0:n.subItem},children:[e.jsx(u,{component:"span",className:"icon",sx:{mr:.5,width:20,height:20,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(u,{sx:{width:4,height:4,borderRadius:"50%",bgcolor:"currentColor"}})}),e.jsx(u,{component:"span",className:"label",sx:{flexGrow:1,maxWidth:1,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:c.title})]},c.title)})]},l.subheader+p))})]})}D.propTypes={data:a.array,title:a.string,onCloseMenu:a.func,slotProps:a.object};function V({data:t,slotProps:n,...i}){return e.jsx(M,{component:"nav",id:"mega-menu-mobile",...i,children:t.map(o=>e.jsx(H,{data:o,slotProps:n},o.title))})}V.propTypes={data:a.array,slotProps:a.object};const _=h.forwardRef(({title:t,path:n,icon:i,open:o,active:r,hasChild:s,externalLink:l,...p},c)=>{const d=e.jsxs(ve,{ref:c,open:o,active:r,...p,children:[i&&e.jsx(u,{component:"span",className:"icon",children:i}),t&&e.jsx(u,{component:"span",className:"label",children:t}),s&&e.jsx(x,{width:16,className:"arrow",icon:"eva:arrow-ios-forward-fill"})]});return l?e.jsx(g,{href:n,target:"_blank",rel:"noopener",underline:"none",color:"inherit",children:d}):e.jsx(g,{component:y,href:n,underline:"none",color:"inherit",children:d})});_.propTypes={open:a.bool,active:a.bool,path:a.string,icon:a.element,title:a.string,hasChild:a.bool,externalLink:a.bool};const je=_,ve=N(L,{shouldForwardProp:t=>t!=="active"})(({active:t,open:n,theme:i})=>{const o=n&&!t;return{...i.typography.body2,paddingLeft:i.spacing(2.5),paddingRight:i.spacing(1.5),fontWeight:i.typography.fontWeightMedium,"& .icon":{width:20,height:20,flexShrink:0,marginRight:i.spacing(2)},"& .label":{flexGrow:1},"& .arrow":{marginLeft:i.spacing(.75)},...t&&{color:i.palette.primary.main,fontWeight:i.typography.fontWeightSemiBold,backgroundColor:b(i.palette.primary.main,.08),"&:hover":{backgroundColor:b(i.palette.primary.main,.16)}},...o&&{color:i.palette.text.primary,backgroundColor:i.palette.action.hover}}});function R({tags:t,...n}){return e.jsxs(u,{...n,children:[e.jsx(j,{variant:"caption",sx:{mr:.5,fontWeight:"fontWeightBold"},children:"Hot Products:"}),t.map((i,o)=>e.jsx(g,{component:y,href:i.path,variant:"caption",sx:{color:"text.secondary",transition:r=>r.transitions.create(["color"]),"&:hover":{color:"text.primary"}},children:o===0?i.title:`, ${i.title} `},i.title))]})}R.propTypes={tags:a.array};function k({data:t,slotProps:n,...i}){const o=v();return e.jsx(e.Fragment,{children:t.map((r,s)=>e.jsxs(M,{spacing:1,...i,children:[r.subheader&&e.jsx(j,{variant:"subtitle2",noWrap:!0,sx:n==null?void 0:n.subheader,children:r.subheader}),r.items.map(l=>{const p=o===l.path||o===`${l.path}/`;return e.jsx(g,{noWrap:!0,component:y,href:l.path,className:p?"active":"",variant:"body2",sx:{fontSize:13,color:"text.secondary",transition:c=>c.transitions.create("all"),"&:hover":{color:"text.primary"},...p&&{color:"text.primary",textDecoration:"underline",fontWeight:"fontWeightSemiBold"},...n==null?void 0:n.subItem},children:l.title},l.title)})]},r.subheader+s))})}k.propTypes={data:a.array,slotProps:a.object};function E({products:t,displayProduct:n=8,sx:i}){const o=G(),r=ee({slidesToShow:n,slidesToScroll:n,...te({sx:{mt:3}})});return e.jsx(u,{sx:{position:"relative",pt:2,...i},children:e.jsx(ne,{filled:!0,onNext:r.onNext,onPrev:r.onPrev,leftButtonProps:{size:"small",sx:{top:"calc(50% - 36px)",left:-8}},rightButtonProps:{size:"small",sx:{top:"calc(50% - 36px)",right:-8}},children:e.jsx(ie,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsxs(g,{component:y,href:s.path,color:"inherit",underline:"none",sx:{px:1,display:"block",transition:o.transitions.create("all"),"&:hover":{color:"primary.main"}},children:[e.jsx(ae,{alt:s.coverUrl,src:s.coverUrl,ratio:"1/1",disabledEffect:!0,sx:{borderRadius:1,mb:1}}),e.jsx(fe,{variant:"caption",sx:{fontWeight:"fontWeightSemiBold"},children:s.name})]},s.name))})})})}E.propTypes={displayProduct:a.number,products:a.array,sx:a.object};function I({title:t,path:n}){return e.jsxs(g,{component:y,href:n,color:"inherit",sx:{alignItems:"center",typography:"caption",display:"inline-flex",alignSelf:"flex-end",fontWeight:"fontWeightBold"},children:[t," ",e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:16})]})}I.propTypes={path:a.string,title:a.string};function U({data:t,slotProps:n}){var m;const i=h.useRef(null),o=v(),r=W(t.path,!!t.children),s=((m=t.children)==null?void 0:m.length)===1,[l,p]=h.useState(!1);h.useEffect(()=>{l&&d()},[o]);const c=h.useCallback(()=>{t.children&&p(!0)},[t.children]),d=h.useCallback(()=>{p(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(je,{ref:i,open:l,onMouseEnter:c,onMouseLeave:d,title:t.title,path:t.path,icon:t.icon,hasChild:!!t.children,externalLink:t.path.includes("http"),active:r,className:r?"active":"",sx:n==null?void 0:n.rootItem}),!!t.children&&l&&e.jsxs(re,{onMouseEnter:c,onMouseLeave:d,sx:{p:3,top:-40,width:800,borderRadius:2,position:"absolute",left:"calc(100% - 2px)",zIndex:f=>f.zIndex.drawer,boxShadow:f=>f.customShadows.z20,...s&&{p:2,width:"auto",minWidth:160}},children:[s?e.jsx(k,{data:t.children,slotProps:n}):e.jsx(q,{columns:3,spacing:3,defaultColumns:3,defaultSpacing:3,children:e.jsx(k,{data:t.children,slotProps:n,sx:{mb:2.5}})}),e.jsxs(M,{spacing:3,children:[!!t.moreLink&&e.jsx(I,{path:t.moreLink.path,title:t.moreLink.title}),!!t.products&&e.jsxs(e.Fragment,{children:[e.jsx(C,{sx:{borderStyle:"dashed"}}),e.jsx(E,{products:t.products,displayProduct:n==null?void 0:n.displayProduct})]}),!!t.tags&&e.jsxs(e.Fragment,{children:[e.jsx(C,{sx:{borderStyle:"dashed"}}),e.jsx(R,{tags:t.tags})]})]})]})]})}U.propTypes={data:a.object,slotProps:a.object};function Q({data:t,sx:n,slotProps:i,...o}){return e.jsx(M,{component:"nav",id:"mega-menu-desktop-vertical",sx:{position:"relative",...n},...o,children:t.map(r=>e.jsx(U,{data:r,slotProps:i},r.title))})}Q.propTypes={data:a.array,sx:a.object,slotProps:a.object};const J=h.forwardRef(({title:t,path:n,icon:i,open:o,active:r,hasChild:s,externalLink:l,...p},c)=>{const d=e.jsxs(Ce,{disableRipple:!0,disableTouchRipple:!0,ref:c,open:o,active:r,...p,children:[i&&e.jsx(u,{component:"span",className:"icon",children:i}),t&&e.jsx(u,{component:"span",className:"label",children:t}),s&&e.jsx(x,{width:16,className:"arrow",icon:"eva:arrow-ios-downward-fill"})]});return l?e.jsx(g,{href:n,target:"_blank",rel:"noopener",underline:"none",color:"inherit",children:d}):e.jsx(g,{component:y,href:n,underline:"none",color:"inherit",children:d})});J.propTypes={open:a.bool,active:a.bool,path:a.string,icon:a.element,title:a.string,hasChild:a.bool,externalLink:a.bool};const we=J,Ce=N(L,{shouldForwardProp:t=>t!=="active"})(({active:t,open:n,theme:i})=>{const o=n&&!t;return{...i.typography.body2,padding:0,minHeight:"100%",fontWeight:i.typography.fontWeightMedium,transition:i.transitions.create(["all"],{duration:i.transitions.duration.shorter}),"&:hover":{backgroundColor:"transparent"},"& .icon":{width:20,height:20,flexShrink:0,marginRight:i.spacing(1)},"& .arrow":{marginLeft:i.spacing(.75)},...t&&{color:i.palette.primary.main,fontWeight:i.typography.fontWeightSemiBold},...o&&{opacity:.64}}});function K({data:t,slotProps:n}){var B;const i=h.useRef(null),o=v(),r=W(t.path,!!t.children),s=((B=t.children)==null?void 0:B.length)===1,[l,p]=h.useState(!1),[c,d]=h.useState(0);h.useEffect(()=>{l&&f()},[o]),h.useEffect(()=>{const w=()=>{const F=i.current;if(F){const z=F.getBoundingClientRect();d(z.top+z.height)}};return w(),window.addEventListener("scroll",w),()=>{window.removeEventListener("scroll",w)}},[]);const m=h.useCallback(()=>{t.children&&p(!0)},[t.children]),f=h.useCallback(()=>{p(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(we,{ref:i,open:l,onMouseEnter:m,onMouseLeave:f,title:t.title,path:t.path,icon:t.icon,hasChild:!!t.children,externalLink:t.path.includes("http"),active:r,className:r?"active":"",sx:n==null?void 0:n.rootItem}),!!t.children&&e.jsxs(oe,{disableScrollLock:!0,open:l,anchorEl:i.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{onMouseEnter:m,onMouseLeave:f,sx:{...se.y,p:3,right:0,mx:"auto",mt:"-2px",left:"0 !important",top:`${c}px !important`,maxWidth:w=>w.breakpoints.values.lg,...s&&{p:2,minWidth:160,left:"auto",right:"auto"},...l&&{pointerEvents:"auto"}}}},sx:{pointerEvents:"none"},children:[s?e.jsx(k,{data:t.children,slotProps:n}):e.jsx(q,{columns:4,spacing:3,defaultColumns:4,defaultSpacing:3,children:e.jsx(k,{data:t.children,slotProps:n,sx:{mb:2.5}})}),e.jsxs(M,{spacing:3,children:[!!t.moreLink&&e.jsx(I,{path:t.moreLink.path,title:t.moreLink.title}),!!t.products&&e.jsxs(e.Fragment,{children:[e.jsx(C,{sx:{borderStyle:"dashed"}}),e.jsx(E,{products:t.products,displayProduct:n==null?void 0:n.displayProduct})]}),!!t.tags&&e.jsxs(e.Fragment,{children:[e.jsx(C,{sx:{borderStyle:"dashed"}}),e.jsx(R,{tags:t.tags})]})]})]})]})}K.propTypes={data:a.object,slotProps:a.object};function X({data:t,sx:n,slotProps:i,...o}){return e.jsx(M,{component:"nav",id:"mega-menu-desktop-horizontal",direction:"row",spacing:3,sx:{height:1,...n},...o,children:t.map(r=>e.jsx(K,{data:r,slotProps:i},r.title))})}X.propTypes={data:a.array,sx:a.object,slotProps:a.object};function ke(){const t=v(),n=le();h.useEffect(()=>{n&&n.onFalse()},[t]);const i=e.jsx(ce,{position:"static",color:"transparent",sx:{height:72,boxShadow:s=>s.customShadows.z8},children:e.jsxs(he,{component:$,disableGutters:!0,sx:{height:1},children:[e.jsx(j,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Menu Horizon"}),e.jsx(X,{data:S})]})}),o=e.jsxs(M,{direction:"row",spacing:3,mt:5,children:[e.jsxs(pe,{sx:{width:260,flexShrink:0,overflow:"unset",zIndex:9},children:[e.jsx(j,{variant:"h6",sx:{p:2},children:"Menu Vertical"}),e.jsx(Q,{data:S})]}),e.jsx("div",{children:e.jsx(u,{component:"img",alt:"any photo",src:T.image.cover(2),sx:{borderRadius:1}})})]}),r=e.jsxs(e.Fragment,{children:[e.jsx(de,{color:"inherit",variant:"contained",onClick:n.onTrue,startIcon:e.jsx(x,{icon:"carbon:menu"}),children:"Menu Mobile"}),e.jsx(A,{open:n.value,onClose:n.onFalse,PaperProps:{sx:{pb:5,width:260}},children:e.jsxs(O,{children:[e.jsx(ue,{sx:{mx:2.5,my:3}}),e.jsx(V,{data:S})]})})]});return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx(me,{heading:"Mega Menu",links:[{name:"Components",href:xe.components},{name:"Mega Menu"}]})}),i,e.jsxs($,{sx:{my:10},children:[r,o]})]})}const S=[{title:"Item 1",path:"#",icon:e.jsx(x,{icon:"carbon:accessibility-alt",sx:{width:1,height:1}}),products:[...Array(10)].map((t,n)=>({name:T.productName(n),coverUrl:T.image.product(n),path:"#"})),moreLink:{title:"More Categories",path:"#"},tags:[{title:"Paper Cup",path:"#"},{title:"Lotion Pump",path:"#"},{title:"Brush Cutter",path:"#"},{title:"Display Rack",path:"#"},{title:"Glass Bottle",path:"#"}],children:[{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]},{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]}]},{title:"Item 2",path:"#",icon:e.jsx(x,{icon:"carbon:airplay",sx:{width:1,height:1}}),children:[{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]},{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]}]},{title:"Item 3",path:"#",icon:e.jsx(x,{icon:"carbon:api",sx:{width:1,height:1}}),children:[{subheader:"",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]}]},{title:"Item 4",path:"https://www.google.com/",icon:e.jsx(x,{icon:"carbon:basketball",sx:{width:1,height:1}})}];function We(){return e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsx("title",{children:" Components: Mega Menu"})}),e.jsx(ke,{})]})}export{We as default};
