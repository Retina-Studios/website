<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/projects')

useHead({
  title: 'Δημιουργικά project | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Projects Page Migration</h1>
    <p>
      Standard-content template route. We will migrate this page and keep nested subroutes for
      project categories and showcases.
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
