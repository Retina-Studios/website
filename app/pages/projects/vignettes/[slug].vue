<script setup lang="ts">
import { getSnapshot } from '~/utils/snapshotManifest'

type SocialLink = {
  label: string
  href: string
  icon: string
}

type TeamMember = {
  role: string
  name: string
  image: string
  link?: string
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

const introText =
  'Το πρώτο δημιουργικό πορτρέτο της σειράς Vignettes ήταν εμπνευσμένο από την πετυχημένη βρετανική τηλεοπτική σειρά Peaky Blinders. Η φωτογράφιση πραγματοποιήθηκε στον χώρο της Retina Studios και μεταδόθηκε ζωντανά μέσω YouTube live streaming, σαν δωρεάν φωτογραφικό σεμινάριο.'

const sweetIntroLead =
  'Για την δεύτερη φωτογράφιση της σειράς Vignettes εμπνευστήκαμε από τον υπέροχα διακοσμημένο χώρο του '
const sweetIntroTail =
  ', και ταξιδέψαμε πίσω στην δεκαετία του 1950 και τη ρετρό αισθητική των pin-up μοντέλων της εποχής. Μια φωτογράφιση απολαυστική σαν παγωτό!'
const sweetGalleryItems = [
  {
    src: '/images/projects/vignettes/sweet-pin-up/gallery-1.jpg',
    width: 230,
    height: 325,
    top: 0,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/sweet-pin-up/gallery-2.jpg',
    width: 460,
    height: 325,
    top: 0,
    left: 260,
  },
  {
    src: '/images/projects/vignettes/sweet-pin-up/gallery-3.jpg',
    width: 460,
    height: 325,
    top: 355,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/sweet-pin-up/gallery-4.jpg',
    width: 230,
    height: 325,
    top: 355,
    left: 490,
  },
  {
    src: '/images/projects/vignettes/sweet-pin-up/gallery-5.jpg',
    width: 230,
    height: 325,
    top: 710,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/sweet-pin-up/gallery-6.jpg',
    width: 460,
    height: 325,
    top: 710,
    left: 260,
  },
]

const sweetCredits = [
  {
    role: 'Μοντέλο',
    roleHref: 'https://www.instagram.com/tsipidou/',
    name: 'Έλενα Τσιπίδου',
    nameHref: 'https://www.instagram.com/tsipidou/',
  },
  {
    role: 'Βοηθός',
    name: 'Κωνσταντίνα Βάντση',
  },
  {
    role: 'Κοστούμια',
    name: 'Έλενα Τσιπίδου',
    nameHref: 'https://www.instagram.com/tsipidou/',
  },
  {
    role: 'Μακιγιάζ',
    name: 'Τζένη Θωμαΐδου',
    nameHref: 'https://www.instagram.com/jennythomaidou/',
  },
  {
    role: 'Κομμώτρια',
    name: 'Ισμήνη, Marron Coiffure',
    nameHref: 'https://www.instagram.com/marron.coiffure/',
  },
  {
    role: 'Νύχια',
    name: 'Kiko Nails',
    nameHref: 'https://www.instagram.com/kikonails_/',
  },
  {
    role: 'Παπούτσια',
    name: 'Negozio',
    nameHref: 'https://www.instagram.com/negozioshoes/',
  },
  {
    role: 'Ρούχα',
    name: 'Granazi',
    nameHref: 'https://www.instagram.com/granazistore/',
  },
]

const retroIntroText =
  'Τρίτο vignette, και εδώ επιστρατεύσαμε την δική μας Κωνσταντίνα, για περαιτέρω εξερεύνηση της ρετρό αισθητικής των δεκαετιών του 1950 και 1960. Σαν να δρόσισε!'
const retroGalleryItems = [
  {
    src: '/images/projects/vignettes/retro-retina/gallery-1.jpg',
    width: 212,
    height: 283,
    top: 0,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/retro-retina/gallery-2.jpg',
    width: 212,
    height: 283,
    top: 0,
    left: 242,
  },
  {
    src: '/images/projects/vignettes/retro-retina/gallery-3.jpg',
    width: 454,
    height: 340,
    top: 313,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/retro-retina/gallery-4.jpg',
    width: 236,
    height: 311,
    top: 0,
    left: 484,
  },
  {
    src: '/images/projects/vignettes/retro-retina/gallery-5.jpg',
    width: 236,
    height: 312,
    top: 341,
    left: 484,
  },
]
const retroCredits = [
  {
    role: 'Μοντέλο',
    roleHref: 'https://www.instagram.com/tsipidou/',
    name: 'Κωνσταντίνα Βάντση',
  },
  {
    role: 'Ρούχα',
    name: 'Dreams',
    nameHref: 'https://www.instagram.com/dreamsunderweardrama/',
  },
  {
    role: 'Μακιγιάζ',
    name: 'Βασιλεία Καναρά',
    nameHref: 'https://www.instagram.com/vasileiakanara/',
  },
  {
    role: 'Νύχια',
    name: 'Somfis',
    nameHref: 'https://www.instagram.com/somfis_professional/',
  },
]

const cowgirlIntroLead = 'Και τώρα κάτι διαφορετικό — ένα vignette στην άγρια δύση της Δράμας, στο '
const cowgirlIntroTail = ', με ατμόσφαιρα περιπέτειας και western αισθητική. Cowgirl power!'
const cowgirlGalleryItems = [
  {
    src: '/images/projects/vignettes/cowgirl/gallery-1.jpg',
    width: 228,
    height: 320,
    top: 0,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/cowgirl/gallery-2.jpg',
    width: 204,
    height: 320,
    top: 0,
    left: 258,
  },
  {
    src: '/images/projects/vignettes/cowgirl/gallery-3.jpg',
    width: 228,
    height: 320,
    top: 0,
    left: 492,
  },
  {
    src: '/images/projects/vignettes/cowgirl/gallery-4.jpg',
    width: 344,
    height: 484,
    top: 349.7022,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/cowgirl/gallery-5.jpg',
    width: 346,
    height: 484,
    top: 349.7022,
    left: 374,
  },
  {
    src: '/images/projects/vignettes/cowgirl/gallery-6.jpg',
    width: 357,
    height: 500,
    top: 863.4633,
    left: 0,
  },
  {
    src: '/images/projects/vignettes/cowgirl/gallery-7.jpg',
    width: 333,
    height: 500,
    top: 863.4633,
    left: 387,
  },
]
const cowgirlCredits = [
  {
    role: 'Μοντέλο',
    roleHref: 'https://www.instagram.com/tsipidou/',
    name: 'Εύη Χαραλαμπίδου',
    nameHref: 'https://www.instagram.com/evi.charalampidou/',
  },
  {
    role: 'Τοποθεσία',
    name: 'Ranjo Costa',
    nameHref: 'https://www.instagram.com/ranjo_costa/',
  },
  {
    role: 'Ρούχα & Αξεσουάρ',
    name: 'Nastag Fashion Store',
    nameHref: 'https://www.instagram.com/nastag.fashion/',
  },
  {
    role: 'Μαλλιά',
    name: 'Ιπποκράτης Δαμιανίδης',
    nameHref: 'https://www.instagram.com/nastag.fashion/',
  },
  {
    role: 'Υποδήματα',
    name: 'Negozio Shoes',
    nameHref: 'https://www.instagram.com/negozioshoes/',
  },
]

const teamMembers: TeamMember[] = [
  {
    role: 'Μοντέλο',
    name: 'Θοδωρής Δ.',
    image: '/images/projects/vignettes/peakyblinders/team-1.jpg',
  },
  {
    role: 'Μοντέλο',
    name: 'Αναστασία Μ.',
    image: '/images/projects/vignettes/peakyblinders/team-anastasia.jpg',
  },
  {
    role: 'Φωτογράφος',
    name: 'Παναγιώτης Πεκίδης',
    image: '/images/projects/vignettes/peakyblinders/team-2.jpg',
    link: 'https://www.instagram.com/pek.retinastudios/',
  },
  {
    role: 'Γκαρνταρόμπα',
    name: 'Ατελιέννα',
    image: '/images/projects/vignettes/peakyblinders/team-3.jpg',
    link: 'https://www.instagram.com/atelie_anna__/',
  },
  {
    role: 'Υφάσματα',
    name: 'Kesidis Textiles',
    image: '/images/projects/vignettes/peakyblinders/team-4.png',
    link: 'https://www.yfasmatakesidis.gr/',
  },
  {
    role: 'Makeup',
    name: 'Βασιλεία Κανάρα',
    image: '/images/projects/vignettes/peakyblinders/team-5.jpg',
    link: 'https://www.instagram.com/vasileiakanara/',
  },
  {
    role: 'Hair stylist',
    name: 'Κική Κάργα',
    image: '/images/projects/vignettes/peakyblinders/team-6.jpg',
    link: 'https://www.instagram.com/k_i_k_i_k_a_r_g_a/',
  },
  {
    role: 'Accessories',
    name: 'Rika Artifact',
    image: '/images/projects/vignettes/peakyblinders/team-7.jpg',
    link: 'https://www.instagram.com/rikartifact/',
  },
  {
    role: 'Μουσική',
    name: 'John Mast',
    image: '/images/projects/vignettes/peakyblinders/team-8.jpg',
    link: 'https://www.instagram.com/getting_tothepoint',
  },
  {
    role: 'Βοηθός',
    name: 'Κωνσταντίνα Β.',
    image: '/images/projects/vignettes/peakyblinders/team-1.jpg',
    link: 'https://www.instagram.com/konstantina_vantsi/',
  },
]


const slug = computed(() => {
  const value = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
  if (!value) {
    return ''
  }

  const asString = String(value)

  try {
    return decodeURIComponent(asString)
  } catch {
    return asString
  }
})

const isPeaky = computed(() => slug.value === 'peakyblinders')
const isSweet = computed(() => slug.value === 'sweet-pin-up')
const isRetro = computed(() => slug.value === 'retro-retina')
const isCowgirl = computed(() => slug.value === 'cowgirl')
const path = computed(() => `/projects/vignettes/${slug.value}`)
const snapshot = computed(() => getSnapshot(path.value))

useHead(() => ({
  title: isPeaky.value
    ? 'Peaky Blinders | Retina Studios'
    : isSweet.value
      ? 'Sweet Pin-Up | Retina Studios'
      : isRetro.value
        ? 'Retro Retina | Retina Studios'
        : isCowgirl.value
          ? 'Cowgirl | Retina Studios'
    : snapshot.value?.title ?? 'Vignette Project | Retina Studios',
}))
</script>

<template>
  <div
    v-if="isPeaky || isSweet || isRetro || isCowgirl"
    class="wix-peaky-page"
    :class="{ 'is-sweet': isSweet }"
  >

    <main v-if="isPeaky" class="peaky-main">
      <section class="hero-section" aria-label="Peaky Blinders hero">
        <div class="hero-shell">
          <img
            src="/images/projects/vignettes/peakyblinders/hero-logo.png"
            alt="Peaky Blinders logo"
            width="600"
            height="511"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section class="story-section">
        <div class="story-shell">
          <p>{{ introText }}</p>

          <div class="story-gallery">
            <img
              src="/images/projects/vignettes/peakyblinders/gallery-1.jpg"
              alt=""
              width="278"
              height="373"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/images/projects/vignettes/peakyblinders/gallery-2.jpg"
              alt=""
              width="280"
              height="373"
              loading="lazy"
              decoding="async"
            />
            <img
              class="story-gallery-wide"
              src="/images/projects/vignettes/peakyblinders/gallery-3.jpg"
              alt=""
              width="568"
              height="757"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-shell">
          <div class="cta-copy">
            <a
              href="https://app.milanote.com/1TsyaI1PHUDP4O?p=D8t5JdobRoi"
              target="_blank"
              rel="noreferrer noopener"
              class="cta-button"
            >
              <span>Moodboard</span>
              <span aria-hidden="true">➜</span>
            </a>

            <a
              href="https://youtube.com/live/-lYa0Ib5A_4"
              target="_blank"
              rel="noreferrer noopener"
              class="cta-button"
            >
              <span>Live Stream</span>
              <span aria-hidden="true">➜</span>
            </a>
          </div>

          <div class="cta-image-wrap">
            <img
              src="/images/projects/vignettes/peakyblinders/cta-image.png"
              alt=""
              width="490"
              height="668"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="team-section">
        <div class="team-shell">
          <h2>Η ομάδα</h2>

          <div class="team-grid">
            <article v-for="member in teamMembers" :key="`${member.role}-${member.name}`" class="team-card">
              <img
                :src="member.image"
                :alt="member.name"
                width="260"
                height="240"
                loading="lazy"
                decoding="async"
              />

              <div class="team-meta">
                <p class="team-role">{{ member.role }}</p>
                <p class="team-name">{{ member.name }}</p>

                <a
                  v-if="member.link"
                  :href="member.link"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="team-link"
                  :aria-label="member.name"
                >
                  ↗
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bottom-project-nav">
        <div class="bottom-shell">
          <NuxtLink to="/projects/vignettes/cowgirl" class="bottom-arrow left" aria-label="Προηγούμενο project">
            ❯
          </NuxtLink>

          <img
            src="/images/projects/vignettes/peakyblinders/bottom-logo.png"
            alt="Aesthetic"
            width="410"
            height="109"
            loading="lazy"
            decoding="async"
          />

          <NuxtLink to="/projects/vignettes/sweet-pin-up" class="bottom-arrow right" aria-label="Επόμενο project">
            ❯
          </NuxtLink>
        </div>
      </section>
    </main>

    <main v-else-if="isSweet" class="sweet-main">
      <section class="sweet-hero-section" aria-label="Sweet Pin-Up hero">
        <div class="sweet-hero-shell">
          <h1 class="sweet-hero-title">SWEET PIN-UP</h1>
        </div>
      </section>

      <section class="sweet-story-section">
        <div class="sweet-story-shell">
          <p class="sweet-intro">
            {{ sweetIntroLead }}
            <a
              href="https://www.instagram.com/ntinos_patisserie/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ζαχαροπλαστείου Ντίνος
            </a>{{ sweetIntroTail }}
          </p>

          <div class="sweet-gallery">
            <div
              v-for="item in sweetGalleryItems"
              :key="item.src"
              class="sweet-gallery-item"
              :style="{
                '--x': `${item.left}px`,
                '--y': `${item.top}px`,
                '--w': `${item.width}px`,
                '--h': `${item.height}px`,
              }"
            >
              <img
                :src="item.src"
                alt=""
                :width="item.width"
                :height="item.height"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="sweet-cta-section">
        <div class="sweet-cta-shell">
          <div class="sweet-cta-copy">
            <a
              href="https://app.milanote.com/1U0gEN1SdT1dau/sock-hop?p=WSDQgAdPrIj"
              target="_blank"
              rel="noreferrer noopener"
              class="cta-button"
            >
              <span>Δείτε το Moodboard</span>
              <span aria-hidden="true">➜</span>
            </a>
          </div>

          <div class="sweet-cta-image">
            <img
              src="/images/projects/vignettes/sweet-pin-up/cta-image.png"
              alt=""
              width="490"
              height="668"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="sweet-credits-section">
        <div class="sweet-credits-shell">
          <div class="sweet-credits-text">
            <div v-for="credit in sweetCredits" :key="`${credit.role}-${credit.name}`" class="sweet-credits-item">
              <p class="sweet-credits-label">
                <a v-if="credit.roleHref" :href="credit.roleHref" target="_blank" rel="noreferrer noopener">
                  {{ credit.role }}
                </a>
                <span v-else>{{ credit.role }}</span>
              </p>
              <p class="sweet-credits-link">
                <a v-if="credit.nameHref" :href="credit.nameHref" target="_blank" rel="noreferrer noopener">
                  {{ credit.name }}
                </a>
                <span v-else>{{ credit.name }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-project-nav">
        <div class="bottom-shell">
          <NuxtLink to="/projects/vignettes/peakyblinders" class="bottom-arrow left" aria-label="Προηγούμενο project">
            ❯
          </NuxtLink>

          <img
            src="/images/projects/vignettes/peakyblinders/bottom-logo.png"
            alt="Aesthetic"
            width="410"
            height="109"
            loading="lazy"
            decoding="async"
          />

          <NuxtLink to="/projects/vignettes/retro-retina" class="bottom-arrow right" aria-label="Επόμενο project">
            ❯
          </NuxtLink>
        </div>
      </section>
    </main>

    <main v-else-if="isCowgirl" class="cowgirl-main">
      <section class="cowgirl-hero-section" aria-label="Cowgirl hero">
        <div class="cowgirl-hero-shell">
          <h1 class="cowgirl-hero-title">cowgirl</h1>
        </div>
      </section>

      <section class="cowgirl-story-section">
        <div class="cowgirl-story-shell">
          <p class="cowgirl-intro">
            {{ cowgirlIntroLead }}
            <a href="https://www.instagram.com/ranjo_costa/" target="_blank" rel="noreferrer noopener">
              Ranjo Costa
            </a>{{ cowgirlIntroTail }}
          </p>

          <div class="cowgirl-gallery">
            <div
              v-for="item in cowgirlGalleryItems"
              :key="item.src"
              class="cowgirl-gallery-item"
              :style="{
                '--x': `${item.left}px`,
                '--y': `${item.top}px`,
                '--w': `${item.width}px`,
                '--h': `${item.height}px`,
              }"
            >
              <img
                :src="item.src"
                alt=""
                :width="item.width"
                :height="item.height"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="cowgirl-credits-section">
        <div class="cowgirl-credits-shell">
          <div class="cowgirl-credits-text">
            <div v-for="credit in cowgirlCredits" :key="`${credit.role}-${credit.name}`" class="cowgirl-credits-item">
              <p class="cowgirl-credits-label">
                <a v-if="credit.roleHref" :href="credit.roleHref" target="_blank" rel="noreferrer noopener">
                  {{ credit.role }}
                </a>
                <span v-else>{{ credit.role }}</span>
              </p>
              <p class="cowgirl-credits-link">
                <a v-if="credit.nameHref" :href="credit.nameHref" target="_blank" rel="noreferrer noopener">
                  {{ credit.name }}
                </a>
                <span v-else>{{ credit.name }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-project-nav">
        <div class="bottom-shell">
          <NuxtLink to="/projects/vignettes/retro-retina" class="bottom-arrow left" aria-label="Προηγούμενο project">
            ❯
          </NuxtLink>

          <img
            src="/images/projects/vignettes/peakyblinders/bottom-logo.png"
            alt="Aesthetic"
            width="410"
            height="109"
            loading="lazy"
            decoding="async"
          />

          <NuxtLink to="/projects/vignettes/peakyblinders" class="bottom-arrow right" aria-label="Επόμενο project">
            ❯
          </NuxtLink>
        </div>
      </section>
    </main>

    <main v-else class="retro-main">
      <section class="retro-hero-section" aria-label="Retro Retina hero">
        <div class="retro-hero-shell">
          <h1 class="retro-hero-title">
            Retro
            <br />
            Retina
          </h1>
        </div>
      </section>

      <section class="retro-story-section">
        <div class="retro-story-shell">
          <p class="retro-intro">{{ retroIntroText }}</p>

          <div class="retro-gallery">
            <div
              v-for="item in retroGalleryItems"
              :key="item.src"
              class="retro-gallery-item"
              :style="{
                '--x': `${item.left}px`,
                '--y': `${item.top}px`,
                '--w': `${item.width}px`,
                '--h': `${item.height}px`,
              }"
            >
              <img
                :src="item.src"
                alt=""
                :width="item.width"
                :height="item.height"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="retro-credits-section">
        <div class="retro-credits-shell">
          <div class="retro-credits-text">
            <div v-for="credit in retroCredits" :key="`${credit.role}-${credit.name}`" class="retro-credits-item">
              <p class="retro-credits-label">
                <a v-if="credit.roleHref" :href="credit.roleHref" target="_blank" rel="noreferrer noopener">
                  {{ credit.role }}
                </a>
                <span v-else>{{ credit.role }}</span>
              </p>
              <p class="retro-credits-link">
                <a v-if="credit.nameHref" :href="credit.nameHref" target="_blank" rel="noreferrer noopener">
                  {{ credit.name }}
                </a>
                <span v-else>{{ credit.name }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom-project-nav">
        <div class="bottom-shell">
          <NuxtLink to="/projects/vignettes/sweet-pin-up" class="bottom-arrow left" aria-label="Προηγούμενο project">
            ❯
          </NuxtLink>

          <img
            src="/images/projects/vignettes/peakyblinders/bottom-logo.png"
            alt="Aesthetic"
            width="410"
            height="109"
            loading="lazy"
            decoding="async"
          />

          <NuxtLink to="/projects/vignettes/cowgirl" class="bottom-arrow right" aria-label="Επόμενο project">
            ❯
          </NuxtLink>
        </div>
      </section>
    </main>

    
  </div>

  <template v-else>
    <section>
      <h1>Vignette Detail Migration</h1>
      <p>Nested standard-content detail route for vignettes. Snapshot mapping is driven by slug.</p>
    </section>

    <SnapshotViewer
      v-if="snapshot"
      :title="`Reference snapshot: ${snapshot.title}`"
      :snapshot-path="snapshot.snapshotPath"
    />

    <section v-else class="missing">
      <p>No local snapshot mapped for <code>{{ path }}</code>.</p>
    </section>
  </template>
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

.wix-peaky-page {
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.peaky-main > section,
.sweet-main > section,
.retro-main > section,
.cowgirl-main > section {
  padding: 80px 0;
  box-sizing: border-box;
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
  min-width: 980px;
  background: #000 url('/images/projects/vignettes/peakyblinders/hero-bg.jpg') center / cover no-repeat;
}

.hero-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 611px;
  position: relative;
}

.hero-shell img {
  position: absolute;
  left: 190px;
  top: 50px;
  width: 600px;
  height: 511px;
  object-fit: cover;
}

.story-section {
  min-width: 980px;
  background: #000;
  color: #fff;
}

.story-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 1543px;
}

