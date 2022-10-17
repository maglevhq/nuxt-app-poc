export type MaglevTheme = {
  name: string
  description: string
  sectionCategories: MaglevSectionCategory[]
  sections: MaglevSectionDefinition[]  
  styleSettings: MaglevSectionDefinitionSetting[]
  icons: string[]
}

export type MaglevSectionCategory = {
  id?: string
  name: string
}

export type MaglevSectionDefinition = {
  id: string
  name: string
  category: string
  site_scoped?: boolean
  settings: MaglevSectionDefinitionSetting[]
  blocks: MaglevSectionDefinitionBlock[]
  blocks_label?: string
  blocks_presentation?: 'tree' | 'list'
  sample: {
    settings: any
    blocks: {
      type: string
      settings: any
    }[]
  }
}

export type MaglevSectionDefinitionBlock = {
  name: string
  type: string
  settings: MaglevSectionDefinitionSetting[]
}

export type MaglevSectionDefinitionSetting = {
  id: string
  label: string
  type: 'text' | 'checkbox' | 'image' | 'icon'
  html?: boolean
  lineBreak?: boolean
  nbRows?: number
  default: string | boolean
}

export type MaglevConfig = {
  apiBaseURL: string
  apiKey: string
}

export type APIMaglevPageSection = {
  id: string
  type: string
  blocks: {
    id: string
    type: string
    settings: APIMaglevPageSetting[]
  }
  settings: APIMaglevPageSetting[]
}

export type APIMaglevPageSetting = {
  id: string
  value: string | Record<string, any>
}

export type APIMaglevPage = {
  id: string
  title: string
  path: string
  pathHash: Record<string, string>
  sections: APIMaglevPageSection[]
  seoTitle: string | null
  metaDescription: string | null
  ogTitle: string | null
  ogDescription: string | null
  ogImageUrl: string | null
}

export type MaglevPageSection = {
  id: string
  type: string
  blocks: {
    id: string
    type: string
    settings: Record<string, MaglevPageTextSetting>
  }[]
  settings: Record<string, MaglevPageTextSetting>
}

export type MaglevPageTextSetting = {
  domId: string
  value: string
}