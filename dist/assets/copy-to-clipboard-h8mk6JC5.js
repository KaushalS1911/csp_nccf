import{V as C,eV as x,r as a,j as e,C as c,cv as h,p as j,q as b,B as g,S as u,T as o,ac as y,I as f,cb as k,h as v,i as T,H as q}from"./index-XFh7EM9A.js";import{u as S}from"./use-double-click-rDtIqdAu.js";function P(){const{enqueueSnackbar:n}=C(),{copy:i}=x(),[r,p]=a.useState("https://www.npmjs.com/package/"),t=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius
  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.
  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut
  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed
  libero. Duis leo. Nulla porta dolor.`,l=a.useCallback(s=>{s&&(n("Copied!"),i(s))},[i,n]),d=S({doubleClick:()=>l(t)}),m=a.useCallback(s=>{p(s.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(h,{heading:"Copy To Clipboard",links:[{name:"Components",href:j.components},{name:"Copy To Clipboard"}]})}),e.jsx(c,{sx:{my:10},children:e.jsx(b,{sx:{p:5},children:e.jsxs(g,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[e.jsxs(u,{spacing:2,children:[e.jsx(o,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),e.jsx(y,{fullWidth:!0,value:r,onChange:m,InputProps:{endAdornment:e.jsx(f,{position:"end",children:e.jsx(k,{title:"Copy",children:e.jsx(v,{onClick:()=>l(r),children:e.jsx(T,{icon:"eva:copy-fill",width:24})})})})}})]}),e.jsxs(u,{spacing:2,children:[e.jsx(o,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),e.jsx(o,{onClick:d,children:t})]})]})})})]})}function I(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Components: to Clipboard"})}),e.jsx(P,{})]})}export{I as default};
