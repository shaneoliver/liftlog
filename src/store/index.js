import Vue from 'vue';
import Vuex from 'vuex';
import settings from './settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
  },
  actions: {
  },
  modules: {
    settings,
  },
});
