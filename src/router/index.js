import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "../components/auth/Signin.vue";
import Home from "../components/home/Home.vue";
import About from "../components/about/About.vue";
import Skills from "../components/skills/Skills.vue";
import Contact from "../components/contact/Contact.vue";
import Experience from "../components/experience/Experience.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/login",
    name: "login",
    component: Signin,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills,
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "*",
    redirect: "/home",
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach((to, from) => {
  if ( document.querySelector(".app-sidebar__content") &&
    document.querySelector(".app-sidebar__content").classList.contains("active")
  ) {
    document.querySelector(".app-sidebar__content").classList.remove("active");
  }
});

/*
const routes = [
  {
    path: "/login",
    name: "login",
    component: Signin
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: Signup
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPass
  },
  {
    path: "/reset-password/:token",
    name: "resetPass",
    component: ResetPass
  },
  {
    path:"/home",
    name: "home",
    component: Home,
    redirect: '/home/dashboard',
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: "user-management",
        name: "userMgmt",
        component: UserMgmt,
        meta: { requiresAuth: true }
      },  
      {
        path: "my-profile",
        name: "profile",
        component: Profile,
        meta: { requiresAuth: true }
      },  
    ]
  },
  {
    path: '*',
    redirect: "/login"
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!sessionStorage.getItem('token')) {
      next({
        path: '/home',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
}) */

export default router;
