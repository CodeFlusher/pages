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

const javaStackCard = {
  name: "Java",
  image: JavaIcon,
  url: "https://java.com/"
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
      javaStackCard
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
  },
])

</script>
