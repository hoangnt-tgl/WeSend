import{K as J,R as O,bG as U,ac as d,M as S,p as n,a2 as p,a3 as Y,a1 as q,ag as Q,bh as W,bH as X,a8 as Z,bI as ee,aa as te,bj as ne,k as V,bk as ae,bl as le,bJ as ue,bK as ie,a4 as C,az as oe,F as b,bL as se,bo as re,aL as ce,bM as de,a0 as fe}from"./index.22347c68.js";import{f as ve}from"./forwardRefs.c003b6b8.js";const me=J({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...O({transition:{component:U}})},setup(e,x){let{slots:u}=x;const o=d(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return S(()=>n(q,{transition:e.transition},{default:()=>[p(n("div",{class:"v-counter"},[u.default?u.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[Y,e.active]])]})),{}}}),xe=["color","file","time","date","datetime-local","week","month"],ge=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...W(),...X()},"v-text-field"),ke=Z()({name:"VTextField",directives:{Intersect:ee},inheritAttrs:!1,props:ge(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,x){let{attrs:u,emit:o,slots:a}=x;const l=te(e,"modelValue"),{isFocused:i,focus:T,blur:$}=ne(e),B=d(()=>{var t;return typeof e.counterValue=="function"?e.counterValue(l.value):((t=l.value)!=null?t:"").toString().length}),_=d(()=>{if(u.maxlength)return u.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(t,k){var r,f;!e.autofocus||!t||(r=k[0].target)==null||(f=r.focus)==null||f.call(r)}const h=V(),y=V(),s=V(),N=d(()=>xe.includes(e.type)||e.persistentPlaceholder||i.value),R=d(()=>e.messages.length?e.messages:i.value||e.persistentHint?e.hint:"");function g(){if(s.value!==document.activeElement){var t;(t=s.value)==null||t.focus()}i.value||T()}function w(t){g(),o("click:control",t)}function A(t){t.stopPropagation(),g(),ce(()=>{l.value=null,de(e["onClick:clear"],t)})}function M(t){l.value=t.target.value}return S(()=>{const t=!!(a.counter||e.counter||e.counterValue),k=!!(t||a.details),[r,f]=ae(u),[{modelValue:Ve,...H}]=le(e),[j]=ue(e);return n(re,C({ref:h,modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},r,H,{focused:i.value,messages:R.value}),{...a,default:c=>{let{id:v,isDisabled:z,isDirty:F,isReadonly:E,isValid:K}=c;return n(ie,C({ref:y,onMousedown:m=>{m.target!==s.value&&m.preventDefault()},"onClick:control":w,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},j,{id:v.value,active:N.value||F.value,dirty:F.value||e.dirty,focused:i.value,error:K.value===!1}),{...a,default:m=>{let{props:{class:P,...L}}=m;const I=p(n("input",C({ref:s,value:l.value,onInput:M,autofocus:e.autofocus,readonly:E.value,disabled:z.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:g,onBlur:$},L,f),null),[[oe("intersect"),{handler:D},null,{once:!0}]]);return n(b,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),a.default?n("div",{class:P,onClick:G=>o("click:input",G),"data-no-activator":""},[a.default(),I]):se(I,{class:P}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:k?c=>{var v;return n(b,null,[(v=a.details)==null?void 0:v.call(a,c),t&&n(b,null,[n("span",null,null),n(me,{active:e.persistentCounter||i.value,value:B.value,max:_.value},a.counter)])])}:void 0})}),ve({},h,y,s)}});function he(e){return fe(e,Object.keys(ke.props))}export{ke as V,he as f,ge as m};
