(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{6335:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nota/editar/[id]",function(){return r(9650)}])},9650:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return w}});var n=r(5893),a=r(1163),i=r(7294),s=r(5675),l=r.n(s),o=r(9417),u=r(2489),c=t=>{let{handleUploadImages:e,register:r,label:a,variant:i="default",id:s="photo"}=t;return(0,n.jsxs)("label",{htmlFor:s,className:"w-fit h-fit relative flex gap-2 items-center justify-center cursor-pointer",children:[(0,n.jsx)("i",{className:"w-4 h-4 text-lg text-[#f90] flex justify-center items-center",children:(0,n.jsx)(u.G,{icon:o.r8p})}),(0,n.jsx)("input",{accept:"image/png, image/jpeg, video/mp4",className:"absolute opacity-0 w-0 h-0",type:"file",id:s,multiple:!0,...r?r("photo"):{},onChange:e}),a&&(0,n.jsx)("span",{className:"text-[#f90] font-semibold",children:a})]})},d=r(1367),h=r(5945),p=r(8228),f=r(1664),m=r.n(f),g=r(4154),x=r(455),v=r(3024),b=t=>{let{inputList:e,setInputList:r,placeholder:a,type:s}=t,[l,c]=(0,i.useState)(""),d=(0,i.useRef)(null),[h,p]=(0,i.useState)([]),[f,m]=(0,i.useState)(null);(0,i.useEffect)(()=>{"tag"===s&&(async()=>{let t=await (0,g.p)();p(t)})()},[s]);let b=(t,n)=>{if("link"===s){let a=[...e];a[t]={...a[t],caption:n},r(a)}},w=t=>{let n=(t||l).trim(),a="tag"===s?n.toLocaleLowerCase():n;if("tag"===s){if(e.includes(a)){c("");return}""!==a&&(r(t=>[...t,a]),c(""))}else if("link"===s){if(e.some(t=>t.value===a)){c("");return}""!==a&&(r(t=>[...t,{value:a}]),c("")),d.current&&d.current.focus()}};return(0,n.jsxs)("div",{className:"flex flex-col gap-2 relative",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("div",{className:"relative z-10",children:[(0,n.jsx)("input",{ref:d,type:"text",value:l,onChange:t=>{c(t.target.value),m(null)},onKeyDown:t=>{let e=h.filter(t=>t.startsWith(l));"Enter"===t.key?null!==f&&f<e.length?(t.preventDefault(),w(e[f])):w():"ArrowDown"===t.key?(t.preventDefault(),m(t=>null===t||t>=e.length-1?0:t+1)):"ArrowUp"===t.key&&(t.preventDefault(),m(t=>null===t||t<=0?e.length-1:t-1))},placeholder:a,className:"border rounded px-3 py-2 w-full mb-2",autoCapitalize:"none",autoCorrect:"off",autoComplete:"off"}),(0,n.jsx)("button",{onClick:t=>{t.preventDefault(),w(),d.current&&d.current.focus()},className:"absolute right-2 top-2 text-lg font-bold rounded-full shadow w-6 h-6 leading-4 text-blue-500 border border-blue-500 bg-white hover:bg-blue-200 hover:text-blue-700",children:(0,n.jsx)(u.G,{icon:o.WqQ})})]}),"tag"===s&&h.length>0&&l.length>0&&(0,n.jsx)("ul",{className:"absolute bg-white border rounded-md w-full max-h-[200px] overflow-y-auto mt-2 z-50",children:h.filter(t=>t.startsWith(l)).map((t,e)=>(0,n.jsx)("li",{className:"cursor-pointer px-3 py-2 ".concat(f===e?"bg-gray-200":""," hover:bg-gray-200"),onClick:()=>{w(t)},children:t},e))})]}),(0,n.jsx)("ul",{className:"flex flex-wrap gap-2 md:justify-between",children:"tag"===s?e.map((t,e)=>(0,n.jsx)("li",{className:"bg-white border rounded-md p-2 mb-2 w-full md:w-[30%] relative",children:(0,n.jsxs)("div",{className:"flex justify-between items-start",children:[(0,n.jsx)("span",{className:"text-blue-600 font-medium",children:t}),(0,n.jsx)("button",{className:"text-xs bg-red-500 font-bold w-5 h-5 rounded-full text-white absolute top-2 right-2",onClick:e=>{e.preventDefault(),"tag"===s?r(e=>e.filter(e=>e!==t)):r(e=>e.filter(e=>e.value!==t.value))},children:(0,n.jsx)(u.G,{icon:o.EOp})})]})},e)):e.map((t,e)=>{let{value:a,caption:i}=t;return(0,n.jsxs)("li",{className:"bg-white border rounded-md p-2 mb-2 w-full relative",children:[(0,n.jsxs)("div",{className:"flex justify-between items-start",children:[(0,n.jsxs)("div",{children:[(0,x.T)(a)?(0,n.jsx)(u.G,{icon:v.opf,color:"red"}):(0,n.jsx)(u.G,{icon:o.nNP}),(0,n.jsx)("span",{className:"text-".concat((0,x.T)(a)?"red":"blue","-600 font-medium ml-2"),children:a})]}),(0,n.jsx)("button",{className:"text-xs bg-red-500 font-bold w-5 h-5 rounded-full text-white absolute top-2 right-2",onClick:e=>{e.preventDefault(),"link"===s&&r(e=>e.filter(e=>e.value!==t.value))},children:(0,n.jsx)(u.G,{icon:o.EOp})})]}),(0,n.jsx)("input",{type:"text",value:t.caption||"",onChange:t=>b(e,t.target.value),placeholder:"Agrega un comentario",className:"mt-2 border rounded px-2 py-1 w-full placeholder:text-sm"})]},e)})})]})},w=()=>{let[t,e]=(0,i.useState)([]),[r,s]=(0,i.useState)([]),[f,g]=(0,i.useState)(""),[x,v]=(0,i.useState)([]),[w,y]=(0,i.useState)([]),[j,S]=(0,i.useState)(null),[E,N]=(0,i.useState)([]),[k,C]=(0,i.useState)([]),[R,O]=(0,i.useState)({id:"",name:""}),D=(0,h.NL)(),_=(0,a.useRouter)(),{id:M}=_.query;(0,i.useEffect)(()=>{let t=async()=>{let t=await fetch("/api/timeline/".concat(M)),r=await t.json();g(r.mainText),v(r.photo),O({id:r.authorId,name:r.authorName}),e(r.tags),r.links.length>0&&("string"==typeof r.links[0]?s(r.links.map(t=>({value:t}))):s(r.links))};M&&t()},[M]);let L=(0,p.D)(async t=>{let{data:e,urls:r}=t,n=e.photo||[],a=Math.max(...n.map(t=>t.idx),0),i=[...n,...r.map((t,e)=>({url:t,idx:a+1+e,caption:k[e]||""}))],s={...e,_id:M,photo:i,length:i.length};return(0,d.re)(s)},{onMutate:async t=>{let{data:e,urls:r}=t;_.push("/"),await D.cancelQueries(["timelines"]),D.getQueryData(["timelines"]);let n={...e,_id:M,photo:[...e.photo||[],...r.map((t,r)=>({url:t,idx:e.length+r,caption:k[r]||""}))],length:e.length+r.length};D.setQueryData(["timelines"],t=>t&&Array.isArray(t.pages)?{...t,pages:t.pages.map(t=>t.map(t=>t._id===M?n:t))}:(console.error("Unexpected data type for 'timelines'",t),{pages:[],pageParams:(null==t?void 0:t.pageParams)||[]}))}}),T=(0,i.useCallback)(async e=>{e.preventDefault();let n={mainText:f,photo:x,length:x.length,tags:t,authorId:R.id,authorName:R.name,links:r};j&&(await j,S(null));try{await L.mutateAsync({data:n,urls:E})}catch(t){throw t}},[f,x,t,R,E]),A=(0,i.useCallback)(t=>{g(t.target.value)},[]),F=(0,i.useCallback)(t=>e=>{let r=[...x];r[t].caption=e.target.value,v(r)},[x]),P=(0,i.useCallback)(t=>e=>{e.preventDefault();let r=E.filter((e,r)=>r!==t),n=k.filter((e,r)=>r!==t),a=x.filter((e,r)=>r!==t);N(r),C(n),v(a)},[E,k,x]),U=(0,i.useCallback)(t=>e=>{let r=[...k];r[t]=e.target.value,C(r)},[k]),G=(0,i.useCallback)(async t=>{await (0,d.Ef)(t,y);let e=(0,d.eg)(t);S(e);let r=await (0,d.eg)(t);N(t=>[...t,...r]),C(t=>[...t,...r.map(t=>"")])},[]);return(0,n.jsxs)("div",{className:"container mx-auto p-4",children:[(0,n.jsx)("h1",{className:"text-3xl mb-4",children:"Editar"}),(0,n.jsx)(m(),{href:"/",children:"Volver"}),(0,n.jsxs)("form",{onSubmit:T,className:"bg-white border-2 rounded-md flex flex-col gap-4 p-4",children:[(0,n.jsx)("label",{htmlFor:"mainText",className:"text-lg font-semibold",children:"Texto"}),(0,n.jsx)("textarea",{value:f,onChange:A,className:"border rounded h-32 p-3 text-md resize-none"}),(0,n.jsx)(b,{placeholder:"Agregar categor\xeda",inputList:t,setInputList:e,type:"tag"}),(0,n.jsx)(b,{placeholder:"Agregar link",inputList:r,setInputList:s,type:"link"}),(0,n.jsx)(c,{handleUploadImages:G}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[x&&x.map((t,e)=>(0,n.jsxs)("div",{className:"flex flex-col min-[470px]:flex-row items-center gap-2 md:justify-center",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center mr-[25px] min-[470px]:mr-0",children:[(0,n.jsx)("button",{onClick:P(e),className:"bg-red-500 text-white p-1 w-7 h-7 rounded-full",children:(0,n.jsx)(u.G,{icon:o.EOp,style:{marginBottom:"2px"}})}),/\/dahu3rii0\/video\/upload\//.test(t.url)?(0,n.jsxs)("video",{width:"100",height:"100",controls:!0,children:[(0,n.jsx)("source",{src:t.url,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,n.jsx)(l(),{src:t.url,alt:"",width:100,height:100})]}),(0,n.jsx)("input",{type:"text",value:t.caption||"",onChange:F(e),className:"border p-2 rounded-md w-full min-[470px]:w-[65%] min-[470px]:mx-auto md:mx-0 "})]},e)),w&&w.map((t,e)=>(0,n.jsxs)("div",{className:"flex flex-col min-[470px]:flex-row items-center gap-2 bg-gray-100 p-2 rounded-md md:justify-center",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center mr-[25px] min-[470px]:mr-0",children:[(0,n.jsx)("button",{onClick:P(e),className:"bg-red-500 text-white p-1 w-7 h-7 rounded-full",children:(0,n.jsx)(u.G,{icon:o.EOp,style:{marginBottom:"2px"}})}),/data:video\/mp4/.test(t)?(0,n.jsxs)("video",{width:"100",height:"100",controls:!0,children:[(0,n.jsx)("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,n.jsx)(l(),{src:t,alt:"",width:100,height:100})]}),(0,n.jsx)("input",{type:"text",value:k[e]||"",onChange:U(e),className:"border p-2 rounded-md w-full min-[470px]:w-[65%] min-[470px]:mx-auto border-blue-500 md:mx-0 "})]},e))]}),(0,n.jsx)("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600",children:"Enviar"})]})]})}},1367:function(t,e,r){"use strict";r.d(e,{X4:function(){return m},J8:function(){return f},re:function(){return h},J4:function(){return p},tr:function(){return u},BI:function(){return c},Ef:function(){return o},Od:function(){return s},w8:function(){return l},$S:function(){return d},eg:function(){return i}});var n=r(6455),a=r.n(n);let i=async t=>{if(t.target.files){let e=Array.from(t.target.files);return await Promise.all(e.map(async t=>{let e=t,r=/\/png$/.test(e.type);if(r){var n;let t=await (n=e,new Promise((t,e)=>{let r=new Image;r.onload=function(){let n=document.createElement("canvas"),a=n.getContext("2d");if(n.width=r.width,n.height=r.height,!a)throw"canvas.getContext(2d) is false";a.drawImage(r,0,0),n.toBlob(r=>{if(r){let n=new FileReader;n.onloadend=function(){n.result?t(n.result):e(Error("Failed to convert image to JPEG"))},n.onerror=function(){e(Error("Failed to convert image to JPEG"))},n.readAsDataURL(r)}else e(Error("Failed to convert image to JPEG"))},"image/jpeg",.9)},r.onerror=function(){e(Error("Failed to load image"))},r.src=URL.createObjectURL(n)}));e=t}let a=new FormData;a.append("file",e),a.append("upload_preset","qxkzlm62");let i=await fetch("https://api.cloudinary.com/v1_1/".concat("dahu3rii0","/upload"),{method:"POST",body:a});if(i.ok){let t=await i.json();return t.secure_url}throw Error("Upload failed")}))}},s=t=>new Promise((e,r)=>{let n=t.target.files,a=[];if(n&&n.length>0){let t=0;for(let i=0;i<n.length;i++){let s=new FileReader;s.onloadend=()=>{let r=s.result;a.push(r),++t===n.length&&e(a)},s.onerror=()=>{r(Error("Failed to read file"))},s.readAsDataURL(n[i])}}else e([])}),l=t=>new Promise((e,r)=>{let n=t.target.files,a=[];if(n&&n.length>0){let t=0;for(let i=0;i<n.length;i++){let s=new FileReader;s.onloadend=()=>{let r=s.result;a.push(r),++t===n.length&&e(a)},s.onerror=()=>{r(Error("Failed to read file"))},s.readAsDataURL(n[i])}}else e([])}),o=(t,e)=>new Promise((r,n)=>{let a=t.target.files;if(a&&a.length>0){let t=[],i=0;for(let s=0;s<a.length;s++){let l=new FileReader;l.onloadend=()=>{let n=l.result;t.push(n),++i===a.length&&(e(e=>[...e,...t]),r())},l.onerror=()=>{n(Error("Failed to read file"))},l.readAsDataURL(a[s])}}else e([]),r()}),u=(t,e,r,n)=>{let a=r.map((r,n)=>(n===e&&(r.value=t.target.value),r)),i=r.some(t=>t.idx===e);i||a.push({idx:e,value:t.target.value}),n(a)},c=(t,e,r,n)=>{t.preventDefault(),r(t=>t.filter((t,r)=>r!==e)),n(t=>t.filter((t,r)=>r!==e))},d=async t=>{try{let e=await fetch("/api/timeline",{method:"POST",body:JSON.stringify(t)});return e.ok||a().fire({title:"Error",text:"Error ".concat(e.statusText),icon:"error"}),e}catch(t){throw a().fire({title:"Error",text:"Error ".concat(t),icon:"error"}),t}},h=async t=>{try{let e=await fetch("/api/timeline/".concat(t._id),{method:"PUT",body:JSON.stringify(t)});return e.ok||a().fire({title:"Error",text:"Error ".concat(e.statusText),icon:"error"}),e}catch(t){throw a().fire({title:"Error",text:"Error ".concat(t),icon:"error"}),t}},p=()=>{let t=new Date,e=t.getFullYear().toString().padStart(4,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),a=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),s=t.getSeconds().toString().padStart(2,"0"),l=t.getMilliseconds().toString().padStart(3,"0");return"".concat(e,"-").concat(r,"-").concat(n,"T").concat(a,":").concat(i,":").concat(s,".").concat(l,"Z")},f=(t,e)=>t.map((t,r)=>{var n;let a=null===(n=e.find(t=>t.idx===r))||void 0===n?void 0:n.value;return{url:t,idx:r,caption:a}}),m=(t,e,r,n,a)=>{var i,s,l,o;return{mainText:t.mainText||"",photo:e,length:e.length,tags:r,authorId:null!==(l=null==n?void 0:null===(i=n.user)||void 0===i?void 0:i.email)&&void 0!==l?l:"defaultId",authorName:null!==(o=null==n?void 0:null===(s=n.user)||void 0===s?void 0:s.name)&&void 0!==o?o:"defaultName",links:a}}},4154:function(t,e,r){"use strict";r.d(e,{p:function(){return n}});let n=async t=>{try{let e=await fetch("/api/getCategories".concat(t?"?modelType=".concat(t):""),{method:"GET"});if(!e.ok)throw Error("Failed to fetch categories");let r=await e.json();return r}catch(t){throw t}}},455:function(t,e,r){"use strict";function n(t){return/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?.*v=|youtu\.be\/|youtube\.com\/embed\/)[a-zA-Z0-9_-]{11}(?:&.*|\?.*)?$/.test(t)}function a(t){for(let e of[/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,/^https?:\/\/www\.youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})(?:&.*|$)/,/^https?:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/]){let r=t.match(e);if(r)return r[1]}return null}function i(t){let e=t.match(/[?&]t=(\d+)/);return e?parseInt(e[1],10):null}r.d(e,{Lm:function(){return i},T:function(){return n},Tm:function(){return a}})},3250:function(t,e,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),a="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},i=n.useState,s=n.useEffect,l=n.useLayoutEffect,o=n.useDebugValue;function u(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!a(t,r)}catch(t){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),n=i({inst:{value:r,getSnapshot:e}}),a=n[0].inst,c=n[1];return l(function(){a.value=r,a.getSnapshot=e,u(a)&&c({inst:a})},[t,r,e]),s(function(){return u(a)&&c({inst:a}),t(function(){u(a)&&c({inst:a})})},[t]),o(r),r};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},1688:function(t,e,r){"use strict";t.exports=r(3250)},8228:function(t,e,r){"use strict";r.d(e,{D:function(){return h}});var n=r(7294),a=r(2161),i=r(9886),s=r(81),l=r(3989);class o extends l.l{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let r=this.options;this.options=this.client.defaultMutationOptions(t),(0,a.VS)(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,i.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){s.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,r,n,a,i,s,l,o;t.onSuccess?(null==(e=(r=this.mutateOptions).onSuccess)||e.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(n=(a=this.mutateOptions).onSettled)||n.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(i=(s=this.mutateOptions).onError)||i.call(s,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(l=(o=this.mutateOptions).onSettled)||l.call(o,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}}var u=r(464),c=r(5945),d=r(4798);function h(t,e,r){let i=(0,a.lV)(t,e,r),l=(0,c.NL)({context:i.context}),[h]=n.useState(()=>new o(l,i));n.useEffect(()=>{h.setOptions(i)},[h,i]);let f=(0,u.$)(n.useCallback(t=>h.subscribe(s.V.batchCalls(t)),[h]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),m=n.useCallback((t,e)=>{h.mutate(t,e).catch(p)},[h]);if(f.error&&(0,d.L)(h.options.useErrorBoundary,[f.error]))throw f.error;return{...f,mutate:m,mutateAsync:f.mutate}}function p(){}},464:function(t,e,r){"use strict";r.d(e,{$:function(){return a}});var n=r(1688);let a=n.useSyncExternalStore},4798:function(t,e,r){"use strict";function n(t,e){return"function"==typeof t?t(...e):!!t}r.d(e,{L:function(){return n}})}},function(t){t.O(0,[976,948,455,603,774,888,179],function(){return t(t.s=6335)}),_N_E=t.O()}]);