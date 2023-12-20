import{r as d,j as e,d as h}from"./app-c4f207a7.js";import{h as s}from"./mainHeader-92f7b3ac.js";import{M as N}from"./MainLayout-868d303e.js";import{E as k}from"./ExpandedButton-89699655.js";import{w as y}from"./tw-elements-react.es.min-1738ed7d.js";import{T as P}from"./TECollapseItem-b808e5f5.js";import"./momentCustomLocale-a5bc6638.js";import"./ButtonHoverSlide-39d48950.js";import"./CornerWaveVector-b7c7ee9a.js";import"./CornerWaveVector2-a59db1f6.js";import"./goals-3-7cc004cd.js";function G({auth:w,data:l,orderHistory:a,paymentMethod:x,paymentName:u,bankName:v}){const[c,f]=d.useState(!1),[m,o]=d.useState(s().hours(0).minutes(0).seconds(0)),p=Intl.NumberFormat("id-ID"),j=s(a.expiry_time),[t,b]=d.useState("pending");let n=d.useRef();const g=()=>{n.current=setInterval(()=>{fetch(`/api/check-payment-status/${l.order_code}`).then(r=>r.json()).then(r=>b(r.status.toLowerCase()));const i=j.diff(s());if(i<=1&&(clearInterval(n.current),o(s().hours(0).minutes(0).seconds(0)),alert("Waktu Pembayaran Telah Habis!")),t.toLowerCase()=="success")clearInterval(n.current),o(s().hours(0).minutes(0).seconds(0));else{const r=s();r.hours(Math.floor(i/(1e3*60*60))),r.minutes(Math.floor(i%(1e3*60*60)/(1e3*60))),r.seconds(Math.floor(i%(1e3*60*60)%(1e3*60)/1e3)),o(r)}},1e3)};return d.useEffect(()=>(g(),()=>{clearInterval(n.current)}),[]),e.jsx(N,{auth:w,title:"Purchase",children:e.jsx("section",{id:"purchase-form",className:"mb-16 xs:mb-20 md:mb-16 lg:mb-20 xl:mb-24 3xl:mb-32",children:e.jsxs("div",{className:"md:container mx-auto pt-[16vw] md:pt-[1vw] flex flex-col gap-[4vw] md:gap-[3vw] items-center text-[3.5vw] md:text-[1vw]",children:[e.jsx("div",{className:"w-full md:w-1/2 relative md:shadow-centered-spread md:rounded-[1vw] md:p-[1.5vw] h-fit overflow-hidden",children:e.jsxs("div",{className:"container md:w-full mx-auto flex flex-col items-center gap-[4vw] md:gap-[1vw] overflow-hidden",children:[e.jsxs("div",{className:`flex w-[200%] duration-1000 overflow-hidden ${t=="success"?"translate-x-1/4":"-translate-x-1/4"}`,children:[e.jsx("h5",{className:"w-1/2 text-center text-green-500 font-bold text-[4.5vw] md:text-[1.2vw]",children:"Pembayaran Berhasil"}),e.jsx("h5",{className:"w-1/2 text-center text-secondary font-bold text-[4.5vw] md:text-[1.2vw]",children:"Mari Selesaikan Pembayaranmu"})]}),e.jsx("hr",{className:`w-full duration-1000 ${t=="success"?"border-green-500":"border-secondary"}`}),e.jsxs("div",{className:`w-[200%] flex h-[88vw] md:h-[22vw] duration-1000 ${t=="success"?"translate-x-1/4":"-translate-x-1/4"}`,children:[e.jsx("div",{className:`w-full h-full flex justify-center items-center gap-[4vw] md:gap-[1vw] duration-1000 ${t=="success"?"scale-100":"scale-0"}`,children:e.jsx("svg",{className:"h-[60vw] md:h-[16vw] fill-green-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"})})}),e.jsxs("div",{className:`w-full flex flex-col items-center gap-[4vw] md:gap-[1vw] duration-1000 ${t=="success"?"scale-0":"scale-100"}`,children:[e.jsx("div",{className:"w-full h-[56vw] md:h-[14vw] flex justify-center items-center",children:x.category!="bank_transfer"?e.jsx("img",{src:a.actions[0].url,className:"h-full",alt:""}):e.jsxs("div",{className:"text-center",children:[e.jsxs("h5",{className:"font-medium text-[4.5vw] md:text-[1.2vw]",children:["Nomor VA ",v," :"]}),e.jsx("h2",{className:"leading-loose cursor-pointer text-[6vw] md:text-[2.3vw]",onClick:()=>{navigator.clipboard.writeText(a.va_numbers[0].va_number),alert("Text copied!")},children:a.va_numbers?a.va_numbers[0].va_number:a.permata_va_number}),e.jsxs("p",{className:"font-medium hover:text-primary cursor-pointer",onClick:()=>{navigator.clipboard.writeText(a.va_numbers[0].va_number),alert("Text copied!")},children:[e.jsx("i",{className:"bi bi-copy"})," ","Salin"]})]})}),e.jsx("hr",{className:"w-full border-light-grey"}),e.jsx("table",{className:"w-10/12 md:w-full text-center font-poppins border-separate border-spacing-y-[2vw] md:border-spacing-0 my-[1vw] md:my-0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"font-bold text-[8vw] md:text-[3vw]",children:[e.jsx("td",{className:"w-3/12",children:m.format("HH")}),e.jsx("td",{children:":"}),e.jsx("td",{className:"w-3/12",children:m.format("mm")}),e.jsx("td",{children:":"}),e.jsx("td",{className:"w-3/12",children:m.format("ss")})]}),e.jsxs("tr",{className:"text-[3vw] md:text-[1vw]",children:[e.jsx("td",{children:"Jam"}),e.jsx("td",{}),e.jsx("td",{children:"Menit"}),e.jsx("td",{}),e.jsx("td",{children:"Detik"})]})]})})]})]}),e.jsx("hr",{className:"w-full border-dark"})]})}),e.jsx("div",{className:"w-full md:w-1/2 relative md:shadow-centered-spread md:rounded-[1vw] md:p-[1.5vw] h-fit",children:e.jsxs("div",{className:"container md:w-full mx-auto flex flex-col items-center gap-[4vw] md:gap-[1.5vw]",children:[e.jsx("hr",{className:"hidden md:block w-full border-light-grey"}),e.jsx("table",{className:"w-full font-poppins border-separate border-spacing-y-[4vw] md:border-spacing-y-[1.2vw] -my-[1vw] text-[3.25vw] md:text-[1vw]",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Metode Pembayaran"}),e.jsxs("td",{className:"flex justify-end items-center gap-[.8vw] font-semibold",children:[x.name," ",e.jsx("img",{className:"w-[10%]",src:`/img/purchase/${u}.png`,alt:""})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ID Transaksi"}),e.jsx("td",{className:"flex justify-end text-end items-center font-semibold",children:l.order_code})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tanggal Transaksi"}),e.jsxs("td",{className:"flex justify-end text-end items-center font-semibold",children:[e.jsx("span",{className:"hidden md:inline-block",children:s(l.created_at).locale("id").format("dddd, DD MMMM YYYY")}),e.jsxs("span",{className:"md:hidden",children:[s(l.created_at).locale("id").format("dddd,"),e.jsx("br",{}),s(l.created_at).locale("id").format("DD MMMM YYYY")]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Total Pembelian"}),e.jsxs("td",{className:"flex justify-end text-end items-center font-semibold",children:["IDR"," ",p.format(a.gross_amount)]})]})]})}),e.jsx("hr",{className:"w-full border-light-grey"}),e.jsxs("div",{className:"w-full block my-[2vw] md:my-0",children:[e.jsx(k,{borderClassName:"border-1 border-dark",textClassName:"font-medium text-dark",icon:`fa-solid fa-chevron-down duration-500 ${c?"-rotate-180":""}`,className:"h-[9vw] md:h-[3vw]",onClick:()=>f(!c),children:"Lihat Langkah Pembayaran"}),e.jsx(y,{show:c,className:"relative w-[110%] -ms-[5%] px-[4%] shadow-none -translate-y-[4vw] md:-translate-y-[1vw]",children:e.jsxs(P,{className:"grid gap-[4vw] md:gap-[1.2vw] px-[.3vw]",children:[e.jsxs("div",{className:"border-1 border-dark rounded-[1.5vw] md:rounded-[.6vw] p-[4vw] md:p-[1vw] flex flex-col gap-[2vw]",children:[e.jsx("p",{className:"font-bold",children:"1. Transaksi melalui Desktop"}),e.jsx("p",{children:"Berikut langkah pembayaran menggunakan GoPay melalui Desktop:"}),e.jsxs("ul",{className:"list-disc ms-[6vw] md:ms-[2vw]",children:[e.jsx("li",{children:"Buka aplikasi Gojek pada smarhphone Anda"}),e.jsx("li",{children:'Klik "Pay" dan "Scan" QR Code'}),e.jsx("li",{children:'Periksa detail pembayaran lalu klik "Confirm & Pay"'}),e.jsx("li",{children:'Masukkan "PIN" GoPay Anda'}),e.jsx("li",{children:"Pembayaran selesai"})]})]}),e.jsxs("div",{className:"border-1 border-dark rounded-[1.5vw] md:rounded-[.6vw] p-[4vw] md:p-[1vw] flex flex-col gap-[2vw]",children:[e.jsx("p",{className:"font-bold",children:"2. Transaksi melalui Mobile"}),e.jsx("p",{children:"Berikut langkah pembayaran menggunakan GoPay melalui Mobile:"}),e.jsxs("ul",{className:"list-disc ms-[6vw] md:ms-[2vw]",children:[e.jsx("li",{children:"Buka aplikasi Gojek pada smarhphone Anda"}),e.jsx("li",{children:'Klik "Pay" dan "Scan" QR Code'}),e.jsx("li",{children:'Periksa detail pembayaran lalu klik "Confirm & Pay"'}),e.jsx("li",{children:'Masukkan "PIN" GoPay Anda'}),e.jsx("li",{children:"Pembayaran selesai"})]})]})]})})]}),e.jsxs("div",{className:"z-10 w-full overflow-hidden grid grid-cols-2 border-1 xl:border-2 border-primary font-poppins rounded-full",children:[e.jsx(h,{href:"/produk",className:"p-[2vw] md:p-[.6vw] font-medium text-center bg-white text-primary text-[3vw] md:text-[1vw]",children:"Belanja Lagi"}),e.jsx(h,{href:"#",className:"p-[2vw] md:p-[.6vw] font-medium text-center bg-primary text-white text-[3vw] md:text-[1vw]",children:"Cek Status Transaksi"})]})]})})]})})})}export{G as default};
