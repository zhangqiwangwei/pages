!function(e){var t={};function o(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=1)}([function(e,t){e.exports=Vue},function(e,t,o){"use strict";o.r(t);var i=o(0),a=o.n(i);var r=function(e,t,o,i,a,r,s,n){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):a&&(l=n?function(){a.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}({name:"bll2",magentoEl:"#customFormPage",data:function(){return{showForm:!1,formLoaded:!1,imgFiles:[],nameVery:!0,emailVery:!0,phoneVery:!0,form:{name:"",email:"",phone:"",options:[{key:"product_type",label:"which type jwelry do you want to custom",value:"Ring"},{key:"gem_type",label:"which type of gem(s) do you wish to set",value:"Moissanite"},{key:"metal",label:"which kind of metal would you prefer?",value:"14K White Gold"},{key:"occasion",label:"What specifical occasion do you want to wear this jewelry",value:"Proposal"}],description:"",budget:"$1000-$3000",docs:""}}},methods:{checkEmail:function(e){return!!e&&!!this.isEmail(e)},isEmail:function(e){return/@(\w)+((\.\w+)+)$/.test(e)},showFile:function(){this.$refs.fileInput.click()},removeImg:function(e){this.imgFiles.splice(e,1)},uploadFile:function(){if(this.$refs.fileInput.files&&this.$refs.fileInput.files[0]){$(".overlay").show();var e=new FormData($("#uploadFileForm")[0]),t=this;$.ajax({type:"post",url:"/api/file/upload",data:e,processData:!1,contentType:!1,success:function(e){if($(".overlay").hide(),"200"==e.status){var o=e.data.file_path;t.imgFiles.push(o)}else alert("submit failed,please try again")},error:function(e){$(".overlay").hide(),alert("submit failed,please try again")}})}},sumitForm:function(){var e=this;return""==this.form.name?(this.nameVery=!1,!1):(this.nameVery=!0,""==this.form.email?(this.emailVery=!1,!1):this.checkEmail(this.form.email)?(this.emailVery=!0,""==this.form.phone?(this.phoneVery=!1,!1):(this.phoneVery=!0,e.form.options=JSON.stringify(e.form.options),e.form.docs=JSON.stringify(this.imgFiles),$(".overlay").show(),void $.ajax({type:"post",url:"/api/form/inquiry",data:e.form,success:function(t){$(".overlay").hide(),"200"==t.status?e.formLoaded=!0:alert("submit failed,please try again")},error:function(e){$(".overlay").hide()}}))):(this.emailVery=!1,!1))}}},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cms-page image-font",staticStyle:{width:"100%","font-size":"20px",color:"#000000"},attrs:{id:"customFormPage"}},[o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"black-overlay"},[e._v(" ")]),e._v(" "),o("div",{staticClass:"p-relative",staticStyle:{cursor:"pointer"},on:{click:function(t){e.showForm=!0}}},[o("img",{staticStyle:{"min-height":"35vw"},attrs:{src:"//images.shesaidyes.com/catelog/custom/pc/01.jpg"}}),e._v(" "),e._m(0)]),e._v(" "),e._m(1),e._v(" "),o("div",[o("div",{staticStyle:{"text-align":"center","font-size":"36px","line-height":"120px"}},[e._v("FIVE STEPS TO CUSTOM YOUR JEWELRY")]),e._v(" "),o("div",{staticClass:"p-relative",staticStyle:{cursor:"pointer"},on:{click:function(t){e.showForm=!0}}},[o("img",{attrs:{src:"//images.shesaidyes.com/catelog/custom/pc/03.jpg"}}),e._v(" "),e._m(2),e._v(" "),e._m(3)])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),o("div",{staticStyle:{"text-align":"center",margin:"60px 0 100px"}},[o("a",{staticStyle:{border:"1px solid",padding:"5px 38px","font-size":"25px",cursor:"pointer"},on:{click:function(t){e.showForm=!0}}},[e._v("Start\n                Your Design")])])]),e._v(" "),o("div",{class:e.showForm?"form-active":"",attrs:{id:"contact-us-wrapper"}},[e.formLoaded?o("div",{staticStyle:{height:"100%"}},[o("div",{staticClass:"cstitlt",staticStyle:{"font-weight":"bolder","font-size":"18px",color:"#ec6d61","text-align":"center","line-height":"50px",background:"#ffffff"}},[o("span",{staticStyle:{visibility:"hidden"}},[e._v("1")]),e._v(" "),o("span",{staticClass:"remove-icon",on:{click:function(t){e.showForm=!1}}},[e._v("×")])]),e._v(" "),e._m(6)]):o("div",{staticStyle:{height:"100%"}},[o("div",{staticClass:"cstitlt",staticStyle:{"font-weight":"bolder","font-size":"18px",color:"#ec6d61","text-align":"center","line-height":"50px",background:"#FDF2EE"}},[o("span",[e._v("COMPLIMENTARY QUOTE FORM")]),o("span",{staticClass:"remove-icon",on:{click:function(t){e.showForm=!1}}},[e._v("×")])]),e._v(" "),o("div",{staticClass:"form-container"},[o("form",{staticClass:"request-form",attrs:{id:"new_request"}},[o("div",{staticClass:"form-field required"},[o("label",{attrs:{for:"firstName"}},[e._v("* Your Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-input-text requiredNoNull",class:e.nameVery?"":"erroe-border",attrs:{id:"firstName",name:"name",required:"",type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",{attrs:{for:"request_anonymous_requester_email"}},[e._v("* Your\n                            Email")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-input-text requiredNoNull",class:e.emailVery?"":"erroe-border",attrs:{id:"request_anonymous_requester_email",name:"email",required:"",type:"text"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",{attrs:{for:"phonenumber"}},[e._v("* Your Phone Number")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],staticClass:"form-input-text requiredNoNull",class:e.phoneVery?"":"erroe-border",attrs:{id:"phonenumber",name:"phonenumber",required:"",type:"text"},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",[e._v("* Which type jewelry do you want to cutom ?")]),e._v(" "),o("div",{staticClass:"required d-flex-cc",attrs:{id:"jewelry_type"}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[0].value,expression:"form.options[0].value"}],attrs:{id:"jewelry_type_Ring",name:"product_type",type:"radio",value:"Ring"},domProps:{checked:e._q(e.form.options[0].value,"Ring")},on:{change:function(t){return e.$set(e.form.options[0],"value","Ring")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_type_Ring"}},[e._v("Ring")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[0].value,expression:"form.options[0].value"}],attrs:{id:"jewelry_type_Necklace",name:"product_type",type:"radio",value:"Necklace"},domProps:{checked:e._q(e.form.options[0].value,"Necklace")},on:{change:function(t){return e.$set(e.form.options[0],"value","Necklace")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_type_Necklace"}},[e._v("Necklace")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[0].value,expression:"form.options[0].value"}],attrs:{id:"jewelry_type_Earrings",name:"product_type",type:"radio",value:"Earrings"},domProps:{checked:e._q(e.form.options[0].value,"Earrings")},on:{change:function(t){return e.$set(e.form.options[0],"value","Earrings")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_type_Earrings"}},[e._v("Earrings")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[0].value,expression:"form.options[0].value"}],attrs:{id:"jewelry_type_Bracelet",name:"product_type",type:"radio",value:"Bracelet"},domProps:{checked:e._q(e.form.options[0].value,"Bracelet")},on:{change:function(t){return e.$set(e.form.options[0],"value","Bracelet")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_type_Bracelet"}},[e._v("Bracelet")])])])]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",[e._v("* Which type of gem(s) do you wish to set?")]),e._v(" "),o("div",{staticClass:"required d-flex-cc",attrs:{id:"jewelry_gems"}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[1].value,expression:"form.options[1].value"}],attrs:{id:"jewelry_gems_Moissanite",name:"gem_type",type:"radio",value:"Moissanite"},domProps:{checked:e._q(e.form.options[1].value,"Moissanite")},on:{change:function(t){return e.$set(e.form.options[1],"value","Moissanite")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_gems_Moissanite"}},[e._v("Moissanite")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[1].value,expression:"form.options[1].value"}],attrs:{id:"jewelry_gems_Diamond",name:"gem_type",type:"radio",value:"Diamond"},domProps:{checked:e._q(e.form.options[1].value,"Diamond")},on:{change:function(t){return e.$set(e.form.options[1],"value","Diamond")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_gems_Diamond"}},[e._v("Diamond")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[1].value,expression:"form.options[1].value"}],attrs:{id:"jewelry_gems_Lab",name:"gem_type",type:"radio",value:"Lab-Created Color Gems"},domProps:{checked:e._q(e.form.options[1].value,"Lab-Created Color Gems")},on:{change:function(t){return e.$set(e.form.options[1],"value","Lab-Created Color Gems")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_gems_Lab"}},[e._v("Lab-Created Color Gems")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[1].value,expression:"form.options[1].value"}],attrs:{id:"jewelry_gems_Natural",name:"gem_type",type:"radio",value:"Natural Color Gems"},domProps:{checked:e._q(e.form.options[1].value,"Natural Color Gems")},on:{change:function(t){return e.$set(e.form.options[1],"value","Natural Color Gems")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_gems_Natural"}},[e._v("Natural Color Gems")])])])]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",[e._v("* Which kind of metal would you prefer?")]),e._v(" "),o("div",{staticClass:"required d-flex-cc",attrs:{id:"jewelry_metal"}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_14KWhiteGold",name:"jewelry_metal",type:"radio",value:"14K White Gold"},domProps:{checked:e._q(e.form.options[2].value,"14K White Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","14K White Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_14KWhiteGold"}},[e._v("14K White Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_14KRoseGold",name:"metal",type:"radio",value:"14K Rose Gold"},domProps:{checked:e._q(e.form.options[2].value,"14K Rose Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","14K Rose Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_14KRoseGold"}},[e._v("14K Rose Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_14KYellowGold",name:"metal",type:"radio",value:"14K Yellow Gold"},domProps:{checked:e._q(e.form.options[2].value,"14K Yellow Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","14K Yellow Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_14KYellowGold"}},[e._v("14K Yellow Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_18KWhiteGold",name:"metal",type:"radio",value:"18K White Gold"},domProps:{checked:e._q(e.form.options[2].value,"18K White Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","18K White Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_18KWhiteGold"}},[e._v("18K White Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_18KRoseGold",name:"metal",type:"radio",value:"18K Rose Gold"},domProps:{checked:e._q(e.form.options[2].value,"18K Rose Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","18K Rose Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_18KRoseGold"}},[e._v("18K Rose Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_18KYellowGold",name:"metal",type:"radio",value:"18K Yellow Gold"},domProps:{checked:e._q(e.form.options[2].value,"18K Yellow Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","18K Yellow Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_18KYellowGold"}},[e._v("18K Yellow Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_10KWhiteGold",name:"metal",type:"radio",value:"10K White Gold"},domProps:{checked:e._q(e.form.options[2].value,"10K White Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","10K White Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_10KWhiteGold"}},[e._v("10K White Gold")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[2].value,expression:"form.options[2].value"}],attrs:{id:"jewelry_metal_10KRoseGold",name:"metal",type:"radio",value:"10K Rose Gold"},domProps:{checked:e._q(e.form.options[2].value,"10K Rose Gold")},on:{change:function(t){return e.$set(e.form.options[2],"value","10K Rose Gold")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"jewelry_metal_10KRoseGold"}},[e._v("10K Rose Gold")])])])]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",[e._v("* What specific occasion do you want to wear this\n                            Jewelry?")]),e._v(" "),o("div",{staticClass:"required d-flex-cc",attrs:{id:"occasion"}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[3].value,expression:"form.options[3].value"}],attrs:{id:"occasion_Proposal",name:"occasion",type:"radio",value:"Proposal"},domProps:{checked:e._q(e.form.options[3].value,"Proposal")},on:{change:function(t){return e.$set(e.form.options[3],"value","Proposal")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"occasion_Proposal"}},[e._v("Proposal")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[3].value,expression:"form.options[3].value"}],attrs:{id:"occasion_Valentine",name:"occasion",type:"radio",value:"Valentine's Day"},domProps:{checked:e._q(e.form.options[3].value,"Valentine's Day")},on:{change:function(t){return e.$set(e.form.options[3],"value","Valentine's Day")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"occasion_Valentine"}},[e._v("Valentine's Day")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[3].value,expression:"form.options[3].value"}],attrs:{id:"occasion_Wedding",name:"occasion",type:"radio",value:"Wedding"},domProps:{checked:e._q(e.form.options[3].value,"Wedding")},on:{change:function(t){return e.$set(e.form.options[3],"value","Wedding")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"occasion_Wedding"}},[e._v("Wedding")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[3].value,expression:"form.options[3].value"}],attrs:{id:"occasion_Birthday",name:"occasion",type:"radio",value:"Birthday"},domProps:{checked:e._q(e.form.options[3].value,"Birthday")},on:{change:function(t){return e.$set(e.form.options[3],"value","Birthday")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"occasion_Birthday"}},[e._v("Birthday")])]),e._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.options[3].value,expression:"form.options[3].value"}],attrs:{id:"occasion_Anniversary",name:"occasion",type:"radio",value:"Anniversary"},domProps:{checked:e._q(e.form.options[3].value,"Anniversary")},on:{change:function(t){return e.$set(e.form.options[3],"value","Anniversary")}}}),o("label",{staticClass:"radio-txt",attrs:{for:"occasion_Anniversary"}},[e._v("Anniversary")])])])]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",[e._v("* Your budget")]),e._v(" "),o("div",{staticClass:"required d-flex-cc"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.budget,expression:"form.budget"}],staticStyle:{height:"40px",border:"1px solid #ddd",background:"#ffffff",width:"100%"},attrs:{id:"budget",name:"budget"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"budget",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"$1000-$3000"}},[e._v("$1000-$3000")]),e._v(" "),o("option",{attrs:{value:"$3000-$5000"}},[e._v("$3000-$5000")]),e._v(" "),o("option",{attrs:{value:"$5000-$8000"}},[e._v("$5000-$8000")]),e._v(" "),o("option",{attrs:{value:"$8000 and over"}},[e._v("$8000 and over")])])])]),e._v(" "),o("div",{staticClass:"form-field required"},[o("label",{attrs:{for:"request_message",id:"request_description_label"}},[e._v("Discription")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"}],staticStyle:{"min-height":"80px",border:"1px solid #dddddd",width:"100%"},attrs:{id:"request_message",name:"description",placeholder:"Please provide a brief description of your inspirations, our representative will get back to you shortly. "},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-field"},[o("label",[e._v("Upload Your Design")]),e._v(" "),o("div",[o("ul",{staticClass:"order-up-img clearfix"},[o("li",{staticClass:"add-img",on:{click:e.showFile}},[o("div",{staticClass:"addicon"},[e._v("+")]),e._v(" "),o("div",{staticClass:"uptateText"},[e._v("Upload a picture")])]),e._v(" "),e._l(e.imgFiles,(function(t,i,a){return o("li",{key:a},[o("div",{staticClass:"removeUpload",on:{click:e.removeImg}},[e._v("×")]),e._v(" "),o("img",{staticClass:"pwidth",attrs:{src:t}})])}))],2)])])]),e._v(" "),o("form",{attrs:{id:"uploadFileForm"}},[o("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{name:"file",type:"file"},on:{change:e.uploadFile}}),e._v(" ")])]),e._v(" "),o("div",[o("input",{attrs:{id:"custom_commit",name:"commit",type:"button",value:"SUBMIT"},on:{click:e.sumitForm}})])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"absolute",top:"15%",left:"59%"}},[t("div",{staticStyle:{"font-size":"46px",padding:"10px 0","border-bottom":"1px solid"}},[this._v("CUSTOM JEWELRY")]),this._v(" "),t("div",{staticStyle:{"font-size":"25px","text-transform":"uppercase",padding:"20px 0 40px"}},[this._v("Tell us your idea, we\n                        bring\n                        it to life\n                    ")]),this._v(" "),t("div",{staticStyle:{border:"1px solid",display:"inline-block",padding:"0 20px"}},[this._v("Submit Your Request")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"76%","max-width":"1430px",padding:"6vw 0",margin:"auto"}},[o("div",[o("img",{attrs:{src:"//images.shesaidyes.com/catelog/custom/pc/02.jpg"}})]),e._v(" "),o("div",[e._v("Want a piece of jewelry like nothing else in the world? Want to express how much someone matters to\n                    you? Want to surprise your loved one with one-of-a-kind jewelry that designed by yourself? There's\n                    nothing more special than presenting someone with jewelry that can't be found or seen on anyone\n                    else."),o("br"),e._v(" "),o("br"),e._v("\n                    SHE · SAID · YES custom jewelry is the perfect choice for you."),o("br"),e._v(" "),o("br"),e._v("\n                    Don't worry about your crappy painting or intricate design; our professional representatives are\n                    here to\n                    help you. We will work together with you to develop a unique design that reflects your vision and\n                    budget. Our specialists will bring your inspiration to life by combining the latest technology with\n                    our\n                    dedication to artistry and fine craftsmanship."),o("br"),e._v(" "),o("br"),e._v("\n                    Moreover, we will issue you SHE·SAID·YES copyright certificate and guarantee that it will not be\n                    sold to\n                    other customers.\n                ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"absolute",top:"58%",width:"24%",left:"17%"}},[t("div",{staticClass:"step-tl"},[this._v("NO.1")]),this._v(" "),t("div",{staticClass:"step-su"},[this._v("Step 1: Request a complimentary quote")]),this._v(" "),t("div",[this._v("Submit a quote request "),t("span",{staticStyle:{color:"#ff0000"}},[this._v("here")]),this._v(" to receive a complimentary\n                            price quote based on your design concept, drawings if there is any, and your size.\n                        ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"absolute",top:"58%",width:"24%",left:"59%"}},[t("div",{staticClass:"step-tl"},[this._v("NO.2")]),this._v(" "),t("div",{staticClass:"step-su"},[this._v("Step 2: Put your concept into the hand-painting")]),this._v(" "),t("div",[this._v("Our jewelry designers will take your ideas and work together with you to create a sketch\n                            design concept by hand-painting.\n                        ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"f-c-c",staticStyle:{padding:"4vw 0",width:"76%","max-width":"1430px",margin:"auto"}},[t("div",{staticStyle:{width:"40%"}},[t("div",{staticClass:"step-tl"},[this._v("NO.3")]),this._v(" "),t("div",{staticClass:"step-su"},[this._v("Step 3: Refined hand-painted image")]),this._v(" "),t("div",[this._v("We request a deposit of 50% jewelry price before undertaking any refined hand-painting of\n                        your\n                        piece, and we will continuously stay in contact with you to ensure everything is perfect.\n                    ")])]),this._v(" "),t("div",{staticStyle:{width:"60%"}},[t("img",{attrs:{src:"//images.shesaidyes.com/catelog/custom/pc/04.jpg"}})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"f-c-c",staticStyle:{width:"76%","max-width":"1430px",margin:"auto","text-align":"center","align-items":"flex-start"}},[o("div",{staticStyle:{width:"509px","padding-right":"2vw"}},[o("img",{attrs:{src:"//images.shesaidyes.com/catelog/custom/pc/05.jpg"}}),e._v(" "),o("div",{staticClass:"step-tl"},[e._v("NO.4")]),e._v(" "),o("div",{staticClass:"step-su"},[e._v("Step 4: Multi-angled 3D models")]),e._v(" "),o("div",[e._v("The order will be placed once your design concept has been finalized. We will create a 3D model\n                        which displays multi-angled of your jewelry. Images of your 3D model will be sent to you for\n                        your\n                        approval.\n                    ")])]),e._v(" "),o("div",{staticStyle:{width:"509px","padding-left":"2vw"}},[o("img",{attrs:{src:"//images.shesaidyes.com/catelog/custom/pc/06.jpg"}}),e._v(" "),o("div",[o("div",{staticClass:"step-tl"},[e._v("NO.5")]),e._v(" "),o("div",{staticClass:"step-su"},[e._v("Step 5: Finshed piece and ship the jewelry to you")]),e._v(" "),o("div",[e._v("Upon your final approval, your jewelry will be sent into the production. After thoroughly\n                            inspected by our Quality Assurance team, your beautifully finished piece will be packed in\n                            our\n                            distinctive packaging and shipped to you.\n                        ")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-container",staticStyle:{display:"flex","align-items":"center","justify-content":"center",position:"relative"}},[t("img",{attrs:{src:"//images.shesaidyes.com/catelog/custom/ft.jpg"}}),this._v(" "),t("div",{staticStyle:{position:"absolute",width:"375px",top:"255px",background:"#F9EBEA",border:"1px solid #eec4c1","border-radius":"4px",padding:"15px",left:"0",right:"0",margin:"auto"}},[this._v("The quote request has been received successfully. SHE.SAID.YES expert will get back to you within 24 hours.\n                    ")])])}],!1,null,null,null).exports;var s=r.magentoEl?r.magentoEl:"#app";({app:new a.a({render:function(e){return e(r)}})}).app.$mount(s)}]);