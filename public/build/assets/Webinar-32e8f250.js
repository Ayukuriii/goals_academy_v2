import{j as e,r as c}from"./app-7c3879b2.js";import{S as h,N as w,P as j,A as v,a as g}from"./a11y-537ad673.js";import{f as b}from"./free-mode-76191c88.js";import{B as x}from"./ButtonSwiper-d22c3d7e.js";import{m as o}from"./moment-6d45fd70.js";import"./ButtonHoverSlide-f0ccbcf6.js";function W({data:t,active:r,status:a}){return e.jsxs("section",{id:"webinar",className:`${r||a?"":"hidden"} my-8 xl:my-12 3xl:my-16 overflow-hidden`,children:[e.jsxs("div",{className:"container mx-auto hidden md:block",children:[e.jsx("h2",{className:"mb-4 sm:mb-6 xl:mb-10 3xl:mb-14",children:"Webinar Skripsi"}),e.jsx("div",{className:"grid grid-cols-3 justify-center md:gap-8 xl:gap-16 pb-2",children:t.map((l,s)=>{const i=(s+1)%3==2?"justify-center":(s+1)%3==0?"justify-end":"";return e.jsx("div",{className:`flex ${i}`,children:e.jsx(p,{item:l,className:"w-[70vw] md:w-[21vw] 3xl:w-[20vw]"},s)},s)})})]}),e.jsx(N,{data:t})]})}function N({data:t}){return e.jsxs("div",{className:"container mx-auto md:hidden",children:[e.jsxs("div",{className:"flex justify-between mb-6 xs:mb-8",children:[e.jsx("div",{className:"md:w-6/12",children:e.jsxs("h2",{className:"text-[5vw]",children:["Webinar ",e.jsx("span",{className:"text-primary",children:"Skripsi"})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(x,{name:"webinar-prev",direction:"left"}),e.jsx(x,{name:"webinar-next",direction:"right"})]})]}),e.jsx(h,{modules:[w,j,v,b],className:"swiper-custom",wrapperClass:"-ms-2",slidesPerView:"auto",grabCursor:!0,freeMode:!0,navigation:{nextEl:".webinar-next",prevEl:".webinar-prev"},children:t.map((r,a)=>e.jsx(g,{style:{width:"fit-content"},className:"p-4 md:p-2 lg:p-3 xl:p-4",children:e.jsx(p,{item:r,className:"w-[70vw]"})},a))})]})}function p({item:t,className:r}){const a=Intl.NumberFormat("id-ID"),l=o(t.date),[s,i]=c.useState("00:00:00:00");let m=c.useRef();const u=()=>{m.current=setInterval(()=>{const n=l.diff(o());if(console.log(n),n<=1)i("00:00:00:00"),clearInterval(m.current);else{const f=l.diff(o(),"days").toString().padStart(2,"0"),d=o();d.hours(Math.floor(n/(1e3*60*60))),d.minutes(Math.floor(n%(1e3*60*60)/(1e3*60))),d.seconds(Math.floor(n%(1e3*60*60)%(1e3*60)/1e3)),i(f+d.format(":HH:mm:ss"))}},1e3)};return c.useEffect(()=>(u(),()=>{clearInterval(m.current)}),[]),e.jsxs("div",{className:`relative shadow-centered rounded-3xl md:rounded-lg xl:rounded-3xl overflow-hidden ${r}`,children:[e.jsx("div",{className:"absolute right-0 bg-secondary text-white text-center font-poppins font-medium w-6/12 p-1 xl:text-20",children:s}),e.jsx("div",{className:"w-full h-[40vw] md:h-[12vw] overflow-hidden",children:e.jsx("img",{className:"w-full",src:t.image,alt:t.title})}),e.jsxs("div",{className:"p-4 md:p-3 lg:p-4 2xl:p-6 3xl:p-8",children:[e.jsx("p",{className:"font-medium text-16 xs:text-20 md:text-10 lg:text-14 xl:text-16 2xl:text-20 3xl:text-24 h-12 xs:h-16 md:h-7 lg:h-8 2xl:h-12 3xl:h-16",children:t.title}),e.jsxs("p",{className:"font-bold font-poppins text-primary text-20 xs:text-24 md:text-14 lg:text-18 xl:text-24 2xl:text-28 3xl:text-32 my-4 md:my-3 lg:my-4 xl:my-6",children:["IDR ",a.format(t.price)]})]})]})}export{W as default};
