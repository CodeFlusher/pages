<template>
  <ul class="flex flex-col gap-12">
    <SiteProjectsCard class=" max-lg:min-h-[48rem] lg:h-[48rem] lg:w-2/3 max-lg:mx-4 mx-auto" v-for="item in projects" :name="item.name" :description="item.description" :url="item.url" :image="item.image" :stack="item.stack" :reason="item.reason">

    </SiteProjectsCard>
  </ul>
</template>

<script lang="ts" setup>
import type { ProjectCard } from '~/types/frontend.cards';

import NuxtIcon from 'public/images/icons/nuxt.svg'
import TailwindCSSIcon from 'public/images/icons/tailwindcss.svg'
import JavaIcon from 'public/images/icons/javaicon.svg'
import LWJGLIcon from 'public/images/icons/LWJGL.svg'
import LombokIcon from 'public/images/icons/lombok.svg'

const javaStackCard = {
  name: "Java",
  image: JavaIcon,
  url: "https://java.com/"
}

const lombokStackCard = {
  name: "Lombok",
  image: LombokIcon,
  url: "https://projectlombok.org/"
}

const lwjglStackCard = {
  name: "LWJGL",
  image: LWJGLIcon,
  url: "https://www.lwjgl.org/"
}

const nuxtStackCard = {
  name: "NuxtJS",
  image: NuxtIcon,
  url: "https://nuxtjs.com/"
}

const tailwindStackCard = {
  name: "TailwindCSS",
  image: TailwindCSSIcon,
  url: "https://tailwindcss.com/"
}

const projects = ref<ProjectCard[]>([
  {
    name: "GCalc",
    description: "3 Dimentional graph builder",
    url: "https://github.com/CodeFlusher/GCalc",
    reason: "Pure mathematical interest caused me to create a tool that can make 3-d graphs in realtime",
    image: "/images/projects/gcalc.webp",
    stack: [
      javaStackCard,
      lwjglStackCard,
      lombokStackCard
    ]
  },{
    name: "Project Household",
    description: "Training web page for imaginary e-commerce company",
    url: "https://house.codeflusher.gay/",
    reason: "Gaining expirience. Thats it. Nothing else. Purely I just want more expirience and work for my portfolio",
    image: "/images/projects/house.webp",
    stack: [
      nuxtStackCard,
      tailwindStackCard
    ]
  },{
    name: "Redstone Assembly Virtual Machine",
    description: "Runtime for assembly-like code with memory",
    url: "https://github.com/CodeFlusher/RedstoneAssemblyVirtualMachine",
    reason: "Mainly for fun and expirience, but I wanted to make a mincraft mod that would control redstone logic with code. Maybe I will make it one day.",
    image: "/images/projects/ravm.webp",
    stack: [
      javaStackCard,
      lombokStackCard
    ]
  },
])

</script>
