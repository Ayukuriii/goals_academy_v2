import{r,j as e,d as i}from"./app-4d736824.js";import{D as o}from"./DashboardLayout-462667c9.js";import{F as c,a as d,b as l}from"./index-99e30f08.js";import{S as n,G as m}from"./Product-f301d4aa.js";import"./GoalsButton-eb73f0ba.js";import"./TECollapseItem-21cf381f.js";import"./tw-elements-react.es.min-46cdcb8d.js";import"./index-4c05755b.js";import"./iconBase-42329843.js";import"./index.esm-acdb23d6.js";import"./dateViewRenderers-c7f8ddc3.js";import"./GoalsTextInput-142a87c2.js";function N({auth:s}){const t=r.useMemo(()=>[{accessorKey:"topic",header:"Topic",size:200},{accessorKey:"slug",header:"Slug",size:200},{accessorKey:"action",header:"Action",size:50,Cell:({cell:a})=>e.jsxs("ul",{className:"flex gap-[.8vw] w-fit",children:[e.jsx("li",{children:e.jsx(i,{href:"/admin/bimbingan/product/edit",children:e.jsx(c,{className:"text-[1.2vw] text-secondary"})})}),e.jsx("li",{children:e.jsx(i,{method:"DELETE",href:`/admin/bimbingan/product/${a.getValue()}`,children:e.jsx(d,{className:"text-[1.2vw] text-danger-40"})})})]})}],[]);return e.jsx(o,{title:"Bimbingan",subtitle:"Topic",role:"admin",auth:s,children:e.jsxs("div",{className:"space-y-[1.6vw]",children:[e.jsx(n,{title:"Topik",children:e.jsxs(i,{isLink:!0,href:"/admin/bimbingan/product/add",className:"flex items-center gap-[.5vw] bg-secondary hover:bg-primary text-white py-[.6vw] px-[1.2vw] rounded-[.4vw] text-[.7vw]",children:[e.jsx(l,{className:"text-[1vw]"}),"Add Topic"]})}),e.jsx(m,{isHeadVisible:!0,isPaginated:!0,isSortable:!0,columns:t,data:p})]})})}const p=[{id:1,topic:"Topic 1",slug:"topic-1"},{id:2,topic:"Topic 2",slug:"topic-2"}];export{N as default};
