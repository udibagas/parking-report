(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{655:function(t,e,r){"use strict";r.r(e);var n={layout:"login",data:function(){return{form:{},rules:{}}},methods:{login:function(){var t=this;this.$auth.loginWith("cookie",{data:this.form}).then((function(e){return t.$router.push("/")})).catch((function(e){422==e.response.status&&(t.rules=e.response.data.errors,t.$refs.form.validate()),t.$notifier.showMessage({content:e.response.data.message,color:"error"})}))}}},o=r(69),l=r(71),c=r.n(l),d=r(194),m=r(285),v=r(483),f=r(466),h=r(647),w=r(193),x=r(557),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-h5 text-center mt-15 mb-6 white--text"},[t._v("PARKING REPORT")]),t._v(" "),r("v-card",{staticStyle:{width:"300px",margin:"80px auto 0"},attrs:{elevation:"3"}},[r("v-card-text",[r("div",{staticClass:"text-center"},[r("v-avatar",{staticClass:"mt-n12 mb-6",attrs:{color:"indigo darken-1",size:"75"}},[r("v-icon",{attrs:{size:"50",dark:""}},[t._v("mdi-account")])],1)],1),t._v(" "),r("v-form",{ref:"form",staticClass:"py-6",attrs:{"lazy-validation":""}},[r("v-text-field",{staticClass:"mb-6",attrs:{label:"User/Email",placeholder:"Masukkan nama/email Anda",outlined:"",dense:"",rules:t.rules.email,"hide-details":"","prepend-inner-icon":"mdi-account-circle-outline"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("v-text-field",{staticClass:"mb-6",attrs:{label:"Password",type:"password",placeholder:"Password",outlined:"",dense:"",rules:t.rules.password,"hide-details":"","prepend-inner-icon":"mdi-lock-outline"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"text-center d-block mt-n4"},[r("v-btn",{staticStyle:{width:"120px"},attrs:{color:"indigo darken-1",dark:""},on:{click:function(e){return e.stopPropagation(),t.login.apply(null,arguments)}}},[t._v("\n\t\t\tLOGIN\n\t\t")])],1),t._v(" "),r("div",{staticClass:"text-center my-6 white--text"},[t._v("\n\t\tMitraTeknik © "+t._s((new Date).getFullYear())+"\n\t")])],1)}),[],!1,null,"c7da7b84",null);e.default=component.exports;c()(component,{VAvatar:d.a,VBtn:m.a,VCard:v.a,VCardText:f.b,VForm:h.a,VIcon:w.a,VTextField:x.a})}}]);