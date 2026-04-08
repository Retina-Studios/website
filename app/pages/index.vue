<script setup lang="ts">
import { blogPostCards } from '~/data/blogPosts'

type SocialLink = {
  label: string
  href: string
  icon: string
}

type ClientLogo = {
  src: string
  alt: string
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

const clientLogos: ClientLogo[] = [
  { src: '/images/home/client-1.jpg', alt: '12.jpg' },
  { src: '/images/home/client-2.jpg', alt: '1.jpg' },
  { src: '/images/home/client-3.jpg', alt: '3.jpg' },
  { src: '/images/home/client-4.jpg', alt: 'Sary Logo' },
  { src: '/images/home/client-5.jpg', alt: '2.jpg' },
  { src: '/images/home/client-6.jpg', alt: '9.jpg' },
  { src: '/images/home/client-7.jpg', alt: '5.jpg' },
  { src: '/images/home/client-8.jpg', alt: '4.jpg' },
  { src: '/images/home/client-9.jpg', alt: '7.jpg' },
  { src: '/images/home/client-10.jpg', alt: '8.jpg' },
]

const latestPosts = blogPostCards.slice(0, 3)

const testimonialSlides = [
  {
    quote:
      'Η συνεργασία μας με τη Retina Studios ήταν εξαιρετική από την αρχή μέχρι το τέλος. Μας εντυπωσίασε η δημιουργικότητά τους, η ταχύτητα της παράδοσης του υλικού και η άψογη επικοινωνία σε όλα τα στάδια. Το αποτέλεσμα ξεπέρασε τις προσδοκίες μας και η ανταπόκριση του κόσμου και των καταστημάτων το επιβεβαιώνει. Ανυπομονούμε να συνεργαστούμε ξανά!',
    name: 'Γεώργιος Κύρτσης, Πρόεδρος Εμπορικού Συλλόγου Δράμας',
    image: '/images/home/testimonial.png',
    alt: 'Γεώργιος Κύρτσης',
  },
  {
    quote:
      'Εξαιρετική συνεργασία! Η εμπειρία μου με την ομάδα ήταν πραγματικά μοναδική! Επαγγελματισμός, συνέπεια και δημιουργικότητα σε κάθε στάδιο της συνεργασίας μας. Έδειξαν από την αρχή ενδιαφέρον και αφοσίωση, κατανοώντας τις ανάγκες και τους στόχους μου. Τους συστήνω ανεπιφύλακτα σε οποιονδήποτε αναζητά επαγγελματισμό και εξαιρετικά αποτελέσματα.',
    name: 'Αλεξιάδου Αγγελική, Διαιτολόγος Διατροφολόγος',
    image: '/images/home/testimonial-2.png',
    alt: 'Αλεξιάδου Αγγελική',
  },
  {
    quote:
      'Υπέροχο στούντιο, ωραίες εγκαταστάσεις, το προσωπικό πλήρως καταρτισμένο, ενώ ο εξοπλισμός που διαθέτει είναι τελευταίας τεχνολογίας. Η δουλειά τους είναι επαγγελματική, η συνεργασία μας ήταν άψογη, και το αποτέλεσμα φανταστικό.',
    name: 'Θεοδώρα Ζαχαροπούλου & Κωνσταντίνος Νικολάου, Ιδιοκτήτες Nikolaou Gold',
    image: '/images/home/testimonial-3.png',
    alt: 'Θεοδώρα Ζαχαροπούλου και Κωνσταντίνος Νικολάου',
  },
  {
    quote:
      'Η συνεργασία μας με τα στελέχη του Retina Studios ήταν άψογη. Εξαιρετικοί επαγγελματίες με ταλέντο, διάθεση και αφοσίωση στο επιθυμητό αποτέλεσμα. Συστήνουμε ανεπιφύλακτα.',
    name: 'Ντιάνα Κουλαξίζη, Υπεύθυνη Εκδηλώσεων στο Κτήμα Εδωνίς',
    image: '/images/home/testimonial-4.png',
    alt: 'Ντιάνα Κουλαξίζη',
  },
  {
    quote:
      'Υπέροχη δουλειά και καταπληκτική συνεργασία! Η εμπειρία μου με το Retina Studios μου άφησε τις καλύτερες εντυπώσεις τόσο για το όμορφο αποτέλεσμα της φωτογράφισής μας, όσο και για την ευγενική εξυπηρέτηση από τον ιδιοκτήτη αλλα και το προσωπικό του studio! Ο χώρος είναι υπέροχα διαμορφωμένος για επαγγελματικές φωτογραφίσεις με πολλές παροχές και σύγχρονο εξοπλισμό! Ανυπομονώ για την επόμενη συνεργασία μας.',
    name: 'Ανατολή Καλούτσικου, Pole Dancing Instructor',
    image: '/images/home/testimonial-5.png',
    alt: 'Ανατολή Καλούτσικου',
  },
  {
    quote:
      'Οι δεξιότητες του Παναγιώτη στην βιντεογραφία είναι εξαιρετικές! Το γύρισμα μαζί του είναι αποδοτικό, αβίαστο και διασκεδαστικό λόγω της εμπειρίας του, της θετικής του στάσης και της δημιουργικότητάς του. Το προσωπικό του είναι επίσης κορυφαίο, και είναι πάντα αξιόπιστος, γρήγορος και επικοινωνιακός.',
    name: 'Αγγελική Ψώνη, Τραγουδίστρια',
    image: '/images/home/testimonial-6.png',
    alt: 'Αγγελική Ψώνη',
  },
]

const activeTestimonial = ref(0)
const testimonialCount = computed(() => testimonialSlides.length)

const goToTestimonial = (index: number) => {
  const count = testimonialCount.value
  activeTestimonial.value = (index + count) % count
}

const nextTestimonial = () => goToTestimonial(activeTestimonial.value + 1)
const prevTestimonial = () => goToTestimonial(activeTestimonial.value - 1)

let testimonialTimer: ReturnType<typeof setInterval> | null = null

const startTestimonialAutoplay = () => {
  if (testimonialTimer) {
    return
  }
  testimonialTimer = setInterval(() => {
    nextTestimonial()
  }, 5000)
}

const stopTestimonialAutoplay = () => {
  if (!testimonialTimer) {
    return
  }
  clearInterval(testimonialTimer)
  testimonialTimer = null
}

useHead({
  title: 'Retina Studios | Υπηρεσίες επαγγελματικού βίντεο και φωτογραφίας',
  meta: [
    {
      name: 'description',
      content:
        'Κατευθείαν από τους δρόμους της Νέας Υόρκης στην καρδιά της Δράμας, η Retina Studios έφτασε για να προσφέρει τις καλύτερες υπηρεσίες βίντεο σε επαγγελματίες και ιδιώτες. Ο φακός μας, η ιστορία σας!',
    },
  ],
  script: [
    {
      src: 'https://player.vimeo.com/api/player.js',
      async: true,
    },
  ],
})


onMounted(startTestimonialAutoplay)
onBeforeUnmount(stopTestimonialAutoplay)
</script>

<template>
  <div class="wix-home-page">

    <main class="home-main">
      <section class="hero-section">
        <div class="hero-media" aria-hidden="true">
          <video
            class="hero-video"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            poster="/images/home/hero-poster.jpg"
          >
            <source src="/videos/home-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="hero-content">
          <div class="hero-logo">
            <img
              src="/images/home/hero-logo.png"
              alt="Retina Brand logo invert"
              width="600"
              height="485"
            />
          </div>
        </div>
      </section>

      <section class="company-section" aria-labelledby="company-title">
        <div class="company-inner">
          <div class="company-copy">
            <h2 id="company-title">
              Η
              <br />
              εταιρία μας
            </h2>
            <p>
              Η <strong>Retina Studios</strong> είναι μια δημιουργική εταιρεία που εξειδικεύεται
              στην παραγωγή υψηλής ποιότητας οπτικής επικοινωνίας, προσφέροντας υπηρεσίες όπως
              βιντεογραφία, φωτογραφία και social media.
            </p>
            <p>
              Η ομάδα μας είναι αφοσιωμένη στη δημιουργία ισχυρών και επιδραστικών μηνυμάτων μέσω
              καινοτόμων μέσων, που βοηθούν τις επιχειρήσεις να συνδεθούν με το κοινό τους.
            </p>
          </div>

          <figure class="company-image">
            <img
              src="/images/home/company.jpg"
              alt="Η ομάδα της Retina Studios"
              width="450"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section class="showreel-section" aria-labelledby="showreel-title">
        <div class="showreel-inner">
          <h2 id="showreel-title">
            <span>Showreel Υπηρεσιών</span>
            <span class="accent"> 2025</span>
          </h2>

          <div class="showreel-video" role="region" aria-label="Showreel Υπηρεσιών 2025">
            <div style="padding: 56.25% 0 0 0; position: relative">
              <iframe
                src="https://player.vimeo.com/video/1104419003?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                title="Retina Studios Services Showreel 2025"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="studio-section" aria-labelledby="studio-title">
        <div class="studio-strip">
          <div class="studio-image">
            <img
              src="/images/home/studio.jpg"
              alt="Το στούντιο της Retina Studios"
              width="619"
              height="362"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="studio-copy">
            <h2 id="studio-title">Το στούντιό μας</h2>
            <p>
              Το νέο, σύγχρονο στούντιο επαγγελματικής φωτογράφησης της Retina Studios, στρατηγικά
              τοποθετημένο στην καρδιά της Δράμας, παρέχει σε κάθε φωτογράφο όλα όσα χρειάζεται για
              να πραγματοποιήσει την ιδανική φωτογράφιση, χωρίς να απαιτείται η αγορά ακριβού
              εξοπλισμού ή η αναζήτηση του κατάλληλου χώρου.
            </p>
            <NuxtLink to="/studior1" class="studio-cta">Δείτε περισσότερα</NuxtLink>
          </div>
        </div>
      </section>

      <section class="clients-section" aria-labelledby="clients-title">
        <div class="clients-inner">
          <h2 id="clients-title">
            <span class="clients-white">Οι</span>
            <span class="clients-accent"> πελάτες μας</span>
          </h2>

          <div class="clients-grid">
            <div class="clients-row">
              <img v-for="logo in clientLogos.slice(0, 5)" :key="logo.src" :src="logo.src" :alt="logo.alt" />
            </div>
            <div class="clients-row">
              <img v-for="logo in clientLogos.slice(5)" :key="logo.src" :src="logo.src" :alt="logo.alt" />
            </div>
          </div>
        </div>
      </section>

      <section class="latest-news-section" aria-labelledby="latest-news-title">
        <div class="latest-news-inner">
          <h2 id="latest-news-title">
            <span>Τελευταία </span>
            <span class="accent">νέα</span>
          </h2>

          <div class="latest-news-grid" role="region" aria-label="Τελευταία νέα">
            <article v-for="post in latestPosts" :key="post.to" class="latest-news-card">
              <NuxtLink :to="post.to" class="latest-news-image" :aria-label="post.title">
                <img :src="post.image" :alt="post.alt" width="454" height="256" loading="lazy" decoding="async" />
              </NuxtLink>
              <div class="latest-news-body">
                <NuxtLink :to="post.to" class="latest-news-title">
                  <h3>{{ post.title }}</h3>
                </NuxtLink>
                <p>{{ post.excerpt }}</p>
                <div class="latest-news-meta">
                  <span>{{ post.dateLabel }}</span>
                  <span class="latest-news-dot" aria-hidden="true" />
                  <span>{{ post.readTimeLabel }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        class="testimonial-section"
        aria-labelledby="testimonial-title"
        @mouseenter="stopTestimonialAutoplay"
        @mouseleave="startTestimonialAutoplay"
      >
        <div class="testimonial-inner">
          <h2 id="testimonial-title" class="sr-only">Μαρτυρίες πελατών</h2>
          <div class="testimonial-slider" role="region" aria-label="Μαρτυρίες πελατών">
            <article
              v-for="(slide, index) in testimonialSlides"
              :key="slide.name"
              class="testimonial-slide"
              :class="{ active: index === activeTestimonial }"
              :aria-hidden="index !== activeTestimonial"
            >
              <div class="testimonial-icon" aria-hidden="true">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="13.577 30.993 172.003 140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  aria-hidden="true"
                >
                  <path
                    fill="#000000"
                    d="M86.586 49.574c-19.8 13.01-37.742 37.789-39.6 57.614.62 0 4.949-.62 8.042-.62 17.326 0 29.7 13.006 29.7 31.591a32.635 32.635 0 0 1-32.793 32.834c-20.416 0-38.358-16.727-38.358-47.081 0-37.789 21.654-72.477 50.116-92.919zm98.994 0c-19.8 13.01-37.123 37.789-39.6 57.614.616 0 4.948-.62 8.042-.62 17.322 0 30.316 13.006 30.316 31.591 0 17.964-14.848 32.834-33.41 32.834-20.416 0-38.358-16.727-38.358-47.081 0-37.789 21.652-72.477 50.113-92.919z"
                  />
                </svg>
              </div>

              <blockquote>
                {{ slide.quote }}
              </blockquote>

              <div class="testimonial-photo">
                <img :src="slide.image" :alt="slide.alt" width="234" height="234" loading="lazy" decoding="async" />
              </div>

              <p class="testimonial-name">{{ slide.name }}</p>
            </article>
          </div>

          <div class="testimonial-nav">
            <button class="testimonial-arrow" type="button" aria-label="Προηγούμενο" @click="prevTestimonial">
              <span aria-hidden="true">‹</span>
            </button>

            <div class="testimonial-dots" role="tablist" aria-label="Διαφάνειες">
              <button
                v-for="(_, index) in testimonialSlides"
                :key="`dot-${index}`"
                type="button"
                class="testimonial-dot"
                :class="{ active: index === activeTestimonial }"
                :aria-label="`Μετάβαση στη μαρτυρία ${index + 1}`"
                @click="goToTestimonial(index)"
              />
            </div>

            <button class="testimonial-arrow" type="button" aria-label="Επόμενο" @click="nextTestimonial">
              <span aria-hidden="true">›</span>
            </button>
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

    <aside class="social-rail" aria-label="Γραμμή κοινωνικών μέσων">
      <a
        v-for="social in socialLinks"
        :key="social.label"
        :href="social.href"
        target="_blank"
        rel="noreferrer noopener"
        :aria-label="social.label"
      >
        <img :src="social.icon" :alt="social.label" width="26" height="26" />
      </a>
    </aside>
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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wix-home-page {
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

.home-main {
  background: #fff;
}

.hero-section {
  position: relative;
  min-height: 789px;
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-media img,
.hero-video {
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
  min-height: 789px;
}

.hero-logo {
  position: absolute;
  width: 600px;
  height: 485px;
  top: 152px;
  left: 190px;
}

.hero-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.company-section {
  background: #000;
  color: #fff;
}

.company-inner {
  position: relative;
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 797px;
}

.company-copy {
  position: absolute;
  left: 82px;
  top: 202px;
  width: 363px;
}

.company-copy h2 {
  margin: 0 0 37px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 55px;
  line-height: 0.8;
  font-style: italic;
  font-weight: 400;
  color: #fff;
}

.company-copy p {
  margin: 0 0 12px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #f2f2f2;
}

.company-copy strong {
  font-weight: 700;
}

.company-image {
  position: absolute;
  left: 530px;
  top: 99px;
  width: 450px;
  height: 600px;
  margin: 0;
}

.company-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.showreel-section {
  background: #f9d342;
}

.showreel-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 806px;
  padding-top: 86px;
}

.showreel-inner h2 {
  width: 907px;
  max-width: 100%;
  margin: 0 0 9px 73px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 400;
  text-align: right;
  color: #000;
}

.showreel-inner .accent {
  color: #fff;
}

.showreel-video {
  position: relative;
  width: 979px;
  max-width: 100%;
  height: 551px;
  margin: 0 auto;
  background: #000;
  overflow: hidden;
}

.showreel-video img,
.showreel-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.studio-section {
  background: #fff;
  padding-bottom: 4%;
}

.studio-strip {
  width: min(980px, calc(100% - 6vw));
  margin: 70px auto 87px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
}

.studio-image {
  grid-area: 1 / 1;
  width: min(819px, 100%);
  aspect-ratio: 619 / 362;
  transform: translateX(-10%);
}

.studio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.studio-copy {
  grid-area: 1 / 1;
  justify-self: end;
  align-self: end;
  width: min(520px, 46vw);
  background: #fff;
  padding: 60px 44px 42px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transform: translateY(calc(40px + 10%));
}

.studio-copy h2 {
  margin: 0 0 22px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 56px;
  font-style: italic;
  font-weight: 400;
  color: #000;
}

.studio-copy p {
  margin: 0 0 32px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
}

.studio-cta {
  width: 179px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 15px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;
  border: 1px solid #000;
}

.studio-cta:hover {
  background: #fff;
  color: #000;
}

.clients-section {
  background: #000;
  color: #fff;
}

.clients-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 72px 0 70px;
}

.clients-inner h2 {
  margin: 0 auto 43px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 55px;
  line-height: 0.8;
  font-style: italic;
  font-weight: 400;
  text-align: center;
}

.clients-white {
  color: #fff;
}

.clients-accent {
  color: #f9d342;
}

.clients-grid {
  display: grid;
  gap: 0;
}

.clients-row {
  display: grid;
  grid-template-columns: repeat(5, 196px);
}

.clients-row img {
  width: 196px;
  height: 196px;
  object-fit: cover;
  display: block;
}

.latest-news-section {
  background: #fff;
}

.latest-news-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding-bottom: 13px;
}

.latest-news-inner h2 {
  width: 907px;
  max-width: 100%;
  margin: 74px 0 32px 0;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 400;
  color: #000;
}

.latest-news-inner .accent {
  color: #f9d342;
}

.latest-news-grid {
  display: grid;
  grid-template-columns: repeat(2, 454px);
  column-gap: 32px;
  row-gap: 32px;
}

.latest-news-card {
  border: 1px solid #f2f2f2;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.latest-news-image {
  display: block;
  width: 454px;
  height: 256px;
}

.latest-news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.latest-news-body {
  padding: 15px 15px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.latest-news-title {
  color: inherit;
  text-decoration: none;
}

.latest-news-title h3 {
  margin: 0;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 26px;
  line-height: 1.35;
  font-weight: 700;
  color: #000;
}

.latest-news-body p {
  margin: 0;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #000;
}

.latest-news-meta {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  color: #000;
}

.latest-news-dot {
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background: #000;
}

.testimonial-section {
  background: #f9d342;
}

.testimonial-inner {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  min-height: 848px;
  padding: 121px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #000;
}

.testimonial-slider {
  width: 100%;
  display: grid;
  min-height: 560px;
}

.testimonial-slide {
  grid-area: 1 / 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.testimonial-slide.active {
  opacity: 1;
  pointer-events: auto;
}

.testimonial-icon {
  width: 37px;
  height: 30px;
  margin-bottom: 44px;
}

.testimonial-icon svg {
  width: 100%;
  height: 100%;
}

.testimonial-inner blockquote {
  margin: 0 0 40px;
  max-width: 800px;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-size: 28px;
  line-height: 1.4;
  font-style: italic;
}

.testimonial-photo {
  width: 234px;
  height: 234px;
  margin-bottom: 22px;
}

.testimonial-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-name {
  max-width: 553px;
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 18px;
  line-height: 1.4;
}

.testimonial-nav {
  margin-top: 36px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.testimonial-arrow {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid #000;
  background: transparent;
  color: #000;
  font-size: 24px;
  line-height: 1;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.testimonial-arrow:hover {
  background: #000;
  color: #f9d342;
}

.testimonial-dots {
  display: flex;
  align-items: center;
  gap: 10px;
}

.testimonial-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid #000;
  background: transparent;
  cursor: pointer;
}

.testimonial-dot.active {
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

.social-rail {
  position: fixed;
  right: 37px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  gap: 17px;
  z-index: 20;
}

.social-rail a,
.social-rail img {
  width: 26px;
  height: 26px;
  display: block;
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

  .hero-content,
  .company-inner,
  .showreel-inner,
  .studio-strip,
  .clients-inner,
  .latest-news-inner,
  .testimonial-inner,
  .footer-inner {
    width: auto;
  }

  .hero-logo {
    position: static;
    width: min(420px, 85vw);
    height: auto;
    margin: 120px auto 60px;
  }

  .hero-section,
  .hero-content {
    min-height: 394px;
  }

  .company-copy,
  .company-image {
    position: static;
    width: 100%;
  }

  .company-inner {
    padding: 80px 0 60px;
    min-height: auto;
  }

  .company-image {
    max-width: 420px;
    margin: 40px auto 0;
    height: auto;
  }

  .showreel-inner h2 {
    margin: 30px 0 24px;
    font-size: 32px;
    text-align: left;
    width: auto;
    max-width: 100%;
  }

  .showreel-inner {
    min-height: 242px;
    padding-top: 0;
    padding-bottom: calc(24px + 5%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .showreel-video {
    height: auto;
    aspect-ratio: 979 / 551;
  }

  .studio-strip {
    display: block;
    grid-template-columns: 1fr;
    margin: 40px auto 0;
    width: auto;
    padding: 0 1.5rem;
  }

  .studio-image {
    width: 100%;
    max-width: 100%;
    transform: none;
  }

  .studio-image img {
    width: 100%;
    height: auto;
  }

  .studio-copy {
    position: static;
    width: 100%;
    margin: 24px 0 0;
    padding: 48px 32px;
    box-sizing: border-box;
    box-shadow: none;
    transform: none;
  }

  .clients-inner h2 {
    margin: 60px 0 32px;
  }

  .clients-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    justify-items: center;
  }

  .latest-news-grid {
    grid-template-columns: 1fr;
  }

  .latest-news-image {
    width: 100%;
    height: auto;
    aspect-ratio: 454 / 256;
  }

  .testimonial-inner {
    padding: 80px 0 50px;
    min-height: auto;
  }

  .testimonial-slider {
    min-height: 420px;
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

  .social-rail {
    position: static;
    transform: none;
    margin: 24px auto 0;
    justify-content: center;
    display: flex;
    gap: 20px;
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
