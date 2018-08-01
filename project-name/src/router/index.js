import Vue from 'vue'
import index from '@/components/index/index'//首页的引入
import foodmenu from '@/components/menu/foodMenu'//菜品列表

export default  [
    {
      path: '',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: "/foodmenu",
      name: 'foodmenu',
      component: foodmenu
    }
  ];



