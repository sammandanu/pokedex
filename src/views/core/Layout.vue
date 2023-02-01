<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="bg-primary min-h-screen">
    <Navigation />
    <RouterView class="pt-[126px]" />
  </div>
</template>
