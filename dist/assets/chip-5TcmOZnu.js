import{j as e,S as c,O as o,bT as i,am as a,fy as h,i as s,T as f,a5 as b,bY as p,p as u,C as g,B as y,m as d,bM as x,n as j,H as C}from"./index-8oEAyshB.js";import{C as k}from"./component-hero-ZuglGT4k.js";function r({variant:l="filled"}){const n=()=>{console.info("You clicked the delete icon.")},t=m=>e.jsx(f,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:m});return e.jsxs(c,{spacing:3,children:[e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,label:"Default deletable",avatar:e.jsx(a,{children:"M"}),onDelete:n}),e.jsx(i,{variant:l,clickable:!0,label:"Default clickable",avatar:e.jsx(a,{children:"M"})}),e.jsx(i,{variant:l,label:"Primary deletable",avatar:e.jsx(a,{alt:"Natacha",src:h.image.avatar(1)}),color:"primary",onDelete:n}),e.jsx(i,{variant:l,clickable:!0,label:"Primary clickable",avatar:e.jsx(a,{alt:"Natacha",src:h.image.avatar(1)}),color:"primary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:n,color:"secondary"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",color:"secondary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:n,color:"info"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",color:"info"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:n,color:"success"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",color:"success"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:n,color:"warning"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",color:"warning"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:n,color:"error"}),e.jsx(i,{clickable:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",color:"error"})]}),e.jsxs("div",{children:[t("Custom icon"),e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Custom icon",onDelete:n,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"})}),e.jsx(i,{variant:l,avatar:e.jsx(a,{children:"M"}),label:"Custom icon",onDelete:n,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"}),color:"info"})]})]}),e.jsxs("div",{children:[t("Disabled"),e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{disabled:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Disabled",onDelete:n}),e.jsx(i,{disabled:!0,variant:l,avatar:e.jsx(a,{children:"M"}),label:"Disabled",onDelete:n,color:"info"})]})]}),e.jsxs("div",{children:[t("Sizes"),e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Normal",onDelete:n,color:"info"}),e.jsx(i,{variant:l,size:"small",avatar:e.jsx(a,{children:"M"}),label:"Small",onDelete:n,color:"info"})]})]})]})}r.propTypes={variant:b.string};function w(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(p,{heading:"Chip",links:[{name:"Components",href:u.components},{name:"Chip"}],moreLink:["https://mui.com/components/chips"]})}),e.jsx(g,{sx:{my:10},children:e.jsxs(y,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(d,{children:[e.jsx(x,{title:"Filled"}),e.jsx(j,{children:e.jsx(r,{})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Outlined"}),e.jsx(j,{children:e.jsx(r,{variant:"outlined"})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Soft"}),e.jsx(j,{children:e.jsx(r,{variant:"soft"})})]})]})})]})}function S(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx("title",{children:" MUI: Chip"})}),e.jsx(w,{})]})}export{S as default};
