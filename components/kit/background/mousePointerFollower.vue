<template>

  <div class="fixed w-screen h-screen left-0 top-0" @mousemove="mouseMoveEvent" @mouseleave="enabled=false" @mouseenter="enabled=true">
    <div class="fixed size-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 -z-50" :class="positionClass" :style="{
      left: `${x}px`,
      top: `${y}px`,
      background: `#${color}`
    }">

    </div>
  </div>

</template>

<script setup lang="ts">

const enabled = ref<boolean>(false);

const x = ref<number>(0);
const y = ref<number>(0);

const props = defineProps({
  color: String
})

const positionClass = computed(()=>{
  return enabled.value ? 'opacity-50' : 'opacity-0';
})

const mouseMoveEvent = (event: MouseEvent) => {
  x.value = event.x;
  y.value = event.y;

}

</script>
