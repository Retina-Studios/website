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


const isProjectBranch = (path: string) =>
  path === '/projects' ||
  path === '/retina-sessions' ||
  path === '/film-productions' ||
  path.startsWith('/projects/vignettes')

const isActive = (to: string) => {
  if (to === '/projects') {
    return isProjectBranch(route.path)
  }

  return route.path === to
}

useHead({
  title: 'Μουσικά Retina Sessions | Retina Studios',
})
</script>

<template>
  <div class="wix-retina-sessions-page">

    <main class="sessions-main">
      <section class="intro-section">
        <div class="content-shell intro-shell">
          <img
            class="sessions-logo"
            src="/images/retina-sessions/logo.png"
            alt="Retina Sessions logo"
            width="364"
            height="207"
            loading="eager"
            decoding="async"
          />

          <div class="intro-copy">
            <p>
              Καλώς ήρθατε στο Retina Sessions, ένα ολόφρεσκο μουσικό πρότζεκτ που δημιουργήθηκε
              για να αναδείξει το ταλέντο νέων καλλιτεχνών, μέσα από μια σειρά ηλεκτρισμένων
              ζωντανών εμφανίσεων! Ακολουθήστε μας και απολαύστε σπουδαίους μουσικούς σε μοναδικές
              ζωντανές εμφανίσεις.
            </p>
          </div>

          <a
            class="youtube-cta"
            href="https://www.youtube.com/@RetinaSessions"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="@RetinaSessions"
          >
            <span>@RetinaSessions</span>
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <path
                d="M86.025 80.142v39.65l34.85-19.825-34.85-19.825ZM102 53c8.933.05 40.842.392 49.758 2.8 5.734 1.542 10.25 6.092 11.784 11.867 2.475 9.3 2.75 27.583 2.783 31.533v.675l.008.092s0 .025-.008.083v.675c-.033 3.95-.308 22.242-2.783 31.542-1.534 5.766-6.05 10.316-11.784 11.866-9.216 2.484-42.975 2.767-50.575 2.8h-3.041c-7.6-.033-41.359-.316-50.575-2.8-5.734-1.55-10.25-6.1-11.784-11.866-2.475-9.3-2.75-27.592-2.783-31.542V99.2c.033-3.95.308-22.233 2.783-31.533 1.534-5.775 6.05-10.325 11.784-11.867 8.916-2.408 40.825-2.75 49.75-2.8H102Z"
              />
            </svg>
          </a>
        </div>
      </section>

      <section class="gallery-section">
        <div class="content-shell gallery-shell">
          <img
            class="hero-strip"
            src="/images/retina-sessions/hero-strip.jpg"
            alt="Crescent Studios session"
            width="980"
            height="301"
            loading="lazy"
            decoding="async"
          />

          <div class="gallery-row row-top">
            <img
              src="/images/retina-sessions/grid-top-left.jpg"
              alt="A86A0682.jpg"
              width="576"
              height="452"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/images/retina-sessions/grid-top-right.jpg"
              alt="PXL_20250306_172927001.MP~2.jpg"
              width="384"
              height="452"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="gallery-row row-bottom">
            <img
              src="/images/retina-sessions/grid-bottom-left.jpg"
              alt="Recording studio equipment"
              width="384"
              height="301"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/images/retina-sessions/grid-bottom-right.jpg"
              alt="2023-08-11 17.43.19.jpg"
              width="576"
              height="301"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="join-section">
        <div class="content-shell join-shell">
          <div class="join-copy">
            <p>
              Είσαι μουσικός, τραγουδιστής, μέλος μπάντας, ή προμότερ, και θέλεις να συμμετέχεις
              στο Retina Sessions; Στείλε μας μήνυμα τώρα!
            </p>
          </div>

          <div class="interest-form">
            <h2>Δήλωση ενδιαφέροντος</h2>
            <p>
              Στείλτε μας email στο
              <a href="mailto:info@retinastudios.gr">info@retinastudios.gr</a>
              για να συμμετέχετε στο Retina Sessions.
            </p>
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

.wix-retina-sessions-page {
  min-height: 100vh;
  background: #fff;
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
  padding: 8px 0;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: #fff;
  border: 1px solid #e8e8e8;
  box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 30;
}

.nav-group:hover .sub-menu,
.nav-group:focus-within .sub-menu {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.sub-menu a {
  display: block;
  padding: 8px 14px;
  color: #000;
  text-decoration: none;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 13px;
  line-height: 1.4;
  background: transparent;
}

.sub-menu a:hover,
.sub-menu a.active {
  background: rgb(249 211 66);
  color: #fff;
}

.sessions-main {
  width: 100%;
}

.content-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
}

.intro-section,
.gallery-section,
.join-section {
  background: #fff;
}

.intro-shell {
  display: grid;
  justify-items: center;
  padding: 0;
}

.sessions-logo {
  display: block;
  width: 364px;
  max-width: 100%;
  height: auto;
  margin: 53px auto 38px;
}

.intro-copy {
  width: 552px;
  max-width: 100%;
  margin: 0 auto 38px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
  color: #000;
}

.intro-copy p {
  margin: 0;
}

.intro-copy p + p {
  margin-top: 1rem;
}

.youtube-cta {
  width: 233px;
  min-height: 54px;
  padding: 10px;
  border-radius: 26px;
  background: #ff4040;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 19px;
  transition: all 0.2s ease;
  margin: 0 auto 39px;
}

.youtube-cta svg {
  width: 43px;
  height: 43px;
  fill: currentcolor;
}

.youtube-cta:hover {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

.gallery-shell {
  padding: 0;
}

.hero-strip {
  width: 100%;
  height: auto;
  display: block;
  margin: 30px 0 20px;
}

.gallery-row {
  display: grid;
  gap: 20px;
}

.row-top {
  grid-template-columns: 576px 384px;
  margin-bottom: 19px;
}

.row-bottom {
  grid-template-columns: 384px 576px;
  margin-bottom: 30px;
}

.gallery-row img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.join-shell {
  padding: 0;
}

.join-copy {
  width: 552px;
  max-width: 100%;
  margin: 51px auto 34px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
}

.join-copy p {
  margin: 0;
}

.interest-form {
  width: 584px;
  max-width: 100%;
  margin: 0 auto 70px;
  display: grid;
  gap: 16px;
  min-height: 625px;
}

.interest-form h2 {
  margin: 0;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 28px;
  line-height: 1.3;
}

.interest-form p {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

.interest-form a {
  color: inherit;
  text-decoration: underline;
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
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
}

.footer-logo img {
  width: 134px;
  height: 103px;
}

.footer-columns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 32px;
}

.footer-columns h3 {
  margin: 0 0 12px;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 21px;
  line-height: 1.2;
}

.footer-columns p,
.hours-grid {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.65;
}

.footer-columns a {
  color: #fff;
  text-decoration: none;
}

.hours-grid {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 0.8rem;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.social-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  gap: 30px;
}

.social-list a {
  display: inline-flex;
}

.social-list img {
  width: 30px;
  height: 30px;
}

.creator-credit {
  margin: 0;
  color: rgb(228 238 242);
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
}

@media (max-width: 1280px) {
  .brand-link {
    position: static;
    margin: 1rem 0 0;
  }

  .main-nav {
    position: static;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0.75rem 0 1rem;
  }

  .header-container {
    display: grid;
    align-content: center;
    min-height: 100px;
  }
}

@media (max-width: 900px) {
  .row-top,
  .row-bottom {
    grid-template-columns: 1fr;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
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
