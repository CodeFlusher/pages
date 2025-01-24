<template>

  <div class="bg-transparent backdrop-blur-3xl fixed w-full h-[100px] z-[1000] text-2xl text-center text-white pointer-events-none" :style="{
    height: `${clamp(y/2, 200)}px`,
    maskImage: `linear-gradient(0deg, transparent 0%, rgba(0, 0, 0, 1.0) 80%)`,
    opacity: `${clamp(y/4, 100)}%`
  }">
    <h1 class="font-bold max-lg:hidden">
      THIS SITE IS CURRENTLY <b class="font-extrabold">WIP</b>
    </h1>
    <b class="font-extrabold lg:hidden">WIP</b>
    <h2 class="max-lg:hidden">
      That means that everything is a thing to change and may not work!
    </h2>
  </div>

  <LazyNuxtImg class="z-10 max-xl:hidden pfp-clip-path object-cover absolute left-0 top-0 h-screen aspect-[2/3]" src="/images/self.png"/>

  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>

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

</template>
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const {y} = useWindowScroll()

</script>