import{r,j as e,d as i}from"./app-7c3879b2.js";import{D as o}from"./DashboardLayout-2e1cd5ca.js";import{F as c,a as d,b as l}from"./index-503b06ed.js";import{S as n,G as m}from"./Product-4f8bbe4b.js";import"./GoalsButton-086c032f.js";import"./TECollapseItem-22062111.js";import"./tw-elements-react.es.min-89aae9b7.js";import"./index-0bc26b29.js";import"./iconBase-b3bc7823.js";import"./index.esm-d71e7098.js";import"./dateViewRenderers-bb2c1225.js";import"./GoalsTextInput-1dc8d1e9.js";function N({auth:s}){const t=r.useMemo(()=>[{accessorKey:"topic",header:"Topic",size:200},{accessorKey:"slug",header:"Slug",size:200},{accessorKey:"action",header:"Action",size:50,Cell:({cell:a})=>e.jsxs("ul",{className:"flex gap-[.8vw] w-fit",children:[e.jsx("li",{children:e.jsx(i,{href:"/admin/bimbingan/product/edit",children:e.jsx(c,{className:"text-[1.2vw] text-secondary"})})}),e.jsx("li",{children:e.jsx(i,{method:"DELETE",href:`/admin/bimbingan/product/${a.getValue()}`,children:e.jsx(d,{className:"text-[1.2vw] text-danger-40"})})})]})}],[]);return e.jsx(o,{title:"Bimbingan",subtitle:"Topic",role:"admin",auth:s,children:e.jsxs("div",{className:"space-y-[1.6vw]",children:[e.jsx(n,{title:"Topik",children:e.jsxs(i,{isLink:!0,href:"/admin/bimbingan/product/add",className:"flex items-center gap-[.5vw] bg-secondary hover:bg-primary text-white py-[.6vw] px-[1.2vw] rounded-[.4vw] text-[.7vw]",children:[e.jsx(l,{className:"text-[1vw]"}),"Add Topic"]})}),e.jsx(m,{isHeadVisible:!0,isPaginated:!0,isSortable:!0,columns:t,data:p})]})})}const p=[{id:1,topic:"Topic 1",slug:"topic-1"},{id:2,topic:"Topic 2",slug:"topic-2"}];export{N as default};
