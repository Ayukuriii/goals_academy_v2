import{r as t,j as e,d as a}from"./app-4d736824.js";import{D as d}from"./DashboardLayout-462667c9.js";import{S as o,G as n}from"./Product-f301d4aa.js";import{F as c,a as m,b as l}from"./index-99e30f08.js";import"./GoalsButton-eb73f0ba.js";import"./TECollapseItem-21cf381f.js";import"./tw-elements-react.es.min-46cdcb8d.js";import"./index-4c05755b.js";import"./iconBase-42329843.js";import"./index.esm-acdb23d6.js";import"./dateViewRenderers-c7f8ddc3.js";import"./GoalsTextInput-142a87c2.js";function A({auth:s}){const r=t.useMemo(()=>[{accessorKey:"name",header:"Nama",size:200},{accessorKey:"slug",header:"Slug",size:200},{accessorKey:"harga",header:"Harga",size:200},{accessorKey:"action",header:"Action",size:50,Cell:({cell:i})=>e.jsxs("ul",{className:"flex gap-[.8vw] w-fit",children:[e.jsx("li",{children:e.jsx(a,{href:"/admin/bimbingan/product/edit",children:e.jsx(c,{className:"text-[1.2vw] text-secondary"})})}),e.jsx("li",{children:e.jsx(a,{method:"DELETE",href:`/admin/bimbingan/product/${i.getValue()}`,children:e.jsx(m,{className:"text-[1.2vw] text-danger-40"})})})]})}],[]);return e.jsx(d,{title:"Bimbingan",subtitle:"Add-On",role:"admin",auth:s,children:e.jsxs("div",{className:"space-y-[1.6vw]",children:[e.jsx(o,{title:"Add-On",children:e.jsxs(a,{isLink:!0,href:"/admin/bimbingan/product/add",className:"flex items-center gap-[.5vw] bg-secondary hover:bg-primary text-white py-[.6vw] px-[1.2vw] rounded-[.4vw] text-[.7vw]",children:[e.jsx(l,{className:"text-[1vw]"}),"Add-On"]})}),e.jsx(n,{isHeadVisible:!0,isPaginated:!0,isSortable:!0,columns:r,data:x})]})})}const x=[{id:1,name:"Record",slug:"record",harga:15e3}];export{A as default};
