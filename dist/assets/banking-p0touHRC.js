import{j as e,m as P,bK as I,t as v,i as h,S as l,au as W,av as E,bY as G,h as R,ad as t,V as w,r as j,c as Q,B as p,T as b,c5 as he,bX as D,dN as pe,dO as ge,by as ue,bz as me,ab as ye,bB as je,a8 as N,c7 as be,dF as M,a9 as O,an as fe,dG as L,bx as $,bC as F,bZ as C,ba as Ce,cM as ve,c6 as we,cN as ke,cO as Te,cP as Se,E as U,b_ as Be,dP as De,cK as Ie,cL as S,aw as Ae,dQ as Ee,az as Re,ag as Pe,aE as We,C as Oe,am as B,dR as ze,dS as Ne,dT as Y,H as Me}from"./index-4yL3xM3x.js";import{u as J,C as Le,a as q,c as $e}from"./carousel-arrow-index-JrZ2raSI.js";function K({title:s,subheader:a,list:i,...r}){return e.jsxs(P,{...r,children:[e.jsx(I,{title:s,subheader:a,action:e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})}),e.jsx(l,{spacing:3,sx:{p:3},children:i.map(n=>e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(W,{src:n.avatarUrl,sx:{width:48,height:48,mr:2}}),e.jsx(E,{primary:n.name,secondary:n.email}),e.jsx(G,{title:"Quick Transfer",children:e.jsx(R,{children:e.jsx(h,{icon:"eva:diagonal-arrow-right-up-fill"})})})]},n.id))})]})}K.propTypes={list:t.array,subheader:t.string,title:t.string};const X=50,Z=0,A=1e3,Fe=40;function ee({title:s,subheader:a,list:i,sx:r,...n}){const x=w(),c=J({centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",slidesToShow:i.length>7?7:i.length,responsive:[{breakpoint:1600,settings:{slidesToShow:5}},{breakpoint:1400,settings:{slidesToShow:3}},{breakpoint:x.breakpoints.values.md,settings:{slidesToShow:5}},{breakpoint:400,settings:{slidesToShow:3}}]}),[g,o]=j.useState(24),[d,m]=j.useState(0),y=Q(),k=i.find((f,T)=>T===c.currentIndex);j.useEffect(()=>{d&&u()},[d]);const u=j.useCallback(()=>{const f=d.toString().length;o(f*24)},[d]),ce=j.useCallback((f,T)=>{m(T)},[]),H=j.useCallback(f=>{m(Number(f.target.value))},[]),V=j.useCallback(()=>{d<0?m(0):d>A&&m(A)},[d]),de=e.jsx(p,{sx:{position:"relative"},children:e.jsx(Le,{filled:!0,onPrev:c.onPrev,onNext:c.onNext,leftButtonProps:{sx:{p:.5,mt:-1.5,left:-8,"& svg":{width:16,height:16}}},rightButtonProps:{sx:{p:.5,mt:-1.5,right:-8,"& svg":{width:16,height:16}}},children:e.jsx(p,{component:q,ref:c.carouselRef,...c.carouselSettings,sx:{width:1,mx:"auto",maxWidth:Fe*7+160},children:i.map((f,T)=>e.jsx(p,{sx:{py:5},children:e.jsx(G,{title:f.name,arrow:!0,placement:"top",children:e.jsx(W,{src:f.avatarUrl,sx:{mx:"auto",opacity:.48,cursor:"pointer",transition:x.transitions.create("all"),...T===c.currentIndex&&{opacity:1,transform:"scale(1.25)",boxShadow:"-4px 12px 24px 0 rgb(0,0,0,0.24)"}}})},f.id)},f.id))})})}),xe=e.jsxs(l,{spacing:3,children:[e.jsx(b,{variant:"overline",sx:{color:"text.secondary"},children:"insert amount"}),e.jsx(_,{amount:d,onBlur:V,autoWidth:g,onChange:H}),e.jsx(he,{value:typeof d=="number"?d:0,valueLabelDisplay:"auto",step:X,marks:!0,min:Z,max:A,onChange:ce}),e.jsxs(l,{direction:"row",alignItems:"center",sx:{typography:"subtitle1"},children:[e.jsx(p,{component:"span",sx:{flexGrow:1},children:"Your Balance"}),D(34212)]}),e.jsx(v,{size:"large",color:"inherit",variant:"contained",disabled:d===0,onClick:y.onTrue,children:"Transfer Now"})]});return e.jsxs(e.Fragment,{children:[e.jsxs(l,{sx:{borderRadius:2,bgcolor:"background.neutral",...r},...n,children:[e.jsx(I,{title:s,subheader:a}),e.jsxs(l,{sx:{p:3},children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(b,{variant:"overline",sx:{color:"text.secondary"},children:"Recent"}),e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),sx:{mr:-1},children:"View All"})]}),de,xe]})]}),e.jsx(se,{amount:d,onBlur:V,open:y.value,autoWidth:g,onClose:y.onFalse,contactInfo:k,onChange:H})]})}ee.propTypes={list:t.array,subheader:t.string,sx:t.object,title:t.string};function _({autoWidth:s,amount:a,onBlur:i,onChange:r,sx:n,...x}){return e.jsxs(l,{direction:"row",justifyContent:"center",spacing:1,sx:n,children:[e.jsx(b,{variant:"h5",children:"$"}),e.jsx(pe,{disableUnderline:!0,size:"small",value:a,onChange:r,onBlur:i,inputProps:{step:X,min:Z,max:A,type:"number"},sx:{[`& .${ge.input}`]:{p:0,typography:"h3",textAlign:"center",width:s}},...x})]})}_.propTypes={amount:t.number,autoWidth:t.number,onBlur:t.func,onChange:t.func,sx:t.object};function se({open:s,amount:a,autoWidth:i,contactInfo:r,onClose:n,onBlur:x,onChange:c}){return e.jsxs(ue,{open:s,fullWidth:!0,maxWidth:"xs",onClose:n,children:[e.jsx(me,{children:"Transfer to"}),e.jsxs(l,{spacing:3,sx:{px:3},children:[e.jsxs(l,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(W,{src:r==null?void 0:r.avatarUrl,sx:{width:48,height:48}}),e.jsx(E,{primary:r==null?void 0:r.name,secondary:r==null?void 0:r.email,secondaryTypographyProps:{component:"span",mt:.5}})]}),e.jsx(_,{onBlur:x,onChange:c,autoWidth:i,amount:a,disableUnderline:!1,sx:{justifyContent:"flex-end"}}),e.jsx(ye,{fullWidth:!0,multiline:!0,rows:3,placeholder:"Write a message..."})]}),e.jsxs(je,{children:[e.jsx(v,{onClick:n,children:"Cancel"}),e.jsx(v,{variant:"contained",disabled:a===0,onClick:n,children:"Confirm & Transfer"})]})]})}se.propTypes={amount:t.number,autoWidth:t.number,contactInfo:t.object,onBlur:t.func,onChange:t.func,onClose:t.func,open:t.bool};function te({img:s,price:a,title:i,description:r,sx:n,...x}){const c=w();return e.jsxs(p,{...x,children:[e.jsx(p,{component:"img",alt:"invite",src:s,sx:{left:40,zIndex:9,width:140,position:"relative",filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.24))",...n}}),e.jsxs(p,{sx:{mt:-15,color:"common.white",borderRadius:2,p:c.spacing(16,5,5,5),...N({direction:"135deg",startColor:c.palette.primary.main,endColor:c.palette.primary.dark})},children:[e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(p,{sx:{whiteSpace:"pre-line",typography:"h4"},children:i}),e.jsx(p,{sx:{typography:"h2"},children:a})]}),e.jsx(p,{sx:{mt:2,mb:3,typography:"body2"},children:r}),e.jsx(be,{fullWidth:!0,placeholder:"Email",endAdornment:e.jsx(v,{color:"warning",variant:"contained",size:"small",sx:{mr:.5},children:"Invite"}),sx:{pl:1.5,height:40,borderRadius:1,bgcolor:"common.white"}})]})]})}te.propTypes={description:t.string,img:t.string,price:t.string,sx:t.object,title:t.string};function z({title:s,total:a,icon:i,percent:r,color:n="primary",chart:x,sx:c,...g}){const o=w(),{series:d,options:m}=x,y=M({colors:[o.palette[n].dark],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:k=>D(k),title:{formatter:()=>""}}},...m});return e.jsxs(l,{sx:{...N({direction:"135deg",startColor:O(o.palette[n].light,.2),endColor:O(o.palette[n].main,.2)}),width:1,borderRadius:2,overflow:"hidden",position:"relative",color:`${n}.darker`,backgroundColor:"common.white",...c},...g,children:[e.jsx(h,{icon:i,sx:{p:1.5,top:24,right:24,width:48,height:48,borderRadius:"50%",position:"absolute",color:`${n}.lighter`,bgcolor:`${n}.dark`}}),e.jsxs(l,{spacing:1,sx:{p:3},children:[e.jsx(b,{variant:"subtitle2",children:s}),e.jsx(b,{variant:"h3",children:D(a)}),e.jsxs(l,{spacing:.5,direction:"row",flexWrap:"wrap",alignItems:"center",sx:{typography:"body2"},children:[e.jsx(h,{icon:r<0?"eva:trending-down-fill":"eva:trending-up-fill"}),e.jsxs(p,{sx:{typography:"subtitle2"},children:[r>0&&"+",fe(r)]}),e.jsx(p,{sx:{opacity:.8},children:"than last month"})]})]}),e.jsx(L,{dir:"ltr",type:"area",series:[{data:d}],options:y,width:"100%",height:120})]})}z.propTypes={chart:t.object,color:t.string,icon:t.oneOfType([t.element,t.string]),percent:t.number,sx:t.object,title:t.string,total:t.number};function re({list:s,sx:a}){const i=w(),r=J({fade:!0,speed:100,...$e({sx:{right:16,bottom:16,position:"absolute",color:"primary.light"}})});return e.jsx(p,{sx:{...N({color:O(i.palette.grey[900],.8),imgUrl:"/assets/background/overlay_2.jpg"}),height:262,borderRadius:2,position:"relative",color:"common.white",".slick-slider, .slick-list, .slick-track, .slick-slide > div":{height:1},"&:before, &:after":{left:0,mx:2.5,right:0,zIndex:-2,height:200,bottom:-16,content:"''",opacity:.16,borderRadius:2,bgcolor:"grey.500",position:"absolute"},"&:after":{mx:1,bottom:-8,opacity:.24},...a},children:e.jsx(q,{...r.carouselSettings,children:s.map(n=>e.jsx(ne,{card:n},n.id))})})}re.propTypes={list:t.array,sx:t.object};function ne({card:s}){const{id:a,cardType:i,balance:r,cardHolder:n,cardNumber:x,cardValid:c}=s,g=Q(),o=$(),d=j.useCallback(()=>{o.onClose(),console.info("DELETE",a)},[a,o]),m=j.useCallback(()=>{o.onClose(),console.info("EDIT",a)},[a,o]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{justifyContent:"space-between",sx:{height:1,p:3},children:[e.jsx(R,{color:"inherit",onClick:o.onOpen,sx:{top:8,right:8,zIndex:9,opacity:.48,position:"absolute",...o.open&&{opacity:1}},children:e.jsx(h,{icon:"eva:more-vertical-fill"})}),e.jsxs("div",{children:[e.jsx(b,{sx:{mb:2,typography:"subtitle2",opacity:.48},children:"Current Balance"}),e.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(b,{sx:{typography:"h3"},children:g.value?"********":D(r)}),e.jsx(R,{color:"inherit",onClick:g.onToggle,sx:{opacity:.48},children:e.jsx(h,{icon:g.value?"solar:eye-bold":"solar:eye-closed-bold"})})]})]}),e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{typography:"subtitle1"},children:[e.jsxs(p,{sx:{bgcolor:"white",lineHeight:0,px:.75,borderRadius:.5,mr:1},children:[i==="mastercard"&&e.jsx(h,{width:24,icon:"logos:mastercard"}),i==="visa"&&e.jsx(h,{width:24,icon:"logos:visa"})]}),x]}),e.jsxs(l,{direction:"row",spacing:5,children:[e.jsxs(l,{spacing:1,children:[e.jsx(b,{sx:{typography:"caption",opacity:.48},children:"Card Holder"}),e.jsx(b,{sx:{typography:"subtitle1"},children:n})]}),e.jsxs(l,{spacing:1,children:[e.jsx(b,{sx:{typography:"caption",opacity:.48},children:"Valid Dates"}),e.jsx(b,{sx:{typography:"subtitle1"},children:c})]})]})]}),e.jsxs(F,{open:o.open,onClose:o.onClose,sx:{width:140},children:[e.jsxs(C,{onClick:d,sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(C,{onClick:m,children:[e.jsx(h,{icon:"solar:pen-bold"}),"Edit"]})]})]})}ne.propTypes={card:t.object};function ae({title:s,subheader:a,chart:i,...r}){const{categories:n,colors:x,series:c,options:g}=i,o=$(),[d,m]=j.useState("Year"),y=M({colors:x,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:n},tooltip:{y:{formatter:u=>`$${u}`}},...g}),k=j.useCallback(u=>{o.onClose(),m(u)},[o]);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{...r,children:[e.jsx(I,{title:s,subheader:a,action:e.jsxs(Ce,{onClick:o.onOpen,sx:{pl:1,py:.5,pr:.5,borderRadius:1,typography:"subtitle2",bgcolor:"background.neutral"},children:[d,e.jsx(h,{width:16,icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:.5}})]})}),c.map(u=>e.jsx(p,{sx:{mt:3,mx:3},children:u.type===d&&e.jsx(L,{dir:"ltr",type:"bar",series:u.data,options:y,width:"100%",height:364})},u.type))]}),e.jsx(F,{open:o.open,onClose:o.onClose,sx:{width:140},children:c.map(u=>e.jsx(C,{selected:u.type===d,onClick:()=>k(u.type),children:u.type},u.type))})]})}ae.propTypes={chart:t.object,subheader:t.string,title:t.string};function ie({title:s,subheader:a,tableLabels:i,tableData:r,...n}){return e.jsxs(P,{...n,children:[e.jsx(I,{title:s,subheader:a,sx:{mb:3}}),e.jsx(ve,{sx:{overflow:"unset"},children:e.jsx(we,{children:e.jsxs(ke,{sx:{minWidth:720},children:[e.jsx(Te,{headLabel:i}),e.jsx(Se,{children:r.map(x=>e.jsx(oe,{row:x},x.id))})]})})}),e.jsx(U,{sx:{borderStyle:"dashed"}}),e.jsx(p,{sx:{p:2,textAlign:"right"},children:e.jsx(v,{size:"small",color:"inherit",endIcon:e.jsx(h,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"})})]})}ie.propTypes={subheader:t.string,tableData:t.array,tableLabels:t.array,title:t.string};function oe({row:s}){const i=w().palette.mode==="light",r=$(),n=()=>{r.onClose(),console.info("DOWNLOAD",s.id)},x=()=>{r.onClose(),console.info("PRINT",s.id)},c=()=>{r.onClose(),console.info("SHARE",s.id)},g=()=>{r.onClose(),console.info("DELETE",s.id)},o=e.jsx(p,{sx:{position:"relative",mr:2},children:e.jsx(Be,{overlap:"circular",color:s.type==="Income"?"success":"error",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(h,{icon:s.type==="Income"?"eva:diagonal-arrow-left-down-fill":"eva:diagonal-arrow-right-up-fill",width:16}),sx:{[`& .${De.badge}`]:{p:0,width:20}},children:e.jsxs(W,{src:s.avatarUrl||"",sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"},children:[s.category==="Books"&&e.jsx(h,{icon:"eva:book-fill",width:24}),s.category==="Beauty & Health"&&e.jsx(h,{icon:"solar:heart-bold",width:24})]})})});return e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:[e.jsxs(S,{sx:{display:"flex",alignItems:"center"},children:[o,e.jsx(E,{primary:s.message,secondary:s.category})]}),e.jsx(S,{children:e.jsx(E,{primary:Ae(new Date(s.date)),secondary:Ee(new Date(s.date)),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(S,{children:D(s.amount)}),e.jsx(S,{children:e.jsx(Re,{variant:i?"soft":"filled",color:s.status==="completed"&&"success"||s.status==="progress"&&"warning"||"error",children:s.status})}),e.jsx(S,{align:"right",sx:{pr:1},children:e.jsx(R,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(F,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(C,{onClick:n,children:[e.jsx(h,{icon:"eva:cloud-download-fill"}),"Download"]}),e.jsxs(C,{onClick:x,children:[e.jsx(h,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(C,{onClick:c,children:[e.jsx(h,{icon:"solar:share-bold"}),"Share"]}),e.jsx(U,{sx:{borderStyle:"dashed"}}),e.jsxs(C,{onClick:g,sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})]})}oe.propTypes={row:t.object};function le({title:s,subheader:a,chart:i,...r}){const n=w(),x=Pe("up","sm"),{colors:c,series:g,options:o}=i,d=g.map(y=>y.value),m=M({colors:c,labels:g.map(y=>y.label),stroke:{colors:[n.palette.background.paper]},fill:{opacity:.8},legend:{position:"right",itemMargin:{horizontal:10,vertical:7}},tooltip:{fillSeriesColor:!1},responsive:[{breakpoint:n.breakpoints.values.sm,options:{legend:{position:"bottom",horizontalAlign:"left"}}}],...o});return e.jsxs(P,{...r,children:[e.jsx(I,{title:s,subheader:a}),e.jsx(p,{sx:{my:5,"& .apexcharts-legend":{m:"auto",height:{sm:160},flexWrap:{sm:"wrap"},width:{xs:240,sm:"50%"}},"& .apexcharts-datalabels-group":{display:"none"}},children:e.jsx(L,{dir:"ltr",type:"polarArea",series:d,options:m,width:"100%",height:x?240:360})}),e.jsx(U,{sx:{borderStyle:"dashed"}}),e.jsxs(p,{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{textAlign:"center",typography:"h4"},children:[e.jsxs(l,{sx:{py:2,borderRight:`dashed 1px ${n.palette.divider}`},children:[e.jsx(p,{component:"span",sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),"9"]}),e.jsxs(l,{sx:{py:2},children:[e.jsx(p,{component:"span",sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),"$18,765"]})]})]})}le.propTypes={chart:t.object,subheader:t.string,title:t.string};function Ue(){const s=w(),a=We();return e.jsx(Oe,{maxWidth:a.themeStretch?!1:"xl",children:e.jsxs(B,{container:!0,spacing:3,children:[e.jsx(B,{xs:12,md:7,children:e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:3,children:[e.jsx(z,{title:"Income",icon:"eva:diagonal-arrow-left-down-fill",percent:2.6,total:18765,chart:{series:[{x:2010,y:88},{x:2011,y:120},{x:2012,y:156},{x:2013,y:123},{x:2014,y:88},{x:2015,y:66},{x:2016,y:45},{x:2017,y:29},{x:2018,y:45},{x:2019,y:88},{x:2020,y:132},{x:2021,y:146},{x:2022,y:169},{x:2023,y:184}]}}),e.jsx(z,{title:"Expenses",color:"warning",icon:"eva:diagonal-arrow-right-up-fill",percent:-.5,total:8938,chart:{series:[{x:2010,y:88},{x:2011,y:120},{x:2012,y:156},{x:2013,y:123},{x:2014,y:88},{x:2015,y:166},{x:2016,y:145},{x:2017,y:129},{x:2018,y:145},{x:2019,y:188},{x:2020,y:132},{x:2021,y:146},{x:2022,y:169},{x:2023,y:184}]}})]})}),e.jsx(B,{xs:12,md:5,children:e.jsx(re,{list:ze})}),e.jsx(B,{xs:12,md:8,children:e.jsxs(l,{spacing:3,children:[e.jsx(ae,{title:"Balance Statistics",subheader:"(+43% Income | +12% Expense) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Expenses",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Income",data:[76,42,29,41,27,138,117,86,63]},{name:"Expenses",data:[80,55,34,114,80,130,15,28,55]}]}]}}),e.jsx(le,{title:"Expenses Categories",chart:{series:[{label:"Category 1",value:14},{label:"Category 2",value:23},{label:"Category 3",value:21},{label:"Category 4",value:17},{label:"Category 5",value:15},{label:"Category 6",value:10},{label:"Category 7",value:12},{label:"Category 8",value:17},{label:"Category 9",value:21}],colors:[s.palette.primary.main,s.palette.warning.dark,s.palette.success.darker,s.palette.error.main,s.palette.info.dark,s.palette.info.darker,s.palette.success.main,s.palette.warning.main,s.palette.info.main]}}),e.jsx(ie,{title:"Recent Transitions",tableData:Ne,tableLabels:[{id:"description",label:"Description"},{id:"date",label:"Date"},{id:"amount",label:"Amount"},{id:"status",label:"Status"},{id:""}]})]})}),e.jsx(B,{xs:12,md:4,children:e.jsxs(l,{spacing:3,children:[e.jsx(ee,{title:"Quick Transfer",list:Y}),e.jsx(K,{title:"Contacts",subheader:"You have 122 contacts",list:Y.slice(-5)}),e.jsx(te,{price:"$50",title:`Invite friends 
 and earn`,description:"Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.",img:"/assets/illustrations/characters/character_11.png"})]})})]})})}function Ve(){return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:e.jsx("title",{children:" Dashboard: Banking"})}),e.jsx(Ue,{})]})}export{Ve as default};
