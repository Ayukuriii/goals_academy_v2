import{j as r,d as u}from"./app-7c3879b2.js";const i=({className:e="",children:t,variant:s="primary",isLink:o=!1,href:a="/",...c})=>{const n=o?u:"React.Fragment";function d(){switch(s){case"primary":return"bg-secondary hover:bg-primary text-white ";case"bordered":return"border-2 border-secondary text-secondary hover:border-primary hover:text-primary";case"info":return"bg-info-40 hover:bg-info-50 text-white";case"primary-inverse":return"bg-primary-10 text-secondary hover:bg-primary-20";case"success":return"bg-success-50 hover:bg-success-60 text-white";case"success-bordered":return"border-2 border-success-50 text-success-50 hover:border-success-60 hover:text-success-60 ";default:return"border-1 border-neutral-20"}}return r.jsx(n,{href:a,children:r.jsx("button",{className:`font-medium px-[8.3vw] md:px-[2vw] py-[3.2vw] md:py-[.8vw] rounded-[1.8vw] md:rounded-[.4vw] text-[3.7vw] md:text-[1vw] transition-all ${d()} ${e}`,...c,children:t})})},b=i;export{b as G};
