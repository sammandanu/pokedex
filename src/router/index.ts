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
          // beforeEnter: authGuard,
        },
        {
          name: "Find",
          path: "find",
          component: () => import("@/views/Find.vue"),
          // beforeEnter: authGuard,
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