.story-shell p {
  width: 568px;
  margin: 0 0 10px 206px;
  padding-top: 65px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 18px;
  line-height: 1.8;
}

.story-gallery {
  width: 568px;
  margin: 303px 0 10px 206px;
  display: grid;
  grid-template-columns: 278px 280px;
  gap: 10px;
}

.story-gallery img {
  display: block;
  width: 100%;
  height: 373px;
  object-fit: cover;
}

.story-gallery-wide {
  grid-column: 1 / -1;
  height: 757px !important;
}

.cta-section {
  min-width: 980px;
  background: #fff;
}

.cta-shell {
  width: 980px;
  margin: 70px auto 10px;
  min-height: 668px;
  display: grid;
  grid-template-columns: 490px 490px;
}

.cta-copy {
  width: 490px;
  min-height: 668px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 282px 0 0 93px;
  box-sizing: border-box;
}

.cta-button {
  width: 303px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #2e2e2e;
  background: #2e2e2e;
  color: #fff;
  text-decoration: none;
  padding: 0 20px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 20px;
  line-height: 1;
}

.cta-button:hover {
  background: #fff;
  color: #2e2e2e;
}

.cta-image-wrap {
  width: 490px;
  min-height: 668px;
}

.cta-image-wrap img {
  display: block;
  width: 490px;
  height: 668px;
  object-fit: cover;
}

