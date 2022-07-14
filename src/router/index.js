import { createRouter, createWebHistory } from "vue-router"
import { supabase } from "../supabase/init"
import CreateVue from "../views/Create.vue"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import viewWorkout from "../views/ViewWorkout.vue"

const routes = [
 {
  path: "/",
  name: "Home",
  component: Home,
  meta: {
   title: "Home",
   auth: false,
  },
 },
 {
  path: "/login",
  name: "login",
  component: Login,
  meta: {
   title: "Login",
   auth: false,
  },
 },
 {
  path: "/register",
  name: "register",
  component: Register,
  meta: {
   title: "Register",
   auth: false,
  },
 },
 {
  path: "/create",
  name: "create",
  component: CreateVue,
  meta: {
   title: "Create",
   auth: true,
  },
 },
 {
  path: "/viewWorkout/:workoutId",
  name: "viewWorkout",
  component: viewWorkout,
  meta: {
   title: "view Workout",
   auth: false,
  },
 },
]

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
})

// Change document titles
router.beforeEach((to, from, next) => {
 document.title = `${to.meta.title} | Active Tracker `
 next()
})

// Route guard for auth routes
router.beforeEach((to, from, next) => {
 const user = supabase.auth.user()
 if (to.matched.some((res) => res.meta.auth)) {
  if (user) {
   next()
   return
  }
  next({ name: "Login" })
 }
 next()
})

export default router
