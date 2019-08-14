import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/show-blogs',
      name: 'show-blogs',
      component: () => import(/* webpackChunkName: "show-blogs" */ './views/ShowBlogs.vue')
    },
    {
      path: '/blog-header',
      name: 'blog-header',
      component: () => import(/* webpackChunkName: "blog-header" */ './views/BlogHeader.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog-header" */ './views/SingleBlog.vue')
    },
    {
      path: '/edit/:id',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog-header" */ './views/EditBlog.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "blog-header" */ './views/Demo.vue')
    }
  ]
})
