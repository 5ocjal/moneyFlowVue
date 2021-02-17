import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/spendings",
    name: "Spendings",
    component: () => import("../views/Spendings.vue"),
  },
  {
    path: "/revenue",
    name: "Revenue",
    component: () => import("../views/Revenue.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
