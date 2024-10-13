(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag"],{"7ddc":function(t,e,i){"use strict";var n=i("b585"),a=i.n(n);a.a},b176:function(t,e,i){"use strict";(function(t){var n=i("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("7eb4")),s=n(i("7ca3")),o=n(i("ee10"));function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){(0,s.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return d(t,e)}(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return o=t.done,t},e:function(t){r=!0,s=t},f:function(){try{o||null==i.return||i.return()}finally{if(r)throw s}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h={name:"tn-image-upload-drag",props:{fileList:{type:Array,default:function(){return[]}},action:{type:String,default:""},name:{type:String,default:"file"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},maxCount:{type:Number,default:9},imageMode:{type:String,default:"aspectFill"},previewFullImage:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},deleteable:{type:Boolean,default:!0},deleteIcon:{type:String,default:"close"},deleteBackgroundColor:{type:String,default:""},deleteColor:{type:String,default:""},uploadText:{type:String,default:"选择图片"},showTips:{type:Boolean,default:!0},width:{type:Number,default:200},height:{type:Number,default:200},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},multiple:{type:Boolean,default:!0},maxSize:{type:Number,default:10485760},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},index:{type:[Number,String],default:""}},computed:{movableAreaHeight:function(){return this.lists.length<this.maxCount?Math.ceil((this.lists.length+1)/this.baseData.columns)*t.upx2px(this.height)+"px":Math.ceil(this.lists.length/this.baseData.columns)*t.upx2px(this.height)+"px"},itemWidth:function(){return t.upx2px(this.width)-2*t.upx2px(10)},itemHeight:function(){return t.upx2px(this.height)-2*t.upx2px(10)}},data:function(){return{lists:[],uploading:!1,baseData:{windowWidth:0,columns:0,dragItem:null,widthPx:0,heightPx:0},addBtn:{x:0,y:0},timer:null,dragging:!1,show:!0}},watch:{lists:function(t){this.$emit("on-list-change",this.sortList(),this.index)}},created:function(){this.baseData.windowWidth=t.getSystemInfoSync().windowWidth},mounted:function(){var t=this;this.$nextTick((function(){t.updateDragInfo()}))},methods:{clear:function(){this.lists=[],this.updateAddBtnPositioin()},reUpload:function(){this.uploadFile()},selectFile:function(){var e=this;if(!this.disabled){this.name;var i=this.maxCount,n=this.multiple,a=this.maxSize,s=this.sizeType,o=this.lists,r=(this.camera,this.compressed,this.sourceType),u=null,l=i-o.length;u=new Promise((function(e,i){t.chooseImage({count:n?l>9?9:l:1,sourceType:r,sizeType:s,success:e,fail:i})})),u.then((function(t){var s=o.length;t.tempFiles.map((function(t,s){if(e.checkFileExt(t)&&(n||!(s>=1)))if(t.size>a)e.$emit("on-oversize",t,e.sortList(),e.index),e.showToast("超出可允许文件大小");else{if(i<=o.length)return e.$emit("on-exceed",t,e.sortList(),e.index),void e.showToast("超出最大允许的文件数");o.push(e.handleDragListItem({url:t.path,progress:0,error:!1,file:t})),e.updateAddBtnPositioin()}})),e.$emit("on-choose-complete",e.sortList(),e.index),e.autoUpload&&e.uploadFile(s)})).catch((function(t){e.$emit("on-choose-fail",t)}))}},showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||e)&&this.$t.message.toast(t)},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].data.progress=0,this.lists[t].data.error=!1,this.lists[t].data.response=null,this.$t.message.loading("重新上传"),this.uploadFile(t)},uploadFile:function(){var e=arguments,i=this;return(0,o.default)(a.default.mark((function n(){var s,o,r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=e.length>0&&void 0!==e[0]?e[0]:0,!i.disabled){n.next=3;break}return n.abrupt("return");case 3:if(!i.uploading){n.next=5;break}return n.abrupt("return");case 5:if(!(s>=i.lists.length)){n.next=8;break}return i.$emit("on-uploaded",i.sortList(),i.index),n.abrupt("return");case 8:if(100!==i.lists[s].data.progress){n.next=12;break}return i.lists[s].data.uploadTask=null,i.autoUpload&&i.uploadFile(s+1),n.abrupt("return");case 12:if(!i.beforeUpload||"function"!==typeof i.beforeUpload){n.next=23;break}if(o=i.beforeUpload.bind(i.$t.$parent.call(i))(s,i.lists),!o||"function"!==typeof o.then){n.next=19;break}return n.next=17,o.then((function(t){})).catch((function(t){return i.uploadFile(s+1)}));case 17:n.next=23;break;case 19:if(!1!==o){n.next=23;break}return n.abrupt("return",i.uploadFile(s+1));case 23:if(i.action){n.next=26;break}return i.showToast("请配置上传地址",!0),n.abrupt("return");case 26:i.lists[s].data.error=!1,i.uploading=!0,r=t.uploadFile({url:i.action,filePath:i.lists[s].data.url,name:i.name,formData:i.formData,header:i.header,success:function(t){var e=i.toJson&&i.$t.test.jsonString(t.data)?JSON.parse(t.data):t.data;[200,201,204].includes(t.statusCode)?(i.lists[s].data.response=e,i.lists[s].data.progress=100,i.lists[s].data.error=!1,i.$emit("on-success",e,s,i.sortList(),i.index)):i.uploadError(s,e)},fail:function(t){i.uploadError(s,t)},complete:function(t){i.$t.message.closeLoading(),i.uploading=!1,i.uploadFile(s+1),i.$emit("on-change",t,s,i.sortList(),i.index)}}),i.lists[s].uploadTask=r,r.onProgressUpdate((function(t){t.progress>0&&(i.lists[s].data.progress=t.progress,i.$emit("on-progress",t,s,i.sortList(),i.index))}));case 31:case"end":return n.stop()}}),n)})))()},uploadError:function(t,e){this.lists[t].data.progress=0,this.lists[t].data.error=!0,this.lists[t].data.response=null,this.showToast("上传失败，请重试"),this.$emit("on-error",e,t,this.sortList(),this.index)},deleteItem:function(t){var e=this;this.deleteable&&this.$t.message.modal("提示","你确定要删除吗？",(0,o.default)(a.default.mark((function i(){var n;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e.beforeRemove||"function"!==typeof e.beforeRemove){i.next=10;break}if(n=e.beforeRemove.bind(e.$t.$parent.call(e))(t,e.lists),!n||"function"!==typeof n.then){i.next=7;break}return i.next=5,n.then((function(i){e.handlerDeleteItem(t)})).catch((function(t){e.showToast("删除操作被中断")}));case 5:i.next=8;break;case 7:!1===n?e.showToast("删除操作被中断"):e.handlerDeleteItem(t);case 8:i.next=11;break;case 10:e.handlerDeleteItem(t);case 11:case"end":return i.stop()}}),i)}))),!0)},handlerDeleteItem:function(t){this.lists[t].data.progress<100&&this.lists[t].data.progress>0&&"undefined"!==typeof this.lists[t].data.uploadTask&&this.lists[t].data.uploadTask.abort(),this.remove(t),this.$forceUpdate(),this.$emit("on-remove",t,this.sortList(),this.index),this.showToast("删除成功")},remove:function(t){var e=this;if(this.deleteable&&t>=0&&t<this.lists.length){var i=this.lists[t].index;this.lists.splice(t,1),this.show=!1,setTimeout((function(){e.show=!0;var t,n=l(e.lists);try{var a=function(){var n=t.value;n.index>i&&(n.index-=1,n.x=n.positionX*e.baseData.widthPx,n.y=n.positionY*e.baseData.heightPx,n.positionX=n.index%e.baseData.columns,n.positionY=Math.floor(n.index/e.baseData.columns),e.$nextTick((function(){n.x=n.positionX*e.baseData.widthPx,n.y=n.positionY*e.baseData.heightPx})))};for(n.s();!(t=n.n()).done;)a()}catch(s){n.e(s)}finally{n.f()}e.updateAddBtnPositioin()}),50),this.updateAddBtnPositioin()}},doPreviewImage:function(e,i){var n=this;if(this.previewFullImage){var a=this.lists.sort((function(t,e){return t.index-e.index})).map((function(t){return t.data.url||t.data.path}));t.previewImage({urls:a,current:e,success:function(){n.$emit("on-preview",e,n.sortList(),n.index)},fail:function(){n.showToast("预览图片失败")}})}},checkFileExt:function(t){var e,i;return i=t.path.replace(/.+\./,"").toLowerCase(),e=this.limitType.some((function(t){return t.toLowerCase()===i})),e||this.showToast("不支持".concat(i,"格式的文件")),e},updateDragInfo:function(){var e=this;this.baseData.widthPx=t.upx2px(this.width),this.baseData.heightPx=t.upx2px(this.height);var i=t.createSelectorQuery().in(this);i.select(".tn-image-upload__movable-area").boundingClientRect(),i.exec((function(t){t?(e.baseData.columns=Math.floor(t[0].width/e.baseData.widthPx),e.lists=[],e.fileList.forEach((function(t){var i=e.lists.map((function(t){return t.data})).some((function(e){return e.url===t.url}));!i&&e.lists.push(e.handleDragListItem({url:t.url,error:!1,progress:100}))})),e.updateAddBtnPositioin()):setTimeout((function(){e.updateDragInfo()}),10)}))},handleDragListItem:function(t){var e=this.lists.length%this.baseData.columns,i=Math.floor(this.lists.length/this.baseData.columns),n=e*this.baseData.widthPx,a=i*this.baseData.heightPx;return{id:this.unique(),x:n,y:a,preX:n,preY:a,positionX:e,positionY:i,zIndex:1,disabled:!0,opacity:1,scale:1,index:this.lists.length,offset:0,moveEnd:!1,moving:!1,data:u({},t)}},unique:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e="",i=0;i<t;i++)e+=Math.floor(10*Math.random());return"tn_"+(new Date).getTime()+e},updateAddBtnPositioin:function(){this.lists.length>=this.maxCount||(this.addBtn.x=this.lists.length%this.baseData.columns*this.baseData.widthPx,this.addBtn.y=Math.floor(this.lists.length/this.baseData.columns)*this.baseData.heightPx)},sortList:function(){var t=this.lists.slice();return t.sort((function(t,e){return t.index-e.index})),t.map((function(t){return t.data}))},mouseEnterArea:function(){},mouseLeaveArea:function(){},movableLongPress:function(e){t.vibrateShort(),this.lists.forEach((function(t){t.moving=!1})),this.dragging=!0;var i=this.lists.findIndex((function(t){return t.id===e.id}));e.disabled=!1,e.opacity=.7,e.scale=1.1,this.$set(this.lists,i,e)},movableChange:function(t,e){if(e&&this.dragging&&(e.moving=!0,e.preX=t.detail.x,e.preY=t.detail.y,"touch"===t.detail.source)){e.moveEnd||(e.offset=Math.sqrt(Math.pow(e.preX-e.positionX*this.baseData.widthPx,2)+Math.pow(e.preY-e.positionY*this.baseData.heightPx,2)));var i=Math.floor((t.detail.x+this.baseData.widthPx/2)/this.baseData.widthPx);if(i>this.baseData.columns)return;var n=Math.floor((t.detail.y+this.baseData.heightPx/2)/this.baseData.heightPx),a=this.baseData.columns*n+i;if(e.index!==a&&a<this.lists.length){var s,o=l(this.lists);try{for(o.s();!(s=o.n()).done;){var r=s.value;e.index>a&&r.index>=a&&r.index<e.index?this.updateItemPosition(r,1):e.index<a&&r.index<=a&&r.index>e.index?this.updateItemPosition(r,-1):(e.id,r.id)}}catch(u){o.e(u)}finally{o.f()}e.index=a,e.positionX=i,e.positionY=n}}},movableStart:function(t){this.lists.forEach((function(t){t.zIndex=1})),t.zIndex=10,t.moveEnd=!1,this.baseData.dragItem=t},movableEnd:function(t){var e=this;if(this.dragging){var i=this.lists.findIndex((function(e){return e.id===t.id}));t.moving||(t.preX=t.positionX*this.baseData.widthPx,t.preY=t.positionY*this.baseData.heightPx),t.x=t.preX,t.y=t.preY,t.offset=0,t.moveEnd=!0,t.moving=!1,t.disabled=!0,this.lists.forEach((function(t){t.moving=!1,t.disabled=!0})),this.$nextTick((function(){t.x=t.positionX*e.baseData.widthPx,t.y=t.positionY*e.baseData.heightPx,t.opacity=1,t.scale=1,e.baseData.dragItem=null,e.dragging=!1,e.$set(e.lists,i,t)})),this.$emit("sort-list",this.sortList())}},updateItemPosition:function(t,e){var i=this,n=this.lists.findIndex((function(e){return e.id===t.id}));t.index+=e,t.offset=0,t.positionX=t.index%this.baseData.columns,t.positionY=Math.floor(t.index/this.baseData.columns),t.moving||(t.preX=t.positionX*this.baseData.widthPx,t.preY=t.positionY*this.baseData.heightPx),t.x=t.preX,t.y=t.preY,this.$nextTick((function(){t.x=t.positionX*i.baseData.widthPx,t.y=t.positionY*i.baseData.heightPx,i.$set(i.lists,n,t)}))}}};e.default=h}).call(this,i("df3c")["default"])},b585:function(t,e,i){},d0ee:function(t,e,i){"use strict";i.r(e);var n=i("b176"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},e8d9:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={tnLineProgress:function(){return i.e("tuniao-ui/components/tn-line-progress/tn-line-progress").then(i.bind(null,"ace1"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,!t.disabled&&t.show?t.__map(t.lists,(function(e,i){var n=t.__get_orig(e),a=t.$t.string.getLengthUnitValue(t.width),s=t.$t.string.getLengthUnitValue(t.height),o=t.$t.string.getLengthUnitValue(t.itemWidth,"px"),r=t.$t.string.getLengthUnitValue(t.itemHeight,"px");return{$orig:n,g0:a,g1:s,g2:o,g3:r}})):null),n=!t.disabled&&t.show?t.lists.length:null,a=!t.disabled&&t.show&&t.maxCount>n?t.$t.string.getLengthUnitValue(t.itemWidth,"px"):null,s=!t.disabled&&t.show&&t.maxCount>n?t.$t.string.getLengthUnitValue(t.itemHeight,"px"):null,o=!t.disabled&&t.show&&t.maxCount>n?t.$t.string.getLengthUnitValue(t.itemWidth,"px"):null,r=!t.disabled&&t.show&&t.maxCount>n?t.$t.string.getLengthUnitValue(t.itemHeight,"px"):null;t.$mp.data=Object.assign({},{$root:{l0:i,g4:n,g5:a,g6:s,g7:o,g8:r}})},s=[]},f319:function(t,e,i){"use strict";i.r(e);var n=i("e8d9"),a=i("d0ee");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("7ddc");var o=i("828b"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"35c9bb45",null,!1,n["a"],void 0);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag-create-component',
    {
        'tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("f319"))
        })
    },
    [['tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag-create-component']]
]);