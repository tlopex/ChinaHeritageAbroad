import{aR as t}from"./index-53093fce.js";const s="../api/backend/core/jod-convert/doc",o="../api/backend/core/jod-convert/library",r=async()=>(await t.get("/backend/core/jod-convert/enabled")).data,d=async a=>(await t.get("/backend/core/channel",{params:a})).data,i=async a=>(await t.get(`/backend/core/channel/${a}`)).data,l=async a=>(await t.post("/backend/core/channel",a)).data,y=async a=>(await t.post("/backend/core/channel?_method=put",a)).data,p=async a=>(await t.post("/backend/core/channel/order?_method=put",a)).data,k=async a=>(await t.post("/backend/core/channel?_method=delete",a)).data,b=async()=>(await t.get("/backend/core/channel/channel-permissions")).data,h=async()=>(await t.get("/backend/core/channel/channel-templates")).data,m=async()=>(await t.get("/backend/core/channel/article-templates")).data,u=async a=>(await t.get("/backend/core/channel/alias-exist",{params:{alias:a}})).data,w=async a=>(await t.get("/backend/core/article",{params:a})).data,g=async a=>(await t.get("/backend/core/article/reject-count",{params:a})).data,A=async a=>(await t.get(`/backend/core/article/${a}`)).data,_=async(a,e,c)=>(await t.get("/backend/core/article/title-similarity",{params:{similarity:a,title:e,excludeId:c}})).data,q=async a=>(await t.post("/backend/core/article",a)).data,C=async a=>(await t.post("/backend/core/article?_method=put",a)).data,x=async(a,e)=>(await t.post("/backend/core/article/update-order",{fromId:a,toId:e})).data,v=async a=>(await t.post("/backend/core/article/internal-push",a)).data,f=async a=>(await t.post("/backend/core/article/external-push",a)).data,j=async(a,e,c)=>(await t.post("/backend/core/article/sticky?_method=put",{ids:a,sticky:e,stickyDate:c})).data,D=async a=>(await t.post("/backend/core/article/delete?_method=put",a)).data,T=async a=>(await t.post("/backend/core/article/submit?_method=put",a)).data,B=async a=>(await t.post("/backend/core/article/archive?_method=put",a)).data,$=async a=>(await t.post("/backend/core/article/offline?_method=put",a)).data,I=async a=>(await t.post("/backend/core/article?_method=delete",a)).data,L=async a=>(await t.get("/backend/core/article-review/pending-count",{params:a})).data,P=async a=>(await t.post("/backend/core/article-review/pass?_method=put",a)).data,O=async(a,e)=>(await t.post("/backend/core/article-review/reject?_method=put",{ids:a,reason:e})).data,R=async a=>(await t.get("/backend/core/block-item",{params:a})).data,E=async a=>(await t.get(`/backend/core/block-item/${a}`)).data,S=async a=>(await t.post("/backend/core/block-item",a)).data,U=async a=>(await t.post("/backend/core/block-item?_method=put",a)).data,H=async a=>(await t.post("/backend/core/block-item/order?_method=put",a)).data,J=async a=>(await t.post("/backend/core/block-item?_method=delete",a)).data,z=async a=>(await t.get("/backend/core/dict",{params:a})).data,F=async(a,e)=>(await t.get("/backend/core/dict/list-by-alias",{params:{alias:a,name:e}})).data,G=async a=>(await t.get(`/backend/core/dict/${a}`)).data,K=async a=>(await t.post("/backend/core/dict",a)).data,M=async a=>(await t.post("/backend/core/dict?_method=put",a)).data,N=async a=>(await t.post("/backend/core/dict/order?_method=put",a)).data,Q=async a=>(await t.post("/backend/core/dict?_method=delete",a)).data,V=async()=>(await t.post("/backend/core/generator/fulltext-reindex-all")).data,W=async()=>(await t.post("/backend/core/generator/fulltext-reindex-site")).data,X=async()=>(await t.post("/backend/core/generator/html-all")).data,Y=async()=>(await t.post("/backend/core/generator/html-home")).data,Z=async()=>(await t.post("/backend/core/generator/html-channel")).data,aa=async()=>(await t.post("/backend/core/generator/html-article")).data,ta=async a=>(await t.get("/backend/core/tag",{params:a})).data,ea=async a=>(await t.get("/backend/core/tag/list",{params:a})).data,ca=async a=>(await t.get(`/backend/core/tag/${a}`)).data,na=async a=>(await t.post("/backend/core/tag",a)).data,sa=async a=>(await t.post("/backend/core/tag?_method=put",a)).data,oa=async a=>(await t.post("/backend/core/tag?_method=delete",a)).data;export{Y as $,u as A,i as B,l as C,y as D,k as E,h as F,b as G,p as H,R as I,U as J,H as K,E as L,S as M,G as N,K as O,M as P,Q,z as R,N as S,ca as T,na as U,sa as V,oa as W,ta as X,V as Y,W as Z,X as _,g as a,Z as a0,aa as a1,s as b,A as c,q as d,I as e,ea as f,r as g,F as h,d as i,o as j,m as k,D as l,B as m,_ as n,$ as o,P as p,L as q,O as r,T as s,v as t,C as u,f as v,w,x,J as y,j as z};