.sweet-hero-section {
  min-width: 980px;
  background: #000 url('/images/projects/vignettes/sweet-pin-up/hero-bg.jpg') center / cover no-repeat;
}

.sweet-hero-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 631px;
  position: relative;
}

.sweet-hero-title {
  position: absolute;
  left: 99px;
  top: 266px;
  width: 781px;
  margin: 0;
  text-align: center;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: 111px;
  line-height: 0.8;
  font-weight: 400;
  color: #fcd1f8;
  text-shadow: rgba(10, 189, 240, 0.3) 3px 3px 0, rgba(254, 1, 1, 0.3) -3px -3px 0;
}

.sweet-story-section {
  min-width: 980px;
  background: rgb(252 209 248);
  color: #000;
}

.sweet-story-shell {
  width: 980px;
  margin: 0 auto;
}

.sweet-intro {
  width: 568px;
  margin: 78px 0 10px 206px;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: 20px;
  line-height: 1.8;
}

.sweet-intro a {
  color: inherit;
  text-decoration: underline;
}

.sweet-gallery {
  width: 720px;
  height: 1035px;
  margin: 0 0 64px 97px;
  position: relative;
}

.sweet-gallery-item {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
}

.sweet-gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sweet-cta-section {
  min-width: 980px;
  background: #fff;
}

