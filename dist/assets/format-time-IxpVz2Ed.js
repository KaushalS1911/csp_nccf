import{bW as S,bX as M,bY as x,bZ as O,b_ as l,b$ as A,c0 as g,c1 as p,c2 as E,c3 as T}from"./index-6b9YNlCU.js";function y(e){return S({},e)}var h=1440,Y=2520,v=43200,H=86400;function U(e,a,t){var o,m;M(2,arguments);var N=E(),n=(o=(m=t==null?void 0:t.locale)!==null&&m!==void 0?m:N.locale)!==null&&o!==void 0?o:x;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var D=O(e,a);if(isNaN(D))throw new RangeError("Invalid time value");var r=S(y(t),{addSuffix:!!(t!=null&&t.addSuffix),comparison:D}),u,c;D>0?(u=l(a),c=l(e)):(u=l(e),c=l(a));var i=A(c,u),_=(g(c)-g(u))/1e3,s=Math.round((i-_)/60),f;if(s<2)return t!=null&&t.includeSeconds?i<5?n.formatDistance("lessThanXSeconds",5,r):i<10?n.formatDistance("lessThanXSeconds",10,r):i<20?n.formatDistance("lessThanXSeconds",20,r):i<40?n.formatDistance("halfAMinute",0,r):i<60?n.formatDistance("lessThanXMinutes",1,r):n.formatDistance("xMinutes",1,r):s===0?n.formatDistance("lessThanXMinutes",1,r):n.formatDistance("xMinutes",s,r);if(s<45)return n.formatDistance("xMinutes",s,r);if(s<90)return n.formatDistance("aboutXHours",1,r);if(s<h){var I=Math.round(s/60);return n.formatDistance("aboutXHours",I,r)}else{if(s<Y)return n.formatDistance("xDays",1,r);if(s<v){var b=Math.round(s/h);return n.formatDistance("xDays",b,r)}else if(s<H)return f=Math.round(s/v),n.formatDistance("aboutXMonths",f,r)}if(f=p(c,u),f<12){var X=Math.round(s/v);return n.formatDistance("xMonths",X,r)}else{var w=f%12,d=Math.floor(f/12);return w<3?n.formatDistance("aboutXYears",d,r):w<9?n.formatDistance("overXYears",d,r):n.formatDistance("almostXYears",d+1,r)}}function L(e,a){return M(1,arguments),U(e,Date.now(),a)}function R(e){M(1,arguments);var a=l(e),t=a.getTime();return t}function z(e,a){const t=a||"dd MMM yyyy";return e?T(new Date(e),t):""}function $(e,a){const t=a||"p";return e?T(new Date(e),t):""}function j(e,a){const t=a||"dd MMM yyyy p";return e?T(new Date(e),t):""}function q(e){return e?R(new Date(e)):""}function Z(e){return e?L(new Date(e),{addSuffix:!0}):""}function k(e,a,t){const o=new Date(e);return new Date(o.toDateString())>=new Date(a.toDateString())&&new Date(o.toDateString())<=new Date(t.toDateString())}function B(e,a){return e&&a?new Date(e).getTime()>new Date(a).getTime():!1}export{$ as a,Z as b,j as c,k as d,y as e,z as f,q as g,B as i};
