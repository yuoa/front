(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Yeg":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return a("BdxU")}])},BdxU:function(e,t,a){"use strict";a.r(t),a.d(t,"config",(function(){return u}));var n=a("mXGw"),r=a.n(n),i=a("bBV7"),o=a("Etv4"),s=a("ZQo5"),c=a("AM6c"),l=r.a.createElement;t.default=function(){var e=Object(n.useState)(l(r.a.Fragment,null)),t=e[0],a=e[1],u=Object(i.useRouter)().query.link,f=Object(i.useRouter)().query.src,d=Object(c.a)("404").t;return Object(n.useEffect)((function(){var e=u||"",t=f||"",n="",r="",i=!1;if("go"===t?(n="".concat(t,".wldh.org/").concat(e),r="https://".concat(t,".wldh.org/").concat(e),i=!0):"www"===t?window.location.replace("https://www.wldh.org/".concat(e)):0===e.length&&"https://www.wldh.org/404"!==window.location.href&&"https://www.wldh.org/404.html"!==window.location.href&&(n="www.wldh.org".concat(window.location.pathname),r="https://www.wldh.org".concat(window.location.pathname),i=!0),i){a(l("a",{"data-mono":"slide",href:r},n));var o=document.querySelector('[data-visible="transparent"]');o&&(o.dataset.visible="opaque")}}),[u,f]),l(s.a,{title:d("404:title"),detailedTitle:d("404:detail"),message:d("404:message"),image:o.a.gIsland,metaImage:"/static/images/banner-404.png",favicoff:!0},l("span",{"data-visible":"transparent"},d("404:requrl"),l("br",null),"\u2002\u2002\u2002",t))};var u={amp:"true"}},Etv4:function(e,t,a){"use strict";t.a={gIsland:{path:"/images/cryingIsland.gif",alt:"Crying Long Island from Azur Lane"},gShiratsuyu:{path:"/images/sleepingShiratsuyu.gif",alt:"Sleeping Shiratsuyu from Azur Lane"},gEnterprise:{path:"/images/thinkingEnterprise.gif",alt:"Thinking Enterprise sitting on a box from Azur Lane"}}},ZQo5:function(e,t,a){"use strict";var n=a("mXGw"),r=a.n(n),i=a("WLOD"),o=a("mfKp"),s=a.n(o),c=r.a.createElement;t.a=function(e){var t=e.title,a=e.detailedTitle,r=e.message,o=e.image,l=e.children,u=e.metaImage,f=e.favicoff,d=e.requiredFeatures,w=Object(n.useState)("translucent"),g=w[0],m=w[1],h=Object(n.useRef)(!1);return Object(n.useEffect)((function(){var e=document.querySelector("header h2"),t=document.querySelector("footer img"),a=function(){e.offsetTop>t.offsetTop&&e.offsetLeft+e.offsetWidth-50>t.offsetLeft?h.current&&(m("translucent"),h.current=!1):h.current||(m("opaque"),h.current=!0)};window.addEventListener("resize",a),a()}),[h]),c(i.a,{title:t,description:a,image:u,favicoff:f,className:s.a.wrapper,requiredFeatures:d},c("header",{className:s.a.header},c("h1",{dangerouslySetInnerHTML:{__html:t}}),c("h2",{dangerouslySetInnerHTML:{__html:a}}),c("span",{dangerouslySetInnerHTML:{__html:r}})),c("main",{className:s.a.main},l),c("footer",{className:s.a.footer},c("img",{className:s.a.blhx,src:o.path,alt:o.alt,"data-visible":g})))}}},[["7Yeg",0,1,2]]]);