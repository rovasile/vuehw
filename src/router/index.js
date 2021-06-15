import { createRouter, createWebHistory } from 'vue-router'
import Items from '../views/Items.vue'
import ShoppingList from '../views/ShoppingList.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Items
    },
    {
      path: '/ShoppingList',
      component: ShoppingList
    }
  ]
})

export default router