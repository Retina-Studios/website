<script setup lang="ts">
type SocialLink = {
  label: string
  href: string
  icon: string
}

type StudioSection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  image: string
  imageAlt: string
  imageSide: 'left' | 'right'
  theme: 'light' | 'dark'
  actionLabel?: string
  actionHref?: string
}

type IncludeCard = {
  title: string
  description: string
  icon: string
  iconAlt: string
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

const introParagraphs = [
  'Το Studio R1 είναι το νέο, υπερσύγχρονο στούντιο επαγγελματικής φωτογράφισης της Retina Studios, στρατηγικά τοποθετημένο στην καρδιά της Δράμας. Στόχος μας είναι να παρέχουμε σε κάθε φωτογράφο όλα όσα χρειάζεται για να πραγματοποιήσει την ιδανική στούντιο φωτογράφιση, χωρίς να απαιτείται η αγορά ακριβού εξοπλισμού ή η αναζήτηση του κατάλληλου χώρου.',
  'Στο Studio R1 θα βρείτε όλα τα απαραίτητα εργαλεία και εγκαταστάσεις για να δημιουργήσετε το αποτέλεσμα που επιθυμείτε. Επιπλέον, η ομάδα μας είναι πάντα έτοιμη να σας υποστηρίξει, είτε για την εγκατάσταση και το στήσιμο του εξοπλισμού είτε για τη σωστή χρήση των εργαλείων μας.',
  'Προσφέρουμε επίσης εκπαιδευτικά σεμινάρια για όσους επιθυμούν να εμβαθύνουν στη στουντιακή φωτογράφιση και να βελτιώσουν τις δεξιότητές τους. Είμαστε εδώ για να κάνουμε την εμπειρία σας στο Studio R1 όσο το δυνατόν πιο εύκολη και παραγωγική.',
]

const studioSections: StudioSection[] = [
  {
    id: 'cyclorama',
    title: 'Κυκλόραμα',
    image: '/images/studior1/overview-photo.jpg',
    imageAlt: 'Κυκλόραμα Studio R1',
    imageSide: 'left',
    theme: 'dark',
    paragraphs: [
      'Το κυκλόραμά μας είναι γωνιακό, με τρεις κυρτές γωνίες και διαστάσεις 4x4 μέτρα, ιδανικό για μεγάλες φωτογραφικές παραγωγές. Το λευκό, καθαρό φόντο του δημιουργεί έναν άψογο και αδιάκοπο χώρο για λήψεις, και ανανεώνεται τακτικά με συχνό καθαρισμό και βαφή κάθε μήνα.',
      'Κατασκευάζουμε επίσης ειδικά θεματικά σετ, ανάλογα με την εποχή ή τις ανάγκες της φωτογράφισης, όπως Χριστουγεννιάτικα, Αγίου Βαλεντίνου κ.ά. Αυτά τα θεματικά σετ περιλαμβάνονται στην ενοικίαση του στούντιο χωρίς επιπλέον κόστος.',
    ],
  },
  {
    id: 'recording',
    title: 'Δωμάτιο ηχογράφησης',
    image: '/images/studior1/cyclorama-photo.jpg',
    imageAlt: 'Δωμάτιο ηχογράφησης',
    imageSide: 'right',
    theme: 'light',
    paragraphs: [
      'Ο ηχομονωμένος χώρος μας είναι πλήρως εξοπλισμένος για κάθε ανάγκη ηχογράφησης και παραγωγής ήχου. Διαθέτει επαγγελματικό εξοπλισμό καταγραφής, φωτιστικά και κάμερες.',
      'Το podcast setup μας υποστηρίζει μέχρι και 4 άτομα, προσφέροντας 4 μικρόφωνα, 4 ζευγάρια ακουστικών, κονσόλα ήχου και καταγραφικό, για άριστη ποιότητα ήχου και εικόνας.',
    ],
    bullets: ['Voice overs', 'Podcasts', 'Vodcasts', 'Άλλες ηχητικές ή βίντεο παραγωγές'],
  },
  {
    id: 'tethering',
    title: 'Σταθμός Σύνδεσης Κάμερας με Υπολογιστή (Tethering)',
    image: '/images/studior1/recording-photo.jpg',
    imageAlt: 'Σταθμός Tethering',
    imageSide: 'left',
    theme: 'light',
    paragraphs: [
      'Ο Σταθμός σύνδεσης κάμερας με υπολογιστή μέσω Tethering προσφέρει άμεση προβολή και επεξεργασία των εικόνων σε πραγματικό χρόνο, διασφαλίζοντας υψηλότερη ποιότητα εικόνας από την αρχή της φωτογράφισης.',
      'Αυτή η υπηρεσία εξασφαλίζει άνεση και ακριβή έλεγχο κατά τη διάρκεια της φωτογράφισης, ενώ ταυτόχρονα βελτιώνει την αποδοτικότητα και την ποιότητα των αποτελεσμάτων.',
    ],
    bullets: [
      'Καλώδια σύνδεσης για κάμερες Canon, Sony, Nikon και άλλες',
      'Υπολογιστή με Capture One και Adobe Lightroom',
      'Άμεση προβολή φωτογραφιών χωρίς καθυστέρηση',
    ],
  },
  {
    id: 'equipment',
    title: 'Εξοπλισμός',
    image: '/images/studior1/equipment-photo.jpg',
    imageAlt: 'Εξοπλισμός Studio R1',
    imageSide: 'right',
    theme: 'dark',
    paragraphs: [
      'Στο Studio R1 προσφέρουμε μια πλήρη γκάμα εξοπλισμού για κάθε είδους φωτογράφιση: κάμερες, φακούς, φώτα, φόντα, τρίποδες, υφάσματα και πολλά άλλα.',
      'Μπορείτε να βρείτε τον πλήρη κατάλογο του εξοπλισμού μας εδώ:',
    ],
    actionLabel: 'Κατάλογος',
    actionHref: 'mailto:info@retinastudios.gr?subject=Κατάλογος%20Εξοπλισμού%20Studio%20R1',
  },
  {
    id: 'decor',
    title: 'Στοιχεία Ντεκόρ',
    image: '/images/studior1/decor-photo.jpg',
    imageAlt: 'Στοιχεία ντεκόρ',
    imageSide: 'left',
    theme: 'light',
    paragraphs: [
      'Στο Studio R1 προσφέρουμε ποικιλία από μοναδικά στοιχεία ντεκόρ που ενισχύουν τη δημιουργικότητα και προσδίδουν ιδιαίτερο χαρακτήρα στις φωτογραφίες σας.',
    ],
    bullets: [
      'Αλυσίδες οροφής για κούνιες, στεφάνια και ειδικές κατασκευές',
      'Μπανιέρα για milk baths',
      'Πισίνα για fashion photography',
      'Disco ball για ατμόσφαιρα και παιχνίδια φωτός',
    ],
  },
  {
    id: 'makeup',
    title: 'Σταθμός Μακιγιάζ & Δοκιμαστήριο',
    image: '/images/studior1/makeup-photo.jpg',
    imageAlt: 'Σταθμός μακιγιάζ',
    imageSide: 'right',
    theme: 'light',
    paragraphs: [
      'Για την ομαλή και άνετη παραγωγή φωτογραφιών, το Studio R1 προσφέρει πλήρως εξοπλισμένο σταθμό μακιγιάζ για δύο άτομα, καθώς και δοκιμαστήριο για εύκολες και γρήγορες αλλαγές.',
      'Είτε πρόκειται για φωτογράφιση καταλόγου ρούχων είτε για άλλες παραγωγές, ο χώρος μας εξασφαλίζει κάθε άνεση και ευκολία.',
    ],
  },
  {
    id: 'prints',
    title: 'Εκτυπώσεις & Σκανάρισμα Φιλμ',
    image: '/images/studior1/prints-photo.jpg',
    imageAlt: 'Εκτυπώσεις και σκανάρισμα φιλμ',
    imageSide: 'left',
    theme: 'dark',
    paragraphs: [
      'Το Studio R1 διαθέτει τον Canon Pro-100 εκτυπωτή για υψηλής ποιότητας εκτυπώσεις μέχρι και μέγεθος Α3, σε φωτογραφικό χαρτί.',
      'Για σκανάρισμα φιλμ, το Epson V600 είναι το εργαλείο μας για σάρωση 35mm και 120mm αρνητικού φιλμ με εξαιρετική ακρίβεια.',
    ],
  },
  {
    id: 'amenities',
    title: 'Επιπλέον Παροχές',
    image: '/images/studior1/amenities-photo.jpg',
    imageAlt: 'Επιπλέον παροχές στο studio',
    imageSide: 'right',
    theme: 'light',
    paragraphs: [
      'Για να εξασφαλίσουμε την άνετη και αποτελεσματική χρήση του χώρου μας, προσφέρουμε και τις παρακάτω επιπλέον υπηρεσίες και υποδομές:',
    ],
    bullets: [
      'Ελεύθερο WiFi και δυνατότητα live streaming',
      'Ολόσωμος καθρέφτης για fashion shoots και αυτοπορτρέτα',
      'Ηχεία Bluetooth',
      'Κλιματισμός όλο το χρόνο',
      'Ξεχωριστή είσοδος για εύκολη μεταφορά εξοπλισμού',
      'Ελεύθερο πάρκινγκ κοντά στο στούντιο',
      'Ζεστό και κρύο νερό',
      'Κινούμενο καρτ εργασίας και πάγκος εργασίας',
      'Εργαλεία για μικροεπισκευές και ρυθμίσεις',
      'Τουαλέτες ανδρών και γυναικών',
    ],
  },
]

const supportCards = [
  {
    title: 'Υποστήριξη & Βοήθεια',
    paragraphs: [
      'Χρειάζεστε βοήθεια στο στήσιμο, στη χρήση του εξοπλισμού ή έναν βοηθό φωτογράφου;',
      'Είμαστε εδώ για να σας υποστηρίξουμε σε κάθε βήμα της φωτογράφισης, ώστε όλα να κυλήσουν ομαλά και αποτελεσματικά.',
    ],
    bullets: [],
  },
  {
    title: 'Ασφάλεια & Προστασία',
    paragraphs: ['Για την ασφάλεια και την προστασία σας, στο χώρο διαθέτουμε:'],
    bullets: [
      'Κουτί πρώτων βοηθειών',
      'Πυροσβεστήρα',
      'Κάμερες κλειστού κυκλώματος',
    ],
  },
]

const includeCards: IncludeCard[] = [
  {
    title: 'Τον χώρο',
    description:
      'Πλατό 100 τ.μ. για παραγωγή φωτογραφίας και βίντεο, γωνιακό κυκλόραμα 4 x 4 μ., δωμάτιο ηχογράφησης, δοκιμαστήριο ρούχων και θάλαμος μακιγιάζ.',
    icon: '/images/studior1/include-space.jpg',
    iconAlt: 'Τον χώρο',
  },
  {
    title: 'Τον εξοπλισμό',
    description:
      'Μεγάλη γκάμα σε κάμερες (ψηφιακές, φιλμ, κινηματογραφικές), φώτα (φλας & βίντεο), φίλτρα και ό,τι χρειάζεται για επαγγελματική παραγωγή.',
    icon: '/images/studior1/include-gear.jpg',
    iconAlt: 'Τον εξοπλισμό',
  },
  {
    title: 'Τα σετ',
    description:
      'Εποχιακό σετ, διακοσμητικά στοιχεία, κρεμαστή κούνια, ποικιλία ρούχων και υφασμάτων.',
    icon: '/images/studior1/include-sets.jpg',
    iconAlt: 'Τα σετ',
  },
]

const galleryImages = Array.from({ length: 17 }, (_, index) => {
  const id = `${index + 1}`.padStart(2, '0')
  return {
    src: `/images/studior1/gallery/${id}.jpg`,
    alt: `Studio R1 gallery ${id}`,
  }
})

useHead({
  title: 'Το στούντιο | Retina Studios',
  meta: [
    {
      name: 'description',
      content:
        'Καλώς ήρθατε στο Studio R1, το ολοκαίνουργιο υπερσύγχρονο στούντιο επαγγελματικής φωτογράφισης της Retina Studios.',
    },
  ],
})


const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="wix-studior1-page">

    <main class="studio-main">
      <section class="hero-band" aria-label="Studio R1 Hero">
        <img
          src="/images/studior1/hero-bg.jpg"
          alt="Studio R1 hero"
          width="3000"
          height="1654"
          loading="eager"
          decoding="async"
        />
      </section>

      <section class="intro-section">
        <div class="intro-shell">
          <img
            class="intro-logo"
            src="/images/studior1/intro-logo.png"
            alt="Studio R1"
            width="313"
            height="158"
            loading="eager"
            decoding="async"
          />
          <h1>Φωτογράφισε το όραμά σου με επαγγελματισμό και ευκολία</h1>
          <p v-for="paragraph in introParagraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section
        v-for="section in studioSections"
        :key="section.id"
        :class="[
          'studio-section',
          `theme-${section.theme}`,
          `media-${section.imageSide}`,
          `section-${section.id}`,
        ]"
      >
        <div class="section-shell">
          <figure class="section-media">
            <img
              :src="section.image"
              :alt="section.imageAlt"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <article class="section-copy">
            <h2>{{ section.title }}</h2>

            <p v-for="paragraph in section.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>

            <ul v-if="section.bullets?.length" class="section-bullets">
              <li v-for="item in section.bullets" :key="item">
                {{ item }}
              </li>
            </ul>

            <a
              v-if="section.actionHref && section.actionLabel"
              class="catalog-button"
              :href="section.actionHref"
            >
              {{ section.actionLabel }}
            </a>
          </article>
        </div>
      </section>

      <section class="support-section">
        <div class="support-shell">
          <figure class="support-image">
            <img
              src="/images/studior1/support-photo.jpg"
              alt="Υποστήριξη Studio R1"
              width="1958"
              height="1304"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div class="support-grid">
            <article v-for="card in supportCards" :key="card.title" class="support-card">
              <h3>{{ card.title }}</h3>
              <p v-for="paragraph in card.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
              <ul v-if="card.bullets.length">
                <li v-for="item in card.bullets" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="includes-section">
        <div class="includes-shell">
          <h2>Η ενοικίαση περιλαμβάνει</h2>
          <div class="includes-grid">
            <article v-for="card in includeCards" :key="card.title" class="include-card">
              <img :src="card.icon" :alt="card.iconAlt" width="121" height="121" loading="lazy" decoding="async" />
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="gallery-section" aria-label="Studio R1 Gallery">
        <div class="gallery-shell">
          <div class="gallery-grid">
            <figure v-for="image in galleryImages" :key="image.src" class="gallery-item">
              <img :src="image.src" :alt="image.alt" width="1500" height="2000" loading="lazy" decoding="async" />
            </figure>
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
  background: rgb(249 211 66);
  color: #000;
}

