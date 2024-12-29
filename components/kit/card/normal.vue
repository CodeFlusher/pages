<template>
  <div class="border transition-colors duration-200 focus:border-orange-300 rounded-xl bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 shadow-md shadow-neutral-200 dark:shadow-neutral-950 " :class="oclass">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  oclass: String | undefined,
})
</script>
