import{r as i,C as a}from"./index.695478b2.js";function c({analyticsDataFromServer:n}){return i.exports.useEffect(()=>{const t=new URLSearchParams(window.location.search);s(t,"id"),s(t,"source"),s(t,"campaign"),s(t,"medium"),s(t,"content"),s(t,"term"),a.pushToPageAnalyticsData(n),a.publish(a.eventNames.PAGE_VIEW,!0),n.publishEventsOnNavigate&&n.publishEventsOnNavigate.forEach(e=>{a.publish(e,!0)})},[n]),null}function s(n,t){n.has(`utm_${t}`)&&a.pushToPageAnalyticsData({utm:{[t]:n.get(`utm_${t}`)}})}export{c as Analytics};
//# sourceMappingURL=6c1d442a.js.map
