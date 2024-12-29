<template>

  <div class="rounded-full transition-all duration-500 ease-in-out h-2 dark:bg-neutral-400 bg-neutral-700 bg-opacity-25" :class="active ? 'w-12' : 'w-2'">
    <slot>

    </slot>
  </div>

</template>

<script setup lang="ts">

const active = defineModel<boolean>('active')
const progress = defineModel<number>('progress')

</script>