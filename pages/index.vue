<template>

    <div class="fixed top-2 w-screen flex z-[1000]">
      <div class="mx-auto rounded-full border-2 border-red-500 backdrop-blur-sm backdrop-brightness-90 bg-red-500/20 p-4 px-12 text-2xl justify-items-center">
        
        <h1 class="font-bold max-lg:hidden">
          THIS SITE IS CURRENTLY <b class="font-extrabold">WIP</b>
        </h1>
        <b class="font-extrabold lg:hidden">WIP</b>
        <h2 class="max-lg:hidden">
          That means that everything is a thing to change and may not work!
        </h2>
    
      </div>
    </div>

  <NuxtImg class="z-10 max-xl:hidden pfp-clip-path object-cover absolute left-0 top-0 h-screen aspect-[2/3]" src="/images/self.png"/>
  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>
  <SiteBackgroundPaws class="absolute"/>

  <div class="min-h-screen xl:pl-[66vh] flex bg-gradient-to-b from-green-100 to-zinc-100 dark:from-green-950 dark:to-neutral-950" >
    <SiteMainSelf/>
  </div>
  <div class="h-screen">
    <SiteStackTitle/>
    <SiteStackView/>
  </div>
</template>
<script setup lang="ts">

</script>