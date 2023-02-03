<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const router = useRouter();
function login() {
  if (!name) {
    return;
  }
  localStorage.setItem("trainersName", name.value);
  router.push("/find");
}
</script>

<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="mx-4 min-h-screen flex items-center justify-center flex-col">
      <img src="@/assets/logo.png" class="mx-auto mb-4 w-40" alt="" />
      <div class="bg-white w-full rounded-xl">
        <div class="p-8 rounded-xl w-full">
          <div class="text-4xl font-bold text-textPrimary text-center mb-8">
            Welcome Trainers
          </div>
          <div class="">
            <input
              v-model="name"
              type="text"
              placeholder="Trainers Name"
              class="w-full border border-borderGray p-2 bg-bgInputGray focus:outline-none rounded-xl placeholder:text-center mb-4 text-center"
            />
            <button
              class="w-full p-2 bg-bgPink font-bold text-textYellow rounded-xl"
              @click="login"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
