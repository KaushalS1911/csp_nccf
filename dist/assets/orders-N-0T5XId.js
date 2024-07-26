import{r as n,aF as b,u as F,J as x,f as O,j as e,H as w,C as _,T as h,B as a,Q as z,F as B,ah as c,n as E,S as i,M as H,g as R,k as T,cL as u}from"./index-V2omy5Zf.js";function v(){const[p,f]=n.useState([]),j=b(),{vendor:d}=F(),g=()=>u.success("Order created"),m=t=>u.error(t);n.useEffect(()=>{y()},[]);function y(){x.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/commodity").then(t=>{var r;f((r=t.data)==null?void 0:r.data)})}const C=n.useMemo(()=>({csp_code:d.csp_code,commodity:"",quantity:""}),[]),o=O({defaultValues:C}),{handleSubmit:S}=o,l=S(async t=>{const r={...t,csp_code:d.csp_code,mode:"test",status:"0"};try{const s=await x.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/create_order",r);s.data.status=="201"?g():s.data.status=="400"&&m(s.data.message)}catch(s){m("Something went wrong"),console.error("Order creation error:",s)}});return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx("title",{children:" Dashboard | Order"})}),e.jsxs(_,{maxWidth:j.themeStretch?!1:"xl",children:[e.jsx(h,{variant:"h4",children:"Order"}),e.jsxs(a,{sx:{mt:5,width:1,height:320,borderRadius:2},children:[e.jsx(z,{}),e.jsx(B,{methods:o,onSubmit:l,children:e.jsxs(c,{container:!0,sx:{mt:"30px"},children:[e.jsx(c,{item:!0,md:4,children:e.jsx(a,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:e.jsxs(a,{sx:{mb:"30px",fontWeight:"600",fontSize:"18px"},children:["Create Order",e.jsx(h,{sx:{fontSize:"13px",color:"#637381"},children:"Create Order Input fields"})]})})}),e.jsxs(c,{item:!0,md:8,children:[e.jsx(E,{children:e.jsx(i,{spacing:3,sx:{p:3},children:e.jsx(i,{spacing:1.5,children:e.jsxs(a,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(H,{name:"commodity",type:"commodity",label:"Commodity",placeholder:"Choose Commodity",fullWidth:!0,options:p.map(t=>t==null?void 0:t.commodity_name),getOptionLabel:t=>t}),e.jsx(R,{name:"quantity",label:"Quantity"})]})})})}),e.jsx(i,{alignItems:"flex-end",sx:{mt:3},children:e.jsx(T,{type:"submit",className:"button",loading:o.formState.isSubmitting,onClick:l,children:"Order"})})]})]})})]})]})]})}export{v as default};