.sweet-cta-shell {
  width: 980px;
  margin: 70px auto 10px;
  min-height: 830px;
  display: grid;
  grid-template-columns: 490px 490px;
}

.sweet-cta-copy {
  width: 490px;
  min-height: 668px;
  padding: 308px 0 0 119px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
}

.sweet-cta-copy .cta-button {
  width: 251px;
}

.sweet-cta-image {
  width: 490px;
  min-height: 668px;
}

.sweet-cta-image img {
  display: block;
  width: 490px;
  height: 668px;
  object-fit: cover;
}

.sweet-credits-section {
  min-width: 980px;
  background: #0b2f5b url('/images/projects/vignettes/sweet-pin-up/credits-bg.jpg') center / cover no-repeat;
  color: #0b2f5b;
}

.sweet-credits-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 683px;
}

.sweet-credits-text {
  width: 395px;
  margin: 54px 0 54px 292px;
  text-align: center;
}

.sweet-credits-item {
  margin-bottom: 12px;
}

.sweet-credits-item:last-child {
  margin-bottom: 0;
}

.sweet-credits-label,
.sweet-credits-link {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  line-height: 1.1;
}

.sweet-credits-label {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 900;
}

.sweet-credits-label a {
  color: #0b2f5b;
  text-decoration: none;
}

