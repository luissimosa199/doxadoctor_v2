(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{9258:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/medicos",function(){return t(7461)}])},4417:function(e,s,t){"use strict";var a=t(5893),l=t(9417),r=t(4288),i=t(2489),n=t(3299),c=t(1163);t(7294),s.Z=e=>{let{username:s,size:t="lg",showSpan:o=!1,isFavorite:x,mutation:u,isLoading:d}=e,{data:m}=(0,n.useSession)(),h=(0,c.useRouter)();return(0,a.jsxs)("div",{className:"".concat(o?"flex flex-col lg:flex-row items-center justify-center gap-1":""," cursor-pointer"),onClick:e=>{if(e.preventDefault(),!(null==m?void 0:m.user)){h.push("/login");return}u.mutate({email:s,method:x?"DELETE":"POST"})},children:[(0,a.jsx)("button",{className:"".concat(d?"text-white animate-pulse":x?"text-yellow-500 sm:hover:text-white":"text-black active:text-yellow-500 sm:hover:text-yellow-500","  flex justify-center items-center lg:py-1"),children:(0,a.jsx)(i.G,{size:t,icon:x?l.Tab:r.Tab,className:"w-10 h-10 lg:w-5 lg:h-5"})}),o&&(0,a.jsxs)("span",{className:"text-sm break-normal min-h-[450px]:text-base",children:[x?"Eliminar de ":"Agregar a ","favoritos"]})]})}},8138:function(e,s,t){"use strict";var a=t(5893);t(7294),s.Z=()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"12",viewBox:"0 0 384 512",children:(0,a.jsx)("path",{d:"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"})})},8256:function(e,s,t){"use strict";var a=t(5893);t(7294),s.Z=()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"18",viewBox:"0 0 576 512",children:(0,a.jsx)("path",{d:"M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"})})},163:function(e,s,t){"use strict";t.d(s,{s:function(){return c}});let a=async e=>{let{email:s,method:t}=e,a=await fetch("".concat("http://localhost:3000","/api/user/favorites"),{method:t,body:s});if(!a.ok)throw Error("Network response was not ok");return a.json()};var l=t(6492),r=t(5945),i=t(8228),n=t(7294);function c(e){let[s,t]=(0,n.useState)(null),{data:c,isLoading:o}=(0,l.a)(["favorites",e],async()=>{let e=await fetch("".concat("http://localhost:3000","/api/user/favorites"));if(e.ok){let s=await e.json();return s}}),x=(0,r.NL)(),u=(0,i.D)(a,{onMutate:s=>{let{email:a,method:l}=s;x.cancelQueries(["favorites",e]);let r=x.getQueryData(["favorites",e])||[];return Array.isArray(r)&&("DELETE"===l?(x.setQueryData(["favorites",e],r.filter(e=>e!==a)),t(!1)):(x.setQueryData(["favorites",e],[...r,a]),t(!0))),{previousFavorites:r}},onSettled:()=>{x.invalidateQueries(["favorites",e])}});return(0,n.useEffect)(()=>{c&&t(c.includes(e))},[c,e]),{isFavorite:s,mutation:u,isLoading:o}}},7461:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return B}});var a=t(5893),l=t(3299),r=t(6492),i=t(1664),n=t.n(i),c=t(7294),o=t(8375),x=t(9059),u=t(1163),d=t(4417),m=t(163),h=()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{d:"M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"})}),f=t(8256),p=e=>{let{username:s,favoritesLoading:t,isFavorite:r}=e,i=(0,u.useRouter)(),{data:n}=(0,l.useSession)(),{mutation:c}=(0,m.s)(s);return(0,a.jsxs)("div",{className:"flex gap-2 w-full justify-around p-2",children:[(0,a.jsx)(d.Z,{username:s,isFavorite:r,mutation:c,isLoading:t},"2"),(0,a.jsx)("button",{className:"hover:text-green-500 transition w-6",onClick:e=>{var t;e.preventDefault(),i.push("".concat((null==n?void 0:n.user)?"/chat/".concat((null==n?void 0:null===(t=n.user)||void 0===t?void 0:t.email).split("@")[0],"y").concat(s):"/login"))},children:(0,a.jsx)("div",{className:"w-6 l h-6 flex justify-center items-center",children:(0,a.jsx)(h,{})})}),(0,a.jsx)("button",{className:"hover:text-blue-500 transition",onClick:e=>{e.preventDefault(),i.push("".concat((null==n?void 0:n.user)?"/videocall?name=".concat(s):"/login"))},children:(0,a.jsx)("div",{className:"w-6 l h-6 flex justify-center items-center",children:(0,a.jsx)(f.Z,{})})})]})};let g=async e=>{let s=await fetch("api/user/online?email=".concat(encodeURIComponent(e)));if(!s.ok)throw Error("Network response was not ok");return s.json()};var j=e=>{let{user:s}=e,{data:t,isLoading:l}=(0,r.a)(["userOnlineStatus",s],()=>g(s),{refetchInterval:12e4});return t&&t.online&&!l?(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{className:"rounded-full w-3 h-3 bg-green-400"}),(0,a.jsx)("p",{className:"text-xs text-center leading-none text-white",children:"en l\xednea"})]}):(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:""}),(0,a.jsx)("p",{className:""})]})},w=()=>(0,a.jsx)("svg",{fill:"#fde047",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"18",viewBox:"0 0 576 512",children:(0,a.jsx)("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})}),v=()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"18",viewBox:"0 0 576 512",children:(0,a.jsx)("path",{d:"M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"})}),y=t(8138),N=e=>{let{user:s,favoritesLoading:t,isFavorites:l}=e;return(0,a.jsx)("li",{className:"shadow-md bg-white",children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-y-2 w-full",children:[(0,a.jsx)(n(),{href:"/medicos/".concat(s.slug),className:"",children:(0,a.jsxs)("div",{className:"h-96 md:h-[280px] w-screen sm:max-w-sm md:w-[280px] overflow-hidden relative",children:[(0,a.jsx)(o.bz,{alt:"foto de ".concat(s.name),src:s.image||x.j,fill:!0,className:"absolute object-cover"}),(0,a.jsx)("div",{className:"w-full h-full bg-gray-200"}),(0,a.jsx)("div",{className:"flex items-center gap-2 absolute bottom-2 right-2",children:(0,a.jsx)("p",{className:"text-xs text-center leading-none bg-blue-300 px-2 py-1 rounded-md font-semibold",children:"especilidad"})})]})}),(0,a.jsx)(n(),{href:"/medicos/".concat(s.slug),children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("p",{className:"text-lg font-medium",children:s.name}),(0,a.jsx)(j,{user:s.email}),(0,a.jsxs)("div",{className:"flex mb-2 gap-1 justify-center",children:[[void 0,void 0,void 0,void 0].map((e,s)=>(0,a.jsx)(w,{},"star_".concat(s))),(0,a.jsx)(v,{}),(0,a.jsx)("span",{className:"text-xs",children:"(10)"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)(y.Z,{}),(0,a.jsx)("span",{className:"text-sm text-gray-600",children:"direccion"})]})]})}),(0,a.jsx)(p,{username:s.email,favoritesLoading:t,isFavorite:l})]})},s._id)},b=t(9417),k=t(4288),L=t(2489),E=e=>{let{tag:s,setState:t,selectedTags:l}=e;return(0,a.jsx)("li",{className:"flex items-center justify-center border w-1/2 h-12",children:(0,a.jsxs)("label",{htmlFor:s,className:"flex justify-center items-center text-center capitalize w-full h-full cursor-pointer ".concat(l.includes(s)?"text-[#f90]":"text-black"),children:[(0,a.jsx)("input",{type:"checkbox",hidden:!0,id:s,value:s,onChange:e=>{e.target.checked?t(s=>[...s,e.target.value]):t(s=>s.filter(s=>s!==e.target.value))}}),(0,a.jsx)("span",{children:s})]})},s)},C=e=>{let{tags:s,setSelectedTags:t,setFilterByFavorites:l,filterByFavorites:r,setFilterOnline:i,selectedTags:n,filterOnline:c}=e;return(0,a.jsxs)("div",{className:"shadow-md bg-white",children:[(0,a.jsx)("h3",{className:"font-semibold text-lg p-2",children:"Filtrar por categor\xeda"}),(0,a.jsxs)("ul",{className:"flex flex-wrap",children:[(0,a.jsx)("li",{className:"flex items-center justify-center border border-gray-100 w-1/2 h-12",children:(0,a.jsxs)("button",{"aria-label":"Toggle favorite filter",onClick:()=>l(e=>!e),className:"".concat(r?"text-yellow-500 sm:hover:text-black":"text-black active:text-yellow-500 sm:hover:text-yellow-500"," cursor-pointer p-2 w-full h-full flex justify-center items-center"),children:[(0,a.jsx)(L.G,{size:"lg",className:"w-6 h-6 ".concat(r?"text-[#f90]":"text-black"),icon:r?b.Tab:k.Tab}),(0,a.jsx)("label",{htmlFor:"favorites",className:"ml-2 text-center capitalize cursor-pointer ".concat(r?"text-[#f90]":"text-black"),children:"Favoritos"})]})}),(0,a.jsx)("li",{className:"flex items-center justify-center bg-white border border-gray-100 w-1/2 h-12",children:(0,a.jsxs)("label",{htmlFor:"online",className:"flex justify-center items-center capitalize w-full h-full cursor-pointer ".concat(c?"text-[#f90]":"text-black"),children:[(0,a.jsx)("input",{type:"checkbox",id:"online",hidden:!0,className:"form-checkbox h-5 w-5 text-blue-600 rounded",onChange:e=>i(e.target.checked)}),(0,a.jsx)("span",{children:"En L\xednea"})]})}),s.map(e=>(0,a.jsx)(E,{tag:e,setState:t,selectedTags:n},e))]})]})};let T=async e=>{let s=await fetch(e?"/api/getCategories?modelType=".concat(e):"/api/getCategories");if(!s.ok)throw Error("Network response was not ok");return s.json()},F=e=>{let{data:s,isLoading:t,error:a}=(0,r.a)({queryFn:()=>T(e),queryKey:["categories",e],staleTime:12e4,cacheTime:12e4,keepPreviousData:!0});return{data:s,isLoading:t,error:a}};var S=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-lg text-white",children:"Filtrar por categor\xeda"}),(0,a.jsx)("div",{className:"h-40 bg-gray-300 animate-pulse"})]}),z=e=>{let{setSelectedTags:s,setFilterByFavorites:t,filterByFavorites:l,setFilterOnline:r,selectedTags:i,filterOnline:n}=e,[o,x]=(0,c.useState)([]),{data:u,isLoading:d,error:m}=F("user");return((0,c.useEffect)(()=>{u&&Array.isArray(u)&&x(u)},[u]),d)?(0,a.jsx)(S,{}):(0,a.jsx)("div",{children:(0,a.jsx)(C,{filterByFavorites:l,setFilterByFavorites:t,tags:o,setSelectedTags:s,setFilterOnline:r,selectedTags:i,filterOnline:n})})},_=()=>(0,a.jsxs)("div",{className:"min-h-[130vh] px-6 rounded-lg shadow-md max-w-[450px] md:max-w-[850px] lg:max-w-4xl xl:max-w-6xl mx-auto",children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)(S,{}),(0,a.jsx)("div",{className:"p-2 h-10 mt-4 w-full border rounded"})]}),(0,a.jsxs)("ul",{className:"flex flex-wrap gap-y-4 justify-around w-full",children:[(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"}),(0,a.jsx)("li",{className:"h-[180px] w-[180px] bg-gray-300 my-2 animate-pulse"})]})]}),B=()=>{let[e,s]=(0,c.useState)([]),[t,i]=(0,c.useState)(""),[n,o]=(0,c.useState)(!1),[x,d]=(0,c.useState)(!1);(0,u.useRouter)();let{data:m}=(0,l.useSession)(),h=async()=>{let s=e.map(e=>"tags=".concat(e)).join("&"),a=t?"name=".concat(t):"",l="/api/user?".concat(s,"&").concat(a),r=await fetch(l,{method:"GET"});if(!r.ok)throw Error("Network response was not ok");return r.json()},{data:f,error:p,isLoading:g,refetch:j}=(0,r.a)(["users"],h,{enabled:!1}),{data:w,isLoading:v}=(0,r.a)(["favorites","all"],async()=>{if(!m)return[];let e=await fetch("/api/user/favorites");if(e.ok){let s=await e.json();return s}throw Error("Could not fetch favorites")});(0,c.useEffect)(()=>{j()},[e,t,n,j]);let y=(0,c.useMemo)(()=>{let e=f||[];return n&&w&&(e=e.filter(e=>w.includes(e.email))),x&&(e=e.filter(e=>e.online)),e.sort((e,s)=>e.online&&!s.online?-1:!e.online&&s.online?1:0),e},[f,w,n,x]);return g?(0,a.jsx)(_,{}):p?(0,a.jsx)("p",{children:"Error"}):(0,a.jsxs)("div",{className:"bg-zinc-50 md:p-8",children:[(0,a.jsxs)("div",{className:"w-full mb-4 max-w-4xl mx-auto",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(z,{filterByFavorites:n,setFilterByFavorites:o,setSelectedTags:s,setFilterOnline:d,selectedTags:e,filterOnline:x})}),(0,a.jsx)("input",{type:"text",placeholder:"Buscar por nombre...",className:"p-2 mt-4 w-full border rounded",value:t,onChange:e=>i(e.target.value)})]}),(0,a.jsx)("ul",{className:"flex flex-wrap gap-8 justify-around w-full mt-4",children:y&&y.length>0?y.map((e,s)=>(0,a.jsx)(N,{user:e,favoritesLoading:v,isFavorites:Array.isArray(w)&&w.includes(e.email)},s)):(0,a.jsx)("li",{className:"text-center py-4",children:"No se consiguieron usuarios"})})]})}},9059:function(e,s,t){"use strict";t.d(s,{j:function(){return a}});let a="https://res.cloudinary.com/dahu3rii0/image/upload/v1695906400/utpg0w4bhenetupbxto4.jpg"}},function(e){e.O(0,[976,828,876,603,375,770,774,888,179],function(){return e(e.s=9258)}),_N_E=e.O()}]);