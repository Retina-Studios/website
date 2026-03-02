<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

const route = useRoute()
const path = computed(() => `/projects/vignettes/${route.params.slug}`)
const snapshot = computed(() => getSnapshot(path.value))

useHead(() => ({
  title: snapshot.value?.title ?? 'Vignette Project | Retina Studios',
}))
</script>

<template>
  <section>
    <h1>Vignette Detail Migration</h1>
    <p>
      Nested standard-content detail route for vignettes. Snapshot mapping is driven by slug.
    </p>
  </section>

  <SnapshotViewer
    v-if="snapshot"
    :title="`Reference snapshot: ${snapshot.title}`"
    :snapshot-path="snapshot.snapshotPath"
  />

  <section v-else class="missing">
    <p>No local snapshot mapped for <code>{{ path }}</code>.</p>
  </section>
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

.missing {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid #d7d7ce;
  border-radius: 0.5rem;
  background: #fff;
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}
</style>
