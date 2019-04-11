import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import pricing from '@/components/pricing'
import about from '@/components/about'
import contact from '@/components/contact'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: home
    }
    ,{
      path: '/home',
      name: 'HOME',
      component: home
    }
    ,{
      path: '/pricing',
      name: 'Pricing',
      component: pricing
    }
    ,{
      path: '/about',
      name: 'About',
      component: about
    }
    ,{
      path: '/contact',
      name: 'Contact',
      component: contact
    },{
      path: "*",
      component: NotFoundPage
    }
  ]
})
