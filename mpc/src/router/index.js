import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/page/PageDashboard"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/page/PageAbout"),
    },
    {
      path: "/add/Payment/:category",
      name: "addPayment",
      component: () => import("@/page/PageAddPayment"),
    },
    {
      path: "/404", // error handling in navigation
      name: "NotFound",
      component: () => import("@/page/Page404"),
    },
    {
      path: "*", // error handling in navigation
      redirect: "/404",
    },
  ],
});

export default router;
