import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default ()=>({
  token: Vue.$cookies.get("access_token") || null,
  tempToken: null,
  security: {
    google2fa_enable: null,
    google2fa_url: ""
  }
})
