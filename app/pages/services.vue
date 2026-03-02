<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/services')

useHead({
  title: 'Services | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Services Page Migration</h1>
    <p>
      This route is the standard-content template. It should share most of its shell with the
      homepage while allowing different body sections.
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
