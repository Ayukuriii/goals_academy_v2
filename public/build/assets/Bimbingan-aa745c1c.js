import{j as i}from"./app-bdfefb32.js";import{S as d,N as t,P as o,A as c,a as x}from"./a11y-b5885823.js";import{f as p}from"./free-mode-769f7486.js";import{B as n}from"./ButtonSwiper-2d2bdabf.js";import{B as r}from"./BimbinganCard-7fc729e9.js";import"./ButtonHoverSlide-303e1cc5.js";import"./ButtonPill-151bbd4e.js";function N({data:s,active:e,status:a}){return i.jsxs("section",{id:"bimbingan",className:`${e||a?"":"hidden"} my-8 xl:my-12 3xl:my-16 overflow-hidden`,children:[i.jsxs("div",{className:"container mx-auto hidden md:block",children:[i.jsx("h2",{className:"mb-4 sm:mb-6 xl:mb-10 3xl:mb-14",children:"Bimbingan Skripsi"}),i.jsx("div",{className:"grid grid-cols-3 md:gap-8 xl:gap-16 pb-2",children:s.map((m,l)=>i.jsx(r,{item:m,className:"w-72 md:w-[21vw] 3xl:w-[20vw]"},l))})]}),i.jsx(b,{data:s})]})}function b({data:s}){return i.jsxs("div",{className:"container mx-auto md:hidden",children:[i.jsxs("div",{className:"flex justify-between mb-6 xs:mb-8",children:[i.jsx("div",{className:"md:w-6/12",children:i.jsx("h2",{children:"Bimbingan Skripsi"})}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx(n,{name:"bimbingan-prev",direction:"left"}),i.jsx(n,{name:"bimbingan-next",direction:"right"})]})]}),i.jsx(d,{modules:[t,o,c,p],className:"swiper-custom",wrapperClass:"-ms-2",slidesPerView:"auto",grabCursor:!0,freeMode:!0,navigation:{nextEl:".bimbingan-next",prevEl:".bimbingan-prev"},children:s.map((e,a)=>i.jsx(x,{style:{width:"fit-content"},className:"p-4 md:p-2 lg:p-3 xl:p-4",children:i.jsx(r,{item:e,className:"w-[70vw]"})},a))})]})}export{N as default};
