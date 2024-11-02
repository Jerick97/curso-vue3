import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../modules/contador/components/TheContador.vue'),
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/TheContador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaTareas',
      component: () =>
        import('../modules/listaDeTareas/components/ListaTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    },
  ],
})

export default router
