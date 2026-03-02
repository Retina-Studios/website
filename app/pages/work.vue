<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/work')

useHead({
  title: 'Η δουλειά μας | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Work Page Migration</h1>
    <p>
      Standard-content template route. We will migrate this page by extracting reusable sections
      from the Wix snapshot into native components.
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
