<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/retina-sessions')

useHead({
  title: 'Μουσικά Retina Sessions | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Retina Sessions Migration</h1>
    <p>
      Standard-content template route. This page likely has media-heavy sections and should be
      converted with reusable media components.
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
