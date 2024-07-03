import{u as A,a as E,b as L,c as H,d as T,e as o,l as N,f as $,p as h,r as B,j as e,S as p,g as t,k as V,I as x,h as w,i,T as l,L as j,R as W,F as z,o as D,H as O}from"./index-qJigJXRM.js";import{S as U}from"./new-password-icon-DG3GjSal.js";import{u as G}from"./use-countdown-hGTD8H7s.js";import{L as J}from"./LoadingButton-2E-VIOUU.js";import"./CircularProgress-P2BcVD5b.js";function K(){const{newPassword:n,forgotPassword:r}=A(),f=E(),g=L().get("email"),s=H(),{countdown:b,counting:d,startCountdown:c}=G(60),y=T().shape({code:o().min(6,"Code must be at least 6 characters").required("Code is required"),email:o().required("Email is required").email("Email must be a valid email address"),password:o().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:o().required("Confirm password is required").oneOf([N("password")],"Passwords must match")}),v={code:"",email:g||"",password:"",confirmPassword:""},m=$({mode:"onChange",resolver:D(y),defaultValues:v}),{watch:P,handleSubmit:C,formState:{isSubmitting:S}}=m,u=P(),k=C(async a=>{try{await(n==null?void 0:n(a.email,a.code,a.password)),f.push(h.auth.amplify.login)}catch(q){console.error(q)}}),F=B.useCallback(async()=>{try{c(),await(r==null?void 0:r(u.email))}catch(a){console.error(a)}},[r,c,u.email]),I=e.jsxs(p,{spacing:3,alignItems:"center",children:[e.jsx(t,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(V,{name:"code"}),e.jsx(t,{name:"password",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(x,{position:"end",children:e.jsx(w,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(t,{name:"confirmPassword",label:"Confirm New Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(x,{position:"end",children:e.jsx(w,{onClick:s.onToggle,edge:"end",children:e.jsx(i,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(J,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:S,children:"Update Password"}),e.jsxs(l,{variant:"body2",children:["Don’t have a code? ",e.jsxs(j,{variant:"subtitle2",onClick:F,sx:{cursor:"pointer",...d&&{color:"text.disabled",pointerEvents:"none"}},children:["Resend code ",d&&`(${b}s)`]})]}),e.jsxs(j,{component:W,href:h.auth.amplify.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(i,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),R=e.jsxs(e.Fragment,{children:[e.jsx(U,{sx:{height:96}}),e.jsxs(p,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(l,{variant:"h3",children:"Request sent successfully!"}),e.jsxs(l,{variant:"body2",sx:{color:"text.secondary"},children:["We've sent a 6-digit confirmation email to your email.",e.jsx("br",{}),"Please enter the code in below box to verify your email."]})]})]});return e.jsxs(e.Fragment,{children:[R,e.jsx(z,{methods:m,onSubmit:k,children:I})]})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx("title",{children:" Amplify: New Password"})}),e.jsx(K,{})]})}export{ee as default};