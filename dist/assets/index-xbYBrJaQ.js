import{j as e,K as y,R as f,a9 as x,az as C,a3 as i,fH as b,eX as k,ak as S,T as a,ad as j,fI as d,fJ as M,a2 as T,aa as h,C as I,S as o,E as m,L as g,B as P,H as A}from"./index-rcXNTvDP.js";import{o as L}from"./orderBy-UaYgBX94.js";import{C as w}from"./component-hero-XluJHIn7.js";import{C as U}from"./CardActionArea-gVvLM3no.js";import"./_baseToString-0qpWapwU.js";import"./_baseIteratee-fcGgQAag.js";import"./_baseEach-0jIR-npE.js";function s({item:r}){const{name:n,icon:u,href:v,category:c}=r;return e.jsxs(y,{component:f,href:v,variant:"outlined",sx:{overflow:"hidden",position:"relative",textDecoration:"none",borderColor:l=>x(l.palette.grey[500],.08)},children:[c&&e.jsx(C,{color:c==="MUI X"?"info":"default",sx:{top:4,right:4,zIndex:9,position:"absolute"},children:c}),e.jsx(U,{component:i.div,whileHover:"hover",sx:{p:2.5,borderRadius:0,color:"text.secondary",bgcolor:l=>x(l.palette.grey[500],.04)},children:e.jsx(i.div,{variants:b(1.1),transition:k(),children:e.jsx(S,{alt:n,src:u})})}),e.jsx(a,{variant:"subtitle2",sx:{p:2,textAlign:"center"},children:n})]})}s.propTypes={item:j.object};const p=(r,n)=>`/components/${r}/${M(n)}`,B=["Colors","Typography","Shadows","Grid","Icons"].map(r=>({name:r,href:p("foundation",r),icon:`/assets/icons/components/ic_${d(r)}.svg`})),H=["Accordion","Alert","Autocomplete","Avatar","Badge","Breadcrumbs","Buttons","Checkbox","Chip","Dialog","List","Menu","Pagination","Pickers","Popover","Progress","Radio Button","Rating","Slider","Stepper","Switch","Table","Tabs","Textfield","Timeline","Tooltip","Transfer List","Data Grid"].map(r=>({name:r,href:p("mui",r),icon:`/assets/icons/components/ic_${d(r)}.svg`,category:["Data Grid","Pickers"].includes(r)&&"MUI X"||""})),F=["Chart","Map","Editor","Copy to clipboard","Upload","Carousel","Multi language","Animate","Mega Menu","Form Validation","Lightbox","Image","Label","Scroll","Scroll Progress","Snackbar","Text Max Line","Navigation Bar","Organization Chart","Markdown","Walktour"].map(r=>({name:r,href:p("extra",r),icon:`/assets/icons/components/ic_extra_${d(r)}.svg`,category:["Chart","Map","Editor","Upload","Carousel","Multi language","Animate","Form Validation","Lightbox","Image","Scroll","Scroll Progress","Snackbar","Organization Chart","Markdown","Walktour"].includes(r)&&"3rd Party"||""}));function R(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{sx:{py:15},children:e.jsxs(T,{sx:{textAlign:"center"},children:[e.jsx(i.div,{variants:h().inUp,children:e.jsx(a,{variant:"h3",component:"h1",children:"Components"})}),e.jsx(i.div,{variants:h().inUp,children:e.jsx(a,{sx:{color:"text.secondary",mt:3},children:"With huge resource pack making deployment easy and expanding more effectively"})})]})}),e.jsxs(I,{sx:{pt:10,pb:15},children:[e.jsxs(o,{spacing:3,children:[e.jsxs(o,{spacing:1,children:[e.jsx(a,{variant:"h5",children:"Foundation"}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:"Colors, Typography, Shadows…"})]}),e.jsx(t,{children:B.map(r=>e.jsx(s,{item:r},r.name))})]}),e.jsx(m,{sx:{borderStyle:"dashed",my:8}}),e.jsxs(o,{spacing:3,children:[e.jsxs(o,{spacing:1,children:[e.jsx(a,{variant:"h5",children:"MUI"}),e.jsxs(a,{variant:"body2",sx:{color:"text.secondary"},children:["Components from"," ",e.jsx(g,{href:"https://mui.com/components/",target:"_blank",rel:"noopener",children:"Material UI"}),"."]}),e.jsx(a,{variant:"caption",sx:{color:"text.secondary"},children:e.jsxs("i",{children:["Some advanced components from MUI X will not be included. So you need to purchase a separate",e.jsx(g,{href:"https://mui.com/pricing/",target:"_blank",rel:"noopener",sx:{ml:.5},children:"license"}),"."]})})]}),e.jsx(t,{children:L(H,["name"],["asc"]).map(r=>e.jsx(s,{item:r},r.name))})]}),e.jsx(m,{sx:{borderStyle:"dashed",my:8}}),e.jsxs(o,{spacing:3,children:[e.jsxs(o,{spacing:1,children:[e.jsx(a,{variant:"h5",children:"Extra Components"}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary"},children:"Some custom components / use 3rd party dependencies (chart, map, editor…)."})]}),e.jsx(t,{children:F.map(r=>e.jsx(s,{item:r},r.name))})]})]})]})}function t({children:r}){return e.jsx(P,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"},gap:2.5,children:r})}t.propTypes={children:j.object};function X(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" Components"})}),e.jsx(R,{})]})}export{X as default};
