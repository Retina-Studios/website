<script setup lang="ts">
type ServiceCard = {
  title: string
  description: string
  image: string
  alt: string
  to?: string
}

type SocialLink = {
  label: string
  href: string
  icon: string
}

const serviceCards: ServiceCard[] = [
  {
    title: 'Παραγωγή Διαφημιστικών Σποτ',
    description:
      'Δημιουργούμε δυναμικά και ελκυστικά διαφημιστικά σποτ που ξεχωρίζουν και ενισχύουν την ταυτότητα της επιχείρησής σας.',
    image: '/images/services/card-1.jpg',
    alt: 'Παραγωγή διαφημιστικών σποτ',
  },
  {
    title: 'Εταιρική Παρουσίαση',
    description:
      'Παρουσιάζουμε την κουλτούρα, τις αξίες και τις δραστηριότητες της εταιρείας σας μέσα από επαγγελματικά βίντεο που εμπνέουν εμπιστοσύνη.',
    image: '/images/services/card-2.jpg',
    alt: 'Εταιρική παρουσίαση',
  },
  {
    title: 'Κάλυψη Εκδηλώσεων',
    description:
      'Καταγράφουμε κάθε στιγμή των εκδηλώσεών σας με άρτιο οπτικό αποτέλεσμα, για να ζωντανεύουν οι αναμνήσεις.',
    image: '/images/services/card-3.jpg',
    alt: 'Κάλυψη εκδηλώσεων',
  },
  {
    title: 'Συνεντεύξεις/Vodcasts',
    description:
      'Παράγουμε επαγγελματικές συνεντεύξεις με άρτια εικόνα και ήχο, αναδεικνύοντας το μήνυμα και την προσωπικότητα του ομιλητή.',
    image: '/images/services/card-4.jpg',
    alt: 'Συνεντεύξεις και vodcasts',
  },
  {
    title: 'Διαχείρηση Social Media',
    description:
      'Παραγωγή περιεχομένου για social media που διατηρεί το κοινό σας ενεργό και ενισχύει τη διαδικτυακή σας παρουσία.',
    image: '/images/services/card-5.jpg',
    alt: 'Διαχείρηση social media',
  },
  {
    title: 'Φωτογράφιση Καταλόγου',
    description:
      'Προσφέρουμε καθαρές, επαγγελματικές φωτογραφίες προϊόντων που αναδεικνύουν λεπτομέρειες και ποιότητα.',
    image: '/images/services/card-6.jpg',
    alt: 'Φωτογράφιση καταλόγου',
    to: '/product-photography',
  },
  {
    title: 'Παραγωγή Ταινιών',
    description:
      'Δημιουργούμε καλλιτεχνικές και αφηγηματικές ταινίες μικρού μήκους που αιχμαλωτίζουν συναισθήματα και διηγούνται ιστορίες.',
    image: '/images/services/card-7.jpg',
    alt: 'Παραγωγή ταινιών',
  },
  {
    title: 'Υπηρεσίες Post-Production',
    description:
      'Αναλαμβάνουμε το μοντάζ, την χρωματική επεξεργασία και το sound design, εξασφαλίζοντας άρτιο τελικό αποτέλεσμα.',
    image: '/images/services/card-8.jpg',
    alt: 'Υπηρεσίες post-production',
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

useHead({
  title: 'Υπηρεσίες | Retina Studios',
})
</script>

<template>
  <div class="wix-services-page">
    <main class="services-main">
      <section class="hero-section">
        <div class="hero-inner services-body-shell">
          <div class="hero-stage">
            <div class="hero-media">
              <img src="/images/services/hero.jpg" alt="Υπηρεσίες Retina Studios" />
            </div>
            <div class="hero-copy">
              <h1>Υπηρεσίες</h1>
              <p>
                Στη Retina Studios δημιουργούμε οπτικοακουστικό περιεχόμενο με κινηματογραφική ποιότητα,
                προσαρμοσμένο στις ανάγκες κάθε πελάτη. Από την ιδέα μέχρι το τελικό αποτέλεσμα,
                προσφέρουμε ολοκληρωμένες παραγωγές που επικοινωνούν το μήνυμα με δημιουργικότητα και
                ακρίβεια.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="cards-section">
        <div class="cards-inner services-body-shell">
          <div class="cards-grid">
            <article v-for="card in serviceCards" :key="card.title" class="service-card">
              <h2>{{ card.title }}</h2>
              <div class="card-divider"></div>
              <component
                :is="card.to ? NuxtLink : 'div'"
                v-bind="card.to ? { to: card.to } : {}"
                class="card-image-wrap"
              >
                <img :src="card.image" :alt="card.alt" loading="lazy" />
              </component>
              <p>{{ card.description }}</p>
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

.wix-services-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.services-main {
  --services-body-max-width: 1660px;
  --services-body-gutter: 20px;
  --services-body-width: min(var(--services-body-max-width), calc(100% - (var(--services-body-gutter) * 2)));
}

.services-body-shell {
  width: var(--services-body-width);
  margin: 0 auto;
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

.hero-section {
  background: #000;
  padding: 0;
}

.hero-inner {
  max-width: 100%;
}

.hero-stage {
  position: relative;
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.hero-media {
  grid-area: 1 / 1;
  margin: 40px 0 10px;
  width: 618px;
  height: 342px;
  justify-self: start;
  align-self: start;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-copy {
  grid-area: 1 / 1;
  position: relative;
  margin: 120px 0 51px 362px;
  width: 618px;
  min-height: 389px;
  background: #fff;
  box-sizing: border-box;
  padding: 80px 49px 42px 44px;
}

.hero-copy h1 {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
}

.hero-copy p {
  margin: 0;
  max-width: 491px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
}

.cards-section {
  background: rgb(249 211 66);
  padding: 30px 0 62px;
}

.cards-inner {
  max-width: 100%;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(424px, 424px));
  justify-content: center;
  gap: 37.5px;
}

.service-card {
  width: 424px;
  background: #fff;
}

.service-card h2 {
  width: 381px;
  margin: 20px 0 12px 20px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
}

.card-divider {
  width: 381px;
  height: 1px;
  margin: 0 0 28px 20px;
  background: rgb(71 71 71);
}

.card-image-wrap {
  display: block;
  width: 380px;
  height: 347px;
  margin: 0 0 20px 20px;
  text-decoration: none;
}

.card-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.service-card p {
  width: 373px;
  margin: 0 0 46px 21px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
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

  .hero-section,
  .footer-inner {
    width: auto;
  }

  .hero-section {
    padding: 1.2rem 0;
  }

  .cards-section {
    padding: 1.2rem 0 2rem;
  }

  .hero-inner,
  .cards-inner {
    width: auto;
    max-width: calc(100% - 2rem);
    margin: 0 auto;
  }

  .hero-stage {
    min-height: 0;
    display: block;
  }

  .hero-media,
  .hero-copy {
    width: 100%;
    margin: 0;
  }

  .hero-media {
    height: auto;
    aspect-ratio: 618 / 342;
  }

  .hero-copy {
    position: static;
    min-height: 0;
    padding: 1.4rem 1.2rem;
    margin-top: 1rem;
  }

  .hero-copy p {
    max-width: none;
  }

  .hero-copy h1 {
    font-size: clamp(2rem, 8vw, 56px);
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card,
  .service-card h2,
  .card-divider,
  .card-image-wrap,
  .service-card p {
    width: 100%;
    margin-left: 0;
  }

  .card-image-wrap {
    height: auto;
    aspect-ratio: 380 / 347;
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
