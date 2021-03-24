<template>
    <div class="cms-page image-font" id="customFormPage" style="width: 100%;font-size: 20px;color: #000000;">
        <div class="black-overlay" v-show="showForm">&nbsp;</div>

        <div class="p-relative" style="cursor: pointer;" @click="showForm = true">
            <img
                src="//images.shesaidyes.com/catelog/custom/pc/01.jpg" style="min-height: 35vw;"/>
            <div style="position: absolute;top: 15%;left: 59%;">
                <div style="font-size: 46px;padding: 10px 0;border-bottom: 1px solid;">CUSTOM JEWELRY</div>

                <div style="font-size: 25px;text-transform: uppercase;padding: 20px 0 40px;">Tell us your idea, we bring
                    it to life
                </div>

                <div style="border: 1px solid;display: inline-block;padding: 0 20px;">Submit Your Request</div>
            </div>
        </div>

        <div style="width: 76%;max-width: 1430px;padding: 6vw 0;margin: auto;">
            <div><img src="//images.shesaidyes.com/catelog/custom/pc/02.jpg"/></div>

            <div>Want a piece of jewelry like nothing else in the world? Want to express how much someone matters to
                you? Want to surprise your loved one with one-of-a-kind jewelry that designed by yourself? There's
                nothing more special than presenting someone with jewelry that can't be found or seen on anyone
                else.<br/>
                <br/>
                SHE · SAID · YES custom jewelry is the perfect choice for you.<br/>
                <br/>
                Don't worry about your crappy painting or intricate design; our professional representatives are here to
                help you. We will work together with you to develop a unique design that reflects your vision and
                budget. Our specialists will bring your inspiration to life by combining the latest technology with our
                dedication to artistry and fine craftsmanship.<br/>
                <br/>
                Moreover, we will issue you SHE·SAID·YES copyright certificate and guarantee that it will not be sold to
                other customers.
            </div>
        </div>

        <div>
            <div style="text-align: center;font-size: 36px;line-height: 120px;">FIVE STEPS TO CUSTOM YOUR JEWELRY</div>

            <div class="p-relative" style="cursor: pointer;" @click="showForm = true"><img
                    src="//images.shesaidyes.com/catelog/custom/pc/03.jpg"/>
                <div style="position: absolute;top: 58%;width: 24%;left: 17%;">
                    <div class="step-tl">NO.1</div>

                    <div class="step-su">Step 1: Request a complimentary quote</div>

                    <div>Submit a quote request <span style="color: #ff0000;">here</span> to receive a complimentary
                        price quote based on your design concept, drawings if there is any, and your size.
                    </div>
                </div>

                <div style="position: absolute;top: 58%;width: 24%;left: 59%;">
                    <div class="step-tl">NO.2</div>

                    <div class="step-su">Step 2: Put your concept into the hand-painting</div>

                    <div>Our jewelry designers will take your ideas and work together with you to create a sketch design
                        concept by hand-painting.
                    </div>
                </div>
            </div>
        </div>

        <div class="f-c-c" style="padding: 4vw 0;width:76%;max-width: 1430px;margin: auto;">
            <div style="width: 40%">
                <div class="step-tl">NO.3</div>

                <div class="step-su">Step 3: Refined hand-painted image</div>

                <div>We&nbsp;request a deposit of 50% jewelry price before undertaking any refined hand-painting of your
                    piece, and we will continuously stay in contact with you to ensure everything is perfect.
                </div>
            </div>

            <div style="width: 60%"><img src="//images.shesaidyes.com/catelog/custom/pc/04.jpg"/></div>
        </div>

        <div class="f-c-c" style="width:76%;max-width: 1430px;margin: auto;text-align: center;align-items: flex-start;">
            <div style="width: 509px;padding-right: 2vw;"><img src="//images.shesaidyes.com/catelog/custom/pc/05.jpg"/>
                <div class="step-tl">NO.4</div>

                <div class="step-su">Step 4: Multi-angled 3D models</div>

                <div>The order will be placed once your design concept has been finalized. We will create a 3D model
                    which displays multi-angled of your jewelry. Images of your 3D model will be sent to you for your
                    approval.
                </div>
            </div>

            <div style="width: 509px;padding-left: 2vw;"><img src="//images.shesaidyes.com/catelog/custom/pc/06.jpg"/>
                <div>
                    <div class="step-tl">NO.5</div>

                    <div class="step-su">Step 5: Finshed piece and ship the jewelry to you</div>

                    <div>Upon your final approval, your jewelry will be sent into the production. After thoroughly
                        inspected by our Quality Assurance team, your beautifully finished piece will be packed in our
                        distinctive packaging and shipped to you.
                    </div>
                </div>
            </div>
        </div>

        <div style="text-align: center;margin: 60px 0 100px;"><a
                style="border: 1px solid;padding: 5px 38px;font-size: 25px;cursor: pointer;" @click="showForm = true">Start
            Your Design</a></div>

        <div id="contact-us-wrapper" :class="showForm ? 'form-active' : ''">
            <div style="height: 100%;" v-if="formLoaded">
                <div class="cstitlt"
                     style="font-weight: bolder;font-size: 18px;color:#ec6d61;text-align: center;line-height: 50px;background: #ffffff;">
                    <span style="visibility: hidden;">1</span> <span class="remove-icon"
                                                                     @click="showForm = false">×</span></div>

                <div class="form-container"
                     style="display: flex;align-items: center;justify-content: center;position:relative;"><img
                        src="//images.shesaidyes.com/catelog/custom/ft.jpg"/>
                    <div style="
    position: absolute;
    width: 375px;
    top: 255px;
    background: #F9EBEA;
    border: 1px solid #eec4c1;
    border-radius: 4px;
    padding: 15px;
    left: 0;
    right: 0;
    margin: auto;
