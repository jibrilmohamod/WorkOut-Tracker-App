<template>
 <div class="max-w-screen-md mx-auto px-4 py-10">
  <!-- status message -->

  <div
   class="mb-10 p-4 bg-light-grey rounded-md shadow-lg"
   v-if="statusMsg || errorMsg"
  >
   <p class="text-at-light-green">{{ statusMsg }}</p>
   <p class="text-red-500">{{ errorMsg }}</p>
  </div>
  <!-- create form -->

  <div class="p8 flex items-start bg-light-grey rounded-md shadow-lg">
   <form class="flex flex-col gap-y-5 w-full ">
    <h1 class="text-2xl text-at-light-green">Record Workout</h1>
    <!-- workoutName -->

    <div class="flex flex-col">
     <label for="workoutName" class="mb-1 text-sm text-at-light-green "
      >Workout Name</label
     >
     <input
      type="text"
      required
      class="p-2 text-gray-500 focus:outline-none"
      id="workoutName"
      v-model="workoutName"
     />
    </div>

    <!-- workoutType -->
    <div class="flex flex-col">
     <label for="workoutType" class="mb-1 text-sm text-at-light-green "
      >Workout Type</label
     >
     <select
      id="workoutType"
      class="p-2 text-gray-500 focus:outline-none"
      required
      v-model="workoutType"
     >
      <option value="select-workout">Select Workout</option>
      <option value="strength">Strength Training</option>
      <option value="cardio">Cardio</option>
     </select>
    </div>
   </form>
  </div>
 </div>
</template>

<script>
 import { ref } from "vue"

 export default {
  name: "create",
  setup() {
   // Create data
   const workoutName = ref("")
   const workoutType = ref("select-workout")
   const exercises = ref([])
   const statusMsg = ref(null)
   const errorMsg = ref(null)

   // Add exercise

   // Delete exercise

   // Listens for chaging of workout type input

   // Create workout

   return { workoutName, workoutType, exercises, statusMsg, errorMsg }
  },
 }
</script>
