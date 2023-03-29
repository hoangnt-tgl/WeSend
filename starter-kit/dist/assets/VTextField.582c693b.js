import{X,at as Y,bt as j,L as d,P as S,p as n,a1 as T,a2 as q,ax as K,S as O,bu as Q,bv as W,H as Z,bw as ee,J as te,bx as ne,k as C,by as ae,bz as le,bA as ue,bB as ie,R as k,am as oe,F as b,bC as se,bD as re,aG as ce,bE as de}from"./index.9f3abaf8.js";import{f as fe}from"./forwardRefs.c003b6b8.js";const ve=X({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y({transition:{component:j}})},setup(e,x){let{slots:u}=x;const o=d(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return S(()=>n(K,{transition:e.transition},{default:()=>[T(n("div",{class:"v-counter"},[u.default?u.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[q,e.active]])]})),{}}}),me=["color","file","time","date","datetime-local","week","month"],xe=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Q(),...W()},"v-text-field"),ke=Z()({name:"VTextField",directives:{Intersect:ee},inheritAttrs:!1,props:xe(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,x){let{attrs:u,emit:o,slots:a}=x;const l=te(e,"modelValue"),{isFocused:i,focus:$,blur:B}=ne(e),D=d(()=>{var t;return typeof e.counterValue=="function"?e.counterValue(l.value):((t=l.value)!=null?t:"").toString().length}),_=d(()=>{if(u.maxlength)return u.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function p(t,V){var r,f;!e.autofocus||!t||(r=V[0].target)==null||(f=r.focus)==null||f.call(r)}const h=C(),y=C(),s=C(),w=d(()=>me.includes(e.type)||e.persistentPlaceholder||i.value),A=d(()=>e.messages.length?e.messages:i.value||e.persistentHint?e.hint:"");function g(){if(s.value!==document.activeElement){var t;(t=s.value)==null||t.focus()}i.value||$()}function N(t){g(),o("click:control",t)}function R(t){t.stopPropagation(),g(),ce(()=>{l.value=null,de(e["onClick:clear"],t)})}function E(t){l.value=t.target.value}return S(()=>{const t=!!(a.counter||e.counter||e.counterValue),V=!!(t||a.details),[r,f]=ae(u),[{modelValue:ge,...H}]=le(e),[M]=ue(e);return n(re,k({ref:h,modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},r,H,{focused:i.value,messages:A.value}),{...a,default:c=>{let{id:v,isDisabled:z,isDirty:F,isReadonly:G,isValid:J}=c;return n(ie,k({ref:y,onMousedown:m=>{m.target!==s.value&&m.preventDefault()},"onClick:control":N,"onClick:clear":R,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},M,{id:v.value,active:w.value||F.value,dirty:F.value||e.dirty,focused:i.value,error:J.value===!1}),{...a,default:m=>{let{props:{class:P,...L}}=m;const I=T(n("input",k({ref:s,value:l.value,onInput:E,autofocus:e.autofocus,readonly:G.value,disabled:z.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:g,onBlur:B},L,f),null),[[oe("intersect"),{handler:p},null,{once:!0}]]);return n(b,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),a.default?n("div",{class:P,onClick:U=>o("click:input",U),"data-no-activator":""},[a.default(),I]):se(I,{class:P}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:V?c=>{var v;return n(b,null,[(v=a.details)==null?void 0:v.call(a,c),t&&n(b,null,[n("span",null,null),n(ve,{active:e.persistentCounter||i.value,value:D.value,max:_.value},a.counter)])])}:void 0})}),fe({},h,y,s)}});export{ke as V};