import{P as A,U as P,bK as H,a9 as K,a4 as q,S as _,G as x,H as $,I as u,K as J,an as N,X as r,M as S,p as v,D as X,a1 as Z,k as B,bw as G,Z as z,aj as Q,B as W,O as k,bL as Y,J as p,af as ee,bM as O,al as le,aH as w,a0 as te,bs as ne,bv as ae,bx as oe,bB as ue}from"./index.91ca553b.js";const R=Symbol.for("vuetify:selection-control-group"),T=A({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:P,trueIcon:P,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:H},...K(),...q()},"v-selection-control-group");_({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...T()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:s}=a;const l=x(e,"modelValue"),t=$(),i=u(()=>e.id||`v-selection-control-group-${t}`),n=u(()=>e.name||i.value);return J(R,{modelValue:l}),N({[e.defaultsTarget]:{color:r(e,"color"),disabled:r(e,"disabled"),density:r(e,"density"),error:r(e,"error"),inline:r(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:r(e,"falseIcon"),trueIcon:r(e,"trueIcon"),readonly:r(e,"readonly"),ripple:r(e,"ripple"),type:r(e,"type"),valueComparator:r(e,"valueComparator")}}),S(()=>{var o;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?i.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(o=s.default)==null?void 0:o.call(s)])}),{}}});const U=A({label:String,trueValue:null,falseValue:null,value:null,...T()},"v-selection-control");function ie(e){const a=p(R,void 0),{densityClasses:s}=ee(e),l=x(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=u(()=>e.falseValue!==void 0?e.falseValue:!1),n=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),o=u({get(){const c=a?a.modelValue.value:l.value;return n.value?c.some(d=>e.valueComparator(d,t.value)):e.valueComparator(c,t.value)},set(c){if(e.readonly)return;const d=c?t.value:i.value;let m=d;n.value&&(m=c?[...O(l.value),d]:O(l.value).filter(C=>!e.valueComparator(C,t.value))),a?a.modelValue.value=m:l.value=m}}),{textColorClasses:f,textColorStyles:V}=le(u(()=>o.value&&!e.error&&!e.disabled?e.color:void 0)),y=u(()=>o.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:s,trueValue:t,falseValue:i,model:o,textColorClasses:f,textColorStyles:V,icon:y}}const ce=X()({name:"VSelectionControl",directives:{Ripple:Z},inheritAttrs:!1,props:U(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:s,slots:l}=a;const{densityClasses:t,icon:i,model:n,textColorClasses:o,textColorStyles:f,trueValue:V}=ie(e),y=$(),c=u(()=>e.id||`input-${y}`),d=B(!1),m=B(!1),C=B();function I(b){d.value=!0,(!w||w&&b.target.matches(":focus-visible"))&&(m.value=!0)}function h(){d.value=!1,m.value=!1}function g(b){n.value=b.target.checked}return S(()=>{var b,F;const D=l.label?l.label({label:e.label,props:{for:c.value}}):e.label,[L,E]=G(s);return v("div",k({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":d.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},t.value]},L),[v("div",{class:["v-selection-control__wrapper",o.value],style:f.value},[(b=l.default)==null?void 0:b.call(l),z(v("div",{class:["v-selection-control__input"]},[i.value&&v(W,{key:"icon",icon:i.value},null),v("input",k({ref:C,checked:n.value,disabled:e.disabled,id:c.value,onBlur:h,onFocus:I,onInput:g,"aria-readonly":e.readonly,type:e.type,value:V.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},E),null),(F=l.input)==null?void 0:F.call(l,{model:n,textColorClasses:o,textColorStyles:f,props:{onFocus:I,onBlur:h,id:c.value}})]),[[Q("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),D&&v(Y,{for:c.value,clickable:!0},{default:()=>[D]})])}),{isFocused:d,input:C}}}),M=A({indeterminate:Boolean,indeterminateIcon:{type:P,default:"$checkboxIndeterminate"},...U({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),j=_({name:"VCheckboxBtn",props:M(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:s}=a;const l=x(e,"indeterminate"),t=x(e,"modelValue");function i(f){l.value&&(l.value=!1)}const n=u(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),o=u(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return S(()=>v(ce,k(e,{modelValue:t.value,"onUpdate:modelValue":[f=>t.value=f,i],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:n.value,trueIcon:o.value,"aria-checked":e.indeterminate?"mixed":void 0}),s)),{}}});function re(e){return te(e,Object.keys(j.props))}const de=_({name:"VCheckbox",inheritAttrs:!1,props:{...ne(),...M()},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:s,slots:l}=a;const{isFocused:t,focus:i,blur:n}=ae(e),o=$(),f=u(()=>e.id||`checkbox-${o}`);return S(()=>{const[V,y]=G(s),[c,d]=oe(e),[m,C]=re(e);return v(ue,k({class:"v-checkbox"},V,c,{id:f.value,focused:t.value}),{...l,default:I=>{let{id:h,isDisabled:g,isReadonly:b}=I;return v(j,k(m,{id:h.value,disabled:g.value,readonly:b.value},y,{onFocus:i,onBlur:n}),l)}})}),{}}});export{de as V};
