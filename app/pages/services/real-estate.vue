<script setup lang="ts">
type GalleryImage = {
  src: string
  alt: string
}

type Deliverable = {
  title: string
  description: string
}

const servicePoints = [
  'Φωτογράφιση εσωτερικών και εξωτερικών χώρων με καθαρές γραμμές και φυσική αίσθηση βάθους.',
  'Υλικό για αγγελίες, Airbnb, Booking, μεσιτικά γραφεία και premium παρουσιάσεις ακινήτων.',
  'Παραδόσεις εικόνων έτοιμων για web, πλατφόρμες καταχωρίσεων και έντυπη εμπορική χρήση.',
]

const galleryImages: GalleryImage[] = [
  { src: '/images/real-estate/web/real-estate-3.jpg', alt: 'Exterior real estate photograph of a modern villa' },
  { src: '/images/real-estate/web/real-estate-2.jpg', alt: 'Bright living and dining area with sea view' },
  { src: '/images/real-estate/web/real-estate-1.jpg', alt: 'Kitchen and dining area photographed for property listing' },
  { src: '/images/real-estate/web/real-estate-4.jpg', alt: 'Twilight exterior photograph of a villa and pool' },
  { src: '/images/real-estate/web/real-estate-5.jpg', alt: 'Styled sitting area inside a modern property' },
]

const deliverables: Deliverable[] = [
  {
    title: 'Property Listings',
    description:
      'Φωτογραφίες που δίνουν καθαρή αίσθηση της διάταξης, του φωτισμού και της ποιότητας του ακινήτου για αγγελίες και online καταχωρίσεις.',
  },
  {
    title: 'Villas & Short-Term Rentals',
    description:
      'Εικόνες που αναδεικνύουν ατμόσφαιρα, θέα και φιλοξενία, ώστε το ακίνητο να ξεχωρίζει σε Airbnb, Booking και direct bookings.',
  },
  {
    title: 'Interior & Exterior Highlights',
    description:
      'Στοχευμένες λήψεις σε χώρους, λεπτομέρειες και αρχιτεκτονικά στοιχεία που ενισχύουν τη συνολική παρουσίαση του property.',
  },
]

useHead({
  title: 'Real Estate | Retina Studios',
  meta: [
    {
      name: 'description',
      content:
        'Real estate photography από τη Retina Studios για κατοικίες, βίλες και καταλύματα με εικόνες έτοιμες για listings, short-term rentals και premium παρουσιάσεις.',
    },
  ],
})
</script>

<template>
  <div class="wix-real-estate-page">
    <main class="real-estate-main">
      <section class="intro-section">
        <div class="content-shell intro-shell">
          <div class="intro-heading">
            <p class="eyebrow">Service</p>
            <h1>Real Estate</h1>
          </div>

          <div class="intro-copy">
            <p>
              Δημιουργούμε φωτογραφίες ακινήτων που αναδεικνύουν τη ροή, το φως και την αίσθηση
              κάθε χώρου, για κατοικίες, βίλες, boutique rentals και επαγγελματικές καταχωρίσεις.
            </p>
          </div>

          <a class="cta-button" href="mailto:info@retinastudios.gr?subject=Real%20Estate%20Photography">
            Ζητήστε προσφορά
          </a>
        </div>
      </section>

      <section class="gallery-section">
        <div class="content-shell gallery-shell">
          <img
            class="hero-strip"
            :src="galleryImages[0].src"
            :alt="galleryImages[0].alt"
            width="980"
            height="301"
            loading="eager"
            decoding="async"
          />

          <div class="gallery-row row-top">
            <img
              :src="galleryImages[1].src"
              :alt="galleryImages[1].alt"
              width="576"
              height="452"
              loading="lazy"
              decoding="async"
            />
            <img
              :src="galleryImages[2].src"
              :alt="galleryImages[2].alt"
              width="384"
              height="452"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="gallery-row row-bottom">
            <img
              :src="galleryImages[3].src"
              :alt="galleryImages[3].alt"
              width="576"
              height="301"
              loading="lazy"
              decoding="async"
            />
            <img
              :src="galleryImages[4].src"
              :alt="galleryImages[4].alt"
              width="384"
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
              Φωτογραφίζουμε χώρους με έμφαση στη γεωμετρία, τη φωτεινότητα και το styling, ώστε
              κάθε listing να δείχνει καθαρό, φιλόξενο και αμέσως πιο ανταγωνιστικό στην αγορά.
            </p>
          </div>

          <div class="service-details">
            <h2>Τι περιλαμβάνει</h2>
            <ul class="point-list">
              <li v-for="point in servicePoints" :key="point">{{ point }}</li>
            </ul>

            <div class="deliverable-list">
              <article v-for="item in deliverables" :key="item.title" class="deliverable-item">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </article>
            </div>
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

.wix-real-estate-page {
  min-height: 100vh;
  background: #fff;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.real-estate-main {
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

.intro-heading {
  margin: 53px auto 26px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 12px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.intro-heading h1 {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: clamp(2.6rem, 7vw, 4.6rem);
  line-height: 1;
}

.intro-copy {
  width: 552px;
  max-width: 100%;
  margin: 0 auto 38px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
  color: #000;
}

.intro-copy p,
.join-copy p,
.deliverable-item p {
  margin: 0;
}

.cta-button {
  width: 233px;
  min-height: 54px;
  margin: 0 auto 39px;
  padding: 10px 18px;
  border: 1px solid #000;
  border-radius: 26px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  text-decoration: none;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 19px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.cta-button:hover {
  background: #fff;
  color: #000;
}

.gallery-shell {
  padding: 0;
}

.hero-strip {
  width: 100%;
  height: 301px;
  display: block;
  margin: 30px 0 20px;
  object-fit: cover;
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
  grid-template-columns: 576px 384px;
  margin-bottom: 30px;
}

.gallery-row img {
  width: 100%;
  height: 100%;
  min-height: 301px;
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
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
}

.service-details {
  width: 584px;
  max-width: 100%;
  margin: 0 auto 70px;
  display: grid;
  gap: 18px;
}

.service-details h2 {
  margin: 0;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 28px;
  line-height: 1.3;
}

.point-list {
  margin: 0;
  padding-left: 1.2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.deliverable-list {
  display: grid;
  gap: 16px;
}

.deliverable-item {
  display: grid;
  gap: 6px;
}

.deliverable-item h3 {
  margin: 0;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  line-height: 1.3;
}

.deliverable-item p {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

@media (max-width: 900px) {
  .row-top,
  .row-bottom {
    grid-template-columns: 1fr;
  }

  .hero-strip,
  .gallery-row img {
    height: auto;
    min-height: 0;
    aspect-ratio: 4 / 3;
  }
}
</style>
