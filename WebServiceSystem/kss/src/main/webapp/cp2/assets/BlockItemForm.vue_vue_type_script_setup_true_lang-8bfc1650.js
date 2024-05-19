import{a as X}from"./config-7955ded2.js";import{L as Y,M as Z,J as x,y as _}from"./content-55cbe366.js";import{_ as ee}from"./DialogForm.vue_vue_type_script_setup_true_lang-845eff86.js";import{a as J}from"./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-f71f9409.js";import{d as G,p as K,r as I,v as le,b as v,e as n,f as b,w as o,i as u,l as N,t as O,I as w,ah as Q,k as P,a8 as ae,ag as R,aP as te,a6 as ue,o as oe,h as p,j as c}from"./index-b174b04d.js";import{B as de}from"./BaseUpload-06957fcd.js";const re=["onClick"],ne=["src"],ie=G({__name:"ImageExtractor",props:{modelValue:{type:Boolean,required:!0},urls:{type:Array,default:()=>[]},min:{type:Number,default:1},max:{type:Number,default:1},appendToBody:{type:Boolean}},emits:["update:modelValue","finished"],setup(i,{emit:B}){const g=i,{urls:y,max:h,modelValue:a}=K(g),k=I();le(a,()=>{a.value&&(k.value=te.uniq(y.value).map(l=>({url:l,checked:!1})))});const d=l=>{if(l.checked){l.checked=!l.checked;return}let e=0;k.value.forEach(V=>{V.checked&&(e+=1),e>=h.value&&(V.checked=!1)}),l.checked=!0},$=()=>{B("finished",k.value.filter(l=>l.checked).map(l=>l.url)),B("update:modelValue",!1)};return(l,e)=>{const V=v("el-col"),C=v("el-row"),s=v("el-button"),f=v("el-dialog");return n(),b(f,{"model-value":i.modelValue,title:l.$t("article.extractImage"),width:768,"append-to-body":i.appendToBody,"onUpdate:modelValue":e[1]||(e[1]=m=>l.$emit("update:modelValue",m))},{footer:o(()=>[u(s,{type:"primary",disabled:k.value.filter(m=>m.checked).length<i.min,onClick:e[0]||(e[0]=()=>$())},{default:o(()=>[N(O(l.$t("ok")),1)]),_:1},8,["disabled"])]),default:o(()=>[u(C,{gutter:16},{default:o(()=>[(n(!0),w(R,null,Q(k.value,m=>(n(),b(V,{key:m.url,src:m,span:8,class:"mt-2"},{default:o(()=>[P("div",{class:ae(["p-1 border-2 rounded cursor-pointer text-center",{"border-primary":m.checked,"border-2":m.checked}]),onClick:()=>d(m)},[P("img",{src:m.url,class:"max-h-36 inline"},null,8,ne)],10,re)]),_:2},1032,["src"]))),128))]),_:1})]),_:1},8,["model-value","title","append-to-body"])}}}),se={name:"BlockItemForm"},ce=G({...se,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0},blockId:{type:Number,default:null},articleId:{type:Number,default:null},title:{type:String,default:null},description:{type:String,default:null},video:{type:String,default:null},images:{type:Array,default:()=>[]}},emits:{"update:modelValue":null,finished:null},setup(i){const B=i,{blockId:g}=K(B),y=I(),h=I(),a=I({}),k=I([]),d=ue(()=>k.value.find(l=>{var e;return l.id===((e=y.value)!=null?e:g==null?void 0:g.value)}));oe(async()=>{k.value=await X()});const $=I(!1);return(l,e)=>{var L;const V=v("el-option"),C=v("el-select"),s=v("el-form-item"),f=v("el-input"),m=v("el-button"),T=v("el-switch");return n(),w("div",null,[u(ee,{values:a.value,"onUpdate:values":e[14]||(e[14]=r=>a.value=r),name:l.$t("menu.content.blockItem"),"query-bean":c(Y),"create-bean":c(Z),"update-bean":c(x),"delete-bean":c(_),"bean-id":i.beanId,"bean-ids":i.beanIds,focus:h.value,"init-values":()=>({blockId:c(g),articleId:i.articleId,title:i.title,description:i.description,video:i.video,enabled:!0}),"to-values":r=>{var q,U;return{...r,articleTitle:(q=r.article)==null?void 0:q.title,articleId:(U=r.article)==null?void 0:U.id}},addable:(L=d.value)==null?void 0:L.enabled,perms:"blockItem","model-value":i.modelValue,"onUpdate:modelValue":e[15]||(e[15]=r=>l.$emit("update:modelValue",r)),onFinished:e[16]||(e[16]=()=>l.$emit("finished")),onBeanChange:e[17]||(e[17]=r=>y.value=r.blockId)},{default:o(({isEdit:r})=>{var q,U,S,F,A,M,D,E,H,W,j,z;return[u(s,{prop:"blockId",label:l.$t("blockItem.block"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:o(()=>[u(C,{modelValue:a.value.blockId,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value.blockId=t),class:"w-full",disabled:"",onChange:e[1]||(e[1]=t=>y.value=t)},{default:o(()=>[(n(!0),w(R,null,Q(k.value,t=>(n(),w(R,{key:t.id},[r||t.enabled?(n(),b(V,{key:0,label:t.name,value:t.id,disabled:!t.enabled},null,8,["label","value","disabled"])):p("",!0)],64))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["label","rules"]),r&&a.value.articleId!=null?(n(),b(s,{key:0,label:l.$t("blockItem.articleId")},{default:o(()=>[u(f,{modelValue:a.value.articleId,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.articleId=t),disabled:""},null,8,["modelValue"])]),_:1},8,["label"])):p("",!0),r&&a.value.articleTitle!=null?(n(),b(s,{key:1,label:l.$t("blockItem.articleTitle")},{default:o(()=>[u(f,{modelValue:a.value.articleTitle,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.articleTitle=t),disabled:""},null,8,["modelValue"])]),_:1},8,["label"])):p("",!0),u(s,{prop:"title",label:l.$t("blockItem.title"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:o(()=>[u(f,{ref_key:"focus",ref:h,modelValue:a.value.title,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.title=t),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["label","rules"]),a.value.articleId==null&&((q=d.value)!=null&&q.withLinkUrl)?(n(),b(s,{key:2,prop:"linkUrl",label:l.$t("blockItem.linkUrl"),rules:(U=d.value)!=null&&U.linkUrlRequired?[{required:!0,message:()=>l.$t("v.required")},{pattern:/^(http|\/).*$/,message:()=>l.$t("blockItem.error.linkUrl")}]:{pattern:/^(http|\/).*$/,message:()=>l.$t("blockItem.error.linkUrl")}},{default:o(()=>[u(f,{modelValue:a.value.linkUrl,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.linkUrl=t),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["label","rules"])):p("",!0),(S=d.value)!=null&&S.withSubtitle?(n(),b(s,{key:3,prop:"subtitle",label:l.$t("blockItem.subtitle"),rules:{required:(F=d.value)==null?void 0:F.subtitleRequired,message:()=>l.$t("v.required")}},{default:o(()=>[u(f,{modelValue:a.value.subtitle,"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.subtitle=t),maxlength:"150"},null,8,["modelValue"])]),_:1},8,["label","rules"])):p("",!0),(A=d.value)!=null&&A.withDescription?(n(),b(s,{key:4,prop:"description",label:l.$t("blockItem.description"),rules:{required:(M=d.value)==null?void 0:M.descriptionRequired,message:()=>l.$t("v.required")}},{default:o(()=>[u(f,{modelValue:a.value.description,"onUpdate:modelValue":e[7]||(e[7]=t=>a.value.description=t),type:"textarea",rows:5,maxlength:"1000"},null,8,["modelValue"])]),_:1},8,["label","rules"])):p("",!0),(D=d.value)!=null&&D.withImage?(n(),b(s,{key:5,prop:"image",label:l.$t("blockItem.image"),rules:{required:(E=d.value)==null?void 0:E.imageRequired,message:()=>l.$t("v.required")}},{default:o(()=>[u(c(J),{modelValue:a.value.image,"onUpdate:modelValue":e[8]||(e[8]=t=>a.value.image=t),width:d.value.imageWidth,height:d.value.imageHeight,mode:"manual"},null,8,["modelValue","width","height"]),i.images.length>0?(n(),b(m,{key:0,class:"self-start ml-2",onClick:e[9]||(e[9]=()=>$.value=!0)},{default:o(()=>[N(O(l.$t("article.extractImage")),1)]),_:1})):p("",!0)]),_:1},8,["label","rules"])):p("",!0),(H=d.value)!=null&&H.withMobileImage?(n(),b(s,{key:6,prop:"mobileImage",label:l.$t("blockItem.mobileImage"),rules:{required:(W=d.value)==null?void 0:W.mobileImageRequired,message:()=>l.$t("v.required")}},{default:o(()=>[u(c(J),{modelValue:a.value.mobileImage,"onUpdate:modelValue":e[10]||(e[10]=t=>a.value.mobileImage=t),width:d.value.mobileImageWidth,height:d.value.mobileImageHeight,mode:"manual"},null,8,["modelValue","width","height"])]),_:1},8,["label","rules"])):p("",!0),(j=d.value)!=null&&j.withVideo?(n(),b(s,{key:7,prop:"video",label:l.$t("blockItem.video"),rules:{required:(z=d.value)==null?void 0:z.videoRequired,message:()=>l.$t("v.required")}},{default:o(()=>[u(f,{modelValue:a.value.video,"onUpdate:modelValue":e[11]||(e[11]=t=>a.value.video=t),maxlength:"255"},{prepend:o(()=>[N("URL")]),_:1},8,["modelValue"]),u(c(de),{type:"video","on-success":t=>a.value.video=t.url},null,8,["on-success"])]),_:1},8,["label","rules"])):p("",!0),u(s,{prop:"targetBlank",label:l.$t("blockItem.targetBlank")},{default:o(()=>[u(T,{modelValue:a.value.targetBlank,"onUpdate:modelValue":e[12]||(e[12]=t=>a.value.targetBlank=t)},null,8,["modelValue"])]),_:1},8,["label"]),u(s,{prop:"enabled",label:l.$t("blockItem.enabled")},{default:o(()=>[u(T,{modelValue:a.value.enabled,"onUpdate:modelValue":e[13]||(e[13]=t=>a.value.enabled=t)},null,8,["modelValue"])]),_:1},8,["label"])]}),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","addable","model-value"]),u(ie,{modelValue:$.value,"onUpdate:modelValue":e[18]||(e[18]=r=>$.value=r),urls:i.images,"append-to-body":!0,onFinished:e[19]||(e[19]=r=>a.value.image=r[0])},null,8,["modelValue","urls"])])}}});export{ie as _,ce as a};
