import{r as s}from"./index.WFquGv8Z.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),l=t=>{const e=b(t);return e.charAt(0).toUpperCase()+e.slice(1)},c=(...t)=>t.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim(),f=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:u,...n},p)=>s.createElement("svg",{ref:p,...w,width:e,height:e,stroke:t,strokeWidth:r?Number(a)*24/Number(e):a,className:c("lucide",i),...!o&&!f(n)&&{"aria-hidden":"true"},...n},[...u.map(([g,m])=>s.createElement(g,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(t,e)=>{const a=s.forwardRef(({className:r,...i},o)=>s.createElement(h,{ref:o,iconNode:e,className:c(`lucide-${d(l(t))}`,`lucide-${t}`,r),...i}));return a.displayName=l(t),a},k={name:"Agustín",lastName:"Pagliuca",fullName:"Agustín Pagliuca",title:"Desarrollador Backend",subtitle:".NET | C# | SQL Server",yearsExperience:"+2",email:"agustinpagliuca1@gmail.com",phone:"+54-11-23448499",location:"Buenos Aires, Argentina",linkedin:"https://www.linkedin.com/in/agustin-pagliuca-6836b7237/",github:"https://github.com/AgustinPagliuca",profileImage:"/agustin-website/foto-perfil.jpeg",cvUrl:"/agustin-website/cv-agustin-pagliuca.pdf",available:!0},v=[{id:"experiencia",label:"Experiencia"},{id:"proyectos",label:"Proyectos"},{id:"tecnologias",label:"Tecnologías"},{id:"sobre-mi",label:"Sobre mí"}];export{A as c,v as m,k as p};
