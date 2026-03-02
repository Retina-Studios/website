<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/product-photography')

useHead({
  title: 'Φωτογράφιση Καταλόγου | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Product Photography Migration</h1>
    <p>
      Standard-content template route. This page is queued for section-by-section conversion into
      native Nuxt components.
    </p>
  </section>

  <SnapshotViewer
    v-if="snapshot"
    :title="`Reference snapshot: ${snapshot.title}`"
    :snapshot-path="snapshot.snapshotPath"
  />
</template>

<style scoped>
h1 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

p {
  max-width: 70ch;
  line-height: 1.5;
}
</style>
