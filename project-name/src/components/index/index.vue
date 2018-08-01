<template>
    <div>
        <div class="swiper-index">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img class="img" :src="image" alt="" srcset="">
                </van-swipe-item>
            </van-swipe>
            <div class="storeInfo">
                <div class="stroeLogo">
                    <img src="../../images/img1.png" alt="">
                </div>
                <div class="storeText">
                    <div class="info">
                        <p class="name">{{shopInfo.shopInfo.sv_us_name}}</p>
                        <van-notice-bar
                        :text="shopInfo.shopInfo.sv_shop_notice"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-list">
            <van-row type="flex" justify="space-between">
                <van-col span="6">
                    <router-link to="/foodmenu">
                        <img class="list-icon" src="../../images/i0.png" alt="" srcset="">
                        <p>点餐</p>
                    </router-link>
                </van-col>
                <van-col span="6">
                    <router-link to="/foodmenu">
                        <img class="list-icon" src="../../images/i1.png" alt="" srcset="">
                        <p>外卖</p>
                    </router-link>
                </van-col>
                <van-col span="6">
                    <img class="list-icon" src="../../images/i4.png" alt="" srcset="">
                    <p>优惠券</p>
                </van-col>
            </van-row>
        </div>
        <div class="merchant-info">
            <h1 class="title">商家信息</h1>
            <div class="van-hairline--bottom"></div>
            <ul class="list-item-box">
                <li class="list-item bottom-border paddingRight60">
                    <div class="left-text">
                        <span>营业时间</span>
                    </div>
                    <div class="info">
                        <span>{{jsonParse(shopInfo.beginDate).beginDate}}-{{jsonParse(shopInfo.beginDate).endDate}}</span>
                        <!-- <span>{{jsonParse(seller.centerDate).beginDate}}-{{jsonParse(seller.centerDate).endDate}}</span> -->
                        <span>{{jsonParse(shopInfo.nightDate).beginDate}}-{{jsonParse(shopInfo.nightDate).endDate}}</span>
                    </div>
                    <div class="open">营业中</div>
                </li>
                <li class="list-item bottom-border">
                    <div class="left-text">
                        <span>商家电话</span>
                    </div>
                    <div class="info">
                        <span>{{shopInfo.shopInfo.sv_us_phone || '020-88888888'}}</span>
                    </div>
                </li>
                <li class="list-item">
                    <div class="left-text">
                        <span>商家地址</span>
                    </div>
                    <div class="info">
                        <span>{{shopInfo.shopInfo.address}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            shopInfo: {}
        },
        //生命周期--在实例创建完成后被立即调用。
        data() {
            return {
                images:[
                    'http://pic.qiantucdn.com/58pic/27/03/42/53B58PIC8VN_1024.jpg!qtwebp324',
                    'http://pic.qiantucdn.com/58pic/28/52/12/95S58PICy558PICJvshZ6rCJ6_PIC2018.jpg!qtwebp324',
                    'http://pic.qiantucdn.com/58pic/13/56/79/76f58PICram_1024.jpg!qtwebp324'
                ]
            }
        },
        created() {
            
        },
        //计算属性
        computed: {
            
        },
        //方法
        methods:{
            jsonParse(jsonStr){
                return JSON.parse(jsonStr);
            },
        }
    }
</script>

<style <style lang="less">
@import url("../../../static/css/base.less");
    .swiper-index{
        position: relative;
        width: 100%;
        height: 5.6rem;
        background-color: #fff;
        .img{
            width: 100%;
            height: 4.8rem;
        }
        .storeInfo{
            width: 90%;
            margin: auto;
            left: 0;
            right: 0;
            height: 2.133333rem;
            border-radius: .16rem;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            z-index: 999999;
            box-shadow: 0px 0px 9px rgba(70,100,230,0.27);
            display: flex;
            display: -webkit-flex;
            display: -webkit-box;
        }
        .stroeLogo{
            width: 1.6rem;
            height: 2.133333rem;
            border-radius: 50%;
            padding: .266667rem;
            img{
                width: 1.6rem;
                height: 1.6rem;
                display: block;
                margin-right: .4rem;
            }
        }
        .storeText{
            font-size: @fontSize14;
            flex: 1;
            min-width: 5.333333rem;
            .info{
                padding: .2333333rem;
            }
            .name{
                padding-top: .266667rem;
                width: 100%;
            }
            .van-notice-bar{
                background-color: #fff;
                padding-left: 0;
                padding-top: 0;
                padding-right: 0;
                padding-bottom: 0;
                line-height: .746667rem;
                width: 100%;
            }
            .van-notice-bar__wrap{
                height: .746667rem
            }
        }
    }
    .menu-list{
        padding: .533333rem .4rem .4rem .4rem;
        background-color: #fff;
        margin-bottom: .266667rem;
        .list-icon{
            display: block;
            width: 1.28rem;
            margin: auto;
        }
        p{
            font-size: @fontSize14;
            text-align: center;
            color: #666;
        }
    }
    .merchant-info{
        background-color: #fff;
        .title{
            font-size: 20px;
            padding: .4rem;
        }
    }
    .list-item{
        padding: .4rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: relative;
        .left-text{
            width: 2.133333rem;
            font-size: @fontSize14;
            color: #999;
        }
        .info{
            flex: 1;
            font-size: @fontSize14;
        }
        .open{
            width: 1.6rem;
            height: .746667rem;
            border-radius: .08rem;
            background-color: #f60;
            color: #fff;
            position: absolute;
            right: .4rem;
            top: 0;
            bottom: 0;
            margin: auto;
            line-height: .746667rem;
            text-align: center;
        }
    }
    .paddingRight60{
        padding-right: 2rem;
    }
    .bottom-border::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 200%;
        height: 1px;
        -webkit-transform: scale(.5);
        transform: scale(.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        pointer-events: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
    }
</style>

