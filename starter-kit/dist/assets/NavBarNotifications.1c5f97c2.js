import{d as b,o as s,b as d,w as e,p as t,a$ as p,B as h,b3 as y,A as u,x as n,b0 as f,c,F as _,a as V,V as N,q as x,m as A,O as k}from"./index.02e136f0.js";import{a as g,V as B}from"./VBadge.8043a700.js";import{V as w}from"./VMenu.a7ac8f90.js";import{V as F,a as m}from"./VList.f13bd3d1.js";import{V as v}from"./VDivider.073cb25f.js";import{a as C,b as I}from"./avatar-4.fc1b14d3.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.a8caf6ff.js";import"./lazy.732fd8b2.js";const L="/assets/avatar-5.d340221a.png",P=i=>i?i.split(" ").map(r=>r.charAt(0).toUpperCase()).join(""):"",T={key:0},z={class:"whitespace-no-wrap text-medium-emphasis"},O=b({__name:"Notifications",props:{notifications:null,badgeProps:{default:void 0},location:{default:"bottom end"}},emits:["click:readAllNotifications"],setup(i){const a=i;return(r,l)=>(s(),d(g,k({"model-value":!!a.badgeProps},a.badgeProps),{default:e(()=>[t(p,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(g,{"model-value":!!a.notifications.length,color:"error",content:"4"},{default:e(()=>[t(h,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),t(w,{activator:"parent",width:"380px",location:a.location,offset:"14px"},{default:e(()=>[t(F,{class:"py-0"},{default:e(()=>[t(m,{title:"Notifications",class:"notification-section",height:"48px"},{append:e(()=>[a.notifications.length?(s(),d(y,{key:0,color:"primary",size:"small"},{default:e(()=>[u(n(a.notifications.length)+" New ",1)]),_:1})):f("",!0)]),_:1}),t(v),(s(!0),c(_,null,V(a.notifications,o=>(s(),c(_,{key:o.title},[t(m,{title:o.title,subtitle:o.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:e(()=>[t(B,{start:""},{default:e(()=>[t(N,{color:o.color||"primary",image:o.img||void 0,icon:o.icon||void 0,size:"40",variant:"tonal"},{default:e(()=>[o.text?(s(),c("span",T,n(x(P)(o.text)),1)):f("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:e(()=>[A("small",z,n(o.time),1)]),_:2},1032,["title","subtitle"]),t(v)],64))),128)),t(m,{class:"notification-section"},{default:e(()=>[t(p,{block:"",onClick:l[0]||(l[0]=o=>r.$emit("click:readAllNotifications"))},{default:e(()=>[u(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}});const $="/assets/paypal.01b645d1.svg",U=b({__name:"NavBarNotifications",setup(i){const a=[{img:C,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:L,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:$,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:I,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(r,l)=>(s(),d(O,{notifications:a}))}});export{U as default};