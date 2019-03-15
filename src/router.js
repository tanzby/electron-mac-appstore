import Vue from 'vue'
import Router from 'vue-router'
import Discover from './views/Discover.vue'
import Create from './views/Create.vue'
import Develop from './views/Develop.vue'
import Play from './views/Play.vue'
import Work from './views/Work.vue'
import Categories from './views/Categories.vue'
import Updates from './views/Updates.vue'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/develop',
      name: 'develop',
      component: Develop
    },
    {
      path: '/updates',
      name: 'updates',
      component: Updates
    },
    {
      path: '/profile',
      name: 'profile',
      component: ()=>import('./views/Profile.vue')
    },
    {
      path: '/story',
      name: 'story',
      props: true,
      component: ()=>import('./views/Story.vue')
    },
    {
      path: '/product',
      name: 'product',
      props: true,
      component: ()=>import('./views/Product.vue')
    }
  ]
})
