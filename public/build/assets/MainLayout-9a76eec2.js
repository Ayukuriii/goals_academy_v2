import{r as i,j as e,d as s,a as u}from"./app-e79b2eff.js";import{l as j}from"./goals-3-4574e2e0.js";import{M as m}from"./tw-elements-react.es.min-dfc5e4a2.js";import{B as g}from"./ButtonHoverSlide-04e86315.js";import{C as t}from"./CornerWaveVector-61320bc1.js";const b="/build/assets/user-784106eb.png",w="/build/assets/goals-1-d96b30d3.svg";function N({auth:r,title:a}){const[l,o]=i.useState(!1),[f,n]=i.useState(!1),[d,p]=i.useState(!1),[x,c]=i.useState(!1);return e.jsxs("header",{className:"fixed w-screen top-0 right-0 bg-white text-dark lg:text-base z-50 md:z-20",children:[e.jsx("div",{className:"hidden xl:h-24 3xl:h-36"})," ",e.jsxs("nav",{className:"container flex flex-wrap justify-between items-center mx-auto h-24 md:h-20 xl:h-32 3xl:h-48 duration-500",children:[e.jsx("div",{className:"w-auto px-4",children:e.jsx(s,{href:"/",children:e.jsx("img",{className:"h-8 md:h-5 xl:h-8 3xl:h-10 md:mb-2",src:w,alt:"Goals Academy"})})}),e.jsxs("div",{className:"hidden md:grid grid-cols-5 md:gap-6 xl:gap-9 3xl:gap-12 font-medium text-center",children:[e.jsx(s,{href:"/produk",className:`font-poppins hover:text-primary flex justify-center ${a=="Produk"?"font":""}`,children:"Produk"}),e.jsx(s,{href:"/artikel",className:`font-poppins hover:text-primary flex justify-center ${a=="Artikel"?"font":""}`,children:"Artikel"}),e.jsx(s,{href:"/diskusi",className:`font-poppins hover:text-primary flex justify-center ${a=="Diskusi"?"font":""}`,children:"Diskusi"}),e.jsx(s,{href:"/karir",className:`font-poppins hover:text-primary flex justify-center ${a=="Karir"?"font":""}`,children:"Karir"}),e.jsxs("button",{className:`font-poppins flex justify-center ${a=="Profil Perusahaan"||a=="Profil Tutor"?"font":""}`,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>n(!f),children:[e.jsx("span",{className:"hover:text-primary",children:"Profil"}),e.jsx(m,{show:f,className:"absolute z-10 mt-4 shadow-none p-1",children:e.jsxs(h,{children:[e.jsx(s,{className:"font-poppins hover:text-primary",href:"/profil_perusahaan",children:"Profil Perusahaan"}),e.jsx(s,{className:"font-poppins hover:text-primary",href:"/profil_tutor",children:"Profil Tutor"})]})})]})]}),r.user?e.jsxs("div",{className:"w-auto hidden md:flex flex-wrap justify-end items-center md:gap-3 xl:gap-4 3xl:gap-6 font-medium",children:[e.jsx(s,{href:"/login",children:e.jsx("i",{className:"fa-solid fa-cart-shopping text-primary md:text-16 lg:text-20 xl:text-24 3xl:text-32"})}),e.jsxs(s,{href:"/login",className:"relative",children:[e.jsx("i",{className:"fa-regular fa-bell text-primary md:text-16 lg:text-20 xl:text-24 3xl:text-32"}),e.jsx("div",{className:"absolute border-1 border-white rounded-full top-0 right-0 w-2 h-2 3xl:w-3 3xl:h-3 bg-red-500"})]}),e.jsxs("button",{className:`font-poppins flex justify-center ${a=="Profil Perusahaan"||a=="Profil Tutor"?"font":""}`,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>o(!l),children:[e.jsx("div",{className:"overflow-hidden rounded-full md:h-4 lg:h-5 xl:h-7 3xl:h-9",children:e.jsx("img",{className:"w-full h-full",src:b,alt:"User Profile"})}),e.jsx(m,{show:l,className:"absolute z-10 mt-4 shadow-none p-2",children:e.jsxs(h,{children:[e.jsxs(s,{className:"flex gap-2 items-center font-poppins hover:text-primary",href:"/profil_perusahaan",children:[e.jsx("i",{className:"fa-regular fa-circle-user md:text-12 lg:text-20 3xl:text-24"}),"Profil"]}),e.jsxs(s,{className:"flex gap-2 items-center font-poppins hover:text-primary",href:"/profil_tutor",children:[e.jsx("i",{className:"bi bi-gear md:text-12 lg:text-20 3xl:text-24"}),"Pengaturan"]}),e.jsxs(s,{className:"flex gap-2 items-center font-poppins hover:text-primary",href:"/logout",method:"post",children:[e.jsx("i",{className:"bi bi-box-arrow-in-left md:text-12 lg:text-20 3xl:text-24"}),"Logout"]})]})})]})]}):e.jsxs("div",{className:"w-auto hidden md:flex flex-wrap justify-end gap-2 3xl:gap-4 font-medium",children:[e.jsx(s,{href:"/login",children:e.jsx(g,{className:"text-secondary before:-z-10 hover:text-white border-1 xl:border-2 border-secondary hover:border-primary md:rounded-lg xl:rounded-xl 3xl:rounded-2xl md:px-4 md:py-1 xl:px-6 xl:py-2 3xl:px-8 3xl:py-3 before:w-[200%] before:-ms-[200%] before:duration-300 hover:before:-ms-[50%] before:bg-sweep-primary",children:"Login"})}),e.jsx(s,{href:"/register",className:"text-white border-1 xl:border-2 border-secondary bg-secondary hover:bg-primary hover:border-primary md:rounded-lg xl:rounded-xl 3xl:rounded-2xl md:px-4 md:py-1 xl:px-6 xl:py-2 3xl:px-8 3xl:py-3",children:"Daftar"})]}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>c(!0),children:e.jsx("i",{className:`fa-solid fa-bars text-28 duration-300 ${x?"opacity-0 rotate-180":""}`})})})]}),e.jsx("div",{className:`md:hidden w-full absolute z-50 top-0 right-0 bg-white font-bold text-white h-screen py-8 duration-500 ${x?"":"opacity-0 translate-x-[110%]"}`,children:e.jsxs("div",{className:"container mx-auto",children:[e.jsx("div",{className:"flex justify-end mb-8",children:e.jsx("button",{onClick:()=>c(!1),children:e.jsx("i",{className:"fa-solid fa-xmark text-dark text-36"})})}),e.jsxs("div",{className:"grid gap-8",children:[e.jsxs(s,{href:"/produk",className:`relative font-poppins flex justify-between items-center rounded-lg bg-secondary hover:bg-primary p-4 ${a=="Produk"?"font":""}`,children:["Produk",e.jsx(t,{cornerClassName:"w-4/12"}),e.jsx("i",{className:"fa-solid fa-arrow-up rotate-45 text-24"})]}),e.jsxs(s,{href:"/artikel",className:`relative font-poppins flex justify-between items-center rounded-lg bg-secondary hover:bg-primary p-4 ${a=="Artikel"?"font":""}`,children:["Artikel",e.jsx(t,{cornerClassName:"w-4/12"}),e.jsx("i",{className:"fa-solid fa-arrow-up rotate-45 text-24"})]}),e.jsxs(s,{href:"/diskusi",className:`relative font-poppins flex justify-between items-center rounded-lg bg-secondary hover:bg-primary p-4 ${a=="Diskusi"?"font":""}`,children:["Diskusi",e.jsx(t,{cornerClassName:"w-4/12"}),e.jsx("i",{className:"fa-solid fa-arrow-up rotate-45 text-24"})]}),e.jsxs(s,{href:"/karir",className:`relative font-poppins flex justify-between items-center rounded-lg bg-secondary hover:bg-primary p-4 ${a=="Karir"?"font":""}`,children:["Karir",e.jsx(t,{cornerClassName:"w-4/12"}),e.jsx("i",{className:"fa-solid fa-arrow-up rotate-45 text-24"})]}),e.jsxs("button",{className:"w-full relative font-poppins flex justify-center",onMouseLeave:()=>p(!1),onClick:()=>p(!d),children:[e.jsxs("span",{className:`relative font-poppins flex justify-between items-center rounded-lg bg-secondary hover:bg-primary p-4 w-full ${a=="Profil Perusahaan"||a=="Profil Tutor"?"font":""}`,children:["Profil",e.jsx(t,{cornerClassName:"w-4/12"}),e.jsx("i",{className:`fa-solid fa-chevron-down text-24 duration-300 ${d?"rotate-180":""}`})]}),e.jsx(m,{show:d,className:"absolute mt-12 text-dark shadow-none p-1 w-full",children:e.jsxs(h,{children:[e.jsx(s,{className:"font-poppins",href:"/profil_perusahaan",children:"Profil Perusahaan"}),e.jsx(s,{className:"font-poppins",href:"/profil_tutor",children:"Profil Tutor"})]})})]})]})]})}),e.jsx("div",{className:`absolute z-30 top-0 left-0 h-screen w-screen bg-dark bg-opacity-50 md:hidden ${x?"":"hidden"}`,onClick:()=>c(!1)})]})}function h({children:r}){return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"grid gap-4 md:gap-2 lg:gap-3 xl:gap-4 3xl:gap-6 text-start py-4 px-6 md:py-3 md:px-4 lg:py-4 lg:px-6 3xl:py-6 3xl:px-8 bg-white shadow-centered rounded-xl",children:r})]})}function y(){return e.jsxs("footer",{className:"bg-grey w-full text-white",children:[e.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row flex-wrap justify-between py-16 md:py-8 lg:py-16 gap-16 md:gap-0",children:[e.jsxs("div",{className:"w-8/12 md:w-3/12",children:[e.jsx("div",{className:"w-6/12 md:w-5/12",children:e.jsx("img",{className:"w-full",src:j,alt:"Goals Academy"})}),e.jsx("p",{className:"mt-4 mb-8 xs:mt-6 xs:mb-12 sm:my-4 xl:my-6",children:"Perum Graha Joyo Family B/14 Merjosari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144"}),e.jsxs("div",{className:"flex gap-4 xl:gap-6",children:[e.jsx("a",{href:"https://www.instagram.com/goalsacademy_id",target:"_blank",children:e.jsx("i",{className:"fa-brands fa-instagram text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"})}),e.jsx("a",{href:"https://www.tiktok.com/@goalsacademy_id",target:"_blank",children:e.jsx("i",{className:"fa-brands fa-tiktok text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"})}),e.jsx("a",{href:"https://www.twitter.com/goalsacademy_id",target:"_blank",children:e.jsx("i",{className:"fa-brands fa-twitter text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"})}),e.jsx("a",{href:"https://www.linkedin.com/company/goals-academy-id",target:"_blank",children:e.jsx("i",{className:"fa-brands fa-linkedin text-24 sm:text-20 md:text-16 lg:text-20 xl:text-24 2xl:text-28"})})]})]}),e.jsxs("div",{className:"w-6/12 md:w-8/12 grid md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-white mb-4",children:"Produk"}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("a",{children:"Dibimbing Sekali"}),e.jsx("a",{children:"Dibimbing Tuntas"}),e.jsx("a",{children:"Dibimbing Olah Data"}),e.jsx("a",{children:"E-book"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-white mb-4",children:"Perusahaan"}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("a",{children:"Profil Perusahaan"}),e.jsx("a",{children:"Profil Tutor"}),e.jsx("a",{children:"Karir"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-white mb-4",children:"Hubungi"}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("a",{href:"https://wa.me/6285637564245",target:"_blank",children:"(+62) 856-3756-4245"}),e.jsx("a",{href:"mailto:cs@goalsacademy.id",target:"_blank",children:"cs@goalsacademy.id"})]})]})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-grey via-white to-grey h-0.5"}),e.jsxs("div",{className:"text-center py-6",children:["Copyright 2023 ",e.jsx("i",{className:"fa-regular fa-copyright"})," ",e.jsx("span",{className:"font-bold",children:"PT Sarana Edukasi Nusantara"})]})]})}const v=()=>{const r=document.querySelector("header .container");window.scrollY==0?(r.classList.remove("xl:h-24","3xl:h-36"),r.classList.add("xl:h-32","3xl:h-48")):(r.classList.remove("xl:h-32","3xl:h-48"),r.classList.add("xl:h-24","3xl:h-36"))};document.addEventListener("scroll",v);function D({auth:r,title:a,children:l}){return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:a}),e.jsx(N,{auth:r,title:a}),e.jsx("main",{className:"text-dark pt-8 md:pt-4 xl:pt-8 3xl:pt-28 overflow-visible",children:l}),e.jsx(y,{})]})}export{D as M};
