import{b2 as F,b3 as L,d as I,p as U,r as w,v as x,b,e as f,I as V,i as _,w as g,j as s,b4 as z,l as O,t as q,k as Q,ag as j,ah as B,u as D,a6 as T,b5 as G,b6 as H,ae as K,aQ as W,f as h,aF as X,m as Y,b7 as Z,aS as P,b1 as ee}from"./index-53093fce.js";const R="ujcms_column_settings";function te(){const t=localStorage.getItem(R);return t?JSON.parse(t):{}}const N=F({}),$=F(te());function le(){localStorage.setItem(R,JSON.stringify($))}const ne=t=>(N[t]||(N[t]=[]),L(N,t)),A=(t,d)=>{for(let l=0,o=t.length;l<o;)d.findIndex(m=>m.title===t[l].title)===-1?(t.splice(l,1),o-=1):l+=1;return d.forEach(l=>{t.findIndex(o=>o.title===l.title)===-1&&t.push({...l})}),t},ae=(t,d)=>{N[t]=d,$[t]||($[t]=[]);const l=$[t];A(l,d)},J=t=>($[t]||($[t]=[]),L($,t)),oe={class:"inline-flex align-middle"},se=["divided"],ce=I({__name:"ColumnSetting",props:{name:{type:String,required:!0}},setup(t){const d=t,{name:l}=U(d),o=J(l.value),m=ne(l.value),i=w(!1);x(o,()=>le(),{deep:!0});const k=()=>{o.value=A([],m.value)};return(u,p)=>{const r=b("el-icon"),y=b("el-tooltip"),e=b("el-button"),n=b("el-checkbox"),c=b("el-drawer");return f(),V("div",oe,[_(y,{content:u.$t("table.columnsSetting"),placement:"top"},{default:g(()=>[_(r,{class:"cursor-pointer text-lg text-gray-regular",onClick:p[0]||(p[0]=()=>i.value=!0)},{default:g(()=>[_(s(z))]),_:1})]),_:1},8,["content"]),_(c,{modelValue:i.value,"onUpdate:modelValue":p[1]||(p[1]=v=>i.value=v),title:u.$t("table.columnsSetting"),size:375},{default:g(()=>[_(e,{class:"mb-1",round:"",onClick:k},{default:g(()=>[O(q(u.$t("reset")),1)]),_:1}),Q("ul",null,[(f(!0),V(j,null,B(s(o),(v,a)=>(f(),V("li",{key:v.title,divided:a===0},[_(n,{modelValue:v.display,"onUpdate:modelValue":E=>v.display=E},{default:g(()=>[O(q(v.title),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])],8,se))),128))])]),_:1},8,["modelValue","title"])])}}}),me=I({name:"ColumnList",props:{name:{type:String,required:!0}},setup(t,{slots:d}){var r,y;const{name:l}=U(t),{t:o}=D(),m=(y=(r=d.default)==null?void 0:r.call(d))!=null?y:[],i=e=>(e==null?void 0:e.type)==="selection"?o("table.selection"):e==null?void 0:e.label,k=m.map(e=>{var n;return{title:i(e.props),display:((n=e.props)==null?void 0:n.display)!=="none"}});ae(l.value,k);const u=J(l.value);return{columns:T(()=>m.filter(e=>{const n=u.value.find(c=>i(e.props)===c.title);return!n||n.display}).map(e=>({...e,key:i(e.props)})).sort((e,n)=>{let c=u.value.findIndex(a=>a.title===i(e));c<0&&(c=m.findIndex(a=>i(a)===i(e)));let v=u.value.findIndex(a=>a.title===i(n));return v<0&&(v=m.findIndex(a=>i(a)===i(n))),c-v}))}},render(){return this.columns}}),ue=I({name:"QueryInput",props:{inputs:{type:Array,required:!0},name:{type:String,required:!0}},setup(t){const{inputs:d,name:l}=U(t);return()=>d.value.find(o=>o.props.name===l.value)}}),re={class:"flex"},ie={class:"space-y-1"},fe=I({__name:"QueryForm",props:{params:{type:Object,required:!0}},emits:{search:null,reset:null},setup(t){const d=t,{params:l}=U(d),o=G();H("params",l);const m=w([]),i=T(()=>{var e,n;return(n=(e=o.default)==null?void 0:e.call(o))!=null?n:[]});m.value=i.value.map(e=>{var n,c;return{label:(n=e.props)==null?void 0:n.label,name:(c=e.props)==null?void 0:c.name}});const[k]=m.value,u=w([k.name]),p=T(()=>m.value.filter(e=>!u.value.includes(e.name))),r=()=>{Object.keys(l.value).forEach(e=>{!u.value.includes(e)&&u.value.findIndex(n=>n.split(",").includes(e))===-1&&delete l.value[e]})},y=e=>{if(e===0){const[n]=p.value;u.value[u.value.length]=n.name}else u.value.splice(e,1),r()};return(e,n)=>{const c=b("el-button"),v=b("el-option"),a=b("el-select"),E=b("el-button-group");return f(),V("form",re,[Q("div",ie,[(f(!0),V(j,null,B(u.value,(M,C)=>(f(),V("div",{key:M,class:"flex"},[_(c,{icon:C==0?s(K):s(W),disabled:C<=0&&p.value.length<=0,circle:"",onClick:()=>y(C)},null,8,["icon","disabled","onClick"]),_(a,{modelValue:u.value[C],"onUpdate:modelValue":S=>u.value[C]=S,class:"w-36",onChange:n[0]||(n[0]=()=>r())},{default:g(()=>[(f(!0),V(j,null,B(m.value.filter(S=>S.name===u.value[C]||p.value.includes(S)),S=>(f(),h(v,{key:S.name,label:S.label,value:S.name},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]),_(ue,{inputs:i.value,name:u.value[C]},null,8,["inputs","name"])]))),128))]),Q("div",null,[_(E,{class:"ml-2"},{default:g(()=>[_(c,{"native-type":"submit",icon:s(X),onClick:n[1]||(n[1]=Y(()=>e.$emit("search"),["prevent"]))},{default:g(()=>[O(q(e.$t("search")),1)]),_:1},8,["icon"]),_(c,{icon:s(Z),onClick:n[2]||(n[2]=()=>e.$emit("reset"))},{default:g(()=>[O(q(e.$t("reset")),1)]),_:1},8,["icon"])]),_:1})])])}}}),de={key:0,class:"inline-block"},ve=I({__name:"QueryItem",props:{label:{type:String,required:!0},name:{type:String,required:!0},type:{type:String,default:null},options:{type:Object,default:null}},setup(t){const d=t,l=P("params"),{name:o}=U(d),[m,i]=o.value.split(","),k=w(m),u=w(i);return(p,r)=>{const y=b("el-input-number"),e=b("el-date-picker"),n=b("el-option"),c=b("el-select"),v=b("el-input");return ee(p.$slots,"default",{},()=>[t.type==="number"?(f(),V("div",de,[_(y,{modelValue:s(l)[k.value],"onUpdate:modelValue":r[0]||(r[0]=a=>s(l)[k.value]=a),placeholder:p.$t("begin.number"),class:"w-48"},null,8,["modelValue","placeholder"]),_(y,{modelValue:s(l)[u.value],"onUpdate:modelValue":r[1]||(r[1]=a=>s(l)[u.value]=a),placeholder:p.$t("end.number"),class:"w-48"},null,8,["modelValue","placeholder"])])):t.type==="date"?(f(),h(e,{key:1,modelValue:s(l)[s(o)],"onUpdate:modelValue":r[2]||(r[2]=a=>s(l)[s(o)]=a),type:"daterange","start-placeholder":p.$t("begin.date"),"end-placeholder":p.$t("end.date"),class:"w-96"},null,8,["modelValue","start-placeholder","end-placeholder"])):t.type==="datetime"?(f(),h(e,{key:2,modelValue:s(l)[s(o)],"onUpdate:modelValue":r[3]||(r[3]=a=>s(l)[s(o)]=a),type:"datetimerange","start-placeholder":p.$t("begin.date"),"end-placeholder":p.$t("end.date"),class:"w-96"},null,8,["modelValue","start-placeholder","end-placeholder"])):t.options?(f(),h(c,{key:3,modelValue:s(l)[s(o)],"onUpdate:modelValue":r[4]||(r[4]=a=>s(l)[s(o)]=a),multiple:"",class:"w-96"},{default:g(()=>[(f(!0),V(j,null,B(t.options,a=>(f(),h(n,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):(f(),h(v,{key:4,modelValue:s(l)[s(o)],"onUpdate:modelValue":r[5]||(r[5]=a=>s(l)[s(o)]=a),class:"w-96"},null,8,["modelValue"]))])}}});export{fe as _,ve as a,ce as b,me as c};
