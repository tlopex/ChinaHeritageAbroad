import{b7 as C,b8 as m,d as y,p as h,u as v,a6 as _}from"./index-b174b04d.js";const I="ujcms_column_settings";function O(){const t=localStorage.getItem(I);return t?JSON.parse(t):{}}const d=C({}),l=C(O());function L(){localStorage.setItem(I,JSON.stringify(l))}const R=t=>(d[t]||(d[t]=[]),m(d,t)),N=(t,i)=>{for(let n=0,a=t.length;n<a;)i.findIndex(f=>f.title===t[n].title)===-1?(t.splice(n,1),a-=1):n+=1;return i.forEach(n=>{t.findIndex(a=>a.title===n.title)===-1&&t.push({...n})}),t},b=(t,i)=>{d[t]=i,l[t]||(l[t]=[]);const n=l[t];N(n,i)},T=t=>(l[t]||(l[t]=[]),m(l,t)),j=y({name:"ColumnList",props:{name:{type:String,required:!0}},setup(t,{slots:i}){var g,S;const{name:n}=h(t),{t:a}=v(),f=(S=(g=i.default)==null?void 0:g.call(i))!=null?S:[],s=e=>(e==null?void 0:e.type)==="selection"?a("table.selection"):e==null?void 0:e.label,x=f.map(e=>{var r;return{title:s(e.props),display:((r=e.props)==null?void 0:r.display)!=="none"}});b(n.value,x);const c=T(n.value);return{columns:_(()=>f.filter(e=>{const r=c.value.find(u=>s(e.props)===u.title);return!r||r.display}).map(e=>({...e,key:s(e.props)})).sort((e,r)=>{let u=c.value.findIndex(o=>o.title===s(e));u<0&&(u=f.findIndex(o=>s(o)===s(e)));let p=c.value.findIndex(o=>o.title===s(r));return p<0&&(p=f.findIndex(o=>s(o)===s(r))),u-p}))}},render(){return this.columns}});export{j as _,R as a,T as g,N as m,L as s};
