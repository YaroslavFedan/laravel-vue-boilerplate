
export default {
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
    context.commit("user/CLEAR_INFO");
  },
  async fetchExchangeRates() {
    //получаем курсы валют из приват-банка
    const result = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
    return await result.json();

  }
};
