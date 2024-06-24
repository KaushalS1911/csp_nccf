import{a as C,b as E,u as P,d as R,e as l,f as V,p as m,r as I,j as e,S as d,g as L,k as H,T as t,L as u,R as q,i as A,F as T,o as $,H as W}from"./index-rcXNTvDP.js";import{u as z}from"./use-countdown-e9e8JOxi.js";import{E as B}from"./new-password-icon-pAsCOY2v.js";import{L as D}from"./LoadingButton-7Wl_UZwm.js";import"./CircularProgress-UE5rdxfP.js";function G(){const h=C(),x=E().get("email"),{confirmRegister:r,resendCodeRegister:a}=P(),{countdown:p,counting:i,startCountdown:o}=z(60),f=R().shape({code:l().min(6,"Code must be at least 6 characters").required("Code is required"),email:l().required("Email is required").email("Email must be a valid email address")}),y={code:"",email:x||""},n=V({mode:"onChange",resolver:$(f),defaultValues:y}),{watch:b,handleSubmit:g,formState:{isSubmitting:j}}=n,c=b(),v=g(async s=>{try{await(r==null?void 0:r(s.email,s.code)),h.push(m.auth.amplify.login)}catch(k){console.error(k)}}),w=I.useCallback(async()=>{try{o(),await(a==null?void 0:a(c.email))}catch(s){console.error(s)}},[a,o,c.email]),F=e.jsxs(d,{spacing:3,alignItems:"center",children:[e.jsx(L,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(H,{name:"code"}),e.jsx(D,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:j,children:"Verify"}),e.jsxs(t,{variant:"body2",children:["Don’t have a code? ",e.jsxs(u,{variant:"subtitle2",onClick:w,sx:{cursor:"pointer",...i&&{color:"text.disabled",pointerEvents:"none"}},children:["Resend code ",i&&`(${p}s)`]})]}),e.jsxs(u,{component:q,href:m.auth.amplify.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(A,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),S=e.jsxs(e.Fragment,{children:[e.jsx(B,{sx:{height:96}}),e.jsxs(d,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(t,{variant:"h3",children:"Please check your email!"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."})]})]});return e.jsxs(e.Fragment,{children:[S,e.jsx(T,{methods:n,onSubmit:v,children:F})]})}function U(){return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("title",{children:" Amplify: Verify"})}),e.jsx(G,{})]})}export{U as default};
