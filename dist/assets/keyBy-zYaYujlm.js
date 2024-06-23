import{fh as x,fi as $,fj as U,fk as p,fl as z,fm as m,fn as N,fo as L,cg as Y,bg as j,fp as B}from"./index-4yL3xM3x.js";import{_ as C}from"./_baseEach-ID6Eyj2D.js";import{a as F}from"./_baseIteratee-w9NhNkyT.js";var b=1e3*60,h=60*24,y=h*30,E=h*365;function H(r,a,e){var n,o,s;x(2,arguments);var u=L(),f=(n=(o=e==null?void 0:e.locale)!==null&&o!==void 0?o:u.locale)!==null&&n!==void 0?n:$;if(!f.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var _=U(r,a);if(isNaN(_))throw new RangeError("Invalid time value");var l=p(z(e),{addSuffix:!!(e!=null&&e.addSuffix),comparison:_}),v,d;_>0?(v=m(a),d=m(r)):(v=m(r),d=m(a));var M=String((s=e==null?void 0:e.roundingMethod)!==null&&s!==void 0?s:"round"),i;if(M==="floor")i=Math.floor;else if(M==="ceil")i=Math.ceil;else if(M==="round")i=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var A=d.getTime()-v.getTime(),g=A/b,S=N(d)-N(v),c=(A-S)/b,D=e==null?void 0:e.unit,t;if(D?t=String(D):g<1?t="second":g<60?t="minute":g<h?t="hour":c<y?t="day":c<E?t="month":t="year",t==="second"){var w=i(A/1e3);return f.formatDistance("xSeconds",w,l)}else if(t==="minute"){var T=i(g);return f.formatDistance("xMinutes",T,l)}else if(t==="hour"){var O=i(g/60);return f.formatDistance("xHours",O,l)}else if(t==="day"){var k=i(c/h);return f.formatDistance("xDays",k,l)}else if(t==="month"){var I=i(c/y);return I===12&&D!=="month"?f.formatDistance("xYears",1,l):f.formatDistance("xMonths",I,l)}else if(t==="year"){var R=i(c/E);return f.formatDistance("xYears",R,l)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function fe(r,a){return x(1,arguments),H(r,Date.now(),a)}function V(r,a,e,n){for(var o=-1,s=r==null?0:r.length;++o<s;){var u=r[o];a(n,u,e(u),r)}return n}var q=V,G=C;function J(r,a,e,n){return G(r,function(o,s,u){a(n,o,e(o),u)}),n}var K=J,P=q,Q=K,W=F,X=Y;function Z(r,a){return function(e,n){var o=X(e)?P:Q,s=a?a():{};return o(e,r,W(n),s)}}var ee=Z,re=B,ae=ee,te=ae(function(r,a,e){re(r,e,a)}),ne=te;const le=j(ne);export{fe as f,le as k};
