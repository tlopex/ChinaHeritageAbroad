import{d as l,u as d,D as c,r as i,T as u,_ as p,b as _,e as g,I as m,k as s,t,i as h,w as f,l as b}from"./index-53093fce.js";const $=l({name:"ErrorPage403",setup(){const{t:e}=d(),o=c();return{message:i(e("error.forbidden")),handleLogout:()=>{u(),o.push("/login")}}}}),k={class:"h-full p-4 bg-gray-200"},w={class:"p-4 rounded shadow bg-white"},x=s("h1",{class:"font-bold text-3xl"},"403",-1),y={class:"mt-4"},C={class:"mt-4"};function v(e,o,n,a,B,L){const r=_("el-button");return g(),m("div",k,[s("div",w,[x,s("p",y,t(e.message),1),s("p",C,[h(r,{type:"primary",plain:"",onClick:o[0]||(o[0]=()=>e.handleLogout())},{default:f(()=>[b(t(e.$t("logout")),1)]),_:1})])])])}const V=p($,[["render",v]]);export{V as default};
