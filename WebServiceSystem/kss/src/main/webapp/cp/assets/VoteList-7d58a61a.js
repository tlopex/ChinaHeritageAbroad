import{d as P,r as v,b as r,e as M,f as j,w as l,j as d,i as e,as as _,I as F,ah as K,ag as W,k as b,t as g,ay as X,ae as G,aQ as Z,u as x,a6 as ee,o as le,c as te,g as ae,aw as oe,aD as ne,E as se,l as y,an as B,ab as de,U as H,aB as ue,aC as ie}from"./index-53093fce.js";import{f as re,g as me,h as pe,i as O,j as ve}from"./interaction-a73f4759.js";import{a as z,_ as be,b as fe,c as _e}from"./QueryItem.vue_vue_type_script_setup_true_lang-94058d51.js";import{d as ce}from"./vuedraggable.umd-6a21d6e3.js";import{_ as ge}from"./DialogForm.vue_vue_type_script_setup_true_lang-8e1e8f21.js";import"./sortable.esm-c0d7cc14.js";const ye={class:"w-full table-auto border-slate-400"},Ve=b("th",{class:"w-32"},null,-1),De={class:""},$e={class:"w-40"},we={class:"p-2"},ke={class:"p-2"},Ce={class:"p-2"},Ue={name:"VoteForm"},he=P({...Ue,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(Y){const E=v(),a=v({});let $=-1;const U=m=>{$-=1,a.value.options.splice(m,0,{id:$,count:0})};return(m,n)=>{const k=r("el-input"),i=r("el-form-item"),p=r("el-col"),V=r("el-date-picker"),C=r("el-option"),h=r("el-select"),I=r("el-switch"),f=r("el-input-number"),L=r("el-icon"),Q=r("el-button"),T=r("el-row");return M(),j(ge,{values:a.value,"onUpdate:values":n[12]||(n[12]=t=>a.value=t),name:m.$t("menu.interaction.vote"),"query-bean":d(re),"create-bean":d(me),"update-bean":d(pe),"delete-bean":d(O),"bean-id":Y.beanId,"bean-ids":Y.beanIds,focus:E.value,"init-values":()=>({maxChoice:0,mode:1,interval:0,total:0,enabled:!0,options:[{id:-1,count:0}]}),"to-values":t=>({...t}),"model-value":Y.modelValue,perms:"vote",large:"","onUpdate:modelValue":n[13]||(n[13]=t=>m.$emit("update:modelValue",t)),onFinished:n[14]||(n[14]=()=>m.$emit("finished"))},{default:l(({})=>[e(T,null,{default:l(()=>[e(p,{span:24},{default:l(()=>[e(i,{prop:"title",rules:{required:!0,message:()=>m.$t("v.required")}},{label:l(()=>[e(_,{message:"vote.title"})]),default:l(()=>[e(k,{ref_key:"focus",ref:E,modelValue:a.value.title,"onUpdate:modelValue":n[0]||(n[0]=t=>a.value.title=t),maxlength:"1000"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(p,{span:24},{default:l(()=>[e(i,{prop:"description"},{label:l(()=>[e(_,{message:"vote.description"})]),default:l(()=>[e(k,{modelValue:a.value.description,"onUpdate:modelValue":n[1]||(n[1]=t=>a.value.description=t),type:"textarea",rows:3,maxlength:"1000"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"beginDate"},{label:l(()=>[e(_,{message:"vote.beginDate",help:""})]),default:l(()=>[e(V,{modelValue:a.value.beginDate,"onUpdate:modelValue":n[2]||(n[2]=t=>a.value.beginDate=t),type:"datetime",class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"endDate"},{label:l(()=>[e(_,{message:"vote.endDate",help:""})]),default:l(()=>[e(V,{modelValue:a.value.endDate,"onUpdate:modelValue":n[3]||(n[3]=t=>a.value.endDate=t),type:"datetime",class:"w-full"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"orderDate"},{label:l(()=>[e(_,{message:"vote.orderDate",help:""})]),default:l(()=>[e(V,{modelValue:a.value.orderDate,"onUpdate:modelValue":n[4]||(n[4]=t=>a.value.orderDate=t),type:"datetime",class:"w-full",onChange:n[5]||(n[5]=t=>{t===null&&(a.value.orderDate=void 0)})},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"created"},{label:l(()=>[e(_,{message:"vote.created"})]),default:l(()=>[e(V,{modelValue:a.value.created,"onUpdate:modelValue":n[6]||(n[6]=t=>a.value.created=t),type:"datetime",class:"w-full",disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:24},{default:l(()=>[e(i,{prop:"mode",rules:{required:!0,message:()=>m.$t("v.required")}},{label:l(()=>[e(_,{message:"vote.mode",help:""})]),default:l(()=>[e(h,{modelValue:a.value.mode,"onUpdate:modelValue":n[7]||(n[7]=t=>a.value.mode=t),class:"w-full"},{default:l(()=>[(M(),F(W,null,K([1,2,3],t=>e(C,{key:t,value:t,label:m.$t(`vote.mode.${t}`)},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"multiple"},{label:l(()=>[e(_,{message:"vote.multiple",help:""})]),default:l(()=>[e(I,{modelValue:a.value.multiple,"onUpdate:modelValue":n[8]||(n[8]=t=>a.value.multiple=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"interval",rules:{required:!0,message:()=>m.$t("v.required")}},{label:l(()=>[e(_,{message:"vote.interval",help:""})]),default:l(()=>[e(f,{modelValue:a.value.interval,"onUpdate:modelValue":n[9]||(n[9]=t=>a.value.interval=t),min:0,max:32767,class:"w-48"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"enabled"},{label:l(()=>[e(_,{message:"vote.enabled"})]),default:l(()=>[e(I,{modelValue:a.value.enabled,"onUpdate:modelValue":n[10]||(n[10]=t=>a.value.enabled=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:l(()=>[e(i,{prop:"times"},{label:l(()=>[e(_,{message:"vote.times"})]),default:l(()=>[e(f,{"model-value":a.value.times,disabled:"",class:"w-48"},null,8,["model-value"])]),_:1})]),_:1}),e(p,{span:24},{default:l(()=>[e(i,null,{label:l(()=>[e(_,{message:"vote.options"})]),default:l(()=>[b("table",ye,[b("thead",null,[b("tr",null,[Ve,b("th",De,g(m.$t("voteOption.title")),1),b("th",$e,g(m.$t("voteOption.count")),1)])]),e(d(ce),{modelValue:a.value.options,"onUpdate:modelValue":n[11]||(n[11]=t=>a.value.options=t),tag:"tbody",handle:".draggable-handle","item-key":"id"},{item:l(({element:t,index:S})=>[b("tr",null,[b("td",we,[e(L,{class:"text-2xl align-middle cursor-move draggable-handle"},{default:l(()=>[e(d(X))]),_:1}),e(Q,{class:"ml-3",icon:d(G),circle:"",onClick:()=>U(S+1)},null,8,["icon","onClick"]),e(Q,{disabled:a.value.options.length<=1,icon:d(Z),circle:"",onClick:()=>a.value.options=a.value.options.filter(D=>D.id!==t.id)},null,8,["disabled","icon","onClick"])]),b("td",ke,[e(i,{prop:`options.${S}.title`,rules:{required:!0,message:()=>m.$t("v.required")}},{default:l(()=>[e(k,{modelValue:t.title,"onUpdate:modelValue":D=>t.title=D,maxlength:"1000"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),b("td",Ce,[e(f,{modelValue:t.count,"onUpdate:modelValue":D=>t.count=D,min:0,max:2147483647,class:"w-48"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:1},8,["modelValue"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","to-values","model-value"])}}}),Se={class:"mb-3"},qe={class:"mt-3 app-block"},ze={name:"VoteList"},Le=P({...ze,setup(Y){const{t:E}=x(),a=v({}),$=v(),U=v(1),m=v(10),n=v(0),k=v(),i=v([]),p=v([]),V=v(!1),C=v(!1),h=v(),I=ee(()=>i.value.map(o=>o.id)),f=async()=>{V.value=!0;try{const{content:o,totalElements:u}=await ve({...oe(a.value),Q_OrderBy:$.value,page:U.value,pageSize:m.value});i.value=o,n.value=u}finally{V.value=!1}};le(f);const L=({column:o,prop:u,order:w})=>{var q;u&&w?$.value=((q=o.sortBy)!=null?q:u)+(w==="descending"?"_desc":""):$.value=void 0,f()},Q=()=>f(),T=()=>{k.value.clearSort(),ne(a.value),$.value=void 0,f()},t=()=>{h.value=void 0,C.value=!0},S=o=>{h.value=o,C.value=!0},D=async o=>{await O(o),f(),se.success(E("success"))};return(o,u)=>{const w=r("el-button"),q=r("el-popconfirm"),c=r("el-table-column"),N=r("el-tag"),R=r("el-table"),A=r("el-pagination"),J=te("loading");return M(),F("div",null,[b("div",Se,[e(d(be),{params:a.value,onSearch:Q,onReset:u[0]||(u[0]=()=>T())},{default:l(()=>[e(d(z),{label:o.$t("vote.title"),name:"Q_Contains_title"},null,8,["label"]),e(d(z),{label:o.$t("vote.beginDate"),name:"Q_GE_beginDate_DateTime,Q_LE_beginDate_DateTime",type:"datetime"},null,8,["label"]),e(d(z),{label:o.$t("vote.endDate"),name:"Q_GE_endDate_DateTime,Q_LE_endDate_DateTime",type:"datetime"},null,8,["label"]),e(d(z),{label:o.$t("vote.orderDate"),name:"Q_GE_orderDate_DateTime,Q_LE_orderDate_DateTime",type:"datetime"},null,8,["label"]),e(d(z),{label:o.$t("vote.mode"),name:"Q_In_mode_Short",options:[1,2,3].map(s=>({label:o.$t(`vote.mode.${s}`),value:s}))},null,8,["label","options"])]),_:1},8,["params"])]),b("div",null,[e(w,{type:"primary",disabled:d(B)("vote:create"),icon:d(G),onClick:u[1]||(u[1]=()=>t())},{default:l(()=>[y(g(o.$t("add")),1)]),_:1},8,["disabled","icon"]),e(q,{title:o.$t("confirmDelete"),onConfirm:u[2]||(u[2]=()=>D(p.value.map(s=>s.id)))},{reference:l(()=>[e(w,{disabled:p.value.length<=0||d(B)("vote:delete"),icon:d(de)},{default:l(()=>[y(g(o.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(d(fe),{name:"vote",class:"ml-2"})]),b("div",qe,[ae((M(),j(R,{ref_key:"table",ref:k,data:i.value,onSelectionChange:u[3]||(u[3]=s=>p.value=s),onRowDblclick:u[4]||(u[4]=s=>S(s.id)),onSortChange:L},{default:l(()=>[e(d(_e),{name:"vote"},{default:l(()=>[e(c,{type:"selection",width:"38"}),e(c,{property:"id",label:"ID",width:"80",sortable:"custom"}),e(c,{property:"title",label:o.$t("vote.title"),"min-width":"280",sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(c,{property:"beginDate",label:o.$t("vote.beginDate"),"min-width":"120",sortable:"custom",display:"none","show-overflow-tooltip":""},{default:l(({row:s})=>[y(g(s.beginDate!=null?d(H)(s.beginDate).format("YYYY-MM-DD HH:mm"):""),1)]),_:1},8,["label"]),e(c,{property:"endDate",label:o.$t("vote.endDate"),"min-width":"120",sortable:"custom",display:"none","show-overflow-tooltip":""},{default:l(({row:s})=>[y(g(s.endDate!=null?d(H)(s.endDate).format("YYYY-MM-DD HH:mm"):""),1)]),_:1},8,["label"]),e(c,{property:"times",label:o.$t("vote.times"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(c,{property:"mode",label:o.$t("vote.mode"),sortable:"custom","show-overflow-tooltip":"",formatter:s=>o.$t(`vote.mode.${s.mode}`)},null,8,["label","formatter"]),e(c,{property:"multiple",label:o.$t("vote.multiple"),sortable:"custom","show-overflow-tooltip":""},{default:l(({row:s})=>[e(N,{type:s.multiple?"success":"info",size:"small"},{default:l(()=>[y(g(o.$t(s.multiple?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(c,{property:"enabled",label:o.$t("vote.enabled"),"min-width":"100",sortable:"custom","show-overflow-tooltip":""},{default:l(({row:s})=>[e(N,{type:s.enabled?"success":"info",size:"small"},{default:l(()=>[y(g(o.$t(s.enabled?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(c,{property:"orderDate",label:o.$t("vote.orderDate"),"min-width":"120",sortable:"custom",display:"none","show-overflow-tooltip":""},{default:l(({row:s})=>[y(g(d(H)(s.orderDate).format("YYYY-MM-DD HH:mm:ss")),1)]),_:1},8,["label"]),e(c,{label:o.$t("table.action")},{default:l(({row:s})=>[e(w,{type:"primary",disabled:d(B)("vote:update"),size:"small",link:"",onClick:()=>S(s.id)},{default:l(()=>[y(g(o.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(q,{title:o.$t("confirmDelete"),onConfirm:()=>D([s.id])},{reference:l(()=>[e(w,{type:"primary",disabled:d(B)("vote:delete"),size:"small",link:""},{default:l(()=>[y(g(o.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[J,V.value]]),e(A,{"current-page":U.value,"onUpdate:currentPage":u[5]||(u[5]=s=>U.value=s),pageSize:m.value,"onUpdate:pageSize":u[6]||(u[6]=s=>m.value=s),total:n.value,"page-sizes":d(ue),layout:d(ie),class:"justify-end px-3 py-2",small:"",background:"",onSizeChange:u[7]||(u[7]=()=>f()),onCurrentChange:u[8]||(u[8]=()=>f())},null,8,["current-page","pageSize","total","page-sizes","layout"])]),e(he,{modelValue:C.value,"onUpdate:modelValue":u[9]||(u[9]=s=>C.value=s),"bean-id":h.value,"bean-ids":I.value,onFinished:f},null,8,["modelValue","bean-id","bean-ids"])])}}});export{Le as default};
