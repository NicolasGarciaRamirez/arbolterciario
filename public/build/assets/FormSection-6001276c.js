import{k as a,o as i,e as r,b as n,w as m,r as e,a as t,i as l,n as c,f as p,E as u}from"./app-bdc8b805.js";import{S as g}from"./SectionTitle-d3f553d7.js";const h={class:"md:grid md:grid-cols-3 md:gap-6"},v={class:"mt-5 md:mt-0 md:col-span-2"},_={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},S={__name:"FormSection",emits:["submitted"],setup(f){const o=a(()=>!!u().actions);return(s,d)=>(i(),r("div",h,[n(g,null,{title:m(()=>[e(s.$slots,"title")]),description:m(()=>[e(s.$slots,"description")]),_:3}),t("div",v,[t("form",{onSubmit:d[0]||(d[0]=l($=>s.$emit("submitted"),["prevent"]))},[t("div",{class:c(["px-4 py-5 bg-white sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",_,[e(s.$slots,"form")]),t("div",null,[e(s.$slots,"body")])],2),o.value?(i(),r("div",b,[e(s.$slots,"actions")])):p("",!0)],32)])]))}};export{S as _};