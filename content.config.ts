import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

import { equipmentCategoryKeys } from './app/data/equipmentCatalog'

export default defineContentConfig({
  collections: {
    rentals: defineCollection({
      type: 'page',
      source: 'rentals/**/*.md',
      schema: z.object({
        title: z.string(),
        order: z.number().int().positive(),
        categories: z.array(z.enum(equipmentCategoryKeys)).min(1),
        summary: z.string(),
        image: z.string(),
        price1Day: z.number().nullable(),
        price3Days: z.number().nullable(),
        price7Days: z.number().nullable(),
      }),
    }),
  },
})
