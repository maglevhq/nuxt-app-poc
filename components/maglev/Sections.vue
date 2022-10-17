<script setup lang="ts">
  import { PropType } from 'vue'
  import { APIMaglevPageSection, MaglevTheme } from '~~/maglev-core/types'
  import { convertAPISections } from '~~/maglev-core/convertors'

  const props = defineProps({
    theme: {
      type: Object as PropType<MaglevTheme>,
      required: true
    },    
    sections: {
      type: Array as PropType<APIMaglevPageSection[]>,
      required: true
    }
  })

  const currentAPISections = ref<APIMaglevPageSection[]>(props.sections)
  const currentSections = computed(() => convertAPISections(props.theme, currentAPISections.value))

  const changeCurrentSections = (event) => {
    currentAPISections.value = event.detail.content.pageSections  
  }

  const removeSection = (event) => {
    currentAPISections.value = currentAPISections.value.filter(section => {
      return section.id !== event.detail.sectionId
    })
  }

  onMounted(() => {
    window.addEventListener('maglev:section:add', changeCurrentSections)
    window.addEventListener('maglev:section:move', changeCurrentSections)
    window.addEventListener('maglev:section:remove', removeSection)    
  })

  onBeforeUnmount(() => {
    window.removeEventListener('maglev:section:add', changeCurrentSections)
    window.removeEventListener('maglev:section:move', changeCurrentSections)
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