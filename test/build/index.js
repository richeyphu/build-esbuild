"use strict";var t=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var N=(e,o)=>{for(var r in o)t(e,r,{get:o[r],enumerable:!0})},b=(e,o,r,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let m of i(o))!l.call(e,m)&&m!==r&&t(e,m,{get:()=>o[m],enumerable:!(f=g(o,m))||f.enumerable});return e};var d=e=>b(t({},"__esModule",{value:!0}),e);var x={};N(x,{getGoodbyeName:()=>p.getGoodbyeName,getHelloName:()=>a.getHelloName});module.exports=d(x);var p=require("./goodbye"),a=require("./hello");0&&(module.exports={getGoodbyeName,getHelloName});
