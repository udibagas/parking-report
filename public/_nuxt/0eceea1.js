(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{524:function(e,t,n){"use strict";n.r(t);var o={props:["show"]},l=n(69),r=n(71),d=n.n(r),v=n(285),f=n(483),c=n(466),x=n(608),h=n(193),m=n(610),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-card",[n("v-card-title",[n("v-spacer"),e._v(" "),n("v-icon",{attrs:{color:"warning",left:"",size:"60"}},[e._v("mdi-alert-circle-outline")]),e._v(" "),n("v-spacer")],1),e._v(" "),n("div",{staticClass:"text-lg text-center mb-4"},[e._v("\n\t\t\tAnda yakin akan menghapus data ini?\n\t\t")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("cancel")}}},[e._v("BATAL")]),e._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.$emit("delete")}}},[e._v(" HAPUS ")]),e._v(" "),n("v-spacer")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:c.a,VCardTitle:c.c,VDialog:x.a,VIcon:h.a,VSpacer:m.a})},529:function(e,t,n){"use strict";n(12),n(9),n(10),n(16),n(11),n(17);var o=n(3);n(19),n(28);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={data:function(){return{filters:{},sort:null,sort_direction:null,loading:!0,selectedData:[],selectedRow:{},rules:{},form:{},showForm:!1,dialogDelete:!1,items:[],totalItems:0,paginated:!0,options:{page:1,itemsPerPage:10,sortBy:[],sortDesc:[!1],groupBy:!1,groupDesc:!1,multiSort:!1,mustSort:!1},yesNoFilter:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]}},watch:{options:{deep:!0,handler:function(){this.getData()}},tenant_id:{handler:function(){this.getData()}}},methods:{searchData:function(){this.options.page=1,this.getData()},getData:function(){var e=this;this.loading=!0;var t=r(r(r({},this.options),this.filters),{},{paginated:this.paginated,sort_field:this.options.sortBy[0],sort_direction:this.options.sortDesc[0]?"desc":"asc"});this.$axios.$get(this.url,{params:t}).then((function(t){e.paginated?(e.items=t.data,e.totalItems=t.total):(e.items=t,e.totalItems=t.length)})).catch((function(t){e.$notifier.showMessage({content:t.response.data.message,color:"error"})})).finally((function(){return e.loading=!1}))},clearSearch:function(){this.options.page=1,this.filters.keyword="",this.getData()},refreshData:function(){this.options.page=1,this.filters={},this.getData()},saveData:function(){var e=this;this.loading=!0,this.$axios({method:this.form.id?"put":"post",url:this.form.id?"".concat(this.url,"/").concat(this.form.id):this.url,data:this.form}).then((function(t){e.closeForm(),e.$notifier.showMessage({content:t.data.message,color:"success"}),e.refreshData(),e.afterSave()})).catch((function(t){422==t.response.status?(e.rules=t.response.data.errors,e.$refs.form.validate()):e.$notifier.showMessage({content:t.response.data.message,color:"error"})})).finally((function(){return e.loading=!1}))},afterSave:function(){},afterDelete:function(){},confirmDelete:function(e){this.dialogDelete=!0,this.selectedRow=e},deleteData:function(){var e=this;this.loading=!0,this.$axios.$delete("".concat(this.url,"/").concat(this.selectedRow.id)).then((function(t){e.dialogDelete=!1,e.$notifier.showMessage({content:t.message,color:"success"}),e.getData(),e.afterDelete()})).catch((function(t){t.response.status&&e.$notifier.showMessage({content:t.response.data.message,color:"error"})})).finally((function(){return e.loading=!1}))},openForm:function(e){this.form=r({},e),this.selectedRow=r({},e),this.showForm=!0},closeForm:function(){this.$refs.form.resetValidation(),this.showForm=!1}}}},625:function(e,t,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("5c8fbe94",content,!0,{sourceMap:!1})},626:function(e,t,n){var o=n(23)(!1);o.push([e.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=o},653:function(e,t,n){"use strict";n.r(t);var o={mixins:[n(529).a],data:function(){return{url:"/api/customer",paginated:""}},mounted:function(){this.getData()}},l=n(69),r=n(71),d=n.n(r),v=n(285),f=n(483),c=n(466),x=n(608),h=n(647),m=n(193),_=n(122),w=n(196),y=n(197),D=n(81),O=n(610),k=n(660),j=n(557),I=(n(12),n(9),n(10),n(16),n(11),n(17),n(3)),V=(n(30),n(64),n(625),n(14));function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var $=Object(V.a)(j.a).extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(I.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},j.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=j.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){j.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex mb-2"},[n("div",{staticClass:"text-h6 ml-2"},[e._v("Kelola Pelanggan ("+e._s(e.totalItems)+")")])]),e._v(" "),e._l(e.items,(function(t){return n("v-list-item",{key:t.id,staticClass:"mb-1 rounded white",attrs:{link:""},on:{click:function(n){e.form=Object.assign({},t),e.showForm=!0}}},[n("v-list-item-avatar",{attrs:{color:t.active?"green":"red"}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-badge-account-horizontal-outline")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.nama)}}),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.alamat)}})],1),e._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(n){return n.stopPropagation(),e.confirmDelete(t)}}},[n("v-icon",{attrs:{color:"grey"}},[e._v("mdi-delete")])],1)],1)],1)})),e._v(" "),n("DeleteConfirmation",{attrs:{show:e.dialogDelete},on:{cancel:function(t){e.dialogDelete=!1},delete:e.deleteData}}),e._v(" "),n("v-btn",{attrs:{color:"indigo",fab:"",dark:"",fixed:"",bottom:"",right:""},on:{click:function(t){e.form={},e.showForm=!0}}},[n("v-icon",[e._v("mdi-plus")])],1),e._v(" "),n("v-dialog",{model:{value:e.showForm,callback:function(t){e.showForm=t},expression:"showForm"}},[n("v-card",[n("v-card-title",{staticClass:"mb-4"},[e._v("\n\t\t\t\t"+e._s(e.form.id?"Edit":"Tambah")+" Pelanggan\n\t\t\t\t"),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){e.showForm=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[e.form.id?n("v-text-field",{attrs:{outlined:"",dense:"",label:"ID"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}):e._e(),e._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",rules:e.rules.nama,label:"Nama"},model:{value:e.form.nama,callback:function(t){e.$set(e.form,"nama",t)},expression:"form.nama"}}),e._v(" "),n("v-textarea",{attrs:{outlined:"",dense:"",rows:"3",rules:e.rules.alamat,label:"Alamat"},model:{value:e.form.alamat,callback:function(t){e.$set(e.form,"alamat",t)},expression:"form.alamat"}}),e._v(" "),n("v-switch",{attrs:{label:e.form.active?"AKTIF":"NONAKTIF"},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.showForm=!1}}},[e._v(" BATAL ")]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.saveData}},[e._v(" SIMPAN ")])],1)],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{DeleteConfirmation:n(524).default}),d()(component,{VBtn:v.a,VCard:f.a,VCardActions:c.a,VCardText:c.b,VCardTitle:c.c,VDialog:x.a,VForm:h.a,VIcon:m.a,VListItem:_.a,VListItemAction:w.a,VListItemAvatar:y.a,VListItemContent:D.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VSpacer:O.a,VSwitch:k.a,VTextField:j.a,VTextarea:$})}}]);