import { APIMaglevPageSection, MaglevPageSection, MaglevTheme } from "./types";

export const convertAPISections = (theme: MaglevTheme, apiSections: APIMaglevPageSection[]): MaglevPageSection[] => {
  return apiSections.map(section => ({
    id: section.id,
    type: section.type,
    settings: {},
    blocks: []
  }))
}

// CTA 01 => theme.sections[0]
// const section = foo('cta_01', theme, content)
// section.settings.title // Yeah!
// section.settings.blabla // type error
export const magicFunction = (id: string, theme: MaglevTheme, content: APIMaglevPageSection) => {
  
}