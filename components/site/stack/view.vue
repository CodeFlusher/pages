<template>

  <SiteTransitionBottom delay="500ms">
    <div class="flex flex-col gap-4" v-show="visibleTitle">
      <KitItemPicker class="mt-auto mx-auto" v-model:item="currentItem" v-model:progress="time" v-model:items="stacks.length"/>

      <div class="h-full w-full flex" ref="titleRef" >
        <div class="absolute flex h-full bg-opacity-0 hover:bg-opacity-10 bg-zinc-500 p-12 transition duration-200 z-10 max-lg:hidden" @click="decrement(true)">
          <ArrowLeftIcon class="size-12 my-auto" />
        </div>
        <div class="w-full backdrop-blur-0 flex">
          <SiteTransitionCycle delay="0ms" class="" v-for="(item, index) in stacks" >
            <div v-if="index === currentItem" class="lg:flex w-full h-full my-auto absolute px-4 lg:p-24">
              <div class="w-1/2 max-lg:mx-auto m-auto backdrop-blur-0" @wheel="wheel">
                  <NuxtImg :src="item.image" class="min-w-full max-w-full aspect-square z-0" @click="openLink(item.url)"/>

                  <div class="absolute w-full aspect-square -translate-y-full blur-3xl opacity-25 rounded-full -z-10" :style="{
                    background: `#${item.color}`
                  }">

                  </div>
              </div>
              <div class="lg:w-1/2 my-auto" @wheel="wheel">
                <h2 class="text-4xl lg:text-8xl max-lg:text-center text-transparent bg-clip-text bg-gradient-to-r font-extrabold" :class="item.additional">
                  {{item.name}}
                </h2>
                <h3 class="max-lg:text-center text-2xl lg:text-4xl font-bold">{{item.description}}</h3>
              </div>

            </div>
          </SiteTransitionCycle>

        </div>
        <div class="absolute flex h-full bg-opacity-0 hover:bg-opacity-10 bg-zinc-500 p-12 z-10 transition duration-200 right-0 max-lg:hidden" @click="increment(true)">
          <ArrowRightIcon class="size-12 my-auto" />
        </div>

      </div>

    </div>
  </SiteTransitionBottom>
</template>

<script setup lang="ts">

import Nuxt from '~/public/icons/nuxt.svg'
import TailwindCSS from '~/public/icons/tailwindcss.svg'
import JavaIcon from 'public/icons/javaicon.svg'

import {useWindowScroll} from "@vueuse/core";
import {openLink} from "~/utils/utils";

import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/vue/24/solid";
import type {StackCard} from "~/types/frontend.cards";
import {before} from "node:test";

const currentItem = ref<number>(0)
const time = ref<number>(50)
const transitionTime = 100;

const stacks = ref<StackCard[]>([{
  name: "NuxtJS",
  description: "Modern Vue.js framework",
  image: Nuxt,
  url: "https://nuxtjs.com/",
  color: "00C16A",
  additional: "from-green-500 to-green-700"

},{
  name: "Tailwind CSS",
  description: "Easy-to-use framework for html styling",
  image: TailwindCSS,
  url: "https://tailwindcss.com/",
  color: "06b6d4",
  additional: "from-sky-500 to-sky-700"
},{
  name: "Java",
  description: "Highly used production language for app building",
  image: JavaIcon,
  url: "https://java.com/",
  color: "ed6800",
  additional: "from-orange-500 to-orange-700"

}])

const increment = (drop: boolean) => {
    currentItem.value += 1;
    if (drop) {
      time.value = transitionTime / 2;
    }
    if (currentItem.value >= stacks.value.length) {
      currentItem.value = 0
    }
}

const decrement = (drop:boolean) => {
    currentItem.value -= 1;
    if (drop) {
      time.value = transitionTime / 2;
    }
    if (currentItem.value < 0) {
      currentItem.value = stacks.value.length - 1;
    }
}

const titleRef = ref<HTMLElement>();

const {y} = useWindowScroll()

const visibleTitle = computed(()=>{
  if (titleRef.value) {
    const rect = titleRef.value.getBoundingClientRect();
    console.log(rect.top + y.value)
    return y.value + y.value + rect.top - window.innerHeight > 0;
  }
  return false;
})

if(process.client){
  setInterval(() => {
    if(!visibleTitle.value){
      return;
    }
    time.value += 1
    if(time.value >= transitionTime) {
      increment(false)
      time.value = 0
    }
  }, 100)
}


const wheel = (event: WheelEvent)=>{
  time.value += event.deltaX / 10;
  if(time.value < 0) {
    time.value = transitionTime / 2
    decrement(false)
  }
  if (time.value >= transitionTime) {
    time.value = transitionTime / 2;
    increment(false)
  }
}

</script>