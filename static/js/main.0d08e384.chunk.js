(this["webpackJsonpreact-redux-setup"]=this["webpackJsonpreact-redux-setup"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(3),a=n.n(s),r=(n(9),n(4)),d=n(0),j=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];function s(){var e=function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()+1);var n=t.getMonth()+1;return 1==="".concat(n).length&&(n="0".concat(n)),"".concat(t.getDate(),"-").concat(n,"-").concat(t.getFullYear())}(),t="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=770&date=".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){i(e&&e.centers)}))}return Object(c.useEffect)((function(){setInterval((function(){s()}),3e3)}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:"\ud83d\ude80 Vaccine Finder \ud83d\ude80"}),Object(d.jsx)("h5",{children:"Constantly Searching..."}),Object(d.jsx)("div",{className:"loaderWrap",children:Object(d.jsx)("div",{className:"loader"})}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Pincode"}),Object(d.jsx)("th",{children:"Age Limit"}),Object(d.jsx)("th",{children:"Free/Paid"}),Object(d.jsx)("th",{children:"Vaccine Count Available"})]}),n&&n.map((function(e,t){return e.sessions[0].available_capacity>0?Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.address}),Object(d.jsx)("td",{children:e.pincode}),Object(d.jsx)("td",{children:e.sessions[0].min_age_limit}),Object(d.jsx)("td",{children:e.fee_type}),Object(d.jsx)("td",{children:e.sessions[0].available_capacity})]},t):null}))]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.0d08e384.chunk.js.map