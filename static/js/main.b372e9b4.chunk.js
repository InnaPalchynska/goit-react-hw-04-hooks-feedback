(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),i=c.n(n),r=(c(9),c(2)),l=(c(10),c(11),c(0));var o=function(e){var t=e.title,c=e.children;return Object(l.jsxs)("section",{className:"section",children:[{title:t}&&Object(l.jsx)("h2",{className:"title",children:t}),c]})},d=(c(13),function(e){var t=e.feedbackState,c=e.onAddFeedback;return Object(l.jsx)("ul",{className:"Feedback",children:t.map((function(e){return Object(l.jsx)("li",{className:"Feedback__item",children:Object(l.jsx)("button",{onClick:function(){return c(e)},children:e})},e)}))})}),b=(c(14),function(e){var t=e.good,c=e.neutral,s=e.bad,a=e.total,n=e.positivePercentage;return Object(l.jsxs)("ul",{className:"Statistics",children:[Object(l.jsxs)("li",{className:"Statistics",children:["good: ",t]}),Object(l.jsxs)("li",{className:"Statistics",children:["neutral: ",c]}),Object(l.jsxs)("li",{className:"Statistics",children:["bad: ",s]}),Object(l.jsxs)("li",{className:"Statistics",children:["total: ",a]}),Object(l.jsxs)("li",{className:"Statistics",children:["positive feedback: ",n,"%"]})]})});var j=function(e){var t=e.message,c=e.children;return Object(l.jsxs)("section",{children:[{message:t}&&Object(l.jsx)("h3",{className:"title",children:t}),c]})},u=["good","neutral","bad"];function h(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(r.a)(n,2),h=i[0],O=i[1],f=Object(s.useState)(0),x=Object(r.a)(f,2),k=x[0],m=x[1],g=c+h+k,v=g?Math.round(c/g*100):0;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{title:"Please leave feedback",children:Object(l.jsx)(d,{feedbackState:u,onAddFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":O((function(e){return e+1}));break;case"bad":m((function(e){return e+1}));break;default:return}}})}),Object(l.jsx)(o,{title:"Statistics",children:g?Object(l.jsx)(b,{good:c,neutral:h,bad:k,total:g,positivePercentage:v}):Object(l.jsx)(j,{message:"No feedback given"})})]})}i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.b372e9b4.chunk.js.map