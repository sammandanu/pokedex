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
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("trainersName")) {
              next();
            } else {
              next("/welcome");
            }
          },
        },
        {
          name: "Favorite",
          path: "favorite",
          component: () => import("@/views/Favorite.vue"),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("trainersName")) {
              next();
            } else {
              next("/welcome");
            }
          },
        },
        {
          name: "Details",
          path: "details/:name",
          component: () => import("@/views/Details.vue"),
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("trainersName") && to.params.name) {
              next();
            } else if (
              localStorage.getItem("trainersName") &&
              !to.params.name
            ) {
              next("/find");
            } else {
              next("/welcome");
            }
          },
        },
      ],
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("../views/Welcome.vue"),
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("trainersName")) {
          next("/find");
        } else {
          next();
        }
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      redirect: "/find",
    },
  ],
});

export default router;
