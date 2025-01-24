<template>
  <div class="p-2 w-full flex mt-4" ref="cardRef">
    <SiteTransitionBottom>
      <h1 v-show="visible"  class="mx-auto break-words w-full text-2xl lg:text-6xl font-extrabold text-center dark:text-white text-black">{{ title }}</h1>
    </SiteTransitionBottom>
  </div>
</template>

<script setup lang="ts">
import {useWindowScroll} from "@vueuse/core";

const props = defineProps({
  title: String,
})

const {y} = useWindowScroll()

const cardRef = ref<HTMLElement>();

const visible = computed(()=>{
  
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < 0;
  }
  return false;
})

</script>