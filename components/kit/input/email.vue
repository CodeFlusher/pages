<template>
  <div class="w-full backdrop-blur-0">
    <label class="text-style-title text-xl" for="input_field">{{$t('ui.input.email.title')}}</label>
    <KitCardClickable :oclass="{'border-red-500 focus:border-red-500 dark:border-red-500 hover:border-red-500 bg-red-500 dark:bg-red-500 bg-opacity-15 dark:bg-opacity-15' : isContextShown}">
      <input id="input_field" class="p-2 w-full text-xl outline-none bg-transparent text-style-normal border border-transparent transition-all duration-400 rounded-xl"  :placeholder="$t('ui.input.email.placeholder')" v-model="email" :disabled="false" type="email">
    </KitCardClickable>
    <div class="p-2 w-full absolute opacity-0 origin-top text-style-title duration-300 ease-in-out text-xl transition-all bg-zinc-200 dark:bg-neutral-800 border rounded-xl broder-zinc-300 dark:border-neutral-700 pointer-events-none" :class="{'translate-y-2 opacity-100 pointer-events-all': isContextShown}" >
      {{ $t('ui.input.email.wrong') }}
    </div>
  </div>
</template>

<script setup lang="ts">

const email = defineModel<string>('email')

if(!email.value) {
  email.value = ''
}

const isContextShown = computed(()=>{
  if(email.value){
    return email.value.length > 0 && email.value.indexOf('@') == -1
  }else{
    return false
  }
})

const overrideClass = computed(()=>{
  const common = "bg-red-500 border-red-500 dark:border-red-500 bg-opacity-15"
  if(isContextShown.value){
    return common + " " + "p-2"
  }
  else{
    return common + " " + "px-2"
  }
})


</script>