(()=>{"use strict";var e,r={5920:(e,r,t)=>{t.d(r,{AU:()=>d,Ic:()=>l,on:()=>c,qY:()=>o});const n="newspack-ras",o={reader:"reader",data:"data",activity:"activity",overlay:"overlay"},i=Object.values(o);function a(e){return i.includes(e)?`${n}-${e}`:""}function l(e,r){if(!(e=a(e)))throw new Error("Invalid event");window.dispatchEvent(new CustomEvent(e,{detail:r}))}function c(e,r){if(!(e=a(e)))throw new Error("Invalid event");window.addEventListener(e,r)}function d(e,r){if(!(e=a(e)))throw new Error("Invalid event");window.removeEventListener(e,r)}}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=r,e=[],n.O=(r,t,o,i)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){for(var[t,o,i]=e[s],l=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var d=o();void 0!==d&&(r=d)}}return r}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,o,i]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=619,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={619:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,[a,l,c]=t,d=0;if(a.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var s=c(n)}for(r&&r(t);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},t=globalThis.webpackChunknewspack=globalThis.webpackChunknewspack||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[223],(()=>n(2153)));o=n.O(o)})();