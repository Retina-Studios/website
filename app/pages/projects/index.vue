<script setup lang="ts">
type SocialLink = {
  label: string
  href: string
  icon: string
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

useHead({
  title: 'Δημιουργικά project | Retina Studios',
})


const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-projects-page">

    <main class="projects-main">
      <section class="projects-strip-section">
        <div class="projects-shell">
          <div class="projects-grid">
            <article class="project-column films-column">
              <NuxtLink to="/film-productions" class="films-card" aria-label="Παραγωγές Ταινιών">
                <h1>
                  <span>ΠΑΡΑΓΩΓΕΣ</span>
                  <span>ΤΑΙΝΙΩΝ</span>
                </h1>
              </NuxtLink>
            </article>

            <article class="project-column vignettes-column">
              <NuxtLink to="/projects/vignettes" class="vignettes-card" aria-label="Φωτογραφίσεις Vignettes">
                <img
                  src="/images/projects/tile-vignettes-logo.png"
                  alt="Aesthetic Vignettes"
                  width="326"
                  height="83"
                  loading="eager"
                  decoding="async"
                />
              </NuxtLink>
            </article>

            <article class="project-column sessions-column">
              <NuxtLink to="/retina-sessions" class="sessions-card" aria-label="Μουσικά Retina Sessions">
                <img
                  src="/images/projects/tile-sessions-logo.png"
                  alt="Retina Sessions"
                  width="326"
                  height="184"
                  loading="eager"
                  decoding="async"
                />
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

.wix-projects-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #f9d342;
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

.projects-main {
  background: #f9d342;
}

.projects-strip-section {
  background: #fff;
}

.projects-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
}

.projects-grid {
  width: 980px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 327px 326px 327px;
}

.project-column {
  position: relative;
  min-height: 524px;
  overflow: visible;
}

.films-column {
  background: #fff url('/images/projects/tile-films-bg.jpg') center / cover no-repeat;
}

.vignettes-column {
  background: linear-gradient(340deg, #ffb9e5 22.3449707031%, #ecf872 51.0040283203%, #bee0e6 76.8676757813%);
}

.sessions-column {
  background: #fff url('/images/projects/tile-sessions-bg.jpg') center / cover no-repeat;
}

.films-card {
  position: absolute;
  left: 2px;
  top: 160px;
  width: 326px;
  text-decoration: none;
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
}

.films-card:hover {
  transform: scale(1.1);
  z-index: 2;
}

.films-card h1 {
  width: 304px;
  margin: 52px 0 70px 22px;
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.2em;
  color: #fff;
}

.films-card h1 span {
  display: inline-block;
  width: fit-content;
  background: #000;
  padding: 2px 6px;
}

.vignettes-card {
  position: absolute;
  left: 0;
  top: 138px;
  width: 326px;
  min-height: 247px;
  display: block;
  text-decoration: none;
}

.vignettes-card img {
  width: 326px;
  height: 83px;
  display: block;
  margin-top: 74px;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
  transform-origin: center;
}

.vignettes-card:hover img {
  transform: scale(1.1);
}

.sessions-card {
  position: absolute;
  left: -1px;
  top: 115px;
  width: 326px;
  display: block;
  text-decoration: none;
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
}

.sessions-card:hover {
  transform: scale(1.1);
  z-index: 2;
}

.sessions-card img {
  width: 326px;
  height: 184px;
  display: block;
  margin-top: 43px;
  margin-bottom: 51px;
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

  .projects-shell,
  .footer-inner {
    width: auto;
    max-width: calc(100% - 2rem);
    margin: 0 auto;
  }

  .projects-grid {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .project-column {
    min-height: 380px;
  }

  .films-card,
  .vignettes-card,
  .sessions-card {
    left: 50%;
    top: 50%;
    width: min(326px, calc(100% - 2rem));
    transform: translate(-50%, -50%);
  }

  .films-card:hover,
  .sessions-card:hover {
    transform: translate(-50%, -50%) scale(1.06);
  }

  .films-card h1 {
    width: 100%;
    margin: 0;
    font-size: clamp(1.65rem, 6vw, 34px);
    align-items: center;
    letter-spacing: 0.14em;
  }

  .films-card h1 span {
    text-align: center;
  }

  .vignettes-card {
    min-height: auto;
  }

  .vignettes-card img {
    width: 100%;
    height: auto;
    margin-top: 0;
  }

  .sessions-card img {
    width: 100%;
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
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
