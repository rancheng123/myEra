<template>

    <div class="homeModule">



        <title-bar a="11" b="22" title="555">
            <template slot='titleBarSlot'>
                <div class="flex-child1">
                    <City id="home-city" :cityOpts="cityOpts"></City>
                </div>

                <div class="flex-child1 title">钱夹</div>

                <div class="flex-child1 controllBtn " @click="switchCity">
                    navBar
                </div>
            </template>

        </title-bar>





        <section class="financeList">
            <div class="viewListWrap" style="height: 1080px;">
                <div class="carouselWrap">
                    <div class="slider am-carousel"
                         style="position: relative; display: block; width: 100%; height: auto; box-sizing: border-box; visibility: visible;">
                        <div class="slider-frame"
                             style="position: relative; display: block; overflow: hidden; height: auto; margin: 0px; padding: 0px; transform: translate3d(0px, 0px, 0px); box-sizing: border-box;">
                            <ul class="slider-list"
                                style="transform: translate3d(-321px, 0px, 0px); position: relative; display: block; margin: 0px; padding: 0px; height: 150px; width: 963px; cursor: inherit; box-sizing: border-box;">
                                <li class="slider-slide"
                                    style="position: absolute; left: 0px; top: 0px; display: inline-block; list-style-type: none; vertical-align: top; width: 321px; height: auto; box-sizing: border-box; margin: auto 0px;">
                                    <div><img class="slider-item"
                                              src="http://192.168.0.44:8083/userfiles/1/images/headAd/2018/04/IMG_2624.PNG"
                                              alt=""></div>
                                </li>
                                <li class="slider-slide"
                                    style="position: absolute; left: 321px; top: 0px; display: inline-block; list-style-type: none; vertical-align: top; width: 321px; height: auto; box-sizing: border-box; margin: auto 0px;">
                                    <div><img class="slider-item"
                                              src="http://192.168.0.44:8083/userfiles/1/images/headAd/2018/02/IMG_2627.PNG"
                                              alt=""></div>
                                </li>
                                <li class="slider-slide"
                                    style="position: absolute; left: 642px; top: 0px; display: inline-block; list-style-type: none; vertical-align: top; width: 321px; height: auto; box-sizing: border-box; margin: auto 0px;">
                                    <div><img class="slider-item"
                                              src="http://192.168.0.44:8083/userfiles/1/images/headAd/2018/02/ChMkJ1bKwiGIRAmBACdIYdRtDNUAALGjQHTmccAJ0h5960.jpg"
                                              alt=""></div>
                                </li>
                            </ul>
                        </div>
                        <div class="slider-decorator-0"
                             style="position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%);">
                            <div class="am-carousel-wrap">
                                <div class="am-carousel-wrap-dot"><span></span></div>
                                <div class="am-carousel-wrap-dot am-carousel-wrap-dot-active"><span></span></div>
                                <div class="am-carousel-wrap-dot"><span></span></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="proclaim flex-father">
                    <div class="proclaimIcon"></div>
                    <div style="width: 5.7rem;">
                        <div class="slider am-carousel am-carousel-vertical"
                             style="position: relative; display: block; width: 100%; height: auto; box-sizing: border-box; visibility: visible;">
                            <div class="slider-frame"
                                 style="position: relative; display: block; overflow: hidden; height: 30px; margin: 0px; padding: 0px; transform: translate3d(0px, 0px, 0px); box-sizing: border-box;">
                                <ul class="slider-list"
                                    style="transform: translate3d(0px, -30px, 0px); position: relative; display: block; margin: 0px; padding: 0px; height: 270px; width: auto; cursor: inherit; box-sizing: border-box;">
                                    <li class="slider-slide"
                                        style="position: absolute; left: 0px; top: 0px; display: block; list-style-type: none; vertical-align: top; width: 100%; height: auto; box-sizing: border-box; margin: 0px auto;">
                                        <div class="proclaimItem">还款日期调整公告</div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="toProclaimList"></div>
                </div>

                <Avatar icon="person" size="large" />

                <div class="viewListItem" v-for="(ele,i) in costProductList">
                    <div class="financeItem">
                        <img src="http://192.168.0.44:8083/userfiles/1/images/costproduct/2018/06/IMG_2624.PNG" class="financeImg" alt="">
                        <div class="financeTitle">{{ele.productTitle}}</div>
                        <div class="item_desc flex-father">
                            <div class="item_desc_item flex-child1 item_desc_item1">
                                <div class="item_desc_item_value">
                                    <span style="position: relative;">
                                        <span class="percentNum">{{ele.financingAnnualYield}}</span>
                                        <span class="percentHao">
                                            <span style="color: rgb(245, 74, 75);">

                                                <span style="color:#f54a4b" v-if="ele.productActivityType == 1 ||ele.productActivityType == 3">
                                                    +{{ele.productActivityProportion}}
                                                </span>
                                                %
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div class="item_desc_item_name">预期年化回报率</div>
                            </div>
                            <div class="item_desc_item flex-child1 item_desc_item2" style="visibility: visible;">
                                <div class="item_desc_item_value"><span class="percentHao"
                                                                        style="color: rgb(153, 153, 153);">+</span><span
                                        class="percentNum">10.00</span><span class="percentHao">%</span></div>
                                <div class="item_desc_item_name">送年化哔咯余额</div>
                            </div>
                            <div class="item_desc_item flex-child1 item_desc_item3">
                                <div class="item_desc_item_value">
                                    <div class="pt10"><span class="ft40">90</span><span class="grayDay">天</span></div>
                                </div>
                                <div class="item_desc_item_name">项目期限</div>
                            </div>
                        </div>
                        <div class="item-progress">
                            <div class="item-progress-inner" style="width: 49.1%;"></div>
                        </div>
                        <div class="item-ketou flex-father">
                            <div class="flex-child1" style="font-size: 0.2rem;">已投49.1%</div>
                            <div style="font-size: 0.2rem;">
                                可投金额 137元
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ul></ul>
        </section>


    </div>


