<template>

  <input class="" v-model="state" type="range">

<!--  <KitSliderButton class="transition-all  z-10" :class="computePosition" />-->
<!--  <KitSliderBackground class="z-0 w-full my-auto"/>-->

</template>

<script setup lang="ts">

import {clamp} from "~/utils/math";

const state = ref<number>(100.0);

const dragState = ref<boolean>(false);

const parent = ref<HTMLElement | null>(null);

</script>
