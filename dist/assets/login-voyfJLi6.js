import{u as d,b as g,r as n,P as o,j as r,T as x,S as p,D as i,O as m,H as j}from"./index-ptSJn8SQ.js";function y(){const{loginWithRedirect:a,loginWithPopup:e}=d(),s=g().get("returnTo"),c=n.useCallback(async()=>{try{await(e==null?void 0:e())}catch(t){console.error(t)}},[e]),l=n.useCallback(async()=>{try{await(e==null?void 0:e({authorizationParams:{screen_hint:"signup"}}))}catch(t){console.error(t)}},[e]),h=n.useCallback(async()=>{try{await(a==null?void 0:a({appState:{returnTo:s||o}}))}catch(t){console.error(t)}},[a,s]),u=n.useCallback(async()=>{try{await(a==null?void 0:a({appState:{returnTo:s||o},authorizationParams:{screen_hint:"signup"}}))}catch(t){console.error(t)}},[a,s]);return r.jsxs(r.Fragment,{children:[r.jsx(x,{variant:"h4",sx:{mb:5},children:"Sign in to Minimal"}),r.jsxs(p,{spacing:2,children:[r.jsx(i,{fullWidth:!0,color:"primary",size:"large",variant:"contained",onClick:h,children:"Login with Redirect"}),r.jsx(i,{fullWidth:!0,color:"primary",size:"large",variant:"soft",onClick:u,children:"Register with Redirect"}),r.jsx(m,{}),r.jsx(i,{fullWidth:!0,color:"inherit",size:"large",variant:"contained",onClick:c,children:"Login With Popup"}),r.jsx(i,{fullWidth:!0,color:"inherit",size:"large",variant:"soft",onClick:l,children:"Register With Popup"})]})]})}function C(){return r.jsxs(r.Fragment,{children:[r.jsx(j,{children:r.jsx("title",{children:" Auth0: Login"})}),r.jsx(y,{})]})}export{C as default};
