export default {
  SET_EXCHANGE_DATA: (state, payload) => {
    state.exchange = payload
      .map(item => {
        if (item.ccy === "RUR") item.ccy = "RUB";

        return item;
      })
      .filter(item => state.currencies.includes(item.ccy));
  },
  CLEAR_EXCHANGE_DATA: (state) => (state.exchange = []),
  SET_EXCHANGE_ERROR: (state, status) => (state.error = status)
};
