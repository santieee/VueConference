import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      lang: false
    },
    mutations: {
      changeLang(state) {
        state.lang = !state.lang;
      }
    }
})