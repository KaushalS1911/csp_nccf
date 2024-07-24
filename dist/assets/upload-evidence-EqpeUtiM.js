import{aF as M,a as W,u as P,r as n,f as B,o as H,K as l,cE as O,J as V,p as q,j as e,H as z,n as G,S as f,B as d,N as A,x as J,cF as K,cG as $,cc as N,T as b,cH as Y,w as Q,C as X,cI as Z,cJ as ee,cK as te,d as se,e as ae}from"./index-irVo58Dc.js";const oe=se().shape({doc_type:ae().required("Document type is required")});function ie(){var y,j;const _=M(),D=W(),{vendor:p}=P(),[i,h]=n.useState([]),[c,u]=n.useState([]),[w,C]=n.useState(!1),v=n.useMemo(()=>({doc_type:"",csp_code:""}),[]),x=B({defaultValues:v,resolver:H(oe)}),{handleSubmit:F,control:S,setValue:re,watch:U}=x,k=U("doc_type"),g=F(async r=>{var a;if(!((a=i[0])!=null&&a.preview))return l("Please Select Image",{variant:"error"}),!1;const t={type:r.doc_type,image:i[0],id:Date.now()};u(o=>[...o,t]),h([]);const s=new FormData;s.append("doc_type",r.doc_type),s.append("csp_code",p);for(let o of i)try{s.append("file",o)}catch(m){console.error("Error compressing file:",m),s.append("file",o)}}),R=[{label:"Milling Unit Photo",key:"milling_unit_photo"},{label:"Milling Unit Video",key:"milling_unit_video"}];(y=i[0])!=null&&y.preview&&g();const T=n.useCallback(r=>{h([...i,...r.map(t=>Object.assign(t,{preview:URL.createObjectURL(t)}))])},[i]),E=n.useCallback(async r=>{C(!0);const t={maxSizeMB:.5,maxWidthOrHeight:1200,useWebWorker:!0},s=await Promise.all(r.map(async a=>{const o=new FormData,m=await O(a==null?void 0:a.image,t);return o.append("file",m),o.append("doc_type",a==null?void 0:a.type),o.append("csp_code",p==null?void 0:p.csp_code),o}));try{await Promise.all(s.map(o=>V.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document",o,{headers:{"Content-Type":"multipart/form-data"}})))?(l("Your Document Uploaded"),D.push(q.dashboard.document.document_list)):l("Failed to Upload",{variant:"error"})}catch(a){console.error("Error submitting form:",a),l("Failed to Upload",{variant:"error"})}},[]),L=n.useCallback(r=>{const t=c.filter(s=>s.id!==r);l("Delete success!"),u(t)},[l,c]);n.useRef(null);const I=e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("title",{children:"Dashboard | Upload Evidence"})}),e.jsx(G,{children:e.jsx(f,{spacing:3,sx:{p:3},children:e.jsxs(f,{children:[e.jsx(d,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},children:e.jsx(A,{name:"doc_type",control:S,render:({field:r,fieldState:t})=>e.jsxs(J,{fullWidth:!0,error:!!t.error,children:[e.jsx(K,{children:"Document Type"}),e.jsx($,{...r,label:"Document Type",disabled:c.length>=5,children:R.map(s=>e.jsx(N,{value:s.key,children:s.label},s.key))}),t.error&&e.jsx(b,{variant:"caption",color:"error",children:t.error.message})]})})}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(Y,{sx:{height:"100px",width:"100px",position:"absolute",right:"0%",zIndex:"200",opacity:"0"},accept:k==="milling_unit_photo"?{"image/jpeg":[],"image/jpg":[],"image/png":[]}:{"video/mp4":[],"video/avi":[],"video/mkv":[],"video/mov":[]},disabled:c.length>=5,multiple:!0,onDrop:T}),e.jsx(d,{sx:{display:"flex",justifyContent:"flex-end",mt:"20px"},children:e.jsx(Q,{style:{cursor:"pointer",maxWidth:"200px"},variant:"contained",children:"Choose File"})})]})]})})})]});return e.jsx(e.Fragment,{children:e.jsx(X,{maxWidth:_.themeStretch?!1:"xl",children:w?e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:e.jsx(Z,{sx:{margin:"auto"}})}):e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"h4",children:"Upload Evidence"}),e.jsxs(d,{sx:{mt:5,width:1,height:320,borderRadius:2},children:[e.jsx(ee,{methods:x,onSubmit:g,children:I}),((j=c[0])==null?void 0:j.type)&&e.jsx(te,{data:c,handleDeleteRow:L,handleAllSubmit:E})]})]})})})}export{ie as default};