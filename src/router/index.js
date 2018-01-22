import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import Header from '@/components/MyHeader'
import List from '@/components/MyList'
import Login from '@/components/Login'
import ProductList from '@/components/ProductList'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
	{
      path: '/header',
      name: 'header',
      component: Header
    },
	{
      path: '/list',
      name: 'list',
      component: List
    },
	{
      path: '/login',
      name: 'login',
      component: Login
    },
	{
      path: '/plist',
      name: 'plist',
      component: ProductList
    }
  ]
})
