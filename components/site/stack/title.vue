<template>
  <div class="p-2 w-full flex mt-4">
    <SiteTransitionLeft>
      <h1 ref="titleRef" v-show="visibleTitle" class="mx-auto break-words w-full text-2xl lg:text-6xl font-extrabold text-center dark:text-white text-black">Languages and frameworks</h1>
    </SiteTransitionLeft>
  </div>
</template>

<script setup lang="ts">
import {useWindowScroll} from "@vueuse/core";

const titleRef = ref<HTMLElement>();

const {x, y} = useWindowScroll()

const isVisible = ref<boolean>(true)

  const visibleTitle = computed(()=>{
    if (titleRef.value) {
      const rect = titleRef.value.getBoundingClientRect();
      return y.value + y.value + rect.top - window.innerHeight > 0;
    }
    return false;
  })
</script>