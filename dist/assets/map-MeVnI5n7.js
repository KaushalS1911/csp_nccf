import{gi as y,_ as u,r as i,j as t,B as T,T as g,aG as $,aB as ot,dp as at,aD as R,ds as nt,aa as it,w as B,x as V,y as G,ak as st,a8 as H,cv as lt,p as rt,C as ct,S as pt,q as j,bM as b,s as _,aC as dt,H as ut}from"./index-XFh7EM9A.js";import{C as mt}from"./component-hero-9yjVC3_1.js";import{S as P,M as x,d as A,L as C,a as v,b as Z,c as J}from"./map-control-wKWOWGl3.js";import{T as ht,a as U}from"./ToggleButtonGroup-Gzo5heis.js";const gt=[{city:"New York",population:"8,175,133",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",state:"New York",latitude:40.6643,longitude:-73.9385},{city:"Los Angeles",population:"3,792,621",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg",state:"California",latitude:34.0194,longitude:-118.4108},{city:"Chicago",population:"2,695,598",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",state:"Illinois",latitude:41.8376,longitude:-87.6818},{city:"Houston",population:"2,100,263",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg",state:"Texas",latitude:29.7805,longitude:-95.3863},{city:"Phoenix",population:"1,445,632",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg",state:"Arizona",latitude:33.5722,longitude:-112.088},{city:"Philadelphia",population:"1,526,006",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg",state:"Pennsylvania",latitude:40.0094,longitude:-75.1333},{city:"San Antonio",population:"1,327,407",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG",state:"Texas",latitude:29.4724,longitude:-98.5251},{city:"San Diego",population:"1,307,402",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg",state:"California",latitude:32.8153,longitude:-117.135},{city:"Dallas",population:"1,197,816",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg",state:"Texas",latitude:32.7757,longitude:-96.7967},{city:"San Jose",population:"945,942",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG",state:"California",latitude:37.2969,longitude:-121.8193},{city:"Austin",population:"790,390",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG",state:"Texas",latitude:30.3072,longitude:-97.756},{city:"Jacksonville",population:"821,784",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg",state:"Florida",latitude:30.337,longitude:-81.6613},{city:"San Francisco",population:"805,235",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg",state:"California",latitude:37.7751,longitude:-122.4193},{city:"Columbus",population:"787,033",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg",state:"Ohio",latitude:39.9848,longitude:-82.985},{city:"Indianapolis",population:"820,445",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG",state:"Indiana",latitude:39.7767,longitude:-86.1459},{city:"Fort Worth",population:"741,206",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg",state:"Texas",latitude:32.7795,longitude:-97.3463},{city:"Charlotte",population:"731,424",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg",state:"North Carolina",latitude:35.2087,longitude:-80.8307},{city:"Seattle",population:"608,660",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg",state:"Washington",latitude:47.6205,longitude:-122.3509},{city:"Denver",population:"600,158",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG",state:"Colorado",latitude:39.7618,longitude:-104.8806},{city:"El Paso",population:"649,121",photoUrl:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg",state:"Texas",latitude:31.8484,longitude:-106.427}],xt=[{timezones:["America/Aruba"],latlng:[12.5,-69.96666666],name:"Aruba",country_code:"AW",capital:"Oranjestad",photoUrl:y.image.cover(1)},{timezones:["Asia/Kabul"],latlng:[33,65],name:"Afghanistan",country_code:"AF",capital:"Kabul",photoUrl:y.image.cover(2)},{timezones:["Africa/Luanda"],latlng:[-12.5,18.5],name:"Angola",country_code:"AO",capital:"Luanda",photoUrl:y.image.cover(3)},{timezones:["Pacific/Efate"],latlng:[-16,167],name:"Vanuatu",country_code:"VU",capital:"Port Vila",photoUrl:y.image.cover(4)},{timezones:["Pacific/Wallis"],latlng:[-13.3,-176.2],name:"Wallis and Futuna",country_code:"WF",capital:"Mata-Utu",photoUrl:y.image.cover(5)},{timezones:["Pacific/Apia"],latlng:[-13.58333333,-172.33333333],name:"Samoa",country_code:"WS",capital:"Apia",photoUrl:y.image.cover(6)},{timezones:["Asia/Aden"],latlng:[15,48],name:"Yemen",country_code:"YE",capital:"Sana'a",photoUrl:y.image.cover(7)},{timezones:["Africa/Johannesburg"],latlng:[-29,24],name:"South Africa",country_code:"ZA",capital:"Pretoria",photoUrl:y.image.cover(8)},{timezones:["Africa/Lusaka"],latlng:[-15,30],name:"Zambia",country_code:"ZM",capital:"Lusaka",photoUrl:y.image.cover(9)},{timezones:["Africa/Harare"],latlng:[-20,30],name:"Zimbabwe",country_code:"ZW",capital:"Harare",photoUrl:y.image.cover(10)}];function O({startTime:e,endTime:o,allDays:a,selectedTime:n,onChangeTime:s,onChangeAllDays:l}){const p=Math.round((o-e)/864e5),c=Math.round((n-e)/864e5),r=d=>{const w=e+d*864e5;s(w)};return t.jsxs(P,{children:[t.jsxs(T,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx(g,{variant:"subtitle2",sx:{color:"common.white"},children:"All Days"}),t.jsx($,{size:"small",checked:a,onChange:d=>l(d.target.checked)})]}),t.jsx("br",{}),t.jsxs(g,{gutterBottom:!0,variant:"body2",sx:{color:a?"text.disabled":"common.white"},children:["Each Day: ",ot(n)]}),t.jsx(at,{min:1,step:1,max:p,disabled:a,value:c,onChange:(d,h)=>{typeof h=="number"&&r(h)}})]})}O.propTypes={allDays:u.bool,endTime:u.number,onChangeAllDays:u.func,onChangeTime:u.func,selectedTime:u.number,startTime:u.number};const yt=i.memo(O),z=9,jt={id:"heatmap",maxzoom:z,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,z,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,z,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};function bt({...e}){const[o,a]=i.useState(!0),[n,s]=i.useState([0,0]),[l,m]=i.useState(0),[p,c]=i.useState();i.useEffect(()=>{fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson").then(d=>d.json()).then(d=>{const{features:h}=d,w=h[0].properties.time,D=h[h.length-1].properties.time;s([D,w]),c(d),m(w)}).catch(d=>console.error("Could not load data",d))},[]);const r=i.useMemo(()=>o?p:ft(p,l),[p,o,l]);return t.jsxs(t.Fragment,{children:[t.jsx(x,{initialViewState:{latitude:40,longitude:-100,zoom:3},...e,children:r&&t.jsx(A,{type:"geojson",data:r,children:t.jsx(C,{...jt})})}),t.jsx(yt,{startTime:n[0],endTime:n[1],selectedTime:l,allDays:o,onChangeTime:m,onChangeAllDays:a})]})}const _t=i.memo(bt);function ft(e,o){const a=new Date(o),n=a.getFullYear(),s=a.getMonth(),l=a.getDate();return{type:"FeatureCollection",features:e==null?void 0:e.features.filter(p=>{var r;const c=new Date((r=p.properties)==null?void 0:r.time);return c.getFullYear()===n&&c.getMonth()===s&&c.getDate()===l})}}const F={id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",100,"#f1f075",750,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}},kt={id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}},wt={id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#FFFFFF"}};function St({...e}){const o=i.useRef(null),a=n=>{var p,c,r;const s=(p=n.features)==null?void 0:p[0],l=(c=s==null?void 0:s.properties)==null?void 0:c.cluster_id;((r=o.current)==null?void 0:r.getSource("earthquakes")).getClusterExpansionZoom(l,(d,h)=>{var w;d||(s==null?void 0:s.geometry.type)==="Point"&&((w=o.current)==null||w.easeTo({center:s==null?void 0:s.geometry.coordinates,zoom:Number.isNaN(h)?3:h,duration:500}))})};return t.jsx(x,{initialViewState:{latitude:40.67,longitude:-103.59,zoom:3},interactiveLayerIds:[F.id],onClick:a,ref:o,...e,children:t.jsxs(A,{id:"earthquakes",type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50,children:[t.jsx(C,{...F}),t.jsx(C,{...kt}),t.jsx(C,{...wt})]})})}const Ct=i.memo(St),N=R("div")(({theme:e})=>({display:"flex",alignItems:"center",textTransform:"capitalize",justifyContent:"space-between",color:e.palette.common.white,"&:not(:last-of-type)":{marginBottom:e.spacing(1)}})),vt=/(^|[A-Z])[a-z]*/g;function I(e){var o;return(o=e.match(vt))==null?void 0:o.join(" ")}function W({settings:e,onChange:o}){const a=(n,s)=>{switch(typeof s){case"boolean":return t.jsxs(N,{children:[t.jsx(g,{variant:"body2",children:I(n)}),t.jsx($,{size:"small",checked:s,onChange:l=>o(n,l.target.checked)})]},n);case"number":return t.jsxs(N,{children:[t.jsx(g,{variant:"body2",children:I(n)}),t.jsx(nt,{value:s,onChange:l=>o(n,Number(l.target.value)),inputProps:{type:"number"},sx:{"& input":{py:.25,width:40,fontSize:14,borderRadius:.5,textAlign:"center",color:"common.white",bgcolor:l=>it(l.palette.grey[500],.12)}}})]},n);default:return null}};return t.jsx(P,{children:Object.keys(e).map(n=>a(n,e[n]))})}W.propTypes={onChange:u.func,settings:u.object};const Mt=i.memo(W);function Pt({...e}){const[o,a]=i.useState({minZoom:0,maxZoom:20,minPitch:0,maxPitch:85,dragPan:!0,boxZoom:!0,keyboard:!0,touchZoom:!0,dragRotate:!0,scrollZoom:!0,touchPitch:!0,touchRotate:!0,doubleClickZoom:!0,touchZoomRotate:!0}),n=i.useCallback((s,l)=>a(m=>({...m,[s]:l})),[]);return t.jsxs(x,{...o,initialViewState:{latitude:37.729,longitude:-122.36,zoom:11,bearing:0,pitch:50},...e,children:[t.jsx(v,{}),t.jsx(Mt,{settings:o,onChange:n})]})}const Tt=i.memo(Pt);function q({mode:e,onModeChange:o}){return t.jsx(P,{children:t.jsxs(ht,{color:"primary",value:e,exclusive:!0,onChange:o,children:[t.jsx(U,{value:"side-by-side",children:"Side by side"}),t.jsx(U,{value:"split-screen",children:"Split screen"})]})})}q.propTypes={mode:u.string,onModeChange:u.func};const At=i.memo(q),Dt={position:"absolute",width:"50%",height:"100%"},zt={position:"absolute",left:"50%",width:"50%",height:"100%"};function Lt({...e}){const[o,a]=i.useState({longitude:-122.43,latitude:37.78,zoom:12,pitch:30}),[n,s]=i.useState("side-by-side"),[l,m]=i.useState("left"),p=i.useCallback(()=>m("left"),[]),c=i.useCallback(()=>m("right"),[]),r=i.useCallback(M=>a(M.viewState),[]),d=typeof window>"u"?100:window.innerWidth,h=i.useMemo(()=>({left:n==="split-screen"?d/2:0,top:0,right:0,bottom:0}),[d,n]),w=i.useMemo(()=>({right:n==="split-screen"?d/2:0,top:0,left:0,bottom:0}),[d,n]),D=(M,L)=>{L!==null&&s(L)};return t.jsxs(t.Fragment,{children:[t.jsx(x,{id:"left-map",...o,padding:h,onMoveStart:p,onMove:M=>{l==="left"&&r(M)},style:Dt,mapStyle:"mapbox://styles/mapbox/light-v10",...e}),t.jsx(x,{id:"right-map",...o,padding:w,onMoveStart:c,onMove:M=>{l==="right"&&r(M)},style:zt,mapStyle:"mapbox://styles/mapbox/dark-v10",...e}),t.jsx(At,{mode:n,onModeChange:D})]})}const Ut=i.memo(Lt);function Y({themes:e,selectTheme:o,onChangeTheme:a}){return t.jsxs(P,{children:[t.jsx(g,{gutterBottom:!0,variant:"subtitle2",sx:{color:"common.white"},children:"Select Theme:"}),t.jsx(B,{value:o,onChange:(n,s)=>a(s),children:Object.keys(e).map(n=>t.jsx(V,{value:n,control:t.jsx(G,{size:"small"}),label:n,sx:{color:"common.white",textTransform:"capitalize"}},n))})]})}Y.propTypes={onChangeTheme:u.func,selectTheme:u.string,themes:u.object};const Ft=i.memo(Y);function K({themes:e,...o}){const[a,n]=i.useState("outdoors"),s=i.useCallback(l=>n(l),[]);return t.jsxs(t.Fragment,{children:[t.jsx(x,{initialViewState:{latitude:37.785164,longitude:-100,zoom:3.5,bearing:0,pitch:0},mapStyle:e==null?void 0:e[a],...o,children:t.jsx(v,{})}),t.jsx(Ft,{themes:e,selectTheme:a,onChangeTheme:s})]})}K.propTypes={themes:u.object};const Nt=i.memo(K);function X({data:e,...o}){const[a,n]=i.useState(null);return t.jsxs(x,{initialViewState:{zoom:2},...o,children:[t.jsx(v,{}),e.map((s,l)=>t.jsx(Z,{latitude:s.latlng[0],longitude:s.latlng[1],onClick:m=>{m.originalEvent.stopPropagation(),n(s)}},`marker-${l}`)),a&&t.jsx(J,{latitude:a.latlng[0],longitude:a.latlng[1],onClose:()=>n(null),children:t.jsxs(T,{sx:{color:"common.white"},children:[t.jsxs(T,{sx:{mb:1,display:"flex",alignItems:"center"},children:[t.jsx(T,{sx:{height:"18px",minWidth:"28px",marginRight:"8px",borderRadius:"4px",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`url(https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${a.country_code.toLowerCase()}.svg)`}}),t.jsx(g,{variant:"subtitle2",children:a.name})]}),t.jsxs(g,{component:"div",variant:"caption",children:["Timezones: ",a.timezones]}),t.jsxs(g,{component:"div",variant:"caption",children:["Lat: ",a.latlng[0]]}),t.jsxs(g,{component:"div",variant:"caption",children:["Long: ",a.latlng[1]]}),t.jsx(st,{alt:a.name,src:a.photoUrl,ratio:"4/3",sx:{mt:1,borderRadius:1}})]})})]})}X.propTypes={data:u.array};const It=i.memo(X),Et=["onDragStart","onDrag","onDragEnd"];function E(e){return(Math.round(e*1e5)/1e5).toFixed(5)}function Q({events:e={}}){return t.jsx(P,{children:Et.map(o=>{const a=e[o];return t.jsxs("div",{children:[t.jsxs(g,{variant:"subtitle2",sx:{color:"common.white"},children:[o,":"]}),a?t.jsx(g,{variant:"subtitle2",sx:{color:"primary.main"},children:`${E(a.lng)}, ${E(a.lat)}`}):t.jsx(g,{variant:"body2",component:"em",sx:{color:"error.main"},children:"null"})]},o)})})}Q.propTypes={events:u.object};const $t=i.memo(Q);function Rt({...e}){const[o,a]=i.useState({latitude:40,longitude:-100}),[n,s]=i.useState({}),l=i.useCallback(c=>{s(r=>({...r,onDragStart:c.lngLat}))},[]),m=i.useCallback(c=>{s(r=>({...r,onDrag:c.lngLat})),a({longitude:c.lngLat.lng,latitude:c.lngLat.lat})},[]),p=i.useCallback(c=>{s(r=>({...r,onDragEnd:c.lngLat}))},[]);return t.jsxs(t.Fragment,{children:[t.jsxs(x,{initialViewState:{latitude:40,longitude:-100,zoom:3.5},...e,children:[t.jsx(v,{}),t.jsx(Z,{longitude:o.longitude,latitude:o.latitude,anchor:"bottom",draggable:!0,onDragStart:l,onDrag:m,onDragEnd:p})]}),t.jsx($t,{events:n})]})}const Bt=i.memo(Rt);function tt({data:e,selectedCity:o,onSelectCity:a}){return t.jsx(P,{children:e.map(n=>t.jsx(B,{value:o,onChange:s=>a(s,n),children:t.jsx(V,{value:n.city,label:n.city,control:t.jsx(G,{size:"small"}),sx:{color:"common.white"}})},n.city))})}tt.propTypes={data:u.array,onSelectCity:u.func,selectedCity:u.string};const Vt=i.memo(tt);function et({data:e,...o}){const a=i.useRef(null),[n,s]=i.useState(e[2].city),l=i.useCallback((m,{longitude:p,latitude:c})=>{var r;s(m.target.value),(r=a.current)==null||r.flyTo({center:[p,c],duration:2e3})},[]);return t.jsxs(x,{initialViewState:{latitude:37.7751,longitude:-122.4193,zoom:11,bearing:0,pitch:0},ref:a,...o,children:[t.jsx(v,{}),t.jsx(Vt,{data:e,selectedCity:n,onSelectCity:l})]})}et.propTypes={data:u.array};const Gt=i.memo(et);function Ht({...e}){const a={id:"point",type:"circle",paint:{"circle-radius":10,"circle-color":H().palette.error.main}},[n,s]=i.useState(null);return i.useEffect(()=>{const l=window.requestAnimationFrame(()=>s(Jt({center:[-100,0],angle:Date.now()/1e3,radius:20})));return()=>window.cancelAnimationFrame(l)}),t.jsxs(x,{initialViewState:{latitude:0,longitude:-100,zoom:3},mapStyle:"mapbox://styles/mapbox/satellite-streets-v11",...e,children:[t.jsx(v,{}),n&&t.jsx(A,{type:"geojson",data:n,children:t.jsx(C,{...a})})]})}const Zt=i.memo(Ht);function Jt({center:e,angle:o,radius:a}){return{type:"Point",coordinates:[e[0]+Math.cos(o)*a,e[1]+Math.sin(o)*a]}}function Ot({...e}){const o=H(),a={id:"counties",type:"fill","source-layer":"original",paint:{"fill-outline-color":o.palette.grey[900],"fill-color":o.palette.grey[900],"fill-opacity":.12}},n={id:"counties-highlighted",type:"fill",source:"counties","source-layer":"original",paint:{"fill-outline-color":o.palette.error.main,"fill-color":o.palette.error.main,"fill-opacity":.48}},[s,l]=i.useState(null),m=i.useCallback(r=>{var h;const d=r.features&&r.features[0];l({longitude:r.lngLat.lng,latitude:r.lngLat.lat,countyName:d&&((h=d.properties)==null?void 0:h.COUNTY)})},[]),p=s&&s.countyName||"",c=i.useMemo(()=>["in","COUNTY",p],[p]);return t.jsxs(x,{initialViewState:{latitude:38.88,longitude:-98,zoom:3},minZoom:2,onMouseMove:m,interactiveLayerIds:["counties"],...e,children:[t.jsx(v,{}),t.jsxs(A,{type:"vector",url:"mapbox://mapbox.82pkq93d",children:[t.jsx(C,{beforeId:"waterway-label",...a}),t.jsx(C,{beforeId:"waterway-label",...n,filter:c})]}),p&&s&&t.jsx(J,{longitude:s.longitude,latitude:s.latitude,closeButton:!1,children:t.jsx(g,{variant:"body2",sx:{color:"common.white"},children:p})})]})}const Wt=i.memo(Ot),S={streets:"mapbox://styles/mapbox/streets-v11",outdoors:"mapbox://styles/mapbox/outdoors-v11",light:"mapbox://styles/mapbox/light-v10",dark:"mapbox://styles/mapbox/dark-v10",satellite:"mapbox://styles/mapbox/satellite-v9",satelliteStreets:"mapbox://styles/mapbox/satellite-streets-v11"},f={mapboxAccessToken:dt,minZoom:1},k=R("div")(({theme:e})=>({zIndex:0,height:560,overflow:"hidden",position:"relative",borderRadius:e.shape.borderRadius,"& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right":{display:"none"}}));function qt(){return t.jsxs(t.Fragment,{children:[t.jsx(mt,{children:t.jsx(lt,{heading:"Map",links:[{name:"Components",href:rt.components},{name:"Map"}],moreLink:["http://visgl.github.io/react-map-gl","http://visgl.github.io/react-map-gl/examples"]})}),t.jsx(ct,{sx:{my:10},children:t.jsxs(pt,{spacing:5,children:[t.jsxs(j,{children:[t.jsx(b,{title:"Change Theme"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Nt,{...f,themes:S})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Markers & Popups"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(It,{...f,data:xt,mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Draggable Markers"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Bt,{...f,mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Geojson Animation"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Zt,{...f,mapStyle:S.satelliteStreets})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Clusters"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Ct,{...f,mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Interaction"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Tt,{...f,mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Viewport Animation"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Gt,{...f,data:gt.filter(e=>e.state==="Texas"),mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Highlight By Filter"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Wt,{...f,mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Heatmap"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(_t,{...f,mapStyle:S.light})})})]}),t.jsxs(j,{children:[t.jsx(b,{title:"Side By Side"}),t.jsx(_,{children:t.jsx(k,{children:t.jsx(Ut,{...f})})})]})]})})]})}function te(){return t.jsxs(t.Fragment,{children:[t.jsx(ut,{children:t.jsx("title",{children:" Components: Map"})}),t.jsx(qt,{})]})}export{te as default};
