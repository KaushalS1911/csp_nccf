import{r as d,j as e,cu as u,p as c,C as x,E as r,w as o,y as t,x as a,H as j}from"./index-AyhP95hO.js";import{C as h}from"./component-hero-FXW6jF7h.js";import{C as n}from"./component-block-fJyFI6v9.js";import{M as p}from"./Masonry-CD1AhDkp.js";const f=["default","primary","secondary","info","success","warning","error"],C=["top","start","bottom","end"];function b(){const[l,i]=d.useState("a1"),m=s=>{i(s.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsx(u,{heading:"Radio Buttons",links:[{name:"Components",href:c.components},{name:"Radio Buttons"}],moreLink:["https://mui.com/components/radio-buttons"]})}),e.jsx(x,{sx:{my:10},children:e.jsxs(p,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(n,{title:"Basic",children:e.jsx(r,{component:"fieldset",children:e.jsxs(o,{row:!0,defaultValue:"nn",children:[e.jsx(t,{size:"medium",value:"nn"}),e.jsx(t,{size:"medium",value:"gg"}),e.jsx(t,{size:"medium",disabled:!0,value:"hh"})]})})}),e.jsx(n,{title:"Sizes",children:e.jsxs(o,{row:!0,defaultValue:"g",children:[e.jsx(a,{value:"g",control:e.jsx(t,{size:"medium"}),label:"Normal"}),e.jsx(a,{value:"p",control:e.jsx(t,{size:"small"}),label:"Small"})]})}),e.jsx(n,{title:"Placement",children:e.jsx(r,{component:"fieldset",children:e.jsx(o,{row:!0,defaultValue:"top",children:C.map(s=>e.jsx(a,{value:s,label:s,labelPlacement:s,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},s))})})}),e.jsx(n,{title:"Colors",children:e.jsx(r,{component:"fieldset",children:e.jsxs(o,{value:l,onChange:m,children:[f.map(s=>e.jsx(a,{value:s,control:e.jsx(t,{size:"medium",color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(a,{disabled:!0,value:"a8",control:e.jsx(t,{size:"medium",color:"error"}),label:"Disabled"})]})})})]})})]})}function B(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("title",{children:" MUI: Radio Button"})}),e.jsx(b,{})]})}export{B as default};
