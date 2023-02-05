import { createRouter, createWebHistory } from 'vue-router';
// import store from '@/store';

const routes = [
  // {
  //   path: '/',
  //   name: 'auth',
  //   component: () => import('@/layouts/AuthGuard.vue'),
  //   meta: { requireAuth: true },
  //   children: [],
  // },
  // {
  //   path: '',
  //   name: 'home',
  //   meta: { requireAuth: false },
  //   component: () => import('@/views/HomeView.vue'),
  // },
  {
    path: '/signup',
    name: 'signup',
    meta: { requireAuth: false },
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    meta: { requireAuth: false },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/Dashboard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const isAuthenticated = store.getters['auth/isAuthenticated'];

//   if (to.matched.some((record) => record.meta.requiresAuth === true)) {
//     if (isAuthenticated) {
//       next();
//       return;
//     }
//     next('/login');
//     return;
//   }

//   if (to.matched.some((record) => record.meta.requiresAuth === false)) {
//     if (!isAuthenticated) {
//       next();
//       return;
//     }
//     next('/');
//     return;
//   }

//   next();
// });

export default router;
