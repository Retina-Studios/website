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

const credits = [
  { role: 'MUA', name: '@eumorfia.ps.mua', href: 'https://www.instagram.com/eumorfia.ps.mua/' },
  { role: 'Hair', name: '@zoi_hair_', href: 'https://www.instagram.com/zoi_hair_/' },
  { role: 'Assistant', name: '@konstantina_vantsi', href: 'https://www.instagram.com/konstantina_vantsi/' },
  { role: 'Jewelry', name: '@fetish__official', href: 'https://www.instagram.com/fetish__official/' },
]

useHead({ title: 'Regal | Retina Studios' })
</script>

<template>
  <VignetteProjectPage
    title="Regal"
    hero-image="/images/projects/vignettes/regal/Artemis_0073-v2-edited-Edit.jpg"
    hero-title-image="/images/projects/vignettes/regal/regal-title.png"
    story-variant="regal"
    intro="Στο πέμπτο vignette της σειράς μας εξερευνούμε μια πιο επιβλητική, κινηματογραφική πλευρά της φωτογραφίας. Το Regal κινείται ανάμεσα στη δύναμη και την κομψότητα, με δραματικό φως, πλούσιες υφές και εικόνες που δίνουν στο θέμα τον δικό του βασιλικό χαρακτήρα."
    :gallery="gallery"
    :credits="credits"
    credits-variant="regal"
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
