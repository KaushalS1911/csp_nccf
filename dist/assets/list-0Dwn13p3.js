import{cn as me,c as xe,a as ge,aF as be,u as he,r as l,d_ as G,K as v,aJ as pe,j as e,C as je,ah as U,d5 as Ce,d4 as _e,cu as ye,p as V,d$ as Ie,q as we,e0 as Se,a4 as ve,e1 as De,aA as q,dJ as Ae,dK as Be,E as ce,cG as re,cH as oe,cI as ie,cd as de,e2 as He,S as Re,D as P,i as Oe,dO as ke,dQ as Fe,e3 as ze,e4 as Te,aV as Y,d0 as Ne,e5 as Q,e6 as Pe,bN as $,e7 as We,e8 as $e,e9 as Ge,ea as Ue,eb as Ve,H as qe}from"./index-v20qjeWF.js";const le={publish:[],stock:[],commodity:[],status:"all",branch:[],name:"",startDate:null,endDate:null,startDay:null,endDay:null,category:[]},Ye={category:!1},Qe=["category","actions"];function Je({singleCode:s}){const{enqueueSnackbar:m}=me(),x=xe(),k=ge(),_=be(),{vendor:i}=he(),[h,o]=l.useState([]),[d,f]=l.useState(le),[b,D]=l.useState([]),[p,y]=l.useState(!1),[j,n]=l.useState({}),[L,ue]=l.useState(!1),[J,K]=l.useState(Ye),[X,C]=l.useState([]),[A,Z]=l.useState([]),[M,w]=l.useState([]),F=G(d.startDate,d.endDate),fe=G(d.startDay,d.endDay),I=a=>{const r=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${a}/orders`;v.get(r).then(u=>{var O;return o((O=u==null?void 0:u.data)==null?void 0:O.data)}).catch(u=>console.log(u))};l.useEffect(()=>{i&&(v.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080//nccf/branch/${i==null?void 0:i.branch}/csp/list`).then(a=>{var O;const r=((O=a==null?void 0:a.data)==null?void 0:O.data)||[],u=[{name:"All",csp_code:"All"},...r];C(u)}).catch(a=>console.log(a)),v.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/branch/${i==null?void 0:i.branch}/order`).then(a=>{var r;return o((r=a==null?void 0:a.data)==null?void 0:r.data)}).catch(a=>console.log(a)))},[]),l.useEffect(()=>{if(A==="All"){const a=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/branch/${i==null?void 0:i.branch}/order`;v.get(a).then(r=>{var u;return o((u=r==null?void 0:r.data)==null?void 0:u.data)}).catch(r=>console.log(r))}else I(A)},[A]);const S=Ke({inputData:h,filters:d,dateError:F}),ee=l.useCallback(a=>{w(a.target.value),Z(a.target.value)},[A]),E=!pe(le,d)||!!d.startDate&&!!d.endDate||!!d.startDay&&!!d.endDay,B=l.useCallback((a,r)=>{f(u=>({...u,[a]:r}))},[]),R=l.useCallback(()=>{f(le)},[]);l.useCallback(a=>{const r=h.filter(u=>u.id!==a);m("Delete success!"),o(r)},[m,h]);const H=[{label:"accepted",count:0},{label:"declined",count:0},{label:"placed",count:0}],z=["primary","error","warning","error"];H.forEach(a=>{a.count=S.filter(r=>r.nccf_order_status===a.label).length});const te=[{value:"all",label:"All"},{value:"Bharat Aata",label:"Bharat Aata"},{value:"Bharat Daal",label:"Bharat Daal"},{value:"Bharat Rice",label:"Bharat Rice"}],ae=l.useCallback(()=>{const a=h.filter(r=>!b.includes(r.id));m("Delete success!"),o(a)},[m,b,h]);l.useCallback(a=>{},[k]);const W=[{field:"seq_number",headerName:"SR No.",minWidth:200},{field:"name",headerName:"Name",width:250},{field:"commodity",headerName:"Commodity",minWidth:150,flex:1},{field:"quantity",headerName:"Quantity",minWidth:100,flex:1},{field:"created_at",headerName:"Date",minWidth:150,flex:1,renderCell:a=>Pe(a.row.created_at).format("DD/MM/YYYY")},{field:"nccf_order_status",headerName:"Order Status",minWidth:100,flex:1,renderCell:a=>e.jsx($,{children:e.jsx(q,{variant:"soft",color:a.row.nccf_order_status==="accepted"&&"success"||a.row.nccf_order_status==="placed"&&"warning"||a.row.nccf_order_status==="declined"&&"error"||"default",children:a.row.nccf_order_status==="accepted"?"Accepted":a.row.nccf_order_status==="declined"?"Declined":"Placed"})})}],T=l.useCallback((a,r)=>{B("status",r)},[B]),se=()=>W.filter(a=>!Qe.includes(a.field)).map(a=>a.field);return e.jsxs(e.Fragment,{children:[e.jsxs(je,{maxWidth:_.themeStretch?!1:"xl",children:[e.jsx(U,{container:!0,spacing:3,children:H.map((a,r)=>e.jsx(U,{item:!0,xs:12,md:4,mb:5,children:e.jsx(Ce,{title:_e(a==null?void 0:a.label),total:(a==null?void 0:a.count)==0?"0":a.count,color:z[r],chart:{}})}))}),e.jsx(ye,{heading:"Order List",links:[{name:"Dashboard",href:V.dashboard.root},{name:"Order",href:V.dashboard.orders},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ie,{getAllDocument:I,currentUser:j,open:p,setOpen:y,approve:L,cspCode:M}),e.jsxs(we,{sx:{height:(S==null?void 0:S.length)>0?"unset":700,flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:[e.jsx(Se,{value:d.status,onChange:T,sx:{px:2.5,boxShadow:a=>`inset 0 -2px 0 0 ${ve(a.palette.grey[500],.08)}`},children:te.map(a=>e.jsx(De,{iconPosition:"end",value:a.value,label:a.label,icon:e.jsx(q,{variant:(a.value==="all"||a.value===d.status)&&"filled"||"soft",color:a.value==="Bharat Aata"&&"success"||a.value==="Bharat Daal"&&"warning"||a.value==="Bharat Rice"&&"error"||"default",children:["Bharat Aata","Bharat Rice","Bharat Daal"].includes(a.value)?h.filter(r=>r.commodity===a.value).length:h.length})},a.value))}),e.jsx(Ae,{disableRowSelectionOnClick:!0,rows:S,columns:W,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:5}}},columnVisibilityModel:J,onColumnVisibilityModelChange:a=>K(a),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(Be,{children:[e.jsxs(ce,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(re,{children:"CSP"}),e.jsx(oe,{value:A,onChange:ee,input:e.jsx(ie,{label:"Type"}),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:X.map(a=>e.jsx(de,{value:a.csp_code,disabled:a.order_count===0,children:a.name},a.csp_code))})]}),E&&e.jsx(He,{filters:d,onFilters:B,onResetFilters:R,results:S.length,sx:{p:2.5,pt:0}}),e.jsxs(Re,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[!!b.length&&e.jsxs(P,{size:"small",color:"error",startIcon:e.jsx(Oe,{icon:"solar:trash-bin-trash-bold"}),onClick:x.onTrue,children:["Delete (",b.length,")"]}),e.jsx(ke,{}),e.jsx(Fe,{})]}),e.jsx(ze,{filters:d,onFilters:B,roleOptions:Te,branchOptions:["hello"],dateError:F,dayError:fe})]})}),noRowsOverlay:()=>e.jsx(Y,{title:"No Data"}),noResultsOverlay:()=>e.jsx(Y,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:se}}})]})]}),e.jsx(Ne,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",b.length," "]})," items?"]}),action:e.jsx(P,{variant:"contained",color:"error",onClick:()=>{ae(),x.onFalse()},children:"Delete"})})]})}function Ke({inputData:s,filters:m,dateError:x,dayError:k}){const{stock:_,publish:i,status:h,commodity:o,name:d,branch:f,startDate:b,endDate:D,startDay:p,endDay:y,category:j}=m;return _.length&&(s=s.filter(n=>_.includes(n.inventoryType))),x||b&&D&&(s=s.filter(n=>Q(n.created_at,b,D))),k||p&&y&&(s=s.filter(n=>Q(n.created_at,p,y))),i.length&&(s=s.filter(n=>i.includes(n.publish))),d&&(s=s.filter(n=>n.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),h!=="all"&&(s=s.filter(n=>n.commodity===h)),o.length&&(s=s.filter(n=>o.includes(n.nccf_order_status))),j.length&&(s=s.filter(n=>j.includes(n.category))),f.length&&(s=s.filter(n=>f.includes(n.branch))),s}const ne={publish:[],stock:[],commodity:[],status:"all",branch:[],category:[],name:"",startDate:null,endDate:null,startDay:null,endDay:null},Xe={category:!1},Ze=["category","actions"];function et({singleCode:s}){const{enqueueSnackbar:m}=me(),x=xe(),k=ge(),_=be();he();const[i,h]=l.useState([]),[o,d]=l.useState(ne),[f,b]=l.useState([]),[D,p]=l.useState(!1),[y,j]=l.useState({}),[n,L]=l.useState(!1),[ue,J]=l.useState(Xe),[K,X]=l.useState([]),[C,A]=l.useState("All"),[Z,M]=l.useState([]),[w,F]=l.useState("All"),[fe,I]=l.useState([]),S=G(o.startDate,o.endDate),ee=G(o.startDay,o.endDay);l.useState([]);const E=()=>{const t=`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/branch/${C}/order`;v.get(t).then(c=>{var g;return h((g=c==null?void 0:c.data)==null?void 0:g.data)}).catch(c=>console.log(c))};l.useEffect(()=>{C==="All"?B():(H(),E())},[C]);const B=()=>{A("All"),F("All"),v.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/ho/order").then(t=>{var c;return h((c=t==null?void 0:t.data)==null?void 0:c.data)}).catch(t=>console.log(t))};l.useEffect(()=>{v.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/branch").then(t=>{var N;const c=((N=t==null?void 0:t.data)==null?void 0:N.data)||[],g=[{branch_name:"All",csp_count:1},...c];X(g)}).catch(t=>console.log(t)),B()},[]);const R=tt({inputData:i,filters:o,dateError:S}),H=async()=>{if(C!=="All"){M([]);try{let c=(await v.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/branch/${C}/csp`)).data.data.map(N=>({name:N.name,csp_code:N.csp_code,order_count:N.order_count}));const g=[{name:"All",csp_code:"All",order_count:1},...c];M(g)}catch(t){console.error("Error fetching data:",t)}}},z=t=>{v.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${t}/orders`).then(c=>{var g;return h((g=c==null?void 0:c.data)==null?void 0:g.data)}).catch(c=>console.log(c))};l.useEffect(()=>{w==="All"?E():z(w)},[w]);const te=l.useCallback(t=>{I(t.target.value),F(t.target.value)},[w]),ae=l.useCallback(t=>{A(t.target.value),F("All")},[w]),W=!pe(ne,o)||!!o.startDate&&!!o.endDate||!!o.startDay&&!!o.endDay,T=l.useCallback((t,c)=>{d(g=>({...g,[t]:c}))},[]),se=l.useCallback(()=>{d(ne)},[]);l.useCallback(t=>{const c=i.filter(g=>g.id!==t);m("Delete success!"),h(c)},[m,i]);const a=[{label:"accepted",count:0},{label:"declined",count:0},{label:"placed",count:0}];a.forEach(t=>{t.count=R.filter(c=>c.nccf_order_status===t.label).length});const r=[{value:"all",label:"All"},{value:"Bharat Aata",label:"Bharat Aata"},{value:"Bharat Daal",label:"Bharat Daal"},{value:"Bharat Rice",label:"Bharat Rice"}],u=l.useCallback(()=>{const t=i.filter(c=>!f.includes(c.id));m("Delete success!"),h(t)},[m,f,i]);l.useCallback(t=>{},[k]);const O=[{field:"seq_number",headerName:"Sr No.",minWidth:100},{field:"name",headerName:"Name",width:250},{field:"commodity",headerName:"Commodity",minWidth:150,flex:1},{field:"quantity",headerName:"Quantity",minWidth:100,flex:1},{field:"branch",headerName:"Branch",minWidth:100,flex:1},{field:"created_at",headerName:"Date",minWidth:150,flex:1,renderCell:t=>Pe(t.row.created_at).format("DD/MM/YYYY")},{field:"nccf_order_status",headerName:"Order Status",minWidth:100,flex:1,renderCell:t=>e.jsx($,{children:e.jsx(q,{variant:"soft",color:t.row.nccf_order_status==="accepted"&&"success"||t.row.nccf_order_status==="placed"&&"warning"||t.row.nccf_order_status==="declined"&&"error"||"default",children:t.row.nccf_order_status==="accepted"?"Accepted":t.row.nccf_order_status==="declined"?"Declined":"Placed"})})},{field:"vendor1",headerName:"Action",flex:.5,minWidth:250,renderCell:t=>e.jsxs(e.Fragment,{children:[e.jsx($,{sx:{px:0,marginRight:2},children:e.jsxs(P,{disabled:t.row.nccf_order_status==="accepted"||t.row.nccf_order_status==="declined",variant:"contained",onClick:()=>{j(t.row),L(!0),p(!0)},sx:{backgroundColor:"green",width:90},children:[e.jsx(Ue,{})," Approve"]})}),e.jsx($,{sx:{px:0},children:e.jsxs(P,{disabled:t.row.nccf_order_status==="accepted"||t.row.nccf_order_status==="declined",onClick:()=>{j(t.row),L(!1),p(!0)},variant:"contained",sx:{backgroundColor:"red",width:80},children:[e.jsx(Ve,{})," Reject"]})})]})}],Ee=["primary","error","warning","error"],Le=l.useCallback((t,c)=>{T("status",c)},[T]),Me=()=>O.filter(t=>!Ze.includes(t.field)).map(t=>t.field);return e.jsxs(e.Fragment,{children:[e.jsxs(je,{maxWidth:_.themeStretch?!1:"xl",children:[e.jsx(U,{container:!0,spacing:3,children:a.map((t,c)=>e.jsx(U,{item:!0,xs:12,md:4,mb:5,children:e.jsx(Ce,{title:_e(t==null?void 0:t.label),total:(t==null?void 0:t.count)==0?"0":t.count,color:Ee[c],chart:{}})}))}),e.jsx(ye,{heading:"Order List",links:[{name:"Dashboard",href:V.dashboard.root},{name:"Order",href:V.dashboard.orders},{name:"List"}],sx:{mb:{xs:3,md:5}}}),e.jsx(We,{getAllDocument:z,getOrder:B,getAllBranch:E,branch:C,currentUser:y,open:D,setOpen:p,approve:n,cspCode:w}),e.jsxs(we,{sx:{height:(R==null?void 0:R.length)>0?"unset":700,flexGrow:{md:1},display:{md:"flex"},flexDirection:{md:"column"}},children:[e.jsx(Se,{value:o.status,onChange:Le,sx:{px:2.5,boxShadow:t=>`inset 0 -2px 0 0 ${ve(t.palette.grey[500],.08)}`},children:r.map(t=>e.jsx(De,{iconPosition:"end",value:t.value,label:t.label,icon:e.jsx(q,{variant:(t.value==="all"||t.value===o.status)&&"filled"||"soft",color:t.value==="Bharat Aata"&&"success"||t.value==="Bharat Daal"&&"warning"||t.value==="Bharat Rice"&&"error"||"default",children:["Bharat Aata","Bharat Rice","Bharat Daal"].includes(t.value)?i.filter(c=>c.commodity===t.value).length:i.length})},t.value))}),e.jsx(Ae,{disableRowSelectionOnClick:!0,rows:R,columns:O,getRowHeight:()=>"auto",pageSizeOptions:[5,10,25],initialState:{pagination:{paginationModel:{pageSize:5}}},columnVisibilityModel:ue,onColumnVisibilityModelChange:t=>J(t),slots:{toolbar:()=>e.jsx(e.Fragment,{children:e.jsxs(Be,{children:[e.jsxs(ce,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(re,{children:"Branch"}),e.jsx(oe,{value:C,onChange:ae,input:e.jsx(ie,{label:"Branch"}),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:K.map(t=>e.jsx(de,{value:t.branch_name,disabled:t.csp_count==0,children:t.branch_name},t.branch_name))})]}),C!=="All"&&e.jsxs(ce,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(re,{children:"CSP"}),e.jsx(oe,{value:w,onChange:te,input:e.jsx(ie,{label:"CSP"}),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:Z.map(t=>e.jsx(de,{value:t.csp_code,disabled:t.order_count==0,children:t.name},t.csp_code))})]}),W&&e.jsx($e,{filters:o,onFilters:T,onResetFilters:se,results:R.length,sx:{p:2.5,pt:0}}),e.jsxs(Re,{spacing:1,flexGrow:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[!!f.length&&e.jsxs(P,{size:"small",color:"error",startIcon:e.jsx(Oe,{icon:"solar:trash-bin-trash-bold"}),onClick:x.onTrue,children:["Delete (",f.length,")"]}),e.jsx(ke,{}),e.jsx(Fe,{})]}),e.jsx(Ge,{filters:o,onFilters:T,roleOptions:Te,branchOptions:["hello"],dateError:S,dayError:ee})]})}),noRowsOverlay:()=>e.jsx(Y,{title:"No Data"}),noResultsOverlay:()=>e.jsx(Y,{title:"No results found"})},slotProps:{columnsPanel:{getTogglableColumns:Me}}})]})]}),e.jsx(Ne,{open:x.value,onClose:x.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",f.length," "]})," items?"]}),action:e.jsx(P,{variant:"contained",color:"error",onClick:()=>{u(),x.onFalse()},children:"Delete"})})]})}function tt({inputData:s,filters:m,dateError:x,dayError:k}){const{stock:_,publish:i,status:h,commodity:o,name:d,branch:f,startDate:b,endDate:D,startDay:p,endDay:y,category:j}=m;return _.length&&(s=s.filter(n=>_.includes(n.inventoryType))),x||b&&D&&(s=s.filter(n=>Q(n.created_at,b,D))),k||p&&y&&(s=s.filter(n=>Q(n.created_at,p,y))),i.length&&(s=s.filter(n=>i.includes(n.publish))),d&&(s=s.filter(n=>n.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),j.length&&(s=s.filter(n=>j.includes(n.category))),h!=="all"&&(s=s.filter(n=>n.commodity===h)),o.length&&(s=s.filter(n=>o.includes(n.nccf_order_status))),f.length&&(s=s.filter(n=>f.includes(n.branch))),s}function st(){const{vendor:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsx("title",{children:" Dashboard: Order List"})}),(s==null?void 0:s.category)==="branch"?e.jsx(Je,{}):e.jsx(et,{})]})}export{st as default};