<script setup lang="ts">
import VignetteProjectPage from '~/components/vignettes/VignetteProjectPage.vue'

const gallery = Array.from({ length: 6 }, (_, index) => ({ src: `/images/projects/vignettes/sweet-pin-up/gallery-${index + 1}.jpg` }))
const credits = [
  { role: 'Μοντέλο', name: 'Έλενα Τσιπίδου', href: 'https://www.instagram.com/tsipidou/' },
  { role: 'Βοηθός', name: 'Κωνσταντίνα Βάντση' },
  { role: 'Κοστούμια', name: 'Έλενα Τσιπίδου', href: 'https://www.instagram.com/tsipidou/' },
  { role: 'Μακιγιάζ', name: 'Τζένη Θωμαΐδου', href: 'https://www.instagram.com/jennythomaidou/' },
  { role: 'Κομμώτρια', name: 'Ισμήνη, Marron Coiffure', href: 'https://www.instagram.com/marron.coiffure/' },
  { role: 'Νύχια', name: 'Kiko Nails', href: 'https://www.instagram.com/kikonails_' },
  { role: 'Παπούτσια', name: 'Negozio', href: 'https://www.instagram.com/negozioshoes/' },
  { role: 'Ρούχα', name: 'Granazi', href: 'https://www.instagram.com/granazistore/' },
]
useHead({ title: 'Sweet Pin-Up | Retina Studios' })
</script>

<template>
  <VignetteProjectPage
    title="SWEET PIN-UP"
    hero-image="/images/projects/vignettes/sweet-pin-up/hero-bg.jpg"
    hero-min-height="760px"
    hero-title-class="sweet-pinup-title"
    story-variant="sweet"
    intro="Για την δεύτερη φωτογράφιση της σειράς Vignettes εμπνευστήκαμε από τον υπέροχα διακοσμημένο χώρο του Ζαχαροπλαστείου Ντίνος, και ταξιδέψαμε πίσω στην δεκαετία του 1950 και τη ρετρό αισθητική των pin-up μοντέλων της εποχής. Μια φωτογράφιση απολαυστική σαν παγωτό!"
    :gallery="gallery"
    :credits="credits"
    credits-variant="sweet"
    :actions="[{ label: 'Δείτε το Moodboard', href: 'https://app.milanote.com/1U0gEN1SdT1dau/sock-hop?p=WSDQgAdPrIj' }]"
    action-preview="/images/projects/vignettes/sweet-pin-up/cta-image.png"
    action-variant="sweet"
    :previous="{ label: 'Peaky Blinders', to: '/projects/vignettes/peakyblinders' }"
    :next="{ label: 'Retro Retina', to: '/projects/vignettes/retro-retina' }"
    :project-browser="{
      image: '/images/projects/vignettes/peakyblinders/bottom-logo.png',
      previous: { label: 'Peaky Blinders', to: '/projects/vignettes/peakyblinders' },
      next: { label: 'Retro Retina', to: '/projects/vignettes/retro-retina' },
    }"
  />
</template>
