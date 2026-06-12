<script setup lang="ts">
import RentalCatalogView from '~/components/rentals/RentalCatalogView.vue'
import { equipmentPageCount } from '~/data/equipmentCatalog'

const route = useRoute()
const currentPage = computed(() => Number(route.params.page))

if (!Number.isInteger(currentPage.value) || currentPage.value < 1 || currentPage.value > equipmentPageCount) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Catalog page not found',
  })
}

useHead({
  title: `Ενοικίαση Εξοπλισμού | Σελίδα ${currentPage.value} | Retina Studios`,
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
  <RentalCatalogView :current-page="currentPage" />
</template>
