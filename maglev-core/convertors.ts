import { APIMaglevPageSection, MaglevPageSection, MaglevTheme } from "./types";

export const convertAPISections = (theme: MaglevTheme, apiSections: APIMaglevPageSection[]): MaglevPageSection[] => {
  return apiSections.map(section => ({
    id: section.id,
    type: section.type,
    settings: {},
    blocks: []
  }))
}