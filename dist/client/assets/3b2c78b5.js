import{r as o,j as r,a}from"./index.695478b2.js";import"./559fc416.js";import"./253feeee.js";import"./b1a3caaa.js";import"./69908aa2.js";import"./af9144c1.js";import"./83f1f962.js";import"./c7826d90.js";import"./e1ef02db.js";import{u as g}from"./71c8feb8.js";import{g as f}from"./6eb8b136.js";import"./a9b4e434.js";import"./92add5bc.js";import"./eb46812b.js";import"./4649ee41.js";import"./d6282b27.js";function z({id:i,resetToken:n}){const l=g(),[s,h]=o.exports.useState(null),[c,x]=o.exports.useState(""),[d,u]=o.exports.useState(null),[w,b]=o.exports.useState(""),[p,m]=o.exports.useState(null);function v(e){u(null),m(null);let t=!1;return e.password.validity.valid||(t=!0,u(e.password.validity.valueMissing?"Please enter a password":"Passwords must be at least 6 characters")),e.passwordConfirm.validity.valid||(t=!0,m(e.password.validity.valueMissing?"Please re-enter a password":"Passwords must be at least 6 characters")),c!==w&&(t=!0,m("The two password entered did not match.")),t}async function y(e){if(e.preventDefault(),v(e.currentTarget))return;const t=await N({id:i,resetToken:n,password:c});if(t.error){h(t.error);return}l("/account")}return r("div",{className:"flex justify-center my-24 px-4",children:a("div",{className:"max-w-md w-full",children:[r("h1",{className:"text-4xl",children:"Reset Password."}),r("p",{className:"mt-4",children:"Enter a new password for your account."}),a("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:y,children:[s&&r("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:r("p",{className:"m-4 text-s text-contrast",children:s})}),a("div",{className:"mb-3",children:[r("input",{className:`mb-1 ${f(d)}`,id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",autoFocus:!0,value:c,minLength:8,required:!0,onChange:e=>{x(e.target.value)}}),a("p",{className:`text-red-500 text-xs ${d?"":"invisible"}`,children:[d," \xA0"]})]}),a("div",{className:"mb-3",children:[r("input",{className:`mb-1 ${f(p)}`,id:"passwordConfirm",name:"passwordConfirm",type:"password",autoComplete:"current-password",placeholder:"Re-enter password","aria-label":"Re-enter password",value:w,required:!0,minLength:8,onChange:e=>{b(e.target.value)}}),a("p",{className:`text-red-500 text-xs ${p?"":"invisible"}`,children:[p," \xA0"]})]}),r("div",{className:"flex items-center justify-between",children:r("button",{className:"bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Save"})})]})]})})}async function N({id:i,resetToken:n,password:l}){try{const s=await fetch("/account/reset",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:i,resetToken:n,password:l})});return s.ok?{}:s.json()}catch(s){return{error:s.toString()}}}export{z as AccountPasswordResetForm,N as callPasswordResetApi};
//# sourceMappingURL=3b2c78b5.js.map
