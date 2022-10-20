import{ APIPageSection, Section, SectionDefinitionMapping, TextSetting, ImageSetting, Block, APIPageBlock, ContentElement, Setting, APIPageSetting, BlockDefinitionMapping, IconSetting, SelectSetting, CheckboxSetting, RadioSetting, ColorSetting, LinkSetting } from "./types"

export function buildSectionFromAPI(apiSection: APIPageSection, sectionDefinitionMapping: SectionDefinitionMapping): Section {  
  const section: Section = {
    id: apiSection.id,
    type: apiSection.type,
    settings: {},
    blocks: []
  }  

  section.settings = buildSettings(
    section,
    apiSection.settings,
    sectionDefinitionMapping[apiSection.type].settings,    
  )

  section.blocks = apiSection.blocks.map(apiBlock => 
    buildBlock(
      apiBlock, 
      sectionDefinitionMapping[apiSection.type].blocks
    )
  )  
  
  return section
}

const buildBlock = (apiBlock: APIPageBlock, blockDefinitionMapping: BlockDefinitionMapping): Block => {
  const block: Block = {
    id: apiBlock.id,
    type: apiBlock.type,
    settings: {}
  }

  block.settings = buildSettings(
    block,
    apiBlock.settings,
    blockDefinitionMapping[block.type].settings,    
  )

  return block
}

const buildSettings = (contentElement: ContentElement, contentSetting: APIPageSetting[], settingMapping: Record<string, string>): Record<string, Setting> => {
  const settings: Record<string, Setting> = {}

  const settingFactory = new SettingFactory(contentElement)

  Object.keys(settingMapping).forEach(settingId => {
    const type = settingMapping[settingId]
    const value = contentSetting.find(setting => setting.id === settingId)?.value
    settings[settingId] = settingFactory.build(type, settingId, value)
  })

  return settings
}

class SettingFactory {

  static settingMap: Record<string, (domId: string, value: unknown) => Setting> = {}

  parent: ContentElement

  constructor(parent: ContentElement) {
    this.parent = parent
  }

  static register(type: string, builder: (domId,value: unknown) => Setting) {
    this.settingMap[type] = builder
  }

  build(type: string, settingId: string, value: unknown): Setting {
    const builder = SettingFactory.settingMap[type]

    if (!builder) throw `🚨 Unknow setting type: ${type}.`

    return SettingFactory.settingMap[type](this.domId(settingId), value)
  }

  private domId(settingId: string) {
    return `${this.parent.id}.${settingId}`
  }  
}

SettingFactory.register('text', (domId, value: string | undefined): TextSetting => {
  return { domId, value }
})

SettingFactory.register('image', (domId, value: undefined | null | Record<string, any>): ImageSetting => {
  const safeValue = !value ? { url: null } : {
    url: value.url, 
    altText: value.alt_text,
    size: value.size, 
    width: value.width, 
    height: value.height 
  }
  return { domId, ...safeValue }
})

SettingFactory.register('link', (domId, value: any | undefined): LinkSetting => {
  const safeValue = !value ? { href: null, text: null, openNewTab: false } : {
    href: value.href,
    text: value.text,
    openNewTab: value.open_new_tab
  }
  return { domId, ...safeValue }
})

SettingFactory.register('icon', (domId, value: string | undefined): IconSetting => {
  return { domId, value }
})

SettingFactory.register('select', (domId, value: string | undefined): SelectSetting => {
  return { domId, value }
})

SettingFactory.register('radio', (domId, value: string | undefined): RadioSetting => {
  return { domId, value }
})

SettingFactory.register('checkbox', (domId, value: boolean | undefined): CheckboxSetting => {
  return { domId, value }
})

SettingFactory.register('color', (domId, value: string | undefined): ColorSetting => {
  return { domId, value }
})