">The quote request has been received successfully. SHE.SAID.YES expert will get back to you within 24 hours.
                    </div>
                </div>
            </div>

            <div style="height: 100%;" v-else="">
                <div class="cstitlt"
                     style="font-weight: bolder;font-size: 18px;color:#ec6d61;text-align: center;line-height: 50px;background: #FDF2EE;">
                    <span>COMPLIMENTARY QUOTE FORM</span><span class="remove-icon" @click="showForm = false">×</span>
                </div>

                <div class="form-container">
                    <form class="request-form" id="new_request">
                        <div class="form-field required"><label for="firstName">* Your Name</label> <input
                                class="form-input-text requiredNoNull" id="firstName" name="name" required=""
                                type="text" :class="nameVery ? '': 'erroe-border'" v-model="form.name"/></div>

                        <div class="form-field required"><label for="request_anonymous_requester_email">* Your
                            Email</label> <input class="form-input-text requiredNoNull"
                                                 id="request_anonymous_requester_email" name="email" required=""
                                                 type="text" :class="emailVery ? '': 'erroe-border'"
                                                 v-model="form.email"/></div>

                        <div class="form-field required"><label for="phonenumber">* Your Phone Number</label> <input
                                class="form-input-text requiredNoNull" id="phonenumber" name="phonenumber" required=""
                                type="text" :class="phoneVery ? '': 'erroe-border'" v-model="form.phone"/></div>

                        <div class="form-field required"><label>* Which type jewelry do you want to cutom ?</label>

                            <div class="required d-flex-cc" id="jewelry_type">
                                <div><input id="jewelry_type_Ring" name="product_type" type="radio"
                                            v-model="form.options[0].value" value="Ring"/><label class="radio-txt"
                                                                                                 for="jewelry_type_Ring">Ring</label>
                                </div>

                                <div><input id="jewelry_type_Necklace" name="product_type" type="radio"
                                            v-model="form.options[0].value" value="Necklace"/><label class="radio-txt"
                                                                                                     for="jewelry_type_Necklace">Necklace</label>
                                </div>

                                <div><input id="jewelry_type_Earrings" name="product_type" type="radio"
                                            v-model="form.options[0].value" value="Earrings"/><label class="radio-txt"
                                                                                                     for="jewelry_type_Earrings">Earrings</label>
                                </div>

                                <div><input id="jewelry_type_Bracelet" name="product_type" type="radio"
                                            v-model="form.options[0].value" value="Bracelet"/><label class="radio-txt"
                                                                                                     for="jewelry_type_Bracelet">Bracelet</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-field required"><label>* Which type of gem(s) do you wish to set?</label>

                            <div class="required d-flex-cc" id="jewelry_gems">
                                <div><input id="jewelry_gems_Moissanite" name="gem_type" type="radio"
                                            v-model="form.options[1].value" value="Moissanite"/><label class="radio-txt"
                                                                                                       for="jewelry_gems_Moissanite">Moissanite</label>
                                </div>

                                <div><input id="jewelry_gems_Diamond" name="gem_type" type="radio"
                                            v-model="form.options[1].value" value="Diamond"/><label class="radio-txt"
                                                                                                    for="jewelry_gems_Diamond">Diamond</label>
                                </div>

                                <div><input id="jewelry_gems_Lab" name="gem_type" type="radio"
                                            v-model="form.options[1].value" value="Lab-Created Color Gems"/><label
                                        class="radio-txt" for="jewelry_gems_Lab">Lab-Created Color Gems</label></div>

                                <div><input id="jewelry_gems_Natural" name="gem_type" type="radio"
                                            v-model="form.options[1].value" value="Natural Color Gems"/><label
                                        class="radio-txt" for="jewelry_gems_Natural">Natural Color Gems</label></div>
                            </div>
                        </div>

                        <div class="form-field required"><label>* Which kind of metal would you prefer?</label>

                            <div class="required d-flex-cc" id="jewelry_metal">
                                <div><input id="jewelry_metal_14KWhiteGold" name="jewelry_metal" type="radio"
                                            v-model="form.options[2].value" value="14K White Gold"/><label
                                        class="radio-txt" for="jewelry_metal_14KWhiteGold">14K White Gold</label></div>

                                <div><input id="jewelry_metal_14KRoseGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="14K Rose Gold"/><label
                                        class="radio-txt" for="jewelry_metal_14KRoseGold">14K Rose Gold</label></div>

                                <div><input id="jewelry_metal_14KYellowGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="14K Yellow Gold"/><label
                                        class="radio-txt" for="jewelry_metal_14KYellowGold">14K Yellow Gold</label>
                                </div>

                                <div><input id="jewelry_metal_18KWhiteGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="18K White Gold"/><label
                                        class="radio-txt" for="jewelry_metal_18KWhiteGold">18K White Gold</label></div>

                                <div><input id="jewelry_metal_18KRoseGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="18K Rose Gold"/><label
                                        class="radio-txt" for="jewelry_metal_18KRoseGold">18K Rose Gold</label></div>

                                <div><input id="jewelry_metal_18KYellowGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="18K Yellow Gold"/><label
                                        class="radio-txt" for="jewelry_metal_18KYellowGold">18K Yellow Gold</label>
                                </div>

                                <div><input id="jewelry_metal_10KWhiteGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="10K White Gold"/><label
                                        class="radio-txt" for="jewelry_metal_10KWhiteGold">10K White Gold</label></div>

                                <div><input id="jewelry_metal_10KRoseGold" name="metal" type="radio"
                                            v-model="form.options[2].value" value="10K Rose Gold"/><label
                                        class="radio-txt" for="jewelry_metal_10KRoseGold">10K Rose Gold</label></div>
                            </div>
                        </div>

                        <div class="form-field required"><label>* What specific occasion do you want to wear this
                            Jewelry?</label>

                            <div class="required d-flex-cc" id="occasion">
                                <div><input id="occasion_Proposal" name="occasion" type="radio"
                                            v-model="form.options[3].value" value="Proposal"/><label class="radio-txt"
                                                                                                     for="occasion_Proposal">Proposal</label>
                                </div>

                                <div><input id="occasion_Valentine" name="occasion" type="radio"
                                            v-model="form.options[3].value" value="Valentine's Day"/><label
                                        class="radio-txt" for="occasion_Valentine">Valentine's Day</label></div>

                                <div><input id="occasion_Wedding" name="occasion" type="radio"
                                            v-model="form.options[3].value" value="Wedding"/><label class="radio-txt"
                                                                                                    for="occasion_Wedding">Wedding</label>
                                </div>

                                <div><input id="occasion_Birthday" name="occasion" type="radio"
                                            v-model="form.options[3].value" value="Birthday"/><label class="radio-txt"
                                                                                                     for="occasion_Birthday">Birthday</label>
                                </div>

                                <div><input id="occasion_Anniversary" name="occasion" type="radio"
                                            v-model="form.options[3].value" value="Anniversary"/><label
                                        class="radio-txt" for="occasion_Anniversary">Anniversary</label></div>
                            </div>
                        </div>

                        <div class="form-field required"><label>* Your budget</label>

                            <div class="required d-flex-cc"><select id="budget" name="budget"
                                                                    style="height: 40px;border: 1px solid #ddd;background: #ffffff;width: 100%;"
                                                                    v-model="form.budget">
                                <option value="$1000-$3000">$1000-$3000</option>
                                <option value="$3000-$5000">$3000-$5000</option>
                                <option value="$5000-$8000">$5000-$8000</option>
                                <option value="$8000 and over">$8000 and over</option>
                            </select></div>
                        </div>

                        <div class="form-field required"><label for="request_message" id="request_description_label">Discription</label><textarea
                                id="request_message" name="description"
                                placeholder="Please provide a brief description of your inspirations, our representative will get back to you shortly. "
                                style="min-height: 80px;border: 1px solid #dddddd;width: 100%;"
                                v-model="form.description"></textarea></div>

                        <div class="form-field"><label>Upload Your Design</label>

                            <div>
                                <ul class="order-up-img clearfix">
                                    <li class="add-img" @click="showFile">
                                        <div class="addicon">+</div>

                                        <div class="uptateText">Upload a picture</div>
                                    </li>
                                    <li :key="key" v-for="(src,index,key) in imgFiles">
                                        <div class="removeUpload" @click="removeImg">×</div>
                                        <img :src="src" class="pwidth"/></li>
                                </ul>
                            </div>
                        </div>
                    </form>

                    <form id="uploadFileForm"><input name="file" ref="fileInput" style="display: none" type="file"
                                                     @change="uploadFile"/>&nbsp;</form>
                </div>

                <div><input id="custom_commit" name="commit" type="button" @click="sumitForm" value="SUBMIT"/></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "bl",
        magentoEl:"#customFormPage",
        data(){
            return {
                showForm: false,
                formLoaded: false,
                imgFiles: [],
                nameVery: true,
                emailVery: true,
                phoneVery: true,
                form: {
                    name: "",
                    email: "",
                    phone: "",
                    options: [
                        {
                            "key": "product_type",
                            "label": "which type jwelry do you want to custom",
                            "value": "Ring"
                        },
                        {
                            "key": "gem_type",
                            "label": "which type of gem(s) do you wish to set",
                            "value": "Moissanite"
                        },
                        {
                            "key": "metal",
                            "label": "which kind of metal would you prefer?",
                            "value": "14K White Gold"
                        },
                        {
                            "key": "occasion",
                            "label": "What specifical occasion do you want to wear this jewelry",
                            "value": "Proposal"
                        }
                    ],
                    description: "",
                    budget: "$1000-$3000",
                    docs: ""
                },
            }
        },
        methods: {
            checkEmail: function (val) {
                if (val) {
                    if (!this.isEmail(val)) {
                        return false;
                    }
                    return true;
                }
                return false;
            },
            isEmail: function (str) {
                var reg = /@(\w)+((\.\w+)+)$/;
                return reg.test(str);
            },
            showFile: function () {
                this.$refs.fileInput.click();
            },
            removeImg: function (index) {
                this.imgFiles.splice(index, 1);
            },
            uploadFile: function () {
                if (this.$refs.fileInput.files && this.$refs.fileInput.files[0]) {
                    $(".overlay").show();
                    var formdata = new FormData($("#uploadFileForm")[0]);
                    var _this = this;
                    $.ajax({
                        type: "post",
                        url: "/api/file/upload",
                        data: formdata,
                        processData: false,
                        contentType: false,
                        success: function (res) {
                            $(".overlay").hide();
                            if (res.status == "200") {
                                var src = res.data.file_path;
                                _this.imgFiles.push(src);
                            } else {
                                alert("submit failed,please try again")
                            }
                        },
                        error: function (error) {
                            $(".overlay").hide();
                            alert("submit failed,please try again")
                        }
                    });
                }
            },
            sumitForm: function () {
                var _this = this;
                if (this.form.name == '') {
                    this.nameVery = false;
                    return false;
                } else {
                    this.nameVery = true;
                }
                if (this.form.email == '') {
                    this.emailVery = false;
                    return false;
                } else {
                    if (!this.checkEmail(this.form.email)) {
                        this.emailVery = false;
                        return false;
                    } else {
                        this.emailVery = true;
                    }
                }
                if (this.form.phone == '') {
                    this.phoneVery = false;
                    return false;
                } else {
                    this.phoneVery = true;
                }

                _this.form.options = JSON.stringify(_this.form.options);
                _this.form.docs = JSON.stringify(this.imgFiles);
                $(".overlay").show();
                $.ajax({
                    type: "post",
                    url: "/api/form/inquiry",
                    data: _this.form,
                    success: function (data) {
                        $(".overlay").hide();
                        if (data.status == "200") {
                            _this.formLoaded = true;
                        } else {
                            alert("submit failed,please try again")
                        }
                    },
                    error: function (error) {
                        $(".overlay").hide();
                    }
                });
            }
        }
    };
