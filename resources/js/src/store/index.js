import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueCookies from "vue-cookies";
import TodoModule from "./modules/todo";
import AuthModule from "./modules/auth";

Vue.use(Vuex);
Vue.use(VueCookies);

Vue.$cookies.config("1d");

axios.defaults.baseURL = "http://laravel-vue.test/api";
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
  modules: {
    todo: TodoModule,
    auth: AuthModule
  },
  state: {
    loading: false,
    notice: {
      timeout: 2000,
      show: false,
      text: "",
      color: "success",
      multiLine: true
    }
  },
  getters: {
    notice: state => state.notice,
    loading: state => state.loading
  },
  mutations: {
    UPDATE_NOTICE_MESSAGE: (state, data) => {
      state.notice.timeout = data.timeout || state.notice.timeout;
      state.notice.show = data.show || state.notice.show;
      state.notice.text = data.text || state.notice.text;
      state.notice.color = data.color || state.notice.color;
      state.notice.multiLine = data.multiLine || state.notice.multiLine;
    },
    SET_LOADING: (state, status) => {
      state.loading = status;
    }
  },
  actions: {
    updateNotice({ commit }, data) {
      commit("UPDATE_NOTICE_MESSAGE", data);
    },
    setLoading({ commit }, status) {
      commit("SET_LOADING", status);
    }
  }
});

export default store;
