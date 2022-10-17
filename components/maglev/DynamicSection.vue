<script setup lang="ts">
  import { PropType } from 'vue'
  import { MaglevPageSection } from '~~/maglev-core/types'
  
  const props = defineProps({
    section: {
      type: Object as PropType<MaglevPageSection>,
      required: true
    }    
  })

  // TODO: util function
  const camelize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  }

  const currentSection = ref<MaglevPageSection>(props.section)

  const sectionComponentName = computed(() => camelize(currentSection.value.type))
  const sectionComponent = computed(() => resolveComponent(sectionComponentName.value))

  const changeCurrentSection = (event) => {
    const newSection = event.detail.section
    if (newSection.id === currentSection.value.id)
      currentSection.value = newSection
  }

  onMounted(() => {
    window.addEventListener('maglev:section:setting:update', changeCurrentSection)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('maglev:section:setting:update', changeCurrentSection)
  })
</script>
<template>
  <component :is="sectionComponent" :section="currentSection" :data-maglev-section-id="section.id" />  
</template>