</script>
<style>
    .cms-page{
        border-radius: 5px;
    }
    .cms-page img {
        max-width: 100%;
        display: block;
        margin: auto;
    }
    .cms-page .mb-8 {
        padding-bottom: 3rem;
    }
    #contact-us-wrapper {
        position: fixed;
        right: -100%;
        top: 0;
        width: 100%;
        max-width: 550px;
        height: 100vh;
        transition: all .8s ease;
        visibility: visible;
        z-index: 9999;
        font-family: "Assistant", sans-serif;
    }
    .black-overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        z-index: 9998;
    }
    .form-active {
        right: 0 !important;
    }
    #custom_commit {
        width: 100%;
        outline: none;
        border: none;
        background: #ED6E62;
        line-height: 60px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .form-container {
        padding: 30px;
        max-height: calc(100% - 110px);

        background: #ffffff;
        overflow-y: auto;
    }

    .form-field {
        padding-bottom: 20px;;
    }

    .form-field > label {
        display: block;
        font-size: 16px;
        color: #42403d;
        font-weight: bolder;
        padding-bottom: 15px;
        margin: 0;
    }
    .form-input-text {
        line-height: 34px;
        width: 100%;
        border: 1px solid #dddddd;
    }

    .d-flex-cc {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: row wrap;
    }

    .d-flex-cc > div {
        width: 50%;
        padding-bottom: 10px;
    }

    .radio-txt {
        padding-left: 5px;
        color: #777;
    }

    #request_message::-webkit-input-placeholder {
        font-size: 16px;
        color: #777777;
    }

    #request_message::-moz-placeholder {
        font-size: 16px;
        color: #777777;
    }

    #request_message:-moz-placeholder {
        font-size: 16px;
        color: #777777;
    }

    #request_message:-ms-input-placeholder {
        font-size: 16px;
        color: #777777;
    }

    .order-up-img {
        margin: 0;
        padding: 0;
        text-align: center;
        color: #aaa;
    }

    .order-up-img > li {
        position: relative;
        margin: 5px 5px 0 0;
        padding: 0;
        list-style: none;
        float: left;
        width: 120px;
        height: 120px;
        border: 1px solid #aaa;
    }

    .order-up-img > li:first-child {
        margin-left: 0;
        cursor: pointer;
    }

    .add-img:hover {
        color: #222;
    }

    .addicon {
        font-size: 30px;
        position: absolute;
        width: 100%;
        top: 23%;
    }

    .uptateText {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
        width: 100%;
    }

    .clearfix:after {
        content: "\0020";
        display: block;
        height: 0;
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }

    .cms-page .pwidth {
        width: 118px;
        height: 118px;
    }

    .removeUpload {
        position: absolute;
        font-size: 25px;
        line-height: 20px;
        height: 22px;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .removeUpload:hover {
        font-size: 26px;
    }

    .remove-icon {
        font-size: 34px;
        float: right;
        padding: 0 20px;
        cursor: pointer;
    }

    .erroe-border {
        border-color: #ff0000 !important;
    }

    .step-tl {
        font-size: 76px;
        color: #E0957E;
        font-style: italic;
        font-family: auto;
    }

    .step-su {
        padding: 0 0 15px;
        font-size: 26px;
    }

    .f-c-c {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>