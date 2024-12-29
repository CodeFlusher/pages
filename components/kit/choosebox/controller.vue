<template>

  <div class="w-full">
    <div @click="toggle" class="w-full">
      <slot name="button" :item="item" :active="isActive"/>
    </div>
    <div class="absolute w-full transition-all -translate-x-4 px-4 duration-200 z-20 pointer-events-none opacity-0" :class="{'mt-2 opacity-100 pointer-events-auto' : isActive}">
      <slot name="items" :item="item" :active="isActive"/>
    </div>
  </div>

</template>

<script setup lang="ts">

const isActive = defineModel<boolean>('active');
const item = defineModel<boolean>('item');

const toggle = ()=>{
  isActive.value = !isActive.value;
}

</script>
