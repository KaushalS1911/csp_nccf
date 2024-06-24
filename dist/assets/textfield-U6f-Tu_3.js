import{ad as C,r as n,j as e,ab as t,I as o,i as u,h as W,bZ as g,bW as P,p as T,C as y,B as v,H as I}from"./index-rcXNTvDP.js";import{C as S}from"./component-hero-XluJHIn7.js";import{C as a}from"./component-block-zmBch5k9.js";import{M}from"./Masonry-RYzoG-nJ.js";import{T as V,a as A}from"./Tabs-LL1nZZU6.js";const m=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"¥"}];function c({variant:l}){const[d,h]=n.useState("EUR"),[s,i]=n.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),x=n.useCallback(r=>{h(r.target.value)},[]),p=r=>w=>{i({...s,[r]:w.target.value})},f=n.useCallback(()=>{i({...s,showPassword:!s.showPassword})},[s]),b=n.useCallback(r=>{r.preventDefault()},[]);return e.jsxs(M,{columns:{xs:1,md:2},spacing:3,children:[e.jsxs(a,{title:"General",children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Inactive"}),e.jsx(t,{variant:l,required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),e.jsx(t,{variant:l,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),e.jsx(t,{variant:l,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),e.jsxs(a,{title:"With Icon & Adornments",children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Filled",InputProps:{startAdornment:e.jsx(o,{position:"start",children:e.jsx(u,{icon:"solar:user-rounded-bold",width:24})})}}),e.jsx(t,{variant:l,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:e.jsx(o,{position:"start",children:e.jsx(u,{icon:"solar:user-rounded-bold",width:24})})}}),e.jsx(t,{variant:l,fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:e.jsx(o,{position:"start",children:"Kg"})}}),e.jsx(t,{variant:l,fullWidth:!0,value:s.weight,onChange:p("weight"),helperText:"Weight",InputProps:{endAdornment:e.jsx(o,{position:"end",children:"Kg"})}}),e.jsx(t,{variant:l,fullWidth:!0,type:s.showPassword?"text":"password",value:s.password,onChange:p("password"),label:"Password",InputProps:{startAdornment:e.jsx(o,{position:"start",children:e.jsx(u,{icon:"solar:user-rounded-bold",width:24})}),endAdornment:e.jsx(o,{position:"end",children:e.jsx(W,{onClick:f,onMouseDown:b,edge:"end",children:s.showPassword?e.jsx(u,{icon:"solar:eye-bold",width:24}):e.jsx(u,{icon:"solar:eye-closed-bold",width:24})})})}})]}),e.jsxs(a,{title:"With Caption",children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),e.jsx(t,{variant:l,error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]}),e.jsxs(a,{title:"Type",children:[e.jsx(t,{variant:l,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),e.jsx(t,{variant:l,fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),e.jsx(t,{variant:l,fullWidth:!0,label:"Search",type:"search"})]}),e.jsxs(a,{title:"Sizes",children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),e.jsx(t,{variant:l,fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),e.jsxs(a,{title:"Select",children:[e.jsx(t,{variant:l,select:!0,fullWidth:!0,label:"Select",value:d,onChange:x,helperText:"Please select your currency",children:m.map(r=>e.jsx(g,{value:r.value,children:r.label},r.value))}),e.jsx(t,{variant:l,select:!0,fullWidth:!0,size:"small",value:d,label:"Native select",SelectProps:{native:!0},onChange:x,helperText:"Please select your currency",children:m.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs(a,{title:"Multiline",children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Multiline",multiline:!0,maxRows:4,value:"Controlled"}),e.jsx(t,{variant:l,fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),e.jsx(t,{variant:l,rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})}c.propTypes={variant:C.string};const j=[{value:"outlined",label:"Outlined",component:e.jsx(c,{variant:"outlined"})},{value:"filled",label:"Filled",component:e.jsx(c,{variant:"filled"})},{value:"standard",label:"Standard",component:e.jsx(c,{variant:"standard"})}];function k(){const[l,d]=n.useState("outlined"),h=n.useCallback((s,i)=>{d(i)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(P,{heading:"Textfield",links:[{name:"Components",href:T.components},{name:"Textfield"}],moreLink:["https://mui.com/components/text-fields"]})}),e.jsxs(y,{sx:{my:10},children:[e.jsx(V,{value:l,onChange:h,children:j.map(s=>e.jsx(A,{value:s.value,label:s.label},s.value))}),e.jsx("form",{noValidate:!0,autoComplete:"off",children:j.map(s=>s.value===l&&e.jsx(v,{sx:{mt:5},children:s.component},s.value))})]})]})}function R(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:" MUI: TextField"})}),e.jsx(k,{})]})}export{R as default};
