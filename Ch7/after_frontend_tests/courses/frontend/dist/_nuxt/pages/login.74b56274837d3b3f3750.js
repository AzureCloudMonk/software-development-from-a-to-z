webpackJsonp([5],{"7qdj":function(e,t,a){"use strict";var i=a("Dd8w"),s=a.n(i),n=a("NYxO");t.a={middleware:"notauthenticated",data:function(){return{valid:!1,email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],password:"",e1:!0}},computed:Object(n.mapGetters)(["isAuthenticated"]),methods:s()({},Object(n.mapActions)(["authenticateUser"]),{submitForm:function(){this.authenticateUser({username:this.email,password:this.password})}}),watch:{isAuthenticated:function(e){e&&this.$router.push("/dashboard")}}}},XyyL:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:"","text-xs-center":""}},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:"",autocomplete:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":e.e1?"visibility":"visibility_off","append-icon-cb":function(){return e.e1=!e.e1},type:e.e1?"password":"text",name:"input-10-1",label:"Enter your password",hint:"At least 8 characters",min:"8",counter:"",autocomplete:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submitForm}},[e._v("Login!")])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"","text-xs-center":""}},[a("div",{staticClass:"subheading"},[e._v("Don't have an account?")]),a("v-btn",{attrs:{router:"",to:"register",exact:""}},[e._v("\n        Register\n      ")])],1)],1)],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s},bIR0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7qdj"),s=a("XyyL"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="pages/login.vue",t.default=n.exports}});