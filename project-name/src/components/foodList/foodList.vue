<template>
    <div>
        <div class="foods-wrapper">
            <ul>
                <li class="food-item" v-for='(item,index) in foodList' :key="index">
                    <div class="img-icon">
                        <img class="img" :lazy="item.icon" :src="item.icon" alt="">
                    </div>
                    <div class="food-info">
                        <p class="food-name">{{item.name}}</p>
                        <p class="food-number">月销量 {{item.salesNumber + index}}</p>
                        <div class="food-price">
                            <span class="price">¥ {{item.price + index}}</span>
                        </div>
                        <div class="cartcontrol-wrapper">
                            <span class="sharebtn sharebtn-add" @click.stop.prevent="addcart(index)"></span>
                            <span class="cart-number" v-show="item.number > 0">{{item.number}}</span>
                            <span class="sharebtn sharebtn-cut" v-show="item.number > 0" @click.stop.prevent="decreaseCart(index)"></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: "",
            foodList: [
                {
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/7a3bd60986083dd610f2be78b7cad330515363.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/8949bc69626cbe55637fc98ea98d2fac950261.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/db5378f64ac03268c32fb6fef02267b61468265.png',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/7a3bd60986083dd610f2be78b7cad330515363.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/8949bc69626cbe55637fc98ea98d2fac950261.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/db5378f64ac03268c32fb6fef02267b61468265.png',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/7a3bd60986083dd610f2be78b7cad330515363.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/8949bc69626cbe55637fc98ea98d2fac950261.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/db5378f64ac03268c32fb6fef02267b61468265.png',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/7a3bd60986083dd610f2be78b7cad330515363.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/8949bc69626cbe55637fc98ea98d2fac950261.jpg',
                    price: 100,
                    number: 0
                },{
                    name:"生鲜大花蟹",
                    salesNumber: 1,
                    icon: 'https://img.meituan.net/100.100.90/wmproductdwm/db5378f64ac03268c32fb6fef02267b61468265.png',
                    price: 100,
                    number: 0
                }
            ]
        }
    },
    methods: {
        addcart(index){
            this.foodList[index].number++;
            console.log(this.foodList);
        },
        decreaseCart(index){
            this.foodList[index].number--;
        }
    }
}
</script>

<style lang="less">
    .foods-wrapper{
        .food-item{
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            padding: .266667rem .4rem .4rem 0;
            position: relative;
            .img-icon{
                width: 1.866667rem;
                height: 1.866667rem;
                .img{
                    width: 100%;
                    height: 100%;
                }
            }
            .food-name{
                padding-bottom: .133333rem;
            }
            .food-info{
                flex: 1;
                padding-left: .266667rem;
                font-size: 16px;
                color: #000;
            }
            .food-number{
                font-size: 12px;
                color: #999;
                padding-bottom: .133333rem;
            }
            .food-price{
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                flex-direction: column-reverse;
                .price{
                   
                   color: #f01414;
                }
            }
            .cartcontrol-wrapper{
                position: absolute;
                width: 2.133333rem;
                height: .746667rem;
                right: .4rem;
                bottom: .533333rem;
                display: flex;
                line-height: .746667rem;
                color: #666;
                flex-direction: row-reverse;
                .sharebtn{
                    display:inline-block;
                    width: 30px;
                    height: 30px;
                }
                .cart-number{
                    width: 20px;
                    text-align: center;
                }
                .sharebtn-add{
                    background: url(../../images/addbg.png) no-repeat center/ 100%;;
                }
                .sharebtn-cut{
                    background: url(../../images/cutbg.png) no-repeat center/ 100%;
                }
            }
        }
    }
    .food-item::after{
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

