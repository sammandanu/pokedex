<script setup lang="ts">
import { pokemonTypes } from "@/stores/types";
import { pokemonFavorites } from "@/stores/favorites";
import type { Pokemon } from "@/utils/interfaceList";

interface Props {
  data: Pokemon[];
}
const props = defineProps<Props>();
const emit = defineEmits(["addFavorites", "deleteFavorites"]);

const store = pokemonTypes();
const stroreTypes = store.types;

const storeFavorites = pokemonFavorites();

function checkFavorite(pokemon: Pokemon) {
  if (!pokemon.favorite) {
    storeFavorites.favorites.push(pokemon);
    localStorage.setItem(
      "pokemonFavorites",
      JSON.stringify(storeFavorites.favorites)
    );
    emit("addFavorites", pokemon.id);
  } else {
    const pokemonIndex = props.data.findIndex((res) => res.id === pokemon.id);
    const x = storeFavorites.favorites.splice(pokemonIndex, 1);
    localStorage.setItem(
      "pokemonFavorites",
      JSON.stringify(storeFavorites.favorites)
    );
    emit("deleteFavorites", pokemon.id);
  }
}
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
      <!-- types icon -->
      <div class="flex flex-wrap gap-3 items-center justify-center">
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
      <!-- favorite -->
      <div
        class="absolute right-0 top-0 pt-4 pr-4"
        @click="checkFavorite(pokemon)"
      >
        <div class="w-8 h-8 rounded-md bg-black bg-opacity-20 p-1.5">
          <svg
            viewBox="0 0 24 24"
            :fill="pokemon.favorite ? '#F25781' : 'none'"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
              :stroke="pokemon.favorite ? '#F25781' : '#fff'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
