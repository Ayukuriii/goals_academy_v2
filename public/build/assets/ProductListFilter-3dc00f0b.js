import{j as e,r as i}from"./app-7c3879b2.js";import{i as d}from"./index-503b06ed.js";import{r as x}from"./react-responsive-4ac5f018.js";import"./iconBase-b3bc7823.js";const m=({dataList:l,className:r,setSelected:a,selected:n,...o})=>e.jsx("div",{className:"flex gap-[1vw]",children:l.map((s,t)=>e.jsx("button",{onClick:()=>a(s),className:`flex items-center border border-neutral-20 px-[1vw] py-[.8vw] rounded-[.8vw] text-[1vw] ${n===s?"bg-secondary text-white":"bg-white"} ${r}`,...o,children:s},t))}),h=()=>{const l=x.useMediaQuery({query:"(max-width: 768px)"}),[r,a]=i.useState("Semua"),[n,o]=i.useState(!1),s=["Semua","Dalam Proses","Selesai"];return e.jsx(e.Fragment,{children:l?e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>o(!0),className:"flex h6 font-normal items-center gap-[.8vw] text-neutral-60",children:[r," ",e.jsx(d,{className:"text-[4.2vw]"})]}),n&&e.jsx("div",{className:"absolute right-0 flex flex-col w-max border shadow-centered-spread rounded-[2.7vw] bg-white h6 font-normal overflow-hidden z-[50]",children:s.map((t,c)=>e.jsx("button",{className:`text-start py-[3.7vw] px-[7.4vw] ${r==t?"bg-secondary text-white":"bg-white hover:bg-primary-10"}`,onClick:()=>{a(t),o(!1)},children:t},c))})]}):e.jsx(m,{dataList:s,selected:r,setSelected:t=>a(t)})})},b=h;export{b as default};
