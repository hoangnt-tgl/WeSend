import{K as T,an as q,L as V,Q as I,at as L,aw as N,M as P,p as s,aD as R,br as z,bN as F,C as y,r as g,o as i,b as S,w as r,m as e,bd as b,x as c,a6 as h,c as l,H as d,bq as G,I as O,s as U,bb as D,F as v,a as f,a7 as $,G as w,a2 as E,a3 as j,A,B}from"./index.22347c68.js";import{T as K}from"./TabsGrow.973391c0.js";import"./lazy.6c2ca506.js";const Q=T({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...q(),...V(),...I()},setup(o,u){let{slots:a}=u;const{themeClasses:n}=L(o),{densityClasses:m}=N(o);return P(()=>{var _,t;return s(o.tag,{class:["v-table",{"v-table--fixed-height":!!o.height,"v-table--fixed-header":o.fixedHeader,"v-table--fixed-footer":o.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":o.hover},n.value,m.value]},{default:()=>[(_=a.top)==null?void 0:_.call(a),a.default&&s("div",{class:"v-table__wrapper",style:{height:R(o.height)}},[s("table",null,[a.default()])]),(t=a.bottom)==null?void 0:t.call(a)]})}),{}}}),Y={name:"CardHistory",components:{RounedBtn:z},props:{title:{type:String,required:!0},time:{type:String,required:!0},type:{type:String,required:!0}},setup(){return{btnOutLine:F}}};const J={class:"d-flex justify-content-between align-center py-3"},W={class:"w-75"},X={class:"d-flex flex-sm-column-reverse flex-column"},Z={class:"notification-date"},ee={class:"d-block d-sm-none icon-reload-phone"};function te(o,u,a,n,m,_){const t=g("RounedBtn");return i(),S(D,{class:U(a.type==="deleted"?"notification-container deleted":a.type==="overrided"?"notification-container overrided":"notification-container created")},{default:r(()=>[e("div",J,[e("div",W,[e("div",X,[s(b,{class:"text-body-1 py-0"},{default:r(()=>[e("span",Z,c(a.time),1)]),_:1}),s(b,{class:"notification-title py-0"},{default:r(()=>[h(c(a.title),1)]),_:1})])]),a.type==="deleted"?(i(),l("div",{key:0,class:"ms-auto me-md-7 me-4",onClick:u[0]||(u[0]=()=>{})},[e("div",ee,[s(d,{icon:"tabler-rotate-2"})]),s(t,{"button-title":"Restore",color:n.btnOutLine.color,style:G({...n.btnOutLine,height:"45px"}),variant:"'outlined'","icon-b":"tabler-rotate-2",class:"d-none d-sm-block"},null,8,["color","style"])])):O("",!0)])]),_:1},8,["class"])}const k=y(Y,[["render",te]]),H=[{id:1,title:"Campaign \u201CHalloween Discount\u201D was deleted.",time:"24 Sep 2020 / 10:00 AM",type:"deleted"},{id:2,title:"Campaign \u201CHalloween Discount\u201D was deleted.",time:"24 Sep 2020 / 10:00 AM",type:"created"},{id:3,title:"Campaign \u201CHalloween Discount\u201D was deleted.",time:"24 Sep 2020 / 10:00 AM",type:"overrided"},{id:4,title:"Campaign \u201CHalloween Discount\u201D was deleted.",time:"24 Sep 2020 / 10:00 AM",type:"deleted"},{id:5,title:"Campaign \u201CBirthday Bash\u201D schedule was overrided!",time:"24 Sep 2020 / 10:00 AM",type:"overrided"},{id:6,title:"Campaign \u201CBirthday Bash\u201D schedule was overrided!",time:"24 Sep 2020 / 10:00 AM",type:"overrided"}],se=[{id:1,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:100,contacts:600},{id:2,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:100,contacts:700},{id:3,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:200,contacts:500},{id:4,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:300,contacts:500},{id:5,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:100,contacts:900},{id:6,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:100,contacts:600},{id:7,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:100,contacts:600},{id:8,name:"Duis senectus ultrices dignissim aliquam ultrices",time:"24 Sep 2020 / 10:00 AM",progress:100,contacts:600}],oe={components:{CardHistory:k},setup(){return{lastActions:H}}},ae={class:""},ne={class:"mx-6 my-1"};function ie(o,u,a,n,m,_){const t=g("CardHistory");return i(),l("div",ae,[(i(!0),l(v,null,f(n.lastActions,(p,C)=>(i(),l("div",{key:C},[e("div",ne,[s(t,{title:p.title,time:p.time,type:p.type},null,8,["title","time","type"])])]))),128))])}const le=y(oe,[["render",ie]]),ce={setup(){return{items:se}}};const M=o=>(A("data-v-cbf83405"),o=o(),B(),o),re={class:"d-none d-sm-inline"},de={scope:"col",class:"text-overline"},ue={scope:"col",class:"text-overline"},_e={scope:"col",class:"text-overline"},pe={scope:"col",class:"text-overline"},me=M(()=>e("th",null,null,-1)),he={class:"text-base",style:{"white-space":"break-spaces","word-wrap":"normal"}},be={class:"text-base"},ve={class:"d-flex flex-column"},ye={class:"text-caption"},fe={class:"text-base"},ge={class:"text-center",style:{width:"5rem"}},xe=M(()=>e("tr",null,[e("td",{colspan:"5",class:"text-center"}," No data available ")],-1)),Ce=[xe],$e={class:"d-block d-sm-none"},we={class:"d-flex align-center"},Se={class:"d-flex flex-column w-75"},De={class:"notification-date"},Ae={class:"notification-title"},Be={class:"ms-auto"};function ke(o,u,a,n,m,_){return i(),l(v,null,[e("div",re,[s(Q,{class:"text-no-wrap pa-4"},{default:r(()=>[e("thead",null,[e("tr",null,[e("th",de,[h(" Campaign Name "),s(d,{icon:"tabler-arrows-sort"})]),e("th",ue,[h(" Running Date & Time "),s(d,{icon:"tabler-arrows-sort"})]),e("th",_e,[h(" Progress "),s(d,{icon:"tabler-arrows-sort"})]),e("th",pe,[h(" Contacts "),s(d,{icon:"tabler-arrows-sort"})]),me])]),e("tbody",null,[(i(!0),l(v,null,f(n.items,t=>(i(),l("tr",{key:t.id,style:{height:"3.75rem"}},[e("td",null,[e("span",he,c(t.name),1)]),e("td",null,[e("span",be,c(t.time),1)]),e("td",null,[e("div",ve,[e("span",ye,c(t.progress)+" / "+c(t.contacts),1),s($,{"model-value":t.progress/t.contacts*100,color:"primary",rounded:"",height:"6"},null,8,["model-value"])])]),e("td",null,[e("span",fe,c(t.contacts),1)]),e("td",ge,[s(w,{icon:"",size:"x-small",color:"default",variant:"text",class:"border rounded"},{default:r(()=>[s(d,{size:"22",icon:"tabler-file-export"})]),_:1})])]))),128))]),E(e("tfoot",null,Ce,512),[[j,!n.items.length]])]),_:1})]),e("div",$e,[(i(!0),l(v,null,f(n.items,t=>(i(),S(D,{key:t.id,class:"card-campai pa-4 mb-2"},{default:r(()=>[e("div",we,[e("div",Se,[s(b,{class:"notification-title py-0"},{default:r(()=>[h(c(t.name),1)]),_:2},1024),s(b,{class:"text-body-1 py-0"},{default:r(()=>[e("span",De,c(t.time),1)]),_:2},1024),s(b,{class:"text-body-1 py-0"},{default:r(()=>[e("span",Ae,c(t.progress)+" / "+c(t.contacts),1),s($,{"model-value":t.progress/t.contacts*100,color:"primary",rounded:"",height:"6"},null,8,["model-value"])]),_:2},1024)]),e("div",Be,[s(w,{icon:"",size:"x-small",color:"default",variant:"text",class:"border rounded"},{default:r(()=>[s(d,{size:"22",icon:"tabler-file-export"})]),_:1})])])]),_:2},1024))),128))])],64)}const He=y(ce,[["render",ke],["__scopeId","data-v-cbf83405"]]),Me={components:{CardHistory:k},setup(){return{lastActions:H}}},Te={class:""},qe={class:"mx-6 my-1"};function Ve(o,u,a,n,m,_){const t=g("CardHistory");return i(),l("div",Te,[(i(!0),l(v,null,f(n.lastActions,(p,C)=>(i(),l("div",{key:C},[e("div",qe,[s(t,{title:p.title,time:p.time,type:p.type},null,8,["title","time","type"])])]))),128))])}const Ie=y(Me,[["render",Ve]]),Le={name:"History",components:{TabsGrow:K},setup(){return{items:[{label:"Last Actions",icon:"tabler-history",body:le},{label:"Past Campaigns",icon:"tabler-message-forward",body:He},{label:"Updates",icon:"tabler-bell",body:Ie}]}}};const x=o=>(A("data-v-d1b8b801"),o=o(),B(),o),Ne={class:"detail-title"},Pe=x(()=>e("h2",null,"History",-1)),Re={class:"contact-header"},ze={class:"contact-search"},Fe=x(()=>e("input",{type:"text",placeholder:"Search"},null,-1)),Ge={class:"contact-button"},Oe=x(()=>e("h6",null,"FILTER BY",-1)),Ue=x(()=>e("span",null,"Date:",-1));function Ee(o,u,a,n,m,_){const t=g("TabsGrow");return i(),l("div",null,[e("div",Ne,[Pe,e("div",Re,[e("div",ze,[s(d,{icon:"tabler-search"}),Fe]),e("div",Ge,[Oe,e("button",null,[Ue,s(d,{icon:"tabler-calendar-due"})])])])]),s(t,{items:n.items},null,8,["items"])])}const Ye=y(Le,[["render",Ee],["__scopeId","data-v-d1b8b801"]]);export{Ye as default};
