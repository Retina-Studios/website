<script setup lang="ts">
import VignetteProjectPage from '~/components/vignettes/VignetteProjectPage.vue'

const gallery = Array.from({ length: 7 }, (_, index) => ({ src: `/images/projects/vignettes/cowgirl/gallery-${index + 1}.jpg` }))
const credits = [
  { role: 'Μοντέλο', name: 'Εύη Χαραλαμπίδου', href: 'https://www.instagram.com/evi.charalampidou/' },
  { role: 'Τοποθεσία', name: 'Ranjo Costa', href: 'https://www.instagram.com/ranjo_costa/' },
  { role: 'Ρούχα & Αξεσουάρ', name: 'Nastag Fashion Store', href: 'https://www.instagram.com/nastag.fashion/' },
  { role: 'Μαλλιά', name: 'Ιπποκράτης Δαμιανίδης' },
  { role: 'Υποδήματα', name: 'Negozio Shoes', href: 'https://www.instagram.com/negozioshoes/' },
]
useHead({ title: 'Cowgirl | Retina Studios' })
</script>

<template>
  <VignetteProjectPage
    title="Cowgirl"
    hero-image="/images/projects/vignettes/cowgirl/hero-bg.jpg"
    hero-title-image="/images/projects/vignettes/cowgirl/cowgirl-title.png"
    story-variant="cowgirl"
    intro="Και τώρα κάτι διαφορετικό — ένα vignette στην άγρια δύση της Δράμας, στο Ranjo Costa, με ατμόσφαιρα περιπέτειας και western αισθητική. Cowgirl power!"
    :gallery="gallery"
    :credits="credits"
    credits-variant="cowgirl"
    :previous="{ label: 'Retro Retina', to: '/projects/vignettes/retro-retina' }"
    :next="{ label: 'Regal', to: '/projects/vignettes/regal' }"
    :project-browser="{
      image: '/images/projects/vignettes/peakyblinders/bottom-logo.png',
      previous: { label: 'Retro Retina', to: '/projects/vignettes/retro-retina' },
      next: { label: 'Regal', to: '/projects/vignettes/regal' },
    }"
  />
</template>
