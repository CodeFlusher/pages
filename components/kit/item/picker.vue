<template>

  <div class="flex gap-2">
    <div class="rounded-full transition-all duration-500 ease-in-out h-3 dark:bg-neutral-400 bg-neutral-700 bg-opacity-25" :class="index===activeItem+1 ? 'w-12' : 'w-3'" v-for="index in items" :key="index" @click="activeItem=index-1">
      <div class="rounded-full dark:bg-neutral-100 bg-neutral-900 h-full transition duration-[10ms] min-w-3" :style="{
        width: `${progress}%`,
      }" v-if="index === activeItem + 1">

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

  const props = defineProps({
    items: Number,
  })

  const activeItem = defineModel<number>('item')
  const progress = defineModel<number>('progress')

  const computedWidth = computed(()=>{
    return `w-[${progress.value}%]`
  })

</script>
