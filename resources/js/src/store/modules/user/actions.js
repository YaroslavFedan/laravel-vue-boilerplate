export default {
  fetchInfo({ commit }) {
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
