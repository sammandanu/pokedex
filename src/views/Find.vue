<script setup lang="ts">
import { reactive, onMounted, computed, ref, onUnmounted } from "vue";
import Search from "@/components/Search.vue";
import PokemonCards from "@/components/PokemonCards.vue";
import { pokemonFavorites } from "@/stores/favorites";
import type { Pokemon } from "@/utils/interfaceList";

// fetch pokemon and variable declaration

const storeFavorites = pokemonFavorites();

let pokemons = reactive<Pokemon[]>([]);

let url = ref("https://pokeapi.co/api/v2/pokemon");

async function fetchPokemons() {
  if (url.value) {
    try {
      const res = await fetch(url.value);
      const resJson = await res.json();
      if (resJson) {
        url.value = resJson.next;
        let listPokemon: { name: string }[] = resJson.results;

        fetchPokemonDetail(listPokemon);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }
}

async function fetchPokemonDetail(value: { name: string }[]) {
  value.forEach(async (val) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${val.name}`);
      const resJson = await res.json();
      if (resJson) {
        if (!pokemons.some((res) => res.id === resJson.id)) {
          const reData = {
            id: resJson.id,
            name: resJson.name,
            types: resJson.types,
            image: resJson.sprites.other.home.front_default,
            favorite: storeFavorites.checkFavorites(resJson.id),
            abilities: resJson.abilities,
            weight: resJson.weight,
            height: resJson.height,
            stats: resJson.height,
            moves: resJson.height,
          };
          pokemons.push(reData);
        }
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  });
}

// search feature

const searchInput = ref("");
const typeFilter = ref("");

function filterPokemon() {
  if (!searchInput) {
    return pokemons;
  }

  let data = pokemons.filter((pokemon) =>
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

// infinite scroll
const scrollComponent = ref<HTMLInputElement>();
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  if (
    scrollComponent.value!.getBoundingClientRect().bottom < window.innerHeight
  ) {
    fetchPokemons();
  }
};

onMounted(() => {
  fetchPokemons();
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-16 xl:px-4">
    <div class="pt-20 pb-32">
      <div class="text-4xl text-header mb-8">Find Pokemon</div>
      <!-- search and filter -->
      <Search
        v-model="searchInput"
        @chooseType="typeHandler"
        @resetType="typeHandler"
      />
      <!-- Pokemons -->
      <div class="" ref="scrollComponent">
        <PokemonCards :data="filteredPokemon"></PokemonCards>
      </div>
    </div>
  </div>
</template>
