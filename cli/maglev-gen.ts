#!/usr/bin/env node
import theme from "~~/maglev/theme"
import { MaglevTheme } from "~~/maglev-core/types"

const generateTypes = async (theme: MaglevTheme) => {
  console.log('yeah 🎶🎶🎶')
}

console.log("👋 Hi! We're going to generate the types for your sections")
generateTypes(theme)
.then(() => console.log("✅ .ts sections genereted"))
.catch((message) => console.log('🚨', message))