(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(5),l=a.n(n),d=(a(10),a(2)),o=a(3),r=a(0);var i=e=>{let{id:t,text:a,date:s,handleDeleteNote:c}=e;return Object(r.jsxs)("div",{className:"note",children:[Object(r.jsx)("span",{children:a}),Object(r.jsxs)("div",{className:"note-footer",children:[Object(r.jsx)("small",{children:s}),Object(r.jsx)(o.a,{onClick:()=>c(t),className:"delete-icon",size:"1.3em"})]})]})};var j=e=>{let{handleAddNote:t}=e;const[a,c]=Object(s.useState)("");return Object(r.jsxs)("div",{className:"note new",children:[Object(r.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:a,onChange:e=>{200-e.target.value.length>=0&&c(e.target.value)}}),Object(r.jsxs)("div",{className:"note-footer",children:[Object(r.jsxs)("small",{children:[200-a.length," Remaining"]}),Object(r.jsx)("button",{className:"save",onClick:()=>{a.trim().length>0&&(t(a),c(""))},children:"Save"})]})]})};var h=e=>{let{notes:t,handleAddNote:a,handleDeleteNote:s}=e;return Object(r.jsxs)("div",{className:"notes-list",children:[t.map((e=>Object(r.jsx)(i,{id:e.id,text:e.text,date:e.date,handleDeleteNote:s}))),Object(r.jsx)(j,{handleAddNote:a})]})};var b=e=>{let{handleSearchNote:t}=e;return Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)(o.b,{className:"search-icons",size:"1.3em"}),Object(r.jsx)("input",{onChange:e=>t(e.target.value),type:"text",placeholder:"type to search..."})]})};var O=e=>{let{handleToggleDarkMode:t}=e;return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Notes"}),Object(r.jsx)("button",{onClick:()=>t((e=>!e)),className:"save",children:"Toggle Mode"})]})};var x=()=>{const[e,t]=Object(s.useState)([{id:Object(d.a)(),text:"This is my first note!",date:"15/01/2024"},{id:Object(d.a)(),text:"This is my second note!",date:"15/01/2024"},{id:Object(d.a)(),text:"This is my third note!",date:"20/01/2024"},{id:Object(d.a)(),text:"This is my new note!",date:"21/01/2024"}]),[a,c]=Object(s.useState)(""),[n,l]=Object(s.useState)(!1);Object(s.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&t(e)}),[]),Object(s.useEffect)((()=>{localStorage.setItem("react-notes-app-data",JSON.stringify(e))}),[e]);return Object(r.jsx)("div",{className:"".concat(n&&"dark-mode"),children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(O,{handleToggleDarkMode:l}),Object(r.jsx)(b,{handleSearchNote:c}),Object(r.jsx)(h,{notes:e.filter((e=>e.text.toLowerCase().includes(a))),handleAddNote:a=>{const s=new Date,c={id:Object(d.a)(),text:a,date:s.toLocaleDateString()},n=[...e,c];t(n)},handleDeleteNote:a=>{const s=e.filter((e=>e.id!==a));t(s)}})]})})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.dc23d80b.chunk.js.map