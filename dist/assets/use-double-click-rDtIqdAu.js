import{r as o}from"./index-XFh7EM9A.js";function s({click:u,doubleClick:e,timeout:i=250}){const r=o.useRef(),a=()=>{r&&(clearTimeout(r.current),r.current=null)};return o.useCallback(t=>{a(),u&&t.detail===1&&(r.current=setTimeout(()=>{u(t)},i)),t.detail%2===0&&e(t)},[u,e,i])}export{s as u};
