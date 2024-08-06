import{u as j,a as b,d as f,e as y,f as F,p as i,j as e,F as w,S as n,g as S,k as P,L as v,R,i as k,T as o,o as L,H as E}from"./index-AyhP95hO.js";import{P as H}from"./new-password-icon-95xc5-GR.js";function I(){const{forgotPassword:s}=j(),l=b(),c=f().shape({email:y().required("Email is required").email("Email must be a valid email address")}),d={email:""},r=F({resolver:L(c),defaultValues:d}),{handleSubmit:m,formState:{isSubmitting:u}}=r,h=m(async t=>{try{await(s==null?void 0:s(t.email));const a=new URLSearchParams({email:t.email}).toString(),p=`${i.auth.supabase.verify}?${a}`;l.push(p)}catch(a){console.error(a)}}),x=e.jsxs(n,{spacing:3,alignItems:"center",children:[e.jsx(S,{name:"email",label:"Email address"}),e.jsx(P,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:u,children:"Send Request"}),e.jsxs(v,{component:R,href:i.auth.supabase.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(k,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),g=e.jsxs(e.Fragment,{children:[e.jsx(H,{sx:{height:96}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(o,{variant:"h3",children:"Forgot your password?"}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return e.jsxs(e.Fragment,{children:[g,e.jsx(w,{methods:r,onSubmit:h,children:x})]})}function T(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx("title",{children:" Supabase: Forgot Password"})}),e.jsx(I,{})]})}export{T as default};
