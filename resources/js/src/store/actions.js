import toast from "@/utils/toast.util";
import messages from "@/utils/messages";
import router from "@/router";

export default {
  setMessage({ commit }, payload) {
    const { type, code, ...options } = payload;
    const func = toast[type] || toast["success"];

    if (messages[code]) {
      const messageData = func(messages[code] || "", options);
      commit("UPDATE_MESSAGE", messageData);
    }
  },
  setLoading({ commit }, status) {
    commit("SET_LOADING", status);
  },
  setError({ commit, dispatch }, error) {
    const { data, status, statusText } = error.response;

    switch (status) {
      case 422:
        //error form validation
        commit("FORM_ERRORS", data.errors);
        break;
      case 401:
        // Unauthorized
        dispatch("setLoading", false);
        dispatch("clearData");
        dispatch("setMessage", { type: "error", code: status, timeOut: 10000 });
        router.push({ name: "login" }).catch(err => {});
        break;
      default:
        dispatch("setMessage", { type: "error", code: status, timeOut: 10000 });
    }
  },
  clearError({ commit }) {
    commit("FORM_ERRORS", []);
  },
  clearData(context) {
    // очищение всех данных после выхода из системы
    context.commit("auth/REMOVE_SECURITY_DATA");
    context.commit("user/CLEAR_PROFILE");
  }
};
