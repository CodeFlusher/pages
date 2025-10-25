<template>
  <div class="flex flex-col gap-2">
    <KitBackgroundSeparator/>
    <SiteTransitionLeft delay="700ms">
          <span class="opacity-0 text-4xl font-sans text-neutral-900 dark:text-neutral-200">
            You can find me in
          </span>
    </SiteTransitionLeft>

    <div class="grid grid-cols-1 gap-2">
      <div v-for="(item, index) in social">
        <SiteTransitionBottom :delay="`${800+index*100}ms`">
          <div class="flex p-2 gap-2 w-full cursor-pointer"  @mouseenter="item.active=true" @mouseleave="item.active=false">
            <NuxtImg loading="lazy" class="aspect-square object-cover size-12 lg:size-24 my-auto" :src="item.image" @click="openLink(item.url)"></NuxtImg>
            <div class="absolute blur-2xl aspect-square transition-all duration-500 size-12 lg:size-24 -z-10" :class="item.active ? 'opacity-50' :'opacity-0'" :style="{background: `#${item.color}`}"></div>
            <div class="flex flex-col gap-2 w-full">
              <div class="flex justify-between gap-2">
                <a class="text-2xl lg:text-3xl font-semibold" :href="item.url" @click="openLink(item.url)">
                  {{item.name}}
                </a>
                <KitNavigationTab class="text-xl lg:text-3xl font-light mt-auto" @click="copyToClipborard(item.name)">
                  {{item.userId}}
                </KitNavigationTab>
              </div>
              <div @click="openLink(item.url)">
                <span class="text-2xl">{{item.description}}</span>
              </div>
            </div>
          </div>
        </SiteTransitionBottom>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Telegram from 'public/images/icons/telegram.svg'
import Discord from 'public/images/icons/discord.svg'
import YouTube from 'public/images/icons/youtube.svg'
import type {SocialCard} from "~/types/frontend.cards";

import {openLink, copyToClipborard} from "~/utils/utils";

const social = ref<SocialCard[]>([
  {
    name: "Telegram",
    description: "My telegram account",
    url: "https://t.me/codeflusher",
    userId: "@codeflusher",
    image: Telegram,
    color: "0088CC",
    active: false,
  },
  {
    name: "Discord",
    description: "My discord server",
    url: "https://discord.gg/X8kUwRkRbW",
    userId: "codeflusher",
    image: Discord,
    color: "7289da",
    active: false,
  },
  {
    name: "Youtube",
    description: "Youtube channel",
    url: "https://www.youtube.com/@codeflusher",
    userId: "@codeflusher",
    image: YouTube,
    color: "FF0000",
    active: false,
  }
]);

</script>