<template>

  <KitEffectsProgressiveBlur class="fixed z-50" direction="top" :intensity="20" :size="150" :layers-count="5" :relative-transform="clamp(-1*(100-y/8), 0, -100)">
    <div class="z-0 mx-auto text-center">
      <h1 class="font-bold text-4xl">
        CodeFlusher
      </h1>
      <h2>Personal page of the developer</h2>
      <h2 class="text-xs">
        nya uwu meow meow
      </h2>
    </div>
  </KitEffectsProgressiveBlur>


  <LazyNuxtImg class="z-10 max-xl:hidden pfp-clip-path object-cover absolute left-0 top-0 h-screen aspect-[2/3]" src="/images/self.png"/>

  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>

  <LazyNuxtImg src="/images/projects/gcalc.webp" class="hidden"></LazyNuxtImg>
  <LazyNuxtImg src="/images/projects/house.webp" class="hidden"></LazyNuxtImg>
  <LazyNuxtImg src="/images/projects/ravm.webp" class="hidden"></LazyNuxtImg>

  <div class="min-h-screen xl:pl-[66vh] flex bg-gradient-to-b from-green-100 to-zinc-100 dark:from-green-950 dark:to-neutral-950" >
    <SiteMainSelf/>
  </div>
  
  <div class="min-h-screen w-full overflow-hidden">
    <div>
      <SiteStackTitle class="h-fit" title="Languages and frameworks"/>
    </div>
    <div class="h-96 mb-12">
      <SiteStackView />
    </div>
    <div class="w-full mb-8">
      <SiteStackTitle class="h-24" title="My Projects"/>
      <SiteProjects/>
    </div>
  </div>

  <div>
    <SiteFooter></SiteFooter>
  </div>

</template>
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import {definePageMeta} from "#imports";

const {y} = useWindowScroll()


</script>
