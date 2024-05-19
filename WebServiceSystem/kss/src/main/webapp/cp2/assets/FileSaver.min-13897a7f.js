import{aF as a,aM as r}from"./index-b174b04d.js";const U="../api/backend/ext/web-file-template/upload",T="../api/backend/ext/web-file-template/upload-zip",E=async e=>(await a.get("/backend/ext/web-file-template",{params:e})).data,H=async e=>(await a.get("/backend/ext/web-file-template/show",{params:{id:e}})).data,L=async(e,s)=>(await a.post("/backend/ext/web-file-template/download-zip",{dir:e,names:s},{responseType:"blob"})).data,_=async e=>(await a.post("/backend/ext/web-file-template",e)).data,g=async e=>(await a.post("/backend/ext/web-file-template/mkdir",e)).data,j=async e=>(await a.post("/backend/ext/web-file-template?_method=put",e)).data,R=async e=>(await a.post("/backend/ext/web-file-template/rename?_method=put",e)).data,A=async(e,s,l)=>(await a.post("/backend/ext/web-file-template/copy",{dir:e,names:s,destDir:l})).data,B=async(e,s,l)=>(await a.post("/backend/ext/web-file-template/move",{dir:e,names:s,destDir:l})).data,q=async e=>(await a.post("/backend/ext/web-file-template?_method=delete",e)).data,M="../api/backend/ext/web-file-upload/upload",O="../api/backend/ext/web-file-upload/upload-zip",D=async e=>(await a.get("/backend/ext/web-file-upload",{params:e})).data,S=async e=>(await a.get("/backend/ext/web-file-upload/show",{params:{id:e}})).data,z=async(e,s)=>(await a.post("/backend/ext/web-file-upload/download-zip",{dir:e,names:s},{responseType:"blob"})).data,$=async e=>(await a.post("/backend/ext/web-file-upload",e)).data,Z=async e=>(await a.post("/backend/ext/web-file-upload/mkdir",e)).data,G=async e=>(await a.post("/backend/ext/web-file-upload?_method=put",e)).data,C=async e=>(await a.post("/backend/ext/web-file-upload/rename?_method=put",e)).data,K=async(e,s,l)=>(await a.post("/backend/ext/web-file-upload/copy",{dir:e,names:s,destDir:l})).data,X=async(e,s,l)=>(await a.post("/backend/ext/web-file-upload/move",{dir:e,names:s,destDir:l})).data,I=async e=>(await a.post("/backend/ext/web-file-upload?_method=delete",e)).data,J="../api/backend/ext/web-file-html/upload",N="../api/backend/ext/web-file-html/upload-zip",P=async e=>(await a.get("/backend/ext/web-file-html",{params:e})).data,Q=async e=>(await a.get("/backend/ext/web-file-html/show",{params:{id:e}})).data,V=async(e,s)=>(await a.post("/backend/ext/web-file-html/download-zip",{dir:e,names:s},{responseType:"blob"})).data,Y=async e=>(await a.post("/backend/ext/web-file-html",e)).data,ee=async e=>(await a.post("/backend/ext/web-file-html/mkdir",e)).data,ae=async e=>(await a.post("/backend/ext/web-file-html?_method=put",e)).data,te=async e=>(await a.post("/backend/ext/web-file-html/rename?_method=put",e)).data,oe=async(e,s,l)=>(await a.post("/backend/ext/web-file-html/copy",{dir:e,names:s,destDir:l})).data,ne=async(e,s,l)=>(await a.post("/backend/ext/web-file-html/move",{dir:e,names:s,destDir:l})).data,se=async e=>(await a.post("/backend/ext/web-file-html?_method=delete",e)).data,le=async e=>(await a.get("/backend/ext/backup-database",{params:e})).data,ie=async(e,s)=>(await a.post("/backend/ext/backup-database/download-zip",{dir:e,names:s},{responseType:"blob"})).data,de=async()=>(await a.post("/backend/ext/backup-database")).data,ce=async e=>(await a.put(`/backend/ext/backup-database/restore?name=${e}`)).data,pe=async e=>(await a.post("/backend/ext/backup-database?_method=delete",e)).data;var v={exports:{}};(function(e,s){(function(l,p){p()})(r,function(){function l(t,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function p(t,o,c){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){m(n.response,o,c)},n.onerror=function(){console.error("could not download file")},n.send()}function y(t){var o=new XMLHttpRequest;o.open("HEAD",t,!1);try{o.send()}catch(c){}return 200<=o.status&&299>=o.status}function w(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(c){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof r=="object"&&r.global===r?r:void 0,k=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!k?function(t,o,c){var n=d.URL||d.webkitURL,i=document.createElement("a");o=o||t.name||"download",i.download=o,i.rel="noopener",typeof t=="string"?(i.href=t,i.origin===location.origin?w(i):y(i.href)?p(t,o,c):w(i,i.target="_blank")):(i.href=n.createObjectURL(t),setTimeout(function(){n.revokeObjectURL(i.href)},4e4),setTimeout(function(){w(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,c){if(o=o||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(l(t,c),o);else if(y(t))p(t,o,c);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout(function(){w(n)})}}:function(t,o,c,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof t=="string")return p(t,o,c);var i=t.type==="application/octet-stream",h=/constructor/i.test(d.HTMLElement)||d.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent);if((x||i&&h||k)&&typeof FileReader<"u"){var u=new FileReader;u.onloadend=function(){var b=u.result;b=x?b:b.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=b:location=b,n=null},u.readAsDataURL(t)}else{var F=d.URL||d.webkitURL,f=F.createObjectURL(t);n?n.location=f:location.href=f,n=null,setTimeout(function(){F.revokeObjectURL(f)},4e4)}});d.saveAs=m.saveAs=m,e.exports=m})})(v);var be=v.exports;export{Q as A,V as B,Y as C,ee as D,ae as E,te as F,oe as G,ne as H,se as I,P as J,be as K,le as L,de as M,ie as N,pe as O,ce as P,T as a,j as b,_ as c,L as d,B as e,A as f,q as g,E as h,M as i,O as j,S as k,z as l,g as m,$ as n,Z as o,G as p,H as q,R as r,C as s,K as t,U as u,X as v,I as w,D as x,J as y,N as z};
