/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/polygon-pathfinding/bundle.js":
/*!****************************************************!*\
  !*** ./node_modules/polygon-pathfinding/bundle.js ***!
  \****************************************************/
/***/ ((module) => {

eval("(()=>{\"use strict\";var t={187:t=>{function e(t,e,i){i=i||2;var s,o,h,l,c,x,g,y=e&&e.length,f=y?e[0]*i:t.length,v=n(t,0,f,i,!0),d=[];if(!v||v.next===v.prev)return d;if(y&&(v=function(t,e,i,r){var s,o,h,l=[];for(s=0,o=e.length;s<o;s++)(h=n(t,e[s]*r,s<o-1?e[s+1]*r:t.length,r,!1))===h.next&&(h.steiner=!0),l.push(p(h));for(l.sort(a),s=0;s<l.length;s++)i=u(l[s],i);return i}(t,e,v,i)),t.length>80*i){s=h=t[0],o=l=t[1];for(var P=i;P<f;P+=i)(c=t[P])<s&&(s=c),(x=t[P+1])<o&&(o=x),c>h&&(h=c),x>l&&(l=x);g=0!==(g=Math.max(h-s,l-o))?32767/g:0}return r(v,d,i,s,o,g,0),d}function n(t,e,n,i,r){var s,o;if(r===_(t,e,n,i)>0)for(s=e;s<n;s+=i)o=M(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=M(s,t[s],t[s+1],o);return o&&v(o,o.next)&&(B(o),o=o.next),o}function i(t,e){if(!t)return t;e||(e=t);var n,i=t;do{if(n=!1,i.steiner||!v(i,i.next)&&0!==f(i.prev,i,i.next))i=i.next;else{if(B(i),(i=e=i.prev)===i.next)break;n=!0}}while(n||i!==e);return e}function r(t,e,n,a,u,c,p){if(t){!p&&c&&function(t,e,n,i){var r=t;do{0===r.z&&(r.z=x(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){var e,n,i,r,s,o,h,l,a=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,h=0,e=0;e<a&&(h++,i=i.nextZ);e++);for(l=a;h>0||l>0&&i;)0!==h&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,h--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,a*=2}while(o>1)}(r)}(t,a,u,c);for(var g,y,f=t;t.prev!==t.next;)if(g=t.prev,y=t.next,c?o(t,a,u,c):s(t))e.push(g.i/n|0),e.push(t.i/n|0),e.push(y.i/n|0),B(t),t=y.next,f=y.next;else if((t=y)===f){p?1===p?r(t=h(i(t),e,n),e,n,a,u,c,2):2===p&&l(t,e,n,a,u,c):r(i(t),e,n,a,u,c,1);break}}}function s(t){var e=t.prev,n=t,i=t.next;if(f(e,n,i)>=0)return!1;for(var r=e.x,s=n.x,o=i.x,h=e.y,l=n.y,a=i.y,u=r<s?r<o?r:o:s<o?s:o,c=h<l?h<a?h:a:l<a?l:a,x=r>s?r>o?r:o:s>o?s:o,p=h>l?h>a?h:a:l>a?l:a,y=i.next;y!==e;){if(y.x>=u&&y.x<=x&&y.y>=c&&y.y<=p&&g(r,h,s,l,o,a,y.x,y.y)&&f(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function o(t,e,n,i){var r=t.prev,s=t,o=t.next;if(f(r,s,o)>=0)return!1;for(var h=r.x,l=s.x,a=o.x,u=r.y,c=s.y,p=o.y,y=h<l?h<a?h:a:l<a?l:a,v=u<c?u<p?u:p:c<p?c:p,d=h>l?h>a?h:a:l>a?l:a,P=u>c?u>p?u:p:c>p?c:p,b=x(y,v,e,n,i),m=x(d,P,e,n,i),w=t.prevZ,M=t.nextZ;w&&w.z>=b&&M&&M.z<=m;){if(w.x>=y&&w.x<=d&&w.y>=v&&w.y<=P&&w!==r&&w!==o&&g(h,u,l,c,a,p,w.x,w.y)&&f(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,M.x>=y&&M.x<=d&&M.y>=v&&M.y<=P&&M!==r&&M!==o&&g(h,u,l,c,a,p,M.x,M.y)&&f(M.prev,M,M.next)>=0)return!1;M=M.nextZ}for(;w&&w.z>=b;){if(w.x>=y&&w.x<=d&&w.y>=v&&w.y<=P&&w!==r&&w!==o&&g(h,u,l,c,a,p,w.x,w.y)&&f(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=m;){if(M.x>=y&&M.x<=d&&M.y>=v&&M.y<=P&&M!==r&&M!==o&&g(h,u,l,c,a,p,M.x,M.y)&&f(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function h(t,e,n){var r=t;do{var s=r.prev,o=r.next.next;!v(s,o)&&d(s,r,r.next,o)&&m(s,o)&&m(o,s)&&(e.push(s.i/n|0),e.push(r.i/n|0),e.push(o.i/n|0),B(r),B(r.next),r=t=o),r=r.next}while(r!==t);return i(r)}function l(t,e,n,s,o,h){var l=t;do{for(var a=l.next.next;a!==l.prev;){if(l.i!==a.i&&y(l,a)){var u=w(l,a);return l=i(l,l.next),u=i(u,u.next),r(l,e,n,s,o,h,0),void r(u,e,n,s,o,h,0)}a=a.next}l=l.next}while(l!==t)}function a(t,e){return t.x-e.x}function u(t,e){var n=function(t,e){var n,i=e,r=t.x,s=t.y,o=-1/0;do{if(s<=i.y&&s>=i.next.y&&i.next.y!==i.y){var h=i.x+(s-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(h<=r&&h>o&&(o=h,n=i.x<i.next.x?i:i.next,h===r))return n}i=i.next}while(i!==e);if(!n)return null;var l,a=n,u=n.x,x=n.y,p=1/0;i=n;do{r>=i.x&&i.x>=u&&r!==i.x&&g(s<x?r:o,s,u,x,s<x?o:r,s,i.x,i.y)&&(l=Math.abs(s-i.y)/(r-i.x),m(i,t)&&(l<p||l===p&&(i.x>n.x||i.x===n.x&&c(n,i)))&&(n=i,p=l)),i=i.next}while(i!==a);return n}(t,e);if(!n)return e;var r=w(n,t);return i(r,r.next),i(n,n.next)}function c(t,e){return f(t.prev,t,e.prev)<0&&f(e.next,t,t.next)<0}function x(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function p(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function g(t,e,n,i,r,s,o,h){return(r-o)*(e-h)>=(t-o)*(s-h)&&(t-o)*(i-h)>=(n-o)*(e-h)&&(n-o)*(s-h)>=(r-o)*(i-h)}function y(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&d(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(m(t,e)&&m(e,t)&&function(t,e){var n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==t);return i}(t,e)&&(f(t.prev,t,e.prev)||f(t,e.prev,e))||v(t,e)&&f(t.prev,t,t.next)>0&&f(e.prev,e,e.next)>0)}function f(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function v(t,e){return t.x===e.x&&t.y===e.y}function d(t,e,n,i){var r=b(f(t,e,n)),s=b(f(t,e,i)),o=b(f(n,i,t)),h=b(f(n,i,e));return r!==s&&o!==h||(!(0!==r||!P(t,n,e))||(!(0!==s||!P(t,i,e))||(!(0!==o||!P(n,t,i))||!(0!==h||!P(n,e,i)))))}function P(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function b(t){return t>0?1:t<0?-1:0}function m(t,e){return f(t.prev,t,t.next)<0?f(t,e,t.next)>=0&&f(t,t.prev,e)>=0:f(t,e,t.prev)<0||f(t,t.next,e)<0}function w(t,e){var n=new Z(t.i,t.x,t.y),i=new Z(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function M(t,e,n,i){var r=new Z(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function B(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Z(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _(t,e,n,i){for(var r=0,s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}t.exports=e,t.exports.default=e,e.deviation=function(t,e,n,i){var r=e&&e.length,s=r?e[0]*n:t.length,o=Math.abs(_(t,0,s,n));if(r)for(var h=0,l=e.length;h<l;h++){var a=e[h]*n,u=h<l-1?e[h+1]*n:t.length;o-=Math.abs(_(t,a,u,n))}var c=0;for(h=0;h<i.length;h+=3){var x=i[h]*n,p=i[h+1]*n,g=i[h+2]*n;c+=Math.abs((t[x]-t[g])*(t[p+1]-t[x+1])-(t[x]-t[p])*(t[g+1]-t[x+1]))}return 0===o&&0===c?0:Math.abs((c-o)/o)},e.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},i=0,r=0;r<t.length;r++){for(var s=0;s<t[r].length;s++)for(var o=0;o<e;o++)n.vertices.push(t[r][s][o]);r>0&&(i+=t[r-1].length,n.holes.push(i))}return n}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{Point:()=>t,Polygon:()=>o,Search:()=>p});const t=class{constructor(t,e){this.y=t,this.x=e}arePointsEqual(t){return Math.abs(t.x-this.x)<=1e-5&&Math.abs(t.y-this.y)<=1e-5}distancef(t){return Math.sqrt((this.x-t.x)*(this.x-t.x)+(this.y-t.y)*(this.y-t.y))}static areSegmentsIntersecting(t,e,n,i){const r=(t,e,n)=>{const i=(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);return 0===i?0:i>0?1:2},s=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),o=r(t,e,n),h=r(t,e,i),l=r(n,i,t),a=r(n,i,e);return o!==h&&l!==a||(!(0!==o||!s(t,n,e))||(!(0!==h||!s(t,i,e))||(!(0!==l||!s(n,t,i))||!(0!==a||!s(n,e,i)))))}};var e=n(187);const r=class{constructor(t,e,n,i=0){this.a=t,this.b=e,this.c=n,this.id=i,this.neighbours=[]}isPointInside(t){const{x:e,y:n}=t,{a:i,b:r,c:s}=this;function o(t,e,n){return(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y)}const h=o({x:e,y:n},i,r),l=o({x:e,y:n},r,s),a=o({x:e,y:n},s,i);return!((h<0||l<0||a<0)&&(h>0||l>0||a>0))}_display(){let t=`id: ${this.id}, neigh: `,e=[];for(let t=0,n=this.neighbours.length;t<n;t++)e.push(this.neighbours[t].id);console.log(t+e.join(\", \"))}displayNeighbours(t=!1){if(t){let t={};this.displayNeighbours_t(t)}else this._display()}displayEdges(){console.log(`(${this.a.y},${this.a.x}),(${this.b.y},${this.b.x}),(${this.c.y},${this.c.x}),(${this.a.y},${this.a.x})`)}displayNeighbours_t(t={}){if(!(this.id in t)){t[this.id]=1,this._display();for(let e=0,n=this.neighbours.length;e<n;e++)this.neighbours[e].displayNeighbours_t(t)}}midPoint(){return new t((this.a.y+this.b.y+this.c.y)/3,(this.a.x+this.b.x+this.c.x)/3)}midDistance(t){return this.midPoint().distancef(t.midPoint())}doesTriangleHavePoint(t){return this.a.arePointsEqual(t)||this.b.arePointsEqual(t)||this.c.arePointsEqual(t)}disjointPoints(t){let e=[],n=[this.a,this.b,this.c];for(let i=0,r=n.length;i<r;i++)t.doesTriangleHavePoint(n[i])||e.push(n[i]);return e}disjointPointsFromPoint(t){let e=[],n=[this.a,this.b,this.c];for(let i=0,r=n.length;i<r;i++)t.arePointsEqual(n[i])||e.push(n[i]);return e}commonPoints(t){let e=[],n=[this.a,this.b,this.c];for(let i=0,r=n.length;i<r;i++)t.doesTriangleHavePoint(n[i])&&e.push(n[i]);return e}areTriangleNeighbours(t){return(this.a.arePointsEqual(t.a)?1:0)+(this.a.arePointsEqual(t.b)?1:0)+(this.a.arePointsEqual(t.c)?1:0)+(this.b.arePointsEqual(t.a)?1:0)+(this.b.arePointsEqual(t.b)?1:0)+(this.b.arePointsEqual(t.c)?1:0)+(this.c.arePointsEqual(t.a)?1:0)+(this.c.arePointsEqual(t.b)?1:0)+(this.c.arePointsEqual(t.c)?1:0)>=2}};const s=class{constructor(t){this.triangles=[],this.polygon=t,this.triangleID=0}createTriangles(t){const e=this.polygon;for(let n=0,i=t.length;n<i;n+=3)this.triangles.push(new r(e[t[n]],e[t[n+1]],e[t[n+2]],this.triangleID++))}displayNavmesh(){for(let t=0,e=this.triangles.length;t<e;t++)this.triangles[t].displayEdges()}createNeighbours(){this.triangles.length&&this.createNeighbours_t(this.triangles[0],{})}createNeighbours_t(t,e={}){if(!(t.id in e)){e[t.id]=1;for(let e=0,n=this.triangles.length;e<n;e++)this.triangles[e].id!=t.id&&t.areTriangleNeighbours(this.triangles[e])&&t.neighbours.push(this.triangles[e]);for(let n=0,i=t.neighbours.length;n<i;n++)this.createNeighbours_t(t.neighbours[n],e)}}triangulate(){let t=[];for(let e=0;e<this.polygon.length-1;e++)t.push(this.polygon[e].y),t.push(this.polygon[e].x);this.createTriangles(e(t)),this.createNeighbours()}getTriangle(t){const e=this.triangles;for(let n=0,i=e.length;n<i;n++)if(e[n].isPointInside(t))return e[n];return null}};const o=class{constructor(t=[]){this.lines=t,this.holes=[],this.autocompletePointDistance=3,this.complete=!1,this.navmesh=null}_canPointBePushed(e,n=0){if(this.lines.length<=2)return!0;for(let i=n,r=this.lines.length-2;i<r;i++)if(t.areSegmentsIntersecting(this.lines[i],this.lines[i+1],this.lines[r+1],e))return!1;return!0}doesSegmentIntersects(e,n){for(let i=0,r=this.lines.length;i<r;i++)if(t.areSegmentsIntersecting(this.lines[i],this.lines[(i+1)%r],e,n))return!0;return!1}push(e,n,i=!1){if(this.complete)return!0;const r=new t(e,n);return!(!i&&!this._canPointBePushed(r))&&(this.lines.push(r),!0)}static print(t){let e=[];for(let n=0,i=t.lines.length;n<i;n++)e.push(`(${t.lines[n].y},${t.lines[n].x})`);console.log(e.join(\",\"))}distancef(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}getClosestPoint(t){for(let e=0,n=this.lines.length-1;e<n;e++)if(t.distancef(this.lines[e])<=this.autocompletePointDistance)return[e,this.lines[e]];return null}closePolygon(){if(this.complete||this.lines.length<2)return!1;const t=this.lines[0];return!!this._canPointBePushed(t,1)&&(this.push(this.lines[0].y,this.lines[0].x,!0),this.complete=!0,!0)}getTriangle(t){return this.navmesh.getTriangle(t)}linesCount(){return Math.max(0,this.lines.length-1)}isPointInsidePolygon(t){let e=!1,n=this.lines;for(let i=0,r=n.length-1;i<n.length;r=i++){const s=n[i].x,o=n[i].y,h=n[r].x,l=n[r].y;o>t.y!=l>t.y&&t.x<(h-s)*(t.y-o)/(l-o)+s&&(e=!e)}return e}triangulate(){if(!this.complete)return[];this.navmesh=new s(this.lines),this.navmesh.triangulate()}getTriangleIndexes(){return this.navmesh?this.navmesh.triangles:null}display(){console.log(this.lines)}};const h=class{constructor(t){this.heap=[],this.heapComparer=t}push(t){this.heap.push(t),this.heapifyUp()}top(){return this.heap.length?this.heap[0]:null}size(){return this.heap.length}pop(){if(0===this.heap.length)return null;if(1===this.heap.length)return this.heap.pop();const t=this.heap[0];return this.heap[0]=this.heap.pop(),this.heapifyDown(),t}heapifyUp(){let t=this.heap.length-1;for(;t>0;){const e=Math.floor((t-1)/2);if(!this.heapComparer(this.heap[t],this.heap[e]))break;[this.heap[t],this.heap[e]]=[this.heap[e],this.heap[t]],t=e}}heapifyDown(){let t=0;for(;;){const e=2*t+1,n=2*t+2;let i=t;if(e<this.heap.length&&this.heapComparer(this.heap[e],this.heap[i])&&(i=e),n<this.heap.length&&this.heapComparer(this.heap[n],this.heap[i])&&(i=n),t===i)break;[this.heap[t],this.heap[i]]=[this.heap[i],this.heap[t]],t=i}}};const l=class{constructor(t,e,n,i){this.generateNeighbours=t,this.uniqueID=e,this.edgeCost=n,this.edgeHeuristics=i,this.heap=new h(((t,e)=>t.heuristics_cost<e.heuristics_cost)),this.cost=null}search(t,e){return this.heap.push({node:t,cost:0,parent:null,heuristics_cost:0}),this.search_t(e)}retrieveNodes(t){let e=[];for(;t;)e.push(t.node),t=t.parent;return e.reverse()}search_t(t){let e={},n={};for(;this.heap.size();){let i=this.heap.top();const r=this.uniqueID(i.node);if(this.uniqueID(t)==r)return this.retrieveNodes(i);this.heap.pop(),e[r]=!0;let s=this.generateNeighbours(i.node);for(let r=0,o=s.length;r<o;r++){const o=this.uniqueID(s[r]);if(!(o in e)){const e=this.edgeCost(i.node,s[r])+i.cost;if(o in n&&n[o]<e)continue;this.heap.push({heuristics_cost:e+this.edgeHeuristics(i.node,s[r],t),cost:e,node:s[r],parent:i}),n[o]=e}}}return null}};let a=0;const u=class{constructor(t,e,n=0){this.pointA=t,this.pointB=e,this.id=a++}jointPoints(t){let e=[],n=[this.pointA,this.pointB],i=[t.pointA,t.pointB];for(let t=0;t<2;t++)for(let r=0;r<2;r++)n[t].arePointsEqual(i[r])&&e.push(n[t]);return e}areLinesEqual(t){return 2==this.jointPoints(t).length}};class c{constructor(){}static midLines(t){let e=[];for(let n=0,i=t.length;n<i;n++)e.push(t[n].midPoint());return e}static doesMidLineIntersecLines(e,n,i){for(let r=0,s=i.length-1;r<s;r++)if(t.areSegmentsIntersecting(e,n,i[r],i[r+1]))return!0;return!1}static printFunnelLines(t){let e=[];for(let n=0;n<t.length;n++)e.push(`(${t[n].pointA.y},${t[n].pointA.x}),(${t[n].pointB.y},${t[n].pointB.x})`);console.log(e.join(\"\\n\"))}static print(t){let e=[],n=t.lines;for(let t=0,i=n.length;t<i;t++)e.push(`(${n[t].x},${n[t].y})`);console.log(e.join(\",\"))}static printTrianglePoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];let r=[i.a,i.b,i.c];for(let t=0;t<r.length;t++)for(let n=t+1;n<r.length;n++)e.push(`(${r[t].y},${r[t].x}),(${r[n].y},${r[n].x})`)}console.log(e.join(\",\"))}static triangleToLines(t){let e=[t.a,t.b,t.c],n=[];for(let t=0;t<2;t++)for(let i=t+1;i<3;i++)n.push(new u(e[t],e[i]));return n}static getValidLinesFromTriangle(t,e=[]){let n=[];for(let e=0,i=t.length;e<i;e++)n=n.concat(c.triangleToLines(t[e]));for(let t=0,i=n.length;t<i;t++){let r=1;for(let e=0;e<i;e++)if(t!=e&&n[t].areLinesEqual(n[e])){r=0;break}r&&e.push(n[t])}}static sortHull_t(t,e,n=0,i=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r].jointPoints(t[n]);r==n||1!=s.length||e[r]||(e[r]=1,i.push(s[0]),c.sortHull_t(t,e,r,i))}}static sortHull(t){let e=new Array(t.length).fill(0),n=[];e[0]=1,c.sortHull_t(t,e,0,n),n[0].arePointsEqual(t[0].pointA)?n.push(t[0].pointB):n.push(t[0].pointA);let i=new o;for(let t=0,e=n.length;t<e;t++)i.push(n[t].y,n[t].x);return i.closePolygon(0),i}static searchPath(t){let e=[];return c.getValidLinesFromTriangle(t,e),c.sortHull(e)}static rotatePoint(e,n,i){const r=Math.PI/180*i,s=(e.x-n.x)*Math.cos(r)-(e.y-n.y)*Math.sin(r)+n.x,o=(e.x-n.x)*Math.sin(r)+(e.y-n.y)*Math.cos(r)+n.y;return new t(o,s)}static construct_t(t){return 1!=t[0].disjointPoints(t[1]).length?null:c.searchPath(t)}static calculateBisectorPoints(e,n,i,r){const s=new t(n.y-e.y,n.x-e.x),o=new t(i.y-n.y,i.x-n.x),h=c.calculateBisectorVector(s,o),l=c.extendPoint(n,h,r);return[l,c.rotatePoint(l,n,180)]}static calculateBisectorVector(e,n){const i=(Math.atan2(e.y,e.x)+Math.atan2(n.y,n.x)+Math.PI)/2;return new t(Math.sin(i),Math.cos(i))}static extendPoint(e,n,i){return new t(e.y+n.y*i,e.x+n.x*i)}static constructBisectorsArray(t){let e=[],n=t.lines;for(let i=0,r=n.length-1;i<r;i++){let s=n[i],o=n[(i+1)%r],h=n[(i+2)%r],l=c.calculateBisectorPoints(s,o,h,.01);for(let n=0;n<2;n++)if(t.isPointInsidePolygon(l[n])){e.push(new u(o,l[n]));break}}return e}static construct(t){return t.length?1==t.length?new o(t[0].a,t[0].b,t[0].c):c.construct_t(t):null}}const x=c;const p=class{constructor(t){this.polygon=t,this.polygon&&(this.navmesh=t.navmesh),this.aStar=new l((t=>t.neighbours),(t=>t.id),((t,e)=>t.midDistance(e)),((t,e,n)=>{const i=e.midPoint(),r=n.midPoint();return i.distancef(r)}))}search(t,e){return this.aStar.search(t,e)}getNextPoint(t,e,n){let i=e;for(let r=e,s=n.length;r<s&&!this.polygon.doesSegmentIntersects(t,n[r].midPoint());r++)i=r;return i}printBisector(t){console.log(`(${t.pointA.y},${t.pointA.x}),(${t.pointB.y},${t.pointB.x})`)}searchFunnelPoints_t(t,e,n,i){return new l((n=>{let r=[];for(let i=0,s=e.length;i<s;i++)t.doesSegmentIntersects(n.pointB,e[i].pointB)||r.push(e[i]);return t.doesSegmentIntersects(n.pointB,i.pointB)||r.push(i),r}),(t=>t.id),((t,e)=>t.pointB.distancef(e.pointB)),((t,e,n)=>{const i=e.pointB,r=n.pointB;return i.distancef(r)})).search(n,i)}searchFunnelPoints(e,n,i){let r=x.constructBisectorsArray(e),s=new t(n.y,n.x),o=new t(i.y,i.x);return this.searchFunnelPoints_t(e,r,new u(s,s),new u(o,o))}getPointsPathFromTriangle(t,e,n,i){let r=this.search(t,e),s=x.construct(r),o=this.searchFunnelPoints(s,n,i);if(!o)return null;let h=[];for(let t=0,e=o.length;t<e;t++)h.push(o[t].pointB);return h}searchForPath(t,e){const n=this.polygon.getTriangle(t);if(!n)return null;const i=this.polygon.getTriangle(e);return i?this.getPointsPathFromTriangle(n,i,t,e):null}}})(),module.exports=i})();\n\n//# sourceURL=webpack://boringpathfinding/./node_modules/polygon-pathfinding/bundle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sources_Frontend_CanvasMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/Frontend/CanvasMain.js */ \"./src/sources/Frontend/CanvasMain.js\");\n\nconst canvasDOM = document.getElementById('canvas-drawer');\nconst canvas = new _sources_Frontend_CanvasMain_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasDOM);\ncanvas.startMouseListener();\ndocument.getElementById('button-triangulate').addEventListener('click', () => {\n  canvas.triangulateMesh();\n});\ndocument.getElementById('clear-src-point').addEventListener('click', () => {\n  canvas.clearSrcPoint();\n});\ndocument.getElementById('deactivate-navmesh').addEventListener('change', event => {\n  canvas.disableInput();\n});\n\n//# sourceURL=webpack://boringpathfinding/./src/index.js?");

/***/ }),