.wix-studior1-page {
  min-height: 100vh;
  background: rgb(249 211 66);
  color: #000;
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

.hero-band {
  background: #000;
}

.hero-band img {
  width: min(1512px, 100%);
  min-height: 420px;
  max-height: 936px;
  height: min(62vw, 936px);
  margin: 0 auto;
  display: block;
  object-fit: cover;
}

.intro-section {
  padding: 4.5rem 0 4rem;
}

.intro-shell {
  width: min(980px, calc(100% - 2rem));
  margin: 0 auto;
  text-align: center;
}

.intro-logo {
  width: 313px;
  max-width: 70%;
  height: auto;
  display: block;
  margin: 0 auto 1.5rem;
}

.intro-shell h1 {
  margin: 0 auto 1.8rem;
  max-width: 820px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: clamp(1.6rem, 2.8vw, 2rem);
  font-weight: 700;
  line-height: 1.35;
}

.intro-shell p {
  margin: 0 auto 1rem;
  max-width: 544px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  line-height: 1.8;
}

.studio-section.theme-dark {
  background: #000;
}

.studio-section.theme-light {
  background: rgb(249 211 66);
}

.section-shell {
  width: min(980px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2.6rem;
  align-items: center;
}

.media-right .section-media {
  order: 2;
}

.media-right .section-copy {
  order: 1;
}

.section-media img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.section-copy h2 {
  margin: 0 0 1rem;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: clamp(2rem, 4vw, 40px);
  line-height: 1.2;
  font-weight: 700;
}

.section-copy p {
  margin: 0 0 1rem;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(1rem, 1.25vw, 18px);
  line-height: 1.8;
}

.section-bullets {
  margin: 0 0 1.1rem;
  padding-left: 1.2rem;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(1rem, 1.25vw, 18px);
  line-height: 1.8;
}

.section-bullets li + li {
  margin-top: 0.35rem;
}

.theme-dark .section-copy h2,
.theme-dark .section-copy p,
.theme-dark .section-bullets {
  color: rgb(242 242 242);
}

.catalog-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.7rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgb(249 211 66);
  text-decoration: none;
  color: #000;
  background: rgb(249 211 66);
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 16px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.catalog-button:hover {
  background: #fff;
}

.section-equipment .section-media img {
  aspect-ratio: 489 / 883;
}

.section-makeup .section-media img {
  aspect-ratio: 600 / 900;
}

.section-amenities .section-media img {
  aspect-ratio: 980 / 680;
}

.support-section {
  background: rgb(249 211 66);
  padding: 1rem 0 4rem;
}

.support-shell {
  width: min(980px, calc(100% - 2rem));
  margin: 0 auto;
}

.support-image {
  margin: 0 0 2.2rem;
}

.support-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
}

.support-card {
  background: rgb(242 242 242);
  border: 1px solid rgb(216 216 210);
  padding: 1.6rem 1.5rem;
}

.support-card h3 {
  margin: 0 0 0.9rem;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: clamp(1.5rem, 2.6vw, 32px);
  line-height: 1.2;
}

.support-card p,
.support-card li {
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(1rem, 1.2vw, 17px);
  line-height: 1.75;
}

.support-card p {
  margin: 0 0 0.8rem;
}

.support-card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.includes-section {
  padding: 2rem 0 4.6rem;
}

.includes-shell {
  width: min(980px, calc(100% - 2rem));
  margin: 0 auto;
}

.includes-shell h2 {
  margin: 0 0 2.4rem;
  text-align: center;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: clamp(2rem, 4vw, 40px);
  line-height: 1.2;
}

.includes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
}

