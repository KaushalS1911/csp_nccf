import{eO as m,r as b,j as e,cu as h,p as x,C as p,q as g,ah as t,B as u,af as j,W as C,E as k,S as f,J as T,x as l,aB as o,eQ as w,gh as y,H as F}from"./index-ePOSdPGB.js";import{C as B}from"./component-hero-PK0Z9_bp.js";const S=[...Array(4)].map((d,s)=>({src:y.image.cover(s+1),title:"Flamingo",description:`Vicko Mozara 
 Veliki zali, Dubravica, Croatia`})),r=[...S,{type:"video",width:1280,height:720,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",type:"video/mp4"}]}];function L(){const d=m(r),[s,c]=b.useState({disabledZoom:!1,disabledVideo:!1,disabledTotal:!1,disabledCaptions:!1,disabledSlideshow:!1,disabledThumbnails:!1,disabledFullscreen:!1}),a=i=>{c({...s,[i.target.name]:i.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx(h,{heading:"Lightbox",links:[{name:"Components",href:x.components},{name:"Lightbox"}],moreLink:["https://www.npmjs.com/package/yet-another-react-lightbox"]})}),e.jsx(p,{sx:{my:10},children:e.jsx(g,{sx:{p:3},children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{xs:12,md:9,children:e.jsx(u,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:r.map(i=>{const n=i.type==="video"?i.poster:i.src;return e.jsx(j,{alt:n,src:n,ratio:"1/1",onClick:()=>d.onOpen(`${n}`),sx:{borderRadius:1,cursor:"pointer"}},n)})})}),e.jsx(t,{xs:12,md:3,children:e.jsx(C,{sx:{p:3,bgcolor:"background.neutral",borderRadius:2},children:e.jsx(k,{component:"fieldset",variant:"standard",children:e.jsxs(f,{spacing:2,children:[e.jsx(T,{component:"legend",sx:{typography:"body2"},children:"Controls"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledZoom",checked:s.disabledZoom,onChange:a}),label:"Disabled Zoom"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledTotal",checked:s.disabledTotal,onChange:a}),label:"Disabled Total"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledVideo",checked:s.disabledVideo,onChange:a}),label:"Disabled Video"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledCaptions",checked:s.disabledCaptions,onChange:a}),label:"Disabled Captions"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledSlideshow",checked:s.disabledSlideshow,onChange:a}),label:"Disabled Slideshow"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledThumbnails",checked:s.disabledThumbnails,onChange:a}),label:"Disabled Thumbnails"}),e.jsx(l,{control:e.jsx(o,{size:"small",name:"disabledFullscreen",checked:s.disabledFullscreen,onChange:a}),label:"Disabled Fullscreen"})]})})})})]})})}),e.jsx(w,{open:d.open,close:d.onClose,slides:r,index:d.selected,disabledZoom:s.disabledZoom,disabledTotal:s.disabledTotal,disabledVideo:s.disabledVideo,disabledCaptions:s.disabledCaptions,disabledSlideshow:s.disabledSlideshow,disabledThumbnails:s.disabledThumbnails,disabledFullscreen:s.disabledFullscreen})]})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx("title",{children:" Components: Lightbox"})}),e.jsx(L,{})]})}export{V as default};