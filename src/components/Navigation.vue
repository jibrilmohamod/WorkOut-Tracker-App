<template>
 <header class="bg-at-light-green text-white">
  <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
   <div class="flex items-center gap-x-4">
    <img src="../assets/images/dumbbell-light.png" alt="" class="w-14" />
    <h1 class="text-lg">
     Active Tracker
    </h1>
   </div>
   <ul class="flex flex-1 justify-end gap-x-10">
    <router-link class="cursor-pointer" :to="{ name: 'Home' }"
     >Home</router-link
    >
    <router-link v-if="user" class="cursor-pointer" :to="{ name: 'create' }"
     >Create</router-link
    >
    <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'login' }"
     >Log In</router-link
    >
    <li v-if="user" @click="logout" class="cursor-pointer">
     Log out
    </li>
   </ul>
  </nav>
 </header>
</template>

<script>
 import { useRouter } from "vue-router"
 import { supabase } from "../supabase/init"
 import store from "../store/index"
 import { computed } from "vue"

 export default {
  setup() {
   // Get user from store
   const user = computed(() => store.state.user)
   // Setup ref to router
   const router = useRouter()

   // Logout function
   const logout = async () => {
    await supabase.auth.signOut()
    router.push({ name: "Home" })
   }

   return { logout, user }
  },
 }
</script>
