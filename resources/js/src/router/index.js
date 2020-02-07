import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Login from '../pages/auth/Login.vue';
// import Register from '../pages/auth/Register.vue';

Vue.use(VueRouter);

function lazyLoad(page) {
  return () => import(`../views/${page}.vue`);
}

const routes = [

  // {
  //   path: "/todo",
  //   name: "todo",
  //   component: lazyLoad("Todo"),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },

  {
    path: "/login",
    name: "login",
    component: lazyLoad("auth/Login"),
    meta: {
      layout:'auth',
      requiresVisitor: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: lazyLoad("auth/Register"),
    meta: {
      layout:'auth',
      requiresVisitor: true
    }
  },
  {
    path: "/",
    name: "home",
    component: lazyLoad("main/Home"),
    meta: {
      layout:'main',
      pageTitle:"Home",
      requiresAuth: true
    }
  },
  {
    path: "/categories",
    name: "categories",
    component: lazyLoad("main/Categories"),
    meta: {
      layout:'main',
      pageTitle:"Categories",
      requiresAuth: true
    }
  },
  {
    path: "/history",
    name: "history",
    component: lazyLoad("main/History"),
    meta: {
      layout:'main',
      pageTitle:"History",
      requiresAuth: true
    }
  },
  {
    path: "/planning",
    name: "planning",
    component: lazyLoad("main/Planning"),
    meta: {
      layout:'main',
      pageTitle:"Planning",
      requiresAuth: true
    }
  },
  {
    path: "/record",
    name: "record",
    component: lazyLoad("main/Record"),
    meta: {
      layout:'main',
      pageTitle:"Record",
      requiresAuth: true
    }
  },
  {
    path: "/task",
    name: "task",
    component: lazyLoad("main/Task"),
    meta: {
      layout:'main',
      pageTitle:"Task",
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: lazyLoad("main/Profile"),
    meta: {
      layout:'main',
      pageTitle:"Profile",
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: 404,
    component: lazyLoad("Error")
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
    if (store.getters["auth/loggedIn"]) {
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