/***/ "./src/sources/Frontend/CanvasLine.js":
/*!********************************************!*\
  !*** ./src/sources/Frontend/CanvasLine.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var polygon_pathfinding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polygon-pathfinding */ \"./node_modules/polygon-pathfinding/bundle.js\");\n// import Point from \"../Geometry/Point.js\"\n\nclass Drawer {\n  static canvas_GetNormalisedValue(point, canvas = document.getElementById('canvas-drawer')) {\n    const height = canvas.height;\n    const width = canvas.width;\n    return new polygon_pathfinding__WEBPACK_IMPORTED_MODULE_0__.Point(point.y / 100.0 * height, point.x / 100.0 * width);\n  }\n\n  // This canvas_DrawLine takes points that are normalised\n  static canvas_DrawLine(a, b, canvas = document.getElementById('canvas-drawer'), color = '#00f') {\n    const context = canvas.getContext('2d');\n    context.strokeStyle = color;\n    context.lineWidth = 1;\n    const normalisedStart = Drawer.canvas_GetNormalisedValue(a, canvas);\n    const normalisedEnd = Drawer.canvas_GetNormalisedValue(b, canvas);\n    context.beginPath();\n    context.moveTo(normalisedStart.x, normalisedStart.y);\n    context.lineTo(normalisedEnd.x, normalisedEnd.y);\n    context.stroke();\n  }\n  static canvas_DrawCircle(point, radius, color = 'red', canvas = document.getElementById('canvas-drawer')) {\n    const context = canvas.getContext('2d');\n    const normalisedPoint = Drawer.canvas_GetNormalisedValue(point, canvas);\n    context.beginPath();\n    context.arc(normalisedPoint.x, normalisedPoint.y, radius, 0, 2 * Math.PI);\n    context.strokeStyle = color;\n    context.lineWidth = 2;\n    context.stroke();\n    context.closePath();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);\n\n//# sourceURL=webpack://boringpathfinding/./src/sources/Frontend/CanvasLine.js?");

