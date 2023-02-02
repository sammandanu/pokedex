<script setup lang="ts">
import { onMounted } from "vue";
import { pokemonTypes } from "@/stores/types";
interface TypeData {
  name: string;
}
interface Type {
  type: TypeData;
}
interface Data {
  name: string;
  types: Type[];
  image: string;
}
interface Props {
  data: Data[];
}
const props = defineProps<Props>();

const store = pokemonTypes();
const stroreTypes = store.types;
</script>

<template>
  <div
    class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3 items-center"
  >
    <div
      class="w-full rounded-xl p-4 relative cursor-pointer hover:shadow-xl"
      :style="stroreTypes[pokemon.types[0].type.name as keyof typeof stroreTypes].color"
      v-for="(pokemon, i) in data"
      :key="`pokemon-${i}`"
    >
      <!-- image -->
      <div class="flex items-center justify-center mb-4">
        <img :src="pokemon.image" class="w-full" alt="" />
      </div>
      <!-- name -->
      <div class="text-center text-textPrimary text-xl font-bold">
        {{ pokemon?.name }}
      </div>
      <div class="flex flex-wrap gap-3 items-center justify-center">
        <!-- types icon -->
        <div
          class="flex items-center gap-1"
          v-for="(types, i) in pokemon.types"
          :key="`type-${i}`"
        >
          <div class="">
            <img
              :src="stroreTypes[types.type.name as keyof typeof stroreTypes].icon"
              class="w-5 h-5"
              alt=""
            />
          </div>
          <div class="text-textPrimary text-sm">{{ types.type.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
