import Vue from "vue";
import Router from "vue-router";

import PageDashboard from "@/page/PageDashboard";
import PageAbout from "@/page/PageAbout";
import Page404 from "@/page/Page404";
import PageAddPayment from "@/page/PageAddPayment";
// import AddPaymentFood from "../page/AddPaymentFood";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: PageDashboard,
    },
    {
      path: "/about",
      name: "about",
      component: PageAbout,
    },
    {
      path: "/add/Payment/:category",
      name: "addPayment",
      component: PageAddPayment,
    },
    {
      path: "/404", // error handling in navigation
      name: "NotFound",
      component: Page404,
    },
    {
      path: "*", // error handling in navigation
      redirect: "/404",
    },
  ],
});

export default router;
