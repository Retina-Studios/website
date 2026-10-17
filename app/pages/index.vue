<script setup lang="ts">
import { formatBlogReadTimeLabel } from '~/data/blogReadTime'
import { getContentSummary } from '~/data/contentSummary'

type SocialLink = {
  label: string
  href: string
  icon: string
}

type ClientLogo = {
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

const clientLogos: ClientLogo[] = [
  { src: '/images/home/client-1.jpg', alt: '12.jpg' },
  { src: '/images/home/client-2.jpg', alt: '1.jpg' },
  { src: '/images/home/client-3.jpg', alt: '3.jpg' },
  { src: '/images/home/client-4.jpg', alt: 'Sary Logo' },
  { src: '/images/home/client-5.jpg', alt: '2.jpg' },
  { src: '/images/home/client-6.jpg', alt: '9.jpg' },
  { src: '/images/home/client-7.jpg', alt: '5.jpg' },
  { src: '/images/home/client-8.jpg', alt: '4.jpg' },
  { src: '/images/home/client-9.jpg', alt: '7.jpg' },
  { src: '/images/home/client-10.jpg', alt: '8.jpg' },
]

const { data: blogDocuments } = await useAsyncData('homepage-blog-posts', () => queryCollection('blog').all())

function getBlogRouteSlug(path: string) {
  return path.split('/').filter(Boolean).pop() ?? ''
}

const latestPosts = computed(() =>
  [...(blogDocuments.value ?? [])]
    .filter((post) => !post.draft)
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      summary: getContentSummary(post),
      image: post.cardImage,
      alt: post.cardAlt,
      dateLabel: post.dateLabel,
      readTimeLabel: formatBlogReadTimeLabel(post.readTimeLabel),
      to: `/post/${getBlogRouteSlug(post.path)}`,
    })),
)

useHead({
  title: 'Retina Studios | Υπηρεσίες επαγγελματικού βίντεο και φωτογραφίας',
  meta: [
    {
      name: 'description',
      content:
        'Κατευθείαν από τους δρόμους της Νέας Υόρκης στην καρδιά της Δράμας, η Retina Studios έφτασε για να προσφέρει τις καλύτερες υπηρεσίες βίντεο σε επαγγελματίες και ιδιώτες. Ο φακός μας, η ιστορία σας!',
    },
  ],
  script: [
    {
      src: 'https://player.vimeo.com/api/player.js',
      async: true,
    },
  ],
})
</script>

<template>
  <div class="wix-home-page">

    <main class="home-main">
      <section class="hero-section">
        <div class="hero-media" aria-hidden="true">
          <video
            class="hero-video"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            poster="/images/home/hero-poster.jpg"
          >
            <source src="/videos/home-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="hero-content">
          <div class="hero-logo">
            <img
              src="/images/home/hero-logo.png"
              alt="Retina Brand logo invert"
              width="600"
              height="485"
            />
          </div>
        </div>
      </section>
    </main>
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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wix-home-page {
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

.home-main {
  background: #fff;
}

.hero-section {
  position: relative;
  min-height: 789px;
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-media img,
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-content {
  position: relative;
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 789px;
}

.hero-logo {
  position: absolute;
  width: 600px;
  height: 485px;
  top: 152px;
  left: 190px;
}

.hero-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.company-section {
  background: #000;
  color: #fff;
}

.company-inner {
  position: relative;
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 797px;
}

.company-copy {
  position: absolute;
  left: 82px;
  top: 202px;
  width: 363px;
}

.company-copy h2 {
  margin: 0 0 37px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 55px;
  line-height: 0.8;
  font-style: italic;
  font-weight: 400;
  color: #fff;
}

.company-copy p {
  margin: 0 0 12px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #f2f2f2;
}

.company-copy strong {
  font-weight: 700;
}

.company-image {
  position: absolute;
  left: 530px;
  top: 99px;
  width: 450px;
  height: 600px;
  margin: 0;
}

.company-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.showreel-section {
  background: #f9d342;
}

.showreel-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 806px;
  padding-top: 86px;
}

.showreel-inner h2 {
  width: 907px;
  max-width: 100%;
  margin: 0 0 9px 73px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 400;
  text-align: right;
  color: #000;
}

.showreel-inner .accent {
  color: #fff;
}

.showreel-video {
  position: relative;
  width: 979px;
  max-width: 100%;
  height: 551px;
  margin: 0 auto;
  background: #000;
  overflow: hidden;
}

.showreel-video img,
.showreel-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.clients-section {
  background: #000;
  color: #fff;
}

.clients-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 72px 0 70px;
}

