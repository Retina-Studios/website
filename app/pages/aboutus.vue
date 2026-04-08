<script setup lang="ts">
type TeamMember = {
  role: string
  name: string
  bio: string
  image: string
  alt: string
}

const introParagraphs = [
  'Κατευθείαν από τους πολυσύχναστους δρόμους της Νέας Υόρκης, η Retina Studios φέρνει τη δημιουργικότητα και την τεχνογνωσία της στην καρδιά της Δράμας. Με πολυετή εμπειρία στον χώρο της βιντεογραφίας και βαθιά κατανόηση των διεθνών τάσεων, προσφέρουμε υπηρεσίες που ξεχωρίζουν τόσο για την ποιότητα όσο και για την αισθητική τους. Είτε πρόκειται για επαγγελματικές ανάγκες είτε για προσωπικά πρότζεκτ, η ομάδα μας είναι αφοσιωμένη στην παράδοση εξατομικευμένων λύσεων, προσαρμοσμένων στις απαιτήσεις του κάθε πελάτη.',
  'Το στούντιό μας στη Δράμα, εξοπλισμένο με τεχνολογία αιχμής και σχεδιασμένο με διεθνείς προδιαγραφές, μας επιτρέπει να προσφέρουμε κορυφαίες υπηρεσίες βίντεο και φωτογραφίας. Στόχος μας είναι να προσφέρουμε στους πελάτες μας ένα τελικό αποτέλεσμα που όχι μόνο καλύπτει, αλλά ξεπερνά τις προσδοκίες τους, αναδεικνύοντας το προσωπικό τους όραμα ή τη μοναδικότητα της επιχείρησής τους.',
]

const teamLead =
  'Η ομάδα μας συνδυάζει εμπειρία στη βιντεογραφία, τη φωτογραφία και την καλλιτεχνική διεύθυνση, με στόχο να αναδεικνύει κάθε ιστορία.'

const teamMembers: TeamMember[] = [
  {
    role: 'Ιδρυτής / Βιντεογράφος / Φωτογράφος',
    name: 'Παναγιώτης Πεϊκίδης',
    bio: 'Ζώντας μεταξύ Ηνωμένων Πολιτειών και Ελλάδας, ο Παναγιώτης μετράει 20 χρόνια εμπειρίας στην φωτογραφία και το βίντεο. Ίδρυσε το Retina Studios στην Νέα Υόρκη τον Οκτώβριο του 2022, πριν το μεταφέρει μόνιμα στην γενέτειρά του Δράμα, τον Ιούνιο του 2024.',
    image: '/images/aboutus/team-panagiotis.jpg',
    alt: 'Παναγιώτης Πεϊκίδης',
  },
  {
    role: 'Πωλήσεις / Social Media Manager',
    name: 'Κωνσταντίνα Βάντση',
    bio: 'Η Κωνσταντίνα Βάντση είναι απόφοιτη Προσχολικής Αγωγής και Εκπαιδευτικού Σχεδιασμού του Πανεπιστημίου του Αιγαίου, και τα τελευταία χρόνια δραστηριοποιείται στις πωλήσεις και τα μέσα κοινωνικής δικτύωσης. Στόχος της είναι να εξελίσσεται μέσα στο περιβάλλον εργασίας της, και να προσφέρει αξιόπιστες λύσεις και άκρως δημιουργικές ιδέες στους πελάτες της.',
    image: '/images/aboutus/team-konstantina.jpg',
    alt: 'Κωνσταντίνα Βάντση',
  },
  {
    role: 'Creative Director',
    name: 'Θοδωρής Πρασίδης',
    bio: 'Ο Θοδωρής Πρασίδης είναι συγγραφέας κόμικς, με εκδόσεις σε μερικούς από τους μεγαλύτερους Αμερικανικούς εκδοτικούς οίκους του χώρου. Παράλληλα, ασχολείται με την βιντεογραφία και την καλλιτεχνική διεύθυνση δημιουργικών πρότζεκτ.',
    image: '/images/aboutus/team-thodoris.jpg',
    alt: 'Θοδωρής Πρασίδης',
  },
]

useHead({
  title: 'Ποιοι είμαστε | Retina Studios',
  meta: [
    {
      name: 'description',
      content:
        'Κατευθείαν από τους πολυσύχναστους δρόμους της Νέας Υόρκης, η Retina Studios φέρνει τη δημιουργικότητα και την τεχνογνωσία της στην καρδιά της Δράμας.',
    },
  ],
})
</script>

