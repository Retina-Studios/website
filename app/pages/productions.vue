<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

definePageMeta({
  path: '/%CF%80%CE%B1%CF%81%CE%B1%CE%B3%CF%89%CE%B3%CE%AD%CF%82-%CF%84%CE%B1%CE%B9%CE%BD%CE%B9%CF%8E%CE%BD',
})

const snapshot = getSnapshot('/παραγωγές-ταινιών')

useHead({
  title: 'Productions | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Film Productions Migration</h1>
    <p>
      Standard-content template route mapped to the Greek slug. This page will be migrated with
      the same reusable section system as the other standard pages.
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
