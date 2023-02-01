<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";
import Dropdown from "@/components/Dropdown.vue";
const route = useRoute();
const path = computed(() => route.name);
const state = reactive({
  openDropdown: false,
});
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bg-white rounded-b-full shadow-xl">
    <div class="max-w-screen-xl mx-auto px-16 xl:px-4 py-8">
      <div class="flex items-center justify-center lg:justify-between gap-20">
        <!-- logo -->
        <div class="flex-none">
          <img src="@/assets/logo-text.png" class="w-72" alt="" />
        </div>
        <!-- navigation -->
        <div
          class="flex-1 hidden lg:flex items-center justify-between text-textPrimary font-medium text-2xl"
        >
          <div class="flex items-center gap-10">
            <RouterLink
              class="hover:underline decoration-primary underline-offset-8"
              :class="path === 'Find' ? 'underline' : ''"
              to="/find"
              >FIND</RouterLink
            >
            <RouterLink
              class="hover:underline decoration-primary underline-offset-8"
              to="/favorite"
              >FAVORITE</RouterLink
            >
          </div>
        </div>
        <!-- account -->
        <Dropdown
          @close="state.openDropdown = false"
          :showContent="state.openDropdown"
          class="hidden lg:block"
          contentPosition="bottom"
        >
          <div
            class="hidden lg:flex items-center gap-4 cursor-pointer"
            @click="state.openDropdown = !state.openDropdown"
          >
            <div class="text-right">
              <div class="text-xs text-gray">Trainers Name</div>
              <div class="text-textPrimary font-medium text-2xl">John Doe</div>
            </div>
            <div class="flex-none flex items-center gap-2">
              <div
                class="w-14 h-14 rounded-full border border-gray flex items-center justify-center"
              >
                <img
                  src="@/assets/ash.jpeg"
                  class="w-full rounded-full"
                  alt=""
                />
              </div>
              <div
                class="flex-none w-4 h-4"
                :class="
                  state.openDropdown
                    ? 'rotate-180 duration-200'
                    : 'rotate-0 duration-200'
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <template #content>
            <div
              v-if="state.openDropdown"
              class="bg-white shadow-xl p-4 border border-gray rounded-xl hover:bg-bgPink hover:text-textYellow cursor-pointer"
              @click="state.openDropdown = false"
            >
              Logout
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
  <!-- mobile nav -->
  <div
    class="fixed lg:hidden bottom-0 left-0 right-0 bg-white shadow-xl rounded-t-full"
  >
    <!-- navigation -->
    <div
      class="grid grid-cols-3 items-center px-4 sm:px-16 py-8 text-textPrimary font-medium text-2xl text-center"
    >
      <RouterLink
        :class="
          path === 'Find'
            ? 'underline decoration-primary underline-offset-8'
            : ''
        "
        to="/find"
        >FIND</RouterLink
      >
      <RouterLink
        :class="
          path === 'Favorite'
            ? 'underline decoration-primary underline-offset-8'
            : ''
        "
        to="/favorite"
        >FAVORITE</RouterLink
      >
      <Dropdown
        @close="state.openDropdown = false"
        :showContent="state.openDropdown"
        contentPosition="top"
        class="block lg:hidden"
      >
        <div
          class="flex items-center justify-center gap-2 cursor-pointer"
          @click="state.openDropdown = !state.openDropdown"
        >
          <div
            class="w-14 h-14 rounded-full border border-gray flex items-center justify-center"
          >
            <img src="@/assets/ash.jpeg" class="w-full rounded-full" alt="" />
          </div>
          <div
            class="flex-none w-4 h-4"
            :class="
              state.openDropdown
                ? 'rotate-180 duration-200'
                : 'rotate-0 duration-200'
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <template #content>
          <div
            class="bg-white shadow-xl p-2 border border-gray rounded-xl hover:bg-bgPink hover:text-textYellow cursor-pointer text-xl"
            @click="state.openDropdown = false"
          >
            Logout
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>
