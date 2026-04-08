<script setup lang="ts">
type SocialLink = {
  label: string
  href: string
  icon: string
}

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
  title: 'Ποιοι είμαστε | Retina Studios',
  meta: [
    {
      name: 'description',
      content:
        'Κατευθείαν από τους πολυσύχναστους δρόμους της Νέας Υόρκης, η Retina Studios φέρνει τη δημιουργικότητα και την τεχνογνωσία της στην καρδιά της Δράμας.',
    },
  ],
})


const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-about-page">

    <main class="about-main">
      <section class="hero-section">
        <div class="hero-stage">
          <figure class="hero-image-wrap">
            <img
              src="/images/aboutus/hero.jpg"
              alt="Ποιοι είμαστε - Retina Studios"
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
        <div class="intro-stage">
          <div class="intro-copy">
            <p v-for="paragraph in introParagraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
      </section>

      <section class="team-section" aria-label="Η ομάδα της Retina">
        <div class="team-stage about-body-shell">
          <h2>Η ομάδα της Retina</h2>
          <p class="team-lead">
            Η ομάδα μας αποτελείται από ετερόκλητους και ταλαντούχους επαγγελματίες, οι οποίοι
            συνδυάζουν τη δημιουργικότητα με την τεχνική αρτιότητα για να παρέχουν εξαιρετικές
            φωτογραφικές και βιντεοσκοπικές υπηρεσίες, προσαρμοσμένες στις ανάγκες κάθε πελάτη.
          </p>

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

  .hero-stage,
  .intro-stage,
  .team-stage,
  .footer-inner {
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
