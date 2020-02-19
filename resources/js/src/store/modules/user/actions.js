export default {
  fetchInfo({ commit }) {

    commit("CLEAR_INFO");

    return new Promise((resolve, reject) => {
      axios
        .get("/info")
        .then(response => {
          commit("SET_INFO", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
};
