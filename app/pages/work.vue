<script setup lang="ts">
import { computed, ref } from 'vue'

type SocialLink = {
  label: string
  href: string
  icon: string
}

type WorkVideo = {
  title: string
  duration: string
  thumbnail: string
  alt: string
  href?: string
}

const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/retinastudios.gr/',
    icon: '/images/social/instagram.png',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/retinastudios.gr',
    icon: '/images/social/facebook.png',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@retinastudiosgr',
    icon: '/images/social/youtube.png',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@retinastudiosgr',
    icon: '/images/social/tiktok.png',
  },
]

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


const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-work-page">

    <main class="work-main">
      <section class="showreel-section">
        <div class="showreel-shell">
          <h1>Η δουλειά μας</h1>

          <div class="featured-video">
            <button
              v-if="!isFeaturedPlaying"
              type="button"
              class="featured-poster"
              :aria-label="`Αναπαραγωγή ${featuredVideo.title}`"
              @click="startFeaturedPlayback"
            >
              <img :src="featuredVideo.poster" :alt="featuredVideo.title" width="979" height="551" />
              <span class="featured-play-icon" aria-hidden="true">▶</span>
            </button>

            <iframe
              v-else
              :src="featuredEmbedSrc"
              :title="featuredVideo.title"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            />
          </div>

          <p class="showreel-caption">{{ featuredVideo.title }}</p>
        </div>
      </section>

      <section class="gallery-section" aria-label="Βίντεο portfolio">
        <div class="gallery-shell">
          <div class="video-grid">
            <article v-for="video in workVideos" :key="video.title" class="work-card">
              <a
                v-if="video.href"
                :href="video.href"
                class="card-media"
                target="_blank"
                rel="noreferrer noopener"
                :aria-label="`Προβολή βίντεο: ${video.title}`"
              >
                <img :src="video.thumbnail" :alt="video.alt" width="330" height="330" loading="lazy" decoding="async" />
                <span class="card-play" aria-hidden="true">▶</span>
              </a>

              <div v-else class="card-media is-static">
                <img :src="video.thumbnail" :alt="video.alt" width="330" height="330" loading="lazy" decoding="async" />
              </div>

              <div class="card-meta">
                <h2>{{ video.title }}</h2>
                <p>{{ video.duration }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer-clone">
      <div class="footer-inner">
        <NuxtLink to="/" class="footer-logo" aria-label="Retina Studios">
          <img
            src="/images/branding/retina-logo-invert.png"
            alt="Retina Brand logo invert"
            width="134"
            height="103"
          />
        </NuxtLink>

        <div class="footer-columns">
          <section>
            <h3>Διεύθυνση</h3>
            <p>Γερολυμπου 1Δ</p>
            <p>66132, Δράμα</p>
          </section>

          <section>
            <h3>Επικοινωνία</h3>
            <p>2521032666</p>
            <p>693 466 9832</p>
            <p><a href="mailto:info@retinastudios.gr">info@retinastudios.gr</a></p>
          </section>

          <section>
            <h3>Ώρες Λειτουργίας</h3>
            <div class="hours-grid">
              <span>Δευτέρα - Παρασκευή</span>
              <span>9:00 π.μ. - 5:00 μ.μ.</span>
              <span>Σάββατο</span>
              <span>10:00 π.μ. - 2:00 μ.μ.</span>
              <span>Κυριακή</span>
              <span>Κλειστά</span>
            </div>
          </section>
        </div>

        <div class="footer-bottom">
          <ul class="social-list" aria-label="Γραμμή κοινωνικών μέσων">
            <li v-for="social in socialLinks" :key="social.label">
              <a :href="social.href" target="_blank" rel="noreferrer noopener" :aria-label="social.label">
                <img :src="social.icon" :alt="social.label" width="30" height="30" />
              </a>
            </li>
          </ul>

          <p>© 2025 Retina Studios</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'RetinaGeo';
  src: url('/fonts/geologica-thin.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

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

.site-header-clone {
  background: #fff;
}

.header-container {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 116px;
  position: relative;
  display: block;
}

.brand-link {
  display: block;
  width: 282px;
  height: 31px;
  position: absolute;
  left: -141px;
  top: 42px;
}

.brand-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-nav {
  width: 882px;
  height: 50px;
  position: absolute;
  left: 308px;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
}

.nav-group {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.nav-item {
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
  text-decoration: none;
  padding: 5px 11px;
  transition: background-color 0.4s ease, color 0.4s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgb(249 211 66);
  color: #fff;
}

.nav-caret {
  font-size: 10px;
  line-height: 1;
  margin-left: -7px;
  margin-right: 8px;
  color: #000;
}

.sub-menu {
  list-style: none;
  margin: 0;
  padding: 4px 0;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #dbdbd1;
  display: none;
  z-index: 30;
}

.sub-menu li a {
  display: block;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 13px;
  line-height: 1.35;
  color: #000;
  text-decoration: none;
  padding: 8px 12px;
  white-space: nowrap;
}

.sub-menu li a:hover {
  background: rgb(249 211 66);
  color: #fff;
}

.has-children:hover .sub-menu,
.has-children:focus-within .sub-menu {
  display: block;
}

.work-main {
  background: #fff;
}

.showreel-section {
  background: #000;
}

.showreel-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  min-height: 860px;
  margin: 0 auto;
  padding: 91px 0 10px;
  box-sizing: border-box;
}

.showreel-shell h1 {
  width: 979px;
  max-width: 100%;
  margin: 0 0 41px;
  text-align: center;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 46px;
  font-weight: 400;
  line-height: 1.1;
  color: #fff;
}

.featured-video {
  width: 979px;
  max-width: 100%;
  height: 551px;
  margin: 0 0 17px;
  background: rgb(0 0 0 / 25%);
}

.featured-poster {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  position: relative;
  cursor: pointer;
}

.featured-poster img,
.featured-video iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
  object-fit: cover;
}

.featured-play-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgb(0 0 0 / 55%);
  color: #fff;
  font-size: 35px;
  line-height: 72px;
  text-align: center;
}

