import{bh as Je,bg as Qe,aD as J,c3 as me,b8 as S,au as Xe,r as h,b9 as Ye,a8 as Ie,ba as ce,bb as Dt,bn as Lt,j as e,bc as de,c9 as Pt,bd as et,ca as It,cb as Se,cc as he,cd as ue,ce as je,bw as Fe,D as W,i as u,B as A,by as Ae,cf as se,_ as r,a as Ue,cg as Ft,c8 as At,ch as Ut,ac as tt,I as Rt,ci as Et,cj as $t,az as B,L as Re,T as b,ag as Q,S as p,a0 as Ge,ck as C,q as oe,aF as Ot,aB as ge,R as _,p as D,h as Z,cl as V,ak as Te,cm as st,cn as zt,a9 as Mt,aa as ke,C as M,aA as Vt,at as Bt,W as Wt,bx as Nt,k as be,O as Ee,bT as Gt,co as $e,a_ as Oe,V as qt,c as ot,d as it,e as z,cp as _t,cq as qe,f as nt,am as F,x as pe,aG as _e,F as rt,bM as He,g as te,cr as Ht,cs as Kt,N as Ke,ct as Ze,cu as xe,o as at,aK as Zt,cv as lt,cw as Jt,cx as ct,cy as dt,cz as Qt,cA as Xt,s as Yt}from"./index-XFh7EM9A.js";import{T as De}from"./text-max-line-Q7eJl-W5.js";import{Z as es}from"./Zoom-EKLv1Dla.js";const ts=[{value:"published",label:"Published"},{value:"draft",label:"Draft"}],Rs=[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}];function ss(t){return Qe("MuiSpeedDial",t)}const os=Je("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),ae=os,is=["ref"],ns=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],rs=["ref"],as=t=>{const{classes:s,open:o,direction:i}=t,n={root:["root",`direction${me(i)}`],fab:["fab"],actions:["actions",!o&&"actionsClosed"]};return et(n,ss,s)};function ee(t){if(t==="up"||t==="down")return"vertical";if(t==="right"||t==="left")return"horizontal"}function ls(t,s,o){return t<s?s:t>o?o:t}const O=32,le=16,cs=J("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,s[`direction${me(o.direction)}`]]}})(({theme:t,ownerState:s})=>S({zIndex:(t.vars||t).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},s.direction==="up"&&{flexDirection:"column-reverse",[`& .${ae.actions}`]:{flexDirection:"column-reverse",marginBottom:-O,paddingBottom:le+O}},s.direction==="down"&&{flexDirection:"column",[`& .${ae.actions}`]:{flexDirection:"column",marginTop:-O,paddingTop:le+O}},s.direction==="left"&&{flexDirection:"row-reverse",[`& .${ae.actions}`]:{flexDirection:"row-reverse",marginRight:-O,paddingRight:le+O}},s.direction==="right"&&{flexDirection:"row",[`& .${ae.actions}`]:{flexDirection:"row",marginLeft:-O,paddingLeft:le+O}})),ds=J(Xe,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(t,s)=>s.fab})(()=>({pointerEvents:"auto"})),ps=J("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.actions,!o.open&&s.actionsClosed]}})(({ownerState:t})=>S({display:"flex",pointerEvents:"auto"},!t.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),xs=h.forwardRef(function(s,o){const i=Ye({props:s,name:"MuiSpeedDial"}),n=Ie(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{ariaLabel:d,FabProps:{ref:j}={},children:l,className:x,direction:c="up",hidden:y=!1,icon:w,onBlur:T,onClose:f,onFocus:P,onKeyDown:R,onMouseEnter:N,onMouseLeave:E,onOpen:$,open:X,TransitionComponent:G=es,transitionDuration:g=a,TransitionProps:v}=i,L=ce(i.FabProps,is),Y=ce(i,ns),[I,H]=Dt({controlled:X,default:!1,name:"SpeedDial",state:"open"}),ie=S({},i,{open:I,direction:c}),ne=as(ie),K=h.useRef();h.useEffect(()=>()=>{clearTimeout(K.current)},[]);const ve=h.useRef(0),ye=h.useRef(),q=h.useRef([]);q.current=[q.current[0]];const ft=h.useCallback(m=>{q.current[0]=m},[]),vt=Lt(j,ft),yt=(m,k)=>U=>{q.current[m+1]=U,k&&k(U)},wt=m=>{R&&R(m);const k=m.key.replace("Arrow","").toLowerCase(),{current:U=k}=ye;if(m.key==="Escape"){H(!1),q.current[0].focus(),f&&f(m,"escapeKeyDown");return}if(ee(k)===ee(U)&&ee(k)!==void 0){m.preventDefault();const Ce=k===U?1:-1,re=ls(ve.current+Ce,0,q.current.length-1);q.current[re].focus(),ve.current=re,ye.current=U}};h.useEffect(()=>{I||(ve.current=0,ye.current=void 0)},[I]);const Be=m=>{m.type==="mouseleave"&&E&&E(m),m.type==="blur"&&T&&T(m),clearTimeout(K.current),m.type==="blur"?K.current=setTimeout(()=>{H(!1),f&&f(m,"blur")}):(H(!1),f&&f(m,"mouseLeave"))},Ct=m=>{L.onClick&&L.onClick(m),clearTimeout(K.current),I?(H(!1),f&&f(m,"toggle")):(H(!0),$&&$(m,"toggle"))},We=m=>{m.type==="mouseenter"&&N&&N(m),m.type==="focus"&&P&&P(m),clearTimeout(K.current),I||(K.current=setTimeout(()=>{H(!0),$&&$(m,{focus:"focus",mouseenter:"mouseEnter"}[m.type])}))},we=d.replace(/^[^a-z]+|[^\w:.-]+/gi,""),Ne=h.Children.toArray(l).filter(m=>h.isValidElement(m)),St=Ne.map((m,k)=>{const U=m.props,{FabProps:{ref:Ce}={},tooltipPlacement:re}=U,Tt=ce(U.FabProps,rs),kt=re||(ee(c)==="vertical"?"left":"top");return h.cloneElement(m,{FabProps:S({},Tt,{ref:yt(k,Ce)}),delay:30*(I?k:Ne.length-k),open:I,tooltipPlacement:kt,id:`${we}-action-${k}`})});return e.jsxs(cs,S({className:de(ne.root,x),ref:o,role:"presentation",onKeyDown:wt,onBlur:Be,onFocus:We,onMouseEnter:We,onMouseLeave:Be,ownerState:ie},Y,{children:[e.jsx(G,S({in:!y,timeout:g,unmountOnExit:!0},v,{children:e.jsx(ds,S({color:"primary","aria-label":d,"aria-haspopup":"true","aria-expanded":I,"aria-controls":`${we}-actions`},L,{onClick:Ct,className:de(ne.fab,L.className),ref:vt,ownerState:ie,children:h.isValidElement(w)&&Pt(w,["SpeedDialIcon"])?h.cloneElement(w,{open:I}):w}))})),e.jsx(ps,{id:`${we}-actions`,role:"menu","aria-orientation":ee(c),className:de(ne.actions,!I&&ne.actionsClosed),ownerState:ie,children:St})]}))}),ms=xs;function hs(t){return Qe("MuiSpeedDialAction",t)}const us=Je("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),js=us,gs=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],bs=t=>{const{open:s,tooltipPlacement:o,classes:i}=t,n={fab:["fab",!s&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${me(o)}`,!s&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return et(n,hs,i)},fs=J(Xe,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.fab,!o.open&&s.fabClosed]}})(({theme:t,ownerState:s})=>S({margin:8,color:(t.vars||t).palette.text.secondary,backgroundColor:(t.vars||t).palette.background.paper,"&:hover":{backgroundColor:t.vars?t.vars.palette.SpeedDialAction.fabHoverBg:It(t.palette.background.paper,.15)},transition:`${t.transitions.create("transform",{duration:t.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!s.open&&{opacity:0,transform:"scale(0)"})),vs=J("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.staticTooltip,!o.open&&s.staticTooltipClosed,s[`tooltipPlacement${me(o.tooltipPlacement)}`]]}})(({theme:t,ownerState:s})=>({position:"relative",display:"flex",alignItems:"center",[`& .${js.staticTooltipLabel}`]:S({transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.shorter}),opacity:1},!s.open&&{opacity:0,transform:"scale(0.5)"},s.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},s.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),ys=J("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(t,s)=>s.staticTooltipLabel})(({theme:t})=>S({position:"absolute"},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.paper,borderRadius:(t.vars||t).shape.borderRadius,boxShadow:(t.vars||t).shadows[1],color:(t.vars||t).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),ws=h.forwardRef(function(s,o){const i=Ye({props:s,name:"MuiSpeedDialAction"}),{className:n,delay:a=0,FabProps:d={},icon:j,id:l,open:x,TooltipClasses:c,tooltipOpen:y=!1,tooltipPlacement:w="left",tooltipTitle:T}=i,f=ce(i,gs),P=S({},i,{tooltipPlacement:w}),R=bs(P),[N,E]=h.useState(y),$=()=>{E(!1)},X=()=>{E(!0)},G={transitionDelay:`${a}ms`},g=e.jsx(fs,S({size:"small",className:de(R.fab,n),tabIndex:-1,role:"menuitem",ownerState:P},d,{style:S({},G,d.style),children:j}));return y?e.jsxs(vs,S({id:l,ref:o,className:R.staticTooltip,ownerState:P},f,{children:[e.jsx(ys,{style:G,id:`${l}-label`,className:R.staticTooltipLabel,ownerState:P,children:T}),h.cloneElement(g,{"aria-labelledby":`${l}-label`})]})):(!x&&N&&E(!1),e.jsx(Se,S({id:l,ref:o,title:T,placement:w,onClose:$,onOpen:X,open:x&&N,classes:c},f,{children:g})))}),Cs=ws;function Es(){const t=je.post.list,{data:s,isLoading:o,error:i,isValidating:n}=he(t,ue);return h.useMemo(()=>({posts:(s==null?void 0:s.posts)||[],postsLoading:o,postsError:i,postsValidating:n,postsEmpty:!o&&!(s!=null&&s.posts.length)}),[s==null?void 0:s.posts,i,o,n])}function ze(t){const s=t?[je.post.details,{params:{title:t}}]:"",{data:o,isLoading:i,error:n,isValidating:a}=he(s,ue);return h.useMemo(()=>({post:o==null?void 0:o.post,postLoading:i,postError:n,postValidating:a}),[o==null?void 0:o.post,n,i,a])}function Ss(t){const s=t?[je.post.latest,{params:{title:t}}]:"",{data:o,isLoading:i,error:n,isValidating:a}=he(s,ue);return h.useMemo(()=>({latestPosts:(o==null?void 0:o.latestPosts)||[],latestPostsLoading:i,latestPostsError:n,latestPostsValidating:a,latestPostsEmpty:!i&&!(o!=null&&o.latestPosts.length)}),[o==null?void 0:o.latestPosts,n,i,a])}function $s(t){const s=t?[je.post.search,{params:{query:t}}]:"",{data:o,isLoading:i,error:n,isValidating:a}=he(s,ue,{keepPreviousData:!0});return h.useMemo(()=>({searchResults:(o==null?void 0:o.results)||[],searchLoading:i,searchError:n,searchValidating:a,searchEmpty:!i&&!(o!=null&&o.results.length)}),[o==null?void 0:o.results,n,i,a])}function Ts({sort:t,sortOptions:s,onSort:o}){const i=Fe();return e.jsxs(e.Fragment,{children:[e.jsxs(W,{disableRipple:!0,color:"inherit",onClick:i.onOpen,endIcon:e.jsx(u,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold",textTransform:"capitalize"},children:["Sort By:",e.jsx(A,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:t})]}),e.jsx(Ae,{open:i.open,onClose:i.onClose,sx:{width:140},children:s.map(n=>e.jsx(se,{selected:t===n.value,onClick:()=>{i.onClose(),o(n.value)},children:n.label},n.value))})]})}Ts.propTypes={onSort:r.func,sort:r.string,sortOptions:r.array};function ks({query:t,results:s,onSearch:o,hrefItem:i,loading:n}){const a=Ue(),d=l=>{a.push(i(l))},j=l=>{t&&l.key==="Enter"&&d(t)};return e.jsx(Ft,{sx:{width:{xs:1,sm:260}},loading:n,autoHighlight:!0,popupIcon:null,options:s,onInputChange:(l,x)=>o(x),getOptionLabel:l=>l.title,noOptionsText:e.jsx(At,{query:t,sx:{bgcolor:"unset"}}),isOptionEqualToValue:(l,x)=>l.id===x.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${Ut.option}`]:{pl:.75}}}},renderInput:l=>e.jsx(tt,{...l,placeholder:"Search...",onKeyUp:j,InputProps:{...l.InputProps,startAdornment:e.jsx(Rt,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:e.jsxs(e.Fragment,{children:[n?e.jsx(u,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,l.InputProps.endAdornment]})}}),renderOption:(l,x,{inputValue:c})=>{const y=Et(x.title,c),w=$t(x.title,y);return h.createElement("li",{...l,key:x.id},e.jsx(B,{alt:x.title,src:x.coverUrl,variant:"rounded",sx:{width:48,height:48,flexShrink:0,mr:1.5,borderRadius:1}},x.id),e.jsx(Re,{underline:"none",onClick:()=>d(x.title),children:w.map((T,f)=>e.jsx(b,{component:"span",color:T.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:T.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:T.text},f))},c))}})}ks.propTypes={hrefItem:r.func,loading:r.bool,onSearch:r.func,query:r.string,results:r.array};function Me({variant:t="vertical",sx:s,...o}){const i=Q("up","sm");return t==="horizontal"?e.jsxs(p,{component:Ge,direction:"row",variant:"outlined",sx:{borderRadius:2,...s},...o,children:[e.jsxs(p,{spacing:2,flexGrow:1,sx:{p:3},children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(C,{variant:"circular",sx:{width:40,height:40}}),e.jsx(C,{sx:{width:24,height:12}})]}),e.jsx(C,{sx:{width:1,height:10}}),e.jsx(C,{sx:{width:"calc(100% - 40px)",height:10}}),e.jsx(C,{sx:{width:"calc(100% - 80px)",height:10}})]}),i&&e.jsx(p,{sx:{p:1},children:e.jsx(C,{sx:{width:170,height:240,flexShrink:0}})})]}):e.jsxs(p,{component:Ge,variant:"outlined",sx:{borderRadius:2,...s},...o,children:[e.jsx(p,{sx:{p:1},children:e.jsx(C,{sx:{paddingTop:"100%"}})}),e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",sx:{p:3,pt:2},children:[e.jsx(C,{variant:"circular",sx:{width:40,height:40,flexShrink:0}}),e.jsxs(p,{flexGrow:1,spacing:1,children:[e.jsx(C,{sx:{height:10}}),e.jsx(C,{sx:{width:.5,height:10}})]})]})]})}Me.propTypes={sx:r.object,variant:r.string};function pt({...t}){return e.jsxs(p,{...t,children:[e.jsx(C,{variant:"rectangular",sx:{height:480}}),e.jsxs(p,{sx:{width:1,maxWidth:720,mx:"auto"},children:[e.jsxs(p,{spacing:1,sx:{my:8},children:[e.jsx(C,{height:10}),e.jsx(C,{height:10,sx:{width:.9}}),e.jsx(C,{height:10,sx:{width:.8}})]}),e.jsx(C,{sx:{height:720}})]})]})}function xt({post:t}){const s=Fe(),o=Ue(),i=Q("up","sm"),{title:n,author:a,publish:d,coverUrl:j,createdAt:l,totalViews:x,totalShares:c,totalComments:y,description:w}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(p,{component:oe,direction:"row",children:[e.jsxs(p,{sx:{p:T=>T.spacing(3,3,2,3)},children:[e.jsxs(p,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2},children:[e.jsx(Ot,{variant:"soft",color:d==="published"&&"info"||"default",children:d}),e.jsx(A,{component:"span",sx:{typography:"caption",color:"text.disabled"},children:ge(l)})]}),e.jsxs(p,{spacing:1,flexGrow:1,children:[e.jsx(Re,{color:"inherit",component:_,href:D.dashboard.post.details(n),children:e.jsx(De,{variant:"subtitle2",line:2,children:n})}),e.jsx(De,{variant:"body2",sx:{color:"text.secondary"},children:w})]}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(Z,{color:s.open?"inherit":"default",onClick:s.onOpen,children:e.jsx(u,{icon:"eva:more-horizontal-fill"})}),e.jsxs(p,{spacing:1.5,flexGrow:1,direction:"row",flexWrap:"wrap",justifyContent:"flex-end",sx:{typography:"caption",color:"text.disabled"},children:[e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),V(y)]}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),V(x)]}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),V(c)]})]})]})]}),i&&e.jsxs(A,{sx:{width:180,height:240,position:"relative",flexShrink:0,p:1},children:[e.jsx(B,{alt:a.name,src:a.avatarUrl,sx:{position:"absolute",top:16,right:16,zIndex:9}}),e.jsx(Te,{alt:n,src:j,sx:{height:1,borderRadius:1.5}})]})]}),e.jsxs(Ae,{open:s.open,onClose:s.onClose,arrow:"bottom-center",sx:{width:140},children:[e.jsxs(se,{onClick:()=>{s.onClose(),o.push(D.dashboard.post.details(n))},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(se,{onClick:()=>{s.onClose(),o.push(D.dashboard.post.edit(n))},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(se,{onClick:()=>{s.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}xt.propTypes={post:r.shape({author:r.object,coverUrl:r.string,createdAt:r.oneOfType([r.string,r.instanceOf(Date)]),description:r.string,publish:r.string,title:r.string,totalComments:r.number,totalShares:r.number,totalViews:r.number})};function Ds({posts:t,loading:s}){const o=e.jsx(e.Fragment,{children:[...Array(16)].map((n,a)=>e.jsx(Me,{variant:"horizontal"},a))}),i=e.jsx(e.Fragment,{children:t.map(n=>e.jsx(xt,{post:n},n.id))});return e.jsxs(e.Fragment,{children:[e.jsx(A,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:s?o:i}),t.length>8&&e.jsx(st,{count:8,sx:{mt:8,[`& .${zt.ul}`]:{justifyContent:"center"}}})]})}Ds.propTypes={loading:r.bool,posts:r.array};function fe({title:t,author:s,coverUrl:o,createdAt:i}){const n=Ie(),a=Q("up","sm");return e.jsx(A,{sx:{height:480,overflow:"hidden",...Mt({imgUrl:o,startColor:`${ke(n.palette.grey[900],.64)} 0%`,endColor:`${ke(n.palette.grey[900],.64)} 100%`})},children:e.jsxs(M,{sx:{height:1,position:"relative"},children:[e.jsx(b,{variant:"h3",component:"h1",sx:{zIndex:9,color:"common.white",position:"absolute",maxWidth:480,pt:{xs:2,md:8}},children:t}),e.jsxs(p,{sx:{left:0,width:1,bottom:0,position:"absolute"},children:[s&&i&&e.jsxs(p,{direction:"row",alignItems:"center",sx:{px:{xs:2,md:3},pb:{xs:3,md:8}},children:[e.jsx(B,{alt:s.name,src:s.avatarUrl,sx:{width:64,height:64,mr:2}}),e.jsx(Vt,{sx:{color:"common.white"},primary:s.name,secondary:ge(i),primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{color:"inherit",sx:{opacity:.64}}})]}),e.jsx(ms,{direction:a?"left":"up",ariaLabel:"Share post",icon:e.jsx(u,{icon:"solar:share-bold"}),FabProps:{size:"medium"},sx:{position:"absolute",bottom:{xs:32,md:64},right:{xs:16,md:24}},children:Bt.map(d=>e.jsx(Cs,{icon:e.jsx(u,{icon:d.icon,sx:{color:d.color}}),tooltipTitle:d.name,tooltipPlacement:"top",FabProps:{color:"default"}},d.name))})]})]})})}fe.propTypes={author:r.object,coverUrl:r.string,createdAt:r.string,title:r.string};function mt({title:t,coverUrl:s,content:o,description:i,open:n,isValid:a,onClose:d,onSubmit:j,isSubmitting:l}){const x=t||i||o||s,c=t||s;return e.jsxs(Wt,{fullScreen:!0,open:n,onClose:d,children:[e.jsxs(Nt,{sx:{py:2,px:3},children:[e.jsx(b,{variant:"h6",sx:{flexGrow:1},children:"Preview"}),e.jsx(W,{variant:"outlined",color:"inherit",onClick:d,children:"Cancel"}),e.jsx(be,{type:"submit",variant:"contained",disabled:!a,loading:l,onClick:j,children:"Post"})]}),e.jsx(Ee,{}),x?e.jsxs(Gt,{children:[c&&e.jsx(fe,{title:t,coverUrl:s}),e.jsx(M,{sx:{mt:5,mb:10},children:e.jsxs(p,{sx:{maxWidth:720,mx:"auto"},children:[e.jsx(b,{variant:"h6",sx:{mb:5},children:i}),e.jsx($e,{children:o})]})})]}):e.jsx(Oe,{filled:!0,title:"Empty Content!"})]})}mt.propTypes={content:r.string,coverUrl:r.string,description:r.string,isSubmitting:r.bool,isValid:r.bool,onClose:r.func,onSubmit:r.func,open:r.bool,title:r.string};function ht({currentPost:t}){var G;const s=Ue(),o=Q("up","md"),{enqueueSnackbar:i}=qt(),n=ot(),a=it().shape({title:z().required("Title is required"),description:z().required("Description is required"),content:z().required("Content is required"),coverUrl:_t().nullable().required("Cover is required"),tags:qe().min(2,"Must have at least 2 tags"),metaKeywords:qe().min(1,"Meta keywords is required"),metaTitle:z(),metaDescription:z()}),d=h.useMemo(()=>({title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",content:(t==null?void 0:t.content)||"",coverUrl:(t==null?void 0:t.coverUrl)||null,tags:(t==null?void 0:t.tags)||[],metaKeywords:(t==null?void 0:t.metaKeywords)||[],metaTitle:(t==null?void 0:t.metaTitle)||"",metaDescription:(t==null?void 0:t.metaDescription)||""}),[t]),j=nt({resolver:at(a),defaultValues:d}),{reset:l,watch:x,setValue:c,handleSubmit:y,formState:{isSubmitting:w,isValid:T}}=j,f=x();h.useEffect(()=>{t&&l(d)},[t,d,l]);const P=y(async g=>{try{await new Promise(v=>setTimeout(v,500)),l(),n.onFalse(),i(t?"Update success!":"Create success!"),s.push(D.dashboard.post.root),console.info("DATA",g)}catch(v){console.error(v)}}),R=h.useCallback(g=>{const v=g[0],L=Object.assign(v,{preview:URL.createObjectURL(v)});v&&c("coverUrl",L,{shouldValidate:!0})},[c]),N=h.useCallback(()=>{c("coverUrl",null)},[c]),E=e.jsxs(e.Fragment,{children:[o&&e.jsxs(F,{md:4,children:[e.jsx(b,{variant:"h6",sx:{mb:.5},children:"Details"}),e.jsx(b,{variant:"body2",sx:{color:"text.secondary"},children:"Title, short description, image..."})]}),e.jsx(F,{xs:12,md:8,children:e.jsxs(oe,{children:[!o&&e.jsx(He,{title:"Details"}),e.jsxs(p,{spacing:3,sx:{p:3},children:[e.jsx(te,{name:"title",label:"Post Title"}),e.jsx(te,{name:"description",label:"Description",multiline:!0,rows:3}),e.jsxs(p,{spacing:1.5,children:[e.jsx(b,{variant:"subtitle2",children:"Content"}),e.jsx(Ht,{simple:!0,name:"content"})]}),e.jsxs(p,{spacing:1.5,children:[e.jsx(b,{variant:"subtitle2",children:"Cover"}),e.jsx(Kt,{name:"coverUrl",maxSize:3145728,onDrop:R,onDelete:N})]})]})]})})]}),$=e.jsxs(e.Fragment,{children:[o&&e.jsxs(F,{md:4,children:[e.jsx(b,{variant:"h6",sx:{mb:.5},children:"Properties"}),e.jsx(b,{variant:"body2",sx:{color:"text.secondary"},children:"Additional functions and attributes..."})]}),e.jsx(F,{xs:12,md:8,children:e.jsxs(oe,{children:[!o&&e.jsx(He,{title:"Properties"}),e.jsxs(p,{spacing:3,sx:{p:3},children:[e.jsx(Ke,{name:"tags",label:"Tags",placeholder:"+ Tags",multiple:!0,freeSolo:!0,options:Ze.map(g=>g),getOptionLabel:g=>g,renderOption:(g,v)=>h.createElement("li",{...g,key:v},v),renderTags:(g,v)=>g.map((L,Y)=>h.createElement(xe,{...v({index:Y}),key:L,label:L,size:"small",color:"info",variant:"soft"}))}),e.jsx(te,{name:"metaTitle",label:"Meta title"}),e.jsx(te,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),e.jsx(Ke,{name:"metaKeywords",label:"Meta keywords",placeholder:"+ Keywords",multiple:!0,freeSolo:!0,disableCloseOnSelect:!0,options:Ze.map(g=>g),getOptionLabel:g=>g,renderOption:(g,v)=>h.createElement("li",{...g,key:v},v),renderTags:(g,v)=>g.map((L,Y)=>h.createElement(xe,{...v({index:Y}),key:L,label:L,size:"small",color:"info",variant:"soft"}))}),e.jsx(pe,{control:e.jsx(_e,{defaultChecked:!0}),label:"Enable comments"})]})]})})]}),X=e.jsxs(e.Fragment,{children:[o&&e.jsx(F,{md:4}),e.jsxs(F,{xs:12,md:8,sx:{display:"flex",alignItems:"center"},children:[e.jsx(pe,{control:e.jsx(_e,{defaultChecked:!0}),label:"Publish",sx:{flexGrow:1,pl:3}}),e.jsx(W,{color:"inherit",variant:"outlined",size:"large",onClick:n.onTrue,children:"Preview"}),e.jsx(be,{type:"submit",variant:"contained",size:"large",loading:w,sx:{ml:2},children:t?"Save Changes":"Create Post"})]})]});return e.jsxs(rt,{methods:j,onSubmit:P,children:[e.jsxs(F,{container:!0,spacing:3,children:[E,$,X]}),e.jsx(mt,{title:f.title,content:f.content,description:f.description,coverUrl:typeof f.coverUrl=="string"?f.coverUrl:`${(G=f.coverUrl)==null?void 0:G.preview}`,open:n.value,isValid:T,isSubmitting:w,onClose:n.onFalse,onSubmit:P})]})}ht.propTypes={currentPost:r.object};function Ls({title:t}){const s=Zt(),{post:o}=ze(`${t}`);return e.jsxs(M,{maxWidth:s.themeStretch?!1:"lg",children:[e.jsx(lt,{heading:"Edit",links:[{name:"Dashboard",href:D.dashboard.root},{name:"Blog",href:D.dashboard.post.root},{name:o==null?void 0:o.title}],sx:{mb:{xs:3,md:5}}}),e.jsx(ht,{currentPost:o})]})}Ls.propTypes={title:r.string};function Le({name:t,avatarUrl:s,message:o,tagUser:i,postedAt:n,hasReply:a}){const d=ot();return e.jsxs(Jt,{sx:{p:0,pt:3,alignItems:"flex-start",...a&&{pl:8}},children:[e.jsx(B,{alt:t,src:s,sx:{mr:2,width:48,height:48}}),e.jsxs(p,{flexGrow:1,sx:{pb:3,borderBottom:j=>`solid 1px ${j.palette.divider}`},children:[e.jsx(b,{variant:"subtitle2",sx:{mb:.5},children:t}),e.jsx(b,{variant:"caption",sx:{color:"text.disabled"},children:ge(n)}),e.jsxs(b,{variant:"body2",sx:{mt:1},children:[i&&e.jsxs(A,{component:"strong",sx:{mr:.5},children:["@",i]}),o]}),d.value&&e.jsx(A,{sx:{mt:2},children:e.jsx(tt,{fullWidth:!0,autoFocus:!0,placeholder:"Write comment..."})})]}),!a&&e.jsx(W,{size:"small",color:d.value?"primary":"inherit",startIcon:e.jsx(u,{icon:"solar:pen-bold",width:16}),onClick:d.onToggle,sx:{right:0,position:"absolute"},children:"Reply"})]})}Le.propTypes={avatarUrl:r.string,hasReply:r.bool,message:r.string,name:r.string,postedAt:r.string,tagUser:r.string};function Ve({comments:t}){return e.jsxs(e.Fragment,{children:[e.jsx(e.Fragment,{children:t.map(s=>{const{id:o,replyComment:i,name:n,users:a,message:d,avatarUrl:j,postedAt:l}=s,x=!!i.length;return e.jsxs(A,{children:[e.jsx(Le,{name:n,message:d,postedAt:l,avatarUrl:j}),x&&i.map(c=>{const y=a.find(w=>w.id===c.userId);return e.jsx(Le,{name:(y==null?void 0:y.name)||"",message:c.message,postedAt:c.postedAt,avatarUrl:(y==null?void 0:y.avatarUrl)||"",tagUser:c.tagUser,hasReply:!0},c.id)})]},o)})}),e.jsx(st,{count:8,sx:{my:5,mx:"auto"}})]})}Ve.propTypes={comments:r.array};function ut(){const t=it().shape({comment:z().required("Comment is required"),name:z().required("Name is required"),email:z().required("Email is required").email("Email must be a valid email address")}),s={comment:"",name:"",email:""},o=nt({resolver:at(t),defaultValues:s}),{reset:i,handleSubmit:n,formState:{isSubmitting:a}}=o,d=n(async j=>{try{await new Promise(l=>setTimeout(l,500)),i(),console.info("DATA",j)}catch(l){console.error(l)}});return e.jsx(rt,{methods:o,onSubmit:d,children:e.jsxs(p,{spacing:3,children:[e.jsx(te,{name:"comment",placeholder:"Write some of your comments...",multiline:!0,rows:4}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsxs(p,{direction:"row",alignItems:"center",flexGrow:1,children:[e.jsx(Z,{children:e.jsx(u,{icon:"solar:gallery-add-bold"})}),e.jsx(Z,{children:e.jsx(u,{icon:"eva:attach-2-fill"})}),e.jsx(Z,{children:e.jsx(u,{icon:"eva:smiling-face-fill"})})]}),e.jsx(be,{type:"submit",variant:"contained",loading:a,children:"Post comment"})]})]})})}function jt({publish:t,backLink:s,editLink:o,liveLink:i,publishOptions:n,onChangePublish:a,sx:d,...j}){const l=Fe();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...d},...j,children:[e.jsx(W,{component:_,href:s,startIcon:e.jsx(u,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),e.jsx(A,{sx:{flexGrow:1}}),t==="published"&&e.jsx(Se,{title:"Go Live",children:e.jsx(Z,{component:_,href:i,children:e.jsx(u,{icon:"eva:external-link-fill"})})}),e.jsx(Se,{title:"Edit",children:e.jsx(Z,{component:_,href:o,children:e.jsx(u,{icon:"solar:pen-bold"})})}),e.jsx(be,{color:"inherit",variant:"contained",loading:!t,loadingIndicator:"Loading…",endIcon:e.jsx(u,{icon:"eva:arrow-ios-downward-fill"}),onClick:l.onOpen,sx:{textTransform:"capitalize"},children:t})]}),e.jsx(Ae,{open:l.open,onClose:l.onClose,arrow:"top-right",sx:{width:140},children:n.map(x=>e.jsxs(se,{selected:x.value===t,onClick:()=>{l.onClose(),a(x.value)},children:[x.value==="published"&&e.jsx(u,{icon:"eva:cloud-upload-fill"}),x.value==="draft"&&e.jsx(u,{icon:"solar:file-text-bold"}),x.label]},x.value))})]})}jt.propTypes={backLink:r.string,editLink:r.string,liveLink:r.string,onChangePublish:r.func,publish:r.string,publishOptions:r.array,sx:r.object};function Ps({title:t}){const[s,o]=h.useState(""),{post:i,postLoading:n,postError:a}=ze(t),d=h.useCallback(c=>{o(c)},[]);h.useEffect(()=>{i&&o(i==null?void 0:i.publish)},[i]);const j=e.jsx(pt,{}),l=e.jsx(Oe,{filled:!0,title:`${a==null?void 0:a.message}`,action:e.jsx(W,{component:_,href:D.dashboard.post.root,startIcon:e.jsx(u,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:20}}),x=i&&e.jsxs(e.Fragment,{children:[e.jsx(jt,{backLink:D.dashboard.post.root,editLink:D.dashboard.post.edit(`${i==null?void 0:i.title}`),liveLink:D.post.details(`${i==null?void 0:i.title}`),publish:s||"",onChangePublish:d,publishOptions:ts}),e.jsx(fe,{title:i.title,coverUrl:i.coverUrl}),e.jsxs(p,{sx:{maxWidth:720,mx:"auto",mt:{xs:5,md:10}},children:[e.jsx(b,{variant:"subtitle1",sx:{mb:5},children:i.description}),e.jsx($e,{children:i.content}),e.jsxs(p,{spacing:3,sx:{py:3,borderTop:c=>`dashed 1px ${c.palette.divider}`,borderBottom:c=>`dashed 1px ${c.palette.divider}`},children:[e.jsx(p,{direction:"row",flexWrap:"wrap",spacing:1,children:i.tags.map(c=>e.jsx(xe,{label:c,variant:"soft"},c))}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(pe,{control:e.jsx(ct,{defaultChecked:!0,size:"small",color:"error",icon:e.jsx(u,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(u,{icon:"solar:heart-bold"})}),label:V(i.totalFavorites),sx:{mr:1}}),e.jsx(dt,{sx:{[`& .${Qt.avatar}`]:{width:32,height:32}},children:i.favoritePerson.map(c=>e.jsx(B,{alt:c.name,src:c.avatarUrl},c.name))})]})]}),e.jsxs(p,{direction:"row",sx:{mb:3,mt:5},children:[e.jsx(b,{variant:"h4",children:"Comments"}),e.jsxs(b,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",i.comments.length,")"]})]}),e.jsx(ut,{}),e.jsx(Ee,{sx:{mt:5,mb:2}}),e.jsx(Ve,{comments:i.comments})]})]});return e.jsxs(M,{maxWidth:!1,children:[n&&j,a&&l,i&&x]})}Ps.propTypes={title:r.string};function gt({post:t,index:s}){const o=Ie(),i=Q("up","md"),{coverUrl:n,title:a,totalViews:d,totalComments:j,totalShares:l,author:x,createdAt:c}=t;return i&&(s===0||s===1||s===2)?e.jsxs(oe,{children:[e.jsx(B,{alt:x.name,src:x.avatarUrl,sx:{top:24,left:24,zIndex:9,position:"absolute"}}),e.jsx(Pe,{title:a,createdAt:c,totalViews:d,totalShares:l,totalComments:j,index:s}),e.jsx(Te,{alt:a,src:n,overlay:ke(o.palette.grey[900],.48),sx:{width:1,height:360}})]}):e.jsxs(oe,{children:[e.jsxs(A,{sx:{position:"relative"},children:[e.jsx(Xt,{sx:{left:0,zIndex:9,width:88,height:36,bottom:-16,position:"absolute"}}),e.jsx(B,{alt:x.name,src:x.avatarUrl,sx:{left:24,zIndex:9,bottom:-24,position:"absolute"}}),e.jsx(Te,{alt:a,src:n,ratio:"4/3"})]}),e.jsx(Pe,{title:a,totalViews:d,totalComments:j,totalShares:l,createdAt:c})]})}gt.propTypes={index:r.number,post:r.object};function Pe({title:t,createdAt:s,totalViews:o,totalShares:i,totalComments:n,index:a}){const d=Q("up","md"),j=D.post.details(t),l=a===0,x=a===1||a===2;return e.jsxs(Yt,{sx:{pt:6,width:1,...(l||x)&&{pt:0,zIndex:9,bottom:0,position:"absolute",color:"common.white"}},children:[e.jsx(b,{variant:"caption",component:"div",sx:{mb:1,color:"text.disabled",...(l||x)&&{opacity:.64,color:"common.white"}},children:ge(s)}),e.jsx(Re,{color:"inherit",component:_,href:j,children:e.jsx(De,{variant:d&&l?"h5":"subtitle2",line:2,persistent:!0,children:t})}),e.jsxs(p,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{mt:3,typography:"caption",color:"text.disabled",...(l||x)&&{opacity:.64,color:"common.white"}},children:[e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"eva:message-circle-fill",width:16,sx:{mr:.5}}),V(n)]}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"solar:eye-bold",width:16,sx:{mr:.5}}),V(o)]}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(u,{icon:"solar:share-bold",width:16,sx:{mr:.5}}),V(i)]})]})]})}Pe.propTypes={createdAt:r.string,index:r.number,title:r.string,totalComments:r.number,totalShares:r.number,totalViews:r.number};function bt({posts:t,loading:s,disabledIndex:o}){const i=e.jsx(e.Fragment,{children:[...Array(16)].map((a,d)=>e.jsx(F,{xs:12,sm:6,md:3,children:e.jsx(Me,{})},d))}),n=e.jsx(e.Fragment,{children:t.map((a,d)=>e.jsx(F,{xs:12,sm:6,md:!o&&d===0?6:3,children:e.jsx(gt,{post:a,index:o?void 0:d})},a.id))});return e.jsxs(e.Fragment,{children:[e.jsx(F,{container:!0,spacing:3,children:s?i:n}),t.length>8&&e.jsx(p,{alignItems:"center",sx:{mt:8,mb:{xs:10,md:15}},children:e.jsx(W,{size:"large",variant:"outlined",startIcon:e.jsx(u,{icon:"svg-spinners:12-dots-scale-rotate",width:24}),children:"Load More"})})]})}bt.propTypes={disabledIndex:r.bool,loading:r.bool,posts:r.array};function Is({title:t}){const{post:s,postError:o,postLoading:i}=ze(t),{latestPosts:n,latestPostsLoading:a}=Ss(t),d=e.jsx(pt,{}),j=e.jsx(M,{sx:{my:10},children:e.jsx(Oe,{filled:!0,title:`${o==null?void 0:o.message}`,action:e.jsx(W,{component:_,href:D.post.root,startIcon:e.jsx(u,{icon:"eva:arrow-ios-back-fill",width:16}),sx:{mt:3},children:"Back to List"}),sx:{py:10}})}),l=s&&e.jsxs(e.Fragment,{children:[e.jsx(fe,{title:s.title,author:s.author,coverUrl:s.coverUrl,createdAt:s.createdAt}),e.jsx(M,{maxWidth:!1,sx:{py:3,mb:5,borderBottom:c=>`solid 1px ${c.palette.divider}`},children:e.jsx(lt,{links:[{name:"Home",href:"/"},{name:"Blog",href:D.post.root},{name:s==null?void 0:s.title}],sx:{maxWidth:720,mx:"auto"}})}),e.jsx(M,{maxWidth:!1,children:e.jsxs(p,{sx:{maxWidth:720,mx:"auto"},children:[e.jsx(b,{variant:"subtitle1",sx:{mb:5},children:s.description}),e.jsx($e,{children:s.content}),e.jsxs(p,{spacing:3,sx:{py:3,borderTop:c=>`dashed 1px ${c.palette.divider}`,borderBottom:c=>`dashed 1px ${c.palette.divider}`},children:[e.jsx(p,{direction:"row",flexWrap:"wrap",spacing:1,children:s.tags.map(c=>e.jsx(xe,{label:c,variant:"soft"},c))}),e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(pe,{control:e.jsx(ct,{defaultChecked:!0,size:"small",color:"error",icon:e.jsx(u,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(u,{icon:"solar:heart-bold"})}),label:V(s.totalFavorites),sx:{mr:1}}),e.jsx(dt,{children:s.favoritePerson.map(c=>e.jsx(B,{alt:c.name,src:c.avatarUrl},c.name))})]})]}),e.jsxs(p,{direction:"row",sx:{mb:3,mt:5},children:[e.jsx(b,{variant:"h4",children:"Comments"}),e.jsxs(b,{variant:"subtitle2",sx:{color:"text.disabled"},children:["(",s.comments.length,")"]})]}),e.jsx(ut,{}),e.jsx(Ee,{sx:{mt:5,mb:2}}),e.jsx(Ve,{comments:s.comments})]})})]}),x=e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"h4",sx:{mb:5},children:"Recent Posts"}),e.jsx(bt,{posts:n.slice(n.length-4),loading:a,disabledIndex:!0})]});return e.jsxs(e.Fragment,{children:[i&&d,o&&j,s&&l,e.jsx(M,{sx:{pb:15},children:!!n.length&&x})]})}Is.propTypes={title:r.string};export{ks as P,$s as a,Ts as b,Rs as c,bt as d,Is as e,Ds as f,Ps as g,ht as h,Ls as i,Es as u};
