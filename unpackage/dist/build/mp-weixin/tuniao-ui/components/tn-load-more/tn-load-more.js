(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-load-more/tn-load-more"],{"40fd":function(t,e,o){"use strict";var n=o("d4d1"),i=o.n(n);i.a},"5cc9":function(t,e,o){"use strict";o.r(e);var n=o("e153"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},7828:function(t,e,o){"use strict";o.r(e);var n=o("d810"),i=o("5cc9");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("40fd");var l=o("828b"),r=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"e59cf726",null,!1,n["a"],void 0);e["default"]=r.exports},d4d1:function(t,e,o){},d810:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={tnLoading:function(){return o.e("tuniao-ui/components/tn-loading/tn-loading").then(o.bind(null,"b22e"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.loadStyle])),o=this.__get_style([this.loadTextStyle]);this.$mp.data=Object.assign({},{$root:{s0:e,s1:o}})},a=[]},e153:function(t,e,o){"use strict";var n=o("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("dd08")),a={name:"tn-load-more",mixins:[i.default],props:{status:{type:String,default:"loadmore"},loadingIcon:{type:Boolean,default:!0},loadingIconType:{type:String,default:"circle"},loadingIconColor:{type:String,default:""},loadText:{type:Object,default:function(){return{loadmore:"加载更多",loading:"正在加载...",nomore:"没有更多了"}}},dot:{type:Boolean,default:!1},customStyle:{type:Object,default:function(){return{}}}},computed:{loadStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),Object.keys(this.customStyle).length>0&&Object.assign(t,this.customStyle),t},loadTextStyle:function(){var t={};return this.fontColorStyle&&(t.color=this.fontColorStyle),this.fontSizeStyle&&(t.fontSize=this.fontSizeStyle,t.lineHeight=this.$t.string.getLengthUnitValue(this.fontSize+2,this.fontUnit)),t},showText:function(){var t="";return t="loadmore"===this.status?this.loadText.loadmore||"加载更多":"loading"===this.status?this.loadText.loading||"正在加载...":"nomore"===this.status&&this.dot?this.dotText:this.loadText.nomore||"没有更多了",t}},data:function(){return{dotText:"●"}},methods:{loadMore:function(){"loadmore"===this.status&&this.$emit("loadmore")}}};e.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-load-more/tn-load-more-create-component',
    {
        'tuniao-ui/components/tn-load-more/tn-load-more-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("7828"))
        })
    },
    [['tuniao-ui/components/tn-load-more/tn-load-more-create-component']]
]);