<template>
  <div class="wix-about-page">
    <main class="about-main">
      <section class="hero-section">
        <div class="hero-stage">
          <figure class="hero-image-wrap">
            <img
              src="/images/aboutus/hero.jpg"
              alt="Retina Studios studio"
              width="980"
              height="798"
              loading="eager"
              decoding="async"
            />
          </figure>
          <h1 class="hero-title"><span>Ποιοι είμαστε</span></h1>
        </div>
      </section>

      <section class="intro-section">
        <div class="intro-stage about-body-shell">
          <div class="intro-copy">
            <p v-for="(paragraph, index) in introParagraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <section class="team-section">
        <div class="team-stage about-body-shell">
          <h2>Η ομάδα μας</h2>
          <p class="team-lead">{{ teamLead }}</p>

          <div class="team-grid">
            <article v-for="member in teamMembers" :key="member.name" class="team-card">
              <img
                :src="member.image"
                :alt="member.alt"
                width="403"
                height="334"
                loading="lazy"
                decoding="async"
              />
              <p class="member-role">{{ member.role }}</p>
              <h3>{{ member.name }}</h3>
              <p class="member-bio">{{ member.bio }}</p>
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

.wix-about-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.about-main {
  --about-body-max-width: 1660px;
  --about-body-gutter: 20px;
  --about-body-width: min(var(--about-body-max-width), calc(100% - (var(--about-body-gutter) * 2)));
}

.about-body-shell {
  width: var(--about-body-width);
  margin: 0 auto;
}

.hero-section {
  background: #fff;
}

.hero-stage {
  width: 980px;
  max-width: calc(100% - 2rem);
  min-height: 798px;
  margin: 0 auto;
  position: relative;
}

.hero-image-wrap {
  width: 100%;
  height: 798px;
  margin: 0;
}

.hero-image-wrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.hero-title {
  position: absolute;
  left: 276px;
  top: 359px;
  width: 427px;
  margin: 0;
  text-align: center;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
}

.hero-title span {
  background: #fff;
  padding: 2px 6px;
}

.intro-section {
  background: rgb(249 211 66);
}

.intro-stage {
  width: 980px;
  max-width: calc(100% - 2rem);
  min-height: 520px;
  margin: 0 auto;
}

.intro-copy {
  width: 768px;
  margin: 109px 0 10px 106px;
}

.intro-copy p {
  margin: 0 0 1.8rem;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.8;
}

.intro-copy p:last-child {
  margin-bottom: 0;
}

.team-section {
  background: #fff;
}

.team-stage {
  padding: 74px 40px 2px;
  box-sizing: border-box;
}

.team-stage h2 {
  width: 980px;
  max-width: 100%;
  margin: 0 auto 47px;
  text-align: center;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.15;
}

.team-lead {
  width: 631px;
  max-width: 100%;
  margin: 0 auto 65px;
  text-align: center;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.8;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(403px, 403px));
  justify-content: center;
  gap: 30px;
}

.team-card {
  width: 403px;
  background: rgb(242 242 242 / 80%);
}

.team-card img {
  display: block;
  width: 403px;
  height: 334px;
  object-fit: cover;
}

.member-role {
  width: 356px;
  margin: 2px 0 2px 31px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.team-card h3 {
  width: 338px;
  margin: 0 0 30px 31px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
}

.member-bio {
  width: 338px;
  margin: 0 0 58px 31px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

@media (max-width: 1020px) {
  .hero-stage,
  .intro-stage,
  .team-stage {
    width: auto;
    max-width: calc(100% - 2rem);
    margin: 0 auto;
  }

  .hero-stage {
    min-height: 0;
  }

  .hero-image-wrap {
    height: auto;
    aspect-ratio: 980 / 798;
  }

  .hero-title {
    position: static;
    width: auto;
    margin: 1rem auto 0;
    font-size: clamp(2rem, 8vw, 56px);
  }

  .intro-stage {
    min-height: 0;
    padding: 1.2rem 0 1.4rem;
    box-sizing: border-box;
  }

  .intro-copy {
    width: auto;
    margin: 0;
  }

  .intro-copy p {
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 1.2rem;
  }

  .team-stage {
    padding: 2rem 0;
  }

  .team-stage h2,
  .team-lead,
  .team-card,
  .team-card img,
  .member-role,
  .team-card h3,
  .member-bio {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .team-stage h2 {
    font-size: clamp(2rem, 7vw, 50px);
    margin-bottom: 1.1rem;
  }

  .team-lead {
    margin-bottom: 1.4rem;
    font-size: 16px;
    line-height: 1.7;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .team-card img {
    height: auto;
    aspect-ratio: 403 / 334;
  }

  .member-role,
  .team-card h3,
  .member-bio {
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .member-role {
    margin-top: 0.8rem;
  }

  .team-card h3 {
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
  }

  .member-bio {
    margin-bottom: 1.2rem;
  }
}
</style>
