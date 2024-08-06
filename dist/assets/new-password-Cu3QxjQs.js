import{a as v,r as F,u as A,c as I,d as N,e as n,m as C,f as T,p as k,j as s,A as q,F as H,S as d,T as i,g as c,I as l,h as u,i as m,k as B,o as E,H as R}from"./index-AyhP95hO.js";import{N as $}from"./new-password-icon-95xc5-GR.js";function M(){const p=v(),[a,x]=F.useState(""),{updatePassword:o}=A(),e=I(),h=N().shape({password:n().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:n().required("Confirm password is required").oneOf([C("password")],"Passwords must match")}),w={password:"",confirmPassword:""},t=T({mode:"onChange",resolver:E(h),defaultValues:w}),{reset:g,handleSubmit:j,formState:{isSubmitting:f}}=t,b=j(async S=>{try{await(o==null?void 0:o(S.password)),p.push(k.dashboard.root)}catch(r){console.error(r),g(),x(typeof r=="string"?r:r.message)}}),P=s.jsxs(s.Fragment,{children:[s.jsx($,{sx:{height:96}}),s.jsxs(d,{spacing:1,sx:{mt:3,mb:5},children:[s.jsx(i,{variant:"h3",children:"New Password"}),s.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"Successful updates enable access using the new password"})]})]}),y=s.jsxs(d,{spacing:3,children:[s.jsx(c,{name:"password",label:"Confirm Password",type:e.value?"text":"password",InputProps:{endAdornment:s.jsx(l,{position:"end",children:s.jsx(u,{onClick:e.onToggle,edge:"end",children:s.jsx(m,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),s.jsx(c,{name:"confirmPassword",label:"Password",type:e.value?"text":"password",InputProps:{endAdornment:s.jsx(l,{position:"end",children:s.jsx(u,{onClick:e.onToggle,edge:"end",children:s.jsx(m,{icon:e.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),s.jsx(B,{fullWidth:!0,type:"submit",size:"large",variant:"contained",loading:f,children:"Update Password"})]});return s.jsxs(s.Fragment,{children:[P,!!a&&s.jsx(q,{severity:"error",sx:{textAlign:"left",mb:3},children:a}),s.jsx(H,{methods:t,onSubmit:b,children:y})]})}function L(){return s.jsxs(s.Fragment,{children:[s.jsx(R,{children:s.jsx("title",{children:" Supabase: New Password"})}),s.jsx(M,{})]})}export{L as default};
