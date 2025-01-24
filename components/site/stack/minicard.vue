<template>
  <NuxtLink class="h-full aspect-square backdrop-blur-0 cursor-pointer" @mouseenter="state=true" @mouseleave="state=false" :to="props.url">
    <NuxtImg loading="lazy" :alt="name" class="h-full aspect-square transition duration-500" :class="state ? `blur-2xl` : `blur-none` " :src="image"/>
    <span class="pointer-events-none text-2xl absolute -translate-y-1/2 h-full w-full transition-opacity text-center duration-500 font-bold" :class="state ? `opacity-100` : `opacity-0`"> {{ props.name }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>

import type { StackMiniCard } from '~/types/frontend.cards';

const props = defineProps<StackMiniCard>()

const state = ref<boolean>(false)

</script>
