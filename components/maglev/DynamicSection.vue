<script setup lang="ts">
  import { PropType } from 'vue'
  import { Section } from '~~/maglev-core/types'
  import { camelize } from '~~/maglev-core/utils'
  
  const props = defineProps({
    section: {
      type: Object as PropType<Section>,
      required: true
    }   
  })

  const sectionComponentName = computed(() => camelize(props.section.type))
  const sectionComponent = computed(() => resolveComponent(sectionComponentName.value))  
</script>
<template>
  <component 
    :is="sectionComponent" 
    :section="section" 
    :data-maglev-section-id="section.id" 
  />  
</template>