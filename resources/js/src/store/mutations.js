export default {
  UPDATE_MESSAGE: (state, data) => {
    state.message = {
      ...state.message,
      ...data
    };
  },
  SET_LOADING: (state, status) => {
    state.loading = status;
  }
};
