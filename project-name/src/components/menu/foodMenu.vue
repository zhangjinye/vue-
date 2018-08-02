<template>
    <div>
        <div class="content">
            <!-- 搜索 -->
            <div class="search">
                <!-- 搜索栏 -->
                <van-nav-bar
                title="点菜"
                left-text="返回"
                :right-text="showSearch ? '关闭搜索':'搜索菜品'"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
                />
                <div class="search-box" v-show="showSearch">
                    <van-search
                        v-model="value"
                        show-action
                        @search="onSearch"
                        placeholder="输入您想要查找的菜品哦~"
                        >
                        <div slot="action" @click="onSearch">搜索</div>
                    </van-search>
                </div>
            </div>
            <!-- 菜单 -->
            <div class="menu-content">
                <div class="listMenu" :class="showSearch ? 'listMenupaddingtop':''">
                    <menu-list></menu-list>
                </div>
                <div class="foodlist" :class="showSearch ? 'foodlistPaddingtop':''">
                    <div class="food-menu-name">海鲜</div>
                    <food-list></food-list>
                </div>
            </div>
            <!-- 购物车列表 -->
            <div class="cart">
                <van-row type="flex">
                    <van-col class="cart-info" span="18">
                        <div class="van-hairline--top"></div>
                        <div class="info">
                            <img class="icon" src="../../images/cc2.png" alt="" srcset="">
                            <span class="cart-number">1</span>
                            <span class="totalPrice">¥500.00</span>
                        </div>
                    </van-col>
                    <van-col class="settlement" span="6">选好了</van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>
<script>
import menuList from '@/components/menuList/menuList';
import foodList from '@/components/foodList/foodList';
import {api,key} from '@/https/https.js';
export default {
    created() {
        this.getProductCategoryList();
    },
    data(){
        return{
            value: "",
            showSearch: false
        }
    },
    components:{
        menuList,
        foodList
    },
    methods: {
        onSearch(){
            
        },
        //返回
        onClickLeft() {
            let that = this;
            that.$router.push("/index");
        },
        //搜索
        onClickRight() {
            this.showSearch = !this.showSearch;
        },
        //获取菜品分类列表
        getProductCategoryList(){
            let that = this;
            that.$axios.get( api+ "/wx/GetProductCategoryList",{
                params:{
                    "key":key
                }
            }).then(function(res){
                console.log(res);
            })
        },
    }
}
</script>

<style lang="less">
@import url("../../../static/css/base.less");
.content{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.search{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    .van-search{
        padding: .16rem .4rem;
    }
    .van-search__action{
        padding-left: .266667rem;
    }
}
.menu-content{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    height: 100%;
}
.listMenu{
    padding-top: 1.226667rem;
    width: 85px;
    height: 100%;
    overflow-y: auto;
    .van-badge-group{
        padding-bottom: 3.666667rem;
    }
}
.listMenupaddingtop{
    padding-top: 2.226667rem;
}
.foodlist{
    flex: 1;
    padding-top: 1.226667rem;
    padding-left: .266667rem;
    overflow-y: auto;
    padding-bottom: 1.333333rem;
    .food-menu-name{
        font-size: @fontSize14;
        padding: .266667rem 0;
    }
}
.foodlistPaddingtop{
    padding-top: 2.226667rem;
}
.cart{
    width: 100%;
    height: 1.333333rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 999;
    line-height: 1.333333rem;
    .settlement{
        text-align: center;
        font-size: @fontSize16;
        background-color: #0097ff;
        color: #fff;
    }
}
.cart-info{

    .info{
        padding: 0 .4rem 0 1.28rem;
        position: relative;
    }
    .cart-number{
        width: .533333rem;
        height: .533333rem;
        border-radius: 50%;
        background-color: #ff5c00;
        text-align: center;
        line-height: .533333rem;
        font-size: 12px;
        position: absolute;
        left: 1rem;
        top: .08rem;
        color: #fff;
    }
    .icon{
        width: .8rem;
        vertical-align: middle;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: .4rem;
    }
    .totalPrice{
        font-size: 20px;
        color: #ff5c00;
        padding-left: .533333rem;
    }
}
</style>