.showreel-caption {
  width: 310px;
  margin: 0 0 10px auto;
  text-align: right;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  color: #fff;
}

.gallery-section {
  background: #fff;
}

.gallery-shell {
  width: 980px;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  padding: 40px 0 10px;
  box-sizing: border-box;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.work-card {
  background: #474747;
}

.card-media {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  background: #111;
}

.card-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.card-play {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(0 0 0 / 58%);
  color: #fff;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
}

.card-meta {
  min-height: 118px;
  padding: 16px 14px 20px;
  box-sizing: border-box;
  color: #fff;
}

.card-meta h2 {
  margin: 0 0 8px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.35;
}

.card-meta p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: rgb(255 255 255 / 80%);
}

.site-footer-clone {
  background: #000;
  color: #fff;
}

.footer-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 62px 0 45px;
}

.footer-logo {
  display: block;
  width: 134px;
  height: 103px;
  margin: 0 auto 44px;
}

.footer-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-columns {
  display: grid;
  grid-template-columns: 247px 257px 321px;
  justify-content: space-between;
  gap: 1.2rem;
}

.footer-columns h3 {
  margin: 0 0 21px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 26px;
  line-height: 1;
  font-weight: 400;
}

.footer-columns p,
.footer-columns a,
.hours-grid span {
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.85;
  color: #fff;
  text-decoration: none;
}

.footer-columns p {
  margin: 0;
}

.hours-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 12px;
}

.hours-grid span:nth-child(even) {
  text-align: right;
}

.footer-bottom {
  margin-top: 34px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.social-list {
  grid-column: 2;
  justify-self: center;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.social-list a,
.social-list img {
  display: block;
  width: 30px;
  height: 30px;
}

.footer-bottom p {
  grid-column: 3;
  justify-self: end;
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1;
  color: #fff;
}

@media (max-width: 1020px) {
  .header-container {
    width: auto;
    min-height: auto;
    padding: 1.2rem 0 1rem;
    position: static;
  }

  .brand-link {
    position: static;
    margin-bottom: 0.8rem;
  }

  .main-nav {
    width: auto;
    height: auto;
    position: static;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .showreel-shell,
  .gallery-shell,
  .footer-inner {
    width: auto;
    max-width: calc(100% - 2rem);
    margin: 0 auto;
  }

  .showreel-shell {
    min-height: 0;
    padding: 2rem 0 1.1rem;
  }

  .showreel-shell h1 {
    width: 100%;
    margin-bottom: 1.1rem;
    font-size: clamp(2rem, 8vw, 46px);
  }

  .featured-video {
    width: 100%;
    height: auto;
    aspect-ratio: 979 / 551;
    margin-bottom: 0.75rem;
  }

  .showreel-caption {
    width: 100%;
  }

  .gallery-shell {
    max-width: calc(100% - 2rem);
    padding-top: 1.2rem;
  }

  .video-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 1rem;
  }

  .social-list,
  .footer-bottom p {
    grid-column: 1;
    justify-self: start;
  }

  .sub-menu {
    position: static;
    display: block;
    border: 0;
    padding: 0;
    min-width: 0;
    margin-top: 0.2rem;
  }

  .sub-menu li a {
    padding: 5px 0 5px 10px;
  }
}
.nav-toggle {
  display: none;
  width: 40px;
  height: 36px;
  border: 1px solid #000;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  cursor: pointer;
}

.nav-toggle-bar {
  width: 20px;
  height: 2px;
  background: #000;
  display: block;
}

.nav-close {
  display: none;
}
@media (max-width: 1020px) {
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
  }

  .brand-link {
    margin-bottom: 0;
  }

  .nav-toggle {
    display: inline-flex;
    z-index: 60;
  }

  .main-nav {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 18px;
    background: rgb(249 211 66);
    padding: 6rem 2rem 2.5rem;
    overflow-y: auto;
    z-index: 80;
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-close {
    display: block;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: 0;
    font-size: 32px;
    line-height: 1;
    color: #000;
    cursor: pointer;
  }

  .nav-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .nav-item {
    width: auto;
    padding: 6px 0;
    font-size: 18px;
    text-align: center;
  }

  .nav-item:hover,
  .nav-item.active {
    background: transparent;
    color: #000;
  }

  .nav-caret {
    margin-left: 8px;
  }

  .sub-menu {
    position: static;
    display: flex;
    flex: 0 0 100%;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .sub-menu li a {
    white-space: normal;
    padding: 2px 0;
    color: #000;
  }
}

</style>
