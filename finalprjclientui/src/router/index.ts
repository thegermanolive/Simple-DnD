import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import SpellsView from '@/views/SpellsView.vue';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/Home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Spells',
    name: 'Spells',
    component: SpellsView,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