</template>

<script>
    import './home.scss'
    import titleBar from '../../module/titleBar/titleBar.vue';
    import City from '../../module/city/city.vue';

    import Vue from 'vue';

    import { Button, Table,Avatar } from 'iview';
    Vue.component('Button', Button);
    Vue.component('Table', Table);
    Vue.component('Avatar', Avatar);


    export default {
        data(){
            var that = this;
            return {
                name: '主页',
                costProductList: [],
                logo: require('../gift.jpg'),
                cityOpts: {
                    jumpTo: "/home",
                    positionCityCallback: ()=>{

                        //debugger

                        /*that.getHeadList();


                        // 获取加息标识位
                        Utils.requestData2({
                            requestArr:  [{
                                url: config.api +"qj/front/v2/user/getAddYield",
                                method: 'post',
                                data: {
                                    "memberId": Utils.Storage.get('user').memberId
                                }
                            }],
                            callback: function(dataArr){
                                var getAddYield = dataArr[0];
                                if(getAddYield.resultCode == 0){
                                    if(getAddYield.data.addYield != 0){
                                        that.state.AddYieldObj.isAlertShow = true;
                                    }
                                    that.state.AddYieldObj.data = getAddYield.data;
                                    componentStore.update(that,that.state);


                                    that.getProductList();

                                }
                            },
                            errorAlert: function(data){
                                //用户登录失败(token失效引起)，调至登录页面
                                if(data[0].resultCode == '20001'){

                                    that.getProductList();
                                    //传递捕捉信号  给捕捉器
                                    this.errorAlert.jail = true;
                                }
                            }

                        });*/
                    }
                }
            }
        },
        components: {
            titleBar,
            City,
            Avatar
        },
        methods:{
            toLogin(){

                this.$router.push({
                    name: 'login'
                });
            },
            positionCityCallback(){


                that.getHeadList();


                // 获取加息标识位
                Utils.requestData2({
                    requestArr:  [{
                        url: config.api +"qj/front/v2/user/getAddYield",
                        method: 'post',
                        data: {
                            "memberId": Utils.Storage.get('user').memberId
                        }
                    }],
                    callback: function(dataArr){
                        var getAddYield = dataArr[0];
                        if(getAddYield.resultCode == 0){
                            if(getAddYield.data.addYield != 0){
                                that.state.AddYieldObj.isAlertShow = true;
                            }
                            that.state.AddYieldObj.data = getAddYield.data;
                            componentStore.update(that,that.state);


                            that.getProductList();

                        }
                    },
                    errorAlert: function(data){
                        //用户登录失败(token失效引起)，调至登录页面
                        if(data[0].resultCode == '20001'){

                            that.getProductList();
                            //传递捕捉信号  给捕捉器
                            this.errorAlert.jail = true;
                        }
                    }

                });
            },
            switchCity(){
                componentStore.update('home-city',{
                    currentCity: '222222'
                });
            }
        },

        mounted () {

            var that = this;
            // 存储 start
            componentStore.set(this);
            // 存储 end

            Utils.requestData({
                    url: "http://192.168.0.44:8083/qj/front/v2/product/getProductList",
                    method: 'post',
                    data: {"pn":1,"pageSize":"10","recommendedFilter":"1","projectOrder":"1","productCity":"北京市"},
                    callback: function(data){
                        if(data.resultCode == 0){


                            that.costProductList = data.data.costProductList
                        }
                    }
                });



        }

    }
</script>
