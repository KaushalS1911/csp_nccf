import{bG as l,j as n,bW as h,p as d,C as x,t as i,H as m}from"./index-rcXNTvDP.js";import{C as j}from"./component-hero-XluJHIn7.js";import{C as a}from"./component-block-zmBch5k9.js";import{M as f}from"./Masonry-RYzoG-nJ.js";function k(){const{enqueueSnackbar:t,closeSnackbar:c}=l(),r=(o,s)=>{t(`This is an ${o}`,{variant:o,anchorOrigin:s,action:e=>n.jsxs(n.Fragment,{children:[n.jsx(i,{size:"small",color:o!=="default"?o:"primary",onClick:()=>{console.info(`I belong to snackbar with key ${e}`)},children:"Alert"}),n.jsx(i,{size:"small",color:"inherit",onClick:()=>c(e),children:"Dismiss"})]})})};return n.jsxs(n.Fragment,{children:[n.jsx(j,{children:n.jsx(h,{heading:"Snackbar",links:[{name:"Components",href:d.components},{name:"Snackbar"}],moreLink:["https://www.iamhosseindhv.com/notistack"]})}),n.jsx(x,{sx:{my:10},children:n.jsxs(f,{columns:{xs:1,md:2},spacing:3,children:[n.jsxs(a,{title:"Simple",children:[n.jsx(i,{variant:"contained",color:"inherit",onClick:()=>t("This is an default",{variant:"default"}),children:"Default"}),n.jsx(i,{variant:"contained",color:"info",onClick:()=>t("This is an info",{variant:"info"}),children:"Info"}),n.jsx(i,{variant:"contained",color:"success",onClick:()=>t("This is an success",{variant:"success"}),children:"Success"}),n.jsx(i,{variant:"contained",color:"warning",onClick:()=>t("This is an warning",{variant:"warning"}),children:"Warning"}),n.jsx(i,{variant:"contained",color:"error",onClick:()=>t("This is an error",{variant:"error"}),children:"Error"})]}),n.jsxs(a,{title:"With Action",children:[n.jsx(i,{variant:"contained",color:"inherit",onClick:()=>r("default"),children:"Default"}),n.jsx(i,{variant:"contained",color:"info",onClick:()=>r("info"),children:"Info"}),n.jsx(i,{variant:"contained",color:"success",onClick:()=>r("success"),children:"Success"}),n.jsx(i,{variant:"contained",color:"warning",onClick:()=>r("warning"),children:"Warning"}),n.jsx(i,{variant:"contained",color:"error",onClick:()=>r("error"),children:"Error"})]}),n.jsxs(a,{title:"anchorOrigin",children:[n.jsx(i,{variant:"text",color:"inherit",onClick:()=>r("default",{vertical:"top",horizontal:"left"}),children:"Top Left"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>r("default",{vertical:"top",horizontal:"center"}),children:"Top Center"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>r("default"),children:"Top Right"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>r("default",{vertical:"bottom",horizontal:"left"}),children:"Bottom Left"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>r("default",{vertical:"bottom",horizontal:"center"}),children:"Bottom Center"}),n.jsx(i,{variant:"text",color:"inherit",onClick:()=>r("default",{vertical:"bottom",horizontal:"right"}),children:"Bottom Right"})]})]})})]})}function g(){return n.jsxs(n.Fragment,{children:[n.jsx(m,{children:n.jsx("title",{children:" Components: Snackbar"})}),n.jsx(k,{})]})}export{g as default};
