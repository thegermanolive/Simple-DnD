import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import SpellsView from '@/views/SpellsView.vue';
import HomeView from '@/views/HomeView.vue';
import MonsterView from '@/views/MonsterView.vue';
import DMLoginView from '@/views/DMLoginView.vue';
import Bookmarks from '@/views/BookmarkView.vue';
import UnAuthorized from '@/views/UnAuthorizedView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Spells',
    name: 'Spells',
    component: SpellsView,
  },
  {
    path: '/Monsters',
    name: 'Monsters',
    component: MonsterView,
  },
  {
    path: '/DM-Login',
    name: 'DM-Login',
    component: DMLoginView,
  },
  {
    path: '/Bookmarks',
    name: 'Bookmarks',
    component: Bookmarks,
  },
  {
    path: '/UnAuthorized',
    name: 'UnAuthorized',
    component: UnAuthorized,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
