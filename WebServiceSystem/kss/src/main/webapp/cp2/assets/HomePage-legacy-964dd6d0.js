System.register(["./index-legacy-414c7520.js","./duration-legacy-23177e96.js","./stat-legacy-d608eb3d.js","./content-legacy-eb19b01d.js","./interaction-legacy-86730f36.js"],(function(t,e){"use strict";var a,l,s,n,i,u,r,d,o,c,v,p,f,y,x,m,g,b,w,_,h,k,C,$,j,Y,S,D,V,M,q,A,O,P;return{setters:[t=>{a=t.d,l=t.u,s=t.U,n=t.V,i=t.r,u=t.o,r=t.W,d=t.b,o=t.e,c=t.I,v=t.i,p=t.w,f=t.f,y=t.k,x=t.j,m=t.X,g=t.l,b=t.t,w=t.h,_=t.Y,h=t.Z,k=t.J,C=t.$,$=t.a0,j=t.a1,Y=t.a2,S=t.a3},t=>{D=t.d},t=>{V=t.q,M=t.a,q=t.b},t=>{A=t.q,O=t.a},t=>{P=t.q}],execute:function(){const e={class:"mb-3 shadow-md bg-warning-lighter"},z={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},R={class:"flex items-center"},T={class:"mb-3 shadow-md bg-warning-lighter"},B={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},H={class:"flex items-center"},L={class:"mb-3 shadow-md bg-warning-lighter"},I={class:"flex items-center justify-between px-4 py-3 text-xl text-warning"},W={class:"flex items-center"},E={class:"p-3 app-block"},F={class:"text-sm text-gray-secondary"},G={class:"flex items-end justify-between mt-1"},J={class:"text-3xl text-primary"},U={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-primary"},X={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},Z={class:"p-3 app-block"},K={class:"text-sm text-gray-secondary"},N={class:"flex items-end justify-between mt-1"},Q={class:"text-3xl text-primary"},tt={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-warning"},et={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},at={class:"p-3 app-block"},lt={class:"text-sm text-gray-secondary"},st={class:"flex items-end justify-between mt-1"},nt={class:"text-3xl text-primary"},it={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-success"},ut={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},rt={class:"p-3 app-block"},dt={class:"text-sm text-gray-secondary"},ot={class:"flex items-end justify-between mt-1"},ct={class:"text-3xl text-primary"},vt={class:"flex items-center justify-center w-12 h-12 text-xl text-white rounded bg-danger"},pt={class:"flex justify-between pt-2 mt-3 text-xs border-t text-gray-regular"},ft={class:"px-3 py-5 mt-3 app-block"},yt={class:"flex p-3 mt-3 justify-evenly app-block"},xt={class:"h-64 w-60 text-primary"},mt={class:"mt-2 text-center"},gt={class:"flex items-center justify-center mt-2"},bt={class:"text-3xl"},wt={key:0},_t={key:1},ht={class:"mt-4 space-y-2 text-sm"},kt={key:0},Ct={key:1},$t={key:0},jt={key:1},Yt={key:0},St={key:1},Dt={class:"h-64 w-60 text-gray-secondary"},Vt={class:"mt-2 text-center"},Mt={class:"flex items-center justify-center mt-2"},qt={class:"text-3xl"},At={key:0},Ot={key:1},Pt={class:"mt-4 space-y-2 text-sm"},zt={key:0},Rt={key:1},Tt={key:0},Bt={key:1},Ht={key:0},Lt={key:1},It={class:"p-3 mt-3 app-block"};t("default",a({__name:"HomePage",setup(t){const{t:a,n:Wt}=l();s.extend(D);const Et=n(),Ft=n(),Gt=i({}),Jt=i({}),Ut=i({}),Xt=i(0),Zt=i(0),Kt=i(0);return u((async()=>{r("articleReview:list")&&((async()=>{S.epRank>=1&&(Xt.value=await A())})(),(async()=>{S.epRank>=1&&(Zt.value=await O())})()),r("messageBoard:list")&&(async()=>{Kt.value=await P()})(),(async()=>{const t=await V({begin:s().startOf("day").subtract(1,"day").format(),end:s().endOf("day").format()}),e={tooltip:{trigger:"axis"},legend:{data:[a("visitTrend.yesterdayPv"),a("visitTrend.todayPv")]},grid:{left:16,right:16,top:40,bottom:0,containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1},data:Array.from(Array(24).keys())},yAxis:{type:"value",minInterval:1},series:[{name:a("visitTrend.yesterdayPv"),type:"line",symbol:"circle",color:"#a0cfff",data:t.filter((t=>s(t.date)<s().startOf("day"))).map((t=>t.pvCount))},{name:a("visitTrend.todayPv"),type:"line",symbol:"circle",color:"#409eff",areaStyle:{color:"#ecf5ff"},data:t.filter((t=>s(t.date)>=s().startOf("day"))).map((t=>t.pvCount))}]},l=Et.value;if(null==l)return;let n=j.getInstanceByDom(l);null==n&&(n=j.init(l)),n.setOption(e),window.addEventListener("resize",(function(){n&&n.resize()}))})(),(async()=>{const t=await M({begin:s().subtract(30,"day").format("YYYY-MM-DD"),end:s().format("YYYY-MM-DD")}),e={title:{text:a("menu.stat.visitSource"),textStyle:{color:"#909399",fontWeight:"normal",fontSize:16}},legend:{type:"scroll",orient:"vertical",right:"10%",top:16,bottom:16},tooltip:{trigger:"item",valueFormatter:t=>Wt(t)},series:[{name:a("menu.stat.visitSource"),type:"pie",radius:["44%","80%"],center:["40%","54%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!1},emphasis:{label:{show:!1}},labelLine:{show:!1},data:t.map((t=>({value:t.pvCount,name:a(`visitSource.type.${t.name}`)})))}]},l=Ft.value;if(null==l)return;let n=j.getInstanceByDom(l);null==n&&(n=j.init(l)),n.setOption(e),window.addEventListener("resize",(function(){n&&n.resize()}))})(),(async()=>{const t=await q({begin:s().subtract(30,"day").format("YYYY-MM-DD"),end:s().format("YYYY-MM-DD")});Gt.value=t.newVisitor,Jt.value=t.oldVisitor;const e=Gt.value.uvCount+Jt.value.uvCount;e>0?(Gt.value.proportion=100*Gt.value.uvCount/e,Jt.value.proportion=100*Jt.value.uvCount/e):(Gt.value.proportion=50,Jt.value.proportion=50)})(),(async()=>{Ut.value=await Y()})()})),(t,a)=>{const l=d("el-icon"),n=d("el-link"),i=d("el-col"),u=d("el-row");return o(),c("div",null,[v(u,{gutter:12},{default:p((()=>[Xt.value>0?(o(),f(i,{key:0,span:6},{default:p((()=>[y("div",e,[y("div",z,[y("div",R,[v(l,null,{default:p((()=>[v(x(m))])),_:1}),v(n,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:a[0]||(a[0]=()=>t.$router.push({path:"/content/article-review"}))},{default:p((()=>[g(b(t.$t("todo.pendingArticle")),1)])),_:1})]),y("div",null,[v(n,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:a[1]||(a[1]=()=>t.$router.push({path:"/content/article-review"}))},{default:p((()=>[g(b(Xt.value),1)])),_:1})])])])])),_:1})):w("",!0),Zt.value>0?(o(),f(i,{key:1,span:6},{default:p((()=>[y("div",T,[y("div",B,[y("div",H,[v(l,null,{default:p((()=>[v(x(m))])),_:1}),v(n,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:a[2]||(a[2]=()=>t.$router.push({path:"/content/article",query:{status:22}}))},{default:p((()=>[g(b(t.$t("todo.rejectedArticle")),1)])),_:1})]),y("div",null,[v(n,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:a[3]||(a[3]=()=>t.$router.push({path:"/content/article",query:{status:22}}))},{default:p((()=>[g(b(Zt.value),1)])),_:1})])])])])),_:1})):w("",!0),Kt.value>0?(o(),f(i,{key:2,span:6},{default:p((()=>[y("div",L,[y("div",I,[y("div",W,[v(l,null,{default:p((()=>[v(x(m))])),_:1}),v(n,{class:"ml-1 text-base",type:"warning",underline:!1,onClick:a[4]||(a[4]=()=>t.$router.push({path:"/interaction/message-board",query:{status:1}}))},{default:p((()=>[g(b(t.$t("todo.unreviewedMessageBoard")),1)])),_:1})]),y("div",null,[v(n,{class:"ml-1 text-xl",type:"warning",underline:!1,onClick:a[5]||(a[5]=()=>t.$router.push({path:"/interaction/message-board",query:{status:1}}))},{default:p((()=>[g(b(Kt.value),1)])),_:1})])])])])),_:1})):w("",!0)])),_:1}),v(u,{gutter:12},{default:p((()=>[v(i,{span:6},{default:p((()=>[y("div",E,[y("div",F,b(t.$t("contentStat.article")),1),y("div",G,[y("div",J,b(Ut.value.article?.total),1),y("div",U,[v(l,null,{default:p((()=>[v(x(_))])),_:1})])]),y("div",X,[y("div",null,b(t.$t("contentStat.last7day")),1),y("div",null,b(Ut.value.article?.last7day),1)])])])),_:1}),v(i,{span:6},{default:p((()=>[y("div",Z,[y("div",K,b(t.$t("contentStat.channel")),1),y("div",N,[y("div",Q,b(Ut.value.channel?.total),1),y("div",tt,[v(l,null,{default:p((()=>[v(x(h))])),_:1})])]),y("div",et,[y("div",null,b(t.$t("contentStat.last7day")),1),y("div",null,b(Ut.value.channel?.last7day),1)])])])),_:1}),v(i,{span:6},{default:p((()=>[y("div",at,[y("div",lt,b(t.$t("contentStat.user")),1),y("div",st,[y("div",nt,b(Ut.value.user?.total),1),y("div",it,[v(l,null,{default:p((()=>[v(x(k))])),_:1})])]),y("div",ut,[y("div",null,b(t.$t("contentStat.last7day")),1),y("div",null,b(Ut.value.user?.last7day),1)])])])),_:1}),v(i,{span:6},{default:p((()=>[y("div",rt,[y("div",dt,b(t.$t("contentStat.attachment")),1),y("div",ot,[y("div",ct,b(Ut.value.attachment?.total),1),y("div",vt,[v(l,null,{default:p((()=>[v(x(C))])),_:1})])]),y("div",pt,[y("div",null,b(t.$t("contentStat.last7day")),1),y("div",null,b(Ut.value.attachment?.last7day),1)])])])),_:1})])),_:1}),y("div",ft,[y("div",{ref_key:"trendChart",ref:Et,class:"h-64"},null,512)]),v(u,{gutter:12},{default:p((()=>[v(i,{span:12},{default:p((()=>[y("div",yt,[y("div",xt,[y("div",mt,b(t.$t("visitVisitor.newVisitor")),1),y("div",gt,[v(l,{class:"text-5xl"},{default:p((()=>[v(x($))])),_:1}),y("span",bt,[Gt.value.uvCount>0?(o(),c("span",wt,b(t.$n(Gt.value.proportion??0,"decimal")),1)):(o(),c("span",_t,"-")),g("% ")])]),y("div",ht,[v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visitVisitor.pv")),1)])),_:1}),v(i,{span:12},{default:p((()=>[g(b(Gt.value.pvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visitVisitor.uv")),1)])),_:1}),v(i,{span:12},{default:p((()=>[g(b(Gt.value.uvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visit.bounceRate")),1)])),_:1}),v(i,{span:12},{default:p((()=>[Gt.value.uvCount>0?(o(),c("span",kt,b(t.$n(100*Gt.value.bounceCount/Gt.value.uvCount,"decimal"))+"%",1)):(o(),c("span",Ct,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visit.averageDuration")),1)])),_:1}),v(i,{span:12},{default:p((()=>[Gt.value.uvCount>0?(o(),c("span",$t,b(x(s).duration(Gt.value.duration/Gt.value.uvCount,"seconds").format("HH:mm:ss")),1)):(o(),c("span",jt,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visit.averagePv")),1)])),_:1}),v(i,{span:12},{default:p((()=>[Gt.value.uvCount>0?(o(),c("span",Yt,b(t.$n(Gt.value.pvCount/Gt.value.uvCount,"decimal")),1)):(o(),c("span",St,"-"))])),_:1})])),_:1})])]),y("div",Dt,[y("div",Vt,b(t.$t("visitVisitor.oldVisitor")),1),y("div",Mt,[v(l,{class:"text-5xl"},{default:p((()=>[v(x($))])),_:1}),y("span",qt,[Jt.value.uvCount>0?(o(),c("span",At,b(t.$n(Jt.value.proportion??0,"decimal")),1)):(o(),c("span",Ot,"-")),g("% ")])]),y("div",Pt,[v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visitVisitor.pv")),1)])),_:1}),v(i,{span:12},{default:p((()=>[g(b(Jt.value.pvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visitVisitor.uv")),1)])),_:1}),v(i,{span:12},{default:p((()=>[g(b(Jt.value.uvCount),1)])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visit.bounceRate")),1)])),_:1}),v(i,{span:12},{default:p((()=>[Jt.value.uvCount>0?(o(),c("span",zt,b(t.$n(100*Jt.value.bounceCount/Jt.value.uvCount,"decimal"))+"%",1)):(o(),c("span",Rt,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visit.averageDuration")),1)])),_:1}),v(i,{span:12},{default:p((()=>[Jt.value.uvCount>0?(o(),c("span",Tt,b(x(s).duration(Jt.value.duration/Jt.value.uvCount,"seconds").format("HH:mm:ss")),1)):(o(),c("span",Bt,"-"))])),_:1})])),_:1}),v(u,{gutter:24},{default:p((()=>[v(i,{span:12,class:"text-right"},{default:p((()=>[g(b(t.$t("visit.averagePv")),1)])),_:1}),v(i,{span:12},{default:p((()=>[Jt.value.uvCount>0?(o(),c("span",Ht,b(t.$n(Jt.value.pvCount/Jt.value.uvCount,"decimal")),1)):(o(),c("span",Lt,"-"))])),_:1})])),_:1})])])])])),_:1}),v(i,{span:12},{default:p((()=>[y("div",It,[y("div",{ref_key:"sourceTypeChart",ref:Ft,class:"w-full h-64"},null,512)])])),_:1})])),_:1})])}}}))}}}));