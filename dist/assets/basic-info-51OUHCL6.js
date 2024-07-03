import{u as w,cd as N,ce as V,r as l,aD as H,E as b,f as U,J as S,j as t,H as Y,C as $,T as g,B as r,F as k,Q as q,af as p,n as C,g as o,K as u,z as J,A as K,D as Q}from"./index-nB1sVaXe.js";function X(){const{vendor:f}=w(),c=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080//nccf/csp_detail/${f.phone_number}`,{data:a,isLoading:x,error:i,isValidating:h}=N(c,V);return l.useMemo(()=>({profile:(a==null?void 0:a.data[0])||{},profileLoading:x,profileError:i,profileValidating:h,profileEmpty:!x&&!(a!=null&&a.data.length)}),[a==null?void 0:a.data,i,x,h])}function se(){const f=H(),{vendor:c}=w(),[a,x]=l.useState(!1),i=c==null?void 0:c.category,[h,j]=l.useState([]),[O,v]=l.useState([]),[D,P]=l.useState([]),[W,B]=l.useState(""),m=h.find(e=>(e==null?void 0:e.state_name)===W),L=(e,n)=>{B(n),_.setValue("state",n)},{profile:s}=X();l.useEffect(()=>{z()},[]),l.useEffect(()=>{m&&m.state_id&&(M(m.state_id),R(m.state_id))},[m]);function z(){b.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state").then(e=>{var n;j((n=e==null?void 0:e.data)==null?void 0:n.data)})}function M(e){b.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${e}/branch`).then(n=>{var d;v((d=n==null?void 0:n.data)==null?void 0:d.data)})}function R(e){b.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${e}/district`).then(n=>{var d;P((d=n==null?void 0:n.data)==null?void 0:d.data)})}const _=U({defaultValues:{name:"",milling_type:"",mil_dis_sub_roles:"",type_of_firm:"",contact_person:"",phone_number:"",email:"",address:"",state:"",district:"",procurement_area:"",branch:"",pincode:"",pan_number:"",gst_number:""}}),{reset:y,handleSubmit:T,formState:{isSubmitting:ee}}=_;l.useEffect(()=>{s&&y({name:s.name||"",milling_type:s.milling_type||"",mil_dis_sub_roles:s.mil_dis_sub_roles||"",type_of_firm:s.type_of_firm||"",contact_person:s.contact_person||"",phone_number:s.phone_number||"",email:s.email||"",password:s.password||"",confirm_password:s.confirm_password||"",address:s.address||"",state:s.state||"",district:s.district||"",procurement_area:s.procurement_area||"",branch:s.branch||"",pincode:s.pincode||"",pan_number:s.pan_number||"",gst_number:s.gst_number||""})},[s,y,c]);const F=T(async e=>{const n={...e,csp_code:c.csp_code,updated_on:new Date().toISOString(),mode:"test"};b.put("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/update_info",n).then(d=>{S("Update successfully")}).catch(d=>{S("Something went wrong",{variant:"error"})})}),E=[{label:"Co-operative (Rent Mill)",value:"cooperative_rent_mill"},{label:"Own Distribution and Rent Mill",value:"own_distribution_rent_mill"},{label:"Own Mill and Distribution",value:"own_distribution_own_mill"}],A=["Partnership","Proprietary ","LLP","Public Limited","Other"],G=["Retail outlet","Mobile van"],I=["Dry","Wet","Both"];return t.jsxs(t.Fragment,{children:[t.jsx(Y,{children:t.jsx("title",{children:" Dashboard | Basic Info"})}),t.jsxs($,{maxWidth:f.themeStretch?!1:"xl",children:[t.jsx(g,{variant:"h4",children:" Basic Information"}),t.jsx(r,{sx:{mt:5,width:1,height:320,borderRadius:2},children:t.jsxs(k,{methods:_,onSubmit:F,children:[t.jsx(q,{}),t.jsxs(p,{container:!0,children:[t.jsx(p,{item:!0,md:4,children:t.jsx(r,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:t.jsxs(r,{sx:{mb:"30px",mt:"10px",fontWeight:"600",fontSize:"18px"},children:["Basic Information",t.jsx(g,{sx:{fontSize:"13px",color:"#637381"},children:"Basic Information Input fields"})]})})}),t.jsx(p,{md:8,xs:12,item:!0,children:t.jsx(C,{sx:{p:3},children:t.jsxs(r,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:[t.jsx(o,{name:"name",label:i==="distributor"||i==="miller_distributor"?"Distributor Name":i==="miller"?"Milling Unit Name":"Society Name"}),i==="miller"&&t.jsx(u,{name:"milling_type",type:"milling_type",label:"Milling Type",placeholder:"Choose Milling Type",fullWidth:!0,options:I.map(e=>e),getOptionLabel:e=>e}),i!=="society_cooperative"&&t.jsx(u,{name:"type_of_firm",label:"Type of Firm",placeholder:"Choose Your firm",fullWidth:!0,options:A.map(e=>e),getOptionLabel:e=>e}),t.jsx(o,{name:"email",label:"Email",disabled:a}),t.jsx(o,{name:"contact_person",label:"Contact Person",disabled:a}),t.jsx(o,{name:"phone_number",label:"Phone Number",disabled:a}),(i==="distributor"||i==="miller_distributor")&&t.jsxs(t.Fragment,{children:[t.jsx(o,{name:"area_of_Opration",label:"Area of Opration"}),t.jsx(o,{name:"capacity",label:"Capacity /day (MT)"}),t.jsx(u,{name:"mode",label:"Mode of Sale",placeholder:"Choose mode of sale",fullWidth:!0,options:G.map(e=>e),getOptionLabel:e=>e})]}),t.jsx(o,{name:"pan_number",label:"Pan Number",disabled:a}),t.jsx(o,{name:"gst_number",label:"GST Number",disabled:a}),i==="society_cooperative"&&t.jsxs(J,{row:!0,"aria-label":"vendor",name:"mil_dis_sub_roles",children:[t.jsx(r,{sx:{fontWeight:"500"},children:"Society Cooperative Category :"}),E.map(e=>t.jsx(K,{checked:(e==null?void 0:e.value).includes(s==null?void 0:s.mil_dis_sub_roles),value:e==null?void 0:e.value,control:t.jsx(Q,{}),label:e==null?void 0:e.label}))]})]})})})]}),t.jsxs(p,{container:!0,sx:{mt:"80px"},children:[t.jsx(p,{item:!0,md:4,children:t.jsx(r,{sx:{ml:{md:"60px",xs:"0"},mt:"60px"},children:t.jsx(r,{sx:{mb:"30px",mt:"10px",fontWeight:"600",fontSize:"18px"},children:t.jsx(g,{variant:"h5",gutterBottom:!0,className:"heading",mt:2,children:` ${i==="distributor"||i==="miller_distributor"?"Address of Proposed Distributor Premises":i==="miller"?"Address of Proposed Milling Unit Premises":"Address Information"}`})})})}),t.jsx(p,{md:8,xs:12,item:!0,children:t.jsx(C,{sx:{p:3},children:t.jsxs(r,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},children:[t.jsx(r,{gridColumn:{xs:"span 1",sm:"span 2",md:"span 4"},children:t.jsx(o,{name:"address",label:"Address",fullWidth:!0,disabled:a})}),t.jsx(r,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(u,{name:"state",label:"State",placeholder:"Choose Your State",fullWidth:!0,options:h.map(e=>e==null?void 0:e.state_name),getOptionLabel:e=>e,onChange:L})}),t.jsx(r,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(u,{name:"district",label:"District",placeholder:"Choose Your District",fullWidth:!0,options:D.map(e=>e==null?void 0:e.district),getOptionLabel:e=>e,disabled:!m})}),t.jsx(r,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(u,{name:"branch",label:"Branch",placeholder:"Choose Your Branch",fullWidth:!0,options:O.map(e=>e==null?void 0:e.branch_name),getOptionLabel:e=>e,disabled:!m})}),t.jsx(r,{gridColumn:{xs:"span 1",sm:"span 1",md:"span 2"},children:t.jsx(o,{name:"pincode",label:"Pin Code",fullWidth:!0,disabled:a})})]})})})]})]})})]})]})}export{se as default};