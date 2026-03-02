<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/')

useHead({
  title: 'Retina Studios | Nuxt Migration Workspace',
})
</script>

<template>
  <section>
    <h1>Nuxt Transition Workspace</h1>
    <p>
      This page is now running in Nuxt. We keep the original Wix page as a snapshot reference while
      we rebuild each section as native Vue components.
    </p>
    <ol>
      <li>Keep route structure stable.</li>
      <li>Port shared shell (header/footer/layout).</li>
      <li>Replace section-by-section with native Nuxt components.</li>
    </ol>
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

ol {
  padding-left: 1.2rem;
  margin-top: 0.8rem;
}
</style>
