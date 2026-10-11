<script setup lang="ts">
import VignetteProjectPage from '~/components/vignettes/VignetteProjectPage.vue'

const gallery = [
  {
    src: '/images/projects/vignettes/all-eyes-on-her/vignette-1.mp4',
    video: true,
    poster: '/images/projects/vignettes/all-eyes-on-her/vignette-1-poster.jpg',
  },
  ...[
    '/images/projects/vignettes/all-eyes-on-her/A86A9439.jpg',
    '/images/projects/vignettes/all-eyes-on-her/A86A9460.jpg',
    '/images/projects/vignettes/all-eyes-on-her/A86A9470.jpg',
    '/images/projects/vignettes/all-eyes-on-her/A86A9490.jpg',
    '/images/projects/vignettes/all-eyes-on-her/A86A9501.jpg',
    '/images/projects/vignettes/all-eyes-on-her/A86A9543.jpg',
  ].map(src => ({ src })),
  {
    src: '/images/projects/vignettes/all-eyes-on-her/vignette-2.mp4',
    video: true,
    poster: '/images/projects/vignettes/all-eyes-on-her/vignette-2-poster.jpg',
  },
]

const credits = [
  { role: 'Model', name: '@konstantina_vantsi', href: 'https://www.instagram.com/konstantina_vantsi/' },
  { role: 'Dresses', name: '@ldrama_store', href: 'https://www.instagram.com/ldrama_store/' },
  { role: 'Menswear', name: '@abitoshop.gr', href: 'https://www.instagram.com/abitoshop.gr/' },
  { role: 'Location', name: '@ktima_edonis', href: 'https://www.instagram.com/ktima_edonis/' },
  { role: 'Car', name: 'κύριος Βασίλης' },
  {
    role: 'Extras',
    name: '',
    links: [
      { name: '@stan_kasampalis', href: 'https://www.instagram.com/stan_kasampalis/' },
      { name: '@l3.kasaa', href: 'https://www.instagram.com/l3.kasaa/' },
      { name: '@tsakalidisgiannis95', href: 'https://www.instagram.com/tsakalidisgiannis95/' },
      { name: '@costashari', href: 'https://www.instagram.com/costashari/' },
      { name: '@georgeiosifidiss', href: 'https://www.instagram.com/georgeiosifidiss/' },
      { name: '@lepoyras', href: 'https://www.instagram.com/lepoyras/' },
    ],
  },
]

useHead({
  title: 'All Eyes on Her | Retina Studios',
  meta: [
    { property: 'og:image', content: 'https://retinastudios.gr/images/projects/vignettes/vignettes-social.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://retinastudios.gr/images/projects/vignettes/vignettes-social.png' },
  ],
})
</script>

<template>
  <VignetteProjectPage
    title="All Eyes on Her"
    hero-image="/images/projects/vignettes/all-eyes-on-her/A86A9439.jpg"
    hero-title-image="/images/projects/vignettes/all-eyes-on-her/alleyesonher-title.png"
    story-variant="all-eyes-on-her"
    :gallery="gallery"
    gallery-layout="two-columns"
    :credits="credits"
    credits-variant="all-eyes-on-her"
    :previous="{ label: 'Regal', to: '/projects/vignettes/regal' }"
    :next="{ label: 'Peaky Blinders', to: '/projects/vignettes/peakyblinders' }"
    :project-browser="{
      image: '/images/projects/vignettes/peakyblinders/bottom-logo.png',
      previous: { label: 'Regal', to: '/projects/vignettes/regal' },
      next: { label: 'Peaky Blinders', to: '/projects/vignettes/peakyblinders' },
    }"
  >
    <template #project-description>
      <section class="all-eyes-description">
        <div class="all-eyes-description__content">
          <p>
            Το All Eyes on Her αντλεί έμπνευση από την εμβληματική σκηνή του <em>Malèna</em> (2000), όπου κάθε βλέμμα ακολουθεί μια γυναίκα που περπατά με αυτοπεποίθηση στον δρόμο. Με κινηματογραφικό φως, διαχρονικά κοστούμια και μια παρέα που γίνεται το σκηνικό της ιστορίας, μεταφέραμε αυτή την ατμόσφαιρα στη δική μας Vignette.
          </p>
        </div>
        <div class="all-eyes-description__video">
          <video controls playsinline preload="metadata" poster="/images/projects/vignettes/all-eyes-on-her/malena-reference-poster.jpg">
            <source src="/images/projects/vignettes/all-eyes-on-her/Malena 2000 - Cigarette Scene.mp4" type="video/mp4">
            Το πρόγραμμα περιήγησής σας δεν υποστηρίζει αναπαραγωγή βίντεο.
          </video>
        </div>
      </section>
    </template>
  </VignetteProjectPage>
</template>

<style scoped>
:deep(.hero-title-image) { bottom: clamp(1rem, 3vh, 2rem); width: min(1800px, 95vw); }
.all-eyes-description { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); width: 100%; margin: 0; padding: 72px max(calc((100% - 980px) / 2), 1rem); box-sizing: border-box; gap: 56px; align-items: center; background: #000; color: #fff; }
.all-eyes-description__content { font-family: 'Playfair Display', 'Times New Roman', serif; font-size: 20px; line-height: 1.7; }
.all-eyes-description__content p { margin: 0; }
.all-eyes-description__video video { display: block; width: 100%; height: auto; }

@media (max-width: 640px) {
  .all-eyes-description { grid-template-columns: 1fr; padding: 48px 1rem; gap: 28px; }
  .all-eyes-description__content { font-size: 18px; }
}
</style>
