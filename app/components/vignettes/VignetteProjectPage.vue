<script setup lang="ts">
type GalleryImage = {
  src: string
  alt?: string
}

type Credit = {
  role: string
  name: string
  href?: string
}

type TeamMember = {
  role: string
  name: string
  image: string
  href?: string
}

const props = defineProps<{
  title: string
  heroImage: string
  heroMinHeight?: string
  heroTitleImage?: string
  heroTitleClass?: string
  heroTitleLines?: string[]
  intro?: string
  storyVariant?: string
  gallery: GalleryImage[]
  galleryLayout?: string
  credits?: Credit[]
  team?: TeamMember[]
  cta?: { label: string; href: string }
  actions?: Array<{ label: string; href: string }>
  actionPreview?: string
  actionVariant?: string
  creditsVariant?: string
  projectBrowser?: {
    image: string
    previous: { label: string; to: string }
    next: { label: string; to: string }
  }
  previous?: { label: string; to: string }
  next?: { label: string; to: string }
}>()

const activeImageIndex = ref<number | null>(null)
const activeImage = computed(() => (
  activeImageIndex.value === null ? null : props.gallery[activeImageIndex.value]
))

function openImage(index: number) {
  activeImageIndex.value = index
}

function closeLightbox() {
  activeImageIndex.value = null
}

function showPreviousImage() {
  if (activeImageIndex.value === null) return
  activeImageIndex.value = (activeImageIndex.value - 1 + props.gallery.length) % props.gallery.length
}

function showNextImage() {
  if (activeImageIndex.value === null) return
  activeImageIndex.value = (activeImageIndex.value + 1) % props.gallery.length
}

