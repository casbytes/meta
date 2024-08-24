import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '3c6o9k5n',
    dataset: process.env.SANITY_STUDIO_DATASET!,
  },
})
