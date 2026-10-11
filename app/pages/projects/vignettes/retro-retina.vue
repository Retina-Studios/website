<script setup lang="ts">
import VignetteProjectPage from '~/components/vignettes/VignetteProjectPage.vue'

const gallery = Array.from({ length: 5 }, (_, index) => ({ src: `/images/projects/vignettes/retro-retina/gallery-${index + 1}.jpg` }))
const credits = [
  { role: 'Μοντέλο', name: 'Κωνσταντίνα Βάντση' },
  { role: 'Ρούχα', name: 'Dreams', href: 'https://www.instagram.com/dreamsunderweardrama/' },
  { role: 'Μακιγιάζ', name: 'Βασιλεία Καναρά', href: 'https://www.instagram.com/vasileiakanara/' },
  { role: 'Νύχια', name: 'Somfis', href: 'https://www.instagram.com/somfis_professional/' },
]
useHead({
  title: 'Retro Retina | Retina Studios',
  meta: [
    { property: 'og:image', content: 'https://retinastudios.gr/images/projects/vignettes/vignettes-social.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://retinastudios.gr/images/projects/vignettes/vignettes-social.png' },
  ],
})
</script>

<template>
  <VignetteProjectPage
    title="Retro Retina"
    hero-image="/images/projects/vignettes/retro-retina/hero-bg.jpg"
    hero-min-height="760px"
    hero-title-class="retro-retina-title"
    :hero-title-lines="['Retro', 'Retina']"
    story-variant="retro"
    intro="Τρίτο vignette, και εδώ επιστρατεύσαμε την δική μας Κωνσταντίνα, για περαιτέρω εξερεύνηση της ρετρό αισθητικής των δεκαετιών του 1950 και 1960. Σαν να δρόσισε!"
    :gallery="gallery"
    :credits="credits"
    credits-variant="retro"
    :previous="{ label: 'Sweet Pin-up', to: '/projects/vignettes/sweet-pin-up' }"
    :next="{ label: 'Cowgirl', to: '/projects/vignettes/cowgirl' }"
    :project-browser="{
      image: '/images/projects/vignettes/peakyblinders/bottom-logo.png',
      previous: { label: 'Sweet Pin-up', to: '/projects/vignettes/sweet-pin-up' },
      next: { label: 'Cowgirl', to: '/projects/vignettes/cowgirl' },
    }"
  />
</template>
