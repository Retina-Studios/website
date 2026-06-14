import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

import { equipmentCategoryKeys } from './app/data/equipmentCategories'

export default defineContentConfig({
  collections: {
    rentals: defineCollection({
      type: 'page',
      source: 'rentals/**/*.md',
        schema: z.object({
          title: z.string(),
          order: z.number().int().positive(),
          categories: z.array(z.enum(equipmentCategoryKeys)).min(1),
          images: z.array(z.string()).min(1),
          prices: z.object({
            '1': z.number().nullable().optional(),
            '3': z.number().nullable().optional(),
            '7': z.number().nullable().optional(),
          }),
        }),
    }),
  },
})
