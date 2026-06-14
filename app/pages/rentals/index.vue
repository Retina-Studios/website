<script setup lang="ts">
import RentalCatalogView from '~/components/rentals/RentalCatalogView.vue'
import { normalizeEquipmentDocuments } from '~/data/equipmentCatalog'

const { data: rentalDocuments } = await useAsyncData('rentals-catalog', () => queryCollection('rentals').all())
const equipmentItems = computed(() => normalizeEquipmentDocuments(rentalDocuments.value ?? []))

useHead({
  title: 'Ενοικίαση Εξοπλισμού | Retina Studios',
  meta: [
    {
      name: 'description',
      content:
        'Κατάλογος ενοικίασης εξοπλισμού της Retina Studios με κάμερες, φακούς, φώτα, ήχο και studio support για 1, 3 ή 7 ημέρες.',
    },
  ],
})
</script>

<template>
  <RentalCatalogView :items="equipmentItems" :current-page="1" />
</template>
