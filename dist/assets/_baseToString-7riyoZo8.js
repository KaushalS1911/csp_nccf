import{cv as h,cw as y,cx as b,cy as l,cn as g}from"./index-ZfuUZpXM.js";function v(r,e){for(var a=-1,t=r==null?0:r.length,n=Array(t);++a<t;)n[a]=e(r[a],a,r);return n}var _=v,d=h,T=y,S="[object Symbol]";function C(r){return typeof r=="symbol"||T(r)&&d(r)==S}var z=C,u=b,E="Expected a function";function o(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(E);var a=function(){var t=arguments,n=e?e.apply(this,t):t[0],i=a.cache;if(i.has(n))return i.get(n);var c=r.apply(this,t);return a.cache=i.set(n,c)||i,c};return a.cache=new(o.Cache||u),a}o.Cache=u;var M=o,$=M,w=500;function A(r){var e=$(r,function(t){return a.size===w&&a.clear(),t}),a=e.cache;return e}var I=A,x=I,N=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,O=/\\(\\)?/g,P=x(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(N,function(a,t,n,i){e.push(n?i.replace(O,"$1"):t||a)}),e}),L=P,s=l,j=_,k=g,R=z,F=1/0,p=s?s.prototype:void 0,m=p?p.toString:void 0;function f(r){if(typeof r=="string")return r;if(k(r))return j(r,f)+"";if(R(r))return m?m.call(r):"";var e=r+"";return e=="0"&&1/r==-F?"-0":e}var X=f;export{_,X as a,L as b,z as i};
