import{d as u,o,b as r,w as e,p as t,B as p,c as m,F as g,a as f,A as _,x as d,b2 as L,t as h}from"./index.9f3abaf8.js";import{V as b}from"./VMenu.370a1de8.js";import{V,a as v,b as x}from"./VList.1900f24c.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.2684be71.js";import"./lazy.bdeb6213.js";import"./VDivider.25779385.js";const C=u({__name:"I18n",props:{languages:null,location:{default:"bottom end"}},emits:["change"],setup(c){const n=c,{locale:s}=useI18n({useScope:"global"});return(l,i)=>(o(),r(L,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(p,{icon:"tabler-language",size:"24"}),t(b,{activator:"parent",location:n.location,offset:"14px"},{default:e(()=>[t(V,{"min-width":"175px"},{default:e(()=>[(o(!0),m(g,null,f(n.languages,a=>(o(),r(v,{key:a.i18nLang,value:a.i18nLang,onClick:k=>{s.value=a.i18nLang,l.$emit("change",a.i18nLang)}},{default:e(()=>[t(x,null,{default:e(()=>[_(d(a.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}}),$=u({__name:"NavBarI18n",setup(c){const{isAppRtl:n}=h(),s=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],l=i=>{n.value=i==="ar"};return(i,a)=>(o(),r(C,{languages:s,onChange:l}))}});export{$ as default};