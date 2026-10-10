<script setup lang="ts">
import VignetteProjectPage from '~/components/vignettes/VignetteProjectPage.vue'

const gallery = [
  '/images/projects/vignettes/regal/Artemis_0073-v2-edited-Edit.jpg',
  '/images/projects/vignettes/regal/Artemis_0181-edited.jpg',
  '/images/projects/vignettes/regal/Artemis_0218-edited.jpg',
  '/images/projects/vignettes/regal/Artemis_0241-edited.jpg',
  '/images/projects/vignettes/regal/Artemis_0260-edited.jpg',
  '/images/projects/vignettes/regal/Artemis_0154-edited.jpg',
].map(src => ({ src }))

useHead({ title: 'Regal | Retina Studios' })
</script>

<template>
  <VignetteProjectPage
    title="Regal"
    hero-image="/images/projects/vignettes/regal/Artemis_0073-v2-edited-Edit.jpg"
    :gallery="gallery"
    gallery-layout="regal"
    :previous="{ label: 'Cowgirl', to: '/projects/vignettes/cowgirl' }"
    :next="{ label: 'Peaky Blinders', to: '/projects/vignettes/peakyblinders' }"
    :project-browser="{
      image: '/images/projects/vignettes/peakyblinders/bottom-logo.png',
      previous: { label: 'Cowgirl', to: '/projects/vignettes/cowgirl' },
      next: { label: 'Peaky Blinders', to: '/projects/vignettes/peakyblinders' },
    }"
  />
</template>
