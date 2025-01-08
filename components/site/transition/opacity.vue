<template>
  <transition name="card-opacity" appear :class="state ? 'opacity-100' : 'opacity-0'" @enter="state=true" @leave="state=false" :style="`transition-delay: ${delay}`">
    <slot />
  </transition>
</template>

<style>


</style>

<script setup lang="ts">

const state = ref<boolean>(false);

const props = defineProps({
  delay: String,
})

</script>