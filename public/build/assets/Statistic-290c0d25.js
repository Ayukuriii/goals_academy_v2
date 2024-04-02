import{r as n,W as J,j as e}from"./app-4d736824.js";import{G as Q}from"./GoalsButton-eb73f0ba.js";import{i as X}from"./goals-5-b0b5a2a2.js";import{D as ee}from"./DashboardLayout-462667c9.js";import{m as g}from"./moment-d79fcc1d.js";import{C as te,p as ae,a as se,L as re,B as oe,b as ie,c as ne,f as s,d as k,D as le}from"./index.esm-b0e8af62.js";import{b as me}from"./index-4c05755b.js";import"./momentCustomLocale-edb7a527.js";import{G as Y,a as A}from"./GoalsSelectInput-d4278e3f.js";import"./TECollapseItem-21cf381f.js";import"./tw-elements-react.es.min-46cdcb8d.js";import"./index-99e30f08.js";import"./iconBase-42329843.js";import"./moment-a9aaa855.js";import"./ExpandedButton-97bd79aa.js";function Ae({auth:a}){const[o,r]=n.useState(!1);te.register(ae,se,re,oe,ie,ne);const u={plugins:{title:{display:!0,text:null,align:"start",font:{family:'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',size:12,weight:"500"},padding:{top:6,bottom:18}},legend:{display:!1}},aspectRatio:5.725,responsive:!0,borderRadius:1e3,barThickness:4,scales:{x:{beginAtZero:!0,stacked:!0,ticks:{color:"#A6A6A6",maxRotation:0},grid:{display:!0,drawBorder:!1,drawTicks:!0,color:t=>(t.index===0,"")}},y:{beginAtZero:!0,stacked:!0,ticks:{display:!1},grid:{drawBorder:!1,drawTicks:!1,color:t=>t.index===0?"":"rgba(160, 160, 160, 0.2)"},border:{dash:[6,4]}}}},[x,h]=n.useState(["29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]),[l,w]=n.useState(x.map(t=>s.datatype.number({min:50,max:200}))),[G,M]=n.useState(x.map(t=>s.datatype.number({min:50,max:200}))),[L,U]=n.useState(x.map(t=>s.datatype.number({min:50,max:200}))),B={labels:x,datasets:[{label:"User",data:l,backgroundColor:"#5A6ACF"},{label:"Moderator",data:G,backgroundColor:"#FF8854"},{label:"Tutor",data:L,backgroundColor:"#F0F469"}]},[E,I]=n.useState({startDate:g().subtract(1,"months").format("YYYY-MM-DD"),endDate:g().format("YYYY-MM-DD")}),P=t=>{const f=g(t.startDate),p=g(t.endDate),m=f.diff(p,"days");m>=-30?(r(!0),I(t),setTimeout(()=>{let b=[];if(b.push(f.format("DD")),m)for(let c=1;c<=-m;c++)b.push(f.add(1,"day").format("DD"));h(b),w(b.map(c=>s.datatype.number({min:50,max:200}))),M(b.map(c=>s.datatype.number({min:50,max:200}))),U(b.map(c=>s.datatype.number({min:50,max:200}))),r(!1)},3e3)):alert("Range tanggal maksimum 1 bulan!")},[y,R]=n.useState(["29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]),[V,v]=n.useState(y.map(t=>s.datatype.number({min:50,max:200}))),[_,D]=n.useState(y.map(t=>s.datatype.number({min:50,max:200}))),z={labels:y,datasets:[{label:"Clicks",data:V,backgroundColor:"#5A6ACF"},{label:"Views",data:_,backgroundColor:"#FF8854"}]},[H,C]=n.useState(y.map(t=>s.datatype.number({min:50,max:200}))),W={labels:y,datasets:[{label:"Sales Amount",data:H,backgroundColor:"#5A6ACF"}]},{data:j,setData:S}=J({dateRange:{startDate:g().subtract(1,"months").format("YYYY-MM-DD"),endDate:g().format("YYYY-MM-DD")},productType:"",productCategory:""}),Z=[{id:1,type:"Bimbingan",slug:"bimbingan"},{id:2,type:"Webinar",slug:"webinar"},{id:3,type:"E-book",slug:"e-book"}],[K,fe]=n.useState([{id:1,name:"Dibimbing Tuntas",slug:"dibimbing-tuntas"},{id:2,name:"Dibimbing Sekali",slug:"dibimbing-sekali"}]),[T,O]=n.useState({productType:!1,productCategory:!1}),$=(t,f)=>{const p={...T};Object.keys(p).forEach(m=>{m==t?p[m]=f:p[m]=!1}),O(p)},q=(t,f,p)=>{const m=g(t.startDate),b=g(t.endDate),c=m.diff(b,"days");if(c>=-30){r(!0);let i=[];if(i.push(m.format("DD")),c)for(let d=1;d<=-c;d++)i.push(m.add(1,"day").format("DD"));p?(S({...j,dateRange:t,productCategory:p.name}),setTimeout(()=>{R(i),v(i.map(d=>s.datatype.number({min:50,max:200}))),D(i.map(d=>s.datatype.number({min:50,max:200}))),C(i.map(d=>s.datatype.number({min:50,max:200}))),r(!1)},3e3)):f.type=="text"?(S({...j,dateRange:t}),setTimeout(()=>{R(i),v(i.map(d=>s.datatype.number({min:50,max:200}))),D(i.map(d=>s.datatype.number({min:50,max:200}))),C(i.map(d=>s.datatype.number({min:50,max:200}))),r(!1)},3e3)):(S({dateRange:t,productType:f.type,productCategory:""}),setTimeout(()=>{v(i.map(d=>s.datatype.number({min:50,max:200}))),D(i.map(d=>s.datatype.number({min:50,max:200}))),C(i.map(d=>s.datatype.number({min:50,max:200}))),r(!1)},3e3))}else alert("Range tanggal maksimum 1 bulan!")};return e.jsxs(ee,{title:"Statistic",role:"admin",auth:a,children:[e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"relative flex flex-col gap-[1.67vw]",children:[e.jsx(de,{options:u,data:B,dateRange:E,dateRangeHandler:P}),e.jsx(ue,{showForm:T,showFormHandler:$,filterData:j,filterHandler:q,productTypes:Z,productCategories:K}),e.jsx(pe,{options:u,data:z}),e.jsx(ce,{options:u,data:W})]})}),o&&e.jsx(ge,{})]})}function de({options:a,data:o,dateRange:r,dateRangeHandler:u}){return e.jsxs(N,{className:"relative w-full h-[15.53vw]",children:[e.jsx("div",{className:"absolute left-0 w-full flex justify-end font-sans font-medium text-[1vw] px-[1.67vw]",children:e.jsx(F,{value:r,onChange:u})}),e.jsx(k,{options:{...a,plugins:{...a.plugins,title:{...a.plugins.title,text:"User Growth"}}},data:o,className:"cursor-pointer"})]})}function ue({showForm:a,showFormHandler:o,filterData:r,filterHandler:u,productTypes:x,productCategories:h}){return e.jsxs("div",{className:"flex justify-end gap-[.25vw] font-sans font-medium text-[1vw]",children:[e.jsx(F,{value:r.dateRange,onChange:u}),e.jsx(Y,{show:a.productType,setShow:l=>o("productType",l),data:r.productType,placeholder:"Tipe Produk",className:"flex-row-reverse md:justify-end gap-[.5vw] text-[.7vw] md:px-[1vw] md:w-[8.35vw] md:h-[2.1vw] border-1",filledClassName:"",emptyClassName:"",children:x.map((l,w)=>e.jsx(A,{className:"text-[.83vw]",onClick:()=>u(r.dateRange,l),children:l.type},w))}),e.jsx(Y,{show:a.productCategory,setShow:l=>o("productCategory",l),data:r.productCategory,placeholder:"Kategori Produk",className:"flex-row-reverse md:justify-end gap-[.5vw] text-[.7vw] md:px-[1vw] md:w-[16.25vw] md:h-[2.1vw] border-1",filledClassName:"",emptyClassName:"",children:h.map((l,w)=>e.jsx(A,{className:"text-[.83vw]",onClick:()=>u(r.dateRange,r.productType,l),children:l.name},w))})]})}function pe({options:a,data:o}){return e.jsx(N,{className:"relative w-full h-[15.53vw]",children:e.jsx(k,{options:{...a,plugins:{...a.plugins,title:{...a.plugins.title,text:"Click & Views"}}},data:o,className:"cursor-pointer"})})}function ce({options:a,data:o}){return e.jsx(N,{className:"relative w-full h-[15.53vw]",children:e.jsx(k,{options:{...a,plugins:{...a.plugins,title:{...a.plugins.title,text:"Sales Amount"}}},data:o,className:"cursor-pointer"})})}function F({value:a,onChange:o}){return e.jsxs(Q,{variant:"default",className:"relative w-[8.35vw] h-[2.1vw] md:px-[.1vw] md:py-[0vw] flex justify-center items-center gap-[.4vw] md:text-[.7vw] border-1 rounded-[.4vw]",activeClassName:"",children:[e.jsx(le,{value:a,onChange:o,showShortcuts:!0,primaryColor:"indigo",inputClassName:"w-full bg-transparent border-transparent text-transparent placeholder:text-transparent focus:ring-0 focus:border-0 rounded-[.4vw] text-[.83vw] p-[.5vw] leading-tight cursor-pointer",containerClassName:"absolute",toggleClassName:"hidden",popoverDirection:"down",maxDate:g().format("YYYY-MM-DD")}),e.jsx(me,{className:"text-[1vw]"})," Select Date"]})}function N({className:a,...o}){return e.jsx("div",{...o,className:`bg-white shadow-bottom-right rounded-[.625vw] py-[1.25vw] px-[1.67vw] ${a}`})}function ge(){return e.jsx("div",{className:"absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-gray-50 bg-opacity-50 z-50",children:e.jsx("img",{src:X,alt:"Goals Academy",className:"w-[6vw] h-[6vw] animate-bounce"})})}export{Ae as default};
