<script setup lang="ts">
import apiConfig from '~~/maglev-core/config'
import { APIPage } from '~~/maglev-core/types'
import { sectionDefinitionMapping } from '~~/maglev/types'

const { data: page } = useFetch<APIPage>(
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
    <MaglevSections 
      :section-definition-mapping="sectionDefinitionMapping" 
      :sections="page.sections" 
    />
  </div>  
</template>