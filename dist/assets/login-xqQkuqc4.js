import{u as p,a as j,r as g,b,d as y,e as a,f as C,j as e,C as f,Q as S,B as n,m as v,n as w,F as P,g as o,q as F,s as L,t as R,S as q,T as B,L as _,R as H,p as k,o as M,H as T}from"./index-YMMvAUfd.js";import"./registration-page-view-RvR_q_DY.js";import{C as E}from"./CardContent-ZbShzVjU.js";import{G as r}from"./Grid-HHK7mZ1G.js";function G(){const{login:t}=p();j();const[N,l]=g.useState("");b().get("returnTo");const c=y().shape({phone_number:a().required("Phone number is required"),password:a().required("Password is required"),category:a().required("Vendor category is required")}),m={phone_number:"",password:"",category:""},i=C({resolver:M(c),defaultValues:m}),{reset:u,control:D,register:I,handleSubmit:x,formState:{isSubmitting:W}}=i,d=x(async h=>{try{await(t==null?void 0:t(h))}catch(s){console.error(s),u(),l(typeof s=="string"?s:s.message)}});return e.jsx(e.Fragment,{children:e.jsxs(f,{maxWidth:"sm",children:[e.jsx(S,{}),e.jsx(n,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:e.jsx(v,{sx:{mt:5},children:e.jsxs(E,{sx:{pb:"70px !important",pt:"50px !important",px:"30px"},children:[e.jsx(n,{display:"flex",justifyContent:"center",mb:3,sx:{height:"130px",mb:"60px"},children:e.jsx("img",{src:w,alt:"BootstrapBrain Logo"})}),e.jsx(P,{onSubmit:d,methods:i,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(o,{name:"phone_number",label:"Phone Number"})}),e.jsx(r,{item:!0,xs:12,sx:{my:"10px"},children:e.jsx(o,{name:"password",label:"Password",type:"password"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(F,{name:"category",row:!0,options:[{label:"Miller",value:"miller"},{label:"Distributor",value:"distributor"},{label:"Miller + Distributor",value:"miller_distributor"},{label:"Society/Co-operative",value:"society_cooperative"}]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(L,{name:"remember_me",label:"Keep me logged in"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(R,{variant:"contained",size:"large",color:"primary",fullWidth:!0,type:"submit",children:"Sign In"})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(q,{direction:"row",sx:{mt:2,justifyContent:"center"},spacing:1,children:[e.jsx(B,{variant:"subtitle2",children:"Become NCCF CSP?"}),e.jsx(_,{component:H,href:k.auth.jwt.register,variant:"subtitle2",children:"Create an account"})]})})]})})]})})})]})})}function K(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" NCCF CSP Portal: Login"})}),e.jsx(G,{})]})}export{K as default};
