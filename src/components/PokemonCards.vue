<script setup lang="ts">
import type { Pokemon } from "@/utils/interfaceList";
import PokemonCard from "./PokemonCard.vue";

interface Props {
  data: Pokemon[];
}
const props = defineProps<Props>();

// favorite handler
function addFavorite(id: number) {
  const pokemonIndex = props.data.findIndex((res) => res.id === id);
  props.data[pokemonIndex].favorite = true;
}
function deleteFavorite(id: number) {
  const pokemonIndex = props.data.findIndex((res) => res.id === id);
  props.data[pokemonIndex].favorite = false;
}
</script>

<template>
  <div
    class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3 items-center"
  >
    <PokemonCard
      v-for="(pokemon, i) in data"
      :key="`pokemon-${i}`"
      :data="pokemon"
      @add-favorites="addFavorite"
      @deleteFavorites="deleteFavorite"
    />
  </div>
</template>

<style scoped></style>
