import Vue from 'vue';

const SETTING_STORAGE_KEY = 'liftlog';

export default {
  namespaced: true,
  state: {
    unit: 'kg',
    roundingEnabled: false,
    roundingDirection: 'up',
    rest: 60,
    maxes: {
      squat: 200,
      bench: 100,
      deadlift: 220,
    },
  },
  getters: {},
  mutations: {
    updateSetting(state, { key, value }) {
      Vue.set(state, key, value);
    },
    updateMax(state, { key, value }) {
      Vue.set(state.maxes, key, value);
    },
  },
  actions: {
    saveSettings({ state }) {
      localStorage.setItem(SETTING_STORAGE_KEY, JSON.stringify(state));
    },
  },
};