.sweet-credits-label span {
  color: #0b2f5b;
}

.sweet-credits-link {
  margin: 0;
  font-size: 20px;
  font-weight: 400;
}

.sweet-credits-link a {
  color: #0b2f5b;
  text-decoration: underline;
}

.sweet-credits-link span {
  color: #0b2f5b;
}

.retro-hero-section {
  min-width: 980px;
  background: #000 url('/images/projects/vignettes/retro-retina/hero-bg.jpg') center / cover no-repeat;
}

.retro-hero-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 631px;
  position: relative;
}

.retro-hero-title {
  position: absolute;
  left: 99px;
  top: 91px;
  width: 781px;
  margin: 0;
  text-align: center;
  font-family: 'Coca Cola II', 'Brush Script MT', 'Segoe Script', 'Playfair Display', serif;
  font-size: 250px;
  line-height: 0.5;
  font-weight: 400;
  color: #fff;
  text-shadow: rgba(10, 189, 240, 0.3) 3px 3px 0, rgba(254, 1, 1, 0.3) -3px -3px 0;
  transform: rotate(345.777deg);
  transform-origin: left top;
}

.retro-story-section {
  min-width: 980px;
  background: #f9d342;
  color: #000;
}

.retro-story-shell {
  width: 980px;
  margin: 0 auto;
}

