<script setup lang="ts">
import { ref, onMounted } from "vue";
import Dropdown from "@/components/Dropdown.vue";
import { pokemonTypes } from "@/stores/types";

const searchInput = ref("");
const showFilter = ref(false);
const store = pokemonTypes();
const { types } = store;
let selectedIcon = ref();
let selectedLabel = ref();
const emit = defineEmits(["chooseType", "resetType", "update:modelValue"]);
function chooseType(icon: String, key: String) {
  selectedIcon.value = icon;
  selectedLabel.value = key;
  emit("chooseType", key);
}
function resetType() {
  selectedIcon.value = "";
  selectedLabel.value = "";
  emit("resetType");
}
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:items-center gap-2 mb-8">
    <!-- search input -->
    <div
      class="border border-gray bg-bgInputGray rounded-xl p-2 flex items-center gap-2 lg:max-w-[600px] flex-1 lg:flex-none w-full"
    >
      <div class="flex-none">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3223 21.5508L16.8363 17.0568L21.3223 21.5508ZM19.3223 11.0508C19.3223 13.3051 18.4267 15.4671 16.8327 17.0612C15.2386 18.6552 13.0766 19.5508 10.8223 19.5508C8.56793 19.5508 6.40592 18.6552 4.81186 17.0612C3.2178 15.4671 2.32227 13.3051 2.32227 11.0508C2.32227 8.79644 3.2178 6.63443 4.81186 5.04037C6.40592 3.44631 8.56793 2.55078 10.8223 2.55078C13.0766 2.55078 15.2386 3.44631 16.8327 5.04037C18.4267 6.63443 19.3223 8.79644 19.3223 11.0508V11.0508Z"
            stroke="#4F4F4F"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="flex-1">
        <input
          type="text"
          class="w-full bg-transparent focus:outline-none"
          placeholder="Pokemon Name..."
          @input="$emit('update:modelValue', searchInput)"
          v-model="searchInput"
        />
      </div>
    </div>
    <!-- filter & button -->
    <div class="flex flex-1 lg:flex-none lg:items-center gap-2">
      <Dropdown
        @close="showFilter = false"
        :showContent="showFilter"
        contentPosition="top-12"
        class="lg:w-[184px] w-full"
      >
        <div
          class="border border-gray bg-bgInputGray p-2 flex items-center justify-between gap-2 rounded-xl"
          @click="showFilter = !showFilter"
        >
          <div class="text-textPrimary" v-if="!selectedIcon && !selectedLabel">
            Types
          </div>
          <div class="text-textPrimary flex items-center gap-2" v-else>
            <div class="">
              <img :src="selectedIcon" class="w-6 h-6" alt="" />
            </div>
            <div class="">{{ selectedLabel }}</div>
          </div>
          <div
            class="flex-none w-4 h-4"
            :class="
              showFilter ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
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
          <div class="pb-32">
            <div class="shadow-xl border border-gray rounded-xl">
              <div
                class="p-2 cursor-pointer bg-bgInputGray first:rounded-t-xl last:rounded-b-xl opacity-80 hover:opacity-100"
                @click="resetType(), (showFilter = false)"
              >
                <div class="">All</div>
              </div>
              <div
                class="p-2 cursor-pointer flex items-center gap-2 bg-bgInputGray first:rounded-t-xl last:rounded-b-xl opacity-80 hover:opacity-100"
                v-for="(value, key) in types"
                :key="`type-${key}`"
                @click="chooseType(value.icon, key), (showFilter = false)"
              >
                <div class="">
                  <img :src="value.icon" class="w-6 h-6" alt="" />
                </div>
                <div class="">{{ key }}</div>
              </div>
            </div>
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped></style>
