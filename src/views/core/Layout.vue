<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "@/components/Navigation.vue";
import { onMounted } from "vue";
import { pokemonFavorites } from "@/stores/favorites";
const storeFavorites = pokemonFavorites();

onMounted(() => {
  if (localStorage.getItem("pokemonFavorites")) {
    storeFavorites.favorites = JSON.parse(
      localStorage.getItem("pokemonFavorites") || ""
    );
  }
});
</script>

<template>
  <div class="min-h-screen">
    <Navigation />
    <RouterView class="pt-[126px]" />
  </div>
</template>
