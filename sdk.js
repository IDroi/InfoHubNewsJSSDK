!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){const{initTaboola:n}=t(1);window.InfoHub={init({id:e}){n(e)}},window.addEventListener("load",()=>{const e=window.infohubAsyncInit;e&&e()})},function(e,o){e.exports.initTaboola=function(e){var o,t,n;window._taboola=window._taboola||[],window._taboola.push({article:"auto"}),o=document.createElement("script"),t=document.getElementsByTagName("script")[0],n="tb_loader_script",document.getElementById(n)||(o.async=1,o.src="http://cdn.taboola.com/libtrc/umetechnologiestcl-russia/loader.js",o.id=n,t.parentNode.insertBefore(o,t)),window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("tbl_ic"),function(e){window._taboola=window._taboola||[],window._taboola.push({mode:"editorial-thumbnails-feed-top-news",container:e,placement:"Below Homepage Thumbnails",target_type:"mix"})}(e),window._taboola=window._taboola||[],window._taboola.push({flush:!0})}}]);