function handleKeydown(event: KeyboardEvent) {
  if (activeImageIndex.value === null) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowLeft') showPreviousImage()
  if (event.key === 'ArrowRight') showNextImage()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

function getOptimizedVignetteImage(src: string) {
  return src
    .replace('/images/projects/vignettes/', '/images/projects/vignettes/web/')
    .replace(/\.(jpe?g|png)$/i, '.webp')
}
</script>

<template>
  <main class="vignette-project">
    <section class="hero" :style="{ backgroundImage: `url(${getOptimizedVignetteImage(heroImage)})`, '--hero-min-height': heroMinHeight }">
      <img v-if="heroTitleImage" class="hero-title-image" :src="getOptimizedVignetteImage(heroTitleImage)" :alt="title" />
      <h1 v-else :class="heroTitleClass">
        <template v-if="heroTitleLines?.length">
          <span v-for="line in heroTitleLines" :key="line">{{ line }}</span>
        </template>
        <template v-else>{{ title }}</template>
      </h1>
    </section>

    <section v-if="intro || gallery.length" class="story" :class="storyVariant ? `story--${storyVariant}` : ''">
      <p v-if="intro">{{ intro }}</p>
      <div class="gallery" :class="galleryLayout ? `gallery--${galleryLayout}` : ''">
        <button
          v-for="(image, index) in gallery"
          :key="image.src"
          type="button"
          :aria-label="`Προβολή φωτογραφίας ${index + 1} σε πλήρη ανάλυση`"
          @click="openImage(index)"
        >
          <img
            :src="getOptimizedVignetteImage(image.src)"
            :alt="image.alt ?? ''"
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
    </section>

    <section v-if="cta" class="cta">
      <a :href="cta.href" target="_blank" rel="noreferrer noopener">{{ cta.label }} <span aria-hidden="true">→</span></a>
    </section>

    <section v-if="actions?.length" class="action-section" :class="actionVariant ? `action-section--${actionVariant}` : ''">
      <div class="action-shell" :class="actionVariant ? `action-shell--${actionVariant}` : ''">
        <div class="action-copy">
          <a v-for="action in actions" :key="action.href" :href="action.href" target="_blank" rel="noreferrer noopener" class="action-button">
            <span>{{ action.label }}</span><span aria-hidden="true">➜</span>
          </a>
        </div>
        <div v-if="actionPreview" class="action-preview">
          <img :src="getOptimizedVignetteImage(actionPreview)" alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section v-if="team?.length" class="team-section">
      <div class="team-shell">
        <h2>Η ομάδα</h2>
        <div class="team-grid">
          <article v-for="member in team" :key="`${member.role}-${member.name}`" class="team-card">
            <img :src="member.image" :alt="member.name" loading="lazy" decoding="async" />
            <div class="team-meta">
              <p class="team-role">{{ member.role }}</p>
              <p class="team-name">{{ member.name }}</p>
              <a v-if="member.href" :href="member.href" target="_blank" rel="noreferrer noopener" class="team-link" :aria-label="member.name">↗</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-else-if="credits?.length" class="credits" :class="creditsVariant ? `credits--${creditsVariant}` : ''">
      <h2>Συντελεστές</h2>
      <dl>
        <template v-for="credit in credits" :key="`${credit.role}-${credit.name}`">
          <dt>{{ credit.role }}</dt>
          <dd>
            <a v-if="credit.href" :href="credit.href" target="_blank" rel="noreferrer noopener">{{ credit.name }}</a>
            <span v-else>{{ credit.name }}</span>
          </dd>
        </template>
      </dl>
    </section>

    <nav v-if="(previous || next) && !projectBrowser" class="project-nav" aria-label="Πλοήγηση projects">
      <NuxtLink v-if="previous" :to="previous.to">← {{ previous.label }}</NuxtLink>
      <NuxtLink v-if="next" :to="next.to">{{ next.label }} →</NuxtLink>
    </nav>

    <section v-if="projectBrowser" class="bottom-project-nav">
      <div class="bottom-shell">
        <NuxtLink :to="projectBrowser.previous.to" class="bottom-arrow left" :aria-label="projectBrowser.previous.label">❯</NuxtLink>
        <img :src="getOptimizedVignetteImage(projectBrowser.image)" alt="" loading="lazy" decoding="async" />
        <NuxtLink :to="projectBrowser.next.to" class="bottom-arrow right" :aria-label="projectBrowser.next.label">❯</NuxtLink>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="activeImage" class="lightbox" role="dialog" aria-modal="true" aria-label="Προβολή φωτογραφίας" @click.self="closeLightbox">
        <button class="lightbox-close" type="button" aria-label="Κλείσιμο" @click="closeLightbox">×</button>
        <button class="lightbox-arrow lightbox-arrow--previous" type="button" aria-label="Προηγούμενη φωτογραφία" @click="showPreviousImage">‹</button>
        <img :src="activeImage.src" :alt="activeImage.alt ?? ''" />
        <button class="lightbox-arrow lightbox-arrow--next" type="button" aria-label="Επόμενη φωτογραφία" @click="showNextImage">›</button>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.vignette-project { background: #fff; color: #111; }
.hero { --hero-title-offset: clamp(3.5rem, 10vh, 6.5rem); position: relative; min-height: var(--hero-min-height, 760px); background-position: center; background-size: cover; color: #fff; text-align: center; }
.hero h1 { position: absolute; bottom: var(--hero-title-offset); left: 50%; width: min(90vw, 900px); margin: 0; padding: 0; transform: translateX(-50%); font-family: 'RetinaGeo', Arial, sans-serif; font-size: clamp(3rem, 9vw, 7rem); line-height: .9; text-shadow: 0 2px 20px rgb(0 0 0 / .55); }
.hero-title-image { position: absolute; bottom: var(--hero-title-offset); left: 50%; width: min(600px, 80vw); height: auto; object-fit: contain; transform: translateX(-50%); }
.hero h1.sweet-pinup-title { bottom: var(--hero-title-offset); left: 50%; width: min(781px, 90vw); margin: 0; padding: 0; transform: translateX(-50%); font-family: 'Playfair Display', 'Times New Roman', serif; font-size: clamp(3.5rem, 8vw, 111px); font-weight: 400; line-height: .8; color: #fcd1f8; text-shadow: rgb(10 189 240 / .3) 3px 3px 0, rgb(254 1 1 / .3) -3px -3px 0; }
.hero h1.retro-retina-title { bottom: var(--hero-title-offset); left: 50%; width: min(781px, 90vw); margin: 0; padding: 0; transform: translateX(-50%) rotate(345.777deg); font-family: 'Coca Cola II', 'Brush Script MT', 'Segoe Script', 'Playfair Display', serif; font-size: clamp(7rem, 18vw, 250px); font-weight: 400; line-height: .5; color: #fff; text-shadow: rgb(10 189 240 / .3) 3px 3px 0, rgb(254 1 1 / .3) -3px -3px 0; }
.retro-retina-title span { display: block; }
.hero h1.cowgirl-title { bottom: var(--hero-title-offset); left: 50%; width: min(781px, 90vw); margin: 0; padding: 0; transform: translateX(-50%); font-family: 'Americana Vintage', 'Playfair Display', 'Times New Roman', serif; font-size: clamp(4rem, 8vw, 111px); font-weight: 400; line-height: .8; color: #fff; text-transform: lowercase; }
.credits, .project-nav { width: min(980px, calc(100% - 2rem)); margin: 0 auto; }
.story { width: 100%; padding: 72px 0; box-sizing: border-box; }
.story--sweet { background: rgb(252 209 248); }
.story--peaky { background: #000; color: #fff; }
.story--retro { background: #f9d342; }
.story--regal { background: #101924; color: #e0a476; }
.story--cowgirl { background: #e8d7a1; }
.story > p { max-width: 720px; margin: 0 auto 48px; font-family: 'Playfair Display', 'Times New Roman', serif; font-size: 18px; line-height: 1.8; }
.gallery { width: min(980px, calc(100% - 2rem)); margin: 0 auto; columns: 3 240px; column-gap: 12px; }
.gallery button { display: block; width: 100%; margin: 0 0 12px; padding: 0; border: 0; background: none; cursor: zoom-in; break-inside: avoid; }
.gallery img { width: 100%; display: block; }
.gallery--regal { columns: unset; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.gallery--regal button { margin: 0; }
.gallery--regal button:first-child,
.gallery--regal button:last-child { grid-column: 1 / -1; }
.cta { padding: 0 1rem 72px; text-align: center; }
.cta a { display: inline-flex; gap: .8rem; align-items: center; padding: .8rem 1.3rem; background: #111; color: #fff; text-decoration: none; }
.action-section { min-width: 980px; background: #fff; }
.action-shell { width: 980px; min-height: 668px; margin: 70px auto 10px; display: grid; grid-template-columns: 490px 490px; }
.action-copy { display: flex; flex-direction: column; gap: 22px; padding: 282px 0 0 93px; box-sizing: border-box; }
.action-button { width: 303px; height: 52px; display: inline-flex; align-items: center; justify-content: space-between; box-sizing: border-box; border: 1px solid #2e2e2e; background: #2e2e2e; color: #fff; padding: 0 20px; font-family: 'RetinaGeo', Arial, sans-serif; font-size: 20px; text-decoration: none; }
.action-button:hover { background: #fff; color: #2e2e2e; }
.action-preview img { width: 490px; height: 668px; display: block; object-fit: cover; }
.action-shell--sweet { min-height: 830px; }
.action-shell--sweet .action-copy { padding: 308px 0 0 119px; }
.action-shell--sweet .action-button { width: 251px; }
.credits { padding: 0 0 72px; }
.credits h2 { margin: 0 0 24px; font-family: 'RetinaGeo', Arial, sans-serif; font-size: 2rem; }
.credits dl { display: grid; grid-template-columns: max-content 1fr; gap: 12px 32px; margin: 0; font-family: 'RetinaProxima', Arial, sans-serif; }
.credits dt { font-weight: 700; }
.credits dd { margin: 0; }
.credits a { color: inherit; }
.credits--regal { width: 100%; box-sizing: border-box; min-height: 400px; padding: 72px max(calc((100% - 720px) / 2), 1rem); background: linear-gradient(rgb(16 25 36 / .78), rgb(16 25 36 / .78)), url('/images/projects/vignettes/web/regal/Artemis_0154-edited.webp') center / cover no-repeat; color: #e0a476; text-align: center; }
.credits--regal dl { display: block; font-family: 'Playfair Display', 'Times New Roman', serif; }
.credits--regal dt { margin: 0 0 8px; font-size: 22px; line-height: 1.1; }
.credits--regal dd { margin: 0 0 16px; font-size: 20px; line-height: 1.1; }
.credits--sweet { width: 100%; box-sizing: border-box; min-height: 683px; padding: 54px max(calc((100% - 395px) / 2), 1rem); background: #0b2f5b url('/images/projects/vignettes/web/sweet-pin-up/credits-bg.webp') center / cover no-repeat; color: #0b2f5b; text-align: center; }
.credits--sweet h2 { display: none; }
.credits--sweet dl { display: block; margin: 0; font-family: 'Playfair Display', 'Times New Roman', serif; }
.credits--sweet dt { margin: 0 0 8px; font-size: 22px; font-weight: 900; line-height: 1.1; }
.credits--sweet dd { margin: 0 0 12px; font-size: 20px; line-height: 1.1; }
.credits--sweet dd:last-child { margin-bottom: 0; }
.credits--retro { width: 100%; box-sizing: border-box; min-height: 383px; padding: 54px max(calc((100% - 395px) / 2), 1rem); background: #777 url('/images/projects/vignettes/web/retro-retina/credits-bg.webp') center / cover no-repeat; color: #fff; text-align: center; }
.credits--retro h2 { display: none; }
.credits--retro dl { display: block; margin: 0; font-family: 'Playfair Display', 'Times New Roman', serif; text-shadow: rgb(0 0 0 / .4) 0 4px 5px; }
.credits--retro dt { margin: 0 0 8px; font-size: 22px; font-weight: 900; line-height: 1.1; }
.credits--retro dd { margin: 0 0 12px; font-size: 20px; line-height: 1.1; }
.credits--retro dd:last-child { margin-bottom: 0; }
.credits--retro a { color: #fff; }
.credits--cowgirl { width: 100%; box-sizing: border-box; min-height: 457px; padding: 54px max(calc((100% - 395px) / 2), 1rem); background: linear-gradient(rgb(156 34 2 / .78), rgb(156 34 2 / .78)), url('/images/projects/vignettes/web/cowgirl/credits-bg.webp') center / cover no-repeat; color: #fff; text-align: center; }
.credits--cowgirl h2 { display: none; }
.credits--cowgirl dl { display: block; margin: 0; font-family: 'Playfair Display', 'Times New Roman', serif; }
.credits--cowgirl dt { margin: 0 0 8px; font-size: 22px; font-weight: 900; line-height: 1.1; }
.credits--cowgirl dd { margin: 0 0 12px; font-size: 20px; line-height: 1.1; }
.credits--cowgirl dd:last-child { margin-bottom: 0; }
.credits--cowgirl a { color: #fff; }
.team-section { min-width: 980px; background: #fff; }
.team-shell { width: min(1320px, calc(100% - 2rem)); margin: 0 auto; padding: 84px 0 43px; }
.team-shell h2 { margin: 0 0 38px; font-family: 'RetinaGeo', Arial, sans-serif; font-size: 50px; line-height: 1; text-align: center; }
.team-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.team-card { width: 100%; min-height: 244px; display: grid; grid-template-columns: 260px 1fr; background: rgb(0 0 0 / .8); color: #fff; }
.team-card img { display: block; width: 260px; height: 240px; margin-top: 2px; object-fit: cover; }
.team-meta { padding: 19px 12px 10px; display: flex; flex-direction: column; }
.team-role { margin: 0 0 9px; font-family: 'RetinaGeo', Arial, sans-serif; font-size: 16px; line-height: 1.2; }
.team-name { margin: 0 0 9px; font-family: 'RetinaGeo', Arial, sans-serif; font-size: 20px; line-height: 1.2; }
.team-link { width: 23px; height: 23px; border: 1px solid #fff; color: #fff; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; font-size: 14px; line-height: 1; }
.project-nav { display: flex; justify-content: space-between; gap: 1rem; padding: 0 0 60px; }
.project-nav a { color: inherit; text-decoration: none; font-family: 'RetinaGeo', Arial, sans-serif; }
.bottom-project-nav { min-width: 980px; background: #000 url('/images/projects/vignettes/web/bottom-bg.webp') center / cover no-repeat; }
.bottom-shell { width: 980px; min-height: 296px; margin: 0 auto; position: relative; }
.bottom-shell img { position: absolute; left: 285px; top: 93px; width: 410px; height: 109px; object-fit: cover; }
.bottom-arrow { position: absolute; top: 131px; width: 33px; height: 100px; display: inline-flex; align-items: center; justify-content: center; color: #ab1c52; font-size: 56px; line-height: 1; text-decoration: none; }
.bottom-arrow.left { left: 126px; transform: rotate(180deg); }
.bottom-arrow.right { left: 821px; }
.lightbox { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 5rem; background: rgb(0 0 0 / .9); }
.lightbox img { display: block; max-width: 100%; max-height: 100%; object-fit: contain; }
.lightbox-close, .lightbox-arrow { position: absolute; border: 0; background: transparent; color: #fff; cursor: pointer; line-height: 1; }
.lightbox-close { top: 1.5rem; right: 1.5rem; font-size: 3rem; }
.lightbox-arrow { top: 50%; transform: translateY(-50%); padding: 1rem; font-size: 4rem; }
.lightbox-arrow--previous { left: 1rem; }
.lightbox-arrow--next { right: 1rem; }
@media (max-width: 640px) { .lightbox { padding: 1rem 3.5rem; } .lightbox-arrow { padding: .4rem; font-size: 3rem; } .lightbox-arrow--previous { left: .25rem; } .lightbox-arrow--next { right: .25rem; } }
@media (max-width: 640px) { .hero { min-height: 460px; } .story { padding: 48px 0; } .story > p { font-size: 16px; } .gallery { columns: 1; } .gallery--regal { display: grid; grid-template-columns: 1fr; } .gallery--regal button:first-child, .gallery--regal button:last-child { grid-column: auto; } .credits dl { grid-template-columns: 1fr; gap: 4px; } .credits dd { margin-bottom: 16px; } .team-section { min-width: 0; } .team-shell { padding: 48px 1rem; } .team-shell h2 { font-size: 38px; } .team-grid { grid-template-columns: 1fr; } .team-card { grid-template-columns: 120px 1fr; min-height: 0; } .team-card img { width: 120px; height: 120px; } .action-section, .bottom-project-nav { min-width: 0; } .action-shell { width: 100%; min-height: 0; margin: 0; grid-template-columns: 1fr; } .action-copy { padding: 48px 1rem; align-items: center; } .action-preview img { width: 100%; height: auto; } .bottom-shell { width: 100%; min-height: 180px; } .bottom-shell img { width: min(220px, 60vw); height: auto; left: 50%; top: 50%; transform: translate(-50%, -50%); } .bottom-arrow { top: 50%; transform: translateY(-50%); } .bottom-arrow.left { left: 1rem; transform: translateY(-50%) rotate(180deg); } .bottom-arrow.right { right: 1rem; left: auto; } }
</style>
