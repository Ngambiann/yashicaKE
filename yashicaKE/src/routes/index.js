import {createRouter,createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Cameras from "./../components/Cameras.vue"
//import Cart from "./../components/Cart.vue"
import Contactus from "./../components/Contactus.vue"
import Aboutus from "./../components/Aboutus.vue"


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
        path: '/Cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: '/Contactus',
        name: 'Contactus',
        component: Contactus,
      },
      
      {
        path: '/Aboutus',
        name: 'AboutUs',
        component: Aboutus,
      },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router