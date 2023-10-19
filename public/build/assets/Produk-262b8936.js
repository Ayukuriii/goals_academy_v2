import{r as t,j as i}from"./app-fe9f75f7.js";import{M as O}from"./MainLayout-f94dc843.js";import S from"./Filter-93ea099b.js";import u from"./SearchBar-e8948ebe.js";import C from"./Bimbingan-06de2096.js";import j from"./Ebook-9969c2e4.js";import T from"./Webinar-c0acc59b.js";import w from"./Consultation-22f25e90.js";import{p as v,a as B,b as P}from"./dibimbing-olah-data-2bd1d162.js";import"./goals-3-a84eedd6.js";import"./tw-elements-react.es.min-da6a88d1.js";import"./ButtonHoverSlide-56815094.js";import"./CornerWaveVector-cb352a09.js";import"./CornerWaveVector2-b920a050.js";import"./a11y-0e9b2e2d.js";import"./free-mode-bb577aac.js";import"./ButtonSwiper-2d49df8f.js";import"./ButtonPill-e6ac9487.js";const E="/build/assets/dibimbing-online-45-50096ead.png",q="/build/assets/dibimbing-offline-60-d618a046.png",A="/build/assets/dibimbing-offline-90-10413cbb.png",L="/build/assets/1-1704d2c5.png",K="/build/assets/1-7597a780.png",W="/build/assets/2-b6ad871b.png",G="/build/assets/3-c1c9ab70.png",H="/build/assets/4-c5493564.png";function na({auth:c}){const m=[{id:1,title:"Dibimbing Online 30 Menit",slug:"dibimbing-online-30-menit",img:v,excerpt:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 30 menit, sesuai dengan permasalahan pada skripsimu.",description:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 30 menit, sesuai dengan permasalahan pada skripsimu.",features:{times:1,duration:30,category:"Online"},price:47e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/baE8kEv"},{id:2,title:"Dibimbing Online 45 Menit",slug:"dibimbing-online-45-menit",img:E,excerpt:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",description:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",features:{times:1,duration:45,category:"Online"},price:69e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/aW2pNBO"},{id:3,title:"Dibimbing Offline 60 Menit",slug:"dibimbing-offline-60-menit",img:q,excerpt:"Bimbingan personal 1-on-1 secara tatap muka selama 60 Menit, khusus area Kota Malang.",description:"Bimbingan personal 1-on-1 secara tatap muka selama 60 Menit, khusus area Kota Malang.",features:{times:1,duration:60,category:"Offline"},price:129e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/k74ZZ3v"},{id:4,title:"Dibimbing Offline 90 Menit",slug:"dibimbing-offline-90-menit",img:A,excerpt:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",description:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",features:{times:1,duration:90,category:"Offline"},price:189e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/E4g55Dn"},{id:5,title:"Dibimbing Tuntas",slug:"dibimbing-tuntas",img:B,excerpt:"Temukan solusi skripsi optimal melalui bimbingan personal 1-on-1 dalam 7 kali pertemuan dan berfokus pada permasalahan skripsimu sampai selesai.",description:"Temukan solusi skripsi optimal melalui bimbingan personal 1-on-1 dalam 7 kali pertemuan dan berfokus pada permasalahan skripsimu sampai selesai.",features:{times:7,duration:60,category:"Online"},price:649e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/7q7r96V"},{id:6,title:"Dibimbing Olah Data",slug:"dibimbing-olah-data",img:P,excerpt:"Kembangkan kemampuan mengolah data skripsi melalui bimbingan personal 1-on-1 yang intensif.",description:"Kembangkan kemampuan mengolah data skripsi melalui bimbingan personal 1-on-1 yang intensif.",features:{times:1,duration:60,category:"Online"},price:115e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/DqqGx5x"}],r=[{title:"How To Survive Your Thesis? Start with Theme",price:"-",image:L,link:"https://lynk.id/goalsacademy/XBmqq6J"}],o=[{title:"Tips Membuat Judul Skripsi Mudah ACC",price:34e3,image:W,date:"2023-10-24 19:00:00",link:"https://lynk.id/goalsacademy/oZyPAav"},{title:"Teknik Lolos Paraphrase Penulisan Proposal Skripsi",price:34e3,image:K,date:"2023-10-25 19:00:00",link:"https://lynk.id/goalsacademy/a2j9vM8"},{title:"Tips & Trick Presentasi Sidang Skripsi yang Disukai Dosen",price:34e3,image:G,date:"2023-10-26 19:00:00",link:"https://lynk.id/goalsacademy/lmzQOyX"},{title:"Bundling Webinar Series Goals Academy",price:94e3,image:H,date:"2023-10-24 19:00:00",link:"https://lynk.id/goalsacademy/nGV0BrP"}],[a,g]=t.useState(Array(3).fill(!1)),[b,k]=t.useState(m.slice()),[f,h]=t.useState(r.slice()),[y,p]=t.useState(o.slice()),l=a[0]==a[1]!=a[2],x=e=>{const n=Array(3).fill(!1);n[e]=!a[e],g(n)},d=e=>{const n=m.slice().filter(s=>s.title.toLowerCase().includes(e)),D=r.slice().filter(s=>s.title.toLowerCase().includes(e)),M=o.slice().filter(s=>s.title.toLowerCase().includes(e));k(n),h(D),p([]),setTimeout(()=>{p(M)},0)};return i.jsxs(O,{auth:c,title:"Produk",children:[i.jsx(u,{searchHandler:d,className:"md:hidden"}),i.jsx(S,{show:a,showHandler:x}),i.jsx(u,{searchHandler:d,className:"hidden md:block"}),i.jsx(C,{data:b,active:a[0],status:l}),i.jsx(j,{data:f,active:a[1],status:l}),i.jsx(T,{data:y,active:a[2],status:l}),i.jsx(w,{})]})}export{na as default};
