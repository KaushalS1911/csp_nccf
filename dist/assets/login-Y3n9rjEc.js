import{u as A,a as F,r as L,b as T,c as E,d as I,e as l,f as R,P as k,j as e,A as H,F as q,S as n,T as d,L as c,R as m,p as u,g as h,I as B,h as C,i as M,k as N,o as V,H as _}from"./index-XFh7EM9A.js";import"./new-password-icon-gP5XTpyc.js";function $(){const{login:r}=A(),p=F(),[o,x]=L.useState(""),g=T().get("returnTo"),a=E(),j=I().shape({email:l().required("Email is required").email("Email must be a valid email address"),password:l().required("Password is required")}),f={email:"",password:""},t=R({resolver:V(j),defaultValues:f}),{reset:y,handleSubmit:b,formState:{isSubmitting:w}}=t,v=b(async i=>{try{await(r==null?void 0:r(i.email,i.password)),p.push(g||k)}catch(s){console.error(s),y(),x(typeof s=="string"?s:s.message)}}),P=e.jsxs(n,{spacing:2,sx:{mb:5},children:[e.jsx(d,{variant:"h4",children:"Sign in to Minimal"}),e.jsxs(n,{direction:"row",spacing:.5,children:[e.jsx(d,{variant:"body2",children:"New user?"}),e.jsx(c,{component:m,href:u.auth.amplify.register,variant:"subtitle2",children:"Create an account"})]})]}),S=e.jsxs(n,{spacing:2.5,children:[e.jsx(h,{name:"email",label:"Email address"}),e.jsx(h,{name:"password",label:"Password",type:a.value?"text":"password",InputProps:{endAdornment:e.jsx(B,{position:"end",children:e.jsx(C,{onClick:a.onToggle,edge:"end",children:e.jsx(M,{icon:a.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(c,{component:m,href:u.auth.amplify.forgotPassword,variant:"body2",color:"inherit",underline:"always",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(N,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:w,children:"Login"})]});return e.jsxs(e.Fragment,{children:[P,!!o&&e.jsx(H,{severity:"error",sx:{mb:3},children:o}),e.jsx(q,{methods:t,onSubmit:v,children:S})]})}function W(){return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx("title",{children:" Amplify: Amplify Login"})}),e.jsx($,{})]})}export{W as default};
