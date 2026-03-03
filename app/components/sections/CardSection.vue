<script setup lang="ts">
import type { StandardCard } from '~/data/standardPages'

defineProps<{
  heading: string
  intro?: string
  cards: StandardCard[]
}>()
</script>

<template>
  <section class="section">
    <h2>{{ heading }}</h2>
    <p v-if="intro" class="intro">{{ intro }}</p>

    <div class="grid">
      <article v-for="card in cards" :key="card.title" class="card">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-top: 2.2rem;
}

h2 {
  margin: 0;
  font-size: clamp(1.2rem, 2.7vw, 1.7rem);
}

.intro {
  margin: 0.6rem 0 0;
  color: #44443d;
  line-height: 1.6;
  max-width: 70ch;
}

.grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0.9rem;
}

.card {
  grid-column: span 12;
  background: #fff;
  border: 1px solid #dfdfd7;
  border-radius: 0.7rem;
  padding: 1rem;
}

.card h3 {
  margin: 0;
  font-size: 1rem;
}

.card p {
  margin: 0.55rem 0 0;
  line-height: 1.55;
  color: #2e2e29;
}

@media (min-width: 720px) {
  .card {
    grid-column: span 6;
  }
}
</style>