.retro-intro {
  width: 568px;
  margin: 78px 0 10px 206px;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: 20px;
  line-height: 1.8;
}

.retro-gallery {
  width: 720px;
  height: 653px;
  margin: 0 0 10px 130px;
  position: relative;
}

.retro-gallery-item {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
}

.retro-gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.retro-credits-section {
  min-width: 980px;
  background: #0b2f5b url('/images/projects/vignettes/retro-retina/credits-bg.jpg') center / cover no-repeat;
  color: #fff;
}

.retro-credits-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 383px;
}

.retro-credits-text {
  width: 395px;
  margin: 54px 0 54px 292px;
  text-align: center;
}

.retro-credits-item {
  margin-bottom: 12px;
}

.retro-credits-item:last-child {
  margin-bottom: 0;
}

.retro-credits-label,
.retro-credits-link {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  line-height: 1.1;
  text-shadow: rgba(0, 0, 0, 0.4) 0 4px 5px;
}

.retro-credits-label {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 900;
}

.retro-credits-label a,
.retro-credits-label span {
  color: #fff;
  text-decoration: none;
}

.retro-credits-link {
  margin: 0;
  font-size: 20px;
  font-weight: 400;
}

.retro-credits-link a,
.retro-credits-link span {
  color: #fff;
  text-decoration: underline;
}

