<script setup lang="ts">
  useHead({
    title: 'My Nuxt website',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    script: [
      {
        src: 'http://localhost:3000/maglev/live-preview-client.js',
        body: true
      },      
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
      }
    ]
  })
</script>
  
<template>
  <div>
    <slot />
  </div>
</template>
