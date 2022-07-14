import { createRouter, createWebHistory } from "vue-router"
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
 },
 {
  path: "/login",
  name: "login",
  component: Login,
 },
 {
  path: "/register",
  name: "register",
  component: Register,
 },
 {
  path: "/create",
  name: "create",
  component: CreateVue,
 },
 {
  path: "/viewWorkout/:workoutId",
  name: "viewWorkout",
  component: viewWorkout,
 },
]

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
})

// Change document titles

// Route guard for auth routes

export default router
