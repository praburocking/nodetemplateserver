(this.webpackJsonpgameclient=this.webpackJsonpgameclient||[]).push([[0],{255:function(e,t,a){a(256),e.exports=a(537)},272:function(e,t,a){},273:function(e,t,a){},425:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){},531:function(e,t,a){},536:function(e,t,a){},537:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),o=a.n(l),c=(a(272),a(59)),s=(a(273),a(9)),i=a.n(s),u=a(34),m=a(24),p=a(4),d=a(43),g=a(29),h=a(19),E=a(25),f=a(67),y=a(35),v=a.n(y);function b(e,t,a){var r=new Date;a||(a=30),r.setTime(r.getTime()+24*a*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function w(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),r=0;r<a.length;r++){for(var n=a[r];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}function x(e){document.cookie=e+"= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/"}var k=function(e){if(!(e.token&&e.username&&e.id))throw"data not found";b("token",e.token,30),b("username",e.username,30),b("id",e.id)},R=function(){return{headers:{authorization:"bearer "+w("token")}}},T=function(){var e=w("token");return e||void 0},I=function(e){return{user:e.user,serverConfig:e.serverConfig,files:e.files}};a(291).config(),console.log("server url",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DEVELOPMENT_SERVER_URL:"http://localhost:3001/api/",REACT_APP_PRODUCTION_SERVER_URL:"https://prabugame.herokuapp.com/api/",REACT_APP_TEST_STRIPE_PK:"pk_test_9radQ2WXLrFFlDGV0XqNMUkw00PoyDNs29",REACT_APP_PRODUCTION_STRIPE_PK:"pk_live_iyPbhH04G2xJnlJwIi4gCQPi00y2HagUM9"}));var S="https://prabugame.herokuapp.com/api/",C=S+"signup",O=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post(C,e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},F=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/logout",{signout:!0},R()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},j=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("loginData ",e),a.prev=1,a.next=4,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/login",e));case 4:return t=a.sent,a.abrupt("return",t);case 8:return a.prev=8,a.t0=a.catch(1),a.abrupt("return",a.t0.response);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},N=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.get(C+"/exist?email="+e,null));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},P=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/forgotpassword",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},A=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/forgotpassword/verifykey?token="+e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},D=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/resetpass",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},L=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/verifyuser",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},_=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("https://prabugame.herokuapp.com/api/file/upload",e,R()));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},U=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(v.a.get("https://prabugame.herokuapp.com/api/file/list",R()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},q=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.delete("https://prabugame.herokuapp.com/api/file/"+e,R()));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},z=function(e,t){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.awrap(v.a.request({url:"https://prabugame.herokuapp.com/api/file/download/"+e,method:"POST",headers:R().headers,data:{key:t},responseType:"blob"}));case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0.response);case 10:case"end":return r.stop()}}),null,null,[[0,7]])},B=Object(c.withRouter)(m.a.create({name:"Signup"})((function(e){var t=e.form,a=t.getFieldDecorator,l=t.getFieldsError,o=t.getFieldError,c=t.isFieldTouched,s=Object(r.useState)(!1),y=Object(u.a)(s,2),v=y[0],b=y[1],w=Object(r.useState)(c("email")&&o("email")),x=Object(u.a)(w,2),R=x[0],T=x[1],I=E.a.Title;Object(r.useEffect)((function(){e.form.validateFields()}),[]);var S=c("password")&&o("password"),C=c("plan")&&o("plan"),F=f.a.Option;var j;return n.a.createElement("div",null,n.a.createElement(I,{style:{color:"white"},level:3},"Sign-up"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),b(!0),console.log("form",t.target.email),e.form.validateFields((function(t,a){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=7;break}return console.log("Received values of form: ",a),n.next=4,i.a.awrap(O(a));case 4:200===(r=n.sent).status?r.data.token?(k(r.data),h.a.success("welcome "+r.data.username+" !"),b(!1),e.history.push("/home")):(b(!1),e.history.push("/login")):(r.data&&r.data.message?h.a.error(r.data.message):h.a.error("Exception while signing us please try again later"),b(!1)),console.log("signup res",r);case 7:case"end":return n.stop()}}))}))},className:"login-form"},n.a.createElement(m.a.Item,{validateStatus:R?"error":"",help:R||""},a("email",{rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email",onBlur:function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("isExist ",e.target.value),!e.target.value){a.next=7;break}return a.next=4,i.a.awrap(N(e.target.value));case 4:t=a.sent,console.log("exist ",t),200===t.status&&(t.data.status?T("email-ID already exist"):T(!1));case 7:case"end":return a.stop()}}))}}))),n.a.createElement(m.a.Item,{validateStatus:S?"error":"",help:S||""},a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"}))),n.a.createElement(m.a.Item,{validateStatus:C?"error":"",help:C||""},a("plan",{rules:[{required:!0,message:"Please select a plan"}]})(n.a.createElement(f.a,{size:"large",placeholder:"select your plan"},n.a.createElement(F,{value:"planA"},"plan A, 8 User, 3USD/month"),n.a.createElement(F,{value:"planB"},"plan B, 12 User, 5USD/month")))),n.a.createElement(m.a.Item,null,n.a.createElement("br",null),n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",disabled:(j=l(),console.log("fieldError",j),Object.keys(j).some((function(e){return j[e]}))),loading:v},!v&&"Start Your Free Trial",v&&"Signing You In"))))}))),H=a(135),K=a(21),W=a(13),G=a(18),M=a(68),V=a(107),J=a(26),Q=a(244),Y=a(245),X=a.n(Y),$=(a(425),a(62)),Z=a(92),ee=a(36),te=a(31),ae=Object(ee.b)(I,{})(Object(c.withRouter)((function(e){var t=G.a.Header;console.log("header",e);var a=T(),r=n.a.createElement($.a,{theme:a?"light":"dark",mode:!a&&"horizontal",defaultSelectedKeys:e.defaultSelectedKeys,className:!a&&"header",style:{lineHeight:"64px",maxWidth:"200px"}},!a&&n.a.createElement($.a.Item,{key:"1",style:{minWidth:"100px"},onClick:function(){return e.history.push("/login")}},"LOGIN"),n.a.createElement($.a.Item,{key:"2",style:{minWidth:"100px"},onClick:function(){return e.history.push("/faq")}},"FAQ"),a&&n.a.createElement($.a.Divider,null),a&&n.a.createElement($.a.Item,{key:"3",style:{minWidth:"100px",color:"red"},onClick:function(){return e.history.push("/logout")}},"Logout"));return n.a.createElement(t,{style:{position:"fixed",zIndex:1,width:"100%",background:"rgba(2, 164, 255, 0.7)"}},n.a.createElement(te.b,{to:"/"}," ",n.a.createElement("div",{className:"logo"})),n.a.createElement(K.a,{type:"flex",justify:"end",align:"top"},n.a.createElement(W.a,null,!a&&r,a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(M.a,{shape:"square",size:"large",style:{margin:10,backgroundColor:"rgb(57, 224, 89)",verticalAlign:"middle"}}," ",e.user.username[0].toUpperCase()),n.a.createElement(Z.a.Button,{size:"large",overlay:r,onClick:function(){return e.history.push("/accounts")}},"Account")))))}))),re=X()((function(e){var t=G.a.Content,a=G.a.Footer,r=E.a.Title,l=E.a.Paragraph;return n.a.createElement(G.a,{className:"parallax"},n.a.createElement(ae,null),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"1020px"}},n.a.createElement(K.a,{style:{minHeight:"720px"}},n.a.createElement(W.a,{span:16},n.a.createElement(Q.a,{dotPosition:"left",autoplay:!0,style:{margin:15,marginTop:30,minHeight:700,minWidth:400,opacity:.5,color:"white"}},n.a.createElement("div",{style:{minHeight:700,minWidth:400,color:"white"}},n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")))),n.a.createElement(W.a,{span:7,style:{margin:"15px",marginTop:"120px",background:"rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(B,null))),n.a.createElement(K.a,{style:Object(H.a)({minHeight:400,margin:"0px",minWidth:"100%",backgroundColor:"rgba(2, 164, 255, 0.7)",padding:0},"margin",0)},n.a.createElement(W.a,null,n.a.createElement(K.a,{type:"flex",justify:"center",style:{paddingBottom:"8px",paddingTop:"5px"}},n.a.createElement(W.a,null,n.a.createElement(r,{level:2,style:{color:"white"}},"Why Us?"))),n.a.createElement(K.a,{type:"flex",justify:"space-between",style:{marginLeft:"15px",marginRight:"15px"}},n.a.createElement(W.a,{span:6,className:"alignCenter"},n.a.createElement(M.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(W.a,{span:6,className:"alignCenter"},n.a.createElement(M.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(W.a,{span:6,className:"alignCenter"},n.a.createElement(M.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(W.a,{span:6,className:"alignCenter"},n.a.createElement(M.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(W.a,{span:6,className:"alignCenter"},n.a.createElement(M.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me"))))),n.a.createElement(K.a,{style:{minHeight:200,margin:"0px",minWidth:"100%",padding:0,marginTop:"50px",marginBottom:"50px"}},n.a.createElement(W.a,null,n.a.createElement(r,{className:"alignCenter",style:{color:"white"}},"Pricing"),n.a.createElement(K.a,{style:{marginBottom:"50px",marginLeft:"40px",marginTop:"50px"}},n.a.createElement(W.a,{span:6},n.a.createElement(V.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 1"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(J.a,{style:{color:"white"}},n.a.createElement(J.a.Item,null,"value1"),n.a.createElement(J.a.Item,null,"value2"),n.a.createElement(J.a.Item,null,"value3"),n.a.createElement(J.a.Item,null,"value4")))),n.a.createElement(W.a,{span:6},n.a.createElement(V.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 2"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(J.a,{style:{color:"white"}},n.a.createElement(J.a.Item,null,"value1"),n.a.createElement(J.a.Item,null,"value2"),n.a.createElement(J.a.Item,null,"value3"),n.a.createElement(J.a.Item,null,"value4")))),n.a.createElement(W.a,{span:6},n.a.createElement(V.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 3"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(J.a,{style:{color:"white"}},n.a.createElement(J.a.Item,null,"value1"),n.a.createElement(J.a.Item,null,"value2"),n.a.createElement(J.a.Item,null,"value3"),n.a.createElement(J.a.Item,null,"value4")))),n.a.createElement(W.a,{span:6},n.a.createElement(V.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 4"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(J.a,{style:{color:"white"}},n.a.createElement(J.a.Item,null,"value1"),n.a.createElement(J.a.Item,null,"value2"),n.a.createElement(J.a.Item,null,"value3"),n.a.createElement(J.a.Item,null,"value4")))))))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))})),ne=a(179),le=(a(442),function(e){var t=G.a.Content,a=G.a.Footer,r=ne.a.Panel,l=E.a.Title,o=n.a.createElement("p",{style:{paddingLeft:24}},"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");return n.a.createElement(G.a,{className:"parallax layout-bg"},n.a.createElement(ae,{defaultSelectedKeys:["2"]}),n.a.createElement(t,{style:Object(H.a)({padding:"0 0 0 0px",marginTop:64,minHeight:"1020px",marginLeft:"80px",marginRight:"80px"},"marginTop","120px")},n.a.createElement(l,{className:"alignCenter",style:{color:"white"}},"FAQ"),n.a.createElement(ne.a,{bordered:!1,defaultActiveKey:["1"],style:{backgroundColor:"rgb(5, 163, 255)",color:"white"}},n.a.createElement(r,{header:"This is panel header 1",key:"1",style:{color:"white"}},o),n.a.createElement(r,{header:"This is panel header 2",key:"2"},o),n.a.createElement(r,{header:"This is panel header 3",key:"3"},o))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}),oe=Object(ee.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(c.withRouter)(m.a.create({name:"Login"})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],c=e.form,s=c.getFieldDecorator,f=(c.getFieldsError,c.getFieldError),y=c.isFieldTouched;Object(r.useEffect)((function(){e.form.validateFields()}),[]);var v=y("email")&&f("email"),b=y("password")&&f("password"),w=E.a.Title;E.a.Paragraph;return n.a.createElement("div",null,n.a.createElement(w,{level:3,style:{color:"white"}},"Login"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),console.log("type",o),o(!0),e.form.validateFields((function(t,a){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=6;break}return console.log("Received values of form: ",a),n.next=4,i.a.awrap(j(a));case 4:(r=n.sent)&&200===r.status?(k(r.data),e.setUserDetailsToStore(r.data),console.log("data =>",e.user),h.a.success("welcome "+r.data.username+" ! "),o(!1),e.history.push("/")):(r.data&&r.data.message?h.a.error(r.data.message):h.a.error("Exception while Signing-in "),o(!1));case 6:case"end":return n.stop()}}))}))},className:"login-form"},console.log("from return",e.user.username),n.a.createElement(m.a.Item,{validateStatus:v?"error":"",help:v||""},s("email",{rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"}))),n.a.createElement(m.a.Item,{validateStatus:b?"error":"",help:b||""},s("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"}))),n.a.createElement(m.a.Item,null,n.a.createElement("br",null),n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Login",l&&"Loging You In"))),n.a.createElement(K.a,null,n.a.createElement(W.a,{span:12,style:{color:"white"}},n.a.createElement(te.b,{to:"/",style:{color:"white"}},n.a.createElement(p.a,{type:"left",style:{color:"#1890ff"}}),"Signup")),n.a.createElement(W.a,{span:12},n.a.createElement(te.b,{to:"/forgotpassword",style:{color:"white"}},"Forgot password ",n.a.createElement(p.a,{type:"right",style:{color:"#1890ff"}})))))})))),ce=function(e){var t=G.a.Content,a=G.a.Footer;return n.a.createElement(G.a,{className:"layout-bg"},n.a.createElement(ae,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(K.a,{className:"alignCenter"},n.a.createElement(W.a,{span:8}),n.a.createElement(W.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(oe,null)),n.a.createElement(W.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},se=a(137),ie=a(136),ue=a(252),me=(a(443),ue.a.Dragger),pe=Object(ee.b)(null,{updateFilesToStore:function(e){return e.key=e.id,{type:"FILES_ADD",data:e}}})((function(e){var t={name:"file",multiple:!1,action:"#",showUploadList:!1,onChange:function(e){console.log("FILE",e.file),e.file&&(c(e.file),E(!0))},beforeUpload:function(){return!1},onSubmit:function(e){console.log("iam in submit"),e.preventDefault()}},a=Object(r.useState)(null),l=Object(u.a)(a,2),o=l[0],c=l[1],s=Object(r.useState)(!1),m=Object(u.a)(s,2),g=m[0],E=m[1],f=Object(r.useState)(null),y=Object(u.a)(f,2),v=y[0],b=y[1];return n.a.createElement("div",{className:"col-md-6",style:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(me,t,n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(p.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),n.a.createElement(ie.a,{title:"please Enter your entryption key",visible:g,onOk:function(t){var a,r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),(a=new FormData).append("file",o),a.append("key",v),n.next=6,i.a.awrap(_(a));case 6:200===(r=n.sent).status?e.updateFilesToStore(r.data):r.data.message?h.a.error(r.data.message):h.a.error("exception while uploading,please try again later"),E(!1),c(null),b(null);case 11:case"end":return n.stop()}}))},onCancel:function(e){console.log(e),E(!1),c(null),b(null)}},n.a.createElement(d.a,{type:"text",placeholder:"Encryption Key",value:v,onChange:function(e){console.log("value",e.target.value),b(e.target.value)}}),n.a.createElement("p",null,"we will use this key along with our own random private key to encrypt your data")))})),de=a(251),ge=a(248),he=Object(ee.b)(null,{deleteFromStore:function(e){return{type:"FILES_DEL",data:e}}})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)(null),s=Object(u.a)(c,2),m=s[0],p=s[1],g=Object(r.useState)(null),E=Object(u.a)(g,2),f=E[0],y=E[1],v=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return n.a.createElement("a",{style:{color:"black"}},e)}},{title:"Action",key:"action",render:function(e,t){return n.a.createElement("span",null,n.a.createElement("a",{style:{color:"black"},onClick:function(){return b(t)}},"Download "),n.a.createElement(ge.a,{type:"vertical",style:{color:"black"}}),n.a.createElement("a",{style:{color:"black"},onClick:function(){return w(t.key)}},"Delete"))}}],b=function(e){o(!0),p(e)},w=function(t){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(q(t));case 2:200===(a=r.sent).status?e.deleteFromStore(t):a.data&&a.data.message?h.a.error(a.data.message):h.a.error("Exception while deleting the file, Please try again later");case 4:case"end":return r.stop()}}))};return n.a.createElement("div",null,n.a.createElement(de.a,{columns:v,dataSource:e.data}),n.a.createElement(ie.a,{title:"please Enter your decryption key",visible:l,onOk:function(){return function(e){var t,a,r,n,l;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.key,c.next=3,i.a.awrap(z(t,f));case 3:a=c.sent,y(null),200===a.status?(r=a.data,n=window.URL.createObjectURL(new Blob([r])),(l=document.createElement("a")).href=n,l.setAttribute("download",e.name),document.body.appendChild(l),l.click(),l.remove()):a.data&&a.data.message?h.a.error(a.data.message):h.a.error("Exception while downloading the file"),o(!1);case 7:case"end":return c.stop()}}))}(m)},onCancel:function(e){console.log(e),o(!1),y(null)}},n.a.createElement(d.a,{type:"text",placeholder:"Decryption Key",value:f,onChange:function(e){console.log("value",e.target.value),y(e.target.value)}}),n.a.createElement("p",null,"we will use this key along with our own random private key to decrypt your data")))})),Ee=Object(ee.b)(I,{addFilesToStore:function(e){return{type:"FILES_INIT",data:e}}})((function(e){var t=G.a.Content,a=G.a.Footer;return Object(r.useEffect)((function(){!function(){var t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(U());case 2:200===(t=a.sent).status&&(t.data.map((function(e){e.key=e.id})),console.log("files ",t.data),e.addFilesToStore(t.data));case 4:case"end":return a.stop()}}))}()}),[]),n.a.createElement(G.a,{className:"parallax layout-bg"},console.log("files in store ",e.files),n.a.createElement(ae,{defaultSelectedKeys:["1"],isLoggedIn:"true"}),n.a.createElement(t,{style:{marginTop:64,minHeight:"720px",padding:20}},n.a.createElement(K.a,{style:{margin:20,marginLeft:100,marginRight:100}},n.a.createElement(W.a,{span:16},n.a.createElement(pe,null)),n.a.createElement(W.a,{span:6,className:"App",style:{color:"white",padding:"20px",margin:20}},n.a.createElement(se.a,{type:"dashboard",percent:75,status:"active",style:{color:"white"}}))),n.a.createElement(K.a,{style:{backgroundColor:"rgb(5, 163, 255)",marginLeft:50,marginRight:50}},n.a.createElement(W.a,null,n.a.createElement(he,{data:e.files})))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))})),fe=(a(531),Object(c.withRouter)((function(e){var t=!1;return Object(r.useEffect)((function(){i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(F());case 2:200===a.sent.status?(x("token"),x("username"),x("id"),e.history.push("/")):t=!0;case 4:case"end":return a.stop()}}))})),n.a.createElement("div",null,!t&&n.a.createElement(E.a.Title,{className:"center blink_me"}," signing you out !!!"),t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a.Title,null," ohh!!, we encountered a exception while signing you out"),"  ",n.a.createElement(E.a.Paragraph,null,"If the Exception persist please contact the support")))}))),ye=a(80),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CONFIG_INIT"===t.type?t.data:"CONFIG_ADD"===t.type?e.concat(t.data):e},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"USER_INIT"===t.type?(console.log("action",t),t.data):e},we=a(250),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("FILES_INIT"===t.type)return console.log("action",t),t.data;if("FILES_ADD"===t.type)return e.concat(t.data);if("FILES_DEL"===t.type){console.log("old state",e),console.log("action",t);var a=e.filter((function(e){return e.id!==t.data}));return console.log(" new state ",a),a}return e},ke=Object(ye.c)({serverConfig:ve,user:be,files:xe}),Re=Object(ye.d)(ke,Object(ye.a)(we.a)),Te=(a(532),a(236),a(534),function(e){var t=G.a.Content,a=G.a.Footer;return n.a.createElement(G.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg"}},n.a.createElement(ae,{defaultSelectedKeys:["1"],isLoggedIn:"true"}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"720px"}},n.a.createElement(K.a,null,n.a.createElement(W.a,{span:6,style:{borderRight:"5px solid green",minHeight:"720px"}},n.a.createElement(K.a,null,"USER")),n.a.createElement(W.a,{span:18}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}),Ie=(a(536),function(e){return console.log("not found"),n.a.createElement("div",{id:"notfound"},n.a.createElement("div",{class:"notfound"},n.a.createElement("div",{class:"notfound-404"},n.a.createElement("h1",null,"Oops!"),n.a.createElement("h2",null,"404 - The Page can't be found")),n.a.createElement(te.b,{to:"/"},"Go TO Homepage")))}),Se=Object(ee.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(c.withRouter)(m.a.create({name:"forgotpassword"})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],c=e.form,s=c.getFieldDecorator,f=(c.getFieldsError,c.getFieldError),y=c.isFieldTouched;Object(r.useEffect)((function(){e.form.validateFields()}),[]);var v=y("email")&&f("email"),b=E.a.Title,w=E.a.Paragraph;return n.a.createElement("div",null,n.a.createElement(b,{level:3,style:{color:"white"}},"Forgot Password"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),console.log("type",o),o(!0),e.form.validateFields((function(t,a){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=5;break}return n.next=3,i.a.awrap(P(a));case 3:(r=n.sent)&&200===r.status?(h.a.success("password reset link has been sent to your registered mail-id"),o(!1),e.history.push("/")):(r.data.message?h.a.error(r.data.message):h.a.error("Exception while Signing-in "),o(!1));case 5:case"end":return n.stop()}}))}))},className:"login-form"},console.log("from return",e.user.username),n.a.createElement(m.a.Item,{validateStatus:v?"error":"",help:v||""},s("email",{rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"}))),n.a.createElement(m.a.Item,null,n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Sent password reset link",l&&"sending password reset link"))),n.a.createElement(te.b,{to:"/login"},n.a.createElement(p.a,{type:"arrow-left"}),n.a.createElement(w,{style:{color:"white"}}," Back to Login")))})))),Ce=function(e){var t=G.a.Content,a=G.a.Footer;return n.a.createElement(G.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg",height:"calc(100vw)"}},n.a.createElement(ae,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(K.a,{className:"alignCenter"},n.a.createElement(W.a,{span:8}),n.a.createElement(W.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Se,null)),n.a.createElement(W.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},Oe=Object(ee.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(c.withRouter)(m.a.create({name:"resetPassword"})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],c=e.form,s=c.getFieldDecorator,f=c.getFieldError,y=(0,c.isFieldTouched)("password")&&f("password"),v=E.a.Title;Object(r.useEffect)((function(){e.form.validateFields(),function(){var t,a;i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t=e.location.search).includes("token=")||t.includes("&")||!t.split("=")[1]){r.next=8;break}return r.next=4,i.a.awrap(A(t.split("=")[1]));case 4:200===(a=r.sent).status&&a.data.status||(h.a.error("invalid token redirecting to home page"),e.history.push("/")),r.next=10;break;case 8:h.a.error("invalid token redirecting to home page"),e.history.push("/");case 10:case"end":return r.stop()}}))}()}),[]);return n.a.createElement("div",null,n.a.createElement(v,{level:3,style:{color:"white"}},"Reset Password"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),console.log("sumbit"),e.form.validateFields((function(t,a){var r,n;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(console.log("values ",a),t){l.next=13;break}if(o(!0),console.log("Received values of form: ",a),!(r=e.location.search).includes("token=")||r.includes("&")||!r.split("=")[1]){l.next=12;break}return l.next=8,i.a.awrap(D({token:r.split("=")[1],password:a.password}));case 8:(n=l.sent)&&200===n.status?(console.log("data =>",e.user),h.a.success("Your password changed please login "),o(!1),e.history.push("/login")):(console.log("login Response",n),h.a.error("Exception while resetting your password"),o(!1)),l.next=13;break;case 12:h.a.error("Exception while resetting your password");case 13:case"end":return l.stop()}}))}))},className:"login-form"},n.a.createElement(m.a.Item,{validateStatus:y?"error":"",help:y||""},s("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"}))),n.a.createElement(m.a.Item,null,n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Reset Password",l&&"Resetting Password"))),n.a.createElement(te.b,{className:"login-form-forgot",to:"/forgotpassword"},"Forgot password"))})))),Fe=function(e){var t=G.a.Content,a=G.a.Footer;return n.a.createElement(G.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg",height:"calc(100vw)"}},n.a.createElement(ae,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(K.a,{className:"alignCenter"},n.a.createElement(W.a,{span:8}),n.a.createElement(W.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Oe,null)),n.a.createElement(W.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},je=Object(c.withRouter)((function(e){var t=G.a.Content,a=G.a.Footer,l=E.a.Title,o="Verifying User...";return Object(r.useEffect)((function(){!function(){var t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(t=e.location.search).includes("token=")||t.includes("&")||!t.split("=")[1]){a.next=8;break}return a.next=4,i.a.awrap(L({token:t.split("=")[1]}));case 4:200===a.sent.status?(h.a.success("User verified redirecting to Login"),e.history.push("/login")):L.data.message?h.a.error(L.data.message):h.a.error("Exception while verifying user"),a.next=10;break;case 8:h.a.error("invalid token redirecting to home page"),e.history.push("/");case 10:o="Verified, Please login!!";case 11:case"end":return a.stop()}}))}()}),[]),n.a.createElement(G.a,{className:"parallax"},n.a.createElement(ae,{defaultSelectedKeys:["1"],isLoggedIn:"false"}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"720px"}},n.a.createElement(l,null,"  ",o," ")),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}));var Ne=Object(c.withRouter)((function(e){return null!==Re.user&&void 0!==Re.user||(console.log("store user added"),function(e){var t={username:w("username"),token:w("token"),id:w("id")};e.dispatch({type:"USER_INIT",data:t})}(Re)),n.a.createElement(ee.a,{store:Re},console.log("store =>",Re),n.a.createElement(c.Switch,{location:e.location},n.a.createElement(c.Route,{exact:!0,path:"/",render:function(){return T()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(re,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/faq",render:function(){return n.a.createElement(le,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/login",render:function(){return T()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(ce,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/logout",render:function(){return T()?n.a.createElement(fe,null):n.a.createElement(c.Redirect,{to:"/"})}}),n.a.createElement(c.Route,{exact:!0,path:"/home",render:function(){return T()?n.a.createElement(Ee,null):n.a.createElement(c.Redirect,{to:"/"})}}),n.a.createElement(c.Route,{exact:!0,path:"/accounts",render:function(){return T()?n.a.createElement(Te,null):n.a.createElement(c.Redirect,{to:"/"})}}),n.a.createElement(c.Route,{exact:!0,path:"/forgotpassword",render:function(){return T()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(Ce,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/resetPassword",render:function(){return T()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(Fe,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/verifyuser",render:function(){return T()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(je,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/signup",render:function(){return T()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(B,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/pagenotfound",render:function(){return n.a.createElement(Ie,null)}}),n.a.createElement(c.Route,{render:function(){return n.a.createElement(c.Redirect,{to:"/pagenotfound"})}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(te.a,null,n.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[255,1,2]]]);
//# sourceMappingURL=main.7d056fc4.chunk.js.map