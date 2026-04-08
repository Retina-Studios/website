<script setup lang="ts">
type WorkVideo = {
  title: string
  duration: string
  thumbnail: string
  alt: string
  href?: string
}

const featuredVideo = {
  title: 'Showreel Υπηρεσιών 2025',
  poster: '/images/work/showreel-hero.jpg',
  embedUrl: 'https://player.vimeo.com/video/1103391854',
}

const workVideos: WorkVideo[] = [
  {
    title: 'Λευκή Νύχτα 2025 - Aftermovie',
    duration: '2:31',
    thumbnail: '/images/work/video-1.jpg',
    alt: 'Λευκή Νύχτα 2025 - Aftermovie',
    href: 'https://player.vimeo.com/video/1103391854',
  },
  {
    title: 'Prestige Cafe - Opening Spot',
    duration: '1:04',
    thumbnail: '/images/work/video-2.jpg',
    alt: 'Prestige Cafe - Opening Spot',
    href: 'https://player.vimeo.com/video/1103700820',
  },
  {
    title: 'Alex Louloudis - Intergenerational Traumas',
    duration: '4:56',
    thumbnail: '/images/work/video-3.jpg',
    alt: 'Alex Louloudis - Intergenerational Traumas',
    href: 'https://www.youtube.com/watch?v=NUzvUuBdFCQ',
  },
  {
    title: 'Studio R1 Ad',
    duration: '0:29',
    thumbnail: '/images/work/video-4.jpg',
    alt: 'Studio R1 Ad',
  },
  {
    title: 'Pavlidou - Services',
    duration: '1:07',
    thumbnail: '/images/work/video-5.jpg',
    alt: 'Pavlidou - Services',
  },
  {
    title: 'Alexiadou - Office',
    duration: '0:39',
    thumbnail: '/images/work/video-6.jpg',
    alt: 'Alexiadou - Office',
    href: 'https://www.youtube.com/watch?v=G4wzUNpIRzY',
  },
  {
    title: "John Mast - I'll Come Back For My Stuff",
    duration: '4:43',
    thumbnail: '/images/work/video-7.jpg',
    alt: "John Mast - I'll Come Back For My Stuff",
    href: 'https://www.youtube.com/watch?v=umg1qO4xK-4',
  },
  {
    title: 'Αλεξιάδου Αγγελική - Active Woman Spot',
    duration: '0:29',
    thumbnail: '/images/work/video-8.jpg',
    alt: 'Αλεξιάδου Αγγελική - Active Woman Spot',
  },
  {
    title: 'Παρασκήνια Μουσικού Βίντεο: Aggeliki Psonis - Troublemaker',
    duration: '2:18',
    thumbnail: '/images/work/video-9.jpg',
    alt: 'Παρασκήνια Μουσικού Βίντεο: Aggeliki Psonis - Troublemaker',
  },
]

const isFeaturedPlaying = ref(false)

const featuredEmbedSrc = computed(
  () => `${featuredVideo.embedUrl}?autoplay=1&title=0&byline=0&portrait=0`,
)

const startFeaturedPlayback = () => {
  isFeaturedPlaying.value = true
}

useHead({
  title: 'Η δουλειά μας | Retina Studios',
  meta: [
    {
      name: 'description',
      content: 'Retina Studios | Ο φακός μας, η ιστορία σας',
    },
  ],
})
</script>

<template>
  <div class="wix-work-page">
    <main class="work-main">
      <section class="hero-section">
        <div class="hero-inner">
          <div class="hero-media">
            <img
              :src="featuredVideo.poster"
              :alt="featuredVideo.title"
              width="980"
              height="551"
              loading="eager"
              decoding="async"
            />
          </div>

          <div class="hero-copy">
            <h1>Η δουλειά μας</h1>
            <p>
              Επιλεγμένα projects που αναδεικνύουν την κινηματογραφική μας αισθητική και την
              αφήγηση που αγαπάμε.
            </p>

            <button class="hero-cta" type="button" @click="startFeaturedPlayback">
              Προβολή Showreel
            </button>
          </div>

          <div v-if="isFeaturedPlaying" class="hero-video">
            <div class="video-shell">
              <iframe
                :src="featuredEmbedSrc"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                title="Showreel Υπηρεσιών 2025"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="work-grid-section">
        <div class="work-grid">
          <article v-for="video in workVideos" :key="video.title" class="work-card">
            <a v-if="video.href" :href="video.href" target="_blank" rel="noreferrer" class="card-media">
              <img :src="video.thumbnail" :alt="video.alt" width="300" height="180" loading="lazy" />
              <span class="card-duration">{{ video.duration }}</span>
            </a>
            <div v-else class="card-media">
              <img :src="video.thumbnail" :alt="video.alt" width="300" height="180" loading="lazy" />
              <span class="card-duration">{{ video.duration }}</span>
            </div>
            <h3>{{ video.title }}</h3>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'RetinaProxima';
  src: url('/fonts/proxima-reg.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RetinaAvenirHeavy';
  src: url('/fonts/avenir-heavy.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RetinaAvenirLight';
  src: url('/fonts/avenir-light.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:global(body) {
  margin: 0;
  background: #fff;
  color: #000;
}

.wix-work-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.work-main {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-bottom: 60px;
}

.hero-section {
  padding: 60px 0 40px;
}

.hero-inner {
  display: grid;
  gap: 24px;
}

.hero-media {
  position: relative;
}

.hero-media img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-copy h1 {
  margin: 0 0 12px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 42px;
  font-weight: 400;
}

.hero-copy p {
  margin: 0 0 18px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
}

.hero-cta {
  border: 1px solid #000;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.hero-video .video-shell {
  position: relative;
  padding-top: 56.25%;
  background: #000;
}

.hero-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.work-grid-section {
  margin-top: 32px;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.work-card {
  display: grid;
  gap: 10px;
}

.card-media {
  position: relative;
  display: block;
}

.card-media img {
  width: 100%;
  height: auto;
  display: block;
}

.card-duration {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 999px;
}

.work-card h3 {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 18px;
  font-weight: 400;
}

@media (max-width: 1020px) {
  .work-main {
    width: auto;
  }

  .hero-section {
    padding: 40px 0 24px;
  }

  .hero-copy h1 {
    font-size: 32px;
  }
}
</style>
