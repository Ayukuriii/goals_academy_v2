import{j as e,r as c}from"./app-d0fd278b.js";import{M as i}from"./tw-elements-react.es.min-aa8ebe4f.js";const d="/build/assets/3-c14682c8.svg";function u({data:s}){return e.jsx("section",{id:"faq",className:"my-16 xs:my-20 md:my-16 lg:my-20 xl:my-24 3xl:my-32",children:e.jsxs("div",{className:"container mx-auto flex flex-wrap justify-between",children:[e.jsx("div",{className:"w-5/12 hidden md:block",children:e.jsx("img",{src:d,alt:"Figure 3"})}),e.jsxs("div",{className:"w-full relative md:w-6/12 md:mt-[2%] lg:mt-[3%]",children:[e.jsx("p",{className:"font-medium md:tracking-[0.2rem] lg:tracking-[0.3rem] xl:tracking-[0.4rem] mb-4 md:mb-2 lg:mb-3 xl:mb-4 text-center md:text-start",children:"PALING SERING DITANYAKAN"}),e.jsxs("h2",{className:"mb-6 xs:mb-8 md:mb-4 xl:mb-8 3xl:mb-12 text-center md:text-start",children:["Ada ",e.jsx("span",{className:"text-primary",children:"Pertanyaan?"})]}),e.jsx(o,{data:s})]})]})})}function a({id:s,show:m,toggleShow:n,question:x,answer:l}){const t=m[s];function r(){return t?e.jsx("i",{className:"fa-solid fa-minus flex justify-center items-center text-white bg-secondary rounded-full text-10 xs:text-12 md:text-6 lg:text-10 xl:text-12 w-4 h-4 xs:w-5 xs:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"}):e.jsx("i",{className:"fa-solid fa-plus flex justify-center items-center text-white bg-secondary rounded-full text-10 xs:text-12 md:text-6 lg:text-10 xl:text-12 w-4 h-4 xs:w-5 xs:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"})}return e.jsx(e.Fragment,{children:e.jsxs("button",{type:"button",className:"w-full flex gap-3 xs:gap-4 md:gap-2 xl:gap-4 py-4 xs:py-6 md:py-3 lg:py-4",onClick:()=>n(s),children:[e.jsx("div",{children:e.jsx(r,{})}),e.jsxs("div",{className:"text-start",children:[e.jsx("p",{className:"font-medium",children:x}),e.jsx(i,{show:t,className:"shadow-none",children:e.jsx("div",{children:l})})]})]})})}function o({data:s}){const[m,n]=c.useState(Array(s.length).fill(!1)),x=l=>{const t=Array(s.length).fill(!1);t[l]=!m[l],n(t)};return e.jsx("div",{className:"w-full md:absolute",children:s.map(({question:l,answer:t},r)=>r!=s.length-1?e.jsxs("div",{children:[e.jsx(a,{id:r,show:m,toggleShow:x,question:l,answer:t}),e.jsx("hr",{className:"border-dark"})]},r):e.jsx(a,{id:r,show:m,toggleShow:x,question:l,answer:t},r))})}export{u as default};
