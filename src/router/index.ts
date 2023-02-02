import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/core/Layout.vue"),
      children: [
        {
          path: "",
          redirect: "/find",
          name: "redirect",
        },
        {
          name: "Find",
          path: "find",
          component: () => import("@/views/Find.vue"),
        },
        {
          name: "Favorite",
          path: "favorite",
          component: () => import("@/views/Favorite.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      redirect: "/find",
    },
  ],
});

export default router;
