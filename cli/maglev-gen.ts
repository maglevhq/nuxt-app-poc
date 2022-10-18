#!/usr/bin/env node
import theme from "~~/maglev/theme"
import { MaglevSectionDefinition, MaglevTheme } from "~~/maglev-core/types"
import { Feature01 } from "~~/.nuxt/components"

const generateTypes = async (theme: MaglevTheme) => {
  console.log('yeah 🎶🎶🎶')
}

console.log("👋 Hi! We're going to generate the types for your sections")
generateTypes(theme)
.then(() => console.log("✅ .ts sections genereted"))
.catch((message) => console.log('🚨', message))

// type SectionMapping<SectionDefinitions> = {

// }

const sectionDefinition = theme.sections[0]

type FormatArrayElement<K extends keyof any> = { id: K, name: string }

type BuildSectionMappings<T extends FormatArrayElement<keyof any>> = {
  [S in T as S['id']]: S
}

// type SectionMappings = BuildSectionMappings<theme.sections>
const definitions = theme.sections

// type ThemeSectionIds = typeof definitions.map((definition) => definition)