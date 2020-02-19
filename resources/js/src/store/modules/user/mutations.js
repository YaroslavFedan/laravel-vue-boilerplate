export default {
  SET_INFO: (state, payload) => {
    state.info = {
      ...state.info,
      ...payload
    };
  },
  CLEAR_INFO: state => (state.info = {})
};
