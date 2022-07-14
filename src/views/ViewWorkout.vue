<template>
 <div class="max-w-screen-sm mx-auto px-4 py-10">
  <!-- app msg -->
  <div v-if="statusMsg || errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
   <p class="text-at-light-green">
    {{ statusMsg }}
   </p>
   <p class="text-red-500">
    {{ errorMsg }}
   </p>
  </div>
 </div>
</template>

<script>
 import { ref } from "vue"
 import { useRoute } from "vue-router"
 import { supabase } from "../supabase/init"

 export default {
  name: "viewWorkout",
  setup() {
   // Create data / vars
   const data = ref(null)
   const dataLoaded = ref(null)
   const errorMsg = ref(null)
   const statusMsg = ref(null)
   const route = useRoute()

   // Get current Id of route
   const currentId = route.params.workoutId

   // Get workout data
   const getData = async () => {
    try {
     const { data: workouts, error } = await supabase
      .from("workouts")
      .select("*")
      .eq("id", currentId)
     if (error) {
      throw error
     }
     data.value = workouts
     dataLoaded.value = true
     console.log(data.value)
    } catch (error) {
     errorMsg.value = error.message
     setTimeout(() => {
      errorMsg.value = ref(null)
     }, 5000)
    }
   }

   getData()

   // Delete workout

   // Edit mode

   // Add exercise

   // Delete exercise

   // Update Workout

   return { statusMsg, data, dataLoaded }
  },
 }
</script>
