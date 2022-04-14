(this.webpackJsonpcourses=this.webpackJsonpcourses||[]).push([[0],{14:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),r=n.n(s),o=(n(28),n(16)),i=n(17),l=n(18),d=n(22),u=(n(29),n(14),n(1));function h(e){return Object(u.jsxs)("div",{className:e.data.bg,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:e.data.bg+"-theme",children:e.data.heading}),Object(u.jsx)("button",{className:"btn-small transparent "+e.data.bg+"-theme",onClick:function(){return window.location.href="/courses/"+e.data.file},children:"Download Course Pdf"})]}),Object(u.jsx)("div",{className:"content",children:e.data.courses.map((function(t,n){return Object(u.jsxs)("ul",{className:"card course transparent",children:[Object(u.jsx)("h3",{className:e.data.bg+"-theme",children:t.heading}),Object(u.jsx)("ul",{children:t.content.map((function(t,n){return Object(u.jsx)("li",{style:{color:"colorful"===e.data.bg?"#495867":"#FFF6EA"},children:t},t+"-"+n)}))})]},"card-"+n)}))})]})}var j=n(19),b=n(2),f=n(23),x=n(9);function m(){Object(c.useEffect)((function(){window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){return s(e.matches)}))}),[]);var e=function(e){var t={background:"rgba(255, 255, 255, 0.1)",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1) !important",backdropFilter:"blur(10px) !important",borderRadius:"10px",display:"flex",height:"420px",minWidth:"250px"};return e?Object(x.a)(Object(x.a)({},t),{},{width:"40%"}):Object(x.a)(Object(x.a)({},t),{},{width:"85%",fontSize:"12px",margin:"10px"})},t=Object(c.useState)(window.matchMedia("(min-width: 768px)").matches),n=Object(f.a)(t,2),a=n[0],s=n[1];return Object(u.jsxs)("div",{style:{height:"100%",width:"100%",background:"white",display:"flex",flexDirection:"column",alignItems:a?"flex-start":"center",overflow:"scroll"},children:[Object(u.jsx)("h2",{style:{margin:a?"20px 0px 0px 20px":"0",color:"#3E1929",fontSize:"2rem"},children:"Welcome to Courseware"}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",height:a?"40%":"auto",flexDirection:a?"row":"column",marginTop:a?"150px":"80px"},children:[Object(u.jsx)("div",{className:"card",style:e(a),children:Object(u.jsxs)("div",{className:"card-body",style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},children:[Object(u.jsx)("h3",{className:"card-title",style:{color:"#3E1929"},children:"Core Java"}),Object(u.jsx)("h5",{className:"card-subtitle",style:{color:"#1c2c3b"},children:"Beginner Level"}),Object(u.jsx)("div",{className:"card-text",style:{color:"#495867"},children:"This course path introduces a newbie to the world of java. The main course is divided into 5 different modules and each module is a course in itself. The course is designed in such a way that each module introduces and strenthens a particular concept of java. The objective of this course is to build and grow the understanding of java from ground up. Checkout the course page for more info!"}),Object(u.jsx)("button",{className:"btn-small",onClick:function(){return window.location.href="/courses/core-java"},style:{background:"#3E1929",alignSelf:"flex-start",margin:"0"},children:"Take me to the course!"})]})}),Object(u.jsx)("div",{className:"card",style:e(a),children:Object(u.jsxs)("div",{className:"card-body",style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly"},children:[Object(u.jsx)("h3",{className:"card-title",style:{color:"#3E1929"},children:"Frontend "}),Object(u.jsx)("h5",{className:"card-subtitle",style:{color:"#1c2c3b"},children:"Beginner Level"}),Object(u.jsx)("p",{className:"card-text",style:{color:"#495867"},children:"The course introduces the techcologies and tools to design and program the frontend. The course will take you on a journey to the land of HTML, CSS and Javascript. After completing this course you should be able to build websites and web tools. The couse is divided into 4 modules and each module is a course in itself. Checkout the course page for more info!"}),Object(u.jsx)("button",{className:"btn-small",onClick:function(){return window.location.href="/courses/frontend-intro"},style:{background:"#3E1929",alignSelf:"flex-start",margin:"0"},children:"Take me to the course!"})]})})]})]})}var p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={data:null},c}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/courses/data.json").then((function(t){t.json().then((function(t){e.setState({data:t})}))}))}},{key:"render",value:function(){var e=this;return this.state.data?Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b.a,{path:["/","/courses"],exact:!0,render:function(){return Object(u.jsx)(m,{})}}),Object(u.jsx)(b.a,{path:["/core-java","/courses/core-java"],exact:!0,render:function(){return Object(u.jsx)(h,{data:e.state.data["core-java"]})}}),Object(u.jsx)(b.a,{path:["/frontend-intro","/courses/frontend-intro"],exact:!0,render:function(){return Object(u.jsx)(h,{data:e.state.data["frontend-intro"]})}})]})}):Object(u.jsx)("div",{children:"Loading..."})}}]),n}(a.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}},[[39,1,2]]]);
//# sourceMappingURL=main.78ef5840.chunk.js.map