(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(t,e,n){"use strict";e.a=function(t,e){t.app;var n=t.store;e("notifier",{showMessage:function(t){var e=t.content,content=void 0===e?"":e,o=t.color,r=void 0===o?"":o;n.commit("snackbar/showMessage",{content:content,color:r})}})}},204:function(t,e,n){"use strict";n(35),n(59),n(19),n(52);e.a=function(t,e){t.app;e("decimal",(function(t){return null==t?0:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}))}},254:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("eaca92ae",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{show:!1,message:"",color:""}},created:function(){var t=this;this.$store.subscribe((function(e,n){"snackbar/showMessage"===e.type&&(t.message=n.snackbar.content,t.color=n.snackbar.color,t.show=!0)}))}},r=n(70),c=n(71),l=n.n(c),v=n(285),f=n(193),d=n(457),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{staticStyle:{"z-index":"1000"},attrs:{timeout:5e3,color:t.color},scopedSlots:t._u([{key:"action",fn:function(){return[n("v-btn",{attrs:{icon:"",plain:"",small:"",color:"white",text:""},on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("mdi-close")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n\t"+t._s(t.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VIcon:f.a,VSnackbar:d.a})},283:function(t,e,n){"use strict";n(10),n(47),n(69);var o={middleware:["auth"],methods:{logout:function(){var t=this;this.$auth.logout().then((function(e){return t.$router.push("/login")}))}},computed:{menus:function(){var t=this;return this.items.filter((function(i){return i.role.includes(t.$auth.user.role)}))}},data:function(){return{drawer:!1,items:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/",role:[0,1]},{icon:"mdi-card-account-details-outline",title:"My Account",to:"/my-account",role:[0,1]},{icon:"mdi-format-list-checkbox",title:"Tarif",to:"/tarif",role:[0]},{icon:"mdi-badge-account-horizontal-outline",title:"Customer",to:"/customer",role:[1]},{icon:"mdi-account-group-outline",title:"User",to:"/user",role:[1]}],title:"Parking Report"}}},r=n(70),c=n(71),l=n.n(c),v=n(456),f=n(460),d=n(458),m=n(194),h=n(461),_=n(193),w=n(195),x=n(122),k=n(196),V=n(81),C=n(199),y=n(459),L=n(462),$=n(278),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"mt-6 mb-4 text-center"},[n("v-avatar",{attrs:{size:"90",color:"#180044"}},[n("span",{staticClass:"text-h3 white--text"},[t._v("\n\t\t\t\t\t"+t._s(t.$auth.user.name.slice(0,1).toUpperCase())+"\n\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"mt-2 text-h5"},[t._v(t._s(t.$auth.user.name))]),t._v(" "),n("div",{staticClass:"grey--text"},[t._v(t._s(t.$auth.user.email))])],1),t._v(" "),n("v-list",{attrs:{shaped:""}},[n("v-list-item-group",{attrs:{color:"#180044"}},[t._l(t.menus,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),t._v(" "),n("v-list-item",{on:{click:t.logout}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)],1),t._v(" "),n("v-app-bar",{attrs:{fixed:"",app:"",flat:"",color:"#180044",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-main",{staticStyle:{background:"#f1f1f1"}},[n("v-container",[n("Nuxt"),t._v(" "),n("Snackbar")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{Snackbar:n(274).default}),l()(component,{VApp:v.a,VAppBar:f.a,VAppBarNavIcon:d.a,VAvatar:m.a,VContainer:h.a,VIcon:_.a,VList:w.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:V.a,VListItemGroup:C.a,VListItemTitle:V.c,VMain:y.a,VNavigationDrawer:L.a,VToolbarTitle:$.a})},284:function(t,e,n){"use strict";var o={},r=n(70),c=n(71),l=n.n(c),v=n(456),f=n(461),d=n(459),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticClass:"indigo"},[n("v-container",[n("Nuxt"),t._v(" "),n("Snackbar")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{Snackbar:n(274).default}),l()(component,{VApp:v.a,VContainer:f.a,VMain:d.a})},306:function(t,e,n){n(307),n(308),t.exports=n(323)},332:function(t,e,n){"use strict";n(254)},333:function(t,e,n){var o=n(23)(!1);o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},396:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var o=n(27),r=(n(89),function(){return{customerList:[]}}),c={setCustomerList:function(t,data){t.customerList=data}},l={getCustomerList:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,e.$axios.$get("/api/customer");case 3:data=n.sent,o("setCustomerList",data);case 5:case"end":return n.stop()}}),n)})))()}}},397:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{content:"",color:""}},r={showMessage:function(t,e){t.content=e.content,t.color=e.color}}},449:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=449},85:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(332),n(70)),c=n(71),l=n.n(c),v=n(456),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[306,16,4,17]]]);