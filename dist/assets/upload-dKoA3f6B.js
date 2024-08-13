import{c as R,r as a,j as e,cu as k,p as A,C as D,S as d,q as t,bK as n,x as L,aB as S,s as i,cK as x,ho as O,hj as j,T as h,gl as m,i as y,H as B}from"./index-ljBoEzUF.js";import{C as T}from"./component-hero-dmf289ZJ.js";function H(){const r=R(),[o,c]=a.useState([]),[u,p]=a.useState(null),[g,f]=a.useState(null),U=a.useCallback(l=>{const s=l[0];s&&p(Object.assign(s,{preview:URL.createObjectURL(s)}))},[]),b=a.useCallback(l=>{const s=l[0];s&&f(Object.assign(s,{preview:URL.createObjectURL(s)}))},[]),v=a.useCallback(l=>{c([...o,...l.map(s=>Object.assign(s,{preview:URL.createObjectURL(s)}))])},[o]),C=l=>{const s=o.filter(w=>w!==l);c(s)},F=()=>{c([])};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(k,{heading:"Upload",links:[{name:"Components",href:A.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})}),e.jsx(D,{sx:{my:10},children:e.jsxs(d,{spacing:5,children:[e.jsxs(t,{children:[e.jsx(n,{title:"Upload Multi File",action:e.jsx(L,{control:e.jsx(S,{checked:r.value,onClick:r.onToggle}),label:"Show Thumbnail"})}),e.jsx(i,{children:e.jsx(x,{multiple:!0,thumbnail:r.value,files:o,onDrop:v,onRemove:C,onRemoveAll:F,onUpload:()=>console.info("ON UPLOAD")})})]}),e.jsxs(t,{children:[e.jsx(n,{title:"Upload Single File"}),e.jsx(i,{children:e.jsx(x,{file:u,onDrop:U,onDelete:()=>p(null)})})]}),e.jsxs(t,{children:[e.jsx(n,{title:"Upload Avatar"}),e.jsx(i,{children:e.jsx(O,{file:g,onDrop:b,validator:l=>l.size>1e6?{code:"file-too-large",message:`File is larger than ${j(1e6)}`}:null,helperText:e.jsxs(h,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",j(3145728)]})})})]}),e.jsxs(t,{children:[e.jsx(n,{title:"Upload Box"}),e.jsx(i,{children:e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(m,{}),e.jsx(m,{placeholder:e.jsxs(d,{spacing:.5,alignItems:"center",children:[e.jsx(y,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(h,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}function I(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx("title",{children:" Components: Upload"})}),e.jsx(H,{})]})}export{I as default};