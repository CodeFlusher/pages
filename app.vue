<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
useHead({
  title: 'CodeFlusher',
  meta: [
    {name: "description", content: 'Personal page for myself. Hop in and take a look'},
  ]
})

useSeoMeta({
  title: 'CodeFlusher',
  ogTitle: 'CodeFlusher',
  description: 'Personal page for myself. Hop in and take a look',
  ogDescription: 'Personal page for myself. Hop in and take a look',

})

definePageMeta({
  title: "CodeFlusher",
  name: "CodeFlusher",
})
</script>