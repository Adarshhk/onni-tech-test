
import { createRouter, createWebHistory } from 'vue-router'
import Screener from '../components/Screener.vue'
import Payment from '../components/Payment.vue'
import PaymentLayout from '../layout/PaymentLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Screener
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentLayout
    }
  ],
})

export default router
