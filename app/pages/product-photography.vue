<script setup lang="ts">
definePageMeta({
  layout: false,
})

type SocialLink = {
  label: string
  href: string
  icon: string
}

type GalleryImage = {
  src: string
  alt: string
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

const introPoints = [
  'Φωτογραφίζουμε τα προϊόντα σας με τρόπο που αναδεικνύει τη λεπτομέρεια και την ποιότητά τους.',
  'Παρέχουμε επαγγελματικό αποτέλεσμα, ιδανικό για e-shop και έντυπους καταλόγους.',
  'Δημιουργούμε στυλιζαρισμένες λήψεις που ενισχύουν την εμπορική σας εικόνα.',
]

const portraitsTop: GalleryImage[] = [
  { src: '/images/product-photography/portrait-1.jpg', alt: 'Sentimental2157' },
  { src: '/images/product-photography/portrait-2.jpg', alt: 'Sentimental2881' },
  { src: '/images/product-photography/portrait-3.jpg', alt: 'Fashion portrait one' },
  { src: '/images/product-photography/portrait-4.jpg', alt: 'Shag-243' },
]

const portraitsStyled: GalleryImage[] = [
  { src: '/images/product-photography/styled-1.jpg', alt: 'Portrait Purple' },
  { src: '/images/product-photography/styled-2.jpg', alt: 'Portrait Blue' },
  { src: '/images/product-photography/styled-3.jpg', alt: 'Portrait Yellow' },
  { src: '/images/product-photography/styled-4.jpg', alt: 'Portrait Green' },
]

const portraitsWide: GalleryImage[] = [
  { src: '/images/product-photography/wide-1.jpg', alt: 'Product setup wide one' },
  { src: '/images/product-photography/wide-2.jpg', alt: 'Product setup wide two' },
]

useHead({
  title: 'Φωτογράφιση Καταλόγου | Retina Studios',
})


const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-product-photography-page">
    <SiteHeaderClone />

    <main class="product-main">
      <section class="intro-section">
        <div class="intro-shell">
          <div class="intro-grid">
            <figure class="intro-image">
              <img
                src="/images/product-photography/hero.jpg"
                alt="Φωτογράφιση προϊόντων Retina Studios"
                width="490"
                height="864"
                loading="eager"
                decoding="async"
              />
            </figure>

            <div class="intro-copy">
              <h1>Φωτογράφιση Καταλόγου</h1>
              <ul>
                <li v-for="point in introPoints" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-section" aria-label="Συλλογή φωτογραφιών καταλόγου">
        <div class="gallery-shell">
          <div class="gallery-row gallery-row-four gallery-row-top">
            <figure v-for="image in portraitsTop" :key="image.src" class="gallery-card portrait-card top-card">
              <img :src="image.src" :alt="image.alt" width="392" height="1088" loading="lazy" decoding="async" />
            </figure>
          </div>

          <div class="gallery-row gallery-row-four gallery-row-dark">
            <figure
              v-for="image in portraitsStyled"
              :key="image.src"
              class="gallery-card portrait-card styled-card"
            >
              <img :src="image.src" :alt="image.alt" width="396" height="1164" loading="lazy" decoding="async" />
            </figure>
          </div>

          <div class="gallery-row gallery-row-two gallery-row-bottom">
            <figure v-for="image in portraitsWide" :key="image.src" class="gallery-card wide-card">
              <img :src="image.src" :alt="image.alt" width="860" height="940" loading="lazy" decoding="async" />
            </figure>
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
              <a :href="social.href" target="_blank" rel="noreferrer" :aria-label="social.label">
                <img :src="social.icon" :alt="social.label" width="30" height="30" loading="lazy" />
              </a>
            </li>
          </ul>

          <p class="creator-credit">Created by 2H Web Design</p>
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

.wix-product-photography-page {
  min-height: 100vh;
  background: #f2f2ee;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-header-clone {
  background: #fff;
}

.header-container {
  width: 980px;
  max-width: calc(100% - 2rem);
  min-height: 116px;
  margin: 0 auto;
  position: relative;
  display: block;
}

.brand-link {
  width: 282px;
  height: 31px;
  display: block;
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

.nav-group.has-children {
  padding-bottom: 10px;
  margin-bottom: -10px;
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

.product-main {
  background: #f2f2ee;
  padding-bottom: 12px;
}

.intro-section {
  padding: 0;
}

.intro-shell {
  width: calc(100% - 160px);
  min-width: 980px;
  margin: 0 auto;
  padding: 40px 0 34px;
  box-sizing: border-box;
}

.intro-grid {
  display: grid;
  grid-template-columns: 245fr 735fr;
  min-height: 432px;
  background: #fff;
}

.intro-image {
  margin: 0;
  min-height: 432px;
}

.intro-image img {
  width: 100%;
  height: 100%;
  min-height: 432px;
  object-fit: cover;
  display: block;
}

.intro-copy {
  padding: 61px 0 10px 20px;
  box-sizing: border-box;
}

.intro-copy h1 {
  margin: 0 0 35px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 56px;
  font-weight: 400;
  line-height: 1.05;
  color: #000;
}

.intro-copy ul {
  margin: 0;
  width: 543px;
  max-width: calc(100% - 24px);
  padding-left: 20px;
}

.intro-copy li {
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  color: #000;
  margin-bottom: 14px;
}

.intro-copy li:last-child {
  margin-bottom: 0;
}

.gallery-section {
  padding: 0;
}

.gallery-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
}

.gallery-row {
  width: calc(100% - 160px);
  min-width: 980px;
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  gap: 40px;
  background: #fff;
}

.gallery-row-top {
  margin-top: 20px;
  padding: 40px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.gallery-row-dark {
  padding: 40px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background: #000;
}

.gallery-row-bottom {
  margin-bottom: 12px;
  padding: 40px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gallery-card {
  margin: 0;
  overflow: hidden;
}

.top-card {
  min-height: 544px;
}

.styled-card {
  min-height: 582px;
}

.wide-card {
  min-height: 470px;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.site-footer-clone {
  background: #000;
  color: #fff;
}

.footer-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 62px 24px 45px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  display: block;
  width: 134px;
  height: 103px;
  margin-bottom: 44px;
}

.footer-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.footer-columns {
  width: 100%;
  display: grid;
  grid-template-columns: 247px 257px 321px;
  justify-content: space-between;
  margin-bottom: 29px;
}

.footer-columns section h3 {
  margin: 0 0 16px;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 17px;
  line-height: 1.35;
  color: #fff;
}

.footer-columns section p,
.hours-grid span {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
}

.footer-columns section a {
  color: #fff;
  text-decoration: none;
}

.hours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 18px;
  row-gap: 0;
}

.footer-bottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.social-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
  align-items: center;
}

.social-list a {
  display: inline-flex;
  width: 30px;
  height: 30px;
}

.social-list img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.creator-credit {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.4;
  text-align: right;
  color: #fff;
}

@media (max-width: 1260px) {
  .header-container,
  .intro-shell,
  .gallery-row,
  .footer-inner {
    width: min(980px, calc(100% - 2rem));
    min-width: 0;
  }

  .brand-link {
    position: static;
    margin: 20px auto 10px;
  }

  .main-nav {
    position: static;
    width: 100%;
    height: auto;
    min-height: 50px;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 14px;
  }

  .intro-grid {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
  }

  .intro-image {
    min-height: 340px;
  }

  .intro-copy {
    padding: 34px 20px 24px;
  }

  .intro-copy h1 {
    font-size: clamp(34px, 6vw, 48px);
    margin-bottom: 24px;
  }

  .intro-copy ul {
    width: auto;
    max-width: 100%;
  }

  .gallery-row {
    width: 100%;
    min-width: 0;
    padding: 20px;
    gap: 20px;
  }

  .gallery-row-four {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-row-two {
    grid-template-columns: minmax(0, 1fr);
  }

  .top-card,
  .styled-card,
  .wide-card {
    min-height: 320px;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: left;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .creator-credit {
    text-align: left;
  }
}

@media (max-width: 760px) {
  .header-container,
  .intro-shell,
  .gallery-shell,
  .footer-inner {
    max-width: calc(100% - 1rem);
  }

  .nav-item {
    padding: 5px 7px;
    font-size: 13px;
  }

  .sub-menu {
    min-width: 170px;
  }

  .gallery-row-four,
  .gallery-row-two {
    grid-template-columns: minmax(0, 1fr);
  }

  .social-list {
    gap: 18px;
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
