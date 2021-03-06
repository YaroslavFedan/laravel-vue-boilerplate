import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import auth from "./middleware/auth";
import authLocked from "./middleware/authLocked";
import securityVerify from "./middleware/securityVerify";
import middlewarePipeline from "./middleware/middlewarePipeline";

Vue.use(VueRouter);

function lazyLoad(page) {
  /* webpackChunkName: "[request]" */
  return () => import(`../${page}.vue`);
}

const routes = [
  {
    path: "/register",
    name: "register",
    component: lazyLoad("components/auth/Register"),
    meta: {
      layout: "auth",
      middleware: [authLocked]
    }
  },
  {
    path: "/login",
    name: "login",
    component: lazyLoad("components/auth/Login"),
    meta: {
      layout: "auth",
      middleware: [authLocked]
    }
  },
  {
    path: "/security",
    name: "security",
    component: lazyLoad("components/g2fa/VerifySecurity"),
    meta: {
      layout: "auth",
      middleware: [securityVerify]
    }
  },
  {
    path: "/",
    name: "home",
    component: lazyLoad("views/main/Home"),
    meta: {
      layout: "main",
      middleware: [auth]
    }
  },
  {
     path: "/profile",
    // name: "profile",
    component: lazyLoad("views/main/Profile"),
    meta: {
      layout: "main",
      middleware: [auth]
    },
    children: [
      {
        path: "/",
        name: "edit-profile",
        component: lazyLoad("components/profile/Profile"),
        meta: {
          layout: "main",
          middleware: [auth]
        }
      },
      {
        path: "security",
        name: "profile-security",
        component: lazyLoad("components/profile/Security"),
        meta: {
          layout: "main",
          middleware: [auth]
        }
      },
      {
        path: "change-password",
        name: "change-password",
        component: lazyLoad("components/profile/ChangePassword"),
        meta: {
          layout: "main",
          middleware: [auth]
        }
      }
    ]
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
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
