import{a as v,r as F,u as A,c as I,d as N,e as n,l as C,f as T,p as q,j as s,F as H,o as k,S as d,T as i,g as c,I as l,h as u,i as m,H as B}from"./index-rcXNTvDP.js";import{N as E}from"./new-password-icon-pAsCOY2v.js";import{A as R}from"./Alert-nIhZ0ctz.js";import{L as $}from"./LoadingButton-7Wl_UZwm.js";import"./CircularProgress-UE5rdxfP.js";function L(){const p=v(),[a,x]=F.useState(""),{updatePassword:o}=A(),e=I(),h=N().shape({password:n().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:n().required("Confirm password is required").oneOf([C("password")],"Passwords must match")}),w={password:"",confirmPassword:""},t=T({mode:"onChange",resolver:k(h),defaultValues:w}),{reset:g,handleSubmit:j,formState:{isSubmitting:f}}=t,b=j(async S=>{try{await(o==null?void 0:o(S.password)),p.push(q.dashboard.root)}catch(r){console.error(r),g(),x(typeof r=="string"?r:r.message)}}),P=s.jsxs(s.Fragment,{children:[s.jsx(E,{sx:{height:96}}),s.jsxs(d,{spacing:1,sx:{mt:3,mb:5},children:[s.jsx(i,{variant:"h3",children:"New Password"}),s.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"Successful updates enable access using the new password"})]})]}),y=s.jsxs(d,{spacing:3,children:[s.jsx(c,{name:"password",label:"Confirm Password",type:e.value?"text":"password",InputProps:{endAdornment:s.jsx(l,{position:"end",children:s.jsx(u,{onClick:e.onToggle,edge:"end",children:s.jsx(m,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),s.jsx(c,{name:"confirmPassword",label:"Password",type:e.value?"text":"password",InputProps:{endAdornment:s.jsx(l,{position:"end",children:s.jsx(u,{onClick:e.onToggle,edge:"end",children:s.jsx(m,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),s.jsx($,{fullWidth:!0,type:"submit",size:"large",variant:"contained",loading:f,children:"Update Password"})]});return s.jsxs(s.Fragment,{children:[P,!!a&&s.jsx(R,{severity:"error",sx:{textAlign:"left",mb:3},children:a}),s.jsx(H,{methods:t,onSubmit:b,children:y})]})}function W(){return s.jsxs(s.Fragment,{children:[s.jsx(B,{children:s.jsx("title",{children:" Supabase: New Password"})}),s.jsx(L,{})]})}export{W as default};