/***/ }),

/***/ "./src/sources/Frontend/CanvasMain.js":
/*!********************************************!*\
  !*** ./src/sources/Frontend/CanvasMain.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasLine.js */ \"./src/sources/Frontend/CanvasLine.js\");\n/* harmony import */ var polygon_pathfinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polygon-pathfinding */ \"./node_modules/polygon-pathfinding/bundle.js\");\n\n\nclass CanvasMain {\n  constructor(canvas = null) {\n    // normalised values between 0 and 100\n    this.mouse = new polygon_pathfinding__WEBPACK_IMPORTED_MODULE_1__.Point(0, 0);\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.boundingBox = canvas.getBoundingClientRect();\n    this.polygon = new polygon_pathfinding__WEBPACK_IMPORTED_MODULE_1__.Polygon();\n    this.srcPoint = null;\n    this.searcher = null;\n    this.pathFound = null;\n    this.displayFlag = {\n      triangulated: false\n    };\n  }\n  clearCanvas() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n  updateMousePosition(event) {\n    if (event.clientX < this.boundingBox.x || event.clientY < this.boundingBox.y || event.clientX > this.boundingBox.width + this.boundingBox.x || event.clientY > this.boundingBox.height + this.boundingBox.y) {\n      return;\n    }\n    this.mouse.y = (event.clientY - this.boundingBox.y) / this.boundingBox.height * 100.0;\n    this.mouse.x = (event.clientX - this.boundingBox.x) / this.boundingBox.width * 100.0;\n  }\n  processMouseMovement(event, self) {\n    self.updateMousePosition(event);\n    self.searchPath();\n  }\n  searchPath() {\n    if (!this.searcher || !this.srcPoint) {\n      return;\n    }\n    this.pathFound = this.searcher.searchForPath(this.srcPoint, this.mouse);\n  }\n  disableInput() {\n    this.displayFlag.triangulated = !this.displayFlag.triangulated;\n  }\n  drawMidPoints() {\n    if (!this.pathFound) {\n      return;\n    }\n    for (let i = 0, c = this.pathFound.length - 1; i < c; i++) {\n      _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas_DrawLine(this.pathFound[i], this.pathFound[i + 1], this.canvas, 'orange');\n    }\n  }\n  drawLines() {\n    if (this.displayFlag.triangulated) {\n      return;\n    }\n    for (let i = 0, c = this.polygon.lines.length - 1; i < c; i++) {\n      _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas_DrawLine(this.polygon.lines[i], this.polygon.lines[i + 1]);\n    }\n  }\n  triangulateMesh() {\n    this.polygon.triangulate();\n    this.searcher = new polygon_pathfinding__WEBPACK_IMPORTED_MODULE_1__.Search(this.polygon);\n    this.displayFlag.triangulated = true;\n  }\n  triangulateMeshOnFrame() {\n    if (!this.displayFlag.triangulated) {\n      return;\n    }\n    const triangleIndexes = this.polygon.getTriangleIndexes();\n    for (let i = 0, c = triangleIndexes.length; i < c; i++) {\n      const triangle = triangleIndexes[i];\n      _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas_DrawLine(triangle.a, triangle.b, this.canvas, 'red');\n      _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas_DrawLine(triangle.b, triangle.c, this.canvas, 'red');\n      _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas_DrawLine(triangle.a, triangle.c, this.canvas, 'red');\n    }\n  }\n  drawCircle() {\n    if (this.searcher) {\n      return;\n    }\n    const closestPoint = this.polygon.getClosestPoint(this.mouse);\n    if (!closestPoint) {\n      return;\n    }\n    _CanvasLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].canvas_DrawCircle(closestPoint[1], 9, 'red', this.canvas);\n  }\n  onFrame(self) {\n    self.clearCanvas();\n    self.drawLines();\n    self.drawCircle();\n    self.triangulateMeshOnFrame();\n    self.drawMidPoints();\n    self.nextFrame();\n  }\n  nextFrame() {\n    setTimeout(() => this.onFrame(this), 64);\n  }\n  addPointToPolygon() {\n    const closestPoint = this.polygon.getClosestPoint(this.mouse);\n    if (!closestPoint) {\n      this.polygon.push(this.mouse.y, this.mouse.x);\n      return;\n    }\n    if (closestPoint[0] == 0) {\n      this.polygon.closePolygon();\n    }\n  }\n  selectTriangle() {\n    if (!this.searcher) {\n      return;\n    }\n    this.srcPoint = new polygon_pathfinding__WEBPACK_IMPORTED_MODULE_1__.Point(this.mouse.y, this.mouse.x);\n  }\n  clearSrcPoint() {\n    this.srcPoint = null;\n    this.pathFound = null;\n  }\n  processClickRequest(_, self) {\n    self.addPointToPolygon();\n    self.selectTriangle();\n  }\n  startMouseListener() {\n    document.addEventListener('mousemove', event => this.processMouseMovement(event, this));\n    this.canvas.addEventListener(\"click\", event => this.processClickRequest(event, this));\n    this.nextFrame();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasMain);\n\n//# sourceURL=webpack://boringpathfinding/./src/sources/Frontend/CanvasMain.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;