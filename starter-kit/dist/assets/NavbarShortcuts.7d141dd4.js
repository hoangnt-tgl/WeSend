import{d as b,j as g,o,b as n,w as e,p as t,H as l,bb as h,bc as x,G as u,bd as V,a6 as C,q as d,be as v,bf as y,c as A,F as S,a as z,bg as k,s as w,z as B,m as p,x as m}from"./index.7e7fd0e0.js";import{V as I}from"./VMenu.c00a674b.js";import{V as D}from"./VDivider.92a42934.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.24a755bc.js";import"./lazy.d57495a0.js";const N={class:"text-base font-weight-semibold mt-2 mb-0"},F={class:"text-sm"},M=b({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(r){const s=r,i=g();return(f,c)=>(o(),n(u,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(l,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(I,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(h,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(x,{class:"py-4"},{append:e(()=>[t(u,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(l,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(V,null,{default:e(()=>[C("Shortcuts")]),_:1})]),_:1}),t(D),t(d(v),{options:{wheelPropagation:!1}},{default:e(()=>[t(y,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),A(S,null,z(s.shortcuts,(a,_)=>(o(),n(k,{key:a.title,cols:"6",class:w(["text-center border-t cursor-pointer pa-4",(_+1)%2?"border-e":""]),onClick:$=>d(i).push(a.to)},{default:e(()=>[t(B,{variant:"tonal",size:"48"},{default:e(()=>[t(l,{icon:a.icon},null,8,["icon"])]),_:2},1024),p("h6",N,m(a.title),1),p("span",F,m(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),q=b({__name:"NavbarShortcuts",setup(r){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,f)=>{const c=M;return o(),n(c,{shortcuts:s})}}});export{q as default};