import{d as b,j as h,o,b as n,w as e,p as t,H as l,b7 as g,b8 as x,G as u,b9 as V,a6 as C,q as p,ba as v,bb as y,c as A,F as S,a as z,bc as k,s as w,z as B,m as d,x as m}from"./index.796aab1e.js";import{V as I}from"./VMenu.2c398cda.js";import{V as D}from"./VDivider.a50a49ac.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.f83edcea.js";import"./lazy.e175d5bd.js";const N={class:"text-base font-weight-semibold mt-2 mb-0"},F={class:"text-sm"},M=b({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(r){const s=r,i=h();return(_,c)=>(o(),n(u,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(l,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(I,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(g,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(x,{class:"py-4"},{append:e(()=>[t(u,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(l,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(V,null,{default:e(()=>[C("Shortcuts")]),_:1})]),_:1}),t(D),t(p(v),{options:{wheelPropagation:!1}},{default:e(()=>[t(y,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),A(S,null,z(s.shortcuts,(a,f)=>(o(),n(k,{key:a.title,cols:"6",class:w(["text-center border-t cursor-pointer pa-4",(f+1)%2?"border-e":""]),onClick:$=>p(i).push(a.to)},{default:e(()=>[t(B,{variant:"tonal",size:"48"},{default:e(()=>[t(l,{icon:a.icon},null,8,["icon"])]),_:2},1024),d("h6",N,m(a.title),1),d("span",F,m(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),q=b({__name:"NavbarShortcuts",setup(r){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,_)=>{const c=M;return o(),n(c,{shortcuts:s})}}});export{q as default};