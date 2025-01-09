<template>
  <div class="w-full h-screen overflow-hidden" ref="pawsRoot">
    <SiteBackgroundPawsRow
        :paws="amountOfPaws"
        :style="{
          transform: `rotate(${180+paws.rotation}deg) translateX(${paws.x}px) translateY(${paws.y}px)`,
        }
      "
        class="left-1/2 top-1/2"
    ></SiteBackgroundPawsRow>
  </div>
</template>

<script setup lang="ts">

import type {PawRow} from "~/types/frontend.cards";

const paws = ref<PawRow>({
  x:0,
  y:0,
  rotation:0,
});

const amountOfPaws = 50

const max = 100;

const createPosition = ()=>{

}

if(process.client){
  setInterval(() => {
    createPosition();
  }, 500*amountOfPaws)
}

</script>
