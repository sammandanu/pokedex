import { defineStore } from "pinia";
import type { Pokemon } from "@/utils/interfaceList";

export const pokemonFavorites = defineStore("pokemonFavorites", {
  state: () => {
    return {
      favorites: [] as Pokemon[],
    };
  },
  actions: {
    checkFavorites(id: number) {
      if (this.favorites) {
        return this.favorites.some((favorite) => favorite.id === id);
      } else return false;
    },
  },
});
