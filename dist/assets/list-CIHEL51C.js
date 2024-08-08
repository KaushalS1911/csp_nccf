import{r as a,j as e,cu as B,p as D,C as T,W as o,gA as d,ag as n,gt as r,i as t,av as i,O as C,gC as k,ba as A,au as u,cw as F,gD as w,h as E,aB as g,H}from"./index-7CNMmWvO.js";import{C as J}from"./component-hero-fO-N3ZVl.js";import{C as x}from"./component-block-uZ4vogOB.js";import{M}from"./Masonry-8HRxyxf1.js";import{L as f}from"./ListItemAvatar-TR6B8cmU.js";function W(h){return e.jsx(n,{component:"a",...h})}function N(){const[h,I]=a.useState(!0),[j,L]=a.useState(1),[b,S]=a.useState([0]),[m,v]=a.useState(["wifi"]),O=a.useCallback(()=>{I(s=>!s)},[]),p=a.useCallback((s,l)=>{L(l)},[]),P=s=>()=>{const l=b.indexOf(s),c=[...b];l===-1?c.push(s):c.splice(l,1),S(c)},y=s=>()=>{const l=m.indexOf(s),c=[...m];l===-1?c.push(s):c.splice(l,1),v(c)};return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx(B,{heading:"List",links:[{name:"Components",href:D.components},{name:"Lists"}],moreLink:["https://mui.com/components/lists"]})}),e.jsx(T,{sx:{my:10},children:e.jsxs(M,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(x,{title:"Simple",children:e.jsxs(o,{variant:"outlined",sx:{width:1},children:[e.jsxs(d,{component:"nav","aria-label":"main mailbox folders",children:[e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{primary:"Drafts"})]})]}),e.jsx(C,{}),e.jsxs(d,{component:"nav","aria-label":"secondary mailbox folders",children:[e.jsx(n,{children:e.jsx(i,{primary:"Trash"})}),e.jsx(W,{href:"#simple-list",children:e.jsx(i,{primary:"Spam"})})]})]})}),e.jsx(x,{title:"Nested",children:e.jsx(o,{variant:"outlined",sx:{width:1},children:e.jsxs(d,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:e.jsx(k,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"iconamoon:send-fill",width:24})}),e.jsx(i,{primary:"Sent mail"})]}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{primary:"Drafts"})]}),e.jsxs(n,{onClick:O,children:[e.jsx(r,{children:e.jsx(t,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(i,{primary:"Inbox"}),h?e.jsx(t,{icon:"eva:arrow-ios-upward-fill"}):e.jsx(t,{icon:"eva:arrow-ios-downward-fill"})]}),e.jsx(A,{in:h,unmountOnExit:!0,children:e.jsx(d,{component:"div",disablePadding:!0,children:e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"ic:round-star-border",width:24})}),e.jsx(i,{primary:"Starred"})]})})})]})})}),e.jsx(x,{title:"Folder",children:e.jsx(o,{variant:"outlined",sx:{width:1},children:e.jsxs(d,{children:[e.jsxs(n,{children:[e.jsx(f,{children:e.jsx(u,{children:e.jsx(t,{icon:"ic:baseline-image",width:24})})}),e.jsx(i,{primary:"Photos",secondary:"Jan 9, 2014"})]}),e.jsxs(n,{children:[e.jsx(f,{children:e.jsx(u,{children:e.jsx(t,{icon:"ic:baseline-work",width:24})})}),e.jsx(i,{primary:"Work",secondary:"Jan 7, 2014"})]}),e.jsxs(n,{children:[e.jsx(f,{children:e.jsx(u,{children:e.jsx(t,{icon:"ic:round-beach-access",width:24})})}),e.jsx(i,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})}),e.jsx(x,{title:"Selected",children:e.jsxs(o,{variant:"outlined",sx:{width:1},children:[e.jsxs(d,{component:"nav","aria-label":"main mailbox folders",children:[e.jsxs(n,{selected:j===0,onClick:s=>p(s,0),children:[e.jsx(r,{children:e.jsx(t,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(n,{selected:j===1,onClick:s=>p(s,1),children:[e.jsx(r,{children:e.jsx(t,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{primary:"Drafts"})]})]}),e.jsx(C,{}),e.jsxs(d,{component:"nav","aria-label":"secondary mailbox folder",children:[e.jsx(n,{selected:j===2,onClick:s=>p(s,2),children:e.jsx(i,{primary:"Trash"})}),e.jsx(n,{selected:j===3,onClick:s=>p(s,3),children:e.jsx(i,{primary:"Spam"})})]})]})}),e.jsx(x,{title:"Controls",children:e.jsx(o,{variant:"outlined",sx:{width:1},children:e.jsx(d,{children:[0,1,2,3].map(s=>{const l=`checkbox-list-label-${s}`;return e.jsxs(n,{role:void 0,dense:!0,onClick:P(s),children:[e.jsx(r,{children:e.jsx(F,{edge:"start",checked:b.indexOf(s)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":l}})}),e.jsx(i,{id:l,primary:`Line item ${s+1}`}),e.jsx(w,{children:e.jsx(E,{edge:"end",children:e.jsx(t,{icon:"solar:chat-round-dots-bold",width:24})})})]},s)})})})}),e.jsx(x,{title:"Switch",children:e.jsx(o,{variant:"outlined",sx:{width:1},children:e.jsxs(d,{subheader:e.jsx(k,{children:"Settings"}),children:[e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"ic:baseline-wifi",width:24})}),e.jsx(i,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),e.jsx(w,{children:e.jsx(g,{edge:"end",onChange:y("wifi"),checked:m.indexOf("wifi")!==-1,inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(t,{icon:"ic:baseline-bluetooth",width:24})}),e.jsx(i,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),e.jsx(w,{children:e.jsx(g,{edge:"end",onChange:y("bluetooth"),checked:m.indexOf("bluetooth")!==-1,inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})]})})]})}function z(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" MUI: List"})}),e.jsx(N,{})]})}export{z as default};