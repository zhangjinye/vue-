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
import {api,key} from '@/https/https.js';

Vue.use(Vant);
export default {
  data(){
    return{
        flag: false,
        shopInfo: Object
    }
  },
  created() {
    console.log(11);
    let that = this;
      that.$axios.get(api + "/wx/GetCateringShopUserModuleConfigdetailInfo",{
          params:{
              "key": key
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
a:focus,a:hover{
  text-decoration: none;
}
</style>
