
// Lib imports
import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import "@/axios";

// Store functionality
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex);
Vue.use(VueCookies);
Vue.$cookies.config("1d");


const store = new Vuex.Store({
  strict: true,
  actions,
  getters,
  modules,
  mutations,
  state
});

export default store;
