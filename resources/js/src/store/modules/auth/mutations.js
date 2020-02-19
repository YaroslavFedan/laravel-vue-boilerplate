export default {
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
};
