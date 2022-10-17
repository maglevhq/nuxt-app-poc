<script setup lang="ts">
  import { PropType } from 'vue'
  import { APIMaglevPageSection, MaglevTheme } from '~~/maglev-core/types'
  
  const props = defineProps({    
    id: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    theme: {
      type: Object as PropType<MaglevTheme>,
      required: true
    },
    section: {
      type: Object as PropType<APIMaglevPageSection>,
      required: true
    },
  })

  const sectionDefinition = computed(() => props.theme.sections.find(definition => definition.id === props.section.type))
  const settingDefinition = computed(() => sectionDefinition.value.settings.find(definition => definition.id === props.id))
  const rawContent = computed(() => props.section.settings.find(setting => setting.id === props.id)?.value)
  
  
</script>
<template>
  <component :is="tag" :data-maglev-id="`${section.id}.${id}`">
    <slot></slot>
  </component>  
</template>