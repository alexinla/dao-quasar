(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0fd7":function(t,e,a){"use strict";var r=a("5301"),i=a.n(r);i.a},"17bb":function(t,e,a){"use strict";var r=a("5896"),i=a.n(r);i.a},"3c4a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"manage-layout"},[a("div",[a("headerBarLeft")],1),a("div",{staticClass:"lt-md fold"},[a("q-btn",{attrs:{color:"primary",label:"展开"},on:{click:t.unfold}})],1),a("q-drawer",{attrs:{elevated:"",side:"right"},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[a("ManageGroup")],1),a("q-page-container",{staticClass:"container-left"},[a("router-view")],1)],1)},i=[],s=a("de22"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-login"},[a("headerBarRight")],1),a("Upload",{ref:"upload",on:{uploaded:t.uploaded,uploading:t.uploading}}),a("div",{staticClass:"main"},[t.editing.title?t._e():a("div",{staticClass:"main-title"},[a("div",{staticClass:"group-name"},[a("q-avatar",{staticClass:"avatar",attrs:{rounded:"",size:"60px"}},[a("img",{attrs:{src:t.tempGroupData.avatar||"statics/group.svg"}})]),a("span",{staticClass:"name-text"},[t._v(t._s(t.tempGroupData.name))]),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isOwner,expression:"isOwner"}],attrs:{dense:"",flat:"",icon:"edit",color:"primary"},on:{click:function(e){return t.startEditTitle()}}})],1),t._l(t.desc_breakLines,(function(e){return a("div",{key:e.id},[t._v(t._s(e||" "))])}))],2),t.editing.title?a("div",{staticClass:"main-title relative-position"},[a("div",{staticClass:"group-name row"},[a("q-avatar",{staticClass:"avatar-edit",attrs:{rounded:"",size:"60px"},on:{click:t.changeAvatar}},[a("q-icon",{staticClass:"mask",attrs:{name:"icon_paizhao"}}),a("img",{staticClass:"masked",attrs:{src:t.editGroupData.avatar||"statics/group.svg"}})],1),a("div",{staticClass:"name-input"},[a("q-input",{attrs:{outlined:"",dense:""},model:{value:t.editGroupData.name,callback:function(e){t.$set(t.editGroupData,"name",e)},expression:"editGroupData.name"}})],1)],1),a("q-input",{attrs:{filled:"",type:"textarea"},model:{value:t.editGroupData.desc_text,callback:function(e){t.$set(t.editGroupData,"desc_text",e)},expression:"editGroupData.desc_text"}}),a("div",{staticClass:"text-right button-group"},[a("q-btn",{attrs:{outline:"",color:"primary",label:"取消"},on:{click:function(e){t.editing.title=!1}}}),a("q-btn",{attrs:{unelevated:"",color:"primary",label:"保存"},on:{click:t.saveTitle}})],1),a("q-inner-loading",{attrs:{showing:t.loadingVisible}},[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1):t._e(),a("div",{staticClass:"read_permission"},[a("div",{staticClass:"name-text"},[t._v("\n        帖子阅读\n        "),t.editing.read_permission?t._e():a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isOwner,expression:"isOwner"}],attrs:{flat:"",dense:"",icon:"edit",color:"primary"},on:{click:function(e){return t.startEditReadPermission()}}})],1),a("div",{staticClass:"q-gutter-sm"},[t.editing.read_permission?t._e():a("div",{staticClass:"select-read"},[a("q-radio",{attrs:{disable:"",val:1,label:"任何人"},model:{value:t.tempGroupData.read_permission,callback:function(e){t.$set(t.tempGroupData,"read_permission",e)},expression:"tempGroupData.read_permission"}}),a("q-radio",{attrs:{disable:"",val:2,label:"仅限组员"},model:{value:t.tempGroupData.read_permission,callback:function(e){t.$set(t.tempGroupData,"read_permission",e)},expression:"tempGroupData.read_permission"}})],1),t.editing.read_permission?a("div",{staticClass:"row select-read"},[a("q-radio",{attrs:{val:1,label:"任何人"},model:{value:t.editGroupData.read_permission,callback:function(e){t.$set(t.editGroupData,"read_permission",e)},expression:"editGroupData.read_permission"}}),a("q-radio",{attrs:{val:2,label:"仅限组员"},model:{value:t.editGroupData.read_permission,callback:function(e){t.$set(t.editGroupData,"read_permission",e)},expression:"editGroupData.read_permission"}}),t.editing.read_permission&&2===t.editGroupData.read_permission?a("div",{staticStyle:{width:"140px","margin-left":"30px"}},[a("q-input",{attrs:{outlined:"",dense:"",placeholder:"6位数字或字母"},model:{value:t.editGroupData.password,callback:function(e){t.$set(t.editGroupData,"password",e)},expression:"editGroupData.password"}})],1):t._e()],1):t._e(),t.editing.read_permission?a("div",{staticClass:"button-group text-right"},[a("q-btn",{attrs:{outline:"",color:"primary",label:"取消"},on:{click:function(e){t.editing.read_permission=!1}}}),a("q-btn",{attrs:{unelevated:"",color:"primary",label:"保存"},on:{click:t.saveReadPermission}})],1):t._e()])]),a("div",{staticClass:"reward"},[a("span",{staticClass:"name-text"},[t._v("奖励机制")]),a("span",{staticClass:"subtitle"},[t._v("\n        (单位：\n        "),t.editing.reward?t._e():a("span",[t._v(t._s(t.tokenSelect.symbol))]),t.editing.reward?a("q-btn",{attrs:{"no-caps":"",flat:"",label:t.tokenSelect.symbol+"▽"}},[a("q-menu",{attrs:{"auto-close":""}},[a("q-list",{staticStyle:{"min-width":"100px"}},t._l(t.tokens,(function(e,r){return a("div",{key:r},[a("q-item",{attrs:{clickable:""},on:{click:function(a){return t.pickToken(e)}}},[a("q-item-section",[t._v(t._s(e.symbol))])],1),a("q-separator")],1)})),0)],1)],1):t._e(),t._v(")\n      ")],1),t.editing.reward?t._e():a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isOwner,expression:"isOwner"}],attrs:{flat:"",dense:"",icon:"edit",color:"primary"},on:{click:function(e){return t.startEditReward()}}}),t._m(0),t._m(1),t.editing.reward?t._e():a("div",{staticClass:"row text-center text-h6 q-mx-md"},[a("div",{staticClass:"col"},[t._v(t._s(t.tempGroupData.reward_join))]),a("q-separator",{attrs:{vertical:""}}),a("div",{staticClass:"col"},[t._v(t._s(t.tempGroupData.reward_post))])],1),t.editing.reward?a("div",{staticClass:"row text-center text-h6 q-mx-md q-col-gutter-lg"},[a("div",{staticClass:"col"},[a("q-input",{attrs:{outlined:"",dense:""},model:{value:t.editGroupData.reward_join,callback:function(e){t.$set(t.editGroupData,"reward_join",e)},expression:"editGroupData.reward_join"}})],1),a("div",{staticClass:"col"},[a("q-input",{attrs:{outlined:"",dense:""},model:{value:t.editGroupData.reward_post,callback:function(e){t.$set(t.editGroupData,"reward_post",e)},expression:"editGroupData.reward_post"}})],1)]):t._e(),t.editing.reward?a("div",{staticClass:"button-group text-right"},[a("q-btn",{attrs:{outline:"",color:"primary",label:"取消"},on:{click:function(e){t.editing.reward=!1}}}),a("q-btn",{attrs:{unelevated:"",color:"primary",label:"保存"},on:{click:t.saveReward}})],1):t._e()],1)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[t._v("\n        入群奖励若设定成负数则入群收费\n        "),a("br"),t._v("发帖奖励每发 100 贴转账一次\n      ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center q-mx-md q-my-sm"},[a("div",{staticClass:"col"},[t._v("入群奖励")]),a("div",{staticClass:"col"},[t._v("发帖奖励")])])}],d=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("967e")),c=a.n(d),p=(a("96cf"),a("fa84")),u=a.n(p),l=a("c47a"),m=a.n(l),v=(a("28a5"),a("a481"),a("3b4c")),h=a("d443");function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){m()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={components:{headerBarRight:v["a"],Upload:h["a"]},props:{},watch:{groupId:function(){this.init()}},computed:{owner:function(){return this.$store.state.group.currentGroupOwner},group:function(){return this.$store.state.group.currentGroup},groupId:function(){return this.$store.state.group.currentGroup.id},isOwner:function(){return this.owner.id===this.$store.state.user.userid},desc:function(){return this.tempGroupData.desc_text.replace(/\n/g,"<br/>")},desc_breakLines:function(){return this.tempGroupData.desc_text.split("\n")}},mounted:function(){},data:function(){return{loadingVisible:!1,editing:{title:!1,read_permission:!1,reward:!1},tokens:[{contract:"",symbol:"ETH"}],tokenSelect:{contract:"",symbol:"",name:""},tokenIndex:0,tempGroupData:{id:0,name:"",desc_text:"",password:null,read_permission:1,avatar:"",reward_contract:"",reward_join:"0",reward_post:"0"},editGroupData:{id:0,name:"",desc_text:"",password:null,read_permission:1,avatar:"",reward_contract:"",reward_join:"0",reward_post:"0"}}},created:function(){this.init()},methods:{init:function(){this.tempGroupData=w({},this.group),this.getTokenInfo()},getTokenInfo:function(){var t=this;return u()(c.a.mark((function e(){var a,r,i,s;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="/contracts",e.next=3,t.$axios.get(a);case 3:if(r=e.sent,0==r.data.code)for(t.tokens=r.data.data.contracts,i=0;i<t.tokens.length;i++)s=t.tokens[i],s.contract===t.group.reward_contract&&(t.tokenSelect=s);else r.data.code;case 5:case"end":return e.stop()}}),e)})))()},changeAvatar:function(){this.$refs.upload.upload()},uploading:function(){this.loadingVisible=!0},uploaded:function(t){t.err||(this.editGroupData.avatar=t.url),this.loadingVisible=!1,this.$q.notify("头像上传成功")},pickToken:function(t){console.log(t),this.tokenSelect=t},startEditTitle:function(){this.editing.title=!0,this.editGroupData.avatar=this.tempGroupData.avatar,this.editGroupData.name=this.tempGroupData.name,this.editGroupData.desc_text=this.tempGroupData.desc_text},startEditReadPermission:function(){this.editing.read_permission=!0,this.editGroupData.read_permission=this.tempGroupData.read_permission,this.editGroupData.password=null},startEditReward:function(){this.editing.reward=!0,this.editGroupData.reward_contract=this.tempGroupData.reward_contract,this.editGroupData.reward_join=this.tempGroupData.reward_join,this.editGroupData.reward_post=this.tempGroupData.reward_post},saveTitle:function(){this.tempGroupData.avatar=this.editGroupData.avatar,this.tempGroupData.name=this.editGroupData.name,this.tempGroupData.desc_text=this.editGroupData.desc_text,this.editing.title=!1,this.tempGroupData.password="****"===this.tempGroupData.password?null:"",this.saveToServer(this.tempGroupData)},saveReadPermission:function(){this.tempGroupData.read_permission=this.editGroupData.read_permission,this.tempGroupData.password=this.editGroupData.password,this.editing.read_permission=!1,1===this.tempGroupData.read_permission?this.tempGroupData.password="":2!==this.tempGroupData.read_permission||""!==this.tempGroupData.password&&"****"!==this.tempGroupData.password||(this.tempGroupData.password=null),this.saveToServer(this.tempGroupData)},saveReward:function(){this.tempGroupData.reward_contract=this.tokenSelect.contract,this.tempGroupData.reward_join=this.editGroupData.reward_join,this.tempGroupData.reward_post=this.editGroupData.reward_post,this.editing.reward=!1,this.tempGroupData.password="****"===this.tempGroupData.password?null:"",this.saveToServer(this.tempGroupData)},saveToServer:function(t){var e=this;return u()(c.a.mark((function a(){var r,i;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r="/protected/grp",a.next=3,e.$axios.put(r,t);case 3:i=a.sent,i.data&&0===i.data.code?e.$q.notify("修改成功"):(e.$q.notify("修改失败"),e.$router.go(0));case 5:case"end":return a.stop()}}),a)})))()}}},g=f,G=(a("0fd7"),a("2877")),D=a("eebe"),b=a.n(D),x=a("cb32"),k=a("9c40"),q=a("0016"),y=a("27f9"),C=a("74f7"),O=a("cf57"),$=a("3786"),j=a("4e73"),S=a("1c1c"),Q=a("66e5"),E=a("4074"),P=a("eb85"),T=Object(G["a"])(g,n,o,!1,null,"677d3264",null),R=T.exports;b()(T,"components",{QAvatar:x["a"],QBtn:k["a"],QIcon:q["a"],QInput:y["a"],QInnerLoading:C["a"],QSpinnerGears:O["a"],QRadio:$["a"],QMenu:j["a"],QList:S["a"],QItem:Q["a"],QItemSection:E["a"],QSeparator:P["a"]});var I={name:"ManageLayout",components:{ManageGroup:R,headerBarLeft:s["a"]},data:function(){return{right:!0,mini:!1}},methods:{unfold:function(){this.right=!0,this.mini=!0}}},L=I,B=(a("17bb"),a("4d5a")),z=a("9404"),M=a("09e3"),V=Object(G["a"])(L,r,i,!1,null,"dbb2d16c",null);e["default"]=V.exports;b()(V,"components",{QLayout:B["a"],QBtn:k["a"],QDrawer:z["a"],QPageContainer:M["a"]})},5301:function(t,e,a){},5896:function(t,e,a){}}]);