import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default {
  namespaced: true,
  state: {
    token: Vue.$cookies.get("access_token") || null ,
  },
  getters:{
    loggedIn : state => !!state.token,
  },
  mutations:{
    RETRIEVE_TOKEN:(state, token) => {
      state.token = token;
    },
  },
  actions:{
    register({commit}, data){
      return new Promise((resolve, reject) => {
        axios
          .post("/register", data)
          .then(response => resolve(response))
          .catch(error => reject(error) )
      });
    },
    login({commit}, data) {

      return new Promise((resolve, reject) => {
        axios
          .post("/login", data)
          .then(response => {
            const access_token = response.data.access_token;
            Vue.$cookies.set("access_token", access_token);
            commit("RETRIEVE_TOKEN", access_token);
            resolve(response);
          })
          .catch(error => reject(error))
      });
    },
    logout(context){

      if(context.getters.loggedIn)
      {
        return new Promise((resolve, reject) => {
          axios
            .post("/logout")
            .then(response => {
              Vue.$cookies.remove("access_token");
              context.commit("RETRIEVE_TOKEN", null);
              resolve(response);
            })
            .catch(error => {
              context.commit("RETRIEVE_TOKEN", null);
              reject(error);
            });
        });
      }

      return context.getters.loggedIn;
    }
  }
}
