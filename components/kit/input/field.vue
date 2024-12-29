<template>
  <KitCardClickable class="flex">
    <slot></slot>
    <input class="p-2 w-full text-xl outline-none bg-transparent text-style-normal" :class="{'shadow-none border-none' : !enabled}" :placeholder="placeholder" v-model="inputData" :disabled="!enabled" :type="type" @input="inputEvent">
  </KitCardClickable>
</template>

<script setup lang="ts">

const props = defineProps({
  type:String,
  placeholder:String,
  enabled:Boolean,
})


const emits = defineEmits([
  'update',
])

const inputEvent = (event: InputEvent)=>{

  emits('update',inputData.value)
}

const inputData = defineModel<string>('input')

</script>