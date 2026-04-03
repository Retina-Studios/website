<script setup lang="ts">
import { blogPostCards } from '~/data/blogPosts'

definePageMeta({
  layout: false,
  path: '/news',
})

type NavLink = {
  label: string
  to: string
  children?: Array<{ label: string; to: string }>
}

type SocialLink = {
  label: string
  href: string
  icon: string
}

const navLinks: NavLink[] = [
  { label: 'Αρχική', to: '/' },
  { label: 'Νέα', to: '/news' },
  { label: 'Υπηρεσίες', to: '/services' },
  { label: 'Η δουλειά μας', to: '/work' },
  {
    label: 'Δημιουργικά project',
    to: '/projects',
    children: [
      { label: 'Παραγωγές ταινιών', to: '/film-productions' },
      { label: 'Φωτογραφίσεις "Vignettes"', to: '/projects/vignettes' },
      { label: 'Μουσικά Retina Sessions', to: '/retina-sessions' },
    ],
  },
  { label: 'Το στούντιο', to: '/studior1' },
  { label: 'Ποιοι είμαστε', to: '/aboutus' },
  { label: 'Επικοινωνία', to: '/contact' },
]

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

useHead({
  title: 'Νέα | Retina Studios',
})

const route = useRoute()

const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-blog-page">
    <header class="site-header-clone">
      <div class="header-container">
        <NuxtLink to="/" class="brand-link" aria-label="Retina Studios">
          <img
            src="/images/branding/retina-banner.png"
            alt="RETINA STUDIOS banner"
            width="282"
            height="31"
          />
        </NuxtLink>

        <nav class="main-nav" aria-label="Ιστότοπος">
          <div
            v-for="link in navLinks"
            :key="link.to"
            class="nav-group"
            :class="{ 'has-children': !!link.children }"
          >
            <NuxtLink :to="link.to" :class="['nav-item', { active: isActive(link.to) }]">
              {{ link.label }}
            </NuxtLink>
            <span v-if="link.children" class="nav-caret" aria-hidden="true">▾</span>

            <ul v-if="link.children" class="sub-menu">
              <li v-for="child in link.children" :key="child.to">
                <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <main class="blog-main">
      <section class="blog-feed-section">
        <div class="blog-shell">
          <div class="blog-heading-wrap">
            <h1>Όλα τα νέα</h1>
          </div>

          <div class="blog-feed" role="region" aria-label="Ροή ιστολογίου">
            <article v-for="post in blogPostCards" :key="post.to" class="blog-post-card">
              <NuxtLink :to="post.to" class="post-image-link" :aria-label="post.title">
                <img
                  :src="post.image"
                  :alt="post.alt"
                  width="454"
                  height="341"
                  loading="lazy"
                  decoding="async"
                />
              </NuxtLink>

              <div class="post-content">
                <div class="post-copy">
                  <NuxtLink :to="post.to" class="post-title-link">
                    <h2>{{ post.title }}</h2>
                  </NuxtLink>
                  <p>{{ post.excerpt }}</p>
                </div>

                <div class="post-meta">
                  <span>{{ post.dateLabel }}</span>
                  <span class="post-meta-dot" aria-hidden="true" />
                  <span>{{ post.readTimeLabel }}</span>
                </div>
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

.wix-blog-page {
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

.blog-main {
  background: #fff;
}

.blog-feed-section {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-bottom: 2px;
}

.blog-shell {
  width: 100%;
}

.blog-heading-wrap {
  width: 70%;
  max-width: 658px;
  padding: 40px 20px;
  box-sizing: border-box;
}

.blog-heading-wrap h1 {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
}

.blog-feed {
  width: 940px;
  max-width: 100%;
  margin: 20px auto;
  display: grid;
  gap: 32px;
}

.blog-post-card {
  width: 940px;
  max-width: 100%;
  min-height: 340.5px;
  border: 1px solid rgb(242 242 242 / 75%);
  background: #fff;
  display: grid;
  grid-template-columns: 454px minmax(0, 486px);
  overflow: hidden;
}

.post-image-link {
  display: block;
  width: 454px;
  height: 340.5px;
}

.post-image-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.post-content {
  min-height: 340.5px;
  padding: 28px 36px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.post-copy {
  flex: 1;
}

.post-title-link {
  color: inherit;
  text-decoration: none;
}

.post-copy h2 {
  margin: 0 0 11px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 22px;
  line-height: 1.4;
  font-weight: 700;
  color: #000;
}

.post-copy p {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
}

.post-meta {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  line-height: 1.4;
  color: #000;
}

.post-meta-dot {
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

  .blog-feed-section,
  .footer-inner {
    width: auto;
  }

  .blog-heading-wrap {
    width: 100%;
    max-width: none;
    padding: 20px 0;
  }

  .blog-heading-wrap h1 {
    font-size: clamp(1.8rem, 8vw, 36px);
  }

  .blog-feed {
    width: 100%;
    margin: 8px 0 20px;
    gap: 20px;
  }

  .blog-post-card {
    width: 100%;
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .post-image-link {
    width: 100%;
    height: auto;
    aspect-ratio: 454 / 341;
  }

  .post-content {
    min-height: 0;
    padding: 20px 18px 18px;
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
}
</style>
