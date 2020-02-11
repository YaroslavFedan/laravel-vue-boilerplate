import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueCookies from "vue-cookies";

import auth from "./auth";


Vue.use(Vuex);
Vue.use(VueCookies);
Vue.$cookies.config("1d");

axios.defaults.baseURL = document.head.querySelector('meta[name="api-base-url"]').content;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.interceptors.request.use(
  config => {
    let token = Vue.$cookies.get("access_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth
  },
  state: {
    loading: false,
    message: {
      title: null,
      message: null,
      type: "success"
    }
  },
  getters: {
    message: state => state.message,
    loading: state => state.loading
  },
  mutations: {
    UPDATE_MESSAGE: (state, data) => {
      state.message = {
        ...state.message,
        ...data
      };
    },
    SET_LOADING: (state, status) => {
      state.loading = status;
    }
  },
  actions: {
    setMessage({ commit }, data) {
      const colors = {
        success: "#4caf50",
        info: "#2196f3",
        warning: "#FFC107",
        error: "#F44336"
      };
      data.color = colors[data.type];
      commit("UPDATE_MESSAGE", data);
    },
    setLoading({ commit }, status) {
      commit("SET_LOADING", status);
    },
    clearData(context) {
      // очищение всех данных после выхода из системы
      context.commit("auth/REMOVE_SECURITY_DATA");
    }
  }
});

export default store;
