(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{483:function(t,e,o){"use strict";o(11),o(9),o(10),o(16),o(12),o(17);var r=o(3);o(19),o(28);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{filters:{},sort:null,sort_direction:null,loading:!0,selectedData:[],selectedRow:{},rules:{},form:{},showForm:!1,dialogDelete:!1,items:[],totalItems:0,paginated:!0,options:{page:1,itemsPerPage:10,sortBy:[],sortDesc:[!1],groupBy:!1,groupDesc:!1,multiSort:!1,mustSort:!1},yesNoFilter:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]}},watch:{options:{deep:!0,handler:function(){this.getData()}},tenant_id:{handler:function(){this.getData()}}},methods:{searchData:function(){this.options.page=1,this.getData()},getData:function(){var t=this;this.loading=!0;var e=c(c(c({},this.options),this.filters),{},{paginated:this.paginated,sort_field:this.options.sortBy[0],sort_direction:this.options.sortDesc[0]?"desc":"asc"});this.$axios.$get(this.url,{params:e}).then((function(e){t.paginated?(t.items=e.data,t.totalItems=e.total):(t.items=e,t.totalItems=e.length)})).catch((function(e){t.$notifier.showMessage({content:e.response.data.message,color:"error"})})).finally((function(){return t.loading=!1}))},clearSearch:function(){this.options.page=1,this.filters.keyword="",this.getData()},refreshData:function(){this.options.page=1,this.filters={},this.getData()},saveData:function(){var t=this;this.loading=!0,this.$axios({method:this.form.id?"put":"post",url:this.form.id?"".concat(this.url,"/").concat(this.form.id):this.url,data:this.form}).then((function(e){t.closeForm(),t.$notifier.showMessage({content:e.data.message,color:"success"}),t.refreshData(),t.afterSave()})).catch((function(e){422==e.response.status?(t.rules=e.response.data.errors,t.$refs.form.validate()):t.$notifier.showMessage({content:e.response.data.message,color:"error"})})).finally((function(){return t.loading=!1}))},afterSave:function(){},afterDelete:function(){},confirmDelete:function(t){this.dialogDelete=!0,this.selectedRow=t},deleteData:function(){var t=this;this.loading=!0,this.$axios.$delete("".concat(this.url,"/").concat(this.selectedRow.id)).then((function(e){t.dialogDelete=!1,t.$notifier.showMessage({content:e.message,color:"success"}),t.getData(),t.afterDelete()})).catch((function(e){e.response.status&&t.$notifier.showMessage({content:e.response.data.message,color:"error"})})).finally((function(){return t.loading=!1}))},openForm:function(t){this.form=c({},t),this.selectedRow=c({},t),this.showForm=!0},closeForm:function(){this.$refs.form.resetValidation(),this.showForm=!1}}}},514:function(t,e,o){var content=o(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("197fcea4",content,!0,{sourceMap:!1})},515:function(t,e,o){var r=o(23)(!1);r.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--x-small .v-icon{font-size:10px;height:10px;width:10px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--small .v-icon{font-size:12px;height:12px;width:12px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--default .v-icon{font-size:14px;height:14px;width:14px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--large .v-icon{font-size:16px;height:16px;width:16px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-chip.v-size--x-large .v-icon{font-size:18px;height:18px;width:18px}',""]),t.exports=r},531:function(t,e,o){"use strict";o(11),o(9),o(16),o(12),o(17);var r=o(18),n=o(3),c=(o(10),o(514),o(14)),l=o(207),h=o(97),v=o(32),d=o(133),f=o(38),m=o(60),x=o(88),y=o(132),w=o(8);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var o=Object(r.a)(e,2),n=o[0],c=o[1];t.$attrs.hasOwnProperty(n)&&Object(w.a)(n,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),r=o.tag,data=o.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var n=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(n,data),e)}})},618:function(t,e,o){"use strict";o.r(e);var r={mixins:[o(483).a],data:function(){return{url:"/api/customer",paginated:"",colors:{aktif:"green",nonaktif:"red",expired:"grey"}}},mounted:function(){this.getData()}},n=o(69),c=o(71),l=o.n(c),h=o(531),v=o(193),d=o(195),f=o(122),m=o(197),x=o(81),y=o(199),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-list",{attrs:{rounded:""}},[o("v-list-item-group",{attrs:{color:"indigo"}},t._l(t.items,(function(e){return o("v-list-item",{key:e.id,attrs:{link:""}},[o("v-list-item-avatar",{staticClass:"d-none d-sm-flex",attrs:{color:e.active?"green":"red"}},[o("v-icon",{attrs:{dark:""}},[t._v("mdi-badge-account-horizontal-outline")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.nama)}}),t._v(" "),o("v-list-item-subtitle",[t._v("\n\t\t\t\t\tMasa Aktif:\n\t\t\t\t\t"+t._s(e.masa_aktif?t.$moment(e.masa_aktif).format("DD/MMM/YY"):"-")+"\n\t\t\t\t\t"),o("br"),t._v("\n\t\t\t\t\tUpdate Terakhir:\n\t\t\t\t\t"+t._s(e.last_update?t.$moment(e.last_update).format("DD/MMM/YY HH:mm"):"-")+"\n\t\t\t\t")])],1),t._v(" "),o("v-chip",{attrs:{color:t.colors[e.status],dark:"",small:""}},[t._v(t._s(e.status.toUpperCase()))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VChip:h.a,VIcon:v.a,VList:d.a,VListItem:f.a,VListItemAvatar:m.a,VListItemContent:x.a,VListItemGroup:y.a,VListItemSubtitle:x.b,VListItemTitle:x.c})}}]);