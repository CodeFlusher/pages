<template>

  <div ref="cardRef">
  <SiteTransitionBottom delay="0ms">
    <div class="flex flex-col gap-4 h-fit" v-show="visible">
      <div class="absolute left-0 p-4 lg:p-12 h-96 flex z-10 cursor-pointer" @click="decrement">
        <ArrowLeftIcon class="size-10 dark:text-neutral-300 dark:hover:text-white trantsition-colors m-auto"></ArrowLeftIcon>
      </div>
      <div class="h-fit flex z-0"  >
        <div class="h-96 absolute w-full overflow-x-hidden">
          <SiteTransitionCycle delay="0ms" class="" v-for="(item, index) in stacks" >
            <div v-if="index === currentItem" class="grid max-lg:grid-rows-2 grid-rows-1 lg:grid-cols-2 w-full h-96 absolute my-auto p-4 lg:px-24" @wheel="wheel">
              <div class="flex">
                <div class="backdrop-blur-0 aspect-square h-full max-lg:mx-auto ml-auto cursor-pointer" @click="openLink(item.url)">
                  <NuxtImg :src="item.image" class="h-full aspect-square"></NuxtImg>
                  <div class="aspect-square absolute h-[50%] rounded-full blur-3xl opacity-20 -translate-y-[150%] translate-x-1/2 " :style="{background: `#${item.color}`}"/>
                </div>
              </div>
              <div class="flex">
                <div class="max-lg:items-center max-lg:text-center justify-items-center max-lg:mx-auto lg:my-auto lg:mr-auto flex flex-col">
                  <h3 class="bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-4xl lg:text-8xl" :class="item.additional">{{item.name}}</h3>
                  <h4 class="text-2xl">{{item.description}}</h4>
                </div>
              </div>
            </div>
          </SiteTransitionCycle>
        </div>
      </div>
      <div class="absolute right-0 p-4 lg:p-12 h-96 flex z-10 cursor-pointer" @click="increment">
        <ArrowRightIcon class="size-10 dark:text-neutral-300 dark:hover:text-white trantsition-colors m-auto"></ArrowRightIcon>
      </div>
      <KitItemPicker class="mt-96 mx-auto" v-model:item="currentItem" v-model:progress="time" v-model:items="stacks.length"/>

    </div>
  </SiteTransitionBottom>
</div>
</template>

<script setup lang="ts">

import Nuxt from 'public/images/icons/nuxt.svg'
import TailwindCSS from 'public/images/icons/tailwindcss.svg'
import JavaIcon from 'public/images/icons/javaicon.svg'

import {useWindowScroll} from "@vueuse/core";
import {openLink} from "~/utils/utils";

import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/vue/24/solid";
import type {StackCard} from "~/types/frontend.cards";

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

if(process.client){
  setInterval(() => {
    if(!visible.value){
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


const {y} = useWindowScroll()

const cardRef = ref<HTMLElement>();

const visible = computed(()=>{
  
  if (cardRef.value) {
    const rect = cardRef.value.getBoundingClientRect();
    const computedValue = rect.y - y.value
    return computedValue < 0;
  }
  return false;
})

</script>