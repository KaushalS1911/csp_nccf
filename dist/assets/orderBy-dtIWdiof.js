import{bw as A,bx as B,by as e,bz as M,bA as m,bB as s,bC as g,bD as $,bE as C}from"./index-OKHCej4L.js";import{_ as E}from"./_baseEach-k39UcnOI.js";var k=E,o=A;function w(n,r){var a=-1,u=o(n)?Array(n.length):[];return k(n,function(b,i,c){u[++a]=r(b,i,c)}),u}var x=w;function L(n,r){var a=n.length;for(n.sort(r);a--;)n[a]=n[a].value;return n}var O=L,y=B;function G(n,r){if(n!==r){var a=n!==void 0,u=n===null,b=n===n,i=y(n),c=r!==void 0,p=r===null,t=r===r,f=y(r);if(!p&&!f&&!i&&n>r||i&&c&&t&&!p&&!f||u&&c&&t||!a&&t||!b)return 1;if(!u&&!i&&!f&&n<r||f&&a&&b&&!u&&!i||p&&a&&b||!c&&b||!t)return-1}return 0}var U=G,j=U;function z(n,r,a){for(var u=-1,b=n.criteria,i=r.criteria,c=b.length,p=a.length;++u<c;){var t=j(b[u],i[u]);if(t){if(u>=p)return t;var f=a[u];return t*(f=="desc"?-1:1)}}return n.index-r.index}var F=z,_=e,q=m,H=$,J=x,K=O,P=s,Q=F,T=M,V=g;function W(n,r,a){r.length?r=_(r,function(i){return V(i)?function(c){return q(c,i.length===1?i[0]:i)}:i}):r=[T];var u=-1;r=_(r,P(H));var b=J(n,function(i,c,p){var t=_(r,function(f){return f(i)});return{criteria:t,index:++u,value:i}});return K(b,function(i,c){return Q(i,c,a)})}var X=W,Y=X,d=g;function Z(n,r,a,u){return n==null?[]:(d(r)||(r=r==null?[]:[r]),a=u?void 0:a,d(a)||(a=a==null?[]:[a]),Y(n,r,a))}var v=Z;const h=C(v);export{h as o};
