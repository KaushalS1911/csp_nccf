import{j as e,T as a,aI as h,S as i,B as t,ac as p,I as j,D as m,ad as l,aa as d,at as y,h as g,i as f,_ as c,H as b}from"./index-XFh7EM9A.js";import{a as v}from"./use-countdown-Zjd4wol6.js";function S(){const{days:o,hours:r,minutes:x,seconds:u}=v(new Date("07/07/2024 21:30"));return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"h3",sx:{mb:2},children:"Coming Soon!"}),e.jsx(a,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),e.jsx(h,{sx:{my:10,height:240}}),e.jsxs(i,{direction:"row",justifyContent:"center",divider:e.jsx(t,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[e.jsx(s,{label:"Days",value:o}),e.jsx(s,{label:"Hours",value:r}),e.jsx(s,{label:"Minutes",value:x}),e.jsx(s,{label:"Seconds",value:u})]}),e.jsx(p,{fullWidth:!0,placeholder:"Enter your email",InputProps:{endAdornment:e.jsx(j,{position:"end",children:e.jsx(m,{variant:"contained",size:"large",children:"Notify Me"})}),sx:{pr:.5,[`&.${l.focused}`]:{boxShadow:n=>n.customShadows.z20,transition:n=>n.transitions.create(["box-shadow"],{duration:n.transitions.duration.shorter}),[`& .${l.notchedOutline}`]:{border:n=>`solid 1px ${d(n.palette.grey[500],.32)}`}}}},sx:{my:5}}),e.jsx(i,{spacing:1,alignItems:"center",justifyContent:"center",direction:"row",children:y.map(n=>e.jsx(g,{sx:{color:n.color,"&:hover":{bgcolor:d(n.color,.08)}},children:e.jsx(f,{icon:n.icon})},n.name))})]})}function s({label:o,value:r}){return e.jsxs("div",{children:[e.jsxs(t,{children:[" ",r," "]}),e.jsx(t,{sx:{color:"text.secondary",typography:"body1"},children:o})]})}s.propTypes={label:c.string,value:c.string};function I(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:" Coming Soon"})}),e.jsx(S,{})]})}export{I as default};
