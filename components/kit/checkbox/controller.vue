<template>
  <div class="flex gap-4"  @click="isActive=!isActive">
    <KitCardClickable class="p-2 h-fit w-fit">
      <CheckIcon class="size-6 aspect-square dark:text-white opacity-0 transition-opacity duration-200 text-black" :class="{'opacity-100' : isActive}"></CheckIcon>
    </KitCardClickable>
    <div class="my-auto" @click="isActive = !isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import {CheckIcon} from "@heroicons/vue/24/solid";

const isActive = defineModel<boolean>('active');

</script>