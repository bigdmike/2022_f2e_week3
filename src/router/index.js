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
    path: '/stage/4',
    name: 'stage_4',
    component: () =>
      import(/* webpackChunkName: "stage_four" */ '../views/StageFour.vue'),
  },
  {
    path: '/stage/finish',
    name: 'stage_finish',
    component: () =>
      import(/* webpackChunkName: "stage_finish" */ '../views/StageFinish.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: '/2022_f2e_week3/',
  routes,
});

router.beforeEach((to, from, next) => {
  const next_stage = to.name.split('_')[1];
  if (
    next_stage != store.state.stage &&
    next_stage != 'finish' &&
    next_stage != 0
  ) {
    next('/');
  } else {
    next();
  }
});

export default router;
