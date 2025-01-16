<template>
  <div class="absolute h-screen origin-top">
    <div v-for="item in paws" class="transition duration-1000" :class="item < paw && item > paw-visiblePaws ? 'opacity-100' : 'opacity-0'">
      <img :src="PawIcon" class="size-6 rotate-180 text-white" :class="item%2==0 ? `translate-x-2` : `-translate-x-2`"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import PawIcon from 'public/images/paw.svg'

const paw = ref<number>(0);

const update = (): void => {
  paw.value = 0;
}

const visiblePaws = 10;
const props = defineProps({
  paws: Number,
  delay: Number
})

if(process.client){
  setInterval(() => {
    paw.value ++;
    if(props.paws){
      if (paw.value >= props.paws + visiblePaws){
        update()
      }
    }
  }, props.delay)
}
</script>