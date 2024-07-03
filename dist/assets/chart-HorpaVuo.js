import{dv as i,j as t,du as n,a5 as o,$ as m,aq as u,dr as S,bY as B,p as G,C as $,B as P,m as r,bM as a,n as p,H as v}from"./index-8oEAyshB.js";import{C as E}from"./component-hero-ZuglGT4k.js";function g({series:s}){const e=i({labels:["Team A","Team B","Team C","Team D"],legend:{position:"right",offsetX:-20,offsetY:64,itemMargin:{vertical:8}},stroke:{show:!1},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return t.jsx(n,{dir:"ltr",type:"pie",series:s,options:e,width:400,height:"auto"})}g.propTypes={series:o.array};function y({series:s}){const e=i({stroke:{show:!1},plotOptions:{bar:{horizontal:!0,barHeight:"30%"}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return t.jsx(n,{dir:"ltr",type:"bar",series:[{data:s}],options:e,width:"100%",height:320})}y.propTypes={series:o.array};function j({series:s}){const e=i({xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{x:{show:!1},marker:{show:!1}}});return t.jsx(n,{dir:"ltr",type:"line",series:s,options:e,width:"100%",height:320})}j.propTypes={series:o.array};function f({series:s}){const e=i({xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return t.jsx(n,{dir:"ltr",type:"area",series:s,options:e,width:"100%",height:320})}f.propTypes={series:o.array};function C({series:s}){const e=i({stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"20%"}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:l=>typeof l<"u"?`${l.toFixed(0)} points`:l}}});return t.jsx(n,{dir:"ltr",type:"line",series:s,options:e,width:"100%",height:320})}C.propTypes={series:o.array};function T({series:s}){const e=i({labels:["Apple","Mango","Orange","Watermelon"],stroke:{show:!1},legend:{horizontalAlign:"center"},tooltip:{fillSeriesColor:!1},plotOptions:{pie:{donut:{size:"90%"}}}});return t.jsx(n,{dir:"ltr",type:"donut",series:s,options:e,width:400,height:"auto"})}T.propTypes={series:o.array};const h=380,d=72,F=u(n)(({theme:s})=>({height:h,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:d,marginBottom:s.spacing(3),top:`calc(${h-d}px) !important`}}));function b({series:s}){const e=m(),l=i({stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary]}}}});return t.jsx(F,{dir:"ltr",type:"radar",series:s,options:l,width:"100%",height:280})}b.propTypes={series:o.array};const c=380,x=72,J=u(n)(({theme:s})=>({height:c,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:x,marginBottom:s.spacing(3),top:`calc(${c-x}px) !important`}}));function w({series:s}){const e=i({chart:{sparkline:{enabled:!0}},labels:["Apples","Oranges"],legend:{floating:!0,position:"bottom",horizontalAlign:"center"},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:()=>S(2324)}}}}});return t.jsx(J,{dir:"ltr",type:"radialBar",series:s,options:e,width:"100%",height:280})}w.propTypes={series:o.array};function O({series:s}){const e=i({plotOptions:{bar:{columnWidth:"16%"}},stroke:{show:!1},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:l=>`$ ${l} thousands`}}});return t.jsx(n,{dir:"ltr",type:"bar",series:s,options:e,width:"100%",height:320})}O.propTypes={series:o.array};function M({series:s}){const e=i({chart:{stacked:!0,zoom:{enabled:!0}},legend:{itemMargin:{vertical:8},position:"right",offsetY:20},plotOptions:{bar:{columnWidth:"16%"}},stroke:{show:!1},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]}});return t.jsx(n,{dir:"ltr",type:"bar",series:s,options:e,width:"100%",height:320})}M.propTypes={series:o.array};function A({series:s}){const e=m(),l=i({stroke:{show:!1},yaxis:{labels:{formatter:H=>`${H.toFixed(0)}%`}},xaxis:{type:"datetime",categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"]},plotOptions:{bar:{columnWidth:"58%",colors:{ranges:[{from:-100,to:-46,color:e.palette.warning.main},{from:-45,to:0,color:e.palette.info.main}]}}}});return t.jsx(n,{dir:"ltr",type:"bar",series:s,options:l,width:"100%",height:320})}A.propTypes={series:o.array};function k({series:s}){const e=i({stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:l=>`$ ${l} thousands`}},plotOptions:{bar:{columnWidth:"36%"}}});return t.jsx(n,{dir:"ltr",type:"bar",series:s,options:e,width:"100%",height:320})}k.propTypes={series:o.array};function N(){return t.jsxs(t.Fragment,{children:[t.jsx(E,{children:t.jsx(B,{heading:"Chart",links:[{name:"Components",href:G.components},{name:"Chart"}],moreLink:["https://apexcharts.com"]})}),t.jsx($,{sx:{my:10},children:t.jsxs(P,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[t.jsxs(r,{children:[t.jsx(a,{title:"Area"}),t.jsx(p,{children:t.jsx(f,{series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Line"}),t.jsx(p,{children:t.jsx(j,{series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Column Single"}),t.jsx(p,{children:t.jsx(O,{series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Column Multiple"}),t.jsx(p,{children:t.jsx(k,{series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Column Stacked"}),t.jsx(p,{children:t.jsx(M,{series:[{name:"Product A",data:[44,55,41,67,22,43]},{name:"Product B",data:[13,23,20,8,13,27]},{name:"Product C",data:[11,17,15,15,21,14]},{name:"Product D",data:[21,7,25,13,22,8]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Column Negative"}),t.jsx(p,{children:t.jsx(A,{series:[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Bar"}),t.jsx(p,{children:t.jsx(y,{series:[400,430,448,470,540,580,690,1100,1200,1380]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Mixed"}),t.jsx(p,{children:t.jsx(C,{series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Pie"}),t.jsx(p,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(g,{series:[44,55,13,43]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Donut"}),t.jsx(p,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(T,{series:[44,55,13,43]})})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Radial Bar",sx:{mb:5}}),t.jsx(w,{series:[44,55]})]}),t.jsxs(r,{children:[t.jsx(a,{title:"Radar",sx:{mb:5}}),t.jsx(b,{series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]})]})]})})]})}function D(){return t.jsxs(t.Fragment,{children:[t.jsx(v,{children:t.jsx("title",{children:" Components: Chart"})}),t.jsx(N,{})]})}export{D as default};
