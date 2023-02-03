<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import PokemonCard from "@/components/PokemonCard.vue";
import type { Pokemon } from "@/utils/interfaceList";
import { pokemonFavorites } from "@/stores/favorites";

let pokemon = reactive<Pokemon>({} as Pokemon);
let loading = ref(true);
const storeFavorites = pokemonFavorites();

async function fetchPokemonDetail(name: string) {
  loading.value = true;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const resJson = await res.json();
    if (resJson) {
      pokemon.id = resJson.id;
      pokemon.name = resJson.name;
      pokemon.types = resJson.types;
      pokemon.image = resJson.sprites.other.home.front_default;
      pokemon.favorite = storeFavorites.checkFavorites(resJson.id);
      pokemon.abilities = resJson.abilities;
      pokemon.weight = resJson.weight;
      pokemon.height = resJson.height;
      pokemon.stats = resJson.stats;
      pokemon.moves = resJson.moves;
    }
  } catch (error) {
    console.log("Something went wrong");
  } finally {
    loading.value = false;
  }
}

const route = useRoute();
onMounted(() => {
  fetchPokemonDetail(route.params.name.toString());
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-16 xl:px-4">
    <div class="pt-20 pb-32" v-if="!loading">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PokemonCard
          :data="pokemon"
          class="col-span-1"
          @add-favorites="pokemon.favorite = true"
          @deleteFavorites="pokemon.favorite = false"
        />
        <!-- stats & abilities -->
        <div class="bg-white p-4 rounded-xl col-span-1">
          <div class="text-textPrimary text-2xl font-bold mb-4">Stats</div>
          <div class="grid grid-cols-1 gap-4 pb-4 border-b border-borderGray">
            <div
              class="flex justify-between items-center"
              v-for="(stats, index) in pokemon.stats"
              :key="`stats-${index}`"
            >
              <div class="uppercase">{{ stats.stat.name }}</div>
              <div class="col-span-3">
                <div
                  class="rounded-full text-center bg-pink text-white px-4 w-40 text-sm py-2"
                >
                  {{ stats.base_stat }}
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex items-center justify-between gap-4 my-4">
              <div class="text-xl font-bold text-textPrimary">Weight</div>
              <div class="text-xl text-textPrimary">
                {{ pokemon.weight * 100 }} grams
              </div>
            </div>
            <div
              class="flex items-center justify-between gap-4 pb-4 border-b border-borderGray"
            >
              <div class="text-xl font-bold text-textPrimary">Height</div>
              <div class="text-xl text-textPrimary">
                {{ pokemon.height * 10 }} cm
              </div>
            </div>
          </div>
          <div class="text-xl font-bold text-textPrimary my-4">Abilities</div>
          <div class="flex items-center flex-wrap gap-2">
            <div
              class="px-4 py-2 bg-bgInputGray rounded-full text-sm"
              v-for="(ability, index) in pokemon.abilities"
              :key="`ability-${index}`"
            >
              {{ ability.ability.name }}
            </div>
          </div>
        </div>
        <!-- weight, height, moves -->
        <div class="bg-white rounded-xl col-span-1 lg:col-span-2 p-4">
          <div class="text-xl font-bold text-textPrimary mt-8 mb-4">Moves</div>
          <div class="flex items-center flex-wrap gap-2">
            <div
              class="px-4 py-2 bg-bgInputGray rounded-full text-sm"
              v-for="(move, index) in pokemon.moves"
              :key="`move-${index}`"
            >
              {{ move.move.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
