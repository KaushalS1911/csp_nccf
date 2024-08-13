import{j as e,bQ as p,bR as b,bS as x,bT as v,bU as j,bM as d,bN as a,ez as y,c as R,h as f,i as T,ba as H,W as L,T as B,a8 as W,cX as k,r as S,cY as z,S as E,c9 as w,d0 as U,cw as G,d2 as N,d3 as $,d5 as F,cu as M,p as _,C as K,q as m,bK as P,H as O}from"./index-V6uUDW8I.js";import{C as J}from"./component-hero-7r7vDAGT.js";import{C as u}from"./component-block-1ZAJfUqo.js";function h(n,s,i,r,c){return{name:n,calories:s,fat:i,carbs:r,protein:c}}const X=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)],q=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function Q(){return e.jsx(p,{sx:{mt:3,overflow:"unset"},children:e.jsx(b,{children:e.jsxs(x,{sx:{minWidth:800},children:[e.jsx(v,{headLabel:q}),e.jsx(j,{children:X.map(n=>e.jsxs(d,{children:[e.jsx(a,{children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:n.carbs}),e.jsx(a,{align:"right",children:n.protein})]},n.name))})]})})})}function g(n,s,i,r,c,l){return{name:n,calories:s,fat:i,carbs:r,protein:c,price:l,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}const V=[g("Frozen yoghurt",159,6,24,4,3.99),g("Ice cream sandwich",237,9,37,4.3,4.99),g("Eclair",262,16,24,6,3.79),g("Cupcake",305,3.7,67,4.3,2.5),g("Gingerbread",356,16,49,3.9,1.5)];function Y(){return e.jsx(p,{sx:{mt:3,overflow:"unset"},children:e.jsx(b,{children:e.jsxs(x,{sx:{minWidth:800},children:[e.jsx(y,{children:e.jsxs(d,{children:[e.jsx(a,{}),e.jsx(a,{children:"Dessert (100g serving)"}),e.jsx(a,{align:"right",children:"Calories"}),e.jsx(a,{align:"right",children:"Fat (g)"}),e.jsx(a,{align:"right",children:"Carbs (g)"}),e.jsx(a,{align:"right",children:"Protein (g)"})]})}),e.jsx(j,{children:V.map(n=>e.jsx(I,{row:n},n.name))})]})})})}function I({row:n}){const s=R();return e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(a,{children:e.jsx(f,{size:"small",color:s.value?"inherit":"default",onClick:s.onToggle,children:e.jsx(T,{icon:s.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),e.jsx(a,{component:"th",scope:"row",children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:n.carbs}),e.jsx(a,{align:"right",children:n.protein})]}),e.jsx(d,{children:e.jsx(a,{sx:{py:0},colSpan:6,children:e.jsx(H,{in:s.value,unmountOnExit:!0,children:e.jsxs(L,{variant:"outlined",sx:{py:2,borderRadius:1.5,...s.value&&{boxShadow:i=>i.customShadows.z20}},children:[e.jsx(B,{variant:"h6",sx:{m:2,mt:0},children:"History"}),e.jsxs(x,{size:"small","aria-label":"purchases",children:[e.jsx(y,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Date"}),e.jsx(a,{children:"Customer"}),e.jsx(a,{align:"right",children:"Amount"}),e.jsx(a,{align:"right",children:"Total price ($)"})]})}),e.jsx(j,{children:n.history.map(i=>e.jsxs(d,{children:[e.jsx(a,{component:"th",scope:"row",children:i.date}),e.jsx(a,{children:i.customerId}),e.jsx(a,{align:"right",children:i.amount}),e.jsx(a,{align:"right",children:Math.round(i.amount*n.price*100)/100})]},i.date))})]})]})})})})]})}I.propTypes={row:W.object};function o(n,s,i,r,c){return{name:n,calories:s,fat:i,carbs:r,protein:c}}const Z=[o("Cupcake",305,3.7,67,4.3),o("Donut",452,25,51,4.9),o("Eclair",262,16,24,6),o("Frozen yoghurt",159,6,24,4),o("Gingerbread",356,16,49,3.9),o("Honeycomb",408,3.2,87,6.5),o("Ice cream sandwich",237,9,37,4.3),o("Jelly Bean",375,0,94,0),o("KitKat",518,26,65,7),o("Lollipop",392,.2,98,0),o("Marshmallow",318,0,81,2),o("Nougat",360,19,9,37)],ee=[{id:"name",label:"Dessert (100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat (g)",align:"center"},{id:"carbs",label:"Carbs (g)",align:"center"},{id:"protein",label:"Protein (g)",align:"center"}];function ne(){const n=k({defaultOrderBy:"calories"}),[s,i]=S.useState([]);S.useEffect(()=>{i(Z)},[]);const r=ae({inputData:s,comparator:z(n.order,n.orderBy)}),c=n.dense?34:54;return e.jsxs("div",{children:[e.jsxs(E,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[e.jsx(B,{variant:"h6",children:"Sorting & Selecting"}),e.jsx(w,{title:"Filter list",children:e.jsx(f,{children:e.jsx(T,{icon:"ic:round-filter-list"})})})]}),e.jsxs(p,{sx:{position:"relative",overflow:"unset"},children:[e.jsx(U,{dense:n.dense,numSelected:n.selected.length,rowCount:s.length,onSelectAllRows:l=>n.onSelectAllRows(l,s.map(C=>C.name)),action:e.jsx(w,{title:"Delete",children:e.jsx(f,{color:"primary",children:e.jsx(T,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(b,{children:e.jsxs(x,{size:n.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(v,{order:n.order,orderBy:n.orderBy,headLabel:ee,rowCount:s.length,numSelected:n.selected.length,onSort:n.onSort,onSelectAllRows:l=>n.onSelectAllRows(l,s.map(C=>C.name))}),e.jsxs(j,{children:[r.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(l=>e.jsxs(d,{hover:!0,onClick:()=>n.onSelectRow(l.name),selected:n.selected.includes(l.name),children:[e.jsx(a,{padding:"checkbox",children:e.jsx(G,{checked:n.selected.includes(l.name)})}),e.jsxs(a,{children:[" ",l.name," "]}),e.jsx(a,{align:"center",children:l.calories}),e.jsx(a,{align:"center",children:l.fat}),e.jsx(a,{align:"center",children:l.carbs}),e.jsx(a,{align:"center",children:l.protein})]},l.name)),e.jsx(N,{height:c,emptyRows:$(n.page,n.rowsPerPage,s.length)})]})]})})]}),e.jsx(F,{count:r.length,page:n.page,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage,dense:n.dense,onChangeDense:n.onChangeDense})]})}function ae({inputData:n,comparator:s}){const i=n.map((r,c)=>[r,c]);return i.sort((r,c)=>{const l=s(r[0],c[0]);return l!==0?l:r[1]-c[1]}),n=i.map(r=>r[0]),n}function t(n,s,i,r){const c=i/r;return{name:n,code:s,population:i,size:r,density:c}}const A=[t("India","IN",1324171354,3287263),t("China","CN",1403500365,9596961),t("Italy","IT",60483973,301340),t("United States","US",327167434,9833520),t("Canada","CA",37602103,9984670),t("Australia","AU",25475400,7692024),t("Germany","DE",83019200,357578),t("Ireland","IE",4857e3,70273),t("Mexico","MX",126577691,1972550),t("Japan","JP",126317e3,377973),t("France","FR",67022e3,640679),t("United Kingdom","GB",67545757,242495),t("Russia","RU",146793744,17098246),t("Nigeria","NG",200962417,923768),t("Brazil","BR",210147125,8515767)],D=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:n=>n.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:n=>n.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:n=>n.toFixed(2)}];function se(){const n=k({defaultRowsPerPage:10});return e.jsxs(e.Fragment,{children:[e.jsx(p,{sx:{overflow:"unset"},children:e.jsx(b,{sx:{maxHeight:400},children:e.jsxs(x,{stickyHeader:!0,sx:{minWidth:800},children:[e.jsxs(y,{children:[e.jsxs(d,{children:[e.jsx(a,{align:"center",colSpan:2,sx:{background:s=>s.palette.background.paper},children:"Country"}),e.jsx(a,{align:"center",colSpan:3,sx:{background:s=>s.palette.background.paper},children:"Details"})]}),e.jsx(d,{children:D.map(s=>e.jsx(a,{align:s.align,style:{top:56,minWidth:s.minWidth},children:s.label},s.id))})]}),e.jsx(j,{children:A.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(s=>e.jsx(d,{hover:!0,role:"checkbox",tabIndex:-1,children:D.map(i=>{const r=s[i.id];return e.jsx(a,{align:i.align,children:i.format&&typeof r=="number"?i.format(r):r},i.id)})},s.code))})]})})}),e.jsx(F,{count:A.length,page:n.page,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage})]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx(M,{heading:"Table",links:[{name:"Components",href:_.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})}),e.jsx(K,{sx:{my:10},children:e.jsxs(E,{spacing:3,children:[e.jsx(u,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(P,{title:"Basic Table"}),e.jsx(Q,{})]})}),e.jsx(u,{children:e.jsx(m,{sx:{width:1},children:e.jsx(ne,{})})}),e.jsx(u,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(P,{title:"Grouping & FixedHeader"}),e.jsx(se,{})]})}),e.jsx(u,{children:e.jsxs(m,{sx:{width:1},children:[e.jsx(P,{title:"Collapsible Table"}),e.jsx(Y,{})]})})]})})]})}function ce(){return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx("title",{children:" MUI: Table"})}),e.jsx(ie,{})]})}export{ce as default};