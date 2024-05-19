import{d as te,u as oe,r as i,a6 as V,v as ne,o as se,b as d,c as ie,e as f,f as I,w as o,i as a,I as de,ah as ce,ag as me,k as D,j as n,an as p,ae as re,l as $,t as C,ab as ue,g as pe,h as z,aw as be,aD as _e,E as F,aO as ve,_ as fe}from"./index-b174b04d.js";import{a as ke}from"./config-7955ded2.js";import{I as ge,J as Ie,y as ye,K as he}from"./content-55cbe366.js";import{_ as we,a as Be,b as Ve}from"./QueryItem.vue_vue_type_script_setup_true_lang-8fda4d9a.js";import{_ as $e}from"./ColumnList.vue_vue_type_script_lang-d04d1203.js";import{_ as Ce}from"./ListMove.vue_vue_type_script_setup_true_lang-e4848f6d.js";import{a as Le}from"./BlockItemForm.vue_vue_type_script_setup_true_lang-8bfc1650.js";import"./DialogForm.vue_vue_type_script_setup_true_lang-845eff86.js";import"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-f71f9409.js";import"./sortable.esm-c0d7cc14.js";import"./BaseUpload-06957fcd.js";/* empty css                                                                   */const Se={class:"mb-3"},De={class:"mt-3 app-block"},Ne={name:"BlockItemList"},Ue=te({...Ne,setup(Ee){const{t:N}=oe(),y=i({}),k=i(),U=i(),b=i([]),g=i([]),L=i(!1),h=i(!1),S=i(),Q=V(()=>b.value.map(e=>e.id)),E=i(!1),w=i([]),r=i(),A=V(()=>w.value.find(e=>e.id===Number(r.value))),J=V(()=>b.value.map(e=>e.image)),K=V(()=>b.value.map(e=>e.mobileImage)),u=async()=>{L.value=!0;try{b.value=await ge({...be(y.value),blockId:Number(r.value),Q_OrderBy:k.value}),E.value=Object.values(y.value).filter(e=>e!==void 0&&e!=="").length>0||k.value!==void 0}finally{L.value=!1}},T=async()=>{w.value=await ke(),r.value=String(w.value[0].id)};ne(r,()=>u()),se(async()=>{await T()});const G=({column:e,prop:t,order:_})=>{var v;t&&_?k.value=((v=e.sortBy)!=null?v:t)+(_==="descending"?"_desc":""):k.value=void 0,u()},H=()=>u(),W=()=>{U.value.clearSort(),_e(y.value),k.value=void 0,u()},X=()=>{S.value=void 0,h.value=!0},O=e=>{S.value=e,h.value=!0},M=async e=>{await Ie(e),u(),F.success(N("success"))},P=async e=>{await ye(e),u(),F.success(N("success"))},Y=async(e,t)=>{const _=ve(e,b.value,t);await he(_.map(v=>v.id))};return(e,t)=>{const _=d("el-tab-pane"),v=d("el-tabs"),Z=d("el-aside"),B=d("el-button"),R=d("el-popconfirm"),c=d("el-table-column"),j=d("el-image"),q=d("el-switch"),x=d("el-table"),ee=d("el-main"),le=d("el-container"),ae=ie("loading");return f(),I(le,null,{default:o(()=>[a(Z,{width:"180px",class:"pr-3"},{default:o(()=>[a(v,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=m=>r.value=m),"tab-position":"left",stretch:"",class:"bg-white"},{default:o(()=>[(f(!0),de(me,null,ce(w.value,m=>(f(),I(_,{key:m.id,name:String(m.id),label:m.name},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(ee,{class:"p-0"},{default:o(()=>{var m;return[D("div",Se,[a(n(we),{params:y.value,onSearch:H,onReset:W},{default:o(()=>[a(n(Be),{label:e.$t("blockItem.title"),name:"Q_Contains_title"},null,8,["label"])]),_:1},8,["params"])]),D("div",null,[a(B,{type:"primary",disabled:!((m=A.value)!=null&&m.enabled)||n(p)("blockItem:create"),icon:n(re),onClick:t[1]||(t[1]=()=>X())},{default:o(()=>[$(C(e.$t("add")),1)]),_:1},8,["disabled","icon"]),a(R,{title:e.$t("confirmDelete"),onConfirm:t[2]||(t[2]=()=>P(g.value.map(l=>l.id)))},{reference:o(()=>[a(B,{disabled:g.value.length<=0||n(p)("blockItem:delete"),icon:n(ue)},{default:o(()=>[$(C(e.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),a(Ce,{disabled:g.value.length<=0||E.value||n(p)("blockItem:update"),class:"ml-2",onMove:t[3]||(t[3]=l=>Y(g.value,l))},null,8,["disabled"]),a(n(Ve),{name:"blockItem",class:"ml-2"})]),D("div",De,[pe((f(),I(x,{ref_key:"table",ref:U,data:b.value,onSelectionChange:t[4]||(t[4]=l=>g.value=l),onRowDblclick:t[5]||(t[5]=l=>O(l.id)),onSortChange:G},{default:o(()=>[a(n($e),{name:"blockItem"},{default:o(()=>[a(c,{type:"selection",width:"38"}),a(c,{property:"id",label:"ID",width:"80",sortable:"custom"}),a(c,{property:"title",label:e.$t("blockItem.title"),sortable:"custom","min-width":"200","show-overflow-tooltip":""},null,8,["label"]),a(c,{property:"image",label:e.$t("blockItem.image")},{default:o(({row:l,$index:s})=>[l.image?(f(),I(j,{key:0,src:l.image,fit:"contain","preview-src-list":J.value,"initial-index":s,"preview-teleported":"",class:"w-32 h-32"},null,8,["src","preview-src-list","initial-index"])):z("",!0)]),_:1},8,["label"]),a(c,{property:"mobileImage",label:e.$t("blockItem.mobileImage"),display:"none"},{default:o(({row:l,$index:s})=>[l.mobileImage?(f(),I(j,{key:0,src:l.mobileImage,fit:"contain","preview-src-list":K.value,"initial-index":s,"preview-teleported":"",class:"w-32 h-32"},null,8,["src","preview-src-list","initial-index"])):z("",!0)]),_:1},8,["label"]),a(c,{property:"targetBlank",label:e.$t("blockItem.targetBlank"),sortable:"custom",width:"120"},{default:o(({row:l})=>[a(q,{modelValue:l.targetBlank,"onUpdate:modelValue":s=>l.targetBlank=s,disabled:n(p)("blockItem:update"),onChange:s=>M({...l,targetBlank:s})},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"]),a(c,{property:"enabled",label:e.$t("enable"),sortable:"custom",width:"100"},{default:o(({row:l})=>[a(q,{modelValue:l.enabled,"onUpdate:modelValue":s=>l.enabled=s,disabled:n(p)("blockItem:update"),onChange:s=>M({...l,enabled:s})},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"]),a(c,{label:e.$t("table.action")},{default:o(({row:l})=>[a(B,{type:"primary",disabled:n(p)("blockItem:update"),size:"small",link:"",onClick:()=>O(l.id)},{default:o(()=>[$(C(e.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),a(R,{title:e.$t("confirmDelete"),onConfirm:()=>P([l.id])},{reference:o(()=>[a(B,{type:"primary",disabled:n(p)("blockItem:delete"),size:"small",link:""},{default:o(()=>[$(C(e.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[ae,L.value]])]),a(Le,{modelValue:h.value,"onUpdate:modelValue":t[6]||(t[6]=l=>h.value=l),"bean-id":S.value,"bean-ids":Q.value,"block-id":Number(r.value),onFinished:u},null,8,["modelValue","bean-id","bean-ids","block-id"])]}),_:1})]),_:1})}}});const Te=fe(Ue,[["__scopeId","data-v-34d1e511"]]);export{Te as default};
