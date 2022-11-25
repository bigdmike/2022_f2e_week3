import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'stage_0',
    component: () =>
      import(/* webpackChunkName: "stage_zero" */ '../views/StageZero.vue'),
  },
  {
    path: '/stage/1',
    name: 'stage_1',
    component: () =>
      import(/* webpackChunkName: "stage_one" */ '../views/StageOne.vue'),
  },
  {
    path: '/stage/2',
    name: 'stage_2',
    component: () =>
      import(/* webpackChunkName: "stage_two" */ '../views/StageTwo.vue'),
  },
  {
    path: '/stage/3',
    name: 'stage_3',
    component: () =>
      import(/* webpackChunkName: "stage_three" */ '../views/StageThree.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/2022_f2e_week3/',
  routes,
});

router.beforeEach((to, from, next) => {
  const next_stage = to.name.split('_')[1];
  if (next_stage != store.state.stage) {
    next('/');
  } else {
    next();
  }
});

export default router;
