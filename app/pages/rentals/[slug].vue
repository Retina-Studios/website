<script setup lang="ts">
import {
  equipmentCategories,
  formatEquipmentPrice,
  getEquipmentItemBySlug,
  getEquipmentPagePath,
  getRelatedEquipmentItems,
} from '~/data/equipmentCatalog'

const route = useRoute()
const item = computed(() => getEquipmentItemBySlug(String(route.params.slug)))

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Equipment item not found',
  })
}

const category = computed(() => equipmentCategories[item.value!.categoryKey])
const relatedItems = computed(() => getRelatedEquipmentItems(item.value!))

useHead({
  title: `${item.value.name} | Ενοικίαση Εξοπλισμού | Retina Studios`,
  meta: [
    {
      name: 'description',
      content: `${item.value.name} προς ενοικίαση από τη Retina Studios με τιμές 1, 3 και 7 ημερών.`,
    },
  ],
})
</script>

<template>
  <div class="rental-product-page">
    <main class="product-main">
      <section class="product-hero">
        <div class="product-shell hero-shell">
          <NuxtLink class="back-link" :to="getEquipmentPagePath(1)">Επιστροφή στον κατάλογο</NuxtLink>

          <div class="product-stage">
            <div class="product-panel">
              <div v-if="item.image" class="product-image-frame">
                <img :src="item.image" :alt="item.name" />
              </div>

              <span
                class="category-badge"
                :style="{
                  '--badge-accent': category.accent,
                  '--badge-surface': category.surface,
                }"
              >
                {{ category.label }}
              </span>

              <h1>{{ item.name }}</h1>
              <p class="product-description">{{ item.description }}</p>

              <div class="contact-callout">
                <p>Για διαθεσιμότητα, επιβεβαίωση κράτησης και συνδυαστικές ενοικιάσεις, καλέστε μας.</p>
                <div class="contact-actions">
                  <a href="tel:+302521032666">25210 32666</a>
                  <a href="mailto:info@retinastudios.gr?subject=Ενοικίαση%20εξοπλισμού">info@retinastudios.gr</a>
                </div>
              </div>
            </div>

            <aside class="price-panel">
              <h2>Τιμοκατάλογος</h2>

              <dl class="product-prices">
                <div>
                  <dt>1 ημέρα</dt>
                  <dd>{{ formatEquipmentPrice(item.price1Day) }}</dd>
                </div>
                <div>
                  <dt>3 ημέρες</dt>
                  <dd>{{ formatEquipmentPrice(item.price3Days) }}</dd>
                </div>
                <div>
                  <dt>7 ημέρες</dt>
                  <dd>{{ formatEquipmentPrice(item.price7Days) }}</dd>
                </div>
              </dl>

              <p class="price-note">Οι τιμές αφορούν ενοικίαση ανά τεμάχιο και μπορεί να συνδυαστούν με επιπλέον εξοπλισμό από το Studio R1.</p>
            </aside>
          </div>
        </div>
      </section>

      <section v-if="relatedItems.length" class="related-section">
        <div class="product-shell related-shell">
          <div class="related-heading">
            <h2>Σχετικός εξοπλισμός</h2>
            <p>Περισσότερες επιλογές από την ίδια κατηγορία.</p>
          </div>

          <div class="related-grid">
            <article
              v-for="relatedItem in relatedItems"
              :key="relatedItem.slug"
              class="related-card"
              :style="{
                '--related-accent': category.accent,
                '--related-surface': category.surface,
              }"
            >
              <NuxtLink :to="`/rentals/${relatedItem.slug}`" class="related-link">
                <span class="related-category">{{ category.label }}</span>
                <h3>{{ relatedItem.name }}</h3>
                <div class="related-price">
                  <span>{{ relatedItem.price1Day === null ? 'Τιμή' : 'Από' }}</span>
                  <strong>{{ formatEquipmentPrice(relatedItem.price1Day) }}</strong>
                </div>
              </NuxtLink>
            </article>
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

.rental-product-page {
  min-height: 100vh;
  background: #fff;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.product-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.product-hero {
  padding: 42px 0 74px;
  background: #fff;
}

.back-link {
  display: inline-flex;
  margin-bottom: 24px;
  color: inherit;
  text-decoration: none;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 15px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.product-stage {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
  gap: 30px;
  align-items: start;
}

.product-panel {
  padding: 36px;
  background: #fff;
}

.product-image-frame {
  width: 100%;
  aspect-ratio: 4 / 3;
  margin-bottom: 26px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.category-badge {
  display: inline-flex;
  padding: 10px 14px;
  background: var(--badge-surface);
  color: var(--badge-accent);
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-panel h1 {
  margin: 18px 0 14px;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(2rem, 5vw, 58px);
  line-height: 1.05;
  font-weight: 700;
}

.product-description {
  margin: 0;
  max-width: 620px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.8;
}

.contact-callout {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid #d3ccc3;
}

.contact-callout p {
  margin: 0 0 18px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-actions a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #000;
  color: inherit;
  text-decoration: none;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.4;
}

.price-panel {
  padding: 32px 28px;
  background: #000;
  color: #fff;
}

.price-panel h2 {
  margin: 0 0 20px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 400;
}

.product-prices {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.product-prices div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgb(255 255 255 / 20%);
}

.product-prices dt,
.product-prices dd {
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
}

.product-prices dd {
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
}

.price-note {
  margin: 18px 0 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: rgb(255 255 255 / 82%);
}

.related-section {
  padding: 0 0 72px;
  background: #fff;
}

.related-heading {
  margin-bottom: 26px;
}

.related-heading h2 {
  margin: 0 0 6px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 400;
}

.related-heading p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.7;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.related-card {
  background: var(--related-surface);
}

.related-link {
  display: block;
  padding: 24px 22px 22px;
  color: inherit;
  text-decoration: none;
}

.related-category {
  display: inline-flex;
  margin-bottom: 16px;
  color: var(--related-accent);
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.related-link h3 {
  margin: 0 0 24px;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 24px;
  line-height: 1.15;
  font-weight: 700;
}

.related-price {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.related-price span {
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
}

.related-price strong {
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
}

@media (max-width: 900px) {
  .product-shell {
    width: calc(100% - 32px);
  }

  .product-stage,
  .related-grid {
    grid-template-columns: 1fr;
  }

  .product-hero {
    padding-top: 28px;
  }

  .product-panel,
  .price-panel {
    padding: 24px 20px;
  }

  .contact-actions a {
    width: 100%;
    justify-content: center;
  }
}
</style>
