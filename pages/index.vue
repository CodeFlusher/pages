<template>

  <NuxtImg class="z-10 max-xl:hidden pfp-clip-path object-cover absolute left-0 top-0 h-screen aspect-[2/3]" src="https://avatars.githubusercontent.com/u/50952974?v=4"/>
  <SiteBackgroundPaws class="absolute"/>

  <div class="min-h-screen xl:pl-[66vh] flex bg-gradient-to-b from-green-100 to-zinc-100 dark:from-green-950 dark:to-neutral-950" >
    <SiteMainSelf/>
  </div>
  <div class="h-screen">
    <SiteStackTitle/>
    <SiteStackView class="h-full"/>
  </div>
</template>
<script setup lang="ts">
</script>