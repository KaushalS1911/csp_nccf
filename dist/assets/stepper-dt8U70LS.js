import{bb as U,bc as D,ay as f,b3 as F,ba as z,r as m,b4 as G,b5 as O,j as e,b7 as W,b8 as V,B as d,W as x,a4 as C,T as u,D as c,i as N,a8 as S,a3 as $,cu as _,p as Y,C as q,S as J,H as K}from"./index-AyhP95hO.js";import{C as X}from"./component-hero-FXW6jF7h.js";import{C as R}from"./component-block-fJyFI6v9.js";import{e as Z,f as ee,S as w,a as k,b as L,c as Q,d as p}from"./Stepper-kTEmI64S.js";function te(t){return U("MuiStepContent",t)}D("MuiStepContent",["root","last","transition"]);const ne=["children","className","TransitionComponent","transitionDuration","TransitionProps"],se=t=>{const{classes:s,last:r}=t;return V({root:["root",r&&"last"],transition:["transition"]},te,s)},oe=f("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,r.last&&s.last]}})(({ownerState:t,theme:s})=>F({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:s.vars?`1px solid ${s.vars.palette.StepContent.border}`:`1px solid ${s.palette.mode==="light"?s.palette.grey[400]:s.palette.grey[600]}`},t.last&&{borderLeft:"none"})),re=f(z,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,s)=>s.transition})({}),ie=m.forwardRef(function(s,r){const i=G({props:s,name:"MuiStepContent"}),{children:l,className:o,TransitionComponent:h=z,transitionDuration:b="auto",TransitionProps:y}=i,v=O(i,ne);m.useContext(Z);const{active:n,last:a,expanded:j}=m.useContext(ee),g=F({},i,{last:a}),P=se(g);let H=b;return b==="auto"&&!h.muiSupportAuto&&(H=void 0),e.jsx(oe,F({className:W(P.root,o),ref:r,ownerState:g},v,{children:e.jsx(re,F({as:h,in:n||j,className:P.transition,ownerState:g,timeout:H,unmountOnExit:!0},y,{children:l}))}))}),ae=ie,I=["Select campaign settings","Create an ad group","Create an ad"],le=f(Q)(({theme:t})=>({[`&.${p.alternativeLabel}`]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},[`&.${p.active}`]:{[`& .${p.line}`]:{borderColor:t.palette.success.main}},[`&.${p.completed}`]:{[`& .${p.line}`]:{borderColor:t.palette.success.main}},[`& .${p.line}`]:{borderRadius:1,borderTopWidth:3,borderColor:t.palette.divider}})),ce=f("div")(({theme:t,ownerState:s})=>({height:22,display:"flex",alignItems:"center",color:t.palette.text.disabled,...s.active&&{color:t.palette.success.main},"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.palette.success.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));function E(t){const{active:s,completed:r,className:i}=t;return e.jsx(ce,{ownerState:{active:s},className:i,children:r?e.jsx(N,{icon:"eva:checkmark-fill",className:"QontoStepIcon-completedIcon",width:24,height:24}):e.jsx("div",{className:"QontoStepIcon-circle"})})}E.propTypes={active:S.bool,className:S.string,completed:S.bool};const pe=f(Q)(({theme:t})=>({[`&.${p.alternativeLabel}`]:{top:22},[`&.${p.active}`]:{[`& .${p.line}`]:{...$({startColor:t.palette.error.light,endColor:t.palette.error.main})}},[`&.${p.completed}`]:{[`& .${p.line}`]:{...$({startColor:t.palette.error.light,endColor:t.palette.error.main})}},[`& .${p.line}`]:{height:3,border:0,borderRadius:1,backgroundColor:t.palette.divider}})),de=f("div")(({theme:t,ownerState:s})=>({zIndex:1,width:50,height:50,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.text.disabled,backgroundColor:t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[700],...s.active&&{boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)",color:t.palette.common.white,...$({startColor:t.palette.error.light,endColor:t.palette.error.main})},...s.completed&&{color:t.palette.common.white,...$({startColor:t.palette.error.light,endColor:t.palette.error.main})}}));function M(t){const{active:s,completed:r,className:i,icon:l}=t,o={1:e.jsx(N,{icon:"eva:settings-2-outline",width:24}),2:e.jsx(N,{icon:"eva:person-add-outline",width:24}),3:e.jsx(N,{icon:"eva:monitor-outline",width:24})};return e.jsx(de,{ownerState:{completed:r,active:s},className:i,children:o[String(l)]})}M.propTypes={active:S.bool,className:S.string,completed:S.bool,icon:S.number};function xe(t){switch(t){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}function he(){const[t,s]=m.useState(0),r=()=>{s(o=>o+1)},i=()=>{s(o=>o-1)},l=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{alternativeLabel:!0,activeStep:t,connector:e.jsx(le,{}),children:I.map(o=>e.jsx(k,{children:e.jsx(L,{StepIconComponent:E,children:o})},o))}),e.jsx(d,{sx:{mb:5}}),e.jsx(w,{alternativeLabel:!0,activeStep:t,connector:e.jsx(pe,{}),children:I.map(o=>e.jsx(k,{children:e.jsx(L,{StepIconComponent:M,children:o})},o))}),t===I.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{p:3,my:3,minHeight:120,bgcolor:o=>C(o.palette.grey[500],.12)},children:e.jsx(u,{sx:{my:1},children:"All steps completed - you're finished"})}),e.jsx(c,{color:"inherit",onClick:l,sx:{mr:1},children:"Reset"})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{p:3,my:3,minHeight:120,bgcolor:o=>C(o.palette.grey[500],.12)},children:e.jsx(u,{sx:{my:1},children:xe(t)})}),e.jsxs(d,{sx:{textAlign:"right"},children:[e.jsx(c,{disabled:t===0,onClick:i,sx:{mr:1},children:"Back"}),e.jsx(c,{variant:"contained",onClick:r,sx:{mr:1},children:t===I.length-1?"Finish":"Next"})]})]})]})}const T=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function ue(){const[t,s]=m.useState(0),r=()=>{s(o=>o+1)},i=()=>{s(o=>o-1)},l=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{activeStep:t,orientation:"vertical",children:T.map((o,h)=>e.jsxs(k,{children:[e.jsx(L,{optional:h===2?e.jsx(u,{variant:"caption",children:"Last step"}):null,children:o.label}),e.jsxs(ae,{children:[e.jsx(u,{children:o.description}),e.jsxs(d,{sx:{mt:3},children:[e.jsx(c,{variant:"contained",onClick:r,children:h===T.length-1?"Finish":"Continue"}),e.jsx(c,{disabled:h===0,onClick:i,children:"Back"})]})]})]},o.label))}),t===T.length&&e.jsxs(x,{sx:{p:3,mt:3,bgcolor:o=>C(o.palette.grey[500],.12)},children:[e.jsx(u,{sx:{mb:2},children:"All steps completed - you're finished"}),e.jsx(c,{onClick:l,children:"Reset"})]})]})}const A=["Select campaign settings","Create an ad group","Create an ad"];function me(){const[t,s]=m.useState(0),[r,i]=m.useState(),l=n=>n===1,o=n=>r==null?void 0:r.has(n),h=()=>{let n=r;o(t)&&(n=new Set(n.values()),n.delete(t)),s(a=>a+1),i(n)},b=()=>{s(n=>n-1)},y=()=>{if(!l(t))throw new Error("You can't skip a step that isn't optional.");s(n=>n+1),i(n=>{const a=new Set(n.values());return a.add(t),a})},v=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{activeStep:t,children:A.map((n,a)=>{const j={},g={};return l(a)&&(g.optional=e.jsx(u,{variant:"caption",children:"Optional"})),o(a)&&(j.completed=!1),e.jsx(k,{...j,children:e.jsx(L,{...g,children:n})},n)})}),t===A.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>C(n.palette.grey[500],.12)},children:e.jsx(u,{sx:{my:1},children:"All steps completed - you're finished"})}),e.jsxs(d,{sx:{display:"flex"},children:[e.jsx(d,{sx:{flexGrow:1}}),e.jsx(c,{onClick:v,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>C(n.palette.grey[500],.12)},children:e.jsxs(u,{sx:{my:1},children:[" Step ",t+1]})}),e.jsxs(d,{sx:{display:"flex"},children:[e.jsx(c,{color:"inherit",disabled:t===0,onClick:b,sx:{mr:1},children:"Back"}),e.jsx(d,{sx:{flexGrow:1}}),l(t)&&e.jsx(c,{color:"inherit",onClick:y,sx:{mr:1},children:"Skip"}),e.jsx(c,{variant:"contained",onClick:h,children:t===A.length-1?"Finish":"Next"})]})]})]})}const B=["Select campaign settings","Create an ad group","Create an ad"];function ge(){const[t,s]=m.useState(0),[r,i]=m.useState(),l=n=>n===1,o=n=>r==null?void 0:r.has(n),h=()=>{let n=r;o(t)&&(n=new Set(n.values()),n.delete(t)),s(a=>a+1),i(n)},b=()=>{s(n=>n-1)},y=()=>{if(!l(t))throw new Error("You can't skip a step that isn't optional.");s(n=>n+1),i(n=>{const a=new Set(n.values());return a.add(t),a})},v=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{activeStep:t,alternativeLabel:!0,children:B.map((n,a)=>{const j={},g={};return o(a)&&(j.completed=!1),e.jsx(k,{...j,children:e.jsx(L,{...g,children:n})},n)})}),t===B.length?e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>C(n.palette.grey[500],.12)},children:e.jsx(u,{sx:{my:1},children:"All steps completed - you're finished"})}),e.jsxs(d,{sx:{display:"flex"},children:[e.jsx(d,{sx:{flexGrow:1}}),e.jsx(c,{onClick:v,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>C(n.palette.grey[500],.12)},children:e.jsxs(u,{sx:{my:1},children:[" Step ",t+1]})}),e.jsxs(d,{sx:{display:"flex"},children:[e.jsx(c,{color:"inherit",disabled:t===0,onClick:b,sx:{mr:1},children:"Back"}),e.jsx(d,{sx:{flexGrow:1}}),l(t)&&e.jsx(c,{color:"inherit",onClick:y,sx:{mr:1},children:"Skip"}),e.jsx(c,{variant:"contained",onClick:h,children:t===B.length-1?"Finish":"Next"})]})]})]})}function je(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx(_,{heading:"Stepper",links:[{name:"Components",href:Y.components},{name:"Stepper"}],moreLink:["https://mui.com/components/steppers"]})}),e.jsx(q,{sx:{my:10},children:e.jsxs(J,{spacing:3,children:[e.jsx(R,{title:"Horizontal Linear Stepper",children:e.jsx(x,{variant:"outlined",sx:{p:3,width:1},children:e.jsx(me,{})})}),e.jsx(R,{title:"Linear Alternative Label",children:e.jsx(x,{variant:"outlined",sx:{p:3,width:1},children:e.jsx(ge,{})})}),e.jsx(R,{title:"Vertical Linear Stepper",children:e.jsx(x,{variant:"outlined",sx:{p:3,width:1},children:e.jsx(ue,{})})}),e.jsx(R,{title:"Customized Stepper",children:e.jsx(x,{variant:"outlined",sx:{p:3,width:1},children:e.jsx(he,{})})})]})})]})}function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" MUI: Stepper"})}),e.jsx(je,{})]})}export{ye as default};
