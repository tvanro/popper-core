(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"7oih":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("zTTH"),a("HQhv"),a("v9g0");var n=a("wTIg"),o=a("q1tI"),r=a.n(o),s=a("Wbzz"),c=a("7ljp"),i=a("qKvR"),p=a("C6DT"),l=a("4FWg"),d=a("Z3Aq"),u=function(e){var t=e.children;return Object(i.d)(s.StaticQuery,{query:"1879031470",render:function(e){var a=e.allMdx.edges.map((function(e){return{navigationLabel:e.node.frontmatter.navigationLabel,slug:e.node.fields.slug,order:e.node.frontmatter.order,fileAbsolutePath:e.node.fileAbsolutePath}}));return t(a)},data:d})};a("zGcK"),a("TAD1");function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];if(e.slug.startsWith(n.slug))return void b(e,n.children)}t.push({navigationLabel:e.navigationLabel,slug:e.slug,order:e.order,children:[]}),t=t.sort((function(e,t){return e.order-t.order}))}function m(e){e=e.sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).filter((function(e){return null!=e.navigationLabel}));for(var t=[],a=0;a<e.length;a++){b(e[a],t)}return t.sort((function(e,t){return t.order-e.order})),t}a("Ll4R");function f(e,t){var a=t.match(/^\/docs\/(v[0-9]+)\//),n=a?a[1]:null;return e.filter((function(e){return!e.slug.startsWith("/docs/")||e.slug.startsWith("/docs/"+n+"/")||e.slug.match(/^\/docs\/v[0-9]+\/$/)}))}a("pJf4"),a("gZdQ");var g=!("undefined"==typeof window||!window.document||!window.document.createElement),h={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},v=Object(n.a)("div",{target:"ednh1zf0"})("padding-bottom:10px;display:none;transition:box-shadow 0.4s ease-out;flex-direction:column;align-items:stretch;padding:10px;",(function(e){return e.scrolled&&h})," ",l.e.lg,"{display:flex;}.algolia-autocomplete,input{width:100%;}input{border:0;border-radius:20px;padding:10px 20px;transition:box-shadow 0.2s ease-in-out;&:focus{outline:0;box-shadow:0 0 0 5px #a93244;}}.algolia-autocomplete .ds-dropdown-menu:before{left:10px;}"),j=function(e){var t=e.name,n=e.className,r=e.scrolled;return Object(o.useEffect)((function(){g&&a.e(30).then(a.t.bind(null,"UjO/",7)).then((function(e){return null==document.querySelector(".algolia-autocomplete")&&e.default({apiKey:"d5fa05c4e33e776fbf2b8021cbc15b37",indexName:"popper",inputSelector:".docsearch-input-"+t,algoliaOptions:{facetFilters:["tags:v2"]}})}))}),[t]),Object(i.d)(v,{className:n,scrolled:r},Object(i.d)("input",{type:"search",placeholder:"Search the docs...",className:"docsearch-input-"+t}))},O=a("vUvN"),N=a.n(O),x=(a("sc67"),a("4DPX"),a("17x9")),k=a.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var L=function(e){var t=e.color,a=e.size,n=w(e,["color","size"]);return r.a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};L.propTypes={color:k.a.string,size:k.a.oneOfType([k.a.string,k.a.number])},L.defaultProps={color:"currentColor",size:"24"};var P=L,A={name:"2p83c6",styles:"display:flex;flex-direction:column;transform:translateX(0);"},z=Object(n.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;transform:translateX(-",260,"px);display:none;z-index:2;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&A})," ",l.e.lg,"{display:flex;flex-direction:column;transform:translateX(0);box-shadow:none;}"),C={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},S=Object(n.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;margin-top:0;line-height:1.5;",(function(e){return!e.root&&C})),E=Object(n.a)(s.Link,{target:"e1y4lhx02"})({name:"60c8rm",styles:"display:block;color:white;text-decoration:none;padding:6px 15px;font-size:18px;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;font-weight:500;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),T=Object(n.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:2;",l.e.lg,"{display:none;}"),R=Object(n.a)("div",{target:"e1y4lhx04"})("background:#c83b50;width:100%;padding:6px 0 0;display:none;",l.e.lg,"{display:flex;flex-direction:column;align-items:center;}"),q={name:"1czmu1r",styles:"width:100px;height:50px;"},B=function(e){var t=e.mobile;return Object(i.d)(s.Link,{to:"/",css:Object(i.c)("display:block;margin:0 auto;user-select:none;margin-top:",t?"-12px":"0",";&,&:hover{border-width:0;}")},Object(i.d)("img",{src:N.a,draggable:"false",alt:"Popper Logo",css:q}))},D=Object(n.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),H=Object(n.a)("button",{target:"e1y4lhx06"})("display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;margin:10px 10px 0 10px;",l.e.lg,"{display:none;}"),M=Object(n.a)("div",{target:"e1y4lhx07"})("overflow:auto;min-height:0;flex:1;padding:0 10px 20px 0;margin-top:20px;",l.e.lg,"{margin-top:10px;}"),V=function e(t){var a=t.route;return Object(i.d)(r.a.Fragment,null,Object(i.d)(S,{root:!0},Object(i.d)("li",{style:{marginBottom:0}},Object(i.d)(E,{to:a.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50",fontWeight:"bold"}},a.navigationLabel)),Object(i.d)(S,{root:2===a.slug.split("/").length},a.children.map((function(t,a){return Object(i.d)(e,{key:a,route:t})})))))},F=0;function G(e){e.description,e.lang,e.meta;var t=e.path,a=Object(o.useState)(!1),n=a[0],s=a[1],c=Object(o.useState)(!1),p=c[0],l=c[1],d=Object(o.useRef)();function b(){s(!0)}function g(){s(!1)}function h(){var e=d.current.scrollTop;F=e,l(e>10)}return Object(o.useLayoutEffect)((function(){var e=d.current;e.scrollTop=F;var t=e.querySelector('[aria-current="page"]');if(t){var a=t.getBoundingClientRect();(a.bottom>window.innerHeight||a.top<0)&&t.scrollIntoView()}}),[]),Object(i.d)(u,null,(function(e){return Object(i.d)(r.a.Fragment,null,Object(i.d)(T,null,Object(i.d)(D,{onClick:b,"aria-expanded":n?"true":"false","aria-label":"Click to open navigation menu"},Object(i.d)(P,{size:30})),Object(i.d)(B,{mobile:!0})),Object(i.d)(z,{open:n},Object(i.d)(R,null,Object(i.d)(B,null)),Object(i.d)(H,{onClick:g},"Close Menu"),Object(i.d)(j,{scrolled:p,name:"docs"}),Object(i.d)(M,{ref:d,onScroll:h},m(f(e,t)).map((function(e,t){return Object(i.d)(V,{route:e,key:t})})))))}))}var I=a("9CUm");a("8ypT"),a("cu9l");function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var K=function(e){var t=e.color,a=e.size,n=X(e,["color","size"]);return r.a.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};K.propTypes={color:k.a.string,size:k.a.oneOfType([k.a.string,k.a.number])},K.defaultProps={color:"currentColor",size:"24"};var U=K,Z=a("EAKA");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Q=Object(n.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",l.e.lg,"{padding-top:0;margin-left:",260,"px;}"),Y=Object(n.a)(l.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",l.e.lg,"{margin-left:",260,"px;}"),_=Object(n.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),$=Object(n.a)(l.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",l.e.md,"{padding:0 40px;}"),ee=Object(n.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),te=Object(n.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",l.e.md,"{display:block;}"),ae=Object(n.a)(s.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",l.e.md,"{font-size:22px;}",l.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),ne=Object(i.c)("vertical-align:3px;",l.e.md,"{vertical-align:0;}"),oe=Object(n.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",l.e.md,"{top:54px;}",l.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),re={"x-ad":p.a,a:function(e){return Object(i.d)("a",J({},e,{onClick:se}),e.children)}};function se(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var a="H2"===t.nodeName;window.innerWidth<=l.f.lg?a||window.scrollBy(0,-60):a&&window.scrollBy(0,50)}catch(n){}}var ce=function e(t){return t.reduce((function(t,a){return t.concat(a).concat(e(a.children))}),[])},ie={name:"1cbva5p",styles:"margin-top:15px;display:inline-block;"},pe=function(e){var t=e.path;return Object(i.d)(u,null,(function(e){var a=e.find((function(e){return e.slug===t}));return a&&Object(i.d)("a",{css:ie,href:"https://github.com/popperjs/popper-core/edit/master/docs/src/"+a.fileAbsolutePath.split("/docs/src/")[1],rel:"noopener noreferrer",target:"_blank"},"Edit this page")}))};t.a=function(e){var t=e.children,a=e.path,n=e.pageResources;!function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a])}(e,["children","path","pageResources"]);return Object(o.useLayoutEffect)(se,[]),Object(i.d)(c.a,{components:re},Object(i.d)(i.a,{styles:Object(i.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;font-weight:bold;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;line-height:1.3;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}li{margin-bottom:5px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",l.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",l.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(i.d)("div",null,n&&Object(i.d)(I.a,{title:n.json.pageContext.frontmatter.navigationLabel}),Object(i.d)(G,{root:"/",target:"location",path:a}),Object(i.d)(Q,null,Object(i.d)(l.a,null,t,Object(i.d)(pe,{path:a})),Object(i.d)(u,null,(function(e){var t=function(e){var t=ce(m(f(e,a))),n=t.findIndex((function(e){return e.slug===a}));return{prev:t[n-1],next:t[n+1]}}(e),n=t.prev,o=t.next;return Object(i.d)(_,null,Object(i.d)($,null,Object(i.d)(ee,null,n&&Object(i.d)(ae,{to:n.slug+"/","data-first":!0},Object(i.d)(oe,{"data-prev":!0},Object(i.d)(U,{size:28,css:ne})),n.navigationLabel)),Object(i.d)(te,null),Object(i.d)(ee,null,o&&Object(i.d)(ae,{to:o.slug+"/","data-last":!0},o.navigationLabel,Object(i.d)(oe,{"data-next":!0},Object(i.d)(Z.a,{size:28,css:ne}))))))}))),Object(i.d)(Y,null,"© ",(new Date).getFullYear()," MIT License")))}},Z3Aq:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/404.mdx","fields":{"slug":"/404/"},"frontmatter":{"navigationLabel":null,"order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/index.mdx","fields":{"slug":"/"},"frontmatter":{"navigationLabel":"Home","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v1/index.mdx","fields":{"slug":"/docs/v1/"},"frontmatter":{"navigationLabel":"Documentation (v1.x)","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/browser-support.mdx","fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"navigationLabel":"Browser Support","order":10}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/constructors.mdx","fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"navigationLabel":"Constructors","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/lifecycle.mdx","fields":{"slug":"/docs/v2/lifecycle/"},"frontmatter":{"navigationLabel":"Lifecycle","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/migration-guide.mdx","fields":{"slug":"/docs/v2/migration-guide/"},"frontmatter":{"navigationLabel":"Migration Guide","order":11}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tippy.mdx","fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"navigationLabel":"Tippy.js","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tree-shaking.mdx","fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"navigationLabel":"Tree-shaking","order":7}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tutorial.mdx","fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"navigationLabel":"Tutorial","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/typings.mdx","fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"navigationLabel":"Typings","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/virtual-elements.mdx","fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"navigationLabel":"Virtual Elements","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/apply-styles.mdx","fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"navigationLabel":"Apply Styles","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/arrow.mdx","fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"navigationLabel":"Arrow","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/compute-styles.mdx","fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"navigationLabel":"Compute Styles","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/event-listeners.mdx","fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"navigationLabel":"Event Listeners","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/hide.mdx","fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"navigationLabel":"Hide","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/popper-offsets.mdx","fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"navigationLabel":"Popper Offsets","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/detect-overflow.mdx","fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"navigationLabel":"Detect Overflow","order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/index.mdx","fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"navigationLabel":"Utils","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/index.mdx","fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"navigationLabel":"Modifiers","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/offset.mdx","fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"navigationLabel":"Offset","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/index.mdx","fields":{"slug":"/docs/v2/"},"frontmatter":{"navigationLabel":"Documentation (v2.x)","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/flip.mdx","fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"navigationLabel":"Flip","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/prevent-overflow.mdx","fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"navigationLabel":"Prevent Overflow","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/faq.mdx","fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"navigationLabel":"FAQ","order":8}}}]}}}')},dXsq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var n=a("7ljp"),o=a("7oih"),r=a("KK5/");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},i={_frontmatter:c},p=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(p,s({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"virtual-elements",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h1"},{href:"#virtual-elements","aria-label":"virtual elements permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Virtual Elements"),Object(n.b)("p",null,"You can use a virtual element instead of a real DOM element as the reference.\nThis allows you to position the popper relative to a virtual area defined by any\ncoordinates you desire."),Object(n.b)("p",null,"A common use case for this is making the popper follow the mouse cursor, where\nthe cursor acts as a point reference."),Object(n.b)("p",null,"A virtual element is a plain object with only one property – a custom\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"getBoundingClientRect")," function that returns a custom ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"ClientRect")," object:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(n.b)("pre",s({parentName:"div"},{className:"language-flow"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-flow"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," VirtualElement ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token flow-punctuation punctuation"}),"{|"),"\n  getBoundingClientRect",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ClientRect ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"|")," DOMRect",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token flow-punctuation punctuation"}),"|}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",{id:"demo",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Demo"),Object(n.b)(r.f,{mdxType:"VirtualElementDemo"}),Object(n.b)("h2",{id:"usage",style:{position:"relative"}},Object(n.b)("a",s({parentName:"h2"},{href:"#usage","aria-label":"usage permalink",className:"gatsby-link-icon before"}),Object(n.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Usage"),Object(n.b)("p",null,"This will make the popper follow the mouse cursor as seen in the demo above:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"function")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"generateGetBoundingClientRect"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"x ",Object(n.b)("span",s({parentName:"span"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"span"},{className:"token number"}),"0"),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," y ",Object(n.b)("span",s({parentName:"span"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"span"},{className:"token number"}),"0")),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n    width",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"0"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    height",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token number"}),"0"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    top",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," y",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    right",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," x",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    bottom",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," y",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    left",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," x",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," virtualElement ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  getBoundingClientRect",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"generateGetBoundingClientRect"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," instance ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"virtualElement",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\ndocument",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"addEventListener"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token string"}),"'mousemove'"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"{")," clientX",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),":")," x",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," clientY",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),":")," y ",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),"}")),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  virtualElement",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),"getBoundingClientRect ",Object(n.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"generateGetBoundingClientRect"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," y",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n  instance",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"update"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))))}l.isMDXComponent=!0},vUvN:function(e,t,a){e.exports=a.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),o=a("Wadk")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-virtual-elements-mdx-b1ba13a0285188154493.js.map