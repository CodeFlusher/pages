<template>
  <div>
    <SiteTransitionBottom>
      <div v-if="isVisible">
        
      </div>
    </SiteTransitionBottom>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';


const {y} = useWindowScroll()

const cardRef = ref<HTMLElement>()

const isVisible = computed(()=>{
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < -rect.height;
  }
  return false;
})

</script>