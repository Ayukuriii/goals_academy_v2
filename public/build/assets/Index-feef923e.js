import{W as c,r as v,j as e,d as n}from"./app-7c3879b2.js";import{U as f}from"./PengaturanLayout-e1b7f436.js";import"./momentCustomLocale-631d791d.js";import{G as t}from"./GoalsTextInput-1dc8d1e9.js";import{G as w}from"./GoalsButton-859d2020.js";import{u}from"./MainHeader-84391444.js";import{r as g}from"./react-responsive-4ac5f018.js";import{h}from"./index-503b06ed.js";import{ProfileImage as j}from"./UbahProfil-c1dd6f6b.js";/* empty css             */import"./DashboardNavbarItem-0e96f6a7.js";import"./ButtonPill-0ebe58a0.js";import"./moment-fbc5633a.js";import"./tw-elements-react.es.min-89aae9b7.js";import"./TECollapseItem-22062111.js";import"./ButtonHoverSlide-f0ccbcf6.js";import"./iconBase-b3bc7823.js";import"./index-1a8689cf.js";function z({auth:l,userData:m,profileData:i}){const{data:r,setData:s,post:p}=c({username:m.username,name:m.name,phone_number:i.phone_number,university:i.university,faculty:i.faculty,major:i.major,referral:""}),[o,b]=v.useState(l.user.profile.profile_image?`/storage/${l.user.profile.profile_image}`:u),x=a=>{a.preventDefault(),p("/pengaturan")},d=g.useMediaQuery({query:"(max-width: 768px)"});return e.jsx(f,{auth:l,title:"Ubah Profil",children:d?e.jsxs("div",{className:"space-y-[30vw]",children:[e.jsx("div",{className:"h-[44vw]",children:e.jsxs("div",{className:"absolute left-0 w-full",children:[e.jsx("img",{src:"/img/profile/bg-pengaturan.svg",alt:"bg-pengaturan",className:"w-full h-full object-cover"}),e.jsxs("div",{className:"absolute w-fit flex flex-col items-center mx-auto -bottom-[25vw] left-0 right-0 z-10 space-y-[3vw]",children:[e.jsx("img",{className:"bg-white border-[.8vw] w-[30vw] h-[30vw] md:w-[5vw] md:h-[5vw] rounded-full shadow-centered-spread",src:o||u,alt:"User"}),e.jsxs("div",{className:"text-center space-y-[1vw] text-[3.2vw]",children:[e.jsx("p",{className:"font-medium",children:l.user.username}),e.jsx("p",{className:"text-neutral-40",children:l.user.email})]})]})]})}),e.jsxs("div",{className:"border-neutral-20 font-medium space-y-[1.8vw]",children:[e.jsxs(n,{href:"pengaturan/ubah_profil",className:"flex gap-[7vw] border py-[3.7vw] px-[7.4vw] rounded-[3.7vw]",children:[e.jsx("i",{className:"bi bi-pen"}),e.jsx("span",{children:"Profil"})]}),e.jsxs(n,{href:"pengaturan/ubah_password",className:"flex gap-[7vw] border py-[3.7vw] px-[7.4vw] rounded-[3.7vw]",children:[e.jsx("i",{className:"bi bi-key"}),e.jsx("span",{children:"Ubah Password"})]}),e.jsxs(n,{href:"/logout",method:"post",className:"flex gap-[7vw] border py-[3.7vw] px-[7.4vw] rounded-[3.7vw] text-danger",children:[e.jsx("i",{className:"bi bi-box-arrow-right"}),e.jsx("span",{children:"Keluar"})]})]})]}):e.jsxs("div",{className:"w-full md:border border-neutral-20 rounded-[.8vw] md:p-[1.6vw]",children:[d?e.jsxs(n,{href:"/pengaturan",className:"flex items-center gap-[1.5vw] text-black",children:[e.jsx(h,{className:"md:hidden text-[4vw]"}),e.jsx("h1",{className:"font-medium text-black text-[3.7vw] md:text-[1.8vw] leading-[12vw] md:leading-[4vw]",children:"Edit Profil"})]}):e.jsx("h1",{className:"font-medium text-black text-[3.7vw] md:text-[1.8vw] leading-[12vw] md:leading-[4vw] text-center",children:"Edit Profil"}),e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:gap-[1.6vw] ",children:[e.jsx(j,{auth:l}),e.jsxs("form",{onSubmit:x,className:"flex flex-col gap-[1.8vw] md:gap-[1.2vw] py-[1.6vw] w-full",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-[1.8vw] md:gap-[1.2vw]",children:[e.jsx(t,{value:r.username,onChange:a=>s("username",a.target.value),type:"text",id:"username",label:"Username"}),e.jsx(t,{value:r.name,onChange:a=>s("name",a.target.value),type:"text",id:"name",label:"Nama Lengkap"}),e.jsx(t,{value:r.phone_number,onChange:a=>s("phone_number",a.target.value),type:"text",id:"phone_number",label:"Nomor Telepon"}),e.jsx(t,{value:r.university,onChange:a=>s("university",a.target.value),type:"text",id:"university",label:"Universitas"}),e.jsx(t,{value:r.faculty,onChange:a=>s("faculty",a.target.value),type:"text",id:"faculty",label:"Fakultas"}),e.jsx(t,{value:r.major,onChange:a=>s("major",a.target.value),type:"text",id:"major",label:"Jurusan"})]}),e.jsx(t,{value:r.referral,onChange:a=>s("referral",a.target.value),type:"text",id:"referral",label:"Kode Referral"}),e.jsx(w,{type:"submit",className:"md:self-end mt-[1.8vw] md:mt-0",children:"Simpan"})]})]})]})})}export{z as default};
