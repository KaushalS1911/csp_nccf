import{d as z,e as n,et as C,co as h,m as $,cp as j,c2 as k,a2 as G,ab as J,bV as W,j as e,f3 as X,S as r,as as Y,T as m,O as S,gh as q,c as K,f as Q,o as Z,r as f,fr as _,en as ee,F as le,B as te,g as x,v as O,I as H,h as U,i as P,N as F,c4 as T,cO as ae,cd as D,gi as se,cq as oe,cr as A,z as ie,eJ as ne,c3 as re,eE as de,gj as M,k as ce,a8 as y,cu as ue,p as me,C as pe,x as he,aB as xe,H as be}from"./index-c1Y6u2Al.js";import{C as ge}from"./component-hero-upYWD0dz.js";import{D as V}from"./DatePicker-i-Ig4ECg.js";const je=z().shape({fullName:n().required("Full name is required").min(6,"Mininum 6 characters").max(32,"Maximum 32 characters"),email:n().required("Email is required").email("Email must be a valid email address"),age:C().required("Age is required").moreThan(18,"Age must be between 18 and 100").lessThan(100,"Age must be between 18 and 100"),startDate:h().nullable().required("Start date is required"),endDate:h().required("End date is required").test("date-min","End date must be later than start date",(a,{parent:s})=>a.getTime()>s.startDate.getTime()),password:n().required("Password is required").min(6,"Password should be of minimum 6 characters length"),confirmPassword:n().required("Confirm password is required").oneOf([$("password")],"Password's not match"),slider:C().required("Slider is required").min(10,"Mininum value is >= 10"),sliderRange:h().required("Slider range is is required").test("min","Range must be between 20 and 80",a=>a[0]>=20).test("max","Range must be between 20 and 80",a=>a[1]<=80),singleUpload:h().nullable().required("Single upload is required"),multiUpload:j().min(2,"Must have at least 2 items"),checkbox:k().oneOf([!0],"Checkbox is required"),multiCheckbox:j().min(1,"Choose at least one option"),singleSelect:n().required("Single select is required"),multiSelect:j().min(2,"Must have at least 2 items"),singleCountry:n().required("Country is required"),multiCountry:j().min(2,"Must have at least 2 items"),switch:k().oneOf([!0],"Switch is required"),radioGroup:n().required("Choose at least one option"),editor:n().required("Editor is required"),autocomplete:h().nullable().required("Autocomplete is required")});function fe(){const a=G(),s=J("up","md"),{watch:i,formState:{errors:p}}=W(),b=i();return s?e.jsx(X,{children:e.jsxs(r,{sx:{p:3,top:0,right:0,height:1,width:280,position:"fixed",overflowX:"auto",color:"common.white",zIndex:a.zIndex.drawer,...Y({color:a.palette.grey[900]})},children:[e.jsx(m,{variant:"overline",sx:{mb:2,color:"success.light"},children:"Values"}),Object.keys(b).map(c=>e.jsxs(r,{sx:{typography:"caption",mt:.5},children:[e.jsxs(m,{variant:"body2",sx:{color:"warning.main"},children:[c," :"]}),ye(b,c)]},c)),e.jsx(S,{sx:{my:2}}),e.jsx(m,{variant:"overline",sx:{mb:2,color:"error.light"},children:"Errors"}),e.jsx(m,{variant:"caption",sx:{color:"error.light"},children:JSON.stringify(Object.keys(p),null,2)})]})}):null}function ye(a,s){return s==="singleUpload"?JSON.stringify(a.singleUpload&&q(a.singleUpload)):s==="multiUpload"?JSON.stringify(a.multiUpload.map(i=>q(i))):JSON.stringify(a[s])||"---"}const w=[{value:"option 1",label:"Option 1"},{value:"option 2",label:"Option 2"},{value:"option 3",label:"Option 3"},{value:"option 4",label:"Option 4"},{value:"option 5",label:"Option 5"},{value:"option 6",label:"Option 6"},{value:"option 7",label:"Option 7"},{value:"option 8",label:"Option 8"}],Fe={age:0,email:"",fullName:"",editor:"",switch:!1,radioGroup:"",autocomplete:null,password:"",confirmPassword:"",startDate:null,endDate:null,singleUpload:null,multiUpload:[],singleSelect:"",multiSelect:[],singleCountry:"",multiCountry:[],checkbox:!1,multiCheckbox:[],slider:8,sliderRange:[15,80]};function E({debug:a}){const s=K(),i=Q({resolver:Z(je),defaultValues:Fe}),{watch:p,reset:b,control:c,setValue:d,handleSubmit:I,formState:{isSubmitting:R}}=i,g=p(),N=I(async l=>{try{await new Promise(t=>setTimeout(t,3e3)),b(),console.info("DATA",l)}catch(t){console.error(t)}}),L=f.useCallback(l=>{const t=l[0],u=Object.assign(t,{preview:URL.createObjectURL(t)});u&&d("singleUpload",u,{shouldValidate:!0})},[d]),B=f.useCallback(l=>{const t=g.multiUpload||[],u=l.map(v=>Object.assign(v,{preview:URL.createObjectURL(v)}));d("multiUpload",[...t,...u],{shouldValidate:!0})},[d,g.multiUpload]);return e.jsxs(e.Fragment,{children:[R&&e.jsx(_,{open:!0,sx:{zIndex:l=>l.zIndex.modal+1},children:e.jsx(ee,{color:"primary"})}),e.jsxs(le,{methods:i,onSubmit:N,children:[e.jsxs(te,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsxs(r,{spacing:2,children:[e.jsx(o,{children:e.jsx(x,{name:"fullName",label:"Full Name"})}),e.jsx(o,{children:e.jsx(x,{name:"email",label:"Email address"})}),e.jsx(o,{children:e.jsx(x,{name:"age",label:"Age",type:"number"})}),e.jsxs(r,{spacing:2,direction:{xs:"column",sm:"row"},children:[e.jsx(O,{name:"startDate",control:c,render:({field:l,fieldState:{error:t}})=>e.jsx(V,{...l,label:"Start date",format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!t,helperText:t==null?void 0:t.message}}})}),e.jsx(O,{name:"endDate",control:c,render:({field:l,fieldState:{error:t}})=>e.jsx(V,{...l,label:"End date",format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0,error:!!t,helperText:t==null?void 0:t.message}}})})]}),e.jsxs(r,{spacing:2,direction:{xs:"column",sm:"row"},children:[e.jsx(o,{children:e.jsx(x,{name:"password",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(H,{position:"end",children:e.jsx(U,{onClick:s.onToggle,edge:"end",children:e.jsx(P,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})}),e.jsx(o,{children:e.jsx(x,{name:"confirmPassword",label:"Confirm Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(H,{position:"end",children:e.jsx(U,{onClick:s.onToggle,edge:"end",children:e.jsx(P,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})})]}),e.jsx(o,{label:"RHFAutocomplete",children:e.jsx(F,{name:"autocomplete",label:"Autocomplete",options:w,getOptionLabel:l=>l.label,isOptionEqualToValue:(l,t)=>l.value===t.value,renderOption:(l,t)=>f.createElement("li",{...l,key:t.value},t.label)})}),e.jsx(o,{label:"RHFAutocomplete",children:e.jsx(F,{name:"singleCountry",type:"country",label:"Single country",placeholder:"Choose a country",fullWidth:!0,options:T.map(l=>l.label),getOptionLabel:l=>l})}),e.jsx(o,{label:"RHFAutocomplete",children:e.jsx(F,{name:"multiCountry",type:"country",label:"Multi country",placeholder:"Choose a country",multiple:!0,fullWidth:!0,limitTags:3,options:T.map(l=>l.label),getOptionLabel:l=>l})}),e.jsx(o,{label:"RHFSelect",children:e.jsxs(ae,{name:"singleSelect",label:"Single select",children:[e.jsx(D,{value:"",children:"None"}),e.jsx(S,{sx:{borderStyle:"dashed"}}),w.map(l=>e.jsx(D,{value:l.label,children:l.label},l.value))]})}),e.jsx(o,{label:"RHFMultiSelect",children:e.jsx(se,{chip:!0,checkbox:!0,name:"multiSelect",label:"Multi select",options:w})}),e.jsx(o,{label:"RHFEditor",children:e.jsx(oe,{simple:!0,name:"editor",sx:{height:200}})})]}),e.jsxs(r,{spacing:2,children:[e.jsx(o,{label:"RHFUpload",children:e.jsx(A,{name:"singleUpload",maxSize:3145728,onDrop:L,onDelete:()=>d("singleUpload",null,{shouldValidate:!0})})}),e.jsx(o,{label:"RHFUpload",children:e.jsx(A,{multiple:!0,thumbnail:!0,name:"multiUpload",maxSize:3145728,onDrop:B,onRemove:l=>{var t;return d("multiUpload",g.multiUpload&&((t=g.multiUpload)==null?void 0:t.filter(u=>u!==l)),{shouldValidate:!0})},onRemoveAll:()=>d("multiUpload",[],{shouldValidate:!0}),onUpload:()=>console.info("ON UPLOAD")})}),e.jsx(ie,{name:"checkbox",label:"RHFCheckbox"}),e.jsx(ne,{name:"switch",label:"RHFSwitch"}),e.jsx(re,{row:!0,name:"radioGroup",label:"RHFRadioGroup",spacing:4,options:[{value:"option 1",label:"Radio 1"},{value:"option 2",label:"Radio 2"},{value:"option 3",label:"Radio 3"}]}),e.jsx(de,{row:!0,name:"multiCheckbox",label:"RHFMultiCheckbox",spacing:4,options:[{value:"option 1",label:"Checkbox 1"},{value:"option 2",label:"Checkbox 2"},{value:"option 3",label:"Checkbox 3"}]}),e.jsx(o,{label:"RHFSlider",children:e.jsx(M,{name:"slider"})}),e.jsx(o,{label:"RHFSlider",children:e.jsx(M,{name:"sliderRange"})}),e.jsx(ce,{fullWidth:!0,color:"info",size:"large",type:"submit",variant:"soft",loading:R,children:"Submit to Check"})]})]}),a&&e.jsx(fe,{})]})]})}E.propTypes={debug:y.bool};function o({label:a="RHFTextField",sx:s,children:i}){return e.jsxs(r,{spacing:1,sx:{width:1,...s},children:[e.jsx(m,{variant:"caption",sx:{textAlign:"right",fontStyle:"italic",color:"text.disabled"},children:a}),i]})}o.propTypes={children:y.node,label:y.string,sx:y.object};function we(){const[a,s]=f.useState(!0),i=p=>{s(p.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsx(ue,{heading:"Form Validation",links:[{name:"Components",href:me.components},{name:"Form Validation"}],moreLink:["https://react-hook-form.com/","https://github.com/jquense/yup"]})}),e.jsxs(pe,{sx:{my:10},children:[e.jsxs(r,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(m,{variant:"h4",children:" React Hook Form + Yup "}),e.jsx(he,{control:e.jsx(xe,{checked:a,onChange:i}),label:"Show Debug",labelPlacement:"start"})]}),e.jsx(S,{sx:{my:5}}),e.jsx(E,{debug:a})]})]})}function Ce(){return e.jsxs(e.Fragment,{children:[e.jsx(be,{children:e.jsx("title",{children:" Components: Form Validation"})}),e.jsx(we,{})]})}export{Ce as default};