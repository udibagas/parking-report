(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{611:function(t,e,n){"use strict";n(9),n(10),n(16),n(17);var r=n(3),o=(n(30),n(11),n(35),n(59),n(287),n(19),n(41),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(46),n(47),n(12),n(73),n(301),n(0)),c=n(87),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],O=y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=y.reduce((function(t,e){return t["offset"+Object(l.y)(e)]={type:[String,Number],default:null},t}),{}),v=y.reduce((function(t,e){return t["order"+Object(l.y)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(O),offset:Object.keys(j),order:Object.keys(v)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=m.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},612:function(t,e,n){"use strict";n(9),n(10),n(16),n(17);var r=n(3),o=(n(47),n(70),n(28),n(11),n(35),n(59),n(287),n(19),n(41),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(46),n(12),n(301),n(0)),c=n(87),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],O=["start","end","center"];function j(t,e){return y.reduce((function(n,r){return n[t+Object(l.y)(r)]=e(),n}),{})}var v=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},w=j("align",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},m=j("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},P=j("alignContent",(function(){return{type:String,default:null,validator:S}})),C={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=D(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},686:function(t,e,n){"use strict";n.r(e);var r=n(69),o=n(71),c=n.n(o),l=n(611),f=n(612),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"text-center"},[n("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),t._v(" "),n("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),n("footer",[n("small",[n("em",[t._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VRow:f.a})}}]);