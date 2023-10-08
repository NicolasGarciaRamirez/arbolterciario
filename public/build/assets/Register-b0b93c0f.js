import{T as _,e as c,b as e,u as o,w as m,F as g,o as f,Z as w,a as t,g as u,f as v,j as h,n as y,i as V}from"./app-bdc8b805.js";import{A as b}from"./AuthenticationCard-0b1843dd.js";import{_ as k}from"./AuthenticationCardLogo-516b11e5.js";import{_ as x}from"./Checkbox-9d3c4afb.js";import{_ as n,a as l}from"./TextInput-d36e4e44.js";import{_ as i}from"./InputLabel-31f8cdfc.js";import{_ as C}from"./PrimaryButton-f7765d11.js";/* empty css            */import"./_plugin-vue_export-helper-c27b6911.js";const $=["onSubmit"],q={class:"mt-4"},P={class:"mt-4"},U={class:"mt-4"},N={class:"mt-4"},A={key:0,class:"mt-4"},F={class:"flex items-center"},R={class:"ml-2"},T=["href"],j=["href"],B={class:"flex items-center justify-end mt-4"},K={__name:"Register",setup(S){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1,patrocinador_id:""}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(d,r)=>(f(),c(g,null,[e(o(w),{title:"Register"}),e(b,null,{logo:m(()=>[e(k)]),default:m(()=>[t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(n,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":r[0]||(r[0]=a=>o(s).name=a),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),t("div",q,[e(i,{for:"email",value:"Email"}),e(n,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":r[1]||(r[1]=a=>o(s).email=a),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",P,[e(i,{for:"password",value:"Password"}),e(n,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":r[2]||(r[2]=a=>o(s).password=a),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",U,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=a=>o(s).password_confirmation=a),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",N,[e(i,{for:"referredCode",value:"Refered Code"}),e(n,{id:"referredCode",modelValue:o(s).patrocinador_id,"onUpdate:modelValue":r[4]||(r[4]=a=>o(s).patrocinador_id=a),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"referred-code"},null,8,["modelValue"]),e(l,{class:"mt-2",message:o(s).errors.patrocinador_id},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),c("div",A,[e(i,{for:"terms"},{default:m(()=>[t("div",F,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":r[5]||(r[5]=a=>o(s).terms=a),name:"terms",required:""},null,8,["checked"]),t("div",R,[u(" I agree to the "),t("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,T),u(" and "),t("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,j)])]),e(l,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):v("",!0),t("div",B,[e(o(h),{href:d.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[u(" Already registered? ")]),_:1},8,["href"]),e(C,{class:y(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:m(()=>[u(" Register ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{K as default};
