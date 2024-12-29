<template>
  <div class="">
    <label for="card" class="text-style-title text-lg"> {{title}} </label>
    <KitCardClickable id="card" class="flex p-2">
      <slot > </slot>
      <ChevronDownIcon class=" size-5 my-auto ml-auto text-black dark:text-white -rotate-90 transition-all duration-300" :class="{'rotate-0': active}"/>
    </KitCardClickable>
  </div>
</template>

<script setup lang="ts">

import {ChevronDownIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
  title: String,
  active: Boolean,
})

</script>