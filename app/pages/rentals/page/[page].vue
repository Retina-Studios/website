<script setup lang="ts">
import RentalCatalogView from '~/components/rentals/RentalCatalogView.vue'
import {
  getEquipmentFilteredPageCount,
  normalizeEquipmentDocuments,
  parseEquipmentCategoryQuery,
} from '~/data/equipmentCatalog'

const route = useRoute()
const currentPage = Number(route.params.page)

if (!Number.isInteger(currentPage) || currentPage < 1) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Catalog page not found',
  })
}

const selectedCategory = parseEquipmentCategoryQuery(route.query.category)
const { data: rentalDocuments } = await useAsyncData('rentals-catalog', () => queryCollection('rentals').all())
const equipmentItems = computed(() => normalizeEquipmentDocuments(rentalDocuments.value ?? []))
const equipmentPageCount = computed(() => getEquipmentFilteredPageCount(equipmentItems.value, selectedCategory))

if (currentPage > equipmentPageCount.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Catalog page not found',
  })
}

useHead({
  title: `Ενοικίαση Εξοπλισμού | Σελίδα ${currentPage} | Retina Studios`,
  meta: [
    {
      name: 'description',
      content:
        'Σελιδοποιημένος κατάλογος ενοικίασης εξοπλισμού της Retina Studios με τιμές ανά 1, 3 και 7 ημέρες.',
    },
  ],
})
</script>

<template>
  <RentalCatalogView :items="equipmentItems" :current-page="currentPage" />
</template>
