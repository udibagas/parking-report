(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8],{477:function(t,e,r){var content=r(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("e4e38dd8",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(11),r(9),r(10),r(16),r(12),r(17);var n=r(3);r(19),r(28);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{filters:{},sort:null,sort_direction:null,loading:!0,selectedData:[],selectedRow:{},rules:{},form:{},showForm:!1,dialogDelete:!1,items:[],totalItems:0,paginated:!0,options:{page:1,itemsPerPage:10,sortBy:[],sortDesc:[!1],groupBy:!1,groupDesc:!1,multiSort:!1,mustSort:!1},yesNoFilter:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]}},watch:{options:{deep:!0,handler:function(){this.getData()}},tenant_id:{handler:function(){this.getData()}}},methods:{searchData:function(){this.options.page=1,this.getData()},getData:function(){var t=this;this.loading=!0;var e=l(l(l({},this.options),this.filters),{},{paginated:this.paginated,sort_field:this.options.sortBy[0],sort_direction:this.options.sortDesc[0]?"desc":"asc"});this.$axios.$get(this.url,{params:e}).then((function(e){t.paginated?(t.items=e.data,t.totalItems=e.total):(t.items=e,t.totalItems=e.length)})).catch((function(e){t.$notifier.showMessage({content:e.response.data.message,color:"error"})})).finally((function(){return t.loading=!1}))},clearSearch:function(){this.options.page=1,this.filters.keyword="",this.getData()},refreshData:function(){this.options.page=1,this.filters={},this.getData()},saveData:function(){var t=this;this.loading=!0,this.$axios({method:this.form.id?"put":"post",url:this.form.id?"".concat(this.url,"/").concat(this.form.id):this.url,data:this.form}).then((function(e){t.closeForm(),t.$notifier.showMessage({content:e.data.message,color:"success"}),t.refreshData(),t.afterSave()})).catch((function(e){422==e.response.status?(t.rules=e.response.data.errors,t.$refs.form.validate()):t.$notifier.showMessage({content:e.response.data.message,color:"error"})})).finally((function(){return t.loading=!1}))},afterSave:function(){},afterDelete:function(){},confirmDelete:function(t){this.dialogDelete=!0,this.selectedRow=t},deleteData:function(){var t=this;this.loading=!0,this.$axios.$delete("".concat(this.url,"/").concat(this.selectedRow.id)).then((function(e){t.dialogDelete=!1,t.$notifier.showMessage({content:e.message,color:"success"}),t.getData(),t.afterDelete()})).catch((function(e){e.response.status&&t.$notifier.showMessage({content:e.response.data.message,color:"error"})})).finally((function(){return t.loading=!1}))},openForm:function(t){this.form=l({},t),this.selectedRow=l({},t),this.showForm=!0},closeForm:function(){this.$refs.form.resetValidation(),this.showForm=!1}}}},501:function(t,e,r){"use strict";r(477)},502:function(t,e,r){var n=r(23)(!1);n.push([t.i,".chart[data-v-b8cb386a]{height:300px}",""]),t.exports=n},510:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(64),r(31),r(161),r(28),r(535)),l=r(687),c=r(675),d=r(672),m=r(678),h=r(677),f=r(676),v=r(539);Object(o.a)([l.a,c.a,d.a,m.a,h.a,f.a]);var _={props:["title","subtext","label","data"],components:{VChart:v.b},provide:Object(n.a)({},v.a,"light"),data:function(){var t=this;return{chartOption:{title:{show:!0,text:this.title,left:"center",subtext:this.subtext},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",top:"bottom",left:"left",data:this.data.map((function(t){return t.name})),formatter:function(e){var r=t.data.find((function(t){return t.name==e})),n=r.name,o=r.value;return"".concat(n,": ").concat(t.$decimal(o))}},series:[{name:this.label,type:"pie",radius:"50%",center:["50%","50%"],data:this.data,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}},x=(r(501),r(69)),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-chart",{staticClass:"chart py-6",attrs:{option:t.chartOption}})}),[],!1,null,"b8cb386a",null);e.default=component.exports},617:function(t,e,r){"use strict";r.r(e);r(30);var n={props:["title","date","month","year"],data:function(){return{showChart:!1,summary:[]}},computed:{totalPendapatan:function(){return this.summary.reduce((function(t,e){return Number(e.pendapatan)+t}),0)},totalKendaraan:function(){return this.summary.reduce((function(t,e){return Number(e.jumlah_kendaraan)+t}),0)}},methods:{getData:function(){var t=this,e={date:this.date,month:this.month,year:this.year};this.$axios.$get("/api/report/",{params:e}).then((function(e){t.summary=e})).catch((function(t){return console.error(t)}))}},mounted:function(){this.getData()}},o=r(69),l=r(71),c=r.n(l),d=r(219),m=r(474),h=r(464),f=r(207),v=r(193),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mb-2",attrs:{flat:""}},[r("v-card-text",[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"flex-grow-1"},[r("div",[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"text-h4 indigo--text my-2"},[t._v("\n\t\t\t\t\tRp. "+t._s(t.$decimal(t.totalPendapatan))+"\n\t\t\t\t")]),t._v(" "),r("div",[r("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-car-multiple")]),t._v("\n\t\t\t\t\t"+t._s(t.$decimal(t.totalKendaraan))+" Kendaraan\n\t\t\t\t")],1)])]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"d-flex"},t._l(t.summary,(function(s){return r("div",{key:s.group,staticClass:"flex-grow-1"},[r("div",[t._v(t._s(s.group))]),t._v(" "),r("div",{staticClass:"text-h6 purple--text"},[t._v("\n\t\t\t\t\tRp. "+t._s(t.$decimal(s.pendapatan))+"\n\t\t\t\t")]),t._v(" "),r("div",[r("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-car-multiple")]),t._v(t._s(t.$decimal(s.jumlah_kendaraan))+" Kendaraan\n\t\t\t\t")],1)])})),0),t._v(" "),r("v-expand-transition",[t.showChart?r("div",[t._l(t.summary,(function(s){return r("PieChart",{key:"chart-pendapatan-"+s.group,attrs:{title:s.group,data:s.detail.map((function(t){return{name:t.jenis_kendaraan,value:t.pendapatan}})),label:"Pandapatan",subtext:"Pendapatan Berdasarkan Jenis Kendaraan"}})})),t._v(" "),t._l(t.summary,(function(s){return r("PieChart",{key:"chart-jumlah-"+s.group,attrs:{title:s.group,data:s.detail.map((function(t){return{name:t.jenis_kendaraan,value:t.jumlah_kendaraan}})),label:"Jumlah Kendaraan",subtext:"Jumlah Kendaraan Berdasarkan Jenis Kendaraan"}})}))],2):t._e()])],1),t._v(" "),r("v-btn",{attrs:{block:"",text:"","x-small":"",color:"grey"},on:{click:function(e){t.showChart=!t.showChart}}},[t.showChart?r("v-icon",[t._v("mdi-chevron-up")]):r("v-icon",[t._v("mdi-chevron-down")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{PieChart:r(510).default}),c()(component,{VBtn:d.a,VCard:m.a,VCardText:h.b,VExpandTransition:f.a,VIcon:v.a})},618:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(483).a],data:function(){return{url:"/api/customer",paginated:"",colors:{aktif:"green",nonaktif:"red",expired:"grey"}}},mounted:function(){this.getData()}},o=r(69),l=r(71),c=r.n(l),d=r(531),m=r(193),h=r(195),f=r(122),v=r(197),_=r(81),x=r(199),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{attrs:{rounded:""}},[r("v-list-item-group",{attrs:{color:"indigo"}},t._l(t.items,(function(e){return r("v-list-item",{key:e.id,attrs:{link:""}},[r("v-list-item-avatar",{staticClass:"d-none d-sm-flex",attrs:{color:e.active?"green":"red"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-badge-account-horizontal-outline")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.nama)}}),t._v(" "),r("v-list-item-subtitle",[t._v("\n\t\t\t\t\tMasa Aktif:\n\t\t\t\t\t"+t._s(e.masa_aktif?t.$moment(e.masa_aktif).format("DD/MMM/YY"):"-")+"\n\t\t\t\t\t"),r("br"),t._v("\n\t\t\t\t\tUpdate Terakhir:\n\t\t\t\t\t"+t._s(e.last_update?t.$moment(e.last_update).format("DD/MMM/YY HH:mm"):"-")+"\n\t\t\t\t")])],1),t._v(" "),r("v-chip",{attrs:{color:t.colors[e.status],dark:"",small:""}},[t._v(t._s(e.status.toUpperCase()))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VChip:d.a,VIcon:m.a,VList:h.a,VListItem:f.a,VListItemAvatar:v.a,VListItemContent:_.a,VListItemGroup:x.a,VListItemSubtitle:_.b,VListItemTitle:_.c})},685:function(t,e,r){"use strict";r.r(e);var n=r(27),o=(r(90),{data:function(){return{terparkir:[{group:"UMUM",jumlah:0,detail:[{jenis_kendaraan:"MOTOR",jumlah:0},{jenis_kendaraan:"MOBIL",jumlah:0}]},{group:"COMPLIMENT",jumlah:0,detail:[{jenis_kendaraan:"MOTOR",jumlah:0},{jenis_kendaraan:"MOBIL",jumlah:0}]}],reports:[{title:"Hari Ini",date:this.$moment().format("YYYY-MM-DD")},{title:"Bulan Ini",month:this.$moment().format("MM"),year:this.$moment().format("YYYY")},{title:"Total"}],summary:{customer:0,user:0},colors:{aktif:"green",nonaktif:"red",expired:"grey"}}},methods:{getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/terparkir");case 2:t.terparkir=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getSummary:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/summary");case 2:t.summary=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getData(),this.getSummary()}}),l=r(69),c=r(71),d=r.n(c),m=r(474),h=r(464),f=r(611),v=r(193),_=r(612),x=r(580),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"max-width":"500px",margin:"0 auto"}},[0==t.$auth.user.role?r("v-card",{staticClass:"mb-2",attrs:{flat:""}},[r("v-card-text",{staticClass:"d-flex"},[r("div",{staticClass:"flex-grow-1"},[r("div",[r("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-car-multiple")]),t._v("\n\t\t\t\t\tTerparkir\n\t\t\t\t")],1),t._v(" "),r("div",{staticClass:"text-h4 my-2 indigo--text"},[t._v("\n\t\t\t\t\t"+t._s(t.terparkir.reduce((function(t,e){return t+Number(e.jumlah)}),0))+"\n\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"ml-3"},[t._v("\n\t\t\t\tUpdate Terakhir "),r("br"),t._v(" "),r("div",{staticClass:"font-weight-medium purple--text mb-4"},[t._v("\n\t\t\t\t\t"+t._s(t.$auth.user.customer.last_update?t.$moment(t.$auth.user.customer.last_update).format("DD/MMM/YYYY HH:mm"):"-")+"\n\t\t\t\t")]),t._v("\n\n\t\t\t\tMasa Aktif "),r("br"),t._v(" "),r("div",{staticClass:"font-weight-medium purple--text mb-4"},[t._v("\n\t\t\t\t\t"+t._s(t.$auth.user.customer.masa_aktif?t.$moment(t.$auth.user.customer.masa_aktif).format("DD/MMM/YYYY"):"-")+"\n\t\t\t\t")])])]),t._v(" "),r("v-card-text",[r("v-row",t._l(t.terparkir,(function(e){return r("v-col",{key:e.group,attrs:{cols:"6"}},[r("div",{staticClass:"d-flex purple--text"},[t._v("\n\t\t\t\t\t\t"+t._s(e.group)+"\n\t\t\t\t\t\t"),r("v-spacer"),t._v("\n\t\t\t\t\t\t"+t._s(e.jumlah)+"\n\t\t\t\t\t")],1),t._v(" "),t._l(e.detail,(function(n,i){return r("div",{key:i+"-"+e.group,staticClass:"d-flex outlined"},[t._v("\n\t\t\t\t\t\t"+t._s(n.jenis_kendaraan)+"\n\t\t\t\t\t\t"),r("v-spacer"),t._v(" "),r("div",[t._v(t._s(n.jumlah))])],1)}))],2)})),1)],1)],1):t._e(),t._v(" "),0==t.$auth.user.role?r("div",t._l(t.reports,(function(t,i){return r("Summary",{key:i,attrs:{title:t.title,date:t.date,month:t.month,year:t.year}})})),1):t._e(),t._v(" "),1==t.$auth.user.role?r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("div",{staticClass:"indigo--text text-h6 mb-6 text-center"},[t._v("\n\t\t\t\tSelamat Datang "+t._s(t.$auth.user.name)+"!\n\t\t\t")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[r("div",{staticClass:"indigo--text text-h3 my-1"},[t._v("\n\t\t\t\t\t\t"+t._s(t.summary.customer)+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"purple--text"},[t._v("CUSTOMER")])]),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[r("div",{staticClass:"indigo--text text-h3 my-1"},[t._v("\n\t\t\t\t\t\t"+t._s(t.summary.user)+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"purple--text"},[t._v("USER")])])],1)],1)],1):t._e(),t._v(" "),1==t.$auth.user.role?r("CustomerList",{staticClass:"my-3"}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Summary:r(617).default,CustomerList:r(618).default}),d()(component,{VCard:m.a,VCardText:h.b,VCol:f.a,VIcon:v.a,VRow:_.a,VSpacer:x.a})}}]);