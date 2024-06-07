import{r as l,ao as U,at as v,aS as $,j as e,ae as K,al as z,e as u,y as f,S as y,X as Q,T as w,L as k,B as x,a1 as q,N as X,p as J,C as Y,eF as i,H as Z}from"./index-6b9YNlCU.js";import{C as ee}from"./custom-breadcrumbs-KB-dcLue.js";import{C as te}from"./component-hero-ZlfpvXk7.js";import{u as re,f as oe,g as ne,h as ae,i as se,j as ie,k as le,l as ce,D as E,G as h,a as de,b as ue,c as me,d as he,e as pe}from"./DataGrid-1TShyYid.js";import{f as fe}from"./format-number-cH6inD4p.js";import{f as xe,a as be}from"./format-time-IxpVz2Ed.js";import{E as N}from"./empty-content-GLrj9nT1.js";import{R as A}from"./Rating-i1QYpkFH.js";import{L as ge}from"./ListItemIcon-CI6a9dxe.js";import{a as ye}from"./Menu-F1nVpr7S.js";import{C as S}from"./Card-1rxO-ujK.js";import{C as T}from"./CardHeader-T304ptW8.js";import"./index-q81m-9gd.js";import"./TextField-cpNo6eDL.js";import"./FormControl-cYbgIL6F.js";import"./isMuiElement-LesLFYja.js";import"./InputLabel-PPNdZKj8.js";import"./FormLabel-Lx7iV62t.js";import"./Select-lumNJNbF.js";import"./Autocomplete-B_8PEJCR.js";import"./Close-sDOtMgtS.js";import"./Chip-JSfjLPw_.js";import"./ClickAwayListener-dLJYFG9M.js";import"./Checkbox-J8dTnZci.js";import"./SwitchBase-tbu66qq5.js";import"./Switch-SI5HYcCt.js";import"./Skeleton-hnrce5BH.js";import"./CircularProgress-A1qORUTS.js";import"./TablePagination-BBaJmBlc.js";import"./KeyboardArrowRight-KR5NzdLJ.js";import"./FirstPage-uNMM70pn.js";import"./FormControlLabel-lzWdZQp4.js";import"./visuallyHidden-DVicuktI.js";const je=["onClick"],we=l.forwardRef(function(r,c){var d;const{onClick:m}=r,p=U(r,je),s=re(),n=oe(),o=ne(s,ie),C=v(),D=v(),[b,g]=l.useState(!1),I=l.useRef(null),P=$(c,I),O=[{icon:e.jsx(n.slots.densityCompactIcon,{}),label:s.current.getLocaleText("toolbarDensityCompact"),value:"compact"},{icon:e.jsx(n.slots.densityStandardIcon,{}),label:s.current.getLocaleText("toolbarDensityStandard"),value:"standard"},{icon:e.jsx(n.slots.densityComfortableIcon,{}),label:s.current.getLocaleText("toolbarDensityComfortable"),value:"comfortable"}],F=l.useMemo(()=>{switch(o){case"compact":return e.jsx(n.slots.densityCompactIcon,{});case"comfortable":return e.jsx(n.slots.densityComfortableIcon,{});default:return e.jsx(n.slots.densityStandardIcon,{})}},[o,n]),V=a=>{g(j=>!j),m==null||m(a)},B=()=>{g(!1)},_=a=>{s.current.setDensity(a),g(!1)},W=a=>{le(a.key)&&a.preventDefault(),ce(a.key)&&g(!1)};if(n.disableDensitySelector)return null;const H=O.map((a,j)=>e.jsxs(K,{onClick:()=>_(a.value),selected:a.value===o,children:[e.jsx(ge,{children:a.icon}),a.label]},j));return e.jsxs(l.Fragment,{children:[e.jsx(n.slots.baseButton,z({ref:P,size:"small",startIcon:F,"aria-label":s.current.getLocaleText("toolbarDensityLabel"),"aria-haspopup":"menu","aria-expanded":b,"aria-controls":b?D:void 0,id:C},p,{onClick:V},(d=n.slotProps)==null?void 0:d.baseButton,{children:s.current.getLocaleText("toolbarDensity")})),e.jsx(ae,{open:b,target:I.current,onClose:B,position:"bottom-start",children:e.jsx(ye,{id:D,className:se.menuList,"aria-labelledby":C,onKeyDown:W,autoFocusItem:b,children:H})})]})}),Ce=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,renderCell:t=>`${t.row.firstName} ${t.row.lastName}`},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:eye-bold"}),label:"View",onClick:()=>console.info("VIEW",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>console.info("EDIT",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>console.info("DELETE",t.row.id),sx:{color:"error.main"}})]}];function G({data:t}){return e.jsx(E,{columns:Ce,rows:t,checkboxSelection:!0,disableRowSelectionOnClick:!0})}G.propTypes={data:f.array};const De=[{field:"id",headerName:"Id",filterable:!1},{field:"name",headerName:"Name",flex:1,minWidth:160,hideable:!1,renderCell:t=>e.jsxs(y,{spacing:2,direction:"row",alignItems:"center",sx:{minWidth:0},children:[e.jsx(Q,{alt:t.row.name,sx:{width:36,height:36},children:t.row.name.charAt(0).toUpperCase()}),e.jsx(w,{component:"span",variant:"body2",noWrap:!0,children:t.row.name})]})},{field:"email",headerName:"Email",flex:1,minWidth:160,editable:!0,renderCell:t=>e.jsx(k,{color:"inherit",noWrap:!0,children:t.row.email})},{type:"dateTime",field:"lastLogin",headerName:"Last login",align:"right",headerAlign:"right",width:120,renderCell:t=>e.jsxs(y,{sx:{textAlign:"right"},children:[e.jsx(x,{component:"span",children:xe(t.row.lastLogin)}),e.jsx(x,{component:"span",sx:{color:"text.secondary",typography:"caption"},children:be(t.row.lastLogin)})]})},{type:"number",field:"rating",headerName:"Rating",width:140,renderCell:t=>e.jsx(A,{size:"small",value:t.row.rating,precision:.5,readOnly:!0})},{type:"singleSelect",field:"status",headerName:"Status",align:"center",headerAlign:"center",width:100,editable:!0,valueOptions:["online","alway","busy"],renderCell:t=>e.jsx(q,{variant:"soft",color:t.row.status==="busy"&&"error"||t.row.status==="alway"&&"warning"||"success",sx:{mx:"auto"},children:t.row.status})},{type:"boolean",field:"isAdmin",align:"center",headerAlign:"center",width:80,renderCell:t=>t.row.isAdmin?e.jsx(u,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"},{type:"number",field:"performance",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:t=>e.jsxs(y,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[e.jsx(X,{value:t.row.performance,variant:"determinate",color:t.row.performance<30&&"error"||t.row.performance>30&&t.row.performance<70&&"warning"||"primary",sx:{width:1,height:6}}),e.jsx(w,{variant:"caption",sx:{width:80},children:fe(t.row.performance)})]})},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:eye-bold"}),label:"View",onClick:()=>console.info("VIEW",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>console.info("EDIT",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>console.info("DELETE",t.row.id),sx:{color:"error.main"}})]}],Ie={id:!1},ve=["id","actions"];function M({data:t}){const[r,c]=l.useState([]),[d,m]=l.useState(Ie),p=l.useMemo(()=>De.map(o=>o.field==="rating"?{...o,filterOperators:Se}:o),[]),s=()=>p.filter(o=>!ve.includes(o.field)).map(o=>o.field),n=t.filter(o=>r.includes(o.id)).map(o=>o.id);return console.info("SELECTED ROWS",n),e.jsx(E,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:t,columns:p,onRowSelectionModelChange:o=>{c(o)},columnVisibilityModel:d,onColumnVisibilityModelChange:o=>m(o),slots:{toolbar:Ne,noRowsOverlay:()=>e.jsx(N,{title:"No Data"}),noResultsOverlay:()=>e.jsx(N,{title:"No results found"})},slotProps:{toolbar:{showQuickFilter:!0},columnsPanel:{getTogglableColumns:s}}})}M.propTypes={data:f.array};function Ne(){return e.jsxs(de,{children:[e.jsx(ue,{}),e.jsx(x,{sx:{flexGrow:1}}),e.jsx(me,{}),e.jsx(he,{}),e.jsx(we,{}),e.jsx(pe,{})]})}function R({item:t,applyValue:r,focusElementRef:c}){const d=l.useRef(null);l.useImperativeHandle(c,()=>({focus:()=>{d.current.querySelector(`input[value="${Number(t.value)||""}"]`).focus()}}));const m=(p,s)=>{r({...t,value:s})};return e.jsx(A,{ref:d,precision:.5,value:Number(t.value),onChange:m,name:"custom-rating-filter-operator",sx:{ml:2}})}R.propTypes={item:f.object,applyValue:f.func,focusElementRef:f.any};const Se=[{label:"Above",value:"above",getApplyFilterFn:t=>!t.field||!t.value||!t.operator?null:r=>Number(r.value)>=Number(t.value),InputComponent:R,InputComponentProps:{type:"number"},getValueAsString:t=>`${t} Stars`}],L=[...Array(20)].map((t,r)=>{const c=r%2&&"online"||r%3&&"alway"||r%4&&"busy"||"offline";return{id:i.id(r),status:c,email:i.email(r),name:i.fullName(r),age:i.number.age(r),lastLogin:i.time(r),isAdmin:i.boolean(r),lastName:i.lastName(r),rating:i.number.rating(r),firstName:i.firstName(r),performance:i.number.percent(r)}});function Te(){return e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:[e.jsx(ee,{heading:"DataGrid",links:[{name:"Components",href:J.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),e.jsxs(w,{variant:"body2",sx:{my:3},children:["This component includes 2 ",e.jsx("strong",{children:"Free"})," and ",e.jsx("strong",{children:"Paid"})," versions from MUI.",e.jsx("br",{}),"Paid version will have more features. Please read more"," ",e.jsx(k,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]}),e.jsx(Y,{sx:{my:10},children:e.jsxs(y,{spacing:5,children:[e.jsxs(S,{children:[e.jsx(T,{title:"Basic",sx:{mb:2}}),e.jsx(x,{sx:{height:390},children:e.jsx(G,{data:L})})]}),e.jsxs(S,{children:[e.jsx(T,{title:"Custom",sx:{mb:2}}),e.jsx(x,{sx:{height:720},children:e.jsx(M,{data:L})})]})]})})]})}function lt(){return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsx("title",{children:" MUI: DataGrid"})}),e.jsx(Te,{})]})}export{lt as default};
