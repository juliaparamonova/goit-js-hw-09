import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),s="feedback-form-state",a={email:"",message:""};e.addEventListener("input",()=>{a.email=e.elements.email.value.trim(),a.message=e.elements.message.value.trim(),localStorage.setItem(s,JSON.stringify(a))});e.addEventListener("submit",t=>{t.preventDefault();const l=e.elements.email.value.trim(),m=e.elements.message.value.trim();if(l===""||m==="")return alert("Fill please all fields");console.log(a),localStorage.removeItem(s),e.reset()});document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem(s));e.elements.email.value=(t==null?void 0:t.email)??"",e.elements.message.value=(t==null?void 0:t.message)??""});
//# sourceMappingURL=commonHelpers2.js.map