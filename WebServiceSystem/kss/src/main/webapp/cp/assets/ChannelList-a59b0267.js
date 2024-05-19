import{d as Ye,p as al,r as f,a6 as Y,a3 as A,v as be,b as y,e as m,f as c,w as a,i as l,j as p,as as K,l as I,t as D,h,I as T,ag as U,ah as L,k as ne,_ as nl,u as tl,o as ul,c as ol,aE as sl,aw as rl,aF as dl,g as Qe,an as X,ae as il,ab as ml,aD as pl,E as vl,aG as cl}from"./index-53093fce.js";import{b as fl,c as yl,t as Ze}from"./tree-e8204b87.js";import{A as hl,B as bl,C as wl,D as gl,E as xe,i as we,F as Vl,k as $l,G as el,H as kl}from"./content-428531a8.js";import{c as ll}from"./system-737fc114.js";import{_ as _l,a as Ge,b as ql,c as Cl}from"./QueryItem.vue_vue_type_script_setup_true_lang-94058d51.js";import{_ as Tl}from"./ListMove.vue_vue_type_script_setup_true_lang-f8c04430.js";import{b as Ul,q as He}from"./config-61e6aebd.js";import{a as We,m as Je,g as Xe}from"./data-619fd67e.js";import{_ as Ml}from"./FieldItem.vue_vue_type_script_setup_true_lang-8a53b42b.js";import{_ as Il}from"./DialogForm.vue_vue_type_script_setup_true_lang-8e1e8f21.js";import{T as Dl}from"./Tinymce-683f8417.js";import{T as Sl}from"./TuiEditor-d48935a3.js";import{a as Kl}from"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-ab60634e.js";import"./vuedraggable.umd-6a21d6e3.js";/* empty css                                                                   */import"./BaseUpload-a59ce225.js";import"./index-aa008802.js";import"./sortable.esm-c0d7cc14.js";const Ll={class:"w-full"},Pl={name:"ChannelForm"},Bl=Ye({...Pl,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0},parent:{type:Object,default:null}},emits:{"update:modelValue":null,finished:null},setup(Z,{emit:re}){const N=Z,{modelValue:P,parent:w}=al(N),B=f(),u=f({}),O=f([]),E=f([]),j=f([]),_=f([]),Q=f([]),G=f([]),H=f([]),W=f([]),$=f(),J=Y(()=>_.value.find(n=>n.id===$.value)),r=Y(()=>{var n;return We(Je(Xe().channel.mains,(n=J.value)==null?void 0:n.mains,"channel"))}),g=Y(()=>{var n;return We(Je(Xe().channel.asides,(n=J.value)==null?void 0:n.asides,"channel"))}),M=Y(()=>{var n;return JSON.parse(((n=J.value)==null?void 0:n.customs)||"[]")}),x=Y(()=>{const n=fl(j.value,u.value.id);return A.allChannelPermission?n:yl(n,G.value)}),te=async()=>{j.value=Ze(await we())},ee=async()=>{A.epRank>0&&(O.value=await ll({category:"sys_article",latestVersion:!0}))},F=async()=>{A.epRank>=3&&(E.value=await Ul())},de=async()=>{await te(),re("finished")},ue=async()=>{_.value=await He({type:"channel"}),$.value==null&&_.value.length>0&&($.value=_.value[0].id)},ie=async()=>{Q.value=await He({type:"article"})},me=async()=>{H.value=await Vl()},le=async()=>{W.value=await $l()},pe=async()=>{G.value=await el()};be(P,()=>{var n,t,q;P.value&&($.value=(q=(n=w.value)==null?void 0:n.articleModelId)!=null?q:(t=_.value[0])==null?void 0:t.id,pe(),ue(),ie(),me(),le(),ee(),F())}),be(M,()=>{oe(u.value.customs)});const oe=n=>(M.value.forEach(t=>{n[t.code]==null&&(n[t.code]=t.defaultValue,t.defaultValueKey!=null&&(n[t.code+"_key"]=t.defaultValueKey))}),n);return(n,t)=>{const q=y("el-input"),o=y("el-form-item"),i=y("el-col"),C=y("el-checkbox"),b=y("el-option"),S=y("el-select"),R=y("el-switch"),ve=y("el-radio"),se=y("el-radio-group"),k=y("el-row"),ce=y("el-tree-select"),fe=y("el-input-number"),ye=y("el-tab-pane"),he=y("el-tabs");return m(),c(Il,{values:u.value,"onUpdate:values":t[28]||(t[28]=d=>u.value=d),name:n.$t("menu.content.channel"),"query-bean":p(bl),"create-bean":p(wl),"update-bean":p(gl),"delete-bean":p(xe),"bean-id":Z.beanId,"bean-ids":Z.beanIds,focus:B.value,"init-values":d=>{var e,s,V,z,ae,v,ge,Ve,$e,ke,_e,qe,Ce,Te,Ue,Me,Ie,De,Se,Ke,Le,Pe,Be,ze,Ee,Fe,Re,Ae,Ne,Oe,je;return{parentId:(s=d==null?void 0:d.parentId)!=null?s:(e=p(w))==null?void 0:e.id,type:1,channelModelId:(v=(z=d==null?void 0:d.channelModelId)!=null?z:(V=p(w))==null?void 0:V.channelModelId)!=null?v:(ae=_.value[0])==null?void 0:ae.id,articleModelId:(ke=(Ve=d==null?void 0:d.articleModelId)!=null?Ve:(ge=p(w))==null?void 0:ge.articleModelId)!=null?ke:($e=Q.value[0])==null?void 0:$e.id,nav:(Ce=(qe=d==null?void 0:d.nav)!=null?qe:(_e=p(w))==null?void 0:_e.nav)!=null?Ce:!0,channelTemplate:(Me=(Ue=d==null?void 0:d.channelTemplate)!=null?Ue:(Te=p(w))==null?void 0:Te.channelTemplate)!=null?Me:H.value[0],articleTemplate:(Se=(De=d==null?void 0:d.articleTemplate)!=null?De:(Ie=p(w))==null?void 0:Ie.articleTemplate)!=null?Se:W.value[0],pageSize:20,allowComment:(Pe=(Le=d==null?void 0:d.allowComment)!=null?Le:(Ke=p(w))==null?void 0:Ke.allowComment)!=null?Pe:!0,allowContribute:(Ee=(ze=d==null?void 0:d.allowContribute)!=null?ze:(Be=p(w))==null?void 0:Be.allowContribute)!=null?Ee:!0,allowSearch:(Ae=(Re=d==null?void 0:d.allowSearch)!=null?Re:(Fe=p(w))==null?void 0:Fe.allowSearch)!=null?Ae:!0,orderDesc:(je=(Oe=d==null?void 0:d.orderDesc)!=null?Oe:(Ne=p(w))==null?void 0:Ne.orderDesc)!=null?je:!0,customs:{}}},"to-values":d=>({...d}),perms:"channel","model-value":Z.modelValue,"disable-edit":d=>!p(A).allChannelPermission&&d.id!=null&&!G.value.includes(d.id),"label-width":"120px",large:"","onUpdate:modelValue":t[29]||(t[29]=d=>n.$emit("update:modelValue",d)),onFinished:de,onBeanChange:t[30]||(t[30]=async d=>{var e,s,V,z;$.value=(z=(s=d==null?void 0:d.channelModelId)!=null?s:(e=p(w))==null?void 0:e.channelModelId)!=null?z:(V=Q.value[0])==null?void 0:V.id,await te()})},{default:a(({bean:d})=>[l(k,null,{default:a(()=>[l(i,{span:18},{default:a(()=>[l(k,null,{default:a(()=>[l(i,{span:r.value.name.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"name",label:(e=r.value.name.name)!=null?e:n.$t("channel.name"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[l(q,{ref_key:"focus",ref:B,modelValue:u.value.name,"onUpdate:modelValue":t[0]||(t[0]=s=>u.value.name=s),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"]),l(i,{span:r.value.alias.double?12:24},{default:a(()=>[l(o,{prop:"alias",rules:[{required:!0,message:()=>n.$t("v.required")},{pattern:/^[\w-]*$/,message:()=>n.$t("channel.error.aliasPattern")},{asyncValidator:async(e,s,V)=>{if(s!==d.alias&&await p(hl)(s)){V(n.$t("channel.error.aliasExist"));return}V()}}]},{label:a(()=>{var e;return[l(K,{label:(e=r.value.alias.name)!=null?e:n.$t("channel.alias"),message:"channel.alias",help:""},null,8,["label"])]}),default:a(()=>[l(q,{modelValue:u.value.alias,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.alias=e),maxlength:"50"},null,8,["modelValue"])]),_:2},1032,["rules"])]),_:2},1032,["span"]),u.value.type===3?(m(),c(i,{key:0,span:r.value.linkUrl.double?12:24},{default:a(()=>[l(o,{prop:"linkUrl",rules:[{required:!0,message:()=>n.$t("v.required")},{pattern:/^(http|\/).*$/,message:()=>n.$t("channel.error.linkUrl")}]},{label:a(()=>{var e;return[l(K,{label:(e=r.value.linkUrl.name)!=null?e:n.$t("channel.linkUrl"),message:"channel.linkUrl",help:""},null,8,["label"])]}),default:a(()=>[l(q,{modelValue:u.value.linkUrl,"onUpdate:modelValue":t[3]||(t[3]=e=>u.value.linkUrl=e),maxlength:"255"},{append:a(()=>[l(C,{modelValue:u.value.targetBlank,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value.targetBlank=e)},{default:a(()=>[I(D(n.$t("channel.targetBlank")),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):h("",!0),u.value.type<3?(m(),T(U,{key:1},[r.value.seoTitle.show?(m(),c(i,{key:0,span:r.value.seoTitle.double?12:24},{default:a(()=>[l(o,{prop:"seoTitle",rules:r.value.seoTitle.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var e;return[l(K,{label:(e=r.value.seoTitle.name)!=null?e:n.$t("channel.seoTitle"),message:"channel.seoTitle",help:""},null,8,["label"])]}),default:a(()=>[l(q,{modelValue:u.value.seoTitle,"onUpdate:modelValue":t[4]||(t[4]=e=>u.value.seoTitle=e),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):h("",!0),r.value.seoKeywords.show?(m(),c(i,{key:1,span:r.value.seoKeywords.double?12:24},{default:a(()=>[l(o,{prop:"seoKeywords",rules:r.value.seoKeywords.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var e;return[l(K,{label:(e=r.value.seoKeywords.name)!=null?e:n.$t("channel.seoKeywords"),message:"channel.seoKeywords",help:""},null,8,["label"])]}),default:a(()=>[l(q,{modelValue:u.value.seoKeywords,"onUpdate:modelValue":t[5]||(t[5]=e=>u.value.seoKeywords=e),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):h("",!0),r.value.seoDescription.show?(m(),c(i,{key:2,span:r.value.seoDescription.double?12:24},{default:a(()=>[l(o,{prop:"seoDescription",rules:r.value.seoDescription.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var e;return[l(K,{label:(e=r.value.seoDescription.name)!=null?e:n.$t("channel.seoDescription"),message:"channel.seoDescription",help:""},null,8,["label"])]}),default:a(()=>[l(q,{modelValue:u.value.seoDescription,"onUpdate:modelValue":t[6]||(t[6]=e=>u.value.seoDescription=e),maxlength:"1000"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):h("",!0)],64)):h("",!0),r.value.image.show?(m(),c(i,{key:2,span:r.value.image.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"image",label:(e=r.value.image.name)!=null?e:n.$t("channel.image"),rules:r.value.image.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(p(Kl),{modelValue:u.value.image,"onUpdate:modelValue":t[7]||(t[7]=s=>u.value.image=s),height:r.value.image.imageHeight,width:r.value.image.imageWidth,mode:r.value.image.imageMode},null,8,["modelValue","height","width","mode"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0),r.value.channelModel.show?(m(),c(i,{key:3,span:r.value.channelModel.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"channelModelId",label:(e=r.value.channelModel.name)!=null?e:n.$t("channel.channelModel"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[l(S,{modelValue:u.value.channelModelId,"onUpdate:modelValue":t[8]||(t[8]=s=>u.value.channelModelId=s),class:"w-full",onChange:t[9]||(t[9]=s=>{$.value=s})},{default:a(()=>[(m(!0),T(U,null,L(_.value,s=>(m(),c(b,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0),r.value.articleModel.show?(m(),c(i,{key:4,span:r.value.articleModel.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"articleModelId",label:(e=r.value.articleModel.name)!=null?e:n.$t("channel.articleModel"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[l(S,{modelValue:u.value.articleModelId,"onUpdate:modelValue":t[10]||(t[10]=s=>u.value.articleModelId=s),class:"w-full"},{default:a(()=>[(m(!0),T(U,null,L(Q.value,s=>(m(),c(b,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0),[3,4,5].includes(u.value.type)?h("",!0):(m(),T(U,{key:5},[r.value.channelTemplate.show?(m(),c(i,{key:0,span:r.value.channelTemplate.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"channelTemplate",label:(e=r.value.channelTemplate.name)!=null?e:n.$t("channel.channelTemplate"),rules:r.value.channelTemplate.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(S,{modelValue:u.value.channelTemplate,"onUpdate:modelValue":t[11]||(t[11]=s=>u.value.channelTemplate=s),class:"w-full"},{default:a(()=>[(m(!0),T(U,null,L(H.value,s=>(m(),c(b,{key:s,label:s+".html",value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0),r.value.articleTemplate.show?(m(),c(i,{key:1,span:r.value.articleTemplate.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"articleTemplate",label:(e=r.value.articleTemplate.name)!=null?e:n.$t("channel.articleTemplate"),rules:r.value.articleTemplate.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(S,{modelValue:u.value.articleTemplate,"onUpdate:modelValue":t[12]||(t[12]=s=>u.value.articleTemplate=s),class:"w-full"},{default:a(()=>[(m(!0),T(U,null,L(W.value,s=>(m(),c(b,{key:s,label:s+".html",value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0)],64)),r.value.allowComment.show?(m(),c(i,{key:6,span:r.value.allowComment.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"allowComment",label:(e=r.value.allowComment.name)!=null?e:n.$t("channel.allowComment"),rules:r.value.allowComment.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(R,{modelValue:u.value.allowComment,"onUpdate:modelValue":t[13]||(t[13]=s=>u.value.allowComment=s)},null,8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0),r.value.allowContribute.show?(m(),c(i,{key:7,span:r.value.allowContribute.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"allowContribute",label:(e=r.value.allowContribute.name)!=null?e:n.$t("channel.allowContribute"),rules:r.value.allowContribute.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(R,{modelValue:u.value.allowContribute,"onUpdate:modelValue":t[14]||(t[14]=s=>u.value.allowContribute=s)},null,8,["modelValue"])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0),r.value.nav.show?(m(),c(i,{key:8,span:r.value.nav.double?12:24},{default:a(()=>[l(o,{prop:"nav",rules:r.value.nav.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var e;return[l(K,{label:(e=r.value.nav.name)!=null?e:n.$t("channel.nav"),message:"channel.nav",help:""},null,8,["label"])]}),default:a(()=>[l(R,{modelValue:u.value.nav,"onUpdate:modelValue":t[15]||(t[15]=e=>u.value.nav=e)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):h("",!0),r.value.allowSearch.show?(m(),c(i,{key:9,span:r.value.allowSearch.double?12:24},{default:a(()=>[l(o,{prop:"allowSearch",rules:r.value.allowSearch.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>{var e;return[l(K,{label:(e=r.value.allowSearch.name)!=null?e:n.$t("channel.allowSearch"),message:"channel.allowSearch",help:""},null,8,["label"])]}),default:a(()=>[l(R,{modelValue:u.value.allowSearch,"onUpdate:modelValue":t[16]||(t[16]=e=>u.value.allowSearch=e)},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["span"])):h("",!0),(m(!0),T(U,null,L(M.value,e=>(m(),c(i,{key:e.code,span:e.double?12:24},{default:a(()=>[l(o,{prop:`customs.${e.code}`,rules:e.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{label:a(()=>[l(K,{label:e.name},null,8,["label"])]),default:a(()=>[l(Ml,{modelValue:u.value.customs[e.code],"onUpdate:modelValue":s=>u.value.customs[e.code]=s,"model-key":u.value.customs[e.code+"_key"],"onUpdate:modelKey":s=>u.value.customs[e.code+"_key"]=s,field:e},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])]),_:2},1032,["prop","rules"])]),_:2},1032,["span"]))),128)),u.value.type===2?(m(),c(i,{key:10,span:r.value.text.double?12:24},{default:a(()=>{var e;return[l(o,{prop:"text",label:(e=r.value.text.name)!=null?e:n.$t("channel.text"),rules:r.value.text.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[ne("div",Ll,[r.value.text.editorSwitch?(m(),c(se,{key:0,modelValue:u.value.editorType,"onUpdate:modelValue":t[17]||(t[17]=s=>u.value.editorType=s),class:"mr-6",onChange:t[18]||(t[18]=()=>u.value.markdown="")},{default:a(()=>[(m(),T(U,null,L([1,2],s=>l(ve,{key:s,label:s},{default:a(()=>[I(D(n.$t(`model.field.editorType.${s}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])):h("",!0),u.value.editorType===2?(m(),c(p(Sl),{key:1,modelValue:u.value.markdown,"onUpdate:modelValue":t[19]||(t[19]=s=>u.value.markdown=s),html:u.value.text,"onUpdate:html":t[20]||(t[20]=s=>u.value.text=s),class:"leading-6"},null,8,["modelValue","html"])):(m(),c(p(Dl),{key:2,ref:"tinyText",modelValue:u.value.text,"onUpdate:modelValue":t[21]||(t[21]=s=>u.value.text=s)},null,8,["modelValue"]))])]),_:1},8,["label","rules"])]}),_:1},8,["span"])):h("",!0)]),_:2},1024)]),_:2},1024),l(i,{span:6,class:"el-form--label-top label-top"},{default:a(()=>[l(he,{type:"border-card",class:"ml-5"},{default:a(()=>[l(ye,{label:n.$t("channel.tabs.setting")},{default:a(()=>{var e,s,V,z,ae;return[l(o,{prop:"parentId",label:(e=g.value.parent.name)!=null?e:n.$t("channel.parent")},{default:a(()=>[l(ce,{modelValue:u.value.parentId,"onUpdate:modelValue":t[22]||(t[22]=v=>u.value.parentId=v),data:x.value,"node-key":"id",props:{label:"name",disabled:"disabled"},"render-after-expand":!1,"check-strictly":"",clearable:"",class:"w-full"},null,8,["modelValue","data"])]),_:1},8,["label"]),l(o,{prop:"type",label:(s=g.value.type.name)!=null?s:n.$t("channel.type"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[l(S,{modelValue:u.value.type,"onUpdate:modelValue":t[23]||(t[23]=v=>u.value.type=v),class:"w-full"},{default:a(()=>[(m(),T(U,null,L([1,2,3,4],v=>l(b,{key:v,label:n.$t(`channel.type.${v}`),value:v},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"]),l(o,{prop:"processKey",label:(V=g.value.processKey.name)!=null?V:n.$t("channel.processKey"),rules:g.value.processKey.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(S,{modelValue:u.value.processKey,"onUpdate:modelValue":t[24]||(t[24]=v=>u.value.processKey=v),clearable:"",class:"w-full"},{default:a(()=>[(m(!0),T(U,null,L(O.value,v=>(m(),c(b,{key:v.key,label:v.name,value:v.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"]),p(A).epRank>=3&&g.value.performanceType.show?(m(),c(o,{key:0,prop:"performanceType",label:(z=g.value.performanceType.name)!=null?z:n.$t("channel.performanceType"),rules:g.value.performanceType.required?{required:!0,message:()=>n.$t("v.required")}:void 0},{default:a(()=>[l(S,{modelValue:u.value.performanceTypeId,"onUpdate:modelValue":t[25]||(t[25]=v=>u.value.performanceTypeId=v),clearable:"",class:"w-full"},{default:a(()=>[(m(!0),T(U,null,L(E.value,v=>(m(),c(b,{key:v.id,label:v.name,value:v.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])):h("",!0),l(o,{prop:"pageSize",label:(ae=g.value.pageSize.name)!=null?ae:n.$t("channel.pageSize"),rules:{required:!0,message:()=>n.$t("v.required")}},{default:a(()=>[l(fe,{modelValue:u.value.pageSize,"onUpdate:modelValue":t[26]||(t[26]=v=>u.value.pageSize=v),min:1,max:200},null,8,["modelValue"])]),_:1},8,["label","rules"]),l(o,{prop:"orderDesc",rules:{required:!0,message:()=>n.$t("v.required")}},{label:a(()=>{var v;return[l(K,{label:(v=g.value.orderDesc.name)!=null?v:n.$t("channel.orderDesc"),message:"channel.orderDesc",help:""},null,8,["label"])]}),default:a(()=>[l(R,{modelValue:u.value.orderDesc,"onUpdate:modelValue":t[27]||(t[27]=v=>u.value.orderDesc=v)},null,8,["modelValue"])]),_:1},8,["rules"])]}),_:1},8,["label"])]),_:1})]),_:1})]),_:2},1024)]),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","model-value","disable-edit"])}}});const zl=nl(Bl,[["__scopeId","data-v-42e934ca"]]),El={class:"my-1 ml-2"},Fl={class:"mb-3"},Rl={class:"mt-3 app-block"},Al={name:"ChannelList"},oa=Ye({...Al,setup(Z){const{t:re}=tl(),N=f({}),P=f(),w=f(),B=f([]),u=f([]),O=f(!1),E=f(!1),j=f(),_=f(),Q=Y(()=>B.value.map(o=>o.id)),G=f(!1),H=f([]),W=f([]),$=f(),J=f([]),r=f(!1),g=f(),M=f(),x=o=>A.allChannelPermission||H.value.includes(o.id);be(g,o=>{$.value.filter(o)});const te=async()=>{r.value=!0;try{J.value=Ze(await we({isOnlyParent:!0})),sl(()=>{var o;g.value!=null&&$.value.filter(g.value),$.value.setCurrentKey((o=M.value)==null?void 0:o.id)})}finally{r.value=!1}},ee=async()=>{var o;O.value=!0;try{const i=Object.values(N.value).filter(C=>C!==void 0&&C!=="").length>0;B.value=await we({...rl(N.value),parentId:(o=M.value)==null?void 0:o.id,isIncludeChildren:i,Q_OrderBy:P.value}),G.value=i||P.value!==void 0}finally{O.value=!1}},F=()=>{te(),ee()},de=async()=>{A.epRank>0&&(W.value=await ll({category:"sys_article",latestVersion:!0}))},ue=async()=>{H.value=await el()};ul(()=>{F(),de(),ue()});const ie=({column:o,prop:i,order:C})=>{var b;i&&C?P.value=((b=o.sortBy)!=null?b:i)+(C==="descending"?"_desc":""):P.value=void 0,F()},me=()=>{F(),ue()},le=()=>ee(),pe=()=>{w.value.clearSort(),pl(N.value),P.value=void 0,ee()},oe=o=>{_.value=void 0,j.value=o!=null?o:M.value,E.value=!0},n=o=>{_.value=o,j.value=null,E.value=!0},t=async o=>{await xe(o),F(),vl.success(re("success"))},q=async(o,i)=>{const C=cl(o,B.value,i);await kl(C),await F(),o.forEach(()=>{w.value.toggleRowSelection(B.value)})};return(o,i)=>{const C=y("el-input"),b=y("el-button"),S=y("el-tree"),R=y("el-scrollbar"),ve=y("el-aside"),se=y("el-popconfirm"),k=y("el-table-column"),ce=y("el-tag"),fe=y("el-table"),ye=y("el-main"),he=y("el-container"),d=ol("loading");return m(),c(he,null,{default:a(()=>[l(ve,{width:"220px",class:"pr-3"},{default:a(()=>[l(R,{class:"p-2 bg-white rounded-sm"},{default:a(()=>[l(C,{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=e=>g.value=e),"suffix-icon":p(dl),size:"small"},null,8,["modelValue","suffix-icon"]),ne("div",El,[l(b,{type:M.value==null?"primary":void 0,link:"",onClick:i[1]||(i[1]=()=>{$.value.setCurrentKey(null),M.value=void 0,le()})},{default:a(()=>[I(D(o.$t("channel.root")),1)]),_:1},8,["type"])]),Qe(l(S,{ref_key:"channelTree",ref:$,data:J.value,props:{label:"name"},"expand-on-click-node":!1,"node-key":"id","highlight-current":"","filter-node-method":(e,s)=>e?s.name.includes(e):!0,onNodeClick:i[2]||(i[2]=e=>{M.value=e,le()})},null,8,["data","filter-node-method"]),[[d,r.value]])]),_:1})]),_:1}),l(ye,{class:"p-0"},{default:a(()=>[ne("div",Fl,[l(p(_l),{params:N.value,onSearch:le,onReset:pe},{default:a(()=>[l(p(Ge),{label:o.$t("channel.name"),name:"Q_Contains_name"},null,8,["label"]),l(p(Ge),{label:o.$t("channel.alias"),name:"Q_Contains_alias"},null,8,["label"])]),_:1},8,["params"])]),ne("div",null,[l(b,{type:"primary",disabled:p(X)("channel:create"),icon:p(il),onClick:i[3]||(i[3]=()=>oe(void 0))},{default:a(()=>[I(D(o.$t("add")),1)]),_:1},8,["disabled","icon"]),l(se,{title:o.$t("confirmDelete"),onConfirm:i[4]||(i[4]=()=>t(u.value.map(e=>e.id)))},{reference:a(()=>[l(b,{disabled:u.value.length<=0||p(X)("channel:delete"),icon:p(ml)},{default:a(()=>[I(D(o.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),l(Tl,{disabled:u.value.length<=0||G.value||p(X)("channel:update"),class:"ml-2",onMove:i[5]||(i[5]=e=>q(u.value,e))},null,8,["disabled"]),l(p(ql),{name:"channel",class:"ml-2"})]),ne("div",Rl,[Qe((m(),c(fe,{ref_key:"table",ref:w,"row-key":"id",data:B.value,onSelectionChange:i[6]||(i[6]=e=>u.value=e),onRowDblclick:i[7]||(i[7]=e=>n(e.id)),onSortChange:ie},{default:a(()=>[l(p(Cl),{name:"channel"},{default:a(()=>[l(k,{type:"selection",selectable:x,width:"45"}),l(k,{property:"name",label:o.$t("channel.name"),"min-width":"120",sortable:"custom"},null,8,["label"]),l(k,{property:"alias",label:o.$t("channel.alias"),"min-width":"80",sortable:"custom"},null,8,["label"]),l(k,{property:"channelModel.name",label:o.$t("channel.channelModel"),"sort-by":"channelModel@model-name",display:"none",sortable:"custom","min-width":"60"},null,8,["label"]),l(k,{property:"articleModel.name",label:o.$t("channel.articleModel"),"sort-by":"articleModel@model-name",sortable:"custom","min-width":"60"},null,8,["label"]),l(k,{property:"processKey",label:o.$t("channel.processKey"),"min-width":"60",sortable:"custom","show-overflow-tooltip":""},{default:a(({row:e})=>{var s;return[I(D(e.processKey!=null?(s=W.value.find(V=>V.key===e.processKey))==null?void 0:s.name:void 0),1)]}),_:1},8,["label"]),l(k,{property:"nav",label:o.$t("channel.nav"),"min-width":"40"},{default:a(({row:e})=>[l(ce,{type:e.nav?"success":"info",size:"small"},{default:a(()=>[I(D(o.$t(e.nav?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),l(k,{property:"id",label:"ID",width:"80",sortable:"custom"}),l(k,{label:o.$t("table.action")},{default:a(({row:e})=>[l(b,{type:"primary",disabled:p(X)("channel:create")||!x(e),size:"small",link:"",onClick:()=>oe(e)},{default:a(()=>[I(D(o.$t("addChild")),1)]),_:2},1032,["disabled","onClick"]),l(b,{type:"primary",disabled:p(X)("channel:update"),size:"small",link:"",onClick:()=>n(e.id)},{default:a(()=>[I(D(o.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),l(se,{title:o.$t("confirmDelete"),onConfirm:()=>t([e.id])},{reference:a(()=>[l(b,{type:"primary",disabled:p(X)("channel:delete")||!x(e),size:"small",link:""},{default:a(()=>[I(D(o.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[d,O.value]])]),l(zl,{modelValue:E.value,"onUpdate:modelValue":i[8]||(i[8]=e=>E.value=e),"bean-id":_.value,"bean-ids":Q.value,parent:j.value,onFinished:me},null,8,["modelValue","bean-id","bean-ids","parent"])]),_:1})]),_:1})}}});export{oa as default};
