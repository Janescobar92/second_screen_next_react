if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"52fdd2a84ef363bf17c30905204860a4"},{url:"/_next/static/chunks/2443530c-3f577d13357de5ad.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/488-8313db305df3f377.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/52-59a348a23a05b18d.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/app/layout-cba3e6efd6fc8d4d.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/app/page-96dd224fa80ec9ed.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/main-60c41507ec077331.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/main-app-c1ae2f8ad8136cfc.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f4f5e5ea66eee4d6.js",revision:"osssRmSMDaAY74qvvt3jz"},{url:"/_next/static/css/04ee80c3b84f2305.css",revision:"04ee80c3b84f2305"},{url:"/_next/static/css/4acae33203e21ff2.css",revision:"4acae33203e21ff2"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/osssRmSMDaAY74qvvt3jz/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/osssRmSMDaAY74qvvt3jz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/img/backgrounds/aurgi/mobile_2.webp",revision:"398e401316936412c6eb22cb11859ccd"},{url:"/img/backgrounds/aurgi/mobile_2@2x.webp",revision:"4a72512053e9b5c8653e46c8d9b7aa0f"},{url:"/img/backgrounds/aurgi/mobile_2@3x.webp",revision:"39daa2ea68a1e00d4d558dc2f5dfeb3c"},{url:"/img/icons/icon-192x192.png",revision:"d4671c36e6a6ea412b17c01db015c298"},{url:"/img/icons/icon-256x256.png",revision:"51bffd3a2c46d5a9341ea7dc3dd20c94"},{url:"/img/icons/icon-384x384.png",revision:"22714bc8fe471f11ab7843163651ab92"},{url:"/img/icons/icon-512x512.png",revision:"75a8685916c8eb6724a6afc737c78bf0"},{url:"/img/logos/aurgi_logo.svg",revision:"a0d62965781989d261cf82b0fc65ae46"},{url:"/manifest.json",revision:"817cdc4839a27d4fc910988628476de4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
