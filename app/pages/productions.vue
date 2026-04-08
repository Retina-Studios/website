<script setup lang="ts">
definePageMeta({
  path: '/film-productions',
})

type SocialLink = {
  label: string
  href: string
  icon: string
}

type ServiceTile = {
  title: string
  image: string
  alt: string
}

type TrailerCard = {
  title: string
  duration: string
  image: string
  href: string
}

const serviceTiles: ServiceTile[] = [
  {
    title: 'Production Services',
    image: '/images/productions/optimized/intro-feature-1.png',
    alt: 'Production Services',
  },
  {
    title: 'Rental Services',
    image: '/images/productions/optimized/intro-feature-2.jpg',
    alt: 'Rental Services',
  },
  {
    title: 'Work For Hire',
    image: '/images/productions/optimized/intro-feature-3.jpg',
    alt: 'Work For Hire',
  },
]

const trailers: TrailerCard[] = [
  {
    title: 'ΜΙΑ ΑΝΑΣΑ (2025) | Trailer',
    duration: '00:30',
    image: '/images/productions/optimized/trailer-1.jpg',
    href: 'https://player.vimeo.com/video/1113288004',
  },
  {
    title: 'ΤΟ ΠΟΥΛΙ ΚΑΙ ΤΟ ΚΛΟΥΒΙ (2025) | Trailer',
    duration: '01:00',
    image: '/images/productions/optimized/trailer-2.jpg',
    href: 'https://player.vimeo.com/video/1113288218',
  },
  {
    title: 'ΜΗ ΦΟΒΑΣΑΙ (2025) | Trailer',
    duration: '00:43',
    image: '/images/productions/optimized/trailer-3.jpg',
    href: 'https://player.vimeo.com/video/1113287728',
  },
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

const introText =
  'Retina Studios is an innovative production company based in Drama, Greece, with roots in New York. We are dedicated to crafting compelling narrative media across various platforms, blending creativity and storytelling to bring unique visions to life. Our passion for storytelling drives us to explore diverse genres, ensuring every project resonates with audiences. Join us on this exciting journey as we redefine the art of production.'

const introHtml = `<strong>Retina Studios</strong> is an innovative production company based in Drama, Greece, with roots in New York. We are dedicated to crafting compelling narrative media across various platforms, blending creativity and storytelling to bring unique visions to life. Our passion for storytelling drives us to explore diverse genres, ensuring every project resonates with audiences. Join us on this exciting journey as we redefine the art of production.`

useHead({
  title: 'Productions | Retina Studios',
  meta: [{ name: 'description', content: introText }],
})


</script>

<template>
  <div class="wix-productions-page">

    <main class="productions-main">
      <section class="hero-section" aria-labelledby="productions-hero-title">
        <div class="hero-media" aria-hidden="true">
          <img
            src="/images/productions/optimized/hero-top.jpg"
            alt=""
            width="980"
            height="570"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="hero-content">
          <h1 id="productions-hero-title">
            <span>Retina Studios<br />Productions</span>
          </h1>
        </div>
      </section>

      <section class="intro-section">
        <div class="productions-shell">
          <p class="intro-text" v-html="introHtml"></p>

          <div class="services-strip">
            <article v-for="tile in serviceTiles" :key="tile.title" class="service-tile">
              <figure class="service-image">
                <img :src="tile.image" :alt="tile.alt" width="286" height="335" loading="lazy" decoding="async" />
              </figure>
              <div class="service-caption">
                <h2>{{ tile.title }}</h2>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="mid-hero-section" aria-hidden="true">
        <div class="hero-media">
          <img
            src="/images/productions/optimized/hero-mid.jpg"
            alt=""
            width="980"
            height="646"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section class="pulse-section">
        <div class="productions-shell">
          <div class="pulse-copy">
            <h2>THE PULSE WITHIN US (2020)</h2>
            <p>
              The Pulse Within Us is a short film that explores the human condition through the
              lens of a young woman's journey of self-discovery. Set against the backdrop of a
              bustling city, the film delves into themes of identity, connection, and the search for
              meaning in modern life.
            </p>
            <p>
              Through intimate storytelling and evocative cinematography, the film captures the
              universal experience of feeling lost and finding one's way back to oneself. It's a
              meditation on the human spirit and the resilience that lies within each of us.
            </p>
            <p>
              The film's director, Maria Michael, won the Best New Film Director Award in Athens
              Marathon International Film Festival in 2021.
            </p>
            <p class="inline-link">
              Read more about the film
              <a href="https://thepulsewithinusshort.com/" target="_blank" rel="noreferrer noopener">here</a>.
            </p>
          </div>

          <div class="pulse-video" aria-label="The Pulse Within Us">
            <img
              src="/images/productions/optimized/pulse-video-cover.jpg"
              alt="The Pulse Within Us"
              width="668"
              height="376"
              loading="lazy"
              decoding="async"
            />
            <span class="pulse-play" aria-hidden="true"></span>
          </div>
        </div>
      </section>

      <section class="lab-section">
        <div class="productions-shell">
          <h2>
            Drama Film Lab 2025<br />
            48th Dram International Short Film Festival
          </h2>
          <p>
            Retina Studios participated in Drama Film Lab 2025, organized by the 48th
            International Short Film Festival of Drama. The workshop lasted 4 months, from
            February to June, with screenwriter and professor of the Aristotle University of
            Thessaloniki Panagiotis Iosifelis and director Vasilis Loules as lecturers. The
            participants were divided into groups by project and submitted nine short films. Retina
            Studios produced three of them: <em>One Breath, Don't Be Afraid, The Bird and the Cage</em>.
          </p>
          <p class="inline-link">
            Read more about the workshop
            <a
              href="https://www.dramafilmfestival.gr/en/drama-film-lab-en/"
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>
            .
          </p>

          <div class="trailers-grid">
            <a
              v-for="trailer in trailers"
              :key="trailer.title"
              class="trailer-card"
              :href="trailer.href"
              target="_blank"
              rel="noreferrer noopener"
            >
              <figure>
                <img
                  :src="trailer.image"
                  :alt="trailer.title"
                  width="275"
                  height="154"
                  loading="lazy"
                  decoding="async"
                />
                <span class="duration">{{ trailer.duration }}</span>
              </figure>
              <h3>{{ trailer.title }}</h3>
            </a>
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
  background: #111;
  color: #fff;
}

