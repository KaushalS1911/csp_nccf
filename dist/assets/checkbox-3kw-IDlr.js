import{r as u,j as e,cv as j,p as C,C as b,cx as t,x as r,i as l,E as c,gB as a,H as k}from"./index-XFh7EM9A.js";import{C as f}from"./component-hero-9yjVC3_1.js";import{C as o}from"./component-block-pvrsk3z2.js";import{M as p}from"./Masonry-cDNFnkmr.js";const d=["default","primary","secondary","info","success","warning","error"],z=["top","start","bottom","end"];function g(){const[i,n]=u.useState([!0,!1]),m=s=>{n([s.target.checked,s.target.checked])},x=s=>{n([s.target.checked,i[1]])},h=s=>{n([i[0],s.target.checked])};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx(j,{heading:"Checkboxes",links:[{name:"Components",href:C.components},{name:"Checkboxes"}],moreLink:["https://mui.com/components/checkboxes"]})}),e.jsx(b,{sx:{my:10},children:e.jsxs(p,{columns:{xs:1,md:2},spacing:3,children:[e.jsxs(o,{title:"Basic",children:[e.jsx(t,{size:"medium"}),e.jsx(t,{size:"medium",defaultChecked:!0}),e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0}),e.jsx(t,{size:"medium",disabled:!0}),e.jsx(t,{size:"medium",disabled:!0,defaultChecked:!0}),e.jsx(t,{size:"medium",disabled:!0,indeterminate:!0})]}),e.jsxs(o,{title:"Size & Custom Icon",children:[e.jsx(r,{label:"Normal",control:e.jsx(t,{size:"medium",defaultChecked:!0})}),e.jsx(r,{label:"Small",control:e.jsx(t,{size:"small",defaultChecked:!0})}),e.jsx(r,{control:e.jsx(t,{color:"info",size:"small",icon:e.jsx(l,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(l,{icon:"solar:heart-bold"})}),label:"Custom icon"}),e.jsx(r,{control:e.jsx(t,{color:"error",size:"small",icon:e.jsx(l,{icon:"eva:award-fill"}),checkedIcon:e.jsx(l,{icon:"eva:award-fill"})}),label:"Custom icon"})]}),e.jsx(o,{title:"Placement",children:e.jsx(c,{component:"fieldset",children:e.jsx(a,{"aria-label":"position",row:!0,children:z.map(s=>e.jsx(r,{value:s,label:s,labelPlacement:s,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},s))})})}),e.jsxs(o,{title:"Colors",children:[e.jsxs(a,{children:[d.map(s=>e.jsx(r,{control:e.jsx(t,{size:"medium",defaultChecked:!0,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(r,{disabled:!0,control:e.jsx(t,{size:"medium",defaultChecked:!0,color:"error"}),label:"Disabled"})]}),e.jsx(c,{component:"fieldset",children:e.jsxs(a,{children:[d.map(s=>e.jsx(r,{control:e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(r,{disabled:!0,control:e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0,color:"error"}),label:"Disabled"})]})})]}),e.jsx(o,{title:"Indeterminate",children:e.jsxs("div",{children:[e.jsx(r,{label:"Parent",control:e.jsx(t,{size:"medium",checked:i[0]&&i[1],indeterminate:i[0]!==i[1],onChange:m})}),e.jsxs("div",{children:[e.jsx(r,{label:"Child 1",control:e.jsx(t,{size:"medium",checked:i[0],onChange:x})}),e.jsx(r,{label:"Child 2",control:e.jsx(t,{size:"medium",checked:i[1],onChange:h})})]})]})})]})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("title",{children:" MUI: Checkbox"})}),e.jsx(g,{})]})}export{E as default};
