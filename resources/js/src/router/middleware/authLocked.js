// этот путь заблокирован для авторизованных пользователей
export default function authLocked({ next, store }) {
  if (store.getters["auth/loggedIn"]) {
    return next({
      name: "home"
    });
  }
  return next();
}
