#!/usr/bin/env node
import axios from 'axios'
import theme from "~~/maglev/theme"
import { MaglevConfig, MaglevTheme } from "~~/maglev-core/types"
import config from "~~/maglev-core/config"

async function updateTheme(theme: MaglevTheme, config: MaglevConfig) {
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

console.log("Hi 👋! We're sending your theme/sections to the Maglev server")
updateTheme(theme, config)
.then(() => console.log("✅ Synced with the server"))
.catch((message) => console.log('🚨', message))
