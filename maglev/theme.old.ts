import { Theme } from "../maglev-core/types";

// export type MaglevCta01Section = {
//   settings: {
//     title: MaglevTextSettingType
//     body: MaglevTextSettingType
//     background_image: MaglevImageSettingType
//   }
// }

const theme: Theme = {
  name: "blabla",
  description: "First Maglev theme ported to Nuxt",
  icons: [],
  sectionCategories: [
    { id: 'cta', name: 'Call to action' },
    { id: 'feature', name: 'Feature' },
    { id: 'product_collection', name: 'Product collection' }    
  ],
  sections: [
    {
      id: 'cta_01',
      name: "CTA #1",
      category: 'cta',
      settings: [
        {
          id: 'title',
          label: 'Title',
          type: 'text',
          default: 'Hello world!'
        },
        {
          id: 'body',
          label: 'Body',
          type: 'text',
          html: true,
          lineBreak: true,
          default: 'Lorem ipsum'
        },
        {
          id: 'background_image',
          label: 'Background image',
          type: 'image',
          default: 'https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        }
      ],
      blocks: [],
      sample: {
        settings: {
          title: 'Hello world',
          body: 'Lorem ipsum',
          background_image: 'https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        blocks: []
      }
    },
    {
      id: 'product_collection_01',
      name: "Collection #1",
      category: 'product_collection',
      settings: [],
      blocks: [],
      sample: {
        settings: {},
        blocks: []
      }
    }    
  ],
  styleSettings: []
}

export default theme