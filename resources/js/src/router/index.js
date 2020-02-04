import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';

Vue.use(VueRouter);

function lazyLoad(page) {
  return () => import(`../pages/${page}.vue`);
}

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoad("Home")
  },
  {
    path: "/todo",
    name: "todo",
    component: lazyLoad("Todo"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,//lazyLoad("auth/Login"),
    props: {userId:'test'},
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,//lazyLoad("auth/Register"),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/logout",
    name: "logout",
    component: lazyLoad("auth/Logout")
  },
  {
    path: "*",
    name: 404,
    component: lazyLoad("Error404")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if (!store.getters["auth/loggedIn"]) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // этот путь закрыт если пользователь уже авторизирован
    if (store.getters.loggedIn) {
      next({
        name: "home"
      });
    } else {
      next();
    }
  } else {
    next(); // всегда так или иначе нужно вызвать next()!
  }
});

export default router;
