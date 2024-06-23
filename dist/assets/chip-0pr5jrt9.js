import{j as e,S as c,K as o,bR as i,au as n,fB as h,i as s,T as f,ad as p,bW as b,p as u,C as g,B as C,m as d,bK as x,H as y}from"./index-4yL3xM3x.js";import{C as k}from"./component-hero-jDr-Aodb.js";import{C as j}from"./CardContent-G_l_CTlO.js";function r({variant:l="filled"}){const a=()=>{console.info("You clicked the delete icon.")},t=m=>e.jsx(f,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:m});return e.jsxs(c,{spacing:3,children:[e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,label:"Default deletable",avatar:e.jsx(n,{children:"M"}),onDelete:a}),e.jsx(i,{variant:l,clickable:!0,label:"Default clickable",avatar:e.jsx(n,{children:"M"})}),e.jsx(i,{variant:l,label:"Primary deletable",avatar:e.jsx(n,{alt:"Natacha",src:h.image.avatar(1)}),color:"primary",onDelete:a}),e.jsx(i,{variant:l,clickable:!0,label:"Primary clickable",avatar:e.jsx(n,{alt:"Natacha",src:h.image.avatar(1)}),color:"primary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:a,color:"secondary"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",color:"secondary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:a,color:"info"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",color:"info"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:a,color:"success"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",color:"success"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:a,color:"warning"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",color:"warning"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:a,color:"error"}),e.jsx(i,{clickable:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",color:"error"})]}),e.jsxs("div",{children:[t("Custom icon"),e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Custom icon",onDelete:a,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"})}),e.jsx(i,{variant:l,avatar:e.jsx(n,{children:"M"}),label:"Custom icon",onDelete:a,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"}),color:"info"})]})]}),e.jsxs("div",{children:[t("Disabled"),e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{disabled:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Disabled",onDelete:a}),e.jsx(i,{disabled:!0,variant:l,avatar:e.jsx(n,{children:"M"}),label:"Disabled",onDelete:a,color:"info"})]})]}),e.jsxs("div",{children:[t("Sizes"),e.jsxs(c,{spacing:1,flexWrap:"wrap",component:o,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Normal",onDelete:a,color:"info"}),e.jsx(i,{variant:l,size:"small",avatar:e.jsx(n,{children:"M"}),label:"Small",onDelete:a,color:"info"})]})]})]})}r.propTypes={variant:p.string};function w(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(b,{heading:"Chip",links:[{name:"Components",href:u.components},{name:"Chip"}],moreLink:["https://mui.com/components/chips"]})}),e.jsx(g,{sx:{my:10},children:e.jsxs(C,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(d,{children:[e.jsx(x,{title:"Filled"}),e.jsx(j,{children:e.jsx(r,{})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Outlined"}),e.jsx(j,{children:e.jsx(r,{variant:"outlined"})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Soft"}),e.jsx(j,{children:e.jsx(r,{variant:"soft"})})]})]})})]})}function I(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx("title",{children:" MUI: Chip"})}),e.jsx(w,{})]})}export{I as default};
