import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import SampleComponent from "@/components/SampleComponent.vue";
import Login from '@/components/auth/Login.vue';

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { authOnly: true }
  },
  {
    path: "/sample-component",
    name: "Sample",
    component: SampleComponent,
    meta: { authOnly: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guestOnly: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;