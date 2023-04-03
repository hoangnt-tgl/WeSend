import{D as Y,K as z,N as J,an as ee,ao as te,ap as ae,O as le,cc as se,P as oe,L as ne,Q as re,ar as ie,aa as ue,ac as x,at as de,av as ce,aw as me,ax as fe,ay as ve,$ as pe,cd as be,W as ge,Y as _e,U as ye,X as he,p as t,aA as Ve,af as B,H as j,G as w,ce as xe,cf as ke,k as b,M as Pe,d as U,o as C,c as L,F as Ce,a as we,w as s,b as Se,bg as p,m as r,V as I,q as i,bb as Ae,bI as k,v as $,x as Te,c0 as Be,bf as D,b8 as P,a6 as g}from"./index.420a2100.js";import{u as F,m as Le,a as Ie}from"./misc-mask-light.08649be1.js";import{V as $e}from"./VNodeRenderer.b623e23a.js";import{f as De}from"./forwardRefs.c003b6b8.js";import{V as R}from"./VTextField.38367eba.js";import{V as Fe}from"./VCheckbox.7c4480e1.js";import{V as E}from"./VDivider.0c84c83e.js";import{b as M}from"./route-block.3d2a9a4d.js";import"./VCheckboxBtn.ebad76d4.js";import"./VSelectionControl.b08312cf.js";const Re=Y("v-alert-title"),Ee=["success","info","warning","error"],Me=z({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:J,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ee.includes(e)},...ee(),...te(),...ae(),...le(),...se(),...oe(),...ne(),...re(),...ie({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:a}=u;const d=ue(e,"modelValue"),o=x(()=>{var f;if(e.icon!==!1)return e.type?(f=e.icon)!=null?f:`$${e.type}`:e.icon}),c=x(()=>{var f;return{color:(f=e.color)!=null?f:e.type,variant:e.variant}}),{themeClasses:v}=de(e),{colorClasses:_,colorStyles:l,variantClasses:n}=ce(c),{densityClasses:m}=me(e),{dimensionStyles:h}=fe(e),{elevationClasses:V}=ve(e),{locationStyles:y}=pe(e),{positionClasses:q}=be(e),{roundedClasses:O}=ge(e),{textColorClasses:G,textColorStyles:W}=_e(ye(e,"borderColor")),{t:Z}=he(),S=x(()=>({"aria-label":Z(e.closeLabel),onClick(f){d.value=!1}}));return()=>{var f,A;const H=!!(a.prepend||o.value),K=!!(a.title||e.title),Q=!!(e.text||a.text),X=!!(a.close||e.closable);return d.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},v.value,_.value,m.value,V.value,q.value,O.value,n.value],style:[l.value,h.value,y.value],role:"alert"},{default:()=>[Ve(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",G.value],style:W.value},null),H&&t(B,{key:"prepend",defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},{default:()=>[t("div",{class:"v-alert__prepend"},[a.prepend?a.prepend():o.value&&t(j,null,null)])]}),t("div",{class:"v-alert__content"},[K&&t(Re,{key:"title"},{default:()=>[a.title?a.title():e.title]}),Q&&(a.text?a.text():e.text),(f=a.default)==null?void 0:f.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),X&&t(B,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var T;return[t("div",{class:"v-alert__close"},[(T=(A=a.close)==null?void 0:A.call(a,{props:S.value}))!=null?T:t(w,S.value,null)])]}})]})}}}),Ne=z({name:"VForm",props:{...xe()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,u){let{slots:a,emit:d}=u;const o=ke(e),c=b();function v(l){l.preventDefault(),o.reset()}function _(l){const n=l,m=o.validate();n.then=m.then.bind(m),n.catch=m.catch.bind(m),n.finally=m.finally.bind(m),d("submit",n),n.defaultPrevented||m.then(h=>{let{valid:V}=h;if(V){var y;(y=c.value)==null||y.submit()}}),n.preventDefault()}return Pe(()=>{var l;return t("form",{ref:c,class:"v-form",novalidate:!0,onReset:v,onSubmit:_},[(l=a.default)==null?void 0:l.call(a,o)])}),De(o,c)}}),ze=e=>e==null||e===""?!0:!!(Array.isArray(e)&&e.length===0),je=e=>e==null,Ue=e=>Array.isArray(e)&&e.length===0,N=e=>je(e)||Ue(e)||e===!1?"This field is required":!!String(e).trim().length||"This field is required",qe=e=>{if(ze(e))return!0;const u=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every(a=>u.test(String(a)))||"The Email field must be a valid email":u.test(String(e))||"The Email field must be a valid email"},Oe={class:"d-flex justify-center flex-wrap gap-3"},Ge=U({__name:"AuthProvider",setup(e){const u=[{icon:"fa-facebook",color:"#4267b2"},{icon:"fa-google",color:"#dd4b39"},{icon:"fa-twitter",color:"#1da1f2"}];return(a,d)=>(C(),L("div",Oe,[(C(),L(Ce,null,we(u,o=>t(w,{key:o.icon,icon:"",variant:"tonal",size:"38",color:o.color,class:"rounded"},{default:s(()=>[t(j,{size:"18",icon:o.icon},null,8,["icon"])]),_:2},1032,["color"])),64))]))}}),We="/assets/auth-v2-login-illustration-bordered-dark.a595a9b7.png",Ze="/assets/auth-v2-login-illustration-bordered-light.47ee3625.png",He="/assets/auth-v2-login-illustration-dark.0878e8b9.png",Ke="/assets/auth-v2-login-illustration-light.d1fd488d.png",Qe={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},Xe={class:"d-flex align-center justify-center w-100 h-100"},Ye={class:"text-h5 font-weight-semibold mb-1"},Je=r("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),et=r("p",{class:"text-caption mb-2"},[g(" Admin Email: "),r("strong",null,"admin@demo.com"),g(" / Pass: "),r("strong",null,"admin")],-1),tt=r("p",{class:"text-caption mb-0"},[g(" Client Email: "),r("strong",null,"client@demo.com"),g(" / Pass: "),r("strong",null,"client")],-1),at={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},lt=r("a",{class:"text-primary ms-2 mb-1",href:"#"}," Forgot Password? ",-1),st=r("span",null,"New on our platform?",-1),ot=r("a",{class:"text-primary ms-2",href:"#"}," Create an account ",-1),nt=r("span",{class:"mx-4"},"or",-1),rt=U({__name:"login",setup(e){const u=F(Ke,He,Ze,We,!0),a=F(Ie,Le),d=b(!1),o=b("admin@demo.com"),c=b("admin"),v=b(!1);return(_,l)=>(C(),Se(D,{"no-gutters":"",class:"auth-wrapper"},{default:s(()=>[t(p,{lg:"8",class:"d-none d-lg-flex"},{default:s(()=>[r("div",Qe,[r("div",Xe,[t(I,{"max-width":"505",src:i(u),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),t(I,{src:i(a),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),t(p,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:s(()=>[t(Ae,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:s(()=>[t(k,null,{default:s(()=>[t(i($e),{nodes:i($).app.logo,class:"mb-6"},null,8,["nodes"]),r("h5",Ye," Welcome to "+Te(i($).app.title)+"! \u{1F44B}\u{1F3FB} ",1),Je]),_:1}),t(k,null,{default:s(()=>[t(Me,{color:"primary",variant:"tonal"},{default:s(()=>[et,tt]),_:1})]),_:1}),t(k,null,{default:s(()=>[t(Ne,{onSubmit:l[4]||(l[4]=Be(()=>{},["prevent"]))},{default:s(()=>[t(D,null,{default:s(()=>[t(p,{cols:"12"},{default:s(()=>[t(R,{modelValue:i(o),"onUpdate:modelValue":l[0]||(l[0]=n=>P(o)?o.value=n:null),label:"Email",type:"email",rules:[i(N),i(qe)]},null,8,["modelValue","rules"])]),_:1}),t(p,{cols:"12"},{default:s(()=>[t(R,{modelValue:i(c),"onUpdate:modelValue":l[1]||(l[1]=n=>P(c)?c.value=n:null),label:"Password",rules:[i(N)],type:i(d)?"text":"password","append-inner-icon":i(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[2]||(l[2]=n=>d.value=!i(d))},null,8,["modelValue","rules","type","append-inner-icon"]),r("div",at,[t(Fe,{modelValue:i(v),"onUpdate:modelValue":l[3]||(l[3]=n=>P(v)?v.value=n:null),label:"Remember me"},null,8,["modelValue"]),lt]),t(w,{block:"",type:"submit"},{default:s(()=>[g(" Login ")]),_:1})]),_:1}),t(p,{cols:"12",class:"text-center"},{default:s(()=>[st,ot]),_:1}),t(p,{cols:"12",class:"d-flex align-center"},{default:s(()=>[t(E),nt,t(E)]),_:1}),t(p,{cols:"12",class:"text-center"},{default:s(()=>[t(Ge)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});typeof M=="function"&&M(rt);export{rt as default};
