<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/projects/vignettes')

useHead({
  title: 'Φωτογραφίσεις "Vignettes" | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Projects / Vignettes Migration</h1>
    <p>
      Nested standard-content route under projects. This page will share project-level layout
      primitives after migration.
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
