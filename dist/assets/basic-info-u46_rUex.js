import{aE as I,u as A,r as l,cC as N,J as h,f as H,K as g,j as t,H as Y,C as U,T as b,B as n,F as $,Q as k,ag as d,n as j,g as r,M as p,z as V,D as q,E as J}from"./index-A8uSmfRr.js";function ee(){const y=I(),{vendor:u}=A(),[o,K]=l.useState(!1),i=u==null?void 0:u.category,[f,S]=l.useState([]),[C,O]=l.useState([]),[w,v]=l.useState([]),[P,B]=l.useState(""),m=f.find(e=>(e==null?void 0:e.state_name)===P),D=(e,a)=>{B(a),x.setValue("state",a)},{profile:s}=N();l.useEffect(()=>{W()},[]),l.useEffect(()=>{m&&m.state_id&&(M(m.state_id),T(m.state_id))},[m]);function W(){h.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state").then(e=>{var a;S((a=e==null?void 0:e.data)==null?void 0:a.data)})}function M(e){h.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${e}/branch`).then(a=>{var c;O((c=a==null?void 0:a.data)==null?void 0:c.data)})}function T(e){h.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${e}/district`).then(a=>{var c;v((c=a==null?void 0:a.data)==null?void 0:c.data)})}const x=H({defaultValues:{name:"",milling_type:"",mil_dis_sub_roles:"",type_of_firm:"",contact_person:"",phone_number:"",email:"",address:"",state:"",district:"",procurement_area:"",branch:"",pincode:"",pan_number:"",gst_number:""}}),{reset:_,handleSubmit:F,formState:{isSubmitting:X}}=x;l.useEffect(()=>{s&&_({name:s.name||"",milling_type:s.milling_type||"",mil_dis_sub_roles:s.mil_dis_sub_roles||"",type_of_firm:s.type_of_firm||"",contact_person:s.contact_person||"",phone_number:s.phone_number||"",email:s.email||"",password:s.password||"",confirm_password:s.confirm_password||"",address:s.address||"",state:s.state||"",district:s.district||"",procurement_area:s.procurement_area||"",branch:s.branch||"",pincode:s.pincode||"",pan_number:s.pan_number||"",gst_number:s.gst_number||""})},[s,_,u]);const L=F(async e=>{const a={...e,csp_code:u.csp_code,updated_on:new Date().toISOString(),mode:"test"};h.put("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/update_info",a).then(c=>{g("Update successfully")}).catch(c=>{g("Something went wrong",{variant:"error"})})}),R=[{label:"Co-operative (Rent Mill)",value:"cooperative_rent_mill"},{label:"Own Distribution and Rent Mill",value:"own_distribution_rent_mill"},{label:"Own Mill and Distribution",value:"own_distribution_own_mill"}],z=["Partnership","Proprietary ","LLP","Public Limited","Other"],E=["Retail outlet","Mobile van"],G=["Dry","Wet","Both"];return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:t.jsx("title",{children:" Dashboard | Basic Info"})}),t.jsxs(U,{maxWidth:y.themeStretch?!1:"xl",children:[t.jsx(b,{variant:"h4",children:" Basic Information"}),t.jsx(n,{sx:{mt:5,width:1,height:320,borderRadius:2},children:t.jsxs($,{methods:x,onSubmit:L,children:[t.jsx(k,{}),t.jsxs(d,{container:!0,children:[t.jsx(d,{item:!0,md:4,children:t.jsx(n,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:t.jsxs(n,{sx:{mb:"30px",mt:"10px",fontWeight:"600",fontSize:"18px"},children:["Basic Information",t.jsx(b,{sx:{fontSize:"13px",color:"#637381"},children:"Basic Information Input fields"})]})})}),t.jsx(d,{md:8,xs:12,item:!0,children:t.jsx(j,{sx:{p:3},children:t.jsxs(n,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:[t.jsx(r,{name:"name",label:i==="distributor"||i==="miller_distributor"?"Distributor Name":i==="miller"?"Milling Unit Name":"Society Name"}),i==="miller"&&t.jsx(p,{name:"milling_type",type:"milling_type",label:"Milling Type",placeholder:"Choose Milling Type",fullWidth:!0,options:G.map(e=>e),getOptionLabel:e=>e}),i!=="society_cooperative"&&t.jsx(p,{name:"type_of_firm",label:"Type of Firm",placeholder:"Choose Your firm",fullWidth:!0,options:z.map(e=>e),getOptionLabel:e=>e}),t.jsx(r,{name:"email",label:"Email",disabled:o}),t.jsx(r,{name:"contact_person",label:"Contact Person",disabled:o}),t.jsx(r,{name:"phone_number",label:"Phone Number",disabled:o}),(i==="distributor"||i==="miller_distributor")&&t.jsxs(t.Fragment,{children:[t.jsx(r,{name:"area_of_Opration",label:"Area of Opration"}),t.jsx(r,{name:"capacity",label:"Capacity /day (MT)"}),t.jsx(p,{name:"mode",label:"Mode of Sale",placeholder:"Choose mode of sale",fullWidth:!0,options:E.map(e=>e),getOptionLabel:e=>e})]}),t.jsx(r,{name:"pan_number",label:"Pan Number",disabled:o}),t.jsx(r,{name:"gst_number",label:"GST Number",disabled:o}),i==="society_cooperative"&&t.jsxs(V,{row:!0,"aria-label":"vendor",name:"mil_dis_sub_roles",children:[t.jsx(n,{sx:{fontWeight:"500"},children:"Society Cooperative Category :"}),R.map(e=>t.jsx(q,{checked:(e==null?void 0:e.value).includes(s==null?void 0:s.mil_dis_sub_roles),value:e==null?void 0:e.value,control:t.jsx(J,{}),label:e==null?void 0:e.label}))]})]})})})]}),t.jsxs(d,{container:!0,sx:{mt:"80px"},children:[t.jsx(d,{item:!0,md:4,children:t.jsx(n,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:t.jsx(n,{sx:{mb:"30px",mt:"10px",fontWeight:"600",fontSize:"18px"},children:t.jsx(b,{variant:"h5",gutterBottom:!0,className:"heading",mt:2,children:` ${i==="distributor"||i==="miller_distributor"?"Address of Proposed Distributor Premises":i==="miller"?"Address of Proposed Milling Unit Premises":"Address Information"}`})})})}),t.jsx(d,{md:8,xs:12,item:!0,children:t.jsx(j,{sx:{p:3},children:t.jsxs(n,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},children:[t.jsx(n,{gridColumn:{xs:"span 1",sm:"span 2",md:"span 4"},children:t.jsx(r,{name:"address",label:"Address",fullWidth:!0,disabled:o})}),t.jsx(n,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(p,{name:"state",label:"State",placeholder:"Choose Your State",fullWidth:!0,options:f.map(e=>e==null?void 0:e.state_name),getOptionLabel:e=>e,onChange:D})}),t.jsx(n,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(p,{name:"district",label:"District",placeholder:"Choose Your District",fullWidth:!0,options:w.map(e=>e==null?void 0:e.district),getOptionLabel:e=>e,disabled:!m})}),t.jsx(n,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(p,{name:"branch",label:"Branch",placeholder:"Choose Your Branch",fullWidth:!0,options:C.map(e=>e==null?void 0:e.branch_name),getOptionLabel:e=>e,disabled:!m})}),t.jsx(n,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(r,{name:"pincode",label:"Pin Code",fullWidth:!0,disabled:o})})]})})})]})]})})]})]})}export{ee as default};