(this["webpackJsonpchat-realtime"]=this["webpackJsonpchat-realtime"]||[]).push([[0],{173:function(e,t,n){},174:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(26),r=n.n(i),o=(n(173),n(174),n(89)),s=n.n(o),l=n(105),d=n(269),j=n(264),u=n(265),b=n(70),h=n(99);n(175),n(261);h.a.initializeApp({apiKey:"AIzaSyAhQ0aywq5wgeyLCpehZgYV894H5wFqi-U",authDomain:"realtimechat-6ba2a.firebaseapp.com",projectId:"realtimechat-6ba2a",storageBucket:"realtimechat-6ba2a.appspot.com",messagingSenderId:"502722494732",appId:"1:502722494732:web:173225f9aecfc3bdb7c929",measurementId:"G-TE0ZXK0Q4Q"});var p,m,O,x,f,v,g,y,w,C,I,N,R,A=h.a.auth(),U=h.a.firestore(),k=h.a,M=n(90),L=n(50),S=function(e,t){U.collection(e).add(Object(L.a)(Object(L.a)({},t),{},{createdAt:k.firestore.FieldValue.serverTimestamp()}))},F=function(e){for(var t=e.split(" ").filter((function(e){return e})),n=t.length,c=[],a=[],i=[],r=0;r<n;r++)c[r]=!1;return function e(r){for(var o=0;o<n;o++)c[o]||(c[o]=!0,a[r]=t[o],r===n-1&&i.push(a.join(" ")),e(r+1),c[o]=!1)}(0),i.reduce((function(e,t){var n=function(e){var t=[],n="";return e.split("").forEach((function(e){n+=e,t.push(n)})),t}(t);return[].concat(Object(M.a)(e),Object(M.a)(n))}),[])},T=n(276),V=n(277),_=n(7),z=d.a.Title,P=d.a.Text,B=new k.auth.FacebookAuthProvider,E=new k.auth.GoogleAuthProvider,G=function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.signInWithPopup(t);case 2:n=e.sent,c=n.additionalUserInfo,a=n.user,(null===c||void 0===c?void 0:c.isNewUser)&&S("users",{displayName:a.displayName,email:a.email,photoURL:a.photoURL,uid:a.uid,providerId:c.providerId,keyword:F(a.displayName)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{style:{textAlign:"center"},children:Object(_.jsx)(j.a,{justify:"center",style:{height:800},children:Object(_.jsxs)(u.a,{span:8,children:[Object(_.jsx)(z,{children:"Chat App"}),Object(_.jsx)(P,{style:{textAlign:"center",display:"block",marginBottom:5},children:"\u0110\u0103ng nh\u1eadp"}),Object(_.jsx)(b.a,{style:{width:"100%",marginBottom:"5px"},onClick:function(){return e(B)},icon:Object(_.jsx)(T.a,{}),children:"Facebook"}),Object(_.jsx)(b.a,{style:{width:"100%"},onClick:function(){return e(E)},icon:Object(_.jsx)(V.a,{}),children:"Google"})]})})})},D=n(33),K=n(34),Q=n(271),q=n(278),H=n(31),J=function(e,t){var n=Object(c.useState)([]),a=Object(H.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){var n=U.collection(e).orderBy("createdAt");if(t){if(!t.compareValue||!t.compareValue.length)return;n=n.where(t.fieldName,t.operator,t.compareValue)}return n.onSnapshot((function(e){var t=e.docs.map((function(e){return Object(L.a)(Object(L.a)({},e.data()),{},{id:e.id})}));r(t)}))}),[e,t]),i},Z=n(266),W=n(27),X=a.a.createContext(),Y=function(e){var t=e.children,n=Object(W.f)(),a=Object(c.useState)({}),i=Object(H.a)(a,2),r=i[0],o=i[1],s=Object(c.useState)(!0),l=Object(H.a)(s,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){var e=A.onAuthStateChanged((function(e){if(e){var t=e.displayName,c=e.email,a=e.uid,i=e.photoURL;return o({displayName:t,email:c,uid:a,photoURL:i}),j(!1),void n.push("/")}j(!1),n.push("/login")}));return function(){e()}}),[n]),Object(_.jsx)(X.Provider,{value:{user:r},children:d?Object(_.jsx)(Z.a,{}):t})},$=a.a.createContext(),ee=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(H.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(!1),s=Object(H.a)(o,2),l=s[0],d=s[1],j=Object(c.useState)(""),u=Object(H.a)(j,2),b=u[0],h=u[1],p=Object(c.useContext)(X).user.uid,m=Object(c.useMemo)((function(){return{fieldName:"members",operator:"array-contains",compareValue:p}}),[p]),O=J("rooms",m),x=Object(c.useMemo)((function(){return O.find((function(e){return e.id===b}))||{}}),[O,b]),f=Object(c.useMemo)((function(){return{fieldName:"uid",operator:"in",compareValue:x.members}}),[x.members]),v=J("users",f);return Object(_.jsx)($.Provider,{value:{rooms:O,members:v,isAddRoomVisible:i,setIsAddRoomVisible:r,selectedRoomId:b,setSelectedRoomId:h,selectedRoom:x,isInviteMemberModal:l,setIsInviteMemberModal:d},children:t})},te=Q.a.Panel,ne=(K.a.div(p||(p=Object(D.a)(["\n  &&& {\n    height: calc(100% - 57px);\n\n    .ant-collapse {\n      height: 100%;\n\n      &-content-box {\n        overflow-y: auto;\n        height: 100%;\n      }\n\n      &-header,\n      p {\n        color: white;\n      }\n\n      &-content-box {\n        padding: 0 40px;\n\n        @media screen and (max-width: 576px) {\n          padding: 0 16px;\n        }\n      }\n\n      &-item {\n        height: 100%;\n      }\n\n      &-content {\n        height: calc(100% - 46px);\n\n        @media screen and (max-width: 576px) {\n          height: calc(100% - 68px);\n        }\n      }\n    }\n  }\n"]))),Object(K.a)(b.a)(m||(m=Object(D.a)(["\n  color: white;\n  padding: 0;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: #cecece;\n  }\n"])))),ce=Object(K.a)(d.a.Link)(O||(O=Object(D.a)(["\n  display: block;\n  margin-bottom: 5px;\n  color: white;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),ae=function(){var e=Object(c.useContext)($),t=e.rooms,n=e.setIsAddRoomVisible,a=e.setSelectedRoomId;return Object(_.jsxs)(Q.a,{defaultActiveKey:["1"],children:[Object(_.jsxs)(te,{header:"Room List",children:[t.map((function(e){return Object(_.jsx)(ce,{onClick:function(){return a(e.id)},children:e.name},e.id)})),Object(_.jsx)(ne,{onClick:function(){n(!0)},ghost:!0,style:{color:"green"},icon:Object(_.jsx)(q.a,{}),children:"Th\xeam ph\xf2ng"})]},"1"),Object(_.jsx)(ce,{})]})},ie=n(274),re=n(279),oe=K.a.div(x||(x=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(82, 38, 83);\n  .username {\n    color: white;\n    margin-left: 5px;\n  }\n"]))),se=function(){var e,t=Object(c.useContext)(X).user,n=t.displayName,a=t.photoURL;return Object(_.jsxs)(oe,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(ie.a,{src:a,children:a?"":null===n||void 0===n||null===(e=n.chatAt(0))||void 0===e?void 0:e.toUpperCase()}),Object(_.jsx)(d.a.Text,{style:{marginLeft:"5px"},children:n})]}),Object(_.jsx)(b.a,{type:"text",onClick:function(){return A.signOut()},icon:Object(_.jsx)(re.a,{})})]})},le=K.a.div(f||(f=Object(D.a)(["\n  background: #fff;\n  color: #fff;\n  height: 100vh;\n"]))),de=function(){return Object(_.jsx)(le,{children:Object(_.jsxs)(j.a,{children:[Object(_.jsx)(u.a,{span:24,children:Object(_.jsx)(se,{})}),Object(_.jsx)(u.a,{span:24,children:Object(_.jsx)(ae,{})})]})})},je=n(268),ue=n(66),be=n(273),he=n(275),pe=n(280),me=n(267),Oe=K.a.div(v||(v=Object(D.a)(["\n  margin-bottom: 10px;\n  .author {\n    margin-left: 5px;\n    font-weight: bold;\n  }\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: #a7a7a7;\n  }\n  .content {\n    margin-left: 30px;\n  }\n"])));function xe(e){var t="";return e&&(t=(t=Object(me.a)(new Date(1e3*e),new Date)).charAt(0).toUpperCase()+t.slice(1)),t}function fe(e){var t,n=e.text,c=e.displayName,a=e.createdAt,i=e.photoURL;return Object(_.jsxs)(Oe,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(ie.a,{size:"small",src:i,children:i?"":null===c||void 0===c||null===(t=c.charAt(0))||void 0===t?void 0:t.toUpperCase()}),Object(_.jsx)(d.a.Text,{className:"author",children:c}),Object(_.jsx)(d.a.Text,{className:"date",children:xe(null===a||void 0===a?void 0:a.seconds)})]}),Object(_.jsx)("div",{children:Object(_.jsx)(d.a.Text,{className:"content",children:n})})]})}var ve=K.a.div(g||(g=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 56px;\n  padding: 0 16px;\n  align-items: center;\n  border-bottom: 1px solid rgb(230, 230, 230);\n\n  .header {\n    &__info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      overflow: hidden;\n      height: 56px;\n    }\n\n    &__title {\n      margin: 0;\n      font-weight: bold;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    &__description {\n      font-size: 12px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n"]))),ge=K.a.div(y||(y=Object(D.a)(["\n  display: flex;\n  align-items: center;\n"]))),ye=K.a.div(w||(w=Object(D.a)(["\n  height: 100%;\n"]))),we=K.a.div(C||(C=Object(D.a)(["\n  height: calc(100% - 56px);\n  display: flex;\n  flex-direction: column;\n  padding: 11px;\n  justify-content: flex-end;\n"]))),Ce=Object(K.a)(je.a)(I||(I=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 2px 2px 0;\n  border: 1px solid rgb(230, 230, 230);\n  border-radius: 2px;\n\n  .ant-form-item {\n    flex: 1;\n    margin-bottom: 0;\n  }\n"]))),Ie=Object(K.a)(b.a)(N||(N=Object(D.a)(["\n  @media screen and (max-width: 576px) {\n    span:nth-child(2) {\n      display: none;\n    }\n  }\n"]))),Ne=K.a.div(R||(R=Object(D.a)(["\n  max-height: 100%;\n  overflow-y: auto;\n"]))),Re=function(){var e=Object(c.useContext)($),t=e.selectedRoom,n=e.members,a=e.setIsInviteMemberModal,i=Object(c.useContext)(X).user,r=i.uid,o=i.photoURL,s=i.displayName,l=Object(c.useState)(""),d=Object(H.a)(l,2),j=d[0],u=d[1],h=je.a.useForm(),p=Object(H.a)(h,1)[0],m=function(){S("messages",{text:j,uid:r,photoURL:o,roomId:t.id,displayName:s}),p.resetFields(["message"])},O=Object(c.useMemo)((function(){return{fieldName:"roomId",operator:"==",compareValue:t.id}}),[t.id]),x=J("messages",O);return Object(_.jsx)(ye,{children:t.id?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(ve,{children:[Object(_.jsxs)("div",{className:"header__info",children:[Object(_.jsx)("p",{className:"header__title",children:t.name}),Object(_.jsx)("span",{className:"header__description",children:t.description})]}),Object(_.jsxs)(ge,{children:[Object(_.jsx)(Ie,{style:{color:"green"},type:"text",icon:Object(_.jsx)(pe.a,{}),onClick:function(){return a(!0)},children:"Add"}),Object(_.jsx)(ie.a.Group,{size:"small",maxCount:2,children:n.map((function(e){var t,n;return Object(_.jsx)(ue.a,{title:e.displayName,id:e.id,children:Object(_.jsx)(ie.a,{src:e.photoURL,children:e.displayName?"":null===(t=e.displayName)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()})},e.id)}))})]})]}),Object(_.jsxs)(we,{children:[Object(_.jsx)(Ne,{children:x.map((function(e){return Object(_.jsx)(fe,{text:e.text,photoURL:e.photoURL,createdAt:e.createdAt,displayName:e.displayName},e.id)}))}),Object(_.jsxs)(Ce,{form:p,children:[Object(_.jsx)(je.a.Item,{name:"message",style:{flex:1,marginBottom:0},children:Object(_.jsx)(be.a,{placeholder:"Nh\u1eadp tin nh\u1eafn",autoComplete:"off",bordered:!1,onPressEnter:m,onChange:function(e){u(e.target.value)}})}),Object(_.jsx)(b.a,{type:"primary",onClick:m,children:"G\u1eedi"})]})]})]}):Object(_.jsx)(he.a,{message:"H\xe3y ch\u1ecdn ph\xf2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})},Ae=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(j.a,{children:[Object(_.jsx)(u.a,{span:8,children:Object(_.jsx)(de,{})}),Object(_.jsx)(u.a,{span:16,children:Object(_.jsx)(Re,{})})]})})},Ue=n(135),ke=n(272),Me=function(){var e=Object(c.useContext)($),t=e.isAddRoomVisible,n=e.setIsAddRoomVisible,a=Object(c.useContext)(X).user.uid,i=je.a.useForm(),r=Object(H.a)(i,1)[0];return Object(_.jsx)("div",{children:Object(_.jsx)(ke.a,{title:"T\u1ea1o ph\xf2ng",visible:t,onOk:function(){S("rooms",Object(L.a)(Object(L.a)({},r.getFieldValue()),{},{members:[a]})),n(!1),r.resetFields()},onCancel:function(){n(!1),r.resetFields()},children:Object(_.jsxs)(je.a,{form:r,layout:"vertical",children:[Object(_.jsx)(je.a.Item,{label:"T\xean ph\xf2ng",name:"name",children:Object(_.jsx)(be.a,{placeholder:"Nh\u1eadp t\xean ph\xf2ng"})}),Object(_.jsx)(je.a.Item,{label:"M\xf4 t\u1ea3",name:"description",children:Object(_.jsx)(be.a.TextArea,{placeholder:"Nh\u1eadp m\xf4 t\u1ea3"})})]})})})},Le=n(167),Se=n(270),Fe=n(158);function Te(e){var t=e.fetchOptions,n=e.debounceTimeout,a=void 0===n?300:n,i=Object(Le.a)(e,["fetchOptions","debounceTimeout"]),r=Object(c.useState)(!1),o=Object(H.a)(r,2),s=o[0],l=o[1],d=Object(c.useState)([]),j=Object(H.a)(d,2),u=j[0],b=j[1],h=Object(c.useMemo)((function(){return Object(Fe.debounce)((function(e){b([]),l(!0),t(e,i.currentMembers).then((function(e){b(e),l(!1)}))}),a)}),[a,t]);return Object(_.jsx)(Se.a,Object(L.a)(Object(L.a)({labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:s?Object(_.jsx)(Z.a,{size:"small"}):null},i),{},{children:u.map((function(e){var t,n;return Object(_.jsxs)(Se.a.Option,{value:e.value,title:e.label,children:[Object(_.jsx)(ie.a,{size:"small",src:e.photoURL,children:e.photoURL?"":null===(t=e.label)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()}),"".concat(e.label)]},e.value)}))}))}function Ve(e,t){return _e.apply(this,arguments)}function _e(){return(_e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.collection("users").get().then((function(e){return e.docs.map((function(e){return{label:e.data().displayName,value:e.data().uid,photoURL:e.data().photoURL}})).filter((function(e){return!n.includes(e.value)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ze=function(){var e=Object(c.useContext)($),t=e.isInviteMemberModal,n=e.setIsInviteMemberModal,a=e.selectedRoomId,i=e.selectedRoom,r=(Object(c.useContext)(X).user.uid,Object(c.useState)([])),o=Object(H.a)(r,2),s=o[0],l=o[1],d=je.a.useForm(),j=Object(H.a)(d,1)[0];return console.log(s),Object(_.jsx)("div",{children:Object(_.jsx)(ke.a,{title:"M\u1eddi th\xeam th\xe0nh vi\xean",visible:t,onOk:function(){U.collection("rooms").doc(a).update({members:[].concat(Object(M.a)(i.members),Object(M.a)(s.map((function(e){return e.value}))))}),n(!1),j.resetFields()},onCancel:function(){n(!1),j.resetFields()},children:Object(_.jsx)(je.a,{form:j,layout:"vertical",children:Object(_.jsx)(Te,{mode:"multiple",label:"T\xean c\xe1c th\xe0nh vi\xean",value:s,placeholder:"T\xean th\xe0nh vi\xean",fetchOptions:Ve,onChange:function(e){return l(e)},currentMembers:i.members,style:{width:"100%"}})})})})};var Pe=function(){return Object(_.jsx)(Ue.a,{children:Object(_.jsx)(Y,{children:Object(_.jsxs)(ee,{children:[Object(_.jsxs)(W.c,{children:[Object(_.jsx)(W.a,{component:G,path:"/login"}),Object(_.jsx)(W.a,{component:Ae,path:"/"})]}),Object(_.jsx)(Me,{}),Object(_.jsx)(ze,{})]})})})};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(Pe,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.a07f8eb7.chunk.js.map