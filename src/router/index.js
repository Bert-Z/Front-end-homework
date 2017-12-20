import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import navbar from '@/components/navbar'
import welcome from '@/components/welcome'
import discover from '@/components/discover'
import user_page from '@/components/user_page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/user',
      name: 'user',
      component: user_page
    },
  ]
})
