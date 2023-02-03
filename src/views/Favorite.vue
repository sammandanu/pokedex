<script setup lang="ts">
import { computed, ref } from "vue";
import Search from "@/components/Search.vue";
import PokemonCards from "@/components/PokemonCards.vue";
import { pokemonFavorites } from "@/stores/favorites";

// get favorites pokemon

const storeFavorites = pokemonFavorites();

// search feature

const searchInput = ref("");
const typeFilter = ref("");

function filterPokemon() {
  if (!searchInput) {
    return storeFavorites.favorites;
  }

  let data = storeFavorites.favorites.filter((pokemon) =>
    pokemon.name.includes(searchInput.value)
  );

  if (typeFilter.value) {
    data = data.filter((pokemon) =>
      pokemon.types.some((type) => type.type.name.includes(typeFilter.value))
    );
  }

  return data;
}

const filteredPokemon = computed(() => filterPokemon());

// type filter
function typeHandler(val: string) {
  if (!val) {
    typeFilter.value = "";
  }
  if (val) {
    typeFilter.value = val;
  }
}

// favorite handler
function deleteFavorite(id: number) {
  const pokemonIndex = storeFavorites.favorites.findIndex(
    (res) => res.id === id
  );
  storeFavorites.favorites[pokemonIndex].favorite = false;
}
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-16 xl:px-4">
    <div class="pt-20 pb-32">
      <div class="text-4xl text-header mb-8">Favorite Pokemon</div>
      <!-- search and filter -->
      <Search
        v-model="searchInput"
        @chooseType="typeHandler"
        @resetType="typeHandler"
      />
      <!-- Pokemons -->
      <PokemonCards
        :data="filteredPokemon"
        @deleteFavorites="deleteFavorite"
      ></PokemonCards>
    </div>
  </div>
</template>
