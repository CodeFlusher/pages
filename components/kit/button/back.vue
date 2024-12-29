<template>
  <div class="flex">
    <ArrowUturnLeftIcon class="text-style-title size-6 hover:text-orange-300"></ArrowUturnLeftIcon>
    <div class="mt-0.5 ml-2">
    <KitNavigationTab class="my-auto text-style-normal"> {{$t('ui.nav.back')}} </KitNavigationTab>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ArrowUturnLeftIcon} from "@heroicons/vue/24/solid";

</script>