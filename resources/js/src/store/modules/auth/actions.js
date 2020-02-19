export default {
  register({ dispatch }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/register", data)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  },
  login({ commit, dispatch }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/login", data)
        .then(response => {
          // сохраняем access_token во временном токене
          commit("SET_TEMP_TOKEN", response.data.access_token);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  authorize(context) {
    // сохраняем токен авторизации, удаляем временный токен
    Vue.$cookies.set("access_token", context.getters.tempToken);
    context.commit("RETRIEVE_TOKEN", context.getters.tempToken);
    context.commit("SET_TEMP_TOKEN", null);
  },
  logout(context) {
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios
          .post("/logout")
          .then(response => {
            // очистка всех сохраненных данных пользователя
            context.dispatch("clearData", null, { root: true });
            resolve(response);
          })
          .catch(error => {
            context.commit("RETRIEVE_TOKEN", null);
            reject(error);
          });
      });
    }

    return context.getters.loggedIn;
  },
  security(context) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${context.state.tempToken}`;
      axios
        .get("/security")
        .then(response => {
          context.commit("SET_SECURITY_DATA", response.data);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  securityVerify(context, data) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${context.state.tempToken}`;
      axios
        .post("/security", { code: data })
        .then(response => {
          context.commit("SET_SECURITY_DATA", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  toggleSecurity(context, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch("/security", { code: data })
        .then(response => {
          context.commit("SET_SECURITY_DATA", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
