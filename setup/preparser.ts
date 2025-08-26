import { definePreparserSetup } from '@slidev/types'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

// Create a dictionary with Slidev variables
var envPrefix = process.env.SLIDEV_PREFIX || 'SLIDEV_'
var vars = {}

for (const env in process.env) {
  if (env.startsWith(envPrefix))
    vars[`%${env}%`] = process.env[env]
}

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {

          // Replace variables
          for (const v in vars) {
            if (lines[i].includes(v)) {
              lines[i] = lines[i].replace(v, vars[v])
            }
          }
        }
      },
      async transformNote(note, frontmatter) {
        if ('_note' in frontmatter && fs.existsSync(frontmatter._note)) {
          try {
            const newNote = fs.readFileSync(frontmatter._note, 'utf8')
            return newNote
          } catch (err) {
          }
        }

        return note
      },
    }
  ]
})