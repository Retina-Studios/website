<script setup lang="ts">
import VignetteProjectPage from '~/components/vignettes/VignetteProjectPage.vue'

const gallery = [
  '/images/projects/vignettes/peakyblinders/gallery-1.jpg',
  '/images/projects/vignettes/peakyblinders/gallery-2.jpg',
  '/images/projects/vignettes/peakyblinders/gallery-3.jpg',
].map(src => ({ src }))

const team = [
  { role: 'Μοντέλο', name: 'Θοδωρής Δ.', image: '/images/projects/vignettes/peakyblinders/team-1.jpg' },
  { role: 'Μοντέλο', name: 'Αναστασία Μ.', image: '/images/projects/vignettes/peakyblinders/team-anastasia.jpg' },
  { role: 'Φωτογράφος', name: 'Παναγιώτης Πεκίδης', image: '/images/projects/vignettes/peakyblinders/team-2.jpg', href: 'https://www.instagram.com/pek.retinastudios/' },
  { role: 'Γκαρνταρόμπα', name: 'Ατελιέννα', image: '/images/projects/vignettes/peakyblinders/team-3.jpg', href: 'https://www.instagram.com/atelie_anna__/' },
  { role: 'Υφάσματα', name: 'Kesidis Textiles', image: '/images/projects/vignettes/peakyblinders/team-4.png', href: 'https://www.yfasmatakesidis.gr/' },
  { role: 'Makeup', name: 'Βασιλεία Κανάρα', image: '/images/projects/vignettes/peakyblinders/team-5.jpg', href: 'https://www.instagram.com/vasileiakanara/' },
  { role: 'Hair stylist', name: 'Κική Κάργα', image: '/images/projects/vignettes/peakyblinders/team-6.jpg', href: 'https://www.instagram.com/k_i_k_i_k_a_r_g_a/' },
  { role: 'Accessories', name: 'Rika Artifact', image: '/images/projects/vignettes/peakyblinders/team-7.jpg', href: 'https://www.instagram.com/rikartifact/' },
  { role: 'Μουσική', name: 'John Mast', image: '/images/projects/vignettes/peakyblinders/team-8.jpg', href: 'https://www.instagram.com/getting_tothepoint' },
  { role: 'Βοηθός', name: 'Κωνσταντίνα Β.', image: '/images/projects/vignettes/peakyblinders/team-1.jpg', href: 'https://www.instagram.com/konstantina_vantsi/' },
]

useHead({ title: 'Peaky Blinders | Retina Studios' })
</script>

<template>
  <VignetteProjectPage
    title="Peaky Blinders"
    hero-image="/images/projects/vignettes/peakyblinders/hero-bg.jpg"
    hero-title-image="/images/projects/vignettes/peakyblinders/hero-logo.png"
    story-variant="peaky"
    intro="Το πρώτο δημιουργικό πορτρέτο της σειράς Vignettes ήταν εμπνευσμένο από την πετυχημένη βρετανική τηλεοπτική σειρά Peaky Blinders. Η φωτογράφιση πραγματοποιήθηκε στον χώρο της Retina Studios και μεταδόθηκε ζωντανά μέσω YouTube live streaming, σαν δωρεάν φωτογραφικό σεμινάριο."
    :gallery="gallery"
    :team="team"
    :actions="[
      { label: 'Moodboard', href: 'https://app.milanote.com/1TsyaI1PHUDP4O?p=D8t5JdobRoi' },
      { label: 'Live Stream', href: 'https://youtube.com/live/-lYa0Ib5A_4' },
    ]"
    action-preview="/images/projects/vignettes/peakyblinders/cta-image.png"
    :project-browser="{
      image: '/images/projects/vignettes/peakyblinders/bottom-logo.png',
      previous: { label: 'Cowgirl', to: '/projects/vignettes/cowgirl' },
      next: { label: 'Sweet Pin-up', to: '/projects/vignettes/sweet-pin-up' },
    }"
    :previous="{ label: 'Cowgirl', to: '/projects/vignettes/cowgirl' }"
    :next="{ label: 'Sweet Pin-up', to: '/projects/vignettes/sweet-pin-up' }"
  />
</template>
