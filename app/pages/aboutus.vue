<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/aboutus')

useHead({
  title: 'Ποιοι είμαστε | Retina Studios',
})
</script>

<template>
  <section>
    <h1>About Us Migration</h1>
    <p>
      This is another standard-content page. It should reuse the same shell and section primitives
      as home and services.
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
