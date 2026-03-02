<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/contact')

useHead({
  title: 'Επικοινωνία | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Contact Page Migration</h1>
    <p>
      Standard-content template route. This will be rebuilt as a native Nuxt page while preserving
      route-level SEO metadata.
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
