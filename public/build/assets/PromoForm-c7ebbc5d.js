import{r as n,j as o}from"./app-4d736824.js";import{e as c}from"./index-99e30f08.js";import{G as f}from"./GoalsButton-eb73f0ba.js";import{G as p}from"./GoalsTextInput-142a87c2.js";import"./iconBase-42329843.js";function j({show:a,setShow:t,data:l,setData:u,temp:e,setTemp:r,promoHandler:d}){const[m,i]=n.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`${a?"":"hidden"} fixed top-0 bottom-0 left-0 right-0 overflow-hidden bg-dark bg-opacity-50 transition-all duration-300 z-50`,onClick:()=>{m||(l.promo!=""&&r({...e,promo:l.promo,discount:0}),t(!1))}}),o.jsxs("div",{className:`${a?"md:top-0 bottom-0 md:scale-100":"md:top-full -bottom-full md:scale-0"} fixed left-0 flex flex-col gap-[4vw] md:gap-[1vw] w-full md:w-[30vw] h-[55vh] md:h-fit transition-all duration-500 bg-white shadow-md rounded-t-[6vw] md:rounded-[.5vw] p-[8vw] md:p-[1.75vw] z-50 md:ms-[35vw] md:mt-[8vh]`,children:[o.jsx("div",{children:o.jsxs("div",{className:"flex justify-between items-center mb-[3vw] md:mb-[1vw]",children:[o.jsx("h5",{className:"font-poppins font-semibold text-[4.5vw] md:text-[1.2vw]",children:"Pilih Promo"}),o.jsx(c,{className:"text-[6vw] md:text-[1.8vw] cursor-pointer",onClick:()=>{l.promo!=""&&r({...e,promo:l.promo,discount:0}),t(!1)}})]})}),o.jsxs("form",{onSubmit:s=>{s.preventDefault(),e.promo!=""&&d(e.promo,()=>t(!1),i)},className:"relative flex flex-wrap md:flex-nowrap gap-[.5vw] w-full",children:[o.jsx("div",{className:"w-full md:w-full",children:o.jsx(p,{type:"text",className:"md:text-[.9vw]",placeholder:"Masukkan kode promo",value:e.promo,cancelButton:e.promo!="",data:e.promo,setData:s=>r("promo",s),onChange:s=>{r("promo",s.target.value)}})}),o.jsx("button",{type:"submit",disabled:e.promo=="",className:`block w-full h-full md:w-4/12 ${e.promo!=""?"":"md:hidden"}`,children:o.jsx(f,{className:"rounded-[.5vw] md:py-[.92vw] md:text-[.9vw]",isActive:e.promo!="",isLoading:m,children:"Terapkan"})})]})]})]})}export{j as default};
