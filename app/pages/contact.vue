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
  title: 'Επικοινωνία | Retina Studios',
  meta: [
    {
      name: 'description',
      content:
        'Για οποιαδήποτε ερώτηση, σχόλιο ή πρόταση συνεργασίας, μην διστάσετε να επικοινωνήσετε μαζί μας, και θα σας απαντήσουμε το άμεσα!',
    },
  ],
})


const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-contact-page">

    <main class="contact-main">
      <section class="contact-intro">
        <div class="intro-stage">
          <h1>Επικοινωνήστε μαζί μας</h1>
          <p>
            Για οποιαδήποτε ερώτηση, σχόλιο ή πρόταση συνεργασίας, μην διστάσετε να επικοινωνήσετε
            μαζί μας, και θα σας απαντήσουμε άμεσα!
          </p>
        </div>
      </section>

      <section class="contact-section">
        <div class="contact-stage">
          <figure class="contact-media">
            <img
              src="/images/contact/hero.jpg"
              alt="2024-11-22 15.06_edited.jpg"
              width="490"
              height="725"
              loading="eager"
              decoding="async"
            />
          </figure>

          <div class="contact-column">
            <p class="contact-address">Γερολυμπου 1Δ, 66132, Δράμα</p>

            <div class="contact-inline-meta">
              <a href="mailto:info@retinastudios.gr">info@retinastudios.gr</a>
              <span class="meta-divider" aria-hidden="true" />
              <p>25210 32666</p>
            </div>

            <div class="contact-hours">
              <h2>Ώρες λειτουργίας</h2>

              <div class="hours-grid">
                <div class="hours-days">
                  <p>Δευτέρα - Παρασκευή</p>
                  <p>Σάββατο</p>
                  <p>Κυριακή</p>
                </div>

                <div class="hours-times">
                  <p>9:00 π.μ. – 5:00 μ.μ.</p>
                  <p>10:00 π.μ. – 2:00 μ.μ.</p>
                  <p>Κλειστά</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section" aria-label="Χάρτης Retina Studios">
        <iframe
          title="Χάρτης Retina Studios"
          src="https://www.google.com/maps?q=Gerolympou+1D,+Drama,+Greece&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
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
  background: rgb(249 211 66);
  color: #000;
}

.wix-contact-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: rgb(249 211 66);
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

.contact-main {
  background: rgb(249 211 66);
}

.contact-intro {
  background: rgb(249 211 66);
}

.intro-stage {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
}

.intro-stage h1 {
  width: 980px;
  max-width: 100%;
  margin: 70px 0 25px;
  text-align: center;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 45px;
  font-weight: 700;
  line-height: 1.25;
}

.intro-stage p {
  width: 644px;
  max-width: 100%;
  margin: 0 auto 70px;
  text-align: center;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.8;
}

.contact-section {
  background: rgb(249 211 66);
}

.contact-stage {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto 40px;
  min-height: 725px;
  display: grid;
  grid-template-columns: 490px 490px;
}

.contact-media {
  margin: 0;
  width: 490px;
  height: 725px;
}

.contact-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.contact-column {
  width: 490px;
  padding: 105px 0 10px 17px;
  box-sizing: border-box;
}

.contact-address {
  width: 468px;
  margin: 0 0 10px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

.contact-inline-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.contact-inline-meta a,
.contact-inline-meta p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #000;
  text-decoration: none;
}

.meta-divider {
  width: 1px;
  height: 15px;
  background: rgb(71 71 71);
}

.contact-hours {
  width: 321px;
  margin-top: 64px;
}

.contact-hours h2 {
  margin: 0 0 10px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 1.2;
}

.hours-grid {
  width: 321px;
  margin: 0;
  display: grid;
  grid-template-columns: 165px 147px;
  column-gap: 9px;
}

.hours-grid p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
}

.hours-times p {
  text-align: right;
}

.map-section {
  margin: 40px 0;
  width: 100%;
  height: 350px;
}

.map-section iframe {
  display: block;
  width: 100%;
  height: 350px;
  border: 0;
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
.hours-footer-grid span {
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.85;
  color: #fff;
  text-decoration: none;
}

.footer-columns p {
  margin: 0;
}

.hours-footer-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 12px;
}

.hours-footer-grid span:nth-child(even) {
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

  .intro-stage,
  .contact-stage,
  .footer-inner {
    width: auto;
    max-width: calc(100% - 2rem);
  }

  .intro-stage h1,
  .intro-stage p,
  .contact-media,
  .contact-column,
  .contact-hours,
  .contact-hours h2,
  .hours-grid {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }

  .contact-stage {
    grid-template-columns: 1fr;
    min-height: 0;
    margin-bottom: 2rem;
  }

  .contact-media {
    height: auto;
    aspect-ratio: 490 / 725;
  }

  .contact-column {
    padding: 1.6rem 0 0;
  }

  .contact-hours {
    margin-top: 2rem;
  }

  .hours-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  .hours-times p {
    text-align: left;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .hours-footer-grid {
    grid-template-columns: 1fr;
  }

  .hours-footer-grid span:nth-child(even) {
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