.wix-productions-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #111;
  color: #fff;
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

.productions-main {
  background: #111;
}

.productions-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
}

.hero-section,
.mid-hero-section {
  position: relative;
  width: 100%;
  min-height: 570px;
}

.mid-hero-section {
  min-height: 646px;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-media img {
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
  min-height: 570px;
}

.hero-content h1 {
  margin: 205px 0 10px;
  padding-left: 90px;
  width: 800px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 56px;
  line-height: 1.05;
  font-weight: 400;
}

.hero-content h1 span {
  background: #fff;
  color: #000;
  padding: 6px 12px;
  display: inline-block;
}

.intro-section {
  background: #111;
}

.intro-text {
  margin: 58px 0 27px;
  margin-left: 85px;
  width: min(805px, 100%);
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #f2f2f2;
}

.intro-text strong {
  color: #fff;
  font-weight: 700;
}

.services-strip {
  width: min(980px, calc(100% - 80px));
  margin: 0 auto 36px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: space-between;
  gap: 10px;
}

.service-tile {
  margin: 0;
  width: 300px;
}

.service-image {
  margin: 0;
  width: 286px;
  height: 335px;
  overflow: hidden;
  background: #111;
  margin-bottom: -45px;
}

.service-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.service-caption {
  width: 279px;
  background: #fff;
  color: #000;
  margin-left: 21px;
  padding: 27px 18px 34px;
  box-sizing: border-box;
}

.service-caption h2 {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 20px;
  line-height: 1.15;
  font-weight: 400;
  color: #000;
}

.pulse-section {
  background: #111;
  padding-bottom: 51px;
}

.pulse-copy {
  margin: 73px 0 63px;
  margin-left: 87px;
  width: min(805px, 100%);
}

.pulse-copy h2,
.lab-section h2 {
  margin: 0 0 20px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 400;
  color: #fff;
}

.pulse-copy p,
.lab-section p {
  margin: 0 0 16px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #f2f2f2;
}

.inline-link a {
  color: rgb(249 211 66);
  text-decoration: underline;
}

.pulse-video {
  width: 668px;
  height: 376px;
  margin-left: 156px;
  margin-bottom: 51px;
  border: 0;
  background: #000;
  overflow: hidden;
  position: relative;
}

.pulse-video img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.pulse-video::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

.pulse-play {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 999px;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: grid;
  place-items: center;
}

.pulse-play::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 11px solid #fff;
  margin-left: 4px;
}

.lab-section {
  background: #111;
  padding: 86px 0 56px;
}

.lab-section h2,
.lab-section p {
  margin-left: 106px;
  width: min(805px, 100%);
}

.trailers-grid {
  margin-top: 0;
  margin-bottom: 37px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: space-between;
  gap: 10px;
}

.trailer-card {
  color: inherit;
  text-decoration: none;
}

.trailer-card figure {
  margin: 0;
  position: relative;
  overflow: hidden;
  background: #000;
}

.trailer-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.trailer-card:hover img {
  transform: scale(1.03);
}

.duration {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1;
  color: #fff;
  background: rgb(0 0 0 / 74%);
  padding: 6px 7px;
  border-radius: 4px;
}

.trailer-card h3 {
  margin: 11px 0 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 26px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
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

  .productions-shell,
  .footer-inner {
    width: auto;
  }

  .intro-text,
  .pulse-copy p,
  .lab-section p {
    font-size: 18px;
  }

  .hero-content {
    min-height: auto;
  }

  .hero-content h1 {
    margin: 120px 0 40px;
    padding-left: 0;
    width: auto;
    font-size: clamp(2.2rem, 8vw, 56px);
  }

  .hero-content h1 span {
    padding: 6px 8px;
  }

  .hero-section,
  .mid-hero-section {
    min-height: 360px;
  }

  .intro-text {
    margin-left: 0;
  }

  .services-strip {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .service-tile,
  .service-image,
  .service-caption {
    width: 100%;
  }

  .service-image {
    height: auto;
    aspect-ratio: 286 / 335;
  }

  .service-caption {
    margin-left: 0;
  }

  .pulse-copy {
    margin-left: 0;
    width: auto;
  }

  .pulse-video {
    width: 100%;
    height: auto;
    margin-left: 0;
    aspect-ratio: 668 / 376;
  }

  .lab-section h2,
  .lab-section p {
    margin-left: 0;
  }

  .trailers-grid {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }

  .trailer-card h3 {
    font-size: clamp(1.4rem, 8vw, 26px);
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
