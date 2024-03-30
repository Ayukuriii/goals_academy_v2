import{j as e}from"./app-7c3879b2.js";import{e as w}from"./index-503b06ed.js";import"./iconBase-b3bc7823.js";function c({checked:l,className:r,textClassName:a,circleClassName:n,onClick:m,children:t}){return e.jsxs("button",{className:`w-full group rounded-[1vw] md:rounded-md flex justify-between items-center cursor-pointer px-[3vw] md:px-[1vw] ${r}`,onClick:m,children:[e.jsx("span",{className:`font-medium ${a}`,children:t}),e.jsx("div",{className:`w-[5vw] h-[5vw] md:w-[1.25vw] md:h-[1.25vw] rounded-full border-[.2vw] border-secondary ${n}`,children:e.jsx("div",{className:`w-full h-full rounded-full border-1 border-white ${l?"bg-secondary":""}`})})]})}function f({show:l,setShow:r,data:a,setData:n,temp:m,setTemp:t,purchaseMethods:o}){const i=s=>{let d=0;parseInt(s.is_price)?d=parseFloat(s.admin_fee):d=Math.ceil((parseFloat(a.init_price)-parseFloat(a.discount)+parseFloat(a.add_on_price))*parseFloat(s.admin_fee)/100);const v=parseFloat(a.init_price)-parseFloat(a.discount)+parseFloat(a.add_on_price)+d;n({...a,purchase_method:s,admin:d,total_price:v}),r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${l?"":"hidden"} fixed top-0 bottom-0 left-0 right-0 overflow-hidden bg-dark bg-opacity-50 transition-all duration-300 z-50`,onClick:()=>r(!1)}),e.jsxs("div",{className:`${l?"md:top-0 bottom-0 md:scale-100":"md:top-full -bottom-full md:scale-0"} fixed left-0 flex flex-col gap-[4vw] md:gap-[1vw] w-full md:w-[30vw] h-[55vh] md:h-fit transition-all duration-500 bg-white shadow-md rounded-t-[6vw] md:rounded-[.5vw] p-[8vw] md:px-[1.75vw] md:py-[2vw] z-50 md:ms-[35vw] md:mt-[8vh] max-h-[84vh]`,children:[e.jsx("div",{children:e.jsxs("div",{className:"flex justify-between items-center mb-[3vw] md:mb-[1vw]",children:[e.jsx("h5",{className:"text-black font-poppins font-medium text-[4.5vw] md:text-[1.2vw]",children:"Pilih Metode"}),e.jsx(w,{className:"text-[6vw] md:text-[1.8vw] cursor-pointer",onClick:()=>r(!1)})]})}),e.jsxs("div",{className:"h-[40vh] md:h-fit flex flex-col gap-[6vw] md:gap-[1.5vw] overflow-auto scrollbar-hidden",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"font-sans font-normal text-[4vw] md:text-[1vw] mb-[4vw] md:mb-[1vw]",children:"Dompet Digital"}),e.jsx("div",{className:"grid gap-[4vw] md:gap-[1vw]",children:o.map((s,d)=>{if(s.category=="ewallet")return e.jsx(c,{className:"spread rounded-[2vw] md:rounded-[.5vw] border-1 text-dark h-[12.5vw] md:h-[4vw]",checked:a.purchase_method.name==s.name,onClick:()=>i(s),children:e.jsxs("div",{className:"flex items-center gap-[2vw] md:gap-[1vw]",children:[e.jsx("img",{src:`/img/purchase/${s.name.toLowerCase()}.png`,alt:s.name,className:"w-[6vw] md:w-[2vw]"}),s.name]})},d)})})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-sans font-normal text-[4vw] md:text-[1vw] mb-[4vw] md:mb-[1vw]",children:"Transfer Bank"}),e.jsx("div",{className:"grid gap-[4vw] md:gap-[1vw]",children:o.map((s,d)=>{if(s.category=="bank_transfer")return e.jsx(c,{className:"spread rounded-[2vw] md:rounded-[.5vw] border-1 text-dark h-[12.5vw] md:h-[4vw]",checked:a.purchase_method.name==s.name,onClick:()=>i(s),children:e.jsxs("div",{className:"flex items-center gap-[2vw] md:gap-[1vw]",children:[e.jsx("img",{src:`/img/purchase/${s.name.toLowerCase()}.png`,alt:s.name,className:"w-[6vw] md:w-[2vw]"}),s.name]})},d)})})]})]})]})]})}export{f as default};
