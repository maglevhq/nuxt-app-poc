import { resolve } from "path";
import { fileURLToPath } from "url";

import {
  defineNuxtModule,
  addComponentsDir
} from "@nuxt/kit"

export default defineNuxtModule({
  setup(options, nuxt) {
    console.log('Installing Maglev module')
    addComponentsDir({ path: "~/maglev", global: true, pathPrefix: false });

    // addComponent({
    //   name: 'MyComponent', // name of the component to be used in vue templates
    //   export: 'MyAwesomeComponent', // (optional) if the component is a named (rather than default) export
    //   // filePath should be package name or resolved path
    //   // if the component is created locally, preferably in `runtime` dir
    //   filePath: '@vue/awesome-components' // resolve(runtimeDir, 'components', 'MyComponent.vue')
    // })
  }
})