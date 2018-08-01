<template>
    <div>
        <van-badge-group :active-key="activeKey">
            <van-badge v-for="(item,index) in menuList" :title='item.name' :info="item.number" :key="index" @click="onClick" />
        </van-badge-group>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
    export default {
        created(){

        },
        data(){
            return {
                activeKey: 0,
                menuList: [{
                    "name": "海鲜",
                    "number": ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: 6
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: 5
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                },{
                    name: "海鲜",
                    number: ""
                }]
            }
        },
        methods: {
            onClick(key){
                this.activeKey = key;
            }
        }
    }
</script>
<style lang="less">

</style>
