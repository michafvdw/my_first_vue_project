import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Uniware from '../views/Uniware.vue'
import Todo from '../views/Todo.vue'
import Form from '../views/Form.vue'
import Api from '../views/Api.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uniware',
    name: 'Uniware',
    component: Uniware
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
