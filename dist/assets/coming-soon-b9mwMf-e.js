import{j as n,T as a,aC as h,S as i,B as t,a5 as p,I as j,w as m,a6 as l,a3 as d,an as y,h as g,i as f,a7 as c,H as b}from"./index-A8uSmfRr.js";import{a as v}from"./use-countdown-L39KspVC.js";function w(){const{days:o,hours:r,minutes:x,seconds:u}=v(new Date("07/07/2024 21:30"));return n.jsxs(n.Fragment,{children:[n.jsx(a,{variant:"h3",sx:{mb:2},children:"Coming Soon!"}),n.jsx(a,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),n.jsx(h,{sx:{my:10,height:240}}),n.jsxs(i,{direction:"row",justifyContent:"center",divider:n.jsx(t,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[n.jsx(s,{label:"Days",value:o}),n.jsx(s,{label:"Hours",value:r}),n.jsx(s,{label:"Minutes",value:x}),n.jsx(s,{label:"Seconds",value:u})]}),n.jsx(p,{fullWidth:!0,placeholder:"Enter your email",InputProps:{endAdornment:n.jsx(j,{position:"end",children:n.jsx(m,{variant:"contained",size:"large",children:"Notify Me"})}),sx:{pr:.5,[`&.${l.focused}`]:{boxShadow:e=>e.customShadows.z20,transition:e=>e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shorter}),[`& .${l.notchedOutline}`]:{border:e=>`solid 1px ${d(e.palette.grey[500],.32)}`}}}},sx:{my:5}}),n.jsx(i,{spacing:1,alignItems:"center",justifyContent:"center",direction:"row",children:y.map(e=>n.jsx(g,{sx:{color:e.color,"&:hover":{bgcolor:d(e.color,.08)}},children:n.jsx(f,{icon:e.icon})},e.name))})]})}function s({label:o,value:r}){return n.jsxs("div",{children:[n.jsxs(t,{children:[" ",r," "]}),n.jsx(t,{sx:{color:"text.secondary",typography:"body1"},children:o})]})}s.propTypes={label:c.string,value:c.string};function I(){return n.jsxs(n.Fragment,{children:[n.jsx(b,{children:n.jsx("title",{children:" Coming Soon"})}),n.jsx(w,{})]})}export{I as default};