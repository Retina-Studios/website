<script setup lang="ts">
type SocialLink = {
  label: string
  href: string
  icon: string
}

type VignetteProject = {
  title: string
  to: string
  image: string
  imageAlt: string
  imagePosition: string
  tileHeight: number
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

const introText =
  'Η σειρά "Vignettes" είναι μια δημιουργική πρωτοβουλία της Retina Studios, που επικεντρώνεται στη φωτογραφία πορτρέτου σε συνεργασία με τοπικούς καλλιτέχνες, influencers και επιχειρήσεις. Κάθε session αποτελεί μια μοναδική ιστορία, αναδεικνύοντας την προσωπικότητα και την αισθητική των συμμετεχόντων, ενώ ταυτόχρονα ενισχύει τη σύνδεση με την τοπική κοινότητα και τη δημιουργικότητα.'

const projects: VignetteProject[] = [
  {
    title: 'Peaky Blinders',
    to: '/projects/vignettes/peakyblinders',
    image: '/images/projects/vignettes/peaky-blinders.jpg',
    imageAlt: 'Peaky Blinders vignette',
    imagePosition: '50% 0%',
    tileHeight: 430,
  },
  {
    title: 'Sweet Pin-up',
    to: '/projects/vignettes/sweet-pin-up',
    image: '/images/projects/vignettes/sweet-pin-up.jpg',
    imageAlt: 'Sweet Pin-up vignette',
    imagePosition: '50% 0%',
    tileHeight: 570,
  },
  {
    title: 'Cowgirl',
    to: '/projects/vignettes/cowgirl',
    image: '/images/projects/vignettes/cowgirl.jpg',
    imageAlt: 'Cowgirl vignette',
    imagePosition: '50% 0%',
    tileHeight: 540,
  },
  {
    title: 'Retro Retina',
    to: '/projects/vignettes/retro-retina',
    image: '/images/projects/vignettes/retro-retina.jpg',
    imageAlt: 'Retro Retina vignette',
    imagePosition: '50% 50%',
    tileHeight: 465,
  },
  {
    title: 'Regal',
    to: '/projects/vignettes/regal',
    image: '/images/projects/vignettes/regal/Artemis_0260-edited.jpg',
    imageAlt: 'Regal vignette',
    imagePosition: '50% 50%',
    tileHeight: 500,
  },
  {
    title: 'All Eyes on Her',
    to: '/projects/vignettes/all-eyes-on-her',
    image: '/images/projects/vignettes/all-eyes-on-her/A86A9439.jpg',
    imageAlt: 'All Eyes on Her vignette',
    imagePosition: '50% 50%',
    tileHeight: 560,
  },
]

const projectColumns = [
  projects.slice(0, 2),
  projects.slice(2, 4),
  projects.slice(4, 6),
]

function getOptimizedVignetteImage(src: string) {
  return src
    .replace('/images/projects/vignettes/', '/images/projects/vignettes/web/')
    .replace(/\.(jpe?g|png)$/i, '.webp')
}

useHead({
  title: 'Φωτογραφίσεις "Vignettes" | Retina Studios',
  meta: [
    { property: 'og:image', content: 'https://retinastudios.gr/images/projects/vignettes/vignettes-social.png' },
    { property: 'og:image:width', content: '711' },
    { property: 'og:image:height', content: '372' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://retinastudios.gr/images/projects/vignettes/vignettes-social.png' },
  ],
})
</script>

<template>
  <div class="wix-vignettes-page">
    <main class="vignettes-main">
      <section class="intro-section">
        <div class="intro-shell">
          <img src="/images/projects/vignettes/logo.png" alt="Vignettes" />
          <p>{{ introText }}</p>
        </div>
      </section>

      <section class="projects-section">
        <div class="projects-shell">
          <div v-for="(column, columnIndex) in projectColumns" :key="columnIndex" class="masonry-column">
            <article
              v-for="project in column"
              :key="project.title"
              class="vignette-row"
              :style="{ '--tile-height': `${project.tileHeight}px` }"
            >
              <NuxtLink
                class="image-column"
                :to="project.to"
                :aria-label="`Δείτε το project ${project.title}`"
              >
                <img
                  :src="getOptimizedVignetteImage(project.image)"
                  :alt="project.imageAlt"
                  :style="{ objectPosition: project.imagePosition }"
                  loading="lazy"
                />
                <span class="image-cta">Δείτε το project <span aria-hidden="true">→</span></span>
              </NuxtLink>
            </article>
          </div>
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

.wix-vignettes-page {
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

.vignettes-main {
  background: #fff;
}

.intro-section {
  background: #fff;
}

.intro-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 67px;
}

.intro-shell img {
  display: block;
  width: 330px;
  height: 88px;
  margin: 0 0 40px 25px;
  object-fit: cover;
}

.intro-shell p {
  width: 709px;
  max-width: 100%;
  margin: 0 0 0 25px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
}

.projects-section {
  background: #fff;
  padding-bottom: 60px;
}

.projects-shell {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.masonry-column {
  display: grid;
  align-content: start;
  gap: 12px;
}

.vignette-row {
  width: 100%;
  display: grid;
  margin: 0;
}

.image-column {
  position: relative;
  display: block;
  width: 100%;
  height: var(--tile-height);
  margin: 0;
  overflow: hidden;
}

.image-column img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}

.image-cta {
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: inline-flex;
  gap: 1.2rem;
  align-items: center;
  padding: .85rem 1.15rem;
  background: #fff;
  color: #111;
  font-family: 'RetinaGeo', Arial, sans-serif;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  transition: background-color .25s ease, color .25s ease;
}

.image-column:hover img {
  transform: scale(1.025);
}

.image-column:hover .image-cta {
  background: #111;
  color: #fff;
}

.image-column:focus-visible {
  outline: 3px solid #000;
  outline-offset: -3px;
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

  .intro-shell,
  .footer-inner {
    width: auto;
    max-width: calc(100% - 2rem);
  }

  .intro-shell {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .intro-shell img,
  .intro-shell p {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .projects-shell {
    width: min(760px, calc(100% - 2rem));
    max-width: none;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .image-column {
    width: 100%;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .hours-grid {
    grid-template-columns: 1fr;
  }

  .hours-grid span:nth-child(even) {
    text-align: left;
  }

  .footer-bottom {
    margin-top: 1.8rem;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;
  }

  .social-list,
  .footer-bottom p {
    grid-column: auto;
    justify-self: center;
  }
}

@media (max-width: 640px) {
  .projects-shell {
    grid-template-columns: 1fr;
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
