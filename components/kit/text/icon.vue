<template>

  <div class="flex gap-1">
    <component class="size-6 text-style-normal" :is="component"></component>
    <div class="text-style-normal my-auto text-xl">
      <slot></slot>
    </div>
  </div>

</template>

<script setup lang="ts">

import type {ComponentCard} from "~/types/dynamic.front";

const props = defineProps<ComponentCard>()

</script>
