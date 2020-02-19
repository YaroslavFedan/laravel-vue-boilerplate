export default {
  UPDATE_MESSAGE: (state, data) => {
    state.message = {
      ...state.message,
      ...data
    };
  },
  FORM_ERRORS: (state, errors) => (state.formErrors = errors),
  SET_LOADING: (state, status) => (state.loading = status)
};
