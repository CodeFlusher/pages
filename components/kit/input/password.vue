<template>

  <div class="w-full backdrop-blur-0">

  <KitInputTitled :enabled="enabled" type="password" :input="password" :title="compareMode ? 'Repeat Passowrd' : 'Password'" placeholder="eg. password123" @update="updatePassword">
  </KitInputTitled>

    <div class="p-2 w-full absolute opacity-0 origin-top text-style-title duration-300 ease-in-out text-xl transition-all bg-zinc-200 dark:bg-neutral-800 border rounded-xl broder-zinc-300 dark:border-neutral-700 pointer-events-none" :class="{'translate-y-2 opacity-100 pointer-events-all': compareState}" v-if="showContext && compareMode">
      <span>
        Passwords should be equal
      </span>

    </div>

    <div class="p-2 w-full absolute opacity-0 origin-top text-style-title duration-300 ease-in-out text-xl transition-all bg-zinc-200 dark:bg-neutral-800 border rounded-xl broder-zinc-300 dark:border-neutral-700 pointer-events-none" :class="{'translate-y-2 opacity-100 pointer-events-all': isContextVisible}" v-if="showContext && !compareMode">
      <span>
        Password must pass these tests
      </span>
      <ul class="text-style-normal font-normal ml-2">
        <li class="transition-all bg-neutral-800 dark:bg-neutral-300 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-600" :class="{'text-transparent ': len }">Password should be at least 8 symbols long</li>
        <li class="transition-all bg-neutral-800 dark:bg-neutral-300 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-600" :class="{'text-transparent ': symbols }">Password should contain english letters</li>
        <li class="transition-all bg-neutral-800 dark:bg-neutral-300 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-600" :class="{'text-transparent ': digits }">Password should contain numbers</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const password = defineModel<string>('password')

const emits = defineEmits(['update'])

const props = defineProps({
  enabled: Boolean,
  showContext: Boolean,
  compareMode: Boolean,
})

const compareModel = defineModel<string>('compareTo');

const updatePassword = (value:string) => {
  password.value = value;
  emits('update', password.value);
}

const compareState = computed(()=>{
  if(!password.value){
    return false
  }
  if(!compareModel.value){
    return false
  }
  return password.value != compareModel.value && password.value.length>0 && compareModel.value.length > 0
})

const len= computed(()=>{
    if(!password.value){
      return false
    }
    return password.value.length >= 8;
  })

const symbols = computed(()=>{
    if(!password.value){
      return false
    }
    return /[A-Za-z]/.test(password.value)
  })

const digits = computed(()=>{
    if(!password.value){
      return false
    }
    return /\d/.test(password.value);
})

const isContextVisible = computed(()=>{
  if(password.value){
    return !(digits.value && symbols.value && len.value)
  }else{
    return false
  }

})

</script>