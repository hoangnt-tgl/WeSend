import{m as z,f as D,V as L}from"./VSelectionControl.b08312cf.js";import{K as M,bx as R,aa as d,by as U,bz as E,ac as c,ab as K,M as N,bA as j,bB as q,k as G,p as t,a4 as v,bC as H,bD as J,bE as O}from"./index.420a2100.js";const Y=M({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...R(),...z()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,f){let{attrs:m,slots:a}=f;const l=d(e,"indeterminate"),u=d(e,"modelValue"),{loaderClasses:h}=U(e),{isFocused:V,focus:b,blur:C}=E(e),g=c(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),w=K(),k=c(()=>e.id||`switch-${w}`);function y(){l.value&&(l.value=!1)}return N(()=>{const[S,_]=j(m),[x,Q]=q(e),[P,T]=D(e),r=G();function p(){var o,n;(o=r.value)==null||(n=o.input)==null||n.click()}return t(O,v({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},h.value]},S,x,{id:k.value,focused:V.value}),{...a,default:o=>{let{id:n,isDisabled:A,isReadonly:B,isValid:$}=o;return t(L,v({ref:r},P,{modelValue:u.value,"onUpdate:modelValue":[i=>u.value=i,y],id:n.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:A.value,readonly:B.value,onFocus:b,onBlur:C},_),{...a,default:()=>t("div",{class:"v-switch__track",onClick:p},null),input:i=>{let{textColorClasses:I,textColorStyles:F}=i;return t("div",{class:["v-switch__thumb",I.value],style:F.value},[e.loading&&t(H,{name:"v-switch",active:!0,color:$.value===!1?void 0:g.value},{default:s=>a.loader?a.loader(s):t(J,{active:s.isActive,color:s.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{Y as V};
