<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps({
  showContent: {
    type: Boolean,
    required: true,
    default: false,
  },
  contentPosition: {
    type: String,
  },
});

function checkContentPosition() {
  if (props.contentPosition === "bottom") {
    return "top-16";
  } else if (props.contentPosition === "top") {
    return "-top-14";
  } else {
    return props.contentPosition;
  }
}
</script>

<template>
  <div class="relative">
    <div class="z-10 relative">
      <slot></slot>
    </div>
    <!-- to close when clicked on space around it-->
    <button
      class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
      v-if="showContent"
      @click="$emit('close')"
      tabindex="-1"
    ></button>

    <!-- content -->
    <Transition>
      <div
        v-if="showContent"
        class="absolute left-0 right-0 z-10"
        :class="[checkContentPosition()]"
      >
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
