System.register(["./index-legacy-414c7520.js","./tree-legacy-939d2e11.js","./content-legacy-eb19b01d.js","./system-legacy-229c182a.js","./QueryItem.vue_vue_type_script_setup_true_lang-legacy-7b235821.js","./ColumnList.vue_vue_type_script_lang-legacy-541b5033.js","./ListMove.vue_vue_type_script_setup_true_lang-legacy-c837264c.js","./config-legacy-94002286.js","./data-legacy-74afb7aa.js","./FieldItem.vue_vue_type_script_setup_true_lang-legacy-8c33c582.js","./DialogForm.vue_vue_type_script_setup_true_lang-legacy-c58a3a28.js","./TuiEditor-legacy-a23357bb.js","./FileListUpload.vue_vue_type_style_index_0_scoped_8f839ee5_lang-legacy-0138fc03.js","./BaseUpload.vue_vue_type_style_index_0_scoped_bf818630_lang-legacy-30235b0a.js","./BaseUpload-legacy-9180f291.js","./index-legacy-4c757289.js","./sortable.esm-legacy-94ec1419.js"],(function(e,l){"use strict";var a,u,n,t,d,o,r,s,i,m,c,v,p,b,h,y,f,_,g,w,V,k,$,q,C,T,U,I,x,M,S,D,K,j,z,B,E,F,R,O,L,P,Q,H,N,G,A,J,W,X,Y,Z,ee,le,ae,ue,ne,te,de,oe,re,se,ie;return{setters:[e=>{a=e.d,u=e.p,n=e.r,t=e.a6,d=e.a3,o=e.v,r=e.b,s=e.e,i=e.f,m=e.w,c=e.i,v=e.j,p=e.as,b=e.l,h=e.t,y=e.h,f=e.I,_=e.ag,g=e.ah,w=e.k,V=e._,k=e.u,$=e.o,q=e.c,C=e.aG,T=e.aw,U=e.aH,I=e.g,x=e.an,M=e.ae,S=e.ab,D=e.aD,K=e.E,j=e.aI},e=>{z=e.b,B=e.c,E=e.t},e=>{F=e.A,R=e.B,O=e.C,L=e.D,P=e.E,Q=e.i,H=e.F,N=e.k,G=e.G,A=e.H},e=>{J=e.c},e=>{W=e._,X=e.a,Y=e.b},e=>{Z=e._},e=>{ee=e._},e=>{le=e.b,ae=e.q},e=>{ue=e.a,ne=e.m,te=e.g},e=>{de=e._,oe=e.T},e=>{re=e._},e=>{se=e.T},e=>{ie=e.a},null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".label-top[data-v-42e934ca] .el-form-item{margin-bottom:12px}.label-top[data-v-42e934ca] .el-form-item__label{margin-bottom:4px;width:100%!important}\n",document.head.appendChild(l);const me={class:"w-full"},ce=a({name:"ChannelForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number,default:null},beanIds:{type:Array,required:!0},parent:{type:Object,default:null}},emits:{"update:modelValue":null,finished:null},setup(e,{emit:l}){const a=e,{modelValue:V,parent:k}=u(a),$=n(),q=n({}),C=n([]),T=n([]),U=n([]),I=n([]),x=n([]),M=n([]),S=n([]),D=n([]),K=n(),j=t((()=>I.value.find((e=>e.id===K.value)))),A=t((()=>ue(ne(te().channel.mains,j.value?.mains,"channel")))),W=t((()=>ue(ne(te().channel.asides,j.value?.asides,"channel")))),X=t((()=>JSON.parse(j.value?.customs||"[]"))),Y=t((()=>{const e=z(U.value,q.value.id);return d.allChannelPermission?e:B(e,M.value)})),Z=async()=>{U.value=E(await Q())},ee=async()=>{await Z(),l("finished")};o(V,(()=>{V.value&&(K.value=k.value?.articleModelId??I.value[0]?.id,(async()=>{M.value=await G()})(),(async()=>{I.value=await ae({type:"channel"}),null==K.value&&I.value.length>0&&(K.value=I.value[0].id)})(),(async()=>{x.value=await ae({type:"article"})})(),(async()=>{S.value=await H()})(),(async()=>{D.value=await N()})(),(async()=>{d.epRank>0&&(C.value=await J({category:"sys_article",latestVersion:!0}))})(),(async()=>{d.epRank>=3&&(T.value=await le())})())})),o(X,(()=>{ce(q.value.customs)}));const ce=e=>(X.value.forEach((l=>{null==e[l.code]&&(e[l.code]=l.defaultValue,null!=l.defaultValueKey&&(e[l.code+"_key"]=l.defaultValueKey))})),e);return(l,a)=>{const u=r("el-input"),n=r("el-form-item"),t=r("el-col"),o=r("el-checkbox"),V=r("el-option"),U=r("el-select"),j=r("el-switch"),z=r("el-radio"),B=r("el-radio-group"),E=r("el-row"),Q=r("el-tree-select"),H=r("el-input-number"),N=r("el-tab-pane"),G=r("el-tabs");return s(),i(re,{values:q.value,"onUpdate:values":a[28]||(a[28]=e=>q.value=e),name:l.$t("menu.content.channel"),"query-bean":v(R),"create-bean":v(O),"update-bean":v(L),"delete-bean":v(P),"bean-id":e.beanId,"bean-ids":e.beanIds,focus:$.value,"init-values":e=>({parentId:e?.parentId??v(k)?.id,type:1,channelModelId:e?.channelModelId??v(k)?.channelModelId??I.value[0]?.id,articleModelId:e?.articleModelId??v(k)?.articleModelId??x.value[0]?.id,nav:e?.nav??v(k)?.nav??!0,channelTemplate:e?.channelTemplate??v(k)?.channelTemplate??S.value[0],articleTemplate:e?.articleTemplate??v(k)?.articleTemplate??D.value[0],pageSize:20,allowComment:e?.allowComment??v(k)?.allowComment??!0,allowContribute:e?.allowContribute??v(k)?.allowContribute??!0,allowSearch:e?.allowSearch??v(k)?.allowSearch??!0,orderDesc:e?.orderDesc??v(k)?.orderDesc??!0,customs:{}}),"to-values":e=>({...e}),perms:"channel","model-value":e.modelValue,"disable-edit":e=>!v(d).allChannelPermission&&null!=e.id&&!M.value.includes(e.id),"label-width":"120px",large:"","onUpdate:modelValue":a[29]||(a[29]=e=>l.$emit("update:modelValue",e)),onFinished:ee,onBeanChange:a[30]||(a[30]=async e=>{K.value=e?.channelModelId??v(k)?.channelModelId??x.value[0]?.id,await Z()})},{default:m((({bean:e})=>[c(E,null,{default:m((()=>[c(t,{span:18},{default:m((()=>[c(E,null,{default:m((()=>[c(t,{span:A.value.name.double?12:24},{default:m((()=>[c(n,{prop:"name",label:A.value.name.name??l.$t("channel.name"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:m((()=>[c(u,{ref_key:"focus",ref:$,modelValue:q.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value.name=e),maxlength:"50"},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"]),c(t,{span:A.value.alias.double?12:24},{default:m((()=>[c(n,{prop:"alias",rules:[{required:!0,message:()=>l.$t("v.required")},{pattern:/^[\w-]*$/,message:()=>l.$t("channel.error.aliasPattern")},{asyncValidator:async(a,u,n)=>{u!==e.alias&&await v(F)(u)?n(l.$t("channel.error.aliasExist")):n()}}]},{label:m((()=>[c(p,{label:A.value.alias.name??l.$t("channel.alias"),message:"channel.alias",help:""},null,8,["label"])])),default:m((()=>[c(u,{modelValue:q.value.alias,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value.alias=e),maxlength:"50"},null,8,["modelValue"])])),_:2},1032,["rules"])])),_:2},1032,["span"]),3===q.value.type?(s(),i(t,{key:0,span:A.value.linkUrl.double?12:24},{default:m((()=>[c(n,{prop:"linkUrl",rules:[{required:!0,message:()=>l.$t("v.required")},{pattern:/^(http|\/).*$/,message:()=>l.$t("channel.error.linkUrl")}]},{label:m((()=>[c(p,{label:A.value.linkUrl.name??l.$t("channel.linkUrl"),message:"channel.linkUrl",help:""},null,8,["label"])])),default:m((()=>[c(u,{modelValue:q.value.linkUrl,"onUpdate:modelValue":a[3]||(a[3]=e=>q.value.linkUrl=e),maxlength:"255"},{append:m((()=>[c(o,{modelValue:q.value.targetBlank,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value.targetBlank=e)},{default:m((()=>[b(h(l.$t("channel.targetBlank")),1)])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["span"])):y("",!0),q.value.type<3?(s(),f(_,{key:1},[A.value.seoTitle.show?(s(),i(t,{key:0,span:A.value.seoTitle.double?12:24},{default:m((()=>[c(n,{prop:"seoTitle",rules:A.value.seoTitle.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{label:m((()=>[c(p,{label:A.value.seoTitle.name??l.$t("channel.seoTitle"),message:"channel.seoTitle",help:""},null,8,["label"])])),default:m((()=>[c(u,{modelValue:q.value.seoTitle,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value.seoTitle=e),maxlength:"150"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["span"])):y("",!0),A.value.seoKeywords.show?(s(),i(t,{key:1,span:A.value.seoKeywords.double?12:24},{default:m((()=>[c(n,{prop:"seoKeywords",rules:A.value.seoKeywords.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{label:m((()=>[c(p,{label:A.value.seoKeywords.name??l.$t("channel.seoKeywords"),message:"channel.seoKeywords",help:""},null,8,["label"])])),default:m((()=>[c(u,{modelValue:q.value.seoKeywords,"onUpdate:modelValue":a[5]||(a[5]=e=>q.value.seoKeywords=e),maxlength:"150"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["span"])):y("",!0),A.value.seoDescription.show?(s(),i(t,{key:2,span:A.value.seoDescription.double?12:24},{default:m((()=>[c(n,{prop:"seoDescription",rules:A.value.seoDescription.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{label:m((()=>[c(p,{label:A.value.seoDescription.name??l.$t("channel.seoDescription"),message:"channel.seoDescription",help:""},null,8,["label"])])),default:m((()=>[c(u,{modelValue:q.value.seoDescription,"onUpdate:modelValue":a[6]||(a[6]=e=>q.value.seoDescription=e),maxlength:"1000"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["span"])):y("",!0)],64)):y("",!0),A.value.image.show?(s(),i(t,{key:2,span:A.value.image.double?12:24},{default:m((()=>[c(n,{prop:"image",label:A.value.image.name??l.$t("channel.image"),rules:A.value.image.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(v(ie),{modelValue:q.value.image,"onUpdate:modelValue":a[7]||(a[7]=e=>q.value.image=e),height:A.value.image.imageHeight,width:A.value.image.imageWidth,mode:A.value.image.imageMode},null,8,["modelValue","height","width","mode"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0),A.value.channelModel.show?(s(),i(t,{key:3,span:A.value.channelModel.double?12:24},{default:m((()=>[c(n,{prop:"channelModelId",label:A.value.channelModel.name??l.$t("channel.channelModel"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:m((()=>[c(U,{modelValue:q.value.channelModelId,"onUpdate:modelValue":a[8]||(a[8]=e=>q.value.channelModelId=e),class:"w-full",onChange:a[9]||(a[9]=e=>{K.value=e})},{default:m((()=>[(s(!0),f(_,null,g(I.value,(e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0),A.value.articleModel.show?(s(),i(t,{key:4,span:A.value.articleModel.double?12:24},{default:m((()=>[c(n,{prop:"articleModelId",label:A.value.articleModel.name??l.$t("channel.articleModel"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:m((()=>[c(U,{modelValue:q.value.articleModelId,"onUpdate:modelValue":a[10]||(a[10]=e=>q.value.articleModelId=e),class:"w-full"},{default:m((()=>[(s(!0),f(_,null,g(x.value,(e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0),[3,4,5].includes(q.value.type)?y("",!0):(s(),f(_,{key:5},[A.value.channelTemplate.show?(s(),i(t,{key:0,span:A.value.channelTemplate.double?12:24},{default:m((()=>[c(n,{prop:"channelTemplate",label:A.value.channelTemplate.name??l.$t("channel.channelTemplate"),rules:A.value.channelTemplate.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(U,{modelValue:q.value.channelTemplate,"onUpdate:modelValue":a[11]||(a[11]=e=>q.value.channelTemplate=e),class:"w-full"},{default:m((()=>[(s(!0),f(_,null,g(S.value,(e=>(s(),i(V,{key:e,label:e+".html",value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0),A.value.articleTemplate.show?(s(),i(t,{key:1,span:A.value.articleTemplate.double?12:24},{default:m((()=>[c(n,{prop:"articleTemplate",label:A.value.articleTemplate.name??l.$t("channel.articleTemplate"),rules:A.value.articleTemplate.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(U,{modelValue:q.value.articleTemplate,"onUpdate:modelValue":a[12]||(a[12]=e=>q.value.articleTemplate=e),class:"w-full"},{default:m((()=>[(s(!0),f(_,null,g(D.value,(e=>(s(),i(V,{key:e,label:e+".html",value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0)],64)),A.value.allowComment.show?(s(),i(t,{key:6,span:A.value.allowComment.double?12:24},{default:m((()=>[c(n,{prop:"allowComment",label:A.value.allowComment.name??l.$t("channel.allowComment"),rules:A.value.allowComment.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(j,{modelValue:q.value.allowComment,"onUpdate:modelValue":a[13]||(a[13]=e=>q.value.allowComment=e)},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0),A.value.allowContribute.show?(s(),i(t,{key:7,span:A.value.allowContribute.double?12:24},{default:m((()=>[c(n,{prop:"allowContribute",label:A.value.allowContribute.name??l.$t("channel.allowContribute"),rules:A.value.allowContribute.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(j,{modelValue:q.value.allowContribute,"onUpdate:modelValue":a[14]||(a[14]=e=>q.value.allowContribute=e)},null,8,["modelValue"])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0),A.value.nav.show?(s(),i(t,{key:8,span:A.value.nav.double?12:24},{default:m((()=>[c(n,{prop:"nav",rules:A.value.nav.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{label:m((()=>[c(p,{label:A.value.nav.name??l.$t("channel.nav"),message:"channel.nav",help:""},null,8,["label"])])),default:m((()=>[c(j,{modelValue:q.value.nav,"onUpdate:modelValue":a[15]||(a[15]=e=>q.value.nav=e)},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["span"])):y("",!0),A.value.allowSearch.show?(s(),i(t,{key:9,span:A.value.allowSearch.double?12:24},{default:m((()=>[c(n,{prop:"allowSearch",rules:A.value.allowSearch.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{label:m((()=>[c(p,{label:A.value.allowSearch.name??l.$t("channel.allowSearch"),message:"channel.allowSearch",help:""},null,8,["label"])])),default:m((()=>[c(j,{modelValue:q.value.allowSearch,"onUpdate:modelValue":a[16]||(a[16]=e=>q.value.allowSearch=e)},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["span"])):y("",!0),(s(!0),f(_,null,g(X.value,(e=>(s(),i(t,{key:e.code,span:e.double?12:24},{default:m((()=>[c(n,{prop:`customs.${e.code}`,rules:e.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{label:m((()=>[c(p,{label:e.name},null,8,["label"])])),default:m((()=>[c(de,{modelValue:q.value.customs[e.code],"onUpdate:modelValue":l=>q.value.customs[e.code]=l,"model-key":q.value.customs[e.code+"_key"],"onUpdate:modelKey":l=>q.value.customs[e.code+"_key"]=l,field:e},null,8,["modelValue","onUpdate:modelValue","model-key","onUpdate:modelKey","field"])])),_:2},1032,["prop","rules"])])),_:2},1032,["span"])))),128)),2===q.value.type?(s(),i(t,{key:10,span:A.value.text.double?12:24},{default:m((()=>[c(n,{prop:"text",label:A.value.text.name??l.$t("channel.text"),rules:A.value.text.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[w("div",me,[A.value.text.editorSwitch?(s(),i(B,{key:0,modelValue:q.value.editorType,"onUpdate:modelValue":a[17]||(a[17]=e=>q.value.editorType=e),class:"mr-6",onChange:a[18]||(a[18]=()=>q.value.markdown="")},{default:m((()=>[(s(),f(_,null,g([1,2],(e=>c(z,{key:e,label:e},{default:m((()=>[b(h(l.$t(`model.field.editorType.${e}`)),1)])),_:2},1032,["label"]))),64))])),_:1},8,["modelValue"])):y("",!0),2===q.value.editorType?(s(),i(v(se),{key:1,modelValue:q.value.markdown,"onUpdate:modelValue":a[19]||(a[19]=e=>q.value.markdown=e),html:q.value.text,"onUpdate:html":a[20]||(a[20]=e=>q.value.text=e),class:"leading-6"},null,8,["modelValue","html"])):(s(),i(v(oe),{key:2,ref:"tinyText",modelValue:q.value.text,"onUpdate:modelValue":a[21]||(a[21]=e=>q.value.text=e)},null,8,["modelValue"]))])])),_:1},8,["label","rules"])])),_:1},8,["span"])):y("",!0)])),_:2},1024)])),_:2},1024),c(t,{span:6,class:"el-form--label-top label-top"},{default:m((()=>[c(G,{type:"border-card",class:"ml-5"},{default:m((()=>[c(N,{label:l.$t("channel.tabs.setting")},{default:m((()=>[c(n,{prop:"parentId",label:W.value.parent.name??l.$t("channel.parent")},{default:m((()=>[c(Q,{modelValue:q.value.parentId,"onUpdate:modelValue":a[22]||(a[22]=e=>q.value.parentId=e),data:Y.value,"node-key":"id",props:{label:"name",disabled:"disabled"},"render-after-expand":!1,"check-strictly":"",clearable:"",class:"w-full"},null,8,["modelValue","data"])])),_:1},8,["label"]),c(n,{prop:"type",label:W.value.type.name??l.$t("channel.type"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:m((()=>[c(U,{modelValue:q.value.type,"onUpdate:modelValue":a[23]||(a[23]=e=>q.value.type=e),class:"w-full"},{default:m((()=>[(s(),f(_,null,g([1,2,3,4],(e=>c(V,{key:e,label:l.$t(`channel.type.${e}`),value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"]),c(n,{prop:"processKey",label:W.value.processKey.name??l.$t("channel.processKey"),rules:W.value.processKey.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(U,{modelValue:q.value.processKey,"onUpdate:modelValue":a[24]||(a[24]=e=>q.value.processKey=e),clearable:"",class:"w-full"},{default:m((()=>[(s(!0),f(_,null,g(C.value,(e=>(s(),i(V,{key:e.key,label:e.name,value:e.key},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"]),v(d).epRank>=3&&W.value.performanceType.show?(s(),i(n,{key:0,prop:"performanceType",label:W.value.performanceType.name??l.$t("channel.performanceType"),rules:W.value.performanceType.required?{required:!0,message:()=>l.$t("v.required")}:void 0},{default:m((()=>[c(U,{modelValue:q.value.performanceTypeId,"onUpdate:modelValue":a[25]||(a[25]=e=>q.value.performanceTypeId=e),clearable:"",class:"w-full"},{default:m((()=>[(s(!0),f(_,null,g(T.value,(e=>(s(),i(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label","rules"])):y("",!0),c(n,{prop:"pageSize",label:W.value.pageSize.name??l.$t("channel.pageSize"),rules:{required:!0,message:()=>l.$t("v.required")}},{default:m((()=>[c(H,{modelValue:q.value.pageSize,"onUpdate:modelValue":a[26]||(a[26]=e=>q.value.pageSize=e),min:1,max:200},null,8,["modelValue"])])),_:1},8,["label","rules"]),c(n,{prop:"orderDesc",rules:{required:!0,message:()=>l.$t("v.required")}},{label:m((()=>[c(p,{label:W.value.orderDesc.name??l.$t("channel.orderDesc"),message:"channel.orderDesc",help:""},null,8,["label"])])),default:m((()=>[c(j,{modelValue:q.value.orderDesc,"onUpdate:modelValue":a[27]||(a[27]=e=>q.value.orderDesc=e)},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["label"])])),_:1})])),_:1})])),_:2},1024)])),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","model-value","disable-edit"])}}}),ve=V(ce,[["__scopeId","data-v-42e934ca"]]),pe={class:"my-1 ml-2"},be={class:"mb-3"},he={class:"mt-3 app-block"};e("default",a({name:"ChannelList",setup(e){const{t:l}=k(),a=n({}),u=n(),p=n(),y=n([]),f=n([]),_=n(!1),g=n(!1),V=n(),z=n(),B=t((()=>y.value.map((e=>e.id)))),F=n(!1),R=n([]),O=n([]),L=n(),H=n([]),N=n(!1),le=n(),ae=n(),ue=e=>d.allChannelPermission||R.value.includes(e.id);o(le,(e=>{L.value.filter(e)}));const ne=async()=>{_.value=!0;try{const e=Object.values(a.value).filter((e=>void 0!==e&&""!==e)).length>0;y.value=await Q({...T(a.value),parentId:ae.value?.id,isIncludeChildren:e,Q_OrderBy:u.value}),F.value=e||void 0!==u.value}finally{_.value=!1}},te=()=>{(async()=>{N.value=!0;try{H.value=E(await Q({isOnlyParent:!0})),C((()=>{null!=le.value&&L.value.filter(le.value),L.value.setCurrentKey(ae.value?.id)}))}finally{N.value=!1}})(),ne()},de=async()=>{R.value=await G()};$((()=>{te(),(async()=>{d.epRank>0&&(O.value=await J({category:"sys_article",latestVersion:!0}))})(),de()}));const oe=({column:e,prop:l,order:a})=>{u.value=l&&a?(e.sortBy??l)+("descending"===a?"_desc":""):void 0,te()},re=()=>{te(),de()},se=()=>ne(),ie=()=>{p.value.clearSort(),D(a.value),u.value=void 0,ne()},me=e=>{z.value=void 0,V.value=e??ae.value,g.value=!0},ce=e=>{z.value=e,V.value=null,g.value=!0},ye=async e=>{await P(e),te(),K.success(l("success"))};return(e,l)=>{const u=r("el-input"),n=r("el-button"),t=r("el-tree"),d=r("el-scrollbar"),o=r("el-aside"),k=r("el-popconfirm"),$=r("el-table-column"),C=r("el-tag"),T=r("el-table"),D=r("el-main"),K=r("el-container"),E=q("loading");return s(),i(K,null,{default:m((()=>[c(o,{width:"220px",class:"pr-3"},{default:m((()=>[c(d,{class:"p-2 bg-white rounded-sm"},{default:m((()=>[c(u,{modelValue:le.value,"onUpdate:modelValue":l[0]||(l[0]=e=>le.value=e),"suffix-icon":v(U),size:"small"},null,8,["modelValue","suffix-icon"]),w("div",pe,[c(n,{type:null==ae.value?"primary":void 0,link:"",onClick:l[1]||(l[1]=()=>{L.value.setCurrentKey(null),ae.value=void 0,se()})},{default:m((()=>[b(h(e.$t("channel.root")),1)])),_:1},8,["type"])]),I(c(t,{ref_key:"channelTree",ref:L,data:H.value,props:{label:"name"},"expand-on-click-node":!1,"node-key":"id","highlight-current":"","filter-node-method":(e,l)=>!e||l.name.includes(e),onNodeClick:l[2]||(l[2]=e=>{ae.value=e,se()})},null,8,["data","filter-node-method"]),[[E,N.value]])])),_:1})])),_:1}),c(D,{class:"p-0"},{default:m((()=>[w("div",be,[c(v(W),{params:a.value,onSearch:se,onReset:ie},{default:m((()=>[c(v(X),{label:e.$t("channel.name"),name:"Q_Contains_name"},null,8,["label"]),c(v(X),{label:e.$t("channel.alias"),name:"Q_Contains_alias"},null,8,["label"])])),_:1},8,["params"])]),w("div",null,[c(n,{type:"primary",disabled:v(x)("channel:create"),icon:v(M),onClick:l[3]||(l[3]=()=>me(void 0))},{default:m((()=>[b(h(e.$t("add")),1)])),_:1},8,["disabled","icon"]),c(k,{title:e.$t("confirmDelete"),onConfirm:l[4]||(l[4]=()=>ye(f.value.map((e=>e.id))))},{reference:m((()=>[c(n,{disabled:f.value.length<=0||v(x)("channel:delete"),icon:v(S)},{default:m((()=>[b(h(e.$t("delete")),1)])),_:1},8,["disabled","icon"])])),_:1},8,["title"]),c(ee,{disabled:f.value.length<=0||F.value||v(x)("channel:update"),class:"ml-2",onMove:l[5]||(l[5]=e=>(async(e,l)=>{const a=j(e,y.value,l);await A(a),await te(),e.forEach((()=>{p.value.toggleRowSelection(y.value)}))})(f.value,e))},null,8,["disabled"]),c(v(Y),{name:"channel",class:"ml-2"})]),w("div",he,[I((s(),i(T,{ref_key:"table",ref:p,"row-key":"id",data:y.value,onSelectionChange:l[6]||(l[6]=e=>f.value=e),onRowDblclick:l[7]||(l[7]=e=>ce(e.id)),onSortChange:oe},{default:m((()=>[c(v(Z),{name:"channel"},{default:m((()=>[c($,{type:"selection",selectable:ue,width:"45"}),c($,{property:"name",label:e.$t("channel.name"),"min-width":"120",sortable:"custom"},null,8,["label"]),c($,{property:"alias",label:e.$t("channel.alias"),"min-width":"80",sortable:"custom"},null,8,["label"]),c($,{property:"channelModel.name",label:e.$t("channel.channelModel"),"sort-by":"channelModel@model-name",display:"none",sortable:"custom","min-width":"60"},null,8,["label"]),c($,{property:"articleModel.name",label:e.$t("channel.articleModel"),"sort-by":"articleModel@model-name",sortable:"custom","min-width":"60"},null,8,["label"]),c($,{property:"processKey",label:e.$t("channel.processKey"),"min-width":"60",sortable:"custom","show-overflow-tooltip":""},{default:m((({row:e})=>[b(h(null!=e.processKey?O.value.find((l=>l.key===e.processKey))?.name:void 0),1)])),_:1},8,["label"]),c($,{property:"nav",label:e.$t("channel.nav"),"min-width":"40"},{default:m((({row:l})=>[c(C,{type:l.nav?"success":"info",size:"small"},{default:m((()=>[b(h(e.$t(l.nav?"yes":"no")),1)])),_:2},1032,["type"])])),_:1},8,["label"]),c($,{property:"id",label:"ID",width:"80",sortable:"custom"}),c($,{label:e.$t("table.action")},{default:m((({row:l})=>[c(n,{type:"primary",disabled:v(x)("channel:create")||!ue(l),size:"small",link:"",onClick:()=>me(l)},{default:m((()=>[b(h(e.$t("addChild")),1)])),_:2},1032,["disabled","onClick"]),c(n,{type:"primary",disabled:v(x)("channel:update"),size:"small",link:"",onClick:()=>ce(l.id)},{default:m((()=>[b(h(e.$t("edit")),1)])),_:2},1032,["disabled","onClick"]),c(k,{title:e.$t("confirmDelete"),onConfirm:()=>ye([l.id])},{reference:m((()=>[c(n,{type:"primary",disabled:v(x)("channel:delete")||!ue(l),size:"small",link:""},{default:m((()=>[b(h(e.$t("delete")),1)])),_:2},1032,["disabled"])])),_:2},1032,["title","onConfirm"])])),_:1},8,["label"])])),_:1})])),_:1},8,["data"])),[[E,_.value]])]),c(ve,{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e),"bean-id":z.value,"bean-ids":B.value,parent:V.value,onFinished:re},null,8,["modelValue","bean-id","bean-ids","parent"])])),_:1})])),_:1})}}}))}}}));
