#!/usr/bin/env node
import axios from 'axios'
import readdirGlob from 'readdir-glob'
import fs from 'fs'
import Ajv from "ajv"
import config from "~~/maglev/config"
import ThemeJsonSchema from '~~/maglev-core/theme-json-schema.json'
import SectionJsonSchema from '~~/maglev-core/section-json-schema.json'
import { MaglevConfig } from '~~/maglev-core/types'

console.log("Hi 👋! We're going to send your theme/sections to the Maglev server\n\n")

async function updateTheme(theme: any, config: MaglevConfig) {
  try {
    await axios.put(
      `${config.apiBaseURL}/theme`,
      { theme },
      {
        headers: {
          'Authorization': `Token token="${config.apiKey}"`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw `API error message: ${error.message}`
    } else {
      throw `Unexpected error: ${error.message}`
    }
  }
}

const fetchLocalTheme = async (maglevPath: string): Promise<any> => {
  const ajv = new Ajv({ allowUnionTypes: true })
  const rawTheme = await fs.readFileSync(`${maglevPath}/theme.json`, { encoding: 'utf8', flag: 'r' })
  const theme = JSON.parse(rawTheme)
  const valid = ajv.validate(ThemeJsonSchema, theme)
  if (!valid) {
    console.log(ajv.errors)
    throw "Your theme.json file is not valid"
  }

  theme.sections = []

  return new Promise((resolve, reject) => {
    const globber = readdirGlob(maglevPath, { pattern: '**/*.schema.json' })
    globber.on('match', async (match) => {
      const rawSection = await fs.readFileSync(match.absolute, { encoding: 'utf8', flag: 'r' })
      const section = JSON.parse(rawSection)
      const valid = ajv.validate(SectionJsonSchema, section)

      if (!valid) reject(ajv.errors)

      theme.sections.push(section)
    })
    globber.on('end', () => {  
      resolve(theme)
    })
  })
}

fetchLocalTheme('./maglev').then(theme => {
  return updateTheme(theme, config).then(() => {
    console.log("✅ The theme has been sent to the Maglev server 🎉")
  })
}).catch(error => console.log(error))