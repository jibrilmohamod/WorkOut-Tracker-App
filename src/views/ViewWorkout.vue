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

  <div v-if="dataLoaded">
   <!-- General Workout Info -->
   <div
    class="flex flex-col items-center p-8 rounded-md shadow-md 
      bg-light-grey relative"
   >
    <div v-if="user" class="flex absolute left-2 top-2 gap-x-2">
     <div
      class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer
        bg-at-light-green shadow-lg"
      @click="editMode"
     >
      <img class="h-3.5 w-auto" src="@/assets/images/pencil-light.png" alt="" />
     </div>
     <div
      @click="deleteWorkout"
      class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer
        bg-at-light-green shadow-lg"
     >
      <img class="h-3.5 w-auto" src="@/assets/images/trash-light.png" alt="" />
     </div>
    </div>

    <img
     v-if="data.workoutType === 'cardio'"
     class="h-24 w-auto"
     src="@/assets/images/running-light-green.png"
     alt=""
    />

    <img
     v-else
     class="h-24 w-auto"
     src="@/assets/images/dumbbell-light-green.png"
     alt=""
    />

    <span
     class="mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green
        rounded-lg shadow-md"
    >
     {{ data.workoutType }}
    </span>

    <div class="w-full mt-6">
     <input
      v-if="edit"
      type="text"
      class="p-2 w-full text-gray-500 focus:outline-none"
      v-model="data.workoutName"
     />
     <h1 v-else class="text-at-light-green text-2xl text-center">
      {{ data.workoutName }}
     </h1>
    </div>
   </div>
  </div>

  <!-- exercises-->

  <div
   class="mt-10 p-8 rounded-md flex flex-col items-center bg-light-grey shadow-md"
  >
   <!-- strength -->
   <div
    v-if="data.workoutType === 'Strength'"
    class="flex flex-col gap-y-4 w-full"
   >
    <div
     v-for="(item, index) in data.exercises"
     :key="index"
     class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row"
    >
     <div class="flex flex-2 flex-col md:w-1/3">
      <label for="exerciseName" class="mb-1 text-sm text-at-light-green ">
       Exercise
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="exerciseName"
       v-model="item.exercise"
      />

      <p v-else>{{ item.exercise }}</p>
     </div>

     <div class="flex flex-1 flex-col ">
      <label for="sets" class="mb-1 text-sm text-at-light-green ">
       Sets
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="sets"
       v-model="item.sets"
      />

      <p v-else>{{ item.sets }}</p>
     </div>

     <div class="flex flex-1 flex-col ">
      <label for="reps" class="mb-1 text-sm text-at-light-green ">
       Reps
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="reps"
       v-model="item.reps"
      />

      <p v-else>{{ item.reps }}</p>
     </div>

     <div class="flex flex-1 flex-col ">
      <label for="weights" class="mb-1 text-sm text-at-light-green ">
       Weights
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="sets"
       v-model="item.weight"
      />

      <p v-else>{{ item.weight }}</p>
     </div>
     <img
      v-if="edit"
      class="h-4 absolute w-auto -left-5 cursor-pointer "
      src="../assets/images/trash-light-green.png"
      alt=""
     />
    </div>

    <button
     @click="addExercise"
     type="button"
     class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
    >
     Add exercise
    </button>
   </div>

   <!-- cardio -->

   <div v-else class="flex flex-col gap-y-4 w-full">
    <div
     v-for="(item, index) in data.exercises"
     :key="index"
     class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row"
    >
     <div class="flex flex-2 flex-col md:w-1/3">
      <label for="cardioType" class="mb-1 text-sm text-at-light-green ">
       Cardio Type
      </label>
      <select
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="cardioType"
       v-model="item.cardioType"
      >
       <option value="#">Select Type</option>
       <option value="run">Runs</option>
       <option value="walk">Walks</option>
      </select>

      <p v-else>{{ item.cardioType }}</p>
     </div>

     <div class="flex flex-1 flex-col ">
      <label for="distance" class="mb-1 text-sm text-at-light-green ">
       Distance
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="distance"
       v-model="item.distance"
      />

      <p v-else>{{ item.distance }}</p>
     </div>

     <div class="flex flex-1 flex-col ">
      <label for="duration" class="mb-1 text-sm text-at-light-green ">
       Duration
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="duration"
       v-model="item.duration"
      />

      <p v-else>{{ item.duration }}</p>
     </div>

     <div class="flex flex-1 flex-col ">
      <label for="pace" class="mb-1 text-sm text-at-light-green ">
       Pace
      </label>
      <input
       type="text"
       v-if="edit"
       class="w-full text-gray-500 focus:outline-none"
       id="pace"
       v-model="item.pace"
      />

      <p v-else>{{ item.pace }}</p>
     </div>
     <img
      v-if="edit"
      class="h-4 absolute w-auto -left-5 cursor-pointer "
      src="../assets/images/trash-light-green.png"
      alt=""
     />
    </div>

    <button
     @click="addExercise"
     type="button"
     class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
    >
     Add exercise
    </button>
   </div>
  </div>

  <!--update  -->
  <button
   type="submit"
   v-if="edit"
   class="mt-10 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"
  >
   Update Workout
  </button>
 </div>
</template>

<script>
 import { computed, ref } from "vue"
 import { useRoute } from "vue-router"
 import store from "../store"
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
   const user = computed(() => store.state.user)

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
     data.value = workouts[0]
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
   const edit = ref(null)
   const editMode = () => {
    edit.value = !edit.value
   }

   // Add exercise

   // Delete exercise

   // Update Workout

   return { statusMsg, data, dataLoaded, edit, editMode, user }
  },
 }
</script>
