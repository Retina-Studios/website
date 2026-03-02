<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const snapshot = getSnapshot('/blog')

useHead({
  title: 'Νέα | Retina Studios',
})
</script>

<template>
  <section>
    <h1>Blog Listing Migration</h1>
    <p>
      This is the blog index route. It belongs to the blog template family and will eventually feed
      post cards into the `/post/[slug]` route.
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
