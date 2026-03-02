<script setup lang="ts">
defineProps<{
  title: string
  snapshotPath: string
}>()
</script>

<template>
  <section class="snapshot">
    <div class="header">
      <h2>{{ title }}</h2>
      <a :href="snapshotPath" target="_blank" rel="noopener">Open raw snapshot</a>
    </div>
    <iframe :src="snapshotPath" :title="title" loading="lazy" />
  </section>
</template>

<style scoped>
.snapshot {
  margin-top: 1.5rem;
  border: 1px solid #d7d7ce;
  border-radius: 0.6rem;
  overflow: hidden;
  background: #fff;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #e8e8e1;
}

h2 {
  margin: 0;
  font-size: 1rem;
}

a {
  color: #1545c3;
  text-decoration: none;
  font-size: 0.9rem;
}

a:hover {
  text-decoration: underline;
}

iframe {
  display: block;
  width: 100%;
  min-height: 70vh;
  border: 0;
  background: #fff;
}
</style>
