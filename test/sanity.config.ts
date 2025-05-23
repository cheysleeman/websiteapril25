import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Test',

  projectId: '2utgg96w',
  dataset: 'testdb',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
