import{r as l,b5 as K,gq as U,gr as $,gs as q,fP as D,bi as z,j as e,cd as Q,gt as J,b3 as X,gu as Y,fS as Z,gv as ee,gw as te,gx as ne,gy as ae,dE as k,dS as h,i as u,a8 as x,aV as N,S as y,au as se,T as w,L as A,B as b,aw as re,dq as oe,at as E,aA as ie,aj as le,ai as ce,dF as de,dI as ue,dJ as me,dK as he,dL as fe,cu as xe,p as be,C as pe,q as S,bK as T,g6 as i,H as ge}from"./index-ptSJn8SQ.js";import{C as ye}from"./component-hero-5A3jYH8d.js";const je=["onClick"],we=l.forwardRef(function(n,c){var d;const{onClick:m}=n,f=K(n,je),o=U(),s=$(),a=q(o,te),C=D(),I=D(),[p,g]=l.useState(!1),v=l.useRef(null),P=z(c,v),O=[{icon:e.jsx(s.slots.densityCompactIcon,{}),label:o.current.getLocaleText("toolbarDensityCompact"),value:"compact"},{icon:e.jsx(s.slots.densityStandardIcon,{}),label:o.current.getLocaleText("toolbarDensityStandard"),value:"standard"},{icon:e.jsx(s.slots.densityComfortableIcon,{}),label:o.current.getLocaleText("toolbarDensityComfortable"),value:"comfortable"}],F=l.useMemo(()=>{switch(a){case"compact":return e.jsx(s.slots.densityCompactIcon,{});case"comfortable":return e.jsx(s.slots.densityComfortableIcon,{});default:return e.jsx(s.slots.densityStandardIcon,{})}},[a,s]),V=r=>{g(j=>!j),m==null||m(r)},B=()=>{g(!1)},_=r=>{o.current.setDensity(r),g(!1)},W=r=>{ne(r.key)&&r.preventDefault(),ae(r.key)&&g(!1)};if(s.disableDensitySelector)return null;const H=O.map((r,j)=>e.jsxs(Q,{onClick:()=>_(r.value),selected:r.value===a,children:[e.jsx(J,{children:r.icon}),r.label]},j));return e.jsxs(l.Fragment,{children:[e.jsx(s.slots.baseButton,X({ref:P,size:"small",startIcon:F,"aria-label":o.current.getLocaleText("toolbarDensityLabel"),"aria-haspopup":"menu","aria-expanded":p,"aria-controls":p?I:void 0,id:C},f,{onClick:V},(d=s.slotProps)==null?void 0:d.baseButton,{children:o.current.getLocaleText("toolbarDensity")})),e.jsx(Y,{open:p,target:v.current,onClose:B,position:"bottom-start",children:e.jsx(Z,{id:I,className:ee.menuList,"aria-labelledby":C,onKeyDown:W,autoFocusItem:p,children:H})})]})}),Ce=[{field:"id",headerName:"ID",width:120},{field:"firstName",headerName:"First name",width:160,editable:!0},{field:"lastName",headerName:"Last name",width:160,editable:!0},{field:"age",headerName:"Age",type:"number",width:120,editable:!0,align:"center",headerAlign:"center"},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",flex:1,renderCell:t=>`${t.row.firstName} ${t.row.lastName}`},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:eye-bold"}),label:"View",onClick:()=>console.info("VIEW",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>console.info("EDIT",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>console.info("DELETE",t.row.id),sx:{color:"error.main"}})]}];function G({data:t}){return e.jsx(k,{columns:Ce,rows:t,checkboxSelection:!0,disableRowSelectionOnClick:!0})}G.propTypes={data:x.array};const Ie=[{field:"id",headerName:"Id",filterable:!1},{field:"name",headerName:"Name",flex:1,minWidth:160,hideable:!1,renderCell:t=>e.jsxs(y,{spacing:2,direction:"row",alignItems:"center",sx:{minWidth:0},children:[e.jsx(se,{alt:t.row.name,sx:{width:36,height:36},children:t.row.name.charAt(0).toUpperCase()}),e.jsx(w,{component:"span",variant:"body2",noWrap:!0,children:t.row.name})]})},{field:"email",headerName:"Email",flex:1,minWidth:160,editable:!0,renderCell:t=>e.jsx(A,{color:"inherit",noWrap:!0,children:t.row.email})},{type:"dateTime",field:"lastLogin",headerName:"Last login",align:"right",headerAlign:"right",width:120,renderCell:t=>e.jsxs(y,{sx:{textAlign:"right"},children:[e.jsx(b,{component:"span",children:re(t.row.lastLogin)}),e.jsx(b,{component:"span",sx:{color:"text.secondary",typography:"caption"},children:oe(t.row.lastLogin)})]})},{type:"number",field:"rating",headerName:"Rating",width:140,renderCell:t=>e.jsx(E,{size:"small",value:t.row.rating,precision:.5,readOnly:!0})},{type:"singleSelect",field:"status",headerName:"Status",align:"center",headerAlign:"center",width:100,editable:!0,valueOptions:["online","alway","busy"],renderCell:t=>e.jsx(ie,{variant:"soft",color:t.row.status==="busy"&&"error"||t.row.status==="alway"&&"warning"||"success",sx:{mx:"auto"},children:t.row.status})},{type:"boolean",field:"isAdmin",align:"center",headerAlign:"center",width:80,renderCell:t=>t.row.isAdmin?e.jsx(u,{icon:"eva:checkmark-circle-2-fill",sx:{color:"primary.main"}}):"-"},{type:"number",field:"performance",headerName:"Performance",align:"center",headerAlign:"center",width:160,renderCell:t=>e.jsxs(y,{spacing:1,direction:"row",alignItems:"center",sx:{px:1,width:1,height:1},children:[e.jsx(le,{value:t.row.performance,variant:"determinate",color:t.row.performance<30&&"error"||t.row.performance>30&&t.row.performance<70&&"warning"||"primary",sx:{width:1,height:6}}),e.jsx(w,{variant:"caption",sx:{width:80},children:ce(t.row.performance)})]})},{type:"actions",field:"actions",headerName:"Actions",align:"right",headerAlign:"right",width:80,sortable:!1,filterable:!1,disableColumnMenu:!0,getActions:t=>[e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:eye-bold"}),label:"View",onClick:()=>console.info("VIEW",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:pen-bold"}),label:"Edit",onClick:()=>console.info("EDIT",t.row.id)}),e.jsx(h,{showInMenu:!0,icon:e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),label:"Delete",onClick:()=>console.info("DELETE",t.row.id),sx:{color:"error.main"}})]}],ve={id:!1},De=["id","actions"];function M({data:t}){const[n,c]=l.useState([]),[d,m]=l.useState(ve),f=l.useMemo(()=>Ie.map(a=>a.field==="rating"?{...a,filterOperators:Se}:a),[]),o=()=>f.filter(a=>!De.includes(a.field)).map(a=>a.field),s=t.filter(a=>n.includes(a.id)).map(a=>a.id);return console.info("SELECTED ROWS",s),e.jsx(k,{checkboxSelection:!0,disableRowSelectionOnClick:!0,rows:t,columns:f,onRowSelectionModelChange:a=>{c(a)},columnVisibilityModel:d,onColumnVisibilityModelChange:a=>m(a),slots:{toolbar:Ne,noRowsOverlay:()=>e.jsx(N,{title:"No Data"}),noResultsOverlay:()=>e.jsx(N,{title:"No results found"})},slotProps:{toolbar:{showQuickFilter:!0},columnsPanel:{getTogglableColumns:o}}})}M.propTypes={data:x.array};function Ne(){return e.jsxs(de,{children:[e.jsx(ue,{}),e.jsx(b,{sx:{flexGrow:1}}),e.jsx(me,{}),e.jsx(he,{}),e.jsx(we,{}),e.jsx(fe,{})]})}function R({item:t,applyValue:n,focusElementRef:c}){const d=l.useRef(null);l.useImperativeHandle(c,()=>({focus:()=>{d.current.querySelector(`input[value="${Number(t.value)||""}"]`).focus()}}));const m=(f,o)=>{n({...t,value:o})};return e.jsx(E,{ref:d,precision:.5,value:Number(t.value),onChange:m,name:"custom-rating-filter-operator",sx:{ml:2}})}R.propTypes={item:x.object,applyValue:x.func,focusElementRef:x.any};const Se=[{label:"Above",value:"above",getApplyFilterFn:t=>!t.field||!t.value||!t.operator?null:n=>Number(n.value)>=Number(t.value),InputComponent:R,InputComponentProps:{type:"number"},getValueAsString:t=>`${t} Stars`}],L=[...Array(20)].map((t,n)=>{const c=n%2&&"online"||n%3&&"alway"||n%4&&"busy"||"offline";return{id:i.id(n),status:c,email:i.email(n),name:i.fullName(n),age:i.number.age(n),lastLogin:i.time(n),isAdmin:i.boolean(n),lastName:i.lastName(n),rating:i.number.rating(n),firstName:i.firstName(n),performance:i.number.percent(n)}});function Te(){return e.jsxs(e.Fragment,{children:[e.jsxs(ye,{children:[e.jsx(xe,{heading:"DataGrid",links:[{name:"Components",href:be.components},{name:"DataGrid"}],moreLink:["https://mui.com/x/react-data-grid/"],sx:{mb:0}}),e.jsxs(w,{variant:"body2",sx:{my:3},children:["This component includes 2 ",e.jsx("strong",{children:"Free"})," and ",e.jsx("strong",{children:"Paid"})," versions from MUI.",e.jsx("br",{}),"Paid version will have more features. Please read more"," ",e.jsx(A,{href:"https://mui.com/x/react-data-grid/",target:"_blank",rel:"noopener",children:"here"})]})]}),e.jsx(pe,{sx:{my:10},children:e.jsxs(y,{spacing:5,children:[e.jsxs(S,{children:[e.jsx(T,{title:"Basic",sx:{mb:2}}),e.jsx(b,{sx:{height:390},children:e.jsx(G,{data:L})})]}),e.jsxs(S,{children:[e.jsx(T,{title:"Custom",sx:{mb:2}}),e.jsx(b,{sx:{height:720},children:e.jsx(M,{data:L})})]})]})})]})}function Ae(){return e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsx("title",{children:" MUI: DataGrid"})}),e.jsx(Te,{})]})}export{Ae as default};
