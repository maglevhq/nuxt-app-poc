<script setup lang="ts">
  import { PropType } from 'vue'
import { buildSectionFromAPI } from '~~/maglev-core/convertors';
  import { APIPageSection, SectionDefinitionMapping } from '~~/maglev-core/types'
  
  const props = defineProps({    
    sections: {
      type: Array as PropType<APIPageSection[]>,
      required: true
    },
    sectionDefinitionMapping: {
      type: Object as PropType<SectionDefinitionMapping>,
      required: true
    },    
  })

  const currentAPISections = ref<APIPageSection[]>(props.sections)

  const currentSections = computed(() => currentAPISections.value.map(apiSection => 
  buildSectionFromAPI(apiSection, props.sectionDefinitionMapping)))
  
  const changeSections = (event) => {
    currentAPISections.value = event.detail.content.pageSections  
  }

  const replaceSection = (event) => {
    const newSection = event.detail.section
    currentAPISections.value = currentAPISections.value.map(section => {
      return section.id === newSection.id ? newSection : section
    })
  }

  const removeSection = (event) => {
    currentAPISections.value = currentAPISections.value.filter(section => {
      return section.id !== event.detail.sectionId
    })
  }

  onMounted(() => {
    window.addEventListener('maglev:section:add', changeSections)
    window.addEventListener('maglev:section:move', changeSections)
    window.addEventListener('maglev:section:setting:update', replaceSection)
    window.addEventListener('maglev:section:remove', removeSection)    
  })

  onBeforeUnmount(() => {
    window.removeEventListener('maglev:section:add', changeSections)
    window.removeEventListener('maglev:section:move', changeSections)
    window.removeEventListener('maglev:section:setting:update', replaceSection)
    window.removeEventListener('maglev:section:remove', removeSection)    
  })
</script>
<template>
  <MaglevDynamicSection 
    v-for="section in currentSections" 
    :key="section.id" 
    :section="section"
  />
</template>