import{r as e,br as P,bs as $,bt as O,bu as U,bv as L}from"./index-6b9YNlCU.js";function k(){const n=e.useRef(!1);return P(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function B(){const n=k(),[s,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(s+1)},[s]);return[e.useCallback(()=>$.postRender(r),[r]),s]}class S extends e.Component{getSnapshotBeforeUpdate(s){const t=this.props.childRef.current;if(t&&s.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function T({children:n,isPresent:s}){const t=e.useId(),r=e.useRef(null),h=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:d,height:l,top:f,left:m}=h.current;if(s||!r.current||!d||!l)return;r.current.dataset.motionPopId=t;const a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${l}px !important;
            top: ${f}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[s]),e.createElement(S,{isPresent:s,childRef:r,sizeRef:h},e.cloneElement(n,{ref:r}))}const b=({children:n,initial:s,isPresent:t,onExitComplete:r,custom:h,presenceAffectsLayout:d,mode:l})=>{const f=O(A),m=e.useId(),a=e.useMemo(()=>({id:m,initial:s,isPresent:t,custom:h,onExitComplete:o=>{f.set(o,!0);for(const u of f.values())if(!u)return;r&&r()},register:o=>(f.set(o,!1),()=>f.delete(o))}),d?void 0:[t]);return e.useMemo(()=>{f.forEach((o,u)=>f.set(u,!1))},[t]),e.useEffect(()=>{!t&&!f.size&&r&&r()},[t]),l==="popLayout"&&(n=e.createElement(T,{isPresent:t},n)),e.createElement(U.Provider,{value:a},n)};function A(){return new Map}function D(n){return e.useEffect(()=>()=>n(),[])}const p=n=>n.key||"";function G(n,s){n.forEach(t=>{const r=p(t);s.set(r,t)})}function H(n){const s=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&s.push(t)}),s}const W=({children:n,custom:s,initial:t=!0,onExitComplete:r,exitBeforeEnter:h,presenceAffectsLayout:d=!0,mode:l="sync"})=>{const f=e.useContext(L).forceRender||B()[0],m=k(),a=H(n);let o=a;const u=e.useRef(new Map).current,x=e.useRef(o),C=e.useRef(new Map).current,g=e.useRef(!0);if(P(()=>{g.current=!1,G(a,C),x.current=o}),D(()=>{g.current=!0,C.clear(),u.clear()}),g.current)return e.createElement(e.Fragment,null,o.map(i=>e.createElement(b,{key:p(i),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:d,mode:l},i)));o=[...o];const y=x.current.map(p),M=a.map(p),I=y.length;for(let i=0;i<I;i++){const c=y[i];M.indexOf(c)===-1&&!u.has(c)&&u.set(c,void 0)}return l==="wait"&&u.size&&(o=[]),u.forEach((i,c)=>{if(M.indexOf(c)!==-1)return;const w=C.get(c);if(!w)return;const F=y.indexOf(c);let R=i;if(!R){const K=()=>{u.delete(c);const v=Array.from(C.keys()).filter(E=>!M.includes(E));if(v.forEach(E=>C.delete(E)),x.current=a.filter(E=>{const z=p(E);return z===c||v.includes(z)}),!u.size){if(m.current===!1)return;f(),r&&r()}};R=e.createElement(b,{key:p(w),isPresent:!1,onExitComplete:K,custom:s,presenceAffectsLayout:d,mode:l},w),u.set(c,R)}o.splice(F,0,R)}),o=o.map(i=>{const c=i.key;return u.has(c)?i:e.createElement(b,{key:p(i),isPresent:!0,presenceAffectsLayout:d,mode:l},i)}),e.createElement(e.Fragment,null,u.size?o:o.map(i=>e.cloneElement(i)))};export{W as A};
