import{u as S,a as A,r as F,b as T,c as E,d as I,e as l,f as R,P as H,j as e,F as k,o as q,S as o,T as d,L as c,R as m,p as u,g as p,I as B,h as C,i as M,H as N}from"./index-rcXNTvDP.js";import{A as V}from"./Alert-nIhZ0ctz.js";import{L as _}from"./LoadingButton-7Wl_UZwm.js";import"./new-password-icon-pAsCOY2v.js";import"./CircularProgress-UE5rdxfP.js";function $(){const{login:r}=S(),h=A(),[n,x]=F.useState(""),g=T().get("returnTo"),a=E(),f=I().shape({email:l().required("Email is required").email("Email must be a valid email address"),password:l().required("Password is required")}),j={email:"",password:""},t=R({resolver:q(f),defaultValues:j}),{reset:y,handleSubmit:b,formState:{isSubmitting:w}}=t,v=b(async i=>{try{await(r==null?void 0:r(i.email,i.password)),h.push(g||H)}catch(s){console.error(s),y(),x(typeof s=="string"?s:s.message)}}),L=e.jsxs(o,{spacing:2,sx:{mb:5},children:[e.jsx(d,{variant:"h4",children:"Sign in to Minimal"}),e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(d,{variant:"body2",children:"New user?"}),e.jsx(c,{component:m,href:u.auth.amplify.register,variant:"subtitle2",children:"Create an account"})]})]}),P=e.jsxs(o,{spacing:2.5,children:[e.jsx(p,{name:"email",label:"Email address"}),e.jsx(p,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(B,{position:"end",children:e.jsx(C,{onClick:a.onToggle,edge:"end",children:e.jsx(M,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(c,{component:m,href:u.auth.amplify.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(_,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:w,children:"Login"})]});return e.jsxs(e.Fragment,{children:[L,!!n&&e.jsx(V,{severity:"error",sx:{mb:3},children:n}),e.jsx(k,{methods:t,onSubmit:v,children:P})]})}function K(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx("title",{children:" Amplify: Amplify Login"})}),e.jsx($,{})]})}export{K as default};
