<template>
  <div class="p-2 w-full flex mt-4">
    <SiteTransitionBottom>
      <h1 v-show="visible" class="mx-auto break-words w-full text-2xl lg:text-6xl font-extrabold text-center dark:text-white text-black">{{ title }}</h1>
    </SiteTransitionBottom>
  </div>
</template>

<script setup lang="ts">
import {useWindowScroll} from "@vueuse/core";

const props = defineProps({
  title: String,
  visible: Boolean
})

</script>