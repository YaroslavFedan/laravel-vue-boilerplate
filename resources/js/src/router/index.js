import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// // import ProfileForm from "../components/profile/ProfileForm.vue";
// import ProfileSecurityForm from "../components/profile/SecurityForm.vue";
// // const ProfileForm = () => import('../components/profile/ProfileForm.vue')

Vue.use(VueRouter);

function lazyLoad(page) {
  return () => import(`../${page}.vue`);
}

const routes = [
  {
    path: "/register",
    name: "register",
    component: lazyLoad("components/auth/RegisterForm"),
    meta: {
      layout: "auth",
      requiresVisitor: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: lazyLoad("components/auth/LoginForm"),
    meta: {
      layout: "auth",
      requiresVisitor: true
    }
  },
  {
    path: "/security",
    name: "security",
    component: lazyLoad("components/g2fa/ValidationSecurityForm"),
    meta: {
      layout: "auth",
      securityIsEnabled: true
    }
  },
  {
    path: "/",
    name: "home",
    component: lazyLoad("views/main/Home"),
    meta: {
      layout: "main",
      pageTitle: "Home",
      requiresAuth: true
    }
  },
  {
    path: "/categories",
    name: "categories",
    component: lazyLoad("views/main/Categories"),
    meta: {
      layout: "main",
      pageTitle: "Categories",
      requiresAuth: true
    }
  },
  {
    path: "/history",
    name: "history",
    component: lazyLoad("views/main/History"),
    meta: {
      layout: "main",
      pageTitle: "History",
      requiresAuth: true
    }
  },
  {
    path: "/planning",
    name: "planning",
    component: lazyLoad("views/main/Planning"),
    meta: {
      layout: "main",
      pageTitle: "Planning",
      requiresAuth: true
    }
  },
  {
    path: "/record",
    name: "record",
    component: lazyLoad("views/main/Record"),
    meta: {
      layout: "main",
      pageTitle: "Record",
      requiresAuth: true
    }
  },
  {
    path: "/task",
    name: "task",
    component: lazyLoad("views/main/Task"),
    meta: {
      layout: "main",
      pageTitle: "Task",
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    component: lazyLoad("views/main/Profile"),
    meta: {
      layout: "main",
      requiresAuth: true
    },
    children:[
      {
        path:"/",
        name: "profile",
        component: lazyLoad("components/profile/Profile"),
        meta: {
          layout: "main",
          pageTitle: "Profile",
        },
      },
      {
        path:"security",
        name: "profile-security",
        component: lazyLoad("components/profile/Security"),
        meta: {
          layout: "main",
          pageTitle: "Security",
        },
      }
    ],
  },
  {
    path: "*",
    name: 404,
    component: lazyLoad("views/Error")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.securityIsEnabled)) {
    // этот путь требует пройти Google Two Factor Authentication
    // если нет временного токена, перенаправляем на страницу логина
    if (!store.getters["auth/securityIsEnabled"]) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
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
