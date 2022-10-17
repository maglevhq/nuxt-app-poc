<script setup lang="ts">
  useHead({
    title: 'My Nuxt website',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    script: [
      {
        src: 'http://localhost:3000/maglev/dev-live-preview-client.js',
        body: true
      }
    ]
  })
</script>
  
<template>
  <div>
    <slot />
  </div>
</template>
