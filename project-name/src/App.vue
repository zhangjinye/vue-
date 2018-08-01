<template>
  <div id="app">
    <!-- <v-index></v-index> -->
    <transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view :shopInfo="shopInfo" v-if="flag"></router-view>
			</keep-alive>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import Index from '@/components/index/index';
import Vant from 'vant';

Vue.use(Vant);
export default {
  data(){
    return{
        flag: false,
        shopInfo: Object
    }
  },
  created() {
    let that = this;
      that.$axios.get("http://119.23.132.106:97/api/wx/GetCateringShopUserModuleConfigdetailInfo",{
          params:{
              "key":'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1MTYwNDA2NiIsImlhdCI6MTUzMjkxODIyNSwianRpIjpmYWxzZSwib3BlbmlkIjoib2xMQzA1RE5tQmNIVzNqMEQyYU1ES090bXR3WSIsIm1lbWJlcmlkIjoiMzU2Nzc3ODYwIiwic3Zfc2hvcF91c2VyX2lkIjo4NDc2MX0.wPnuT_iwFzABVjBbdVNFTHmwXBy3wVD4Xxvn3WtUn3Q'
          }
      }).then(function(res){
          console.log(res);
          that.shopInfo = res.data.values;
          that.flag = true;
      });
  },
}

</script>

<style ref="stylesheet">
@import url('vant/lib/vant-css/index.css');
#app {
  font-family: 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  max-width: 11.04rem;
  margin: auto;
}
.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
