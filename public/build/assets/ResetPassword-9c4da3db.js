import{T as c,o as f,c as w,w as n,a as o,u as e,Z as _,b as t,d as V,n as g,e as b}from"./app-9b5050ba.js";import{_ as k}from"./GuestLayout-a122d917.js";import{_ as l}from"./InputError-d4590dab.js";import{_ as i,a as m}from"./TextInput-7540eac9.js";import{P as v}from"./PrimaryButton-90eb6f03.js";import"./ApplicationLogo-6b231334.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=["onSubmit"],P={class:"mt-4"},q={class:"mt-4"},x={class:"flex items-center justify-end mt-4"},T={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(B,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),t("form",{onSubmit:b(p,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",P,[o(i,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",x,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{T as default};
