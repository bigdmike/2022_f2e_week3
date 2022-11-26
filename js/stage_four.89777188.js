"use strict";(self["webpackChunkf2e_week3"]=self["webpackChunkf2e_week3"]||[]).push([[349],{2913:function(t,e,r){r.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("button",{staticClass:"text-primary_white font-medium font-gambetta text-5xl px-10 py-5 hover:underline",on:{click:function(e){return t.$emit("click")}}},[t._v(" Back to Index ")])},a=[],i={name:"BackButton"},o=i,l=r(1001),n=(0,l.Z)(o,s,a,!1,null,null,null),c=n.exports},2798:function(t,e,r){r.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("button",{staticClass:"relative py-4 px-5",on:{click:function(e){return t.$emit("click")},mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[e("i",{staticClass:"absolute top-0 left-0 w-5 h-5 border-l border-t border-primary_white"}),e("i",{staticClass:"absolute bottom-0 left-0 w-5 h-5 border-l border-b border-primary_white"}),e("i",{staticClass:"absolute bottom-0 right-0 w-5 h-5 border-r border-b border-primary_white"}),e("i",{staticClass:"absolute top-0 right-0 w-5 h-5 border-r border-t border-primary_white"}),e("p",{staticClass:"py-4 px-36 font-panchang font-bold text-5xl transition-quick",class:t.hover?"bg-primary text-primary_black":"text-primary_white"},[t._v(" Challenge ")])])},a=[],i={name:"MainButton",data(){return{hover:!1}}},o=i,l=r(1001),n=(0,l.Z)(o,s,a,!1,null,null,null),c=n.exports},2685:function(t,e,r){r.r(e),r.d(e,{default:function(){return S}});var s=function(){var t=this,e=t._self._c;return e("main",{staticClass:"fixed top-0 left-0 right-0 bottom-0 z-[11] w-full h-screen flex items-center justify-center"},[e("Cover",{attrs:{page_status:t.page_status},on:{"change-status":function(e){t.page_status=e}}}),e("Stage",{attrs:{page_status:t.page_status},on:{"change-status":function(e){t.page_status=e},"set-error":function(e){t.error=!0}}}),e("ErrorCover",{ref:"ErrorCover",attrs:{error:t.error},on:{"set-error":function(e){t.error=!1}}})],1)},a=[],i=(r(7658),function(){var t=this,e=t._self._c;return e("main",{staticClass:"fixed transform transition-quick origin-center top-0 left-0 right-0 bottom-0 z-[11] w-full h-screen flex items-center justify-center",class:"cover"==t.page_status?"scale-100 opacity-100 z-[12]":"scale-[3] opacity-0 z-[0]"},[e("div",{staticClass:"relative flex flex-col items-center justify-start w-full h-screen max-w-screen-xl px-10 pb-20 mx-auto xl:px-0"},[t._m(0),e("div",{staticClass:"relative flex items-center justify-between w-full"},[e("BackButton",{on:{click:function(e){return t.$router.push("/")}}}),e("MainButton",{on:{click:function(e){return t.$emit("change-status","stage")}}})],1)])])}),o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col justify-center flex-1 w-full"},[e("div",{staticClass:"w-[636px] relative z-10 p-10"},[e("i",{staticClass:"absolute top-0 left-0 w-5 h-5 border-t border-l border-primary_white"}),e("i",{staticClass:"absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary_white"}),e("i",{staticClass:"absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary_white"}),e("i",{staticClass:"absolute top-0 right-0 w-5 h-5 border-t border-r border-primary_white"}),e("div",{staticClass:"absolute top-0 flex items-center transform -translate-y-1/2 left-14"},[e("img",{staticClass:"block mr-10 w-11 h-11",attrs:{src:"/2022_f2e_week3/img/purple_ghost.svg"}}),e("h2",{staticClass:"text-5xl italic font-medium text-primary_white font-gambetta"},[t._v(" Development Team ")])]),e("p",{staticClass:"font-medium text-primary_white"},[t._v(" 哇你很幸運喔，今天剛好是開發 B 組的 Retro，你也來見識一下，看看 Retro 都該做些什麼吧， 我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方，並記錄再 Confluence 中。Retro 重點在於『正面表述』，你也思考看看，哪一些是適合 Retro 的回饋吧！ ")])])])}],l=r(2913),n=r(2798),c={name:"StageOneCover",props:{page_status:{require:!0,type:String}},components:{BackButton:l.Z,MainButton:n.Z}},u=c,b=r(1001),p=(0,b.Z)(u,i,o,!1,null,null,null),d=p.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"absolute top-0 bottom-0 flex items-center justify-center w-full h-screen left-full transition-quick bg-primary_white",class:"stage"==t.page_status?"-translate-x-full opacity-100 z-[12]":"info"==t.page_status?"-translate-x-full opacity-100 z-[10]":"-translate-x-0 opacity-0 z-[0]"},[e("div",{staticClass:"relative z-10 flex flex-wrap items-stretch justify-center w-full max-w-screen-xl mx-auto"},[e("div",{staticClass:"flex flex-col w-full"},[e("div",{staticClass:"relative w-full p-10 mb-20 border-b border-x"},[t._m(0),e("div",{staticClass:"flex flex-col items-start"},[e("label",{staticClass:"inline-flex items-center px-5 py-2 mb-5",class:1==t.question_1?"bg-white":"bg-transparent"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.question_1,expression:"question_1"}],staticClass:"hidden",attrs:{type:"radio",value:"1",name:"question_1"},domProps:{checked:t._q(t.question_1,"1")},on:{change:function(e){t.question_1="1"}}}),e("span",{staticClass:"flex items-center justify-center w-6 h-6 mr-3 border rounded-full",class:1==t.question_1?"border-primary":"border-primary_black"},[e("i",{staticClass:"block w-3 h-3 rounded-full",class:1==t.question_1?"bg-primary":"bg-transparent"})]),e("p",{staticClass:"font-bold"},[t._v("這次我幫了很多人救火耶!")])]),e("label",{staticClass:"inline-flex items-center px-5 py-2 mb-5",class:2==t.question_1?"bg-white":"bg-transparent"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.question_1,expression:"question_1"}],staticClass:"hidden",attrs:{type:"radio",value:"2",name:"question_1"},domProps:{checked:t._q(t.question_1,"2")},on:{change:function(e){t.question_1="2"}}}),e("span",{staticClass:"flex items-center justify-center w-6 h-6 mr-3 border rounded-full",class:2==t.question_1?"border-primary":"border-primary_black"},[e("i",{staticClass:"block w-3 h-3 rounded-full",class:2==t.question_1?"bg-primary":"bg-transparent"})]),e("p",{staticClass:"font-bold"},[t._v(" 大家在開發會上互相 Cover，讓任務都有準時在時間內完成。 ")])])])]),e("div",{staticClass:"relative w-full p-10 mb-20 border-b border-x"},[t._m(1),e("div",{staticClass:"flex flex-col items-start"},[e("label",{staticClass:"inline-flex items-center px-5 py-2 mb-5",class:1==t.question_2?"bg-white":"bg-transparent"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.question_2,expression:"question_2"}],staticClass:"hidden",attrs:{type:"radio",value:"1",name:"question_2"},domProps:{checked:t._q(t.question_2,"1")},on:{change:function(e){t.question_2="1"}}}),e("span",{staticClass:"flex items-center justify-center w-6 h-6 mr-3 border rounded-full",class:1==t.question_2?"border-primary":"border-primary_black"},[e("i",{staticClass:"block w-3 h-3 rounded-full",class:1==t.question_2?"bg-primary":"bg-transparent"})]),e("p",{staticClass:"font-bold"},[t._v(" 可以紀錄這次的開發時間，讓預估團隊點數可以更精準。 ")])]),e("label",{staticClass:"inline-flex items-center px-5 py-2 mb-5",class:2==t.question_2?"bg-white":"bg-transparent"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.question_2,expression:"question_2"}],staticClass:"hidden",attrs:{type:"radio",value:"2",name:"question_2"},domProps:{checked:t._q(t.question_2,"2")},on:{change:function(e){t.question_2="2"}}}),e("span",{staticClass:"flex items-center justify-center w-6 h-6 mr-3 border rounded-full",class:2==t.question_2?"border-primary":"border-primary_black"},[e("i",{staticClass:"block w-3 h-3 rounded-full",class:2==t.question_2?"bg-primary":"bg-transparent"})]),e("p",{staticClass:"font-bold"},[t._v(" 大家在開發會上互相 開發時間預估不準確，請後端下次改進，以免 Delay 到我的時間。 ")])])])])]),e("div",{staticClass:"flex items-center justify-between w-full mt-10"},[t._m(2),e("button",{staticClass:"relative px-4 py-2 transition-quick bg-trasnparent text-primary_black hover:text-primary_black",on:{click:t.Validate,mouseenter:function(e){t.done_btn_hover=!0},mouseleave:function(e){t.done_btn_hover=!1}}},[e("i",{staticClass:"absolute top-0 left-0 z-0 w-2 h-2 border-t border-l transition-quick",class:t.done_btn_hover?"border-secondary_green":"border-primary_black"}),e("i",{staticClass:"absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l transition-quick",class:t.done_btn_hover?"border-secondary_green":"border-primary_black"}),e("i",{staticClass:"absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r transition-quick",class:t.done_btn_hover?"border-secondary_green":"border-primary_black"}),e("i",{staticClass:"absolute top-0 right-0 z-0 w-2 h-2 border-t border-r transition-quick",class:t.done_btn_hover?"border-secondary_green":"border-primary_black"}),e("p",{staticClass:"relative z-10 block px-16 py-2 text-2xl font-bold font-panchang transition-quick",class:t.done_btn_hover?"bg-secondary_green":""},[t._v(" Done ")])])])]),e("div",{staticClass:"absolute top-0 left-0 right-0 bottom-0 z-[2] bg-dot grayscale"}),e("div",{staticClass:"absolute top-0 left-0 right-0 bottom-0 z-[1] bg-noise mix-blend-overlay opacity-40"}),e("div",{staticClass:"absolute top-0 left-0 right-0 bottom-0 z-0 bg-primary_black opacity-[.25]"})])},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"absolute top-0 left-0 right-0 flex items-start"},[e("span",{staticClass:"block w-10 h-[1px] bg-primary_white transition-quick"}),e("div",{staticClass:"flex bg-[#AEAEAE] text-primary_black py-2 items-end px-4 transform -translate-y-1/2"},[e("h3",{staticClass:"text-2xl font-black leading-none"},[t._v("做得好的地方")])]),e("span",{staticClass:"block flex-1 h-[1px] bg-primary_white transition-quick"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"absolute top-0 left-0 right-0 flex items-start"},[e("span",{staticClass:"block w-10 h-[1px] bg-primary_white transition-quick"}),e("div",{staticClass:"flex bg-[#AEAEAE] text-primary_black py-2 items-end px-4 transform -translate-y-1/2"},[e("h3",{staticClass:"text-2xl font-black leading-none"},[t._v(" 有哪些可以做得更好 ")])]),e("span",{staticClass:"block flex-1 h-[1px] bg-primary_white transition-quick"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center"},[e("p",{staticClass:"mr-4 font-bold"},[t._v("使用工具")]),e("img",{attrs:{src:"/2022_f2e_week3/img/logo_confluence.jpg"}})])}],_={name:"StageOne",props:{page_status:{require:!0,type:String}},data(){return{done_btn_hover:!1,question_1:"",question_2:""}},methods:{Validate(){2!=this.question_1||1!=this.question_2?this.$emit("set-error"):(this.$store.commit("SetMainMenu",!0),setTimeout((()=>{this.$store.commit("SetStage",5)}),2500))}}},h=_,v=(0,b.Z)(h,m,f,!1,null,null,null),x=v.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fixed top-0 bottom-0 right-0 z-30 flex items-center justify-center w-full h-full transform left-full",class:t.error?"-translate-x-full":""},[e("div",{staticClass:"relative z-10 text-center transition-quick",class:t.error?"opacity-100 translate-y-0":"opacity-0 translate-y-20"},[e("p",{staticClass:"mb-3 font-bold font-panchang text-primary_white"},[t._v("Oops!")]),e("p",{staticClass:"mb-12 font-bold text-primary_white"},[t._v(" 要記得 Retro 重點在於『正面表述』喔！ ")]),e("button",{staticClass:"relative px-5 py-2 text-white transition-quick bg-trasnparent hover:bg-white hover:text-primary_black",on:{click:function(e){return t.$emit("set-error")}}},[e("i",{staticClass:"absolute top-0 left-0 z-0 w-2 h-2 border-t border-l border-primary_white"}),e("i",{staticClass:"absolute bottom-0 left-0 z-0 w-2 h-2 border-b border-l border-primary_white"}),e("i",{staticClass:"absolute bottom-0 right-0 z-0 w-2 h-2 border-b border-r border-primary_white"}),e("i",{staticClass:"absolute top-0 right-0 z-0 w-2 h-2 border-t border-r border-primary_white"}),e("p",{staticClass:"relative z-10 block font-bold trasnition-quick"},[t._v("再次挑戰")])])]),e("div",{staticClass:"absolute top-0 bottom-0 left-0 right-0 z-0 transition-quick bg-primary_black bg-opacity-90",class:t.error?"opacity-100":"opacity-0"})])},g=[],C={name:"ErrorCover",props:{error:{require:!0,type:Boolean}}},w=C,k=(0,b.Z)(w,y,g,!1,null,null,null),q=k.exports,z={name:"StageFour",components:{Cover:d,Stage:x,ErrorCover:q},data(){return{page_status:"cover",error:!1}},watch:{page_status(){"cover"==this.page_status?this.$store.commit("SetHeaderColor","white"):this.$store.commit("SetHeaderColor","black")}}},j=z,B=(0,b.Z)(j,s,a,!1,null,null,null),S=B.exports}}]);
//# sourceMappingURL=stage_four.89777188.js.map