.cowgirl-hero-section {
  min-width: 980px;
  background: #000 url('/images/projects/vignettes/cowgirl/hero-bg.jpg') center / cover no-repeat;
}

.cowgirl-hero-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 631px;
  position: relative;
}

.cowgirl-hero-title {
  position: absolute;
  left: 99px;
  top: 269px;
  width: 781px;
  margin: 0;
  text-align: center;
  font-family: 'Americana Vintage', 'Playfair Display', 'Times New Roman', serif;
  font-size: 111px;
  line-height: 0.8;
  font-weight: 400;
  color: #fff;
  text-transform: lowercase;
}

.cowgirl-story-section {
  min-width: 980px;
  background: #f2f2f2;
  color: #000;
}

.cowgirl-story-shell {
  width: 980px;
  margin: 0 auto;
}

.cowgirl-intro {
  width: 568px;
  margin: 121px 0 10px 206px;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: 20px;
  line-height: 1.8;
}

.cowgirl-intro a {
  color: inherit;
  text-decoration: underline;
}

.cowgirl-gallery {
  width: 720px;
  height: 1363px;
  margin: 0 0 65px 97px;
  position: relative;
}

.cowgirl-gallery-item {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
}

.cowgirl-gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cowgirl-credits-section {
  min-width: 980px;
  background: #0b2f5b url('/images/projects/vignettes/cowgirl/credits-bg.jpg') center / cover no-repeat;
  color: #fff;
}

.cowgirl-credits-shell {
  width: 980px;
  margin: 0 auto;
  min-height: 457px;
}

.cowgirl-credits-text {
  width: 395px;
  margin: 54px 0 54px 292px;
  text-align: center;
}

.cowgirl-credits-item {
  margin-bottom: 12px;
}

.cowgirl-credits-item:last-child {
  margin-bottom: 0;
}

.cowgirl-credits-label,
.cowgirl-credits-link {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  line-height: 1.1;
}

.cowgirl-credits-label {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 900;
}

.cowgirl-credits-label a,
.cowgirl-credits-label span {
  color: #fff;
  text-decoration: none;
}

.cowgirl-credits-link {
  margin: 0;
  font-size: 20px;
  font-weight: 400;
}

.cowgirl-credits-link a,
.cowgirl-credits-link span {
  color: #fff;
  text-decoration: underline;
}

.team-section {
  min-width: 980px;
  background: #fff;
}

.team-shell {
  width: min(1320px, calc(100% - 2rem));
  margin: 0 auto;
  padding-top: 84px;
  padding-bottom: 43px;
}

.team-shell h2 {
  margin: 0 0 38px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 50px;
  line-height: 1;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.team-card {
  width: 100%;
  min-height: 244px;
  display: grid;
  grid-template-columns: 260px 1fr;
  background: rgb(0 0 0 / 80%);
  color: #fff;
}

.team-card img {
  display: block;
  width: 260px;
  height: 240px;
  margin-top: 2px;
  object-fit: cover;
}

.team-meta {
  padding: 19px 12px 10px;
  display: flex;
  flex-direction: column;
}

.team-role {
  margin: 0 0 9px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 16px;
  line-height: 1.2;
}

.team-name {
  margin: 0 0 9px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 20px;
  line-height: 1.2;
}

.team-link {
  width: 23px;
  height: 23px;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
}

.bottom-project-nav {
  min-width: 980px;
  background: #000 url('/images/projects/vignettes/bottom-bg.jpg') center / cover no-repeat;
}

.bottom-shell {
  width: 980px;
  min-height: 296px;
  margin: 0 auto;
  position: relative;
}

.bottom-shell img {
  position: absolute;
  left: 285px;
  top: 93px;
  width: 410px;
  height: 109px;
  object-fit: cover;
}

.bottom-arrow {
  width: 33px;
  height: 100px;
  position: absolute;
  top: 131px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ab1c52;
  text-decoration: none;
  font-size: 56px;
  line-height: 1;
}

.bottom-arrow.left {
  left: 126px;
  transform: rotate(180deg);
}

.bottom-arrow.right {
  left: 821px;
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

@media (max-width: 1280px) {
  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

h1 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

p {
  max-width: 70ch;
  line-height: 1.5;
}

.missing {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid #d7d7ce;
  border-radius: 0.5rem;
  background: #fff;
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
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
  .story-section,
  .cta-section,
  .sweet-hero-section,
  .sweet-story-section,
  .sweet-cta-section,
  .sweet-credits-section,
  .retro-hero-section,
  .retro-story-section,
  .retro-credits-section,
  .cowgirl-hero-section,
  .cowgirl-story-section,
  .cowgirl-credits-section,
  .team-section,
  .bottom-project-nav {
    min-width: 0;
  }

  .hero-shell,
  .story-shell,
  .cta-shell,
  .sweet-hero-shell,
  .sweet-story-shell,
  .sweet-cta-shell,
  .sweet-credits-shell,
  .retro-hero-shell,
  .retro-story-shell,
  .retro-credits-shell,
  .cowgirl-hero-shell,
  .cowgirl-story-shell,
  .cowgirl-credits-shell,
  .team-shell,
  .bottom-shell,
  .footer-inner {
    width: auto;
    max-width: calc(100% - 2rem);
  }

  .hero-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .hero-shell img {
    position: static;
    width: 100%;
    height: auto;
    max-width: 600px;
    margin: 0 auto;
  }

  .story-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .story-shell p,
  .story-gallery {
    margin-left: 0;
    width: 100%;
  }

  .story-gallery {
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }

  .story-gallery img,
  .story-gallery-wide {
    height: auto !important;
    aspect-ratio: 568 / 373;
  }

  .cta-shell {
    margin: 2rem auto;
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .cta-copy,
  .cta-image-wrap,
  .cta-image-wrap img {
    width: 100%;
    min-height: 0;
  }

  .cta-copy {
    padding: 2rem 0;
    align-items: center;
  }

  .cta-button {
    width: min(303px, 100%);
  }

  .sweet-hero-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .sweet-hero-title {
    position: static;
    width: auto;
    margin: 0 auto;
    font-size: clamp(2.5rem, 10vw, 5rem);
    line-height: 0.9;
  }

  .sweet-story-shell {
    padding: 2rem 0;
  }

  .sweet-intro {
    width: 100%;
    margin: 0 0 1.5rem;
  }

  .sweet-gallery {
    width: 100%;
    height: auto;
    margin: 0 0 2rem;
    position: static;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .sweet-gallery-item {
    position: static;
    width: 100% !important;
    height: auto !important;
  }

  .sweet-gallery-item img {
    width: 100%;
    height: auto;
  }

  .sweet-cta-shell {
    margin: 2rem auto;
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .sweet-cta-copy,
  .sweet-cta-image,
  .sweet-cta-image img {
    width: 100%;
    min-height: 0;
    height: auto;
  }

  .sweet-cta-copy {
    padding: 2rem 0;
    justify-content: center;
  }

  .sweet-cta-copy .cta-button {
    width: min(251px, 100%);
  }

  .sweet-credits-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .sweet-credits-text {
    width: 100%;
    margin: 0 auto;
  }

  .retro-hero-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .retro-hero-title {
    position: static;
    width: auto;
    margin: 0 auto;
    transform: none;
    font-size: clamp(3rem, 12vw, 6rem);
    line-height: 0.9;
  }

  .retro-story-shell {
    padding: 2rem 0;
  }

  .retro-intro {
    width: 100%;
    margin: 0 0 1.5rem;
  }

  .retro-gallery {
    width: 100%;
    height: auto;
    margin: 0 0 2rem;
    position: static;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .retro-gallery-item {
    position: static;
    width: 100% !important;
    height: auto !important;
  }

  .retro-gallery-item img {
    width: 100%;
    height: auto;
  }

  .retro-credits-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .retro-credits-text {
    width: 100%;
    margin: 0 auto;
  }

  .cowgirl-hero-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .cowgirl-hero-title {
    position: static;
    width: auto;
    margin: 0 auto;
    font-size: clamp(2.5rem, 10vw, 5rem);
    line-height: 0.9;
  }

  .cowgirl-story-shell {
    padding: 2rem 0;
  }

  .cowgirl-intro {
    width: 100%;
    margin: 0 0 1.5rem;
  }

  .cowgirl-gallery {
    width: 100%;
    height: auto;
    margin: 0 0 2rem;
    position: static;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .cowgirl-gallery-item {
    position: static;
    width: 100% !important;
    height: auto !important;
  }

  .cowgirl-gallery-item img {
    width: 100%;
    height: auto;
  }

  .cowgirl-credits-shell {
    min-height: 0;
    padding: 2rem 0;
  }

  .cowgirl-credits-text {
    width: 100%;
    margin: 0 auto;
  }

  .team-shell {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .team-shell h2 {
    font-size: clamp(2rem, 9vw, 3.125rem);
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-card {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .team-card img {
    width: 100%;
    height: auto;
    margin-top: 0;
    aspect-ratio: 260 / 240;
  }

  .bottom-shell {
    min-height: 0;
    padding: 2rem 0 3rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }

  .bottom-shell img {
    position: static;
    width: min(410px, 100%);
    height: auto;
    justify-self: center;
  }

  .bottom-arrow {
    position: static;
    width: auto;
    height: auto;
    transform: none !important;
    font-size: 42px;
  }

  .bottom-arrow.left {
    transform: rotate(180deg) !important;
  }

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .hours-grid {
    grid-template-columns: 1fr;
  }

  .hours-grid span:nth-child(even) {
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
