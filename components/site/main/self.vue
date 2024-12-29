<template>

  <div class="w-fit m-auto flex flex-col gap-2 z-0 p-12">
    <SiteTransitionLeft delay="0ms">

      <span class="opacity-0 text-4xl font-sans text-neutral-900 dark:text-neutral-200">
        👋 I'm
      </span>

    </SiteTransitionLeft>

    <SiteTransitionLeft delay="100ms">
      <h1 class="font-extrabold max-md:text-center text-5xl md:text-8xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
        CodeFlusher
      </h1>
    </SiteTransitionLeft>

    <SiteTransitionLeft delay="200ms">

      <span class="opacity-0 text-4xl font-sans mb-4">
        Mainly i'm a <b class=" text-neutral-900 dark:text-neutral-200">Front-End Developer</b>
      </span>


    </SiteTransitionLeft>


    <KitBackgroundSeparator/>


    <SiteTransitionLeft delay="300ms">

      <span class="opacity-0 font-bold text-4xl font-sans text-neutral-900 dark:text-neutral-200">
        But I also...
      </span>

    </SiteTransitionLeft>
    <ul class="translate-x-2 text-4xl font-sans flex flex-col gap-2 mb-4">
      <SiteTransitionLeft :delay="`${400 + index*100}ms`" v-for="(item, index) in activities">
        <li class="flex">
          <div class="size-2 dark:bg-white bg-black my-auto rounded-full"/>
          <span class="transition-all hover:font-bold">
            {{item}}
          </span>

        </li>

      </SiteTransitionLeft>
    </ul>
    <SiteMainSocial/>
  </div>

</template>

<style>

</style>

<script setup lang="ts">

import type {SocialCard} from "~/types/frontend.cards";

const activities = ref<String[]>([
  "📕Learn Java",
  "👷‍♂️Work on my projects",
  "🎮Play games"
])


</script>