.clients-inner h2 {
  margin: 0 auto 43px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 55px;
  line-height: 0.8;
  font-style: italic;
  font-weight: 400;
  text-align: center;
}

.clients-white {
  color: #fff;
}

.clients-accent {
  color: #f9d342;
}

.clients-grid {
  display: grid;
  gap: 0;
}

.clients-row {
  display: grid;
  grid-template-columns: repeat(5, 196px);
}

.clients-row img {
  width: 196px;
  height: 196px;
  object-fit: cover;
  display: block;
}

.latest-news-section {
  background: #fff;
}

.latest-news-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-bottom: 13px;
}

.latest-news-inner h2 {
  width: 907px;
  max-width: 100%;
  margin: 74px 0 32px 0;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 400;
  color: #000;
}

.latest-news-inner .accent {
  color: #f9d342;
}

.latest-news-grid {
  display: grid;
  grid-template-columns: repeat(2, 454px);
  column-gap: 32px;
  row-gap: 32px;
}

.latest-news-card {
  border: 1px solid #f2f2f2;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.latest-news-image {
  display: block;
  width: 454px;
  height: 256px;
}

.latest-news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.latest-news-body {
  padding: 15px 15px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.latest-news-title {
  color: inherit;
  text-decoration: none;
}

.latest-news-title h3 {
  margin: 0;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 26px;
  line-height: 1.35;
  font-weight: 700;
  color: #000;
}

.latest-news-body p {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #000;
}

.latest-news-meta {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  color: #000;
}

.latest-news-dot {
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background: #000;
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

.social-rail {
  position: fixed;
  right: 37px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  gap: 17px;
  z-index: 20;
}

.social-rail a,
.social-rail img {
  width: 26px;
  height: 26px;
  display: block;
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

  .hero-content,
  .company-inner,
  .showreel-inner,
  .clients-inner,
  .latest-news-inner,
  .footer-inner {
    width: auto;
  }

  .hero-logo {
    position: static;
    width: min(420px, 85vw);
    height: auto;
    margin: 120px auto 60px;
  }

  .hero-section,
  .hero-content {
    min-height: 394px;
  }

  .company-copy,
  .company-image {
    position: static;
    width: 100%;
  }

  .company-inner {
    padding: 80px 0 60px;
    min-height: auto;
  }

  .company-image {
    max-width: 420px;
    margin: 40px auto 0;
    height: auto;
  }

  .showreel-inner h2 {
    margin: 30px 0 24px;
    font-size: 32px;
    text-align: left;
    width: auto;
    max-width: 100%;
  }

  .showreel-inner {
    min-height: 242px;
    padding-top: 0;
    padding-bottom: calc(24px + 5%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .showreel-video {
    height: auto;
    aspect-ratio: 979 / 551;
  }

  .clients-inner h2 {
    margin: 60px 0 32px;
  }

  .clients-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    justify-items: center;
  }

  .latest-news-grid {
    grid-template-columns: 1fr;
  }

  .latest-news-image {
    width: 100%;
    height: auto;
    aspect-ratio: 454 / 256;
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

  .social-rail {
    position: static;
    transform: none;
    margin: 24px auto 0;
    justify-content: center;
    display: flex;
    gap: 20px;
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
