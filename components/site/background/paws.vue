<template>
  <div class="w-full h-screen overflow-hidden" ref="pawsRoot">
    <SiteBackgroundPawsRow
        :paws="amountOfPaws"
        :delay="pawDelay"
        :style="{
          position: 'absolute',
          transform: `rotate(${180+paws.rotation}deg)`,
          left: `${paws.x}vw`,
          top: `${paws.y}vh`,
        }
      "
        
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

const amountOfPaws = 75

const pawDelay = 500;

const max = 100;

const createPosition = ()=>{
  const position = randomInRange(4,0)  
  const target = {
    x: randomInRange(1, -1),
    y: randomInRange(1, -1),
  }
  var xPos = 0;
  var yPos = 0;
  switch(position){
    case 1:
      xPos = -5 + randomInRange(5, 0);
      yPos = randomInRange(100, 0),
      paws.value = {
        x: xPos,
        y: yPos,
        rotation: 180+(180/Math.PI) * Math.atan((yPos-target.y) / (xPos- target.x))
      }
      break
    case 2:
      xPos = randomInRange(100, 0),
      yPos = -5 + randomInRange(5, 0);
      paws.value = {
        x: xPos,
        y: yPos,
        rotation: 180+(180/Math.PI) * Math.atan((yPos-target.y) / (xPos- target.x))
      }
      break
    default:
      xPos = randomInRange(100, 0),
      yPos = 100 + randomInRange(5, 0);
      paws.value = {
        x: xPos,
        y: yPos,
        rotation: -90+ (180/Math.PI) * Math.atan((yPos-target.y) / (xPos- target.x))
      }
      break
  }

  
}

if(process.client){
  createPosition();
  setInterval(() => {
    createPosition();
  }, pawDelay*(amountOfPaws + 10))
}

</script>
