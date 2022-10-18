import{ APIPageSection, Section, SectionDefinitionMapping, TextSetting, ImageSetting } from "./types"

export function buildSectionFromAPI(apiSection: APIPageSection, sectionDefinitionMapping: SectionDefinitionMapping): Section {  
  const section: Section = {
    id: apiSection.id,
    type: apiSection.type,
    settings: {},
    blocks: []
  }  

  Object.keys(sectionDefinitionMapping[apiSection.type].settings).forEach(settingId => {
    const type = sectionDefinitionMapping[apiSection.type].settings[settingId]
    const value = apiSection.settings.find(setting => setting.id === settingId).value
    section.settings[settingId] = buildSetting[type](section, settingId, value)
  })

  return section
}

const buildSetting = {
  text: (section: Section, settingId: string, value: string): TextSetting => {
    return {
      domId: `${section.id}.${settingId}`,
      value
    }
  },
  image: (section: Section, settingId: string, value: undefined | null | Record<string, any>): ImageSetting => {
    const domId = `${section.id}.${settingId}`
    if (!value) return { domId, url: null }
    return { 
      domId, 
      url: value.url, 
      altText: value.alt_text,
      size: value.size, 
      width: value.width, 
      height: value.height 
    }
  }
}

// export function previousBuildSectionFromAPI<T>(apiSection: APIPageSection, sectionDefinitionMapping: SectionDefinitionMapping): T {  
//   const section: Section = {
//     id: apiSection.id,
//     settings: {},
//     blocks: []
//   }
//   return section as T
// }

// import { APIMaglevPageSection, MaglevPageSection, MaglevTheme } from "./types";

// export const convertAPISections = (theme: MaglevTheme, apiSections: APIMaglevPageSection[]): MaglevPageSection[] => {
//   return apiSections.map(section => ({
//     id: section.id,
//     type: section.type,
//     settings: {},
//     blocks: []
//   }))
// }

// CTA 01 => theme.sections[0]
// const section = foo('cta_01', theme, content)
// section.settings.title // Yeah!
// section.settings.blabla // type error
// export const magicFunction = (id: string, theme: Theme, content: APIPageSection) => {
  
// }