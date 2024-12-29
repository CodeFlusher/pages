<template>

  <div>
    <label for="input_field" class="text-style-title text-xl"> {{label}} </label>
    <div id="input_field" class="flex w-full gap-2">
      <KitInputField class="w-full" :enabled='true' type="number" :input="amount" placeholder="0" @update="handleUpdate" />
      <span class="text-style-normal text-xl my-auto"> <slot/> </span>
    </div>


  </div>

</template>

<script setup lang="ts">

import 'vue-slider-component/theme/antd.css'

const props = defineProps({
  max: Number,
  min: Number,
  label: String,
})

const handleUpdate = (value: number) => {
  amount.value = value
}

const amount = defineModel<number>('amount')
amount.value = 0

</script>