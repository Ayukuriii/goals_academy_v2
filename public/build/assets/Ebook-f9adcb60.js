import{j as e}from"./app-c4f207a7.js";import{S as m,N as n,P as x,A as c,a as p}from"./a11y-70f57cc7.js";import{f as h}from"./free-mode-9a62b8e8.js";import{B as a}from"./ButtonSwiper-2c41a457.js";import{B as u}from"./ButtonPill-4168cb74.js";import"./ButtonHoverSlide-39d48950.js";function y({data:s,active:l,status:r}){return e.jsxs("section",{id:"ebook",className:`${l||r?"":"hidden"} my-8 xl:my-12 3xl:my-16 overflow-hidden`,children:[e.jsxs("div",{className:"container mx-auto hidden md:block",children:[e.jsx("h2",{className:"mb-4 sm:mb-6 xl:mb-10 3xl:mb-14",children:"E-Book"}),e.jsx("div",{className:"grid grid-cols-3 justify-center md:gap-8 xl:gap-16 pb-2",children:s.map((o,t)=>{const d=(t+1)%3==2?"justify-center":(t+1)%3==0?"justify-end":"";return e.jsx("div",{className:`flex ${d}`,children:e.jsx(i,{item:o,className:"md:w-[21vw] 3xl:w-[20vw]"},t)},t)})})]}),e.jsx(f,{data:s})]})}function f({data:s}){return e.jsxs("div",{className:"container mx-auto md:hidden",children:[e.jsxs("div",{className:"flex justify-between mb-6 xs:mb-8",children:[e.jsx("div",{className:"md:w-6/12",children:e.jsxs("h2",{className:"text-[5vw]",children:["E-Book ",e.jsx("span",{className:"text-primary",children:"Skripsi"})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(a,{name:"ebook-prev",direction:"left"}),e.jsx(a,{name:"ebook-next",direction:"right"})]})]}),e.jsx(m,{modules:[n,x,c,h],className:"swiper-custom",wrapperClass:"-ms-2",slidesPerView:"auto",grabCursor:!0,freeMode:!0,navigation:{nextEl:".ebook-next",prevEl:".ebook-prev"},children:s.map((l,r)=>e.jsx(p,{style:{width:"fit-content"},className:"p-4 md:p-2 lg:p-3 xl:p-4",children:e.jsx(i,{item:l,className:"w-[70vw]"})},r))})]})}function i({item:s,className:l}){const r=Intl.NumberFormat("id-ID");return e.jsxs("div",{className:`shadow-centered rounded-3xl md:rounded-lg xl:rounded-3xl overflow-hidden ${l}`,children:[e.jsx("div",{className:"w-full h-[90vw] md:h-[27vw] overflow-hidden",children:e.jsx("img",{className:"w-full",src:`/storage/${s.product_image}`,alt:s.name})}),e.jsxs("div",{className:"p-4 md:p-3 lg:p-4 2xl:p-6 3xl:p-8",children:[e.jsx("p",{className:"font-medium text-16 xs:text-20 md:text-10 lg:text-14 xl:text-16 2xl:text-20 3xl:text-24 h-12 xs:h-16 md:h-7 lg:h-8 2xl:h-12 3xl:h-16",children:s.name}),e.jsxs("p",{className:"font-bold font-poppins text-primary text-20 xs:text-24 md:text-14 lg:text-18 xl:text-24 2xl:text-28 3xl:text-32 my-4 md:my-3 lg:my-4 xl:my-6",children:["IDR ",s.price!="-"?r.format(s.price):"-"]}),e.jsx(u,{href:s.link,isLink:!1,isActive:!1,className:"w-full",children:"Coming Soon"})]})]})}export{y as default};
