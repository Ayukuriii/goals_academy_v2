import{j as e,d as s}from"./app-4d736824.js";import{U as n}from"./UserLayout-23f3f455.js";import{h as i}from"./moment-a9aaa855.js";import{f as l}from"./8-7e83d648.js";import"./momentCustomLocale-edb7a527.js";import"./DashboardNavbarItem-25d12bb0.js";import"./MainHeader-d58d9fcc.js";import"./tw-elements-react.es.min-46cdcb8d.js";import"./TECollapseItem-21cf381f.js";import"./ButtonHoverSlide-dff020f4.js";import"./react-responsive-1de32e52.js";import"./iconBase-42329843.js";import"./index-99e30f08.js";import"./index-2260efe8.js";import"./GoalsButton-a0996e7c.js";/* empty css             */function Y({auth:t,notifications:a}){const d=a;return e.jsx(n,{auth:t,title:"Notifikasi",children:d.length==0?e.jsxs("div",{className:"min-h-[60vh] md:min-h-[22vw] flex flex-col justify-center items-center gap-[6vw] md:gap-[2vw]",children:[e.jsx("img",{src:l,alt:"",className:"h-[30vw] w-[30vw] md:h-[14vw] md:w-[14vw]"}),e.jsx("p",{className:"text-[3vw] md:text-[1.5vw] md:text-secondary",children:"Anda Belum Memiliki Notifikasi"})]}):e.jsx("div",{className:"md:min-h-[22vw] flex flex-col gap-[6vw] md:gap-[2vw]",children:d.map((r,m)=>e.jsx(w,{item:r},m))})})}function w({item:t}){return t.data.category=="Transaksi"?e.jsxs(s,{href:"",className:"relative w-full flex justify-between items-center shadow-centered-spread rounded-[1vw] p-[4vw] md:p-[2vw] hover:bg-soft",children:[e.jsxs("div",{className:"flex flex-col w-11/12 gap-[2vw] md:gap-[.5vw]",children:[e.jsx("span",{className:"bg-secondary text-white text-center rounded-[1vw] md:rounded-[.3vw] w-4/12 md:w-2/12 py-[.5vw] md:py-[.1vw] text-[2.75vw] md:text-[.95vw]",children:t.data.category}),e.jsxs("div",{className:"flex items-center gap-[2vw] md:gap-[.5vw]",children:[e.jsx("img",{src:`/img/purchase/${t.data.payment_method.toLowerCase()}.png`,className:"w-[10vw] h-[10vw] md:w-[4.5vw] md:h-[4.5vw]",alt:t.data.payment_method}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-normal font-sans text-[3.5vw] md:text-[1.7vw]",children:t.data.title}),e.jsx("table",{className:"text-[2.5vw] md:text-[.95vw]",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bayar Sebelum"}),e.jsx("td",{className:"ps-[2vw] pe-[.5vw]",children:":"}),e.jsx("td",{children:i(t.data.expiry_time).format("DD MMMM YYYY, HH:mm")})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Kode Pesanan"}),e.jsx("td",{className:"ps-[2vw] pe-[.5vw]",children:":"}),e.jsx("td",{children:t.data.order_id})]})]})})]})]})]}),e.jsx("div",{className:`${t.data.read_at?"hidden":""} bg-secondary rounded-full w-[3.5vw] h-[3.5vw] md:w-[1.3vw] md:h-[1.3vw] md:me-[1vw]`})]}):e.jsxs(s,{href:"",className:"relative w-full flex justify-between items-center shadow-centered-spread rounded-[1vw] p-[4vw] md:p-[2vw] hover:bg-soft",children:[e.jsxs("div",{className:"flex flex-col w-11/12 gap-[2vw] md:gap-[.5vw]",children:[e.jsx("span",{className:"bg-secondary text-white text-center rounded-[1vw] md:rounded-[.3vw] w-4/12 md:w-2/12 py-[.5vw] md:py-[.1vw] text-[2.75vw] md:text-[.95vw]",children:t.data.category}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-secondary font-normal font-sans text-[3.5vw] md:text-[1.7vw]",children:t.data.title}),e.jsx("div",{className:"text-[2.5vw] md:text-[.95vw]",children:t.data.description})]})]}),e.jsx("div",{className:`${t.read_at?"hidden":""} bg-secondary rounded-full w-[3.5vw] h-[3.5vw] md:w-[1.3vw] md:h-[1.3vw] md:me-[1vw]`})]})}export{Y as default};
