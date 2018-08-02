import Vue from 'vue'
import index from '@/components/index/index'//首页的引入
import foodmenu from '@/components/menu/foodMenu'//菜品列表
import desk from '@/components/openDesk/desk'//开台页面

export default  [
    {
      path: '',
      name: 'index',
      component: index
    },
    // {
    //   path: '/desk',
    //   name: 'desk',
    //   component: desk
    // },
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



