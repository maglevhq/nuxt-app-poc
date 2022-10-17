<script setup lang="ts">
import apiConfig from '~~/maglev-core/config'
import { APIMaglevPage } from '~~/maglev-core/types'
import theme from '~~/maglev/theme'

const { data: page } = useFetch<APIMaglevPage>(
  `${apiConfig.apiBaseURL}/page`, { 
    params: { path: 'index' }, 
    headers: {
      'Authorization': `Token token="${apiConfig.apiKey}"`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
</script>

<template>
  <div>
    <h1 class="text-center bg-teal-200 text-green-700 text-2xl py-4">{{ page.title }}</h1>    
    <hr/>
    <MaglevSections :theme="theme" :sections="page.sections" />
  </div>  
</template>