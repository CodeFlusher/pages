<template>
  <button class=" bg-orange-600 h-fit hover:bg-orange-500 rounded-xl text-white text-xl p-2 px-4 transition-colors shadow-md shadow-orange-300 dark:shadow-neutral-950" :class="classoverride">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  classoverride: String,
})
</script>
