import{d as L,r as p,b as m,e as g,f as B,w as l,j as u,i as e,I as M,ah as Q,l as y,t as _,ag as G,u as H,a6 as J,o as K,c as W,k as z,g as X,aw as Y,aD as Z,E as x,aO as ee,an as w,ae,ab as le}from"./index-b174b04d.js";import{_ as te,$ as se,a0 as oe,a1 as ne,a2 as N,M as de,a3 as ie}from"./config-7955ded2.js";import{a as ue,_ as re,b as pe}from"./QueryItem.vue_vue_type_script_setup_true_lang-8fda4d9a.js";import{_ as me}from"./ColumnList.vue_vue_type_script_lang-d04d1203.js";import{_ as ce}from"./ListMove.vue_vue_type_script_setup_true_lang-e4848f6d.js";import{_ as be}from"./DialogForm.vue_vue_type_script_setup_true_lang-845eff86.js";const fe={name:"DictTypeForm"},ve=L({...fe,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(q){const C=p(),o=p({}),c=d=>d.id>=100;return(d,t)=>{const b=m("el-input"),f=m("el-form-item"),V=m("el-radio"),k=m("el-radio-group"),S=m("el-switch");return g(),B(be,{values:o.value,"onUpdate:values":t[5]||(t[5]=r=>o.value=r),name:d.$t("menu.config.dictType"),"query-bean":u(se),"create-bean":u(oe),"update-bean":u(ne),"delete-bean":u(N),"bean-id":q.beanId,"bean-ids":q.beanIds,focus:C.value,"init-values":()=>({scope:0}),"to-values":r=>({...r}),"disable-delete":r=>!c(r),perms:"dictType","model-value":q.modelValue,"onUpdate:modelValue":t[6]||(t[6]=r=>d.$emit("update:modelValue",r)),onFinished:t[7]||(t[7]=()=>d.$emit("finished"))},{default:l(({bean:r,isEdit:D})=>[e(f,{prop:"name",label:d.$t("dictType.name"),rules:{required:!0,message:()=>d.$t("v.required")}},{default:l(()=>[e(b,{ref_key:"focus",ref:C,modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.name=s),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(f,{prop:"alias",label:d.$t("dictType.alias"),rules:[{required:!0,message:()=>d.$t("v.required")},{asyncValidator:async(s,I,U)=>{if(I!==r.alias&&await u(te)(I,o.value.scope)){U(d.$t("dictType.error.aliasExist"));return}U()}}]},{default:l(()=>[e(b,{modelValue:o.value.alias,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.alias=s),disabled:D&&!c(o.value),maxlength:"50"},null,8,["modelValue","disabled"])]),_:2},1032,["label","rules"]),e(f,{prop:"remark",label:d.$t("dictType.remark")},{default:l(()=>[e(b,{modelValue:o.value.remark,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.remark=s),type:"textarea",rows:2,maxlength:"255"},null,8,["modelValue"])]),_:1},8,["label"]),e(f,{prop:"scope",label:d.$t("dictType.scope"),rules:{required:!0,message:()=>d.$t("v.required")}},{default:l(()=>[e(k,{modelValue:o.value.scope,"onUpdate:modelValue":t[3]||(t[3]=s=>o.value.scope=s),disabled:D&&!c(o.value)},{default:l(()=>[(g(),M(G,null,Q([0,2],s=>e(V,{key:s,label:s},{default:l(()=>[y(_(d.$t(`dictType.scope.${s}`)),1)]),_:2},1032,["label"])),64))]),_:2},1032,["modelValue","disabled"])]),_:2},1032,["label","rules"]),e(f,{prop:"sys",label:d.$t("dictType.sys")},{default:l(()=>[e(S,{modelValue:o.value.sys,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value.sys=s),disabled:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","to-values","disable-delete","model-value"])}}}),ye={class:"mb-3"},_e={class:"app-block mt-3"},$e={name:"DictTypeList"},qe=L({...$e,setup(q){const{t:C}=H(),o=p({}),c=p(),d=p(),t=p([]),b=p([]),f=p(!1),V=p(!1),k=p(),S=J(()=>t.value.map(a=>a.id)),r=p(!1),D=a=>a.id>=100,s=async()=>{f.value=!0;try{t.value=await de({...Y(o.value),Q_OrderBy:c.value}),r.value=Object.values(o.value).filter(a=>a!==void 0&&a!=="").length>0||c.value!==void 0}finally{f.value=!1}};K(s);const I=({column:a,prop:i,order:v})=>{var $;i&&v?c.value=(($=a.sortBy)!=null?$:i)+(v==="descending"?"_desc":""):c.value=void 0,s()},U=()=>s(),O=()=>{d.value.clearSort(),Z(o.value),c.value=void 0,s()},A=()=>{k.value=void 0,V.value=!0},E=a=>{k.value=a,V.value=!0},F=async a=>{await N(a),s(),x.success(C("success"))},R=async(a,i)=>{const v=ee(a,t.value,i);await ie(v.map($=>$.id))};return(a,i)=>{const v=m("el-button"),$=m("el-popconfirm"),T=m("el-table-column"),h=m("el-tag"),j=m("el-table"),P=W("loading");return g(),M("div",null,[z("div",ye,[e(u(re),{params:o.value,onSearch:U,onReset:O},{default:l(()=>[e(u(ue),{label:a.$t("dictType.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),z("div",null,[e(v,{type:"primary",disabled:u(w)("dictType:create"),icon:u(ae),onClick:i[0]||(i[0]=()=>A())},{default:l(()=>[y(_(a.$t("add")),1)]),_:1},8,["disabled","icon"]),e($,{title:a.$t("confirmDelete"),onConfirm:i[1]||(i[1]=()=>F(b.value.map(n=>n.id)))},{reference:l(()=>[e(v,{disabled:b.value.length<=0||u(w)("dictType:delete"),icon:u(le)},{default:l(()=>[y(_(a.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(ce,{disabled:b.value.length<=0||r.value||u(w)("org:update"),class:"ml-2",onMove:i[2]||(i[2]=n=>R(b.value,n))},null,8,["disabled"]),e(u(pe),{name:"dictType",class:"ml-2"})]),z("div",_e,[X((g(),B(j,{ref_key:"table",ref:d,data:t.value,onSelectionChange:i[3]||(i[3]=n=>b.value=n),onRowDblclick:i[4]||(i[4]=n=>E(n.id)),onSortChange:I},{default:l(()=>[e(u(me),{name:"dictType"},{default:l(()=>[e(T,{type:"selection",selectable:D,width:"45"}),e(T,{property:"id",label:"ID",width:"80",sortable:"custom"}),e(T,{property:"name",label:a.$t("dictType.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(T,{property:"alias",label:a.$t("dictType.alias"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(T,{property:"scope",label:a.$t("dictType.scope"),sortable:"custom"},{default:l(({row:n})=>[n.scope===2?(g(),B(h,{key:0,type:"success",size:"small"},{default:l(()=>[y(_(a.$t(`block.scope.${n.scope}`)),1)]),_:2},1024)):(g(),B(h,{key:1,type:"info",size:"small"},{default:l(()=>[y(_(a.$t(`block.scope.${n.scope}`)),1)]),_:2},1024))]),_:1},8,["label"]),e(T,{property:"sys",label:a.$t("dictType.sys"),sortable:"custom"},{default:l(({row:n})=>[e(h,{type:n.sys?"success":"info",size:"small"},{default:l(()=>[y(_(a.$t(n.sys?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(T,{label:a.$t("table.action")},{default:l(({row:n})=>[e(v,{type:"primary",disabled:u(w)("dictType:update"),size:"small",link:"",onClick:()=>E(n.id)},{default:l(()=>[y(_(a.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e($,{title:a.$t("confirmDelete"),onConfirm:()=>F([n.id])},{reference:l(()=>[e(v,{type:"primary",disabled:!D(n)||u(w)("dictType:delete"),size:"small",link:""},{default:l(()=>[y(_(a.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[P,f.value]])]),e(ve,{modelValue:V.value,"onUpdate:modelValue":i[5]||(i[5]=n=>V.value=n),"bean-id":k.value,"bean-ids":S.value,onFinished:s},null,8,["modelValue","bean-id","bean-ids"])])}}});export{qe as default};
