<template>
  <div class="flex flex-col">
    <label class="text-style-title text-xl" for="input_field">{{title}}</label>
    <div class="flex w-full">
      <KitInputField class="w-full"  id="input_field" :placeholder="placeholder" :type="type" :enabled="enabled" @update="updateModel" ></KitInputField>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type:String,
  placeholder:String,
  enabled:Boolean,
  title: String
})

const model = defineModel<String>('input')

const emits = defineEmits(["update"])

const updateModel = (value: String)=>{
  model.value = value
  emits('update', value)
}


</script>

