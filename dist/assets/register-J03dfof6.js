import{u as R,r as A,a as P,c as q,d as L,e as a,f as N,p as u,j as e,F as E,o as I,S as t,T as l,L as c,R as T,g as i,I as k,h as B,i as H,H as $}from"./index-4yL3xM3x.js";import"./new-password-icon-D3Mc4EIV.js";import{A as C}from"./Alert-NMDWI1wk.js";import{L as M}from"./LoadingButton-ARrPaHRQ.js";import"./CircularProgress-gwCWj6_h.js";function V(){const{register:n}=R(),[d,p]=A.useState(""),h=P(),o=q(),x=L().shape({firstName:a().required("First name required"),lastName:a().required("Last name required"),email:a().required("Email is required").email("Email must be a valid email address"),password:a().required("Password is required")}),g={firstName:"",lastName:"",email:"",password:""},m=N({resolver:I(x),defaultValues:g}),{reset:y,handleSubmit:j,formState:{isSubmitting:f}}=m,b=j(async s=>{try{await(n==null?void 0:n(s.email,s.password,s.firstName,s.lastName));const r=new URLSearchParams({email:s.email}).toString(),F=`${u.auth.amplify.verify}?${r}`;h.push(F)}catch(r){console.error(r),y(),p(typeof r=="string"?r:r.message)}}),v=e.jsxs(t,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(l,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(l,{variant:"body2",children:" Already have an account? "}),e.jsx(c,{href:u.auth.amplify.login,component:T,variant:"subtitle2",children:"Sign in"})]})]}),w=e.jsxs(l,{component:"div",sx:{mt:2.5,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(c,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(c,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),S=e.jsxs(t,{spacing:2.5,children:[e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(i,{name:"firstName",label:"First name"}),e.jsx(i,{name:"lastName",label:"Last name"})]}),e.jsx(i,{name:"email",label:"Email address"}),e.jsx(i,{name:"password",label:"Password",type:o.value?"text":"password",InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(B,{onClick:o.onToggle,edge:"end",children:e.jsx(H,{icon:o.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(M,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:f,children:"Create account"})]});return e.jsxs(e.Fragment,{children:[v,!!d&&e.jsx(C,{severity:"error",sx:{mb:3},children:d}),e.jsx(E,{methods:m,onSubmit:b,children:S}),w]})}function J(){return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx("title",{children:" Amplify: Register"})}),e.jsx(V,{})]})}export{J as default};
