import { reactive } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("types", () => {
  const colors = {
    fire: "#EE8130",
    grass: "#7AC74C",
    eletric: "#F7D02C",
    water: "#6390F0",
    ground: "#E2BF65",
    rock: "#B6A136",
    fairy: "#D685AD",
    poison: "#A33EA1",
    bug: "#A6B91A",
    dragon: "#6F35FC",
    psychic: "#F95587",
    flying: "#A98FF3",
    fighting: "#C22E28",
    normal: "#A8A77A",
    ice: "#96D9D6",
    ghost: "#735797",
    dark: "#705746",
    steel: "#B7B7CE",
  };
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { colors };
});
