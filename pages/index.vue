<template>

  <SiteTransitionTop>
    <div class="fixed top-2 w-screen flex z-[1000]" v-if="y>200">
      <div class="mx-auto rounded-full border-2 border-red-500 backdrop-blur-sm backdrop-brightness-90 bg-red-500/20 p-4 px-12 text-2xl justify-items-center text-white">
        
        <h1 class="font-bold max-lg:hidden">
          THIS SITE IS CURRENTLY <b class="font-extrabold">WIP</b>
        </h1>
        <b class="font-extrabold lg:hidden">WIP</b>
        <h2 class="max-lg:hidden">
          That means that everything is a thing to change and may not work!
        </h2>
    
      </div>
    </div>
  </SiteTransitionTop>

  <NuxtImg class="z-10 max-xl:hidden pfp-clip-path object-cover absolute left-0 top-0 h-screen aspect-[2/3]" src="/images/self.png"/>
  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>

  <div class="min-h-screen xl:pl-[66vh] flex bg-gradient-to-b from-green-100 to-zinc-100 dark:from-green-950 dark:to-neutral-950" >
    <SiteMainSelf/>
  </div>
  
  <div class="h-screen w-full overflow-hidden">
    <div ref="langsTitleRef">
      <SiteStackTitle :visible="langsTitle" class="h-fit" title="Languages and frameworks"/>
    </div>
    <div class="h-96 mb-12" ref="stacksRef">
      <SiteStackView :visible="visibleStacks"/>
    </div>
    <div ref="projectsTitleRef">
      <SiteStackTitle :visible="projectsTitle" title="My Projects"/>
    </div>
      
  </div>  

</template>
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const {y} = useWindowScroll()

const langsTitleRef = ref<HTMLElement>();

const langsTitle = computed(()=>{
  
  if (langsTitleRef.value) {
    const rect = langsTitleRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < -rect.height;
  }
  return false;
})

const projectsTitleRef = ref<HTMLElement>();

const projectsTitle = computed(()=>{
  
  if (projectsTitleRef.value) {
    const rect = projectsTitleRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < -rect.height;
  }
  return false;
})


const stacksRef = ref<HTMLElement>();

const visibleStacks = computed(()=>{
  
  if (projectsTitleRef.value) {
    const rect = projectsTitleRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < -rect.height;
  }
  return false;
})

</script>