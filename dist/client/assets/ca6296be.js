import{l as c}from"./2dce7371.js";import{r as e}from"./index.695478b2.js";function u(a,t){const[o,r]=e.exports.useState("loading"),s=JSON.stringify(t);return e.exports.useEffect(()=>{async function i(){try{r("loading"),await c(a,t),r("done")}catch{r("error")}}i()},[a,s,t]),o}export{u};
//# sourceMappingURL=ca6296be.js.map