.include-card {
  text-align: center;
}

.include-card img {
  width: 121px;
  height: 121px;
  border-radius: 999px;
  display: block;
  margin: 0 auto 1rem;
  object-fit: cover;
}

.include-card h3 {
  margin: 0 0 0.7rem;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 20px;
}

.include-card p {
  margin: 0 auto;
  max-width: 280px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
}

.gallery-section {
  background: #000;
  padding: 4.8rem 0;
}

.gallery-shell {
  width: min(980px, calc(100% - 2rem));
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-item {
  margin: 0;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 3 / 4;
  transition: transform 0.35s ease;
}

.gallery-item:hover img {
  transform: scale(1.035);
}

.site-footer-clone {
  background: #000;
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
  display: block;
}

.footer-columns {
  display: grid;
  grid-template-columns: 247px 257px 321px;
  gap: 67px;
}

.footer-columns h3 {
  margin: 0 0 10px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 26px;
  line-height: 1.2;
  color: #fff;
  font-weight: 700;
}

.footer-columns p,
.footer-columns a,
.hours-grid span {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #fff;
  text-decoration: none;
}

.hours-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 14px;
}

.footer-bottom {
  margin-top: 16px;
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  column-gap: 76px;
}

.social-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  gap: 18px;
}

.social-list a,
.social-list img {
  width: 30px;
  height: 30px;
  display: block;
}

.footer-bottom p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #fff;
}

@media (max-width: 1020px) {
  .header-container {
    width: auto;
    min-height: auto;
    padding: 1.2rem 0 1rem;
    position: static;
    max-width: calc(100% - 1.2rem);
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

  .section-shell {
    grid-template-columns: 1fr;
    gap: 1.35rem;
    padding: 2rem 0;
  }

  .media-right .section-media,
  .media-right .section-copy,
  .media-left .section-media,
  .media-left .section-copy {
    order: initial;
  }

  .support-grid,
  .includes-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-inner {
    width: auto;
    max-width: calc(100% - 2rem);
    padding-top: 2rem;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    justify-items: start;
    column-gap: 0;
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

@media (max-width: 680px) {
  .hero-band img {
    min-height: 300px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
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
