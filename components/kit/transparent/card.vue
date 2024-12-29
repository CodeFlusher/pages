<template>
  <div class="rounded-xl bg-transparent border border-neutral-200 dark:border-neutral-800 backdrop-brightness-5 backdrop-blur-xl " :class="overrideclass">
    <slot/>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    overrideclass: String,
  })
</script>
