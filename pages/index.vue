<script setup lang="ts">
import apiConfig from '~~/maglev/config'
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
    <MaglevSections 
      :section-definition-mapping="sectionDefinitionMapping" 
      :sections="page.sections" 
    />
  </div>  
</template>