import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default {
  namespaced: true,
  state: {
    token: Vue.$cookies.get("access_token") || null,
    tempToken: null,
    security: {
      google2fa_enable: null,
      google2fa_url: ""
    }
  },
  getters: {
    loggedIn: state => !!state.token,
    tempToken: state => state.tempToken,
    securityIsEnabled: state => !!state.security.google2fa_enable,
    qrCode: state => state.security.google2fa_url
  },
  mutations: {
    RETRIEVE_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_TEMP_TOKEN: (state, token) => {
      state.tempToken = token;
    },
    SET_SECURITY_DATA: (state, payload) => {
      state.security = { ...state.security, ...payload };
    },
    REMOVE_SECURITY_DATA: (state, payload) => {
      Vue.$cookies.remove("access_token");
      state.token = null;

      state.security = {};
    }
  },
  actions: {
    register({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("/register", data)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    },
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("/login", data)
          .then(response => {
            // сохраняем access_token во временном токене
            commit("SET_TEMP_TOKEN", response.data.access_token);
            resolve(response);
          })
          .catch(error => reject(error));
      });
    },
    authorize(context) {
      // сохраняем токен авторизации, удаляем временный токен
      Vue.$cookies.set("access_token", context.getters.tempToken);
      context.commit("RETRIEVE_TOKEN", context.getters.tempToken);
      context.commit("SET_TEMP_TOKEN", null);
    },
    logout(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post("/logout")
            .then(response => {
              // очистка всех сохраненных данных пользователя
              context.dispatch("clearData", null, { root: true });
              resolve(response);
            })
            .catch(error => {
              context.commit("RETRIEVE_TOKEN", null);
              reject(error);
            });
        });
      }

      return context.getters.loggedIn;
    },
    security(context) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers[
          "Authorization"
        ] = `Bearer ${context.state.tempToken}`;
        axios
          .get("/security")
          .then(response => {
            context.commit("SET_SECURITY_DATA", response.data);
            resolve(response);
          })
          .catch(error => reject(error));
      });
    },
    securityVerify(context, data) {
      return new Promise((resolve, reject) => {
        axios.defaults.headers[
          "Authorization"
        ] = `Bearer ${context.state.tempToken}`;
        axios
          .post("/security", { code: data })
          .then(response => {
            context.commit("SET_SECURITY_DATA", response.data);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    toggleSecurity(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .patch("/security", { code: data })
          .then(response => {
            context.commit("SET_SECURITY_DATA", response.data);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
