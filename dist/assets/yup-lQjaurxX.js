import{g as v,s as l,b as m}from"./form-provider-nQFnmWy0.js";var y=function(r,e,t){if(r&&"reportValidity"in r){var a=v(t,e);r.setCustomValidity(a&&a.message||""),r.reportValidity()}},h=function(r,e){var t=function(f){var n=e.fields[f];n&&n.ref&&"reportValidity"in n.ref?y(n.ref,f,r):n.refs&&n.refs.forEach(function(i){return y(i,f,r)})};for(var a in e.fields)t(a)},g=function(r,e){e.shouldUseNativeValidation&&h(r,e);var t={};for(var a in r){var f=v(e.fields,a),n=Object.assign(r[a]||{},{ref:f&&f.ref});if(b(e.names||Object.keys(r),a)){var i=Object.assign({},V(v(t,a)));l(i,"root",n),l(t,a,i)}else l(t,a,n)}return t},V=function(r){return Array.isArray(r)?r.filter(Boolean):[]},b=function(r,e){return r.some(function(t){return t.startsWith(e+".")})};function O(r,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),function(a,f,n){try{return Promise.resolve(function(i,c){try{var u=(e.context,Promise.resolve(r[t.mode==="sync"?"validateSync":"validate"](a,Object.assign({abortEarly:!1},e,{context:f}))).then(function(s){return n.shouldUseNativeValidation&&h({},n),{values:t.raw?a:s,errors:{}}}))}catch(s){return c(s)}return u&&u.then?u.then(void 0,c):u}(0,function(i){if(!i.inner)throw i;return{values:{},errors:g((c=i,u=!n.shouldUseNativeValidation&&n.criteriaMode==="all",(c.inner||[]).reduce(function(s,o){if(s[o.path]||(s[o.path]={message:o.message,type:o.type}),u){var d=s[o.path].types,p=d&&d[o.type];s[o.path]=m(o.path,u,s,o.type,p?[].concat(p,o.message):o.message)}return s},{})),n)};var c,u}))}catch(i){return Promise.reject(i)}}}export{O as o};
