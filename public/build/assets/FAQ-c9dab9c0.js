import{j as e,r as i}from"./app-e79b2eff.js";import{M as x}from"./tw-elements-react.es.min-dfc5e4a2.js";const d="/build/assets/3-c14682c8.svg";function u({data:s}){return e.jsx("section",{id:"faq",className:"my-16 xl:my-24 3xl:my-32",children:e.jsxs("div",{className:"container mx-auto flex flex-wrap justify-between",children:[e.jsx("div",{className:"w-5/12 hidden md:block",children:e.jsx("img",{src:d,alt:"Figure 3"})}),e.jsxs("div",{className:"w-full relative md:w-6/12 md:mt-[2%] lg:mt-[3%]",children:[e.jsx("p",{className:"font-medium md:tracking-[0.2rem] lg:tracking-[0.3rem] xl:tracking-[0.4rem] mb-4 md:mb-2 lg:mb-3 xl:mb-4 text-center md:text-start",children:"PALING SERING DITANYAKAN"}),e.jsxs("h2",{className:"mb-8 md:mb-4 xl:mb-8 3xl:mb-12 text-center md:text-start",children:["Ada ",e.jsx("span",{className:"text-primary",children:"Pertanyaan?"})]}),e.jsx(o,{data:s})]})]})})}function c({id:s,show:n,toggleShow:m,question:a,answer:l}){const t=n[s];function r(){return t?e.jsx("i",{className:"fa-solid fa-minus flex justify-center items-center text-white bg-secondary rounded-full md:text-6 lg:text-10 xl:text-12 w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"}):e.jsx("i",{className:"fa-solid fa-plus flex justify-center items-center text-white bg-secondary rounded-full md:text-6 lg:text-10 xl:text-12 w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"})}return e.jsx(e.Fragment,{children:e.jsxs("button",{type:"button",className:"w-full flex gap-4 md:gap-2 xl:gap-4 py-6 md:py-3 lg:py-4",onClick:()=>m(s),children:[e.jsx("div",{children:e.jsx(r,{})}),e.jsxs("div",{className:"text-start",children:[e.jsx("p",{className:"font-medium",children:a}),e.jsx(x,{show:t,className:"shadow-none",children:e.jsx("div",{children:l})})]})]})})}function o({data:s}){const[n,m]=i.useState(Array(s.length).fill(!1)),a=l=>{const t=Array(s.length).fill(!1);t[l]=!n[l],m(t)};return e.jsx("div",{className:"w-full md:absolute",children:s.map(({question:l,answer:t},r)=>r!=s.length-1?e.jsxs("div",{children:[e.jsx(c,{id:r,show:n,toggleShow:a,question:l,answer:t}),e.jsx("hr",{className:"border-dark"})]},r):e.jsx(c,{id:r,show:n,toggleShow:a,question:l,answer:t},r))})}export{u as default};
