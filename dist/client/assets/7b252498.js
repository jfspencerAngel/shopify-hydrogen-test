import{j as i,r as n,a as j,F as B}from"./index.695478b2.js";import{Link as F}from"./559fc416.js";import{f as G}from"./92add5bc.js";import"./253feeee.js";import"./b1a3caaa.js";import"./69908aa2.js";import"./af9144c1.js";import"./83f1f962.js";import"./c7826d90.js";import"./e1ef02db.js";import{B as O}from"./c9ac2484.js";import{n as U}from"./e87bd688.js";import"./ef0513dd.js";import{ProductCard as M}from"./429963d1.js";import{g as T}from"./96676335.js";/* empty css        */import"./71c8feb8.js";import"./a9b4e434.js";import"./eb46812b.js";import"./4649ee41.js";import"./d6282b27.js";import"./4b1f3025.js";import"./7afce003.js";import"./577cd608.js";import"./2eb9b9dd.js";function q({as:u="div",className:s,flow:c="row",gap:l="default",items:e=4,layout:a="default",...d}){const g={default:`grid-cols-1 ${e===2&&"md:grid-cols-2"}  ${e===3&&"sm:grid-cols-3"} ${e>3&&"md:grid-cols-3"} ${e>=4&&"lg:grid-cols-4"}`,products:`grid-cols-2 ${e>=3&&"md:grid-cols-3"} ${e>=4&&"lg:grid-cols-4"}`,auto:"auto-cols-auto",blog:"grid-cols-2 pt-24"},p={default:"grid gap-2 gap-y-6 md:gap-4 lg:gap-6",blog:"grid gap-6"},m=U({row:"grid-flow-row",col:"grid-flow-col"}[c],p[l],g[a],s);return i(u,{...d,className:m})}function go({url:u,collection:s}){var b,N,v;const c=n.exports.useRef(null),l=((b=s==null?void 0:s.products)==null?void 0:b.nodes)||[],{hasNextPage:e,endCursor:a}=(v=(N=s==null?void 0:s.products)==null?void 0:N.pageInfo)!=null?v:{},[d,g]=n.exports.useState(l),[p,h]=n.exports.useState(a!=null?a:""),[m,L]=n.exports.useState(e),[x,P]=n.exports.useState(!1),S=l.length>0,f=n.exports.useCallback(async()=>{var y,C,I,$;P(!0);const r=new URL(window.location.origin+u);r.searchParams.set("cursor",p);const t=await fetch(r,{method:"POST"}),{data:o}=await t.json(),k=G(((y=o==null?void 0:o.collection)==null?void 0:y.products)||(o==null?void 0:o.products)||[]),{endCursor:R,hasNextPage:E}=((I=(C=o==null?void 0:o.collection)==null?void 0:C.products)==null?void 0:I.pageInfo)||(($=o==null?void 0:o.products)==null?void 0:$.pageInfo)||{endCursor:"",hasNextPage:!1};g([...d,...k]),h(R),L(E),P(!1)},[p,u,d]),w=n.exports.useCallback(r=>{r.forEach(t=>{t.isIntersecting&&f()})},[f]);return n.exports.useEffect(()=>{const r=new IntersectionObserver(w,{rootMargin:"100%"}),t=c.current;return t&&r.observe(t),()=>{t&&r.unobserve(t)}},[c,p,w]),S?j(B,{children:[i(q,{layout:"products",children:d.map((r,t)=>i(M,{product:r,loading:T(t)},r.id))}),m&&i("div",{className:"flex items-center justify-center mt-6",ref:c,children:i(O,{variant:"secondary",disabled:x,onClick:f,width:"full",children:x?"Loading...":"Load more products"})})]}):j(B,{children:[i("p",{children:"No products found on this collection"}),i(F,{to:"/products",children:i("p",{className:"underline",children:"Browse catalog"})})]})}export{go as ProductGrid};
//# sourceMappingURL=7b252498.js.map
