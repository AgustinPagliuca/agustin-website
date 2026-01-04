import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as d}from"./index.WFquGv8Z.js";import{c as o,m as l,p as h}from"./portfolioData.CIqxb6fX.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],m=o("github",g);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],p=o("linkedin",k);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],v=o("menu",b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],f=o("moon",u);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],j=o("sun",M);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N=o("x",w),C=()=>{const[r,i]=d.useState(!1),[a,c]=d.useState(!0);d.useEffect(()=>{const t=localStorage.getItem("darkMode")!=="false";c(t);const s=y=>{c(y.detail.darkMode)};return window.addEventListener("darkModeChange",s),()=>{window.removeEventListener("darkModeChange",s)}},[]);const x=()=>{const t=!a;window.dispatchEvent(new CustomEvent("setDarkMode",{detail:{darkMode:t}}))},n=t=>{document.getElementById(t)?.scrollIntoView({behavior:"smooth"}),i(!1)};return e.jsxs("nav",{className:`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${a?"bg-gray-950/90 border-gray-800/50":"bg-white/90 border-gray-200"}`,children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex justify-between items-center",children:[e.jsx("button",{onClick:()=>n("home"),className:`text-xl font-bold transition-colors ${a?"text-cyan-400 hover:text-cyan-300":"text-cyan-600 hover:text-cyan-500"}`,children:"apdev"}),e.jsx("div",{className:"hidden md:flex items-center space-x-8",children:l.map(t=>e.jsx("button",{onClick:()=>n(t.id),className:`transition-colors text-sm ${a?"text-gray-300 hover:text-white":"text-gray-600 hover:text-gray-900"}`,children:t.label},t.id))}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("a",{href:h.linkedin,target:"_blank",rel:"noopener noreferrer",className:`transition-colors ${a?"text-gray-400 hover:text-white":"text-gray-500 hover:text-gray-900"}`,"aria-label":"LinkedIn",children:e.jsx(p,{size:20})}),e.jsx("a",{href:h.github,target:"_blank",rel:"noopener noreferrer",className:`transition-colors ${a?"text-gray-400 hover:text-white":"text-gray-500 hover:text-gray-900"}`,"aria-label":"GitHub",children:e.jsx(m,{size:20})}),e.jsx("button",{onClick:x,className:`p-2 rounded-lg transition-colors ${a?"text-gray-400 hover:text-white hover:bg-gray-800":"text-gray-500 hover:text-gray-900 hover:bg-gray-200"}`,"aria-label":"Toggle theme",children:a?e.jsx(j,{size:20}):e.jsx(f,{size:20})}),e.jsx("button",{onClick:()=>i(!r),className:`md:hidden p-2 transition-colors ${a?"text-gray-400 hover:text-white":"text-gray-500 hover:text-gray-900"}`,"aria-label":"Toggle menu",children:r?e.jsx(N,{size:20}):e.jsx(v,{size:20})})]})]}),r&&e.jsx("div",{className:`md:hidden px-6 pb-4 space-y-2 border-b transition-colors duration-300 ${a?"bg-gray-950/95 border-gray-800/50":"bg-white/95 border-gray-200"}`,children:l.map(t=>e.jsx("button",{onClick:()=>n(t.id),className:`block w-full text-left px-4 py-2 rounded-lg transition-colors ${a?"text-gray-300 hover:text-white hover:bg-gray-800/50":"text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`,children:t.label},t.id))})]})};export{C as default};
