"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var y=f(function(w,q){
function T(a,e,t,r,s,o){var i,u,n,c,v;for(i=r.data,u=r.accessors[0],n=r.accessors[1],c=o,v=0;v<a;v++)u(i,c)>=e&&n(i,c,t),c+=s;return r}q.exports=T
});var l=f(function(z,d){
var b=require('@stdlib/array-base-arraylike2object/dist'),E=y();function h(a,e,t,r,s,o){var i,u,n;if(a<=0)return r;if(u=b(r),u.accessorProtocol)return E(a,e,t,u,s,o),r;for(i=o,n=0;n<a;n++)r[i]>=e&&(r[i]=t),i+=s;return r}d.exports=h
});var p=f(function(A,g){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=l();function O(a,e,t,r,s){return k(a,e,t,r,s,j(a,s))}g.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=p(),R=l();P(G,"ndarray",R);module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
