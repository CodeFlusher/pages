<template>
  <div ref="cardRef" >
    <SiteTransitionBottom>
      <div v-if="isVisible" class="rounded-xl grid grid-rows-2 grid-cols-1 h-full">
        <LazyNuxtImg :src="image" alt="project image" class="w-full h-[170%] object-cover rounded-t-xl pointer-events-none object-top" :style="{
          maskImage: `linear-gradient(0deg, transparent 40%, rgba(0, 0, 0, 1.0) 50%)`
        }"/>
        <div class="w-full flex flex-col">
          <div class="flex max-lg:flex-col lg:justify-between mb-4">
            <SiteTransitionBottom>
              <h2 class="font-extrabold text-6xl">
                {{ props?.name }}
              </h2>
            </SiteTransitionBottom>
            <div class="flex gap-4">
              <SiteTransitionBottom delay="200ms" >
                <NuxtLink :to="props.source" class="text-neutral-500 text-2xl cursor-pointer flex gap-2">
                  <span class="flex mb-auto text-opacity-100 transition duration-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600"> Source </span>
                  <CodeBracketIcon class="size-6 mt-2 mb-auto transition duration-200 hover:text-black dark:hover:text-white"/>
                </NuxtLink>
              </SiteTransitionBottom>
              <SiteTransitionBottom delay="300ms">
                <NuxtLink class="text-neutral-500 text-2xl cursor-pointer flex gap-2" :to="props.url"  v-if="!code">
                  <span class="mb-auto text-opacity-100 transition duration-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600"> View </span>
                  <ArrowUpRightIcon class="size-6 mt-2 mb-auto transition duration-200 hover:text-black dark:hover:text-white"/>
                </NuxtLink>
              </SiteTransitionBottom>
            </div>
          </div>
          <SiteTransitionBottom delay="400ms">
            <div class="flex flex-col h-full">
              <div class="h-full w-full mb-4">
                <span class="text-2xl">
                  {{ props.description }}
                </span>
                <h4 class="text-4xl dark:text-white text-black font-bold mt-4"> Reason: </h4>
                <span class="text-2xl h-full break-words">
                  {{ props.reason }}
                </span>
              </div>
              <div class="mt-auto">
                <SiteTransitionBottom delay="600ms">
                  <h3 class="text-xl">
                    Stack:
                  </h3>
                </SiteTransitionBottom>
                <ul class="h-32 flex gap-2">
                  <SiteTransitionBottom v-for="(item, index) in stack" :delay="`${800+200*index}ms`">
                    <div class="flex flex-col aspect-square h-32">
                      <SiteStackMinicard :image="item.image" :name="item.name" :url="item.url"></SiteStackMinicard>
                    </div>
                  </SiteTransitionBottom>
                </ul>
              </div>            
            </div>
          </SiteTransitionBottom>
        </div>
      </div>
    </SiteTransitionBottom>
  </div>
</template>

<script lang="ts" setup>
import { CodeBracketIcon } from '@heroicons/vue/24/solid';
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';

import { useWindowScroll } from '@vueuse/core';
import type { ProjectCard } from '~/types/frontend.cards';

const {y} = useWindowScroll()

const cardRef = ref<HTMLElement>()

const props = defineProps<ProjectCard>()

const isVisible = computed(()=>{
  
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < -rect.height;
  }
  return false;
})

</script>