<script setup lang="ts">
import RentalCatalogView from '~/components/rentals/RentalCatalogView.vue'

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
  <RentalCatalogView :current-page="1" />
</template>
