export default {
  fetchProfile({ commit }) {
    commit("CLEAR_PROFILE");

    return new Promise((resolve, reject) => {
      axios
        .get("/profile")
        .then(response => {
          commit("SET_PROFILE", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  editProfile({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch("/profile", data)
        .then(response => {
          commit("SET_PROFILE", response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  changePassword({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch("/changePassword", data)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  setAvatar({ commit }, data) {
    commit("SET_AVATAR", data);
  }
};
