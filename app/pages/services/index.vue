<script setup lang="ts">
import { NuxtLink } from '#components'

type ServiceCard = {
  title: string
  description: string
  image: string
  alt: string
  to?: string
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
    title: 'E-commerce',
    description:
      'Δημιουργούμε packshots, styled λήψεις και εμπορικό περιεχόμενο για e-shop, marketplaces και social ads.',
    image: '/images/services/card-6.jpg',
    alt: 'E-commerce περιεχόμενο προϊόντων',
    to: '/services/e-commerce',
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
            <template v-for="card in serviceCards" :key="card.title">
              <NuxtLink v-if="card.to" :to="card.to" class="service-card">
                <h2>{{ card.title }}</h2>
                <div class="card-divider"></div>
                <div class="card-image-wrap">
                  <img :src="card.image" :alt="card.alt" loading="lazy" />
                </div>
                <p>{{ card.description }}</p>
              </NuxtLink>

              <article v-else class="service-card">
                <h2>{{ card.title }}</h2>
                <div class="card-divider"></div>
                <div class="card-image-wrap">
                  <img :src="card.image" :alt="card.alt" loading="lazy" />
                </div>
                <p>{{ card.description }}</p>
              </article>
            </template>
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
  display: block;
  width: 424px;
  background: #fff;
  color: inherit;
  text-decoration: none;
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

@media (max-width: 1020px) {
  .hero-section {
    width: auto;
    padding: 1.2rem 0;
  }

  .hero-inner,
  .cards-inner {
    width: auto;
    max-width: calc(100% - 2rem);
    margin: 0 auto;
  }

  .hero-stage {
    display: block;
    width: auto;
    min-height: 0;
  }

  .hero-media {
    width: 100%;
    height: auto;
    aspect-ratio: 618 / 342;
    margin: 0;
  }

  .hero-copy {
    position: static;
    width: 100%;
    min-height: 0;
    margin: 1rem 0 0;
    padding: 1.4rem 1.2rem;
  }

  .hero-copy h1 {
    font-size: clamp(2rem, 8vw, 56px);
  }

  .hero-copy p {
    max-width: none;
  }

  .cards-section {
    padding: 1.2rem 0 2rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card,
  .service-card h2,
  .card-image-wrap,
  .service-card p,
  .card-divider {
    width: 100%;
    margin-left: 0;
  }

  .card-image-wrap {
    height: auto;
    aspect-ratio: 380 / 347;
  }
}
</style>
