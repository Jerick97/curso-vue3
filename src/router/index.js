import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/TheContador.vue'),
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/TheContador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaTareas',
      component: () => import('../components/ListaTareas.vue'),
    },
  ],
})

export default router
