import{a as z,r as l,A as c,d as G,e as i,l as f,f as I,o as Y,p as U,D as j,j as t,B as g,T as p,F as k,g as a,E as d,x as H,y as h,z as x,t as V}from"./index-C8MvU68k.js";import{G as s}from"./Grid-5WBCTyrG.js";const J=({vendor_category:n})=>{const w=z(),[b,y]=l.useState([]),[q,S]=l.useState([]),[P,O]=l.useState([]),[C,N]=l.useState(""),m=b.find(e=>(e==null?void 0:e.state_name)===C),B=(e,r)=>{N(r),u.setValue("state",r)},R=["Partnership","Proprietary ","LLP","Public Limited","Other"],F=["Retail outlet","Mobile van"];l.useEffect(()=>{D()},[]),l.useEffect(()=>{m&&m.state_id&&(M(m.state_id),T(m.state_id))},[m]);function D(){c.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state").then(e=>{var r;y((r=e==null?void 0:e.data)==null?void 0:r.data)})}function M(e){c.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${e}/branch`).then(r=>{var o;S((o=r==null?void 0:r.data)==null?void 0:o.data)})}function T(e){c.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${e}/district`).then(r=>{var o;O((o=r==null?void 0:r.data)==null?void 0:o.data)})}const L=["Dry","Wet","Both"],A=G().shape({address:i().required("Society is required"),contact_person:i().required("Contact is required"),confirm_password:i().oneOf([f("password"),null],"Passwords must match").required("Confirm password is required"),password:i().oneOf([f("password"),null],"Passwords must match").required("Confirm password is required"),district:i().required("District is required"),gst_number:i().required("GST Number is required"),name:i().required("Name is required"),email:i().required("Email is required"),state:i().required("State is required"),branch:i().required("Branch is required"),pan_number:i().required("Pan Number is required"),pincode:i().required("Pincode is required"),phone_number:i().max(10).required("Phone Number is required")}),E={name:"",category:"",milling_type:"",mil_dis_sub_roles:"",type_of_firm:"",contact_person:"",phone_number:"",email:"",password:"",confirm_password:"",address:"",state:"",district:"",procurement_area:"",branch:"",pincode:"",pan_number:"",gst_number:"",mode:""},u=I({resolver:Y(A),defaultValues:E}),{reset:K,control:Q,register:X,handleSubmit:W,formState:{isSubmitting:Z}}=u,$=W(async e=>{const r={name:e.name||"",category:n||"",milling_type:e.milling_type||"",mil_dis_sub_roles:e.mil_dis_sub_roles||"",type_of_firm:e.type_of_firm||"",contact_person:e.contact_person||"",phone_number:e.phone_number||"",email:e.email||"",password:e.password||"",confirm_password:e.confirm_password||"",address:e.address||"",state:e.state||"",district:e.district||"",procurement_area:e.procurement_area||"",branch:e.branch||"",pincode:e.pincode||"",pan_number:e.pan_number||"",gst_number:e.gst_number||"",mode:""};c.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp",r).then(o=>{var _;((_=o==null?void 0:o.data)==null?void 0:_.status)=="201"&&(w.push(U.auth.jwt.login),j("Register Successfully"))}).catch(o=>{console.log(o),j("Invalid credentials",{variant:"error"})})});return t.jsxs(g,{p:5,className:"registerForm",sx:{backgroundColor:"white",borderRadius:"10px"},children:[t.jsx(p,{variant:"h5",gutterBottom:!0,className:"heading",children:"Basic Information"}),t.jsxs(k,{onSubmit:$,methods:u,children:[t.jsxs(s,{container:!0,spacing:3,children:[t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"name",label:n==="distributor"||n==="miller_distributor"?"Distributor Name":n==="miller"?"Milling Unit Name":"Society Name"})}),n==="miller"&&t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(d,{name:"milling_type",type:"milling_type",label:"Milling Type",placeholder:"Choose Milling Type",fullWidth:!0,options:L.map(e=>e),getOptionLabel:e=>e})}),n!=="society_cooperative"&&t.jsx(s,{item:!0,xs:12,sm:3,children:t.jsx(d,{name:"type_of_firm",label:"Type of Firm",placeholder:"Choose Your firm",fullWidth:!0,options:R.map(e=>e),getOptionLabel:e=>e})}),t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"contact_person",label:"Contact Person"})}),t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"phone_number",label:"Phone Number",type:"number"})}),t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"email",label:"Email",type:"email"})}),(n==="distributor"||n==="miller_distributor")&&t.jsxs(t.Fragment,{children:[t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"area_of_Opration",label:"Area of Opration"})}),t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"capacity",label:"Capacity /day (MT)"})}),t.jsx(s,{item:!0,xs:12,sm:3,children:t.jsx(d,{name:"mode",label:"Mode of Sale",placeholder:"Choose mode of sale",fullWidth:!0,options:F.map(e=>e),getOptionLabel:e=>e})})]}),t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"pan_number",label:"PAN Number"})}),t.jsx(s,{item:!0,xs:12,sm:6,md:3,children:t.jsx(a,{name:"gst_number",label:"GST Number"})}),n==="society_cooperative"&&t.jsx(s,{item:!0,xs:12,children:t.jsxs(H,{row:!0,"aria-label":"vendor",name:"mil_dis_sub_roles",children:[t.jsx(h,{value:"own_distribution_own_mill",control:t.jsx(x,{}),label:"Own Mill and Distribution"}),t.jsx(h,{value:"own_distribution_rent_mill",control:t.jsx(x,{}),label:"Own Distribution and Rent Mill"}),t.jsx(h,{value:"cooperative_rent_mill",control:t.jsx(x,{}),label:"Co-operative (Rent Mill)"})]})})]}),t.jsx(p,{variant:"h5",gutterBottom:!0,className:"heading",mt:2,children:` ${n==="distributor"||n==="miller_distributor"?"Address of Proposed Distributor Premises":n==="miller"?"Address of Proposed Milling Unit Premises":"Address Information"}`}),t.jsxs(s,{container:!0,spacing:3,children:[t.jsx(s,{item:!0,xs:12,children:t.jsx(a,{name:"address",label:"Address"})}),t.jsx(s,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"state",label:"State",placeholder:"Choose Your State",fullWidth:!0,options:b.map(e=>e==null?void 0:e.state_name),getOptionLabel:e=>e,onChange:B})}),t.jsx(s,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"district",label:"District",placeholder:"Choose Your District",fullWidth:!0,options:P.map(e=>e==null?void 0:e.district),getOptionLabel:e=>e,disabled:!m})}),t.jsx(s,{item:!0,xs:12,sm:4,children:t.jsx(a,{name:"pincode",label:"Pin Code"})}),t.jsx(s,{item:!0,xs:12,sm:4,children:t.jsx(d,{name:"branch",label:"Branch",placeholder:"Choose Your Branch",fullWidth:!0,options:q.map(e=>e==null?void 0:e.branch_name),getOptionLabel:e=>e,disabled:!m})}),t.jsx(s,{item:!0,xs:12,sm:6,md:4,children:t.jsx(a,{name:"procurement_area",label:"Procurement area"})})]}),t.jsx(p,{variant:"h5",gutterBottom:!0,className:"heading",mt:2,children:"Password"}),t.jsxs(s,{container:!0,spacing:3,children:[t.jsx(s,{item:!0,xs:12,sm:6,md:4,children:t.jsx(a,{type:"password",name:"password",label:"Password"})}),t.jsx(s,{item:!0,xs:12,sm:6,md:4,children:t.jsx(a,{type:"password",name:"confirm_password",label:"Confirm Password"})})]}),t.jsx(g,{display:"flex",justifyContent:"flex-end",mt:3,children:t.jsx(V,{type:"submit",variant:"contained",color:"primary",children:"SUBMIT"})})]})]})},te=J;export{te as R};
