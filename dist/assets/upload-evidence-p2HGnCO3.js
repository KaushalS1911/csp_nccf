import{aF as te,a as ae,r as n,u as se,K as y,f as oe,o as ne,M as l,j as e,H as ce,q as re,S as k,B as p,E as P,cG as U,cH as T,cI as ie,cd as E,v as le,T as g,cJ as de,D as pe,C as ue,n as me,cK as he,cL as xe,d as ge,e as fe,cM as j,cN as ye,p as je}from"./index-AyhP95hO.js";const be=ge().shape({doc_type:fe().required("Document type is required")});function we(){var v;const L=te(),M=ae(),[I,R]=n.useState(""),{vendor:s}=se(),[r,b]=n.useState([]),[d,_]=n.useState([]),[W,D]=n.useState(!1),[f,$]=n.useState([]),[S,C]=n.useState([]),[_e,B]=n.useState([]),[H,z]=n.useState([]),O=n.useMemo(()=>({doc_type:"",csp_code:""}),[]);n.useEffect(()=>{s&&y.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080//nccf/branch/${s==null?void 0:s.branch}/csp/list`).then(t=>{var a;return z((a=t==null?void 0:t.data)==null?void 0:a.data)}).catch(t=>console.log(t)),q()},[s==null?void 0:s.csp_code]);function q(){s!=null&&s.csp_code&&y.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${s==null?void 0:s.csp_code}/documents`).then(t=>{var a;return $((a=t==null?void 0:t.data)==null?void 0:a.data)}).catch(t=>console.error(t))}const w=oe({defaultValues:O,resolver:ne(be)}),{handleSubmit:V,control:A,setValue:De,watch:G}=w,K=G("doc_type"),F=V(async t=>{var u;if(!((u=r[0])!=null&&u.preview))return l("Please Select Image",{variant:"error"}),!1;const a={type:t.doc_type,image:r[0],id:Date.now()};_(i=>[...i,a]),b([]);const o=new FormData;o.append("doc_type",t.doc_type),o.append("csp_code",s);for(let i of r)try{o.append("file",i)}catch(h){console.error("Error compressing file:",h),o.append("file",i)}}),J=[{label:"Milling Unit Photo",key:"milling_unit_photo"},{label:"Milling Unit Video",key:"milling_unit_video"}];n.useEffect(()=>{var t;(t=r[0])!=null&&t.preview&&F()},[r]);const N=n.useCallback(t=>{b([...r,...t.map(a=>Object.assign(a,{preview:URL.createObjectURL(a)}))])},[r]),Y=async t=>{var u,i,h;const a=f==null?void 0:f.filter(m=>m.doc_type===I);if(a.length>=5){l(e.jsxs(p,{sx:{p:"5px"},children:[e.jsx(g,{variant:"subtitle1",style:{fontWeight:"bold"},children:` ${j((u=a[0])==null?void 0:u.doc_type)} upload limit exceed`}),e.jsx(g,{variant:"body2",children:`If you want to upload more document of ${j((i=a[0])==null?void 0:i.doc_type)}, then remove existing ${j((h=a[0])==null?void 0:h.doc_type)} document.`})]}),{variant:"error",autoHideDuration:3e3});return}D(!0);const o={maxSizeMB:.5,maxWidthOrHeight:1200,useWebWorker:!0};try{const m=await Promise.all(t.map(async c=>{const x=new FormData,ee=await ye(c==null?void 0:c.image,o);return x.append("file",ee),x.append("doc_type",c==null?void 0:c.type),x.append("csp_code",s==null?void 0:s.csp_code),x}));await Promise.all(m.map(c=>y.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document",c,{headers:{"Content-Type":"multipart/form-data"}})))?(l("Your Document Uploaded"),M.push(je.dashboard.document.document_list),C([])):l("Failed to Upload",{variant:"error"})}catch(m){console.error("Error submitting form:",m),l("Failed to Upload",{variant:"error"})}finally{D(!1)}},Q=n.useCallback(t=>{const a=d.filter(o=>o.id!==t);l("Delete success!"),_(a)},[l,d]);n.useRef(null);const X=n.useCallback(t=>{B(t.target.value),C(t.target.value)},[S]),Z=e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsx("title",{children:"Dashboard | Upload Evidence"})}),e.jsx(re,{children:e.jsx(k,{spacing:3,sx:{p:3},children:e.jsxs(k,{children:[e.jsxs(p,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},children:[(s==null?void 0:s.category)==="branch"&&e.jsxs(P,{sx:{flexShrink:0},children:[e.jsx(U,{children:"CSP"}),e.jsx(T,{value:S,onChange:X,input:e.jsx(ie,{label:"Type"}),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:H.map(t=>e.jsx(E,{value:t.csp_code,children:t.name},t.csp_code))})]}),e.jsx(le,{name:"doc_type",control:A,render:({field:t,fieldState:a})=>e.jsxs(P,{fullWidth:!0,error:!!a.error,children:[e.jsx(U,{children:"Document Type"}),e.jsx(T,{...t,label:"Document Type",disabled:d.length>=5,onChange:o=>{t.onChange(o),R(o.target.value)},children:J.map(o=>e.jsx(E,{value:o.key,children:o.label},o.key))}),a.error&&e.jsx(g,{variant:"caption",color:"error",children:a.error.message})]})})]}),e.jsxs(p,{sx:{position:"relative"},children:[e.jsx(de,{sx:{height:"100px",width:"100px",position:"absolute",right:"0%",zIndex:"200",opacity:"0"},accept:K==="milling_unit_photo"?{"image/jpeg":[],"image/jpg":[],"image/png":[]}:{"video/mp4":[],"video/avi":[],"video/mkv":[],"video/mov":[]},disabled:d.length>=5,multiple:!0,onDrop:N}),e.jsx(p,{sx:{display:"flex",justifyContent:"flex-end",mt:"20px"},children:e.jsx(pe,{style:{cursor:"pointer",maxWidth:"200px"},variant:"contained",children:"Choose File"})})]})]})})})]});return e.jsx(e.Fragment,{children:e.jsx(ue,{maxWidth:L.themeStretch?!1:"xl",children:W?e.jsx(p,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:e.jsx(me,{sx:{margin:"auto"}})}):e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"h4",children:"Upload Evidence"}),e.jsxs(p,{sx:{mt:5,width:1,height:320,borderRadius:2},children:[e.jsx(he,{methods:w,onSubmit:F,children:Z}),((v=d[0])==null?void 0:v.type)&&e.jsx(xe,{data:d,handleDeleteRow:Q,handleAllSubmit:Y})]})]})})})}export{we as default};
