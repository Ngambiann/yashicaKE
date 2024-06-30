import {createRouter,createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Cameras from "./../components/Cameras.vue"
import cart from "./../components/cart.vue"
import ContactUs from "./../components/Contactus.vue"
import AboutUs from "./../components/Aboutus.vue"

const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/Cameras',
        name: 'Cameras',
        component: Cameras,
      },
      {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
      },
      {
        path: '/cart',
        name: 'cart',
        component: cart,
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
      },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router