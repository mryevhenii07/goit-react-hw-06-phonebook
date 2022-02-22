(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={label:"ContactForm_label__1KpOd",title:"ContactForm_title__2H0TH",textField:"ContactForm_textField__33uHM",addBtn:"ContactForm_addBtn__3uRTk"}},,function(t,e,n){t.exports={contactList:"ContactList_contactList__2el9t",contactListItem:"ContactList_contactListItem__5b2MW",deleteBtn:"ContactList_deleteBtn__2O8P8",contactName:"ContactList_contactName__2XAyY",contactNumber:"ContactList_contactNumber__1tAUG"}},,function(t,e,n){t.exports={image:"App_image__LigfW",contantWrap:"App_contantWrap__1gemi",title:"App_title__34ZLE",subtitle:"App_subtitle__1_mzM"}},,function(t,e,n){t.exports={title:"Filter_title__3hfxx",textField:"Filter_textField__Gk6qb"}},,,function(t,e,n){t.exports={paper:"Paper_paper__2ot7Q"}},function(t,e,n){t.exports={container:"Container_container__2ad7L"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=n(13),l=n(3),o=n(6),u=n.n(o),b=n(2),m=n.n(b),d=n(14),j=n(0),p=function(t){var e=t.onSubmitForm,n=(t.contacts,Object(a.useState)("")),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],b=o[1],p=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":b(a);break;default:return}},x=function(){s(""),b("")};return Object(j.jsxs)("form",{className:m.a.contacsForm,onSubmit:function(t){t.preventDefault(),e({id:Object(d.a)(),name:r,number:u}),x()},children:[Object(j.jsxs)("label",{className:m.a.label,children:[Object(j.jsx)("span",{className:m.a.title,children:"Name:"}),Object(j.jsx)("input",{className:m.a.textField,type:"text",onChange:p,value:r,name:"name",placeholder:"example: Yevhenii Peredrii",required:!0})]}),Object(j.jsxs)("label",{className:m.a.label,children:[Object(j.jsx)("span",{className:m.a.title,children:"Number:"}),Object(j.jsx)("input",{className:m.a.textField,type:"tel",onChange:p,value:u,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"example: +38068xxxxxxx",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:m.a.addBtn,children:"Add Contact"})]})},x=n(4),h=n.n(x),_=n(11),O=n.n(_),f=function(t){var e=t.children;return Object(j.jsx)("div",{className:O.a.paper,children:e})},N=function(t){var e=t.contacts,n=t.onDelete;return Object(j.jsx)("ul",{className:h.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)(f,{children:[Object(j.jsxs)("li",{className:h.a.contactListItem,children:[Object(j.jsxs)("p",{className:h.a.contactName,children:[a,":"]}),Object(j.jsx)("p",{className:h.a.contactNumber,children:c})]}),Object(j.jsx)("button",{type:"button",className:h.a.deleteBtn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},v=n(8),g=n.n(v),C=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:g.a.label,children:[Object(j.jsx)("span",{className:g.a.title,children:"Find contacts by name"}),Object(j.jsx)("input",{className:g.a.textField,type:"text",name:"filter",value:e,onChange:n,placeholder:"example: Yevhenii"})]})})},F=n(12),L=n.n(F),y=function(t){var e=t.children;return Object(j.jsx)("div",{className:L.a.container,children:e})},S="contacts",k=function(){var t=Object(a.useState)((function(){var t;return null!==(t=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return null}}(S))&&void 0!==t?t:[]})),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],b=s[1];Object(a.useEffect)((function(){!function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}(S,n)}),[n]);return Object(j.jsx)(y,{children:Object(j.jsxs)("div",{className:u.a.contantWrap,children:[Object(j.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(j.jsx)("div",{className:u.a.wrap,children:Object(j.jsx)(p,{onSubmitForm:function(t){var e=t.id,a=t.name,r=t.number;n.some((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):c((function(t){return[].concat(Object(i.a)(t),[{id:e,name:a,number:r}])}))},contacts:n})}),Object(j.jsx)("h2",{className:u.a.subtitle,children:"Contacts:"}),n.length>1&&Object(j.jsx)(C,{value:o,onChange:function(t){b(t.target.value)}}),!n.length&&Object(j.jsx)("span",{children:"There are not contacts yet"}),Object(j.jsx)(N,{contacts:function(){var t=o;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(),onDelete:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c7df9a22.chunk.js.map