import Vue from 'vue';
import Router from 'vue-router';
import Routes from '@/routes/routes.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: Routes
});

router.beforeEach((to, from, next) => {
  return null;
});

router.afterEach((to, from, next) => {
  return null;
});
