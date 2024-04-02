import{j as e,a as l}from"./app-4d736824.js";/* empty css             */import{M as i}from"./MainHeader-d58d9fcc.js";import{C as t}from"./CornerWaveVector2-e5758241.js";import{h as n}from"./moment-a9aaa855.js";import"./momentCustomLocale-edb7a527.js";import"./tw-elements-react.es.min-46cdcb8d.js";import"./TECollapseItem-21cf381f.js";import"./ButtonHoverSlide-dff020f4.js";import"./react-responsive-1de32e52.js";import"./iconBase-42329843.js";import"./index-99e30f08.js";import"./index-2260efe8.js";import"./GoalsButton-a0996e7c.js";const m="/build/assets/wave-5-76f69eb4.svg";function c({auth:s,title:d,children:a}){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:d}),e.jsx(i,{auth:s,title:"Dashboard"}),e.jsxs("main",{className:"text-dark pt-20 xs:pt-20 md:pt-20 xl:pt-32 3xl:pt-48 pb-[8vw] md:pb-[3vw] text-[2.75vw] md:text-[1.15vw] overflow-visible",children:[e.jsx(x,{title:d}),e.jsx(b,{title:d,children:a})]})]})}function x({title:s}){return e.jsxs("div",{className:"relative container mx-auto shadow-centered-spread rounded-[1vw] text-center overflow-hidden mt-[3vw] mb-[6vw] md:mb-[3vw] p-[6vw] md:p-[3.25vw]",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"font-sans font-medium text-secondary text-[4.5vw] md:text-[2.25vw] mb-[.5vw]",children:s}),e.jsx("p",{children:"Dibimbing Sekali Offline 60 Menit"})]}),e.jsx("img",{src:m,className:"hidden md:block absolute w-full left-0 right-0 bottom-0 select-none"}),e.jsx(t,{className:"md:hidden",cornerClassName:"w-4/12"})]})}function b({children:s}){return e.jsx("div",{className:"container mx-auto flex flex-col gap-[6vw] md:gap-[3vw]",children:s})}function Y({auth:s,dataDetail:d}){console.log(d);const o=JSON.parse(d.order_history[0].payload).expiry_time,r=d;return e.jsxs(c,{auth:s,title:"Detail Pesanan",children:[e.jsxs("div",{className:"w-full h-fit relative p-[6vw] md:p-[3vw] shadow-centered-spread rounded-[1kkvw] md:rounded-xl",children:[e.jsx(t,{className:"md:hidden",cornerClassName:"w-4/12"}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-medium text-center md:text-left text-secondary text-[4vw] md:text-[2vw] mb-[2vw] md:mb-[1vw]",children:"Ringkasan Pesanan"}),e.jsx("hr",{className:"border-1 border-secondary"})]}),e.jsx("table",{className:"w-full font-poppins border-collapse my-1",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Kode Pesanan"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:r.order_code})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Status Pesanan"}),r.status=="Pending"?e.jsx("td",{className:"font-bold italic text-right py-[4vw] md:py-[2vw] text-secondary",children:"Menunggu Pembayaran"}):r.status=="Success"?e.jsx("td",{className:"font-bold italic text-right py-[4vw] md:py-[2vw] text-green-500",children:"Pembayaran Berhasil"}):e.jsx("td",{className:"font-bold italic text-right py-[4vw] md:py-[2vw] text-red-500",children:"Pembayaran Tidak Berhasil"})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Metode Pembayaran"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:r.payment_method.name})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Waktu Pembayaran"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:n(o).format("dddd, DD MMMM YYYY HH:mm")})]})]})})]}),e.jsxs("div",{className:"w-full h-fit relative p-[6vw] md:p-[3vw] shadow-centered-spread rounded-[1kkvw] md:rounded-xl",children:[e.jsx(t,{className:"md:hidden",cornerClassName:"w-4/12"}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-medium text-center md:text-left text-secondary text-[4vw] md:text-[2vw] mb-[2vw] md:mb-[1vw]",children:"Ringkasan Pembelajaran"}),e.jsx("hr",{className:"border-1 border-secondary"})]}),e.jsx("table",{className:"w-full font-poppins border-collapse my-1",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Jadwal Pelaksanaan"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:n(r.course.date).format("dddd, DD MMMM YYYY")})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[d.products.features[0].category=="online"?e.jsx("td",{children:"Metode Pelaksanaan"}):e.jsx("td",{children:"Kota Pelaksanaan"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:r.course.city?r.course.city:"Online"})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Lokasi Pelaksanaan"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:r.course.location})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Lampiran Dokumen"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:r.course.file_uploads.length>0?r.course.file_uploads[0].filename:"-"})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Ukuran Dokumen"}),e.jsx("td",{className:"font-bold text-right py-[4vw] md:py-[2vw]",children:r.course.file_uploads.length>0?Math.ceil(r.course.file_uploads[0].size/1024)+"Kb":"-"})]}),e.jsxs("tr",{className:"border-1 md:border-2 border-transparent border-b-dark",children:[e.jsx("td",{children:"Catatan untuk Tutor"}),e.jsx("td",{className:"font-bold text-right w-1/2 py-[4vw] md:py-[2vw]",children:r.course.note?r.course.note:"Kosong"})]})]})})]})]})}export{Y as default};
