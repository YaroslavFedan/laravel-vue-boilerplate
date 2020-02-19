export default {
  async fetch({ commit }) {
    commit("CLEAR_EXCHANGE_DATA");
    //курс валют из приват-банка
    const result = await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
    );
    const data = await result.json();

    commit("SET_EXCHANGE_DATA", data);
  }
};
