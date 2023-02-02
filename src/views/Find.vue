<script setup lang="ts">
import { reactive, onMounted } from "vue";
import Search from "@/components/Search.vue";
import PokemonCard from "@/components/PokemonCard.vue";
import { pokemonTypes } from "@/stores/types";

const store = pokemonTypes();

interface TypeData {
  name: string;
}
interface Type {
  type: TypeData;
}

interface Pokemon {
  name: string;
  types: Type[];
  image: string;
}

let pokemons = reactive<Pokemon[]>([]);

const { types } = store;

async function fetchPokemons() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const resJson = await res.json();
    if (resJson) {
      let listPokemon: { name: string }[] = resJson.results;

      fetchPokemonDetail(listPokemon);
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}

async function fetchPokemonDetail(value: { name: string }[]) {
  value.forEach(async (val) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${val.name}`);
      const resJson = await res.json();
      if (resJson) {
        const reData = {
          id: resJson.id,
          name: resJson.name,
          types: resJson.types,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${resJson.id}.png`,
        };
        pokemons.push(reData);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  });

  console.log(pokemons);
}

onMounted(() => {
  fetchPokemons();
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-16 xl:px-4">
    <div class="py-20">
      <div class="text-4xl text-header mb-8">Find Pokemon</div>
      <!-- search and filter -->
      <Search />
      <!-- Pokemons -->

      <PokemonCard :data="pokemons"></PokemonCard>
    </div>
  </div>
</template>
