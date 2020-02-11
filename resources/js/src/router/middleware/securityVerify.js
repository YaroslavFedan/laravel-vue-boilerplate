// этот путь требует пройти Google Two Factor Authentication
// если нет временного токена и не вошел в систему - перенаправляем на страницу логина
// если авторизован - в кабинет
export default function securityVerify({ next, store }) {
  if (
    !store.getters["auth/loggedIn"] &&
    !store.getters["auth/securityIsEnabled"]
  ) {
    return next({
      name: "login"
    });
  } else if (store.getters["auth/loggedIn"]) {
    return next({
      name: "home"
    });
  }

  return next();
}
