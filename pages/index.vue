<template>


  <NuxtImg class="max-xl:hidden pfp-clip-path object-cover absolute left-0 top-0 h-screen aspect-[2/3]" src="https://avatars.githubusercontent.com/u/50952974?v=4"/>

  <div class="min-h-screen w-screen xl:pl-[66vh] flex bg-gradient-to-b from-green-100 to-zinc-100 dark:from-green-950 dark:to-neutral-950" >
    <SiteMainSelf/>
  </div>
  <div class="h-screen w-screen">
    <SiteStackTitle/>
    <SiteStackView class="h-full"/>

  </div>
  <div class="h-screen"></div>
</template>
<script setup lang="ts">
</script>