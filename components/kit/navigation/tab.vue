<template>

  <div class="flex flex-col w-fit " @mouseenter="isHovered=true" @mouseleave="isHovered=false">
    <slot></slot>
    <div class="bg-black dark:bg-white h-0.5 transition-all duration-200 w-0" :class="{'w-full ml-0 mr-auto' : isHovered}"></div>
  </div>

</template>

<script setup lang="ts">

const isHovered = ref<Boolean>(false);

</script>