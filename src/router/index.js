import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Mine = () => import('views/mine/Mine.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/mine',
    component: Mine
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router