<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead: string
}>()
</script>

<template>
  <section class="hero">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="lead">{{ lead }}</p>
  </section>
</template>

<style scoped>
.hero {
  padding: 1rem 0 1.5rem;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  color: #5c5b54;
}

h1 {
  margin: 0.25rem 0 0;
  font-size: clamp(1.8rem, 4.2vw, 3rem);
  line-height: 1.15;
}

.lead {
  margin: 0.9rem 0 0;
  max-width: 74ch;
  line-height: 1.6;
  color: #262621;
  font-size: 1rem;
}
</style>
