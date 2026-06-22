<script setup lang="ts">
const termsContent = ref<HTMLElement | null>(null)

function unwrapTermsHeadingAnchors() {
  const container = termsContent.value

  if (!container) {
    return
  }

  const anchors = container.querySelectorAll<HTMLAnchorElement>(
    'h1 > a[href^="#"], h2 > a[href^="#"], h3 > a[href^="#"], h4 > a[href^="#"], h5 > a[href^="#"], h6 > a[href^="#"]',
  )

  anchors.forEach((anchor) => {
    const parent = anchor.parentElement

    if (!parent) {
      return
    }

    while (anchor.firstChild) {
      parent.insertBefore(anchor.firstChild, anchor)
    }

    anchor.remove()
  })
}

const { data: termsPage } = await useAsyncData('terms-page', () =>
  queryCollection('pages').path('/pages/terms-of-rental').first(),
)

if (!termsPage.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Terms page not found',
  })
}

useHead(() => ({
  title: `${termsPage.value?.title ?? 'Όροι Μίσθωσης'} | Retina Studios`,
  meta: [
    {
      name: 'description',
      content: termsPage.value?.description ?? '',
    },
  ],
}))

onMounted(() => {
  nextTick(unwrapTermsHeadingAnchors)
})
</script>

<template>
  <main class="terms-page">
    <section class="terms-shell">
      <PageHeroBlock
        :eyebrow="termsPage?.eyebrow ?? 'Rental Terms'"
        :title="termsPage?.title ?? 'Όροι Μίσθωσης'"
        :lead="termsPage?.lead ?? ''"
      />

      <section ref="termsContent" class="terms-content">
        <ContentRenderer :value="termsPage" />
      </section>

      <CtaSection
        title="Χρειάζεστε διευκρινίσεις πριν από την κράτηση;"
        text="Επικοινωνήστε μαζί μας για διαθεσιμότητα, ειδικούς όρους ανά εξοπλισμό ή διευκρινίσεις σχετικά με τη διαδικασία παραλαβής και επιστροφής."
        action-label="Επικοινωνία"
        action-to="/contact"
      />
    </section>
  </main>
</template>

<style scoped>
.terms-page {
  background: #fff;
  color: #111;
}

.terms-shell {
  width: 980px;
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 3rem 0 5rem;
}

.terms-content {
  margin-top: 1.8rem;
}

.terms-content :deep(blockquote) {
  margin: 0;
  padding: 1rem 1.1rem;
  border: 1px solid #e1dece;
  background: #faf6e8;
  border-radius: 0.9rem;
}

.terms-content :deep(blockquote p) {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  line-height: 1.6;
  color: #38352a;
}

.terms-content :deep(h2) {
  margin: 2rem 0 0.9rem;
  padding-top: 1.4rem;
  border-top: 1px solid #e5e2d7;
  font-size: clamp(1.2rem, 2.4vw, 1.7rem);
  line-height: 1.2;
  font-family: 'Palatino Linotype', Palatino, 'Book Antiqua', serif;
  font-style: italic;
  font-weight: 400;
}

.terms-content :deep(p) {
  margin: 0 0 0.95rem;
  max-width: 78ch;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 1rem;
  line-height: 1.72;
  color: #23231f;
}

.terms-content :deep(h2 + p) {
  margin-top: 0;
}

@media (max-width: 1020px) {
  .terms-shell {
    width: auto;
    padding: 2rem 0 4rem;
  }
}
</style>
