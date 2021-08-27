(this["webpackJsonpsocket-io"]=this["webpackJsonpsocket-io"]||[]).push([[0],{132:function(n,e,t){},133:function(n,e,t){"use strict";t.r(e);var r=t(35),c=(t(73),t(24)),i="SET_CURRENT_USER",a="ADD_NEW_CONVERSATION",o="REMOVE_CONVERSATION",s="SET_CONVERSATIONS",u="SEND_MESSAGE",l="RECEIVE_MESSAGE",d="SET_CURRENT_CONVERSATION";var p={username:null,id:null};var j={username:null,position:null};t(74);var b=t(28),f=t(30),x={};var h,O=Object(r.combineReducers)({currentUser:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:var t=e.payload,r=t.username,c=t.position;return{username:r,position:c};default:return n}},conversations:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:var t=e.payload;return[].concat(Object(c.a)(n),[t]);case s:return Object(c.a)(e.payload);case o:var r=e.payload;return n.filter((function(n){return n.id!==r}));default:return n}},messages:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:var t=e.payload,r=t.toUsername,i=t.content,a=n[r]||[],o={content:i,isFromSelf:!0};return Object(f.a)(Object(f.a)({},n),{},Object(b.a)({},r,[].concat(Object(c.a)(a),[o])));case l:var s=e.payload,d=s.fromUsername,p=s.content,j=n[d]||[],h={content:p,isFromSelf:!1};return Object(f.a)(Object(f.a)({},n),{},Object(b.a)({},d,[].concat(Object(c.a)(j),[h])));default:return n}},currentConversation:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:var t=e.payload,r=t.username,c=t.id;return{username:r,id:c};default:return n}}});h=Object(r.createStore)(O);t(75);var m=t(0),g=t.n(m),v=t(11),y=t(4);function k(n,e){return{type:i,payload:{username:n,position:e}}}var w,E,S,C,N,U,R,_,F,T,A,I,V,D,M,z,J,q,G,L,Y=t(29),B=(t(83),t(72)),P=t.p+"static/media/happy.8a1cb78f.svg",Q=t.p+"static/media/paperclip.87c44b2e.svg",W=t.p+"static/media/right-arrow.0a7ea73f.svg",H=t(67),K=Object(H.io)("https://chat-app-backend-atl.herokuapp.com/",{autoConnect:!1}),X=t(5),Z=t(2),$=function(n){var e=n.toUsername,t=Object(m.useState)(""),r=Object(Y.a)(t,2),c=r[0],i=r[1],a=Object(m.useState)(!1),o=Object(Y.a)(a,2),s=o[0],l=o[1],d=Object(v.b)();return Object(Z.jsx)(nn,{children:Object(Z.jsxs)(tn,{children:[Object(Z.jsx)("img",{className:"paper-clip",src:Q,alt:"select-file"}),Object(Z.jsx)("input",{value:c,className:"enter-message",onChange:function(n){return i(n.target.value)},type:"text",placeholder:"Enter your message here..."}),s&&Object(Z.jsx)("div",{className:"emoji-picker",children:Object(Z.jsx)(B.a,{onSelect:function(n){var e=n.unified.split("-"),t=[];e.forEach((function(n){return t.push("0x"+n)}));var r=String.fromCodePoint.apply(String,t);i(c+r)}})}),Object(Z.jsx)("img",{onClick:function(){l(!s)},className:"emoji icon",alt:"emoji",src:P}),Object(Z.jsxs)(en,{onClick:function(){c.length>0&&(d(function(n,e){return{type:u,payload:{toUsername:n,content:e}}}(e.username,c)),K.emit("chat message",c,e.username,e.id),i(""))},children:[Object(Z.jsx)("span",{children:"Send"}),Object(Z.jsx)("img",{alt:"arrow",src:W})]})]})})},nn=X.a.div(w||(w=Object(y.a)(["\n  position: absolute;\n  width: 90%;\n  padding: 5px;\n  bottom: 2px;\n  right: 30px;\n  border-radius: 12px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  display: flex;\n  background-color: white;\n"]))),en=X.a.button(E||(E=Object(y.a)(["\n  padding: 9px 13px;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n  background-color: #014dfc;\n  border: 1px solid #014dfc;\n  color: white;\n  img {\n    width: 13px;\n    margin-left: 5px;\n  }\n"]))),tn=X.a.div(S||(S=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  .enter-message {\n    width: 500px;\n    padding: 10px 15px;\n    margin: 0 10px;\n    border: 2px solid #f0f0f2;\n    outline: none;\n    position: relative;\n  }\n  .emoji {\n    position: absolute;\n    width: 25px;\n    right: 124px;\n    top: 10px;\n    cursor: pointer;\n  }\n\n  .emoji-picker {\n    position: fixed;\n    right: 310px;\n    bottom: 58px;\n    height: 56%;\n  }\n"]))),rn=t.p+"static/media/eli.281a1482.jpg",cn=t.p+"static/media/salome.jpg.abf98ecd.jpg",an=function(n){var e=n.messages,t=void 0===e?[]:e,r=n.toUsername;return Object(Z.jsxs)(on,{children:[t.map((function(n,e){return n.isFromSelf?Object(Z.jsxs)(sn,{children:[Object(Z.jsx)(un,{children:n.content}),Object(Z.jsx)(pn,{src:rn})]},e):Object(Z.jsxs)(ln,{children:[Object(Z.jsx)(jn,{src:cn}),Object(Z.jsx)(dn,{children:n.content})]},e)})),Object(Z.jsx)($,{toUsername:r})]})},on=X.a.div(C||(C=Object(y.a)(["\n  position: relative;\n  width: 62%;\n  height: auto;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  background-color: #f2f6fc;\n  border-radius: 20px;\n"]))),sn=X.a.div(N||(N=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n"]))),un=X.a.div(U||(U=Object(y.a)(["\n  background-color: #19233b;\n  color: #fff;\n  padding: 5px 25px;\n  margin-right: 5px;\n  border-radius: 7px;\n  align-items: center;\n  display: flex;\n"]))),ln=Object(X.a)(sn)(R||(R=Object(y.a)(["\n  justify-content: flex-start;\n"]))),dn=X.a.div(_||(_=Object(y.a)(["\n  align-items: center;\n  background-color: #fff;\n  color: #000;\n  padding: 5px 25px;\n  display: flex;\n  margin-left: 5px;\n  border-radius: 7px;\n"]))),pn=X.a.img(F||(F=Object(y.a)(["\n  width: 44px;\n  height: 47px;\n  border-radius: 50%;\n  margin-right: 10px;\n"]))),jn=Object(X.a)(pn)(T||(T=Object(y.a)(["\n  width: 49px;\n  height: 47px;\n  margin-left: 10px;\n"]))),bn=function(){var n=Object(v.c)((function(n){return n.currentUser}));return Object(Z.jsx)(fn,{children:Object(Z.jsxs)(On,{children:[Object(Z.jsx)(xn,{src:rn}),Object(Z.jsx)(hn,{children:n.username}),Object(Z.jsx)("span",{children:n.position})]})})},fn=X.a.div(A||(A=Object(y.a)(["\n  width: 250px;\n  height: 250px;\n  border-radius: 19px;\n  background-color: #f5f9fc;\n"]))),xn=X.a.img(I||(I=Object(y.a)(["\n  width: 86px;\n  height: 90px;\n  border-radius: 50%;\n"]))),hn=X.a.h3(V||(V=Object(y.a)(["\n  margin: 10px 0;\n  color: #394f60;\n"]))),On=X.a.div(D||(D=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n  span {\n    color: #b6c1ce;\n    font-size: 12px;\n  }\n"]))),mn=t(71),gn=t.n(mn).a.create({baseURL:"https://chat-app-backend-atl.herokuapp.com/"}),vn=function(n){var e=n.onConversationClick,t=Object(m.useState)(!1),r=Object(Y.a)(t,2),c=r[0],i=r[1],u=Object(v.b)(),l=Object(v.c)((function(n){return n.conversations})),d=Object(v.c)((function(n){return n.currentConversation})),p=Object(v.c)((function(n){return n.currentUser}));Object(m.useEffect)((function(){return K.on("new user",(function(n){u(function(n){return{type:a,payload:n}}(n))})),K.on("user disconnected",(function(n){u(function(n){return{type:o,payload:n}}(n))})),gn.get("users").then((function(n){var e=n.data.filter((function(n){return n.username!==p.username}));u(function(n){return{type:s,payload:n}}(e))})),function(){K.off("new user")}}),[]);return Object(Z.jsxs)(yn,{children:[Object(Z.jsxs)("div",{className:"quick-chat",children:[Object(Z.jsx)("i",{className:"fab fa-facebook-messenger"}),Object(Z.jsx)("h2",{children:"QuickChat"})]}),Object(Z.jsx)(bn,{}),Object(Z.jsxs)(kn,{children:[Object(Z.jsxs)("div",{className:"active-talk",children:[Object(Z.jsx)("h3",{children:"Active Conversations"}),Object(Z.jsx)("span",{children:l.length}),Object(Z.jsx)("i",{onClick:function(){i(!c)},className:c?"fas fa-chevron-up":"fas fa-chevron-down"})]}),Object(Z.jsx)(wn,{children:l.map((function(n){return Object(Z.jsxs)(En,{onClick:function(){return e(n.username,n.id)},isOpen:c,active:d.id===n.id,children:[Object(Z.jsx)(pn,{src:rn}),Object(Z.jsx)("h3",{children:n.username})]},n.username)}))})]})]})},yn=X.a.div(M||(M=Object(y.a)(["\n  width: 30%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  .quick-chat {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    h2 {\n      font-size: 21px;\n      margin: 5px 0 13px 0;\n    }\n\n    i {\n      font-size: 31px;\n      color: #7c6bc7;\n      margin-right: 10px;\n    }\n  }\n"]))),kn=X.a.div(z||(z=Object(y.a)(["\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 20px;\n  .active-talk {\n    display: flex;\n    align-items: center;\n    position: relative;\n    h3 {\n      margin: 0;\n    }\n\n    i {\n      position: absolute;\n      right: -53px;\n      cursor: pointer;\n    }\n    span {\n      background-color: #ebedee;\n      font-weight: bold;\n      border-radius: 50%;\n      padding: 5px 9px;\n      margin-left: 7px;\n    }\n  }\n"]))),wn=X.a.div(J||(J=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  width: 73%;\n"]))),En=X.a.div(q||(q=Object(y.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n  cursor: pointer;\n  opacity: ",";\n  height: ",";\n  margin: ",";\n  transform: ",";\n  transition: all 0.3s linear;\n  padding: 0 8px;\n  background-color: ",";\n  h3 {\n    margin: 0 0 0 10px;\n    color: #394f60;\n  }\n  &:hover {\n    background-color: #f2f6fc;\n    border-radius: 8px;\n  }\n"])),(function(n){return n.isOpen?"1":"0"}),(function(n){return n.isOpen?"auto":"0"}),(function(n){return n.isOpen?"10px 0":"0"}),(function(n){return n.isOpen?"translateY(0)":"translateY(-50px)"}),(function(n){return n.active?"#f2f6fc":"#FFFFFF"}));var Sn=X.a.div(G||(G=Object(y.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n"]))),Cn=X.a.div(L||(L=Object(y.a)(["\n  height: 90%;\n  width: 90%;\n  background-color: white;\n  border-radius: 20px;\n  display: flex;\n"]))),Nn=function(){var n=Object(v.c)((function(n){return n.currentConversation})),e=Object(v.c)((function(e){return e.messages[n.username]})),t=Object(v.b)();return Object(m.useEffect)((function(){return K.on("receive message",(function(n,e){t({type:l,payload:{fromUsername:e,content:n}})})),function(){K.off("send message")}}),[]),Object(Z.jsx)(Sn,{children:Object(Z.jsxs)(Cn,{children:[Object(Z.jsx)(vn,{onConversationClick:function(n,e){t(function(n,e){return{type:d,payload:{username:n,id:e}}}(n,e))}}),null!==n.id?Object(Z.jsx)(an,{toUsername:n,messages:e}):Object(Z.jsx)("span",{children:"Select a conversation to start chatting"})]})})};t(132);var Un=function(){var n=Object(v.b)(),e=Object(m.useRef)(),t=Object(m.useRef)();return Object(Z.jsx)("form",{autoComplete:"off",onSubmit:function(r){r.preventDefault(),n(k(e.current.value,t.current.value)),K.auth={username:e.current.value,position:t.current.value},K.connect()},children:Object(Z.jsxs)("div",{className:"form",children:[Object(Z.jsx)("h1",{children:"Login"}),Object(Z.jsx)("div",{className:"username",children:Object(Z.jsx)("input",{id:"username",placeholder:"Enter your username",ref:e})}),Object(Z.jsx)("div",{className:"username position",children:Object(Z.jsx)("input",{id:"position",placeholder:"Enter your position/role",ref:t})}),Object(Z.jsx)("button",{children:"Join chat"})]})})};var Rn=function(){var n=Object(v.c)((function(n){return n.currentUser})),e=Object(v.b)();return Object(m.useEffect)((function(){return function(){e(k(null,null))}}),[]),n.username?Object(Z.jsx)(Nn,{}):Object(Z.jsx)(Un,{})},_n=t(33);t.n(_n).a.render(Object(Z.jsx)(v.a,{store:h,children:Object(Z.jsx)(g.a.StrictMode,{children:Object(Z.jsx)(Rn,{})})}),document.getElementById("root"))},75:function(n,e,t){}},[[133,1,2]]]);
//# sourceMappingURL=main.8d0bf0db.chunk.js.map