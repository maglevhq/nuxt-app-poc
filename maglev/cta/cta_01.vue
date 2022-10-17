<script setup lang="ts">
  import { PropType } from 'vue'
  import { MaglevPageSection } from '~~/maglev-core/types'
  
  defineProps({
    section: {
      type: Object as PropType<MaglevPageSection>,
      required: true
    },     
  })
</script>

<template>
  <aside class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
    <pre><code>{{ section }}</code></pre>
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center sm:text-left">
        <!-- <h2 
          class="text-2xl font-bold text-gray-900 md:text-3xl" 
          :data-maglev-id="`${section.id}.${section.settings[0].id}`"
        >
          {{ section.settings[0].value }}
        </h2> -->

        <!-- <p 
          class="hidden text-gray-500 md:mt-4 md:block"           
          :data-maglev-id="`${section.id}.${section.settings[1].id}`"
          v-html="section.settings[1].value"
        /> -->
        
        <div class="mt-4 md:mt-8">
          <a
            href="#"
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>

    <!-- <img
      alt="Student"
      :data-maglev-id="`${section.id}.${section.settings[2]?.id}`"
      :src="section.settings[2]?.value?.url"
      class="h-56 w-full object-cover sm:h-full"
    /> -->
  </aside>
</template>