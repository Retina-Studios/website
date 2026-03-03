<script setup lang="ts">
defineProps<{
  title: string
  text: string
  actionLabel: string
  actionTo: string
}>()
</script>

<template>
  <section class="cta">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <NuxtLink :to="actionTo">{{ actionLabel }}</NuxtLink>
  </section>
</template>

<style scoped>
.cta {
  margin-top: 2.2rem;
  border: 1px solid #dadad1;
  border-radius: 0.9rem;
  padding: 1.1rem 1rem 1.2rem;
  background: #f3f2ec;
}

h2 {
  margin: 0;
  font-size: clamp(1.2rem, 2.7vw, 1.6rem);
}

p {
  margin: 0.6rem 0 0;
  line-height: 1.6;
  color: #2b2b27;
  max-width: 68ch;
}

a {
  display: inline-block;
  margin-top: 0.9rem;
  text-decoration: none;
  color: #111;
  background: #f9d342;
  border: 1px solid #c7a637;
  border-radius: 0.55rem;
  padding: 0.55rem 0.9rem;
  font-weight: 600;
}

a:hover {
  background: #ffdf5e;
}
</style>
