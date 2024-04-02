import{r as s,j as e}from"./app-4d736824.js";import{G as H}from"./GoalsButton-eb73f0ba.js";import{i as G}from"./goals-5-b0b5a2a2.js";import{D as z,I as K}from"./DashboardLayout-462667c9.js";import{m}from"./moment-d79fcc1d.js";import{u as W,M as Z}from"./index.esm-acdb23d6.js";import{f as u,C as $,p as q,a as J,L as Q,B as X,b as ee,c as te,d as ae,D as se}from"./index.esm-b0e8af62.js";import{F as re,a as oe,b as ne}from"./index-4c05755b.js";import{c as ie,d as le}from"./index-99e30f08.js";import"./momentCustomLocale-edb7a527.js";import"./TECollapseItem-21cf381f.js";import"./tw-elements-react.es.min-46cdcb8d.js";import"./iconBase-42329843.js";import"./dateViewRenderers-c7f8ddc3.js";import"./moment-a9aaa855.js";function Pe({auth:t,total_earning:r,total_order:o,total_checkout:n,list_orders:i,top_selling:f}){const[v,h]=s.useState(!1),b=Intl.NumberFormat("id-ID"),[j,xe]=s.useState(r),[y,fe]=s.useState(312),[N,ge]=s.useState(o),[D,we]=s.useState(n),[g,S]=s.useState(["29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]),[C,k]=s.useState(g.map(a=>u.datatype.number({min:50,max:200}))),[T,M]=s.useState(g.map(a=>u.datatype.number({min:50,max:200})));$.register(q,J,Q,X,ee,te);const R={plugins:{title:{display:!1,text:"Total Views & Click",position:"top"},legend:{align:"end",reverse:!0,boxWidth:20,boxHeight:20}},aspectRatio:3.58,responsive:!0,borderRadius:1e3,barThickness:4,scales:{x:{beginAtZero:!0,stacked:!0,ticks:{color:"#A6A6A6",maxRotation:0},grid:{display:!0,drawBorder:!1,drawTicks:!0,color:a=>(a.index===0,"")}},y:{beginAtZero:!0,stacked:!0,ticks:{display:!1},grid:{drawBorder:!1,drawTicks:!1,color:a=>a.index===0?"":"rgba(160, 160, 160, 0.2)"},border:{dash:[6,4]}}}},F={labels:g,datasets:[{label:"Clicks",data:C,backgroundColor:"#5A6ACF"},{label:"Views",data:T,backgroundColor:"#FF8854"}]},[I,_]=s.useState(f.sort((a,d)=>a.order_count>d.order_count?-1:1)),[P,he]=s.useState(i.slice(0,5)),A=s.useMemo(()=>[{accessorKey:"order_code",header:"ID Pesanan",grow:!1},{accessorKey:"user_id",header:"Name"},{accessorKey:"products_id",header:"Product"},{accessorFn:a=>m(a.created_at).format("DD/MM/YYYY"),id:"date",header:"Date"}],[]),B=W({columns:A,data:P,enableTopToolbar:!1,enableBottomToolbar:!1,enableColumnActions:!1,muiTablePaperProps:{elevation:0,sx:{borderRadius:".625vw",border:"none"}},muiTableHeadCellProps:{sx:{fontFamily:'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',fontSize:".83vw",fontWeight:"medium",color:"#404040",backgroundColor:"#F8F8FC",border:"none"}},muiTableBodyCellProps:{sx:{fontFamily:'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',fontSize:".83vw",fontWeight:"medium",color:"#404040",padding:".5vw 1.2vw",border:"none"}},muiTableContainerProps:{className:"scrollbar-hidden"}}),[E,Y]=s.useState({startDate:m().subtract(1,"months").format("YYYY-MM-DD"),endDate:m().format("YYYY-MM-DD")}),L=a=>{const d=m(a.startDate),O=m(a.endDate),w=d.diff(O,"days");w>=-30?(h(!0),setTimeout(()=>{let l=[];if(l.push(d.format("DD")),w)for(let c=1;c<=-w;c++)l.push(d.add(1,"day").format("DD"));console.log(l);let U=[{name:"Dibimbing Sekali Online 30 Menit",order_count:Math.round(Math.random()*100)},{name:"Dibimbing Sekali Offline 45 Menit",order_count:Math.round(Math.random()*100)},{name:"Desk Review",order_count:Math.round(Math.random()*100)},{name:"Dibimbing Tuntas",order_count:Math.round(Math.random()*100)}].sort((c,V)=>c.order_count>V.order_count?-1:1);Y(a),S(l),k(l.map(c=>u.datatype.number({min:50,max:200}))),M(l.map(c=>u.datatype.number({min:50,max:200}))),_(U),h(!1)},3e3)):alert("Range tanggal maksimum 1 bulan!")};return e.jsx(z,{title:"Overview",role:"admin",auth:t,children:e.jsxs("div",{className:"relative",children:[v&&e.jsx(pe,{}),e.jsx("div",{className:"flex justify-end mb-[2vw]",children:e.jsx(ue,{value:E,onChange:L})}),e.jsxs("div",{className:"relative flex flex-col gap-[.73vw]",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(ce,{options:R,data:F}),e.jsxs("div",{className:"w-[25.1vw] grid grid-cols-2 gap-[.94vw] text-[.83vw]",children:[e.jsx(p,{title:"Earning (IDR)",data:b.format(j),percentage:5.6,grow:12}),e.jsx(p,{title:"Visitor",data:y,percentage:5.6,grow:12,icon:e.jsx(K,{className:"text-[1vw]"})}),e.jsx(p,{title:"Total Order",data:N,percentage:5.6,grow:12,icon:e.jsx(re,{className:"text-[1vw]"})}),e.jsx(p,{title:"Checkout User",data:D,percentage:5.6,grow:12,icon:e.jsx(oe,{className:"text-[1vw]"})})]})]}),e.jsxs("div",{className:"flex justify-between text-[.83vw]",children:[e.jsx(de,{options:B}),e.jsx(me,{data:I})]})]})]})})}function ce({options:t,data:r}){return e.jsxs(x,{className:"relative w-[50vw] h-[15.53vw]",children:[e.jsx("h4",{className:"absolute font-sans font-medium text-[1vw] mt-[.3vw]",children:"Total Views & Clicks"}),e.jsx(ae,{options:t,data:r,className:"cursor-pointer"})]})}function de({options:t}){return e.jsxs(x,{className:"w-[52.4vw] space-y-[1.5vw]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-sans font-medium text-[1vw]",children:"Recent Payment"}),e.jsx("div",{children:e.jsx(ie,{className:"text-[1.25vw]"})})]}),e.jsx(Z,{table:t})]})}function me({data:t}){return e.jsxs(x,{className:"w-[23vw] space-y-[1.5vw]",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("h4",{className:"font-sans font-medium text-[1vw]",children:"Top Selling"})}),e.jsx("div",{className:"grid gap-[1.5vw]",children:t.map(({name:r,order_count:o},n)=>{const i=Math.max(...t.map(f=>f.order_count));return e.jsxs("div",{className:"space-y-[.5vw]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:r}),e.jsx("span",{children:o})]}),e.jsx("div",{className:"w-full h-[.6vw] bg-green-100 rounded-full overflow-hidden",children:e.jsx("div",{style:{width:o/i*100+"%"},className:"h-full bg-green-500 animate-slideRight duration-300"})})]},n)})})]})}function p({title:t,data:r,percentage:o,grow:n,icon:i}){return e.jsxs(x,{className:"flex justify-between",children:[e.jsxs("div",{className:"h-full flex flex-col justify-between",children:[e.jsx("p",{className:"font-sans",children:t}),e.jsxs("div",{children:[e.jsx("p",{className:"font-poppins font-bold text-[1.25vw]",children:r}),e.jsxs("div",{className:"flex items-center gap-[.25vw] text-[.625vw] text-green-500",children:[e.jsx(le,{className:"text-[1vw]"}),e.jsxs("span",{children:[o,"%"]}),e.jsxs("span",{className:"text-light-grey",children:[n>=0?"+":"-",n," Today"]})]})]})]}),i&&e.jsx("div",{className:"w-[2.6vw] h-[2.6vw] rounded-[.625vw] flex items-center justify-center bg-dark-indigo text-white",children:i})]})}function ue({value:t,onChange:r}){return e.jsxs(H,{variant:"default",className:"relative w-[8.35vw] h-[2.1vw] md:px-[.1vw] md:py-[0vw] flex justify-center items-center gap-[.4vw] md:text-[.7vw] border-1 rounded-[.4vw]",activeClassName:"",children:[e.jsx(se,{value:t,onChange:r,showShortcuts:!0,primaryColor:"indigo",inputClassName:"w-full bg-transparent border-transparent text-transparent placeholder:text-transparent focus:ring-0 focus:border-0 rounded-[.4vw] text-[.83vw] p-[.5vw] leading-tight cursor-pointer",containerClassName:"absolute",toggleClassName:"hidden",popoverDirection:"down"}),e.jsx(ne,{className:"text-[1vw]"})," Select Date"]})}function x({className:t,...r}){return e.jsx("div",{...r,className:`bg-white shadow-bottom-right rounded-[.625vw] py-[1.25vw] px-[1.67vw] ${t}`})}function pe(){return e.jsx("div",{className:"absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-gray-50 bg-opacity-50 z-50",children:e.jsx("img",{src:G,alt:"Goals Academy",className:"w-[6vw] h-[6vw] animate-bounce"})})}export{Pe as default};
