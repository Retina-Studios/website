<script setup lang="ts">
import {
  equipmentCategories,
  equipmentCategoryCounts,
  equipmentItems,
  equipmentPageCount,
  formatEquipmentPrice,
  getEquipmentItemsForPage,
  getEquipmentPagePath,
} from '~/data/equipmentCatalog'

const props = defineProps<{
  currentPage: number
}>()

const catalogItems = computed(() => getEquipmentItemsForPage(props.currentPage))
const pageLabel = computed(() => `Σελίδα ${props.currentPage} από ${equipmentPageCount}`)
</script>

<template>
  <div class="rental-catalog-page">
    <main class="catalog-main">
      <section class="catalog-hero">
        <div class="catalog-shell hero-shell">
          <div class="hero-stage">
            <div class="hero-media">
              <img
                src="/images/studior1/equipment-photo.jpg"
                alt="Εξοπλισμός προς ενοικίαση από το Studio R1"
                width="618"
                height="342"
              />
            </div>

            <div class="hero-copy">
              <p class="eyebrow">Studio R1</p>
              <h1>Ενοικίαση εξοπλισμού</h1>
              <p>
                Κάμερες, φακοί, φώτα, ήχος και studio support διαθέσιμα για ενοικίαση με καθαρές
                τιμές 1, 3 και 7 ημερών. Για διαθεσιμότητα και κράτηση, επικοινωνείτε απευθείας
                μαζί μας.
              </p>

              <div class="hero-stats">
                <span>{{ equipmentItems.length }} διαθέσιμα items</span>
                <span>{{ equipmentCategoryCounts.length }} κατηγορίες εξοπλισμού</span>
                <span>{{ pageLabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="catalog-summary">
        <div class="catalog-shell summary-shell">
          <div class="category-overview">
            <article
              v-for="category in equipmentCategoryCounts"
              :key="category.categoryKey"
              class="category-chip"
              :style="{
                '--chip-accent': category.accent,
                '--chip-surface': category.surface,
              }"
            >
              <span class="chip-title">{{ category.label }}</span>
              <span class="chip-count">{{ category.count }} items</span>
            </article>
          </div>
        </div>
      </section>

      <section class="catalog-listing">
        <div class="catalog-shell listing-shell">
          <div class="listing-header">
            <h2>Κατάλογος</h2>
            <p>Όλες οι τιμές περιλαμβάνουν το αντίστοιχο διάστημα ενοικίασης ανά τεμάχιο.</p>
          </div>

          <div class="catalog-grid">
            <article
              v-for="item in catalogItems"
              :key="item.slug"
              class="catalog-card"
              :style="{
                '--card-accent': equipmentCategories[item.categoryKey].accent,
                '--card-surface': equipmentCategories[item.categoryKey].surface,
              }"
            >
              <NuxtLink :to="`/rentals/${item.slug}`" class="card-link">
                <div class="card-media">
                  <span class="card-category">{{ equipmentCategories[item.categoryKey].label }}</span>
                </div>

                <div class="card-body">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.description }}</p>

                  <dl class="price-list">
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

                  <span class="card-cta">Δείτε λεπτομέρειες</span>
                </div>
              </NuxtLink>
            </article>
          </div>

          <nav v-if="equipmentPageCount > 1" class="pagination-nav" aria-label="Σελίδες καταλόγου">
            <NuxtLink
              v-if="currentPage > 1"
              :to="getEquipmentPagePath(currentPage - 1)"
              class="pagination-arrow"
            >
              Προηγούμενη
            </NuxtLink>

            <div class="pagination-links">
              <NuxtLink
                v-for="page in equipmentPageCount"
                :key="page"
                :to="getEquipmentPagePath(page)"
                class="pagination-link"
                :class="{ 'is-active': page === currentPage }"
              >
                {{ page }}
              </NuxtLink>
            </div>

            <NuxtLink
              v-if="currentPage < equipmentPageCount"
              :to="getEquipmentPagePath(currentPage + 1)"
              class="pagination-arrow"
            >
              Επόμενη
            </NuxtLink>
          </nav>
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

.rental-catalog-page {
  min-height: 100vh;
  background: #fff;
  font-family: 'RetinaAvenirLight', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.catalog-shell {
  width: min(1660px, calc(100% - 40px));
  margin: 0 auto;
}

.catalog-hero {
  background: #000;
  padding: 0;
}

.hero-shell {
  width: min(980px, calc(100% - 40px));
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
  padding: 62px 49px 42px 44px;
}

.eyebrow {
  margin: 0 0 12px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0 0 18px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 52px;
  font-weight: 400;
  line-height: 1.06;
}

.hero-copy p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
}

.hero-stats {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-stats span {
  display: inline-flex;
  padding: 10px 14px;
  border: 1px solid #d6d6d6;
  font-size: 14px;
  line-height: 1.4;
}

.catalog-summary {
  background: #f4efe6;
  padding: 30px 0 18px;
}

.category-overview {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.category-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--chip-surface);
  color: var(--chip-accent);
}

.chip-title {
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.3;
}

.chip-count {
  font-size: 14px;
  line-height: 1.3;
}

.catalog-listing {
  background: #f4efe6;
  padding: 0 0 72px;
}

.listing-header {
  padding: 20px 0 30px;
}

.listing-header h2 {
  margin: 0 0 8px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 400;
}

.listing-header p {
  margin: 0;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.7;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
}

.catalog-card {
  background: #fff;
}

.card-link {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.card-media {
  display: flex;
  align-items: flex-end;
  min-height: 148px;
  padding: 22px;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--card-accent) 88%, #fff 12%) 0%, var(--card-accent) 100%);
}

.card-category {
  display: inline-flex;
  padding: 9px 12px;
  background: rgb(255 255 255 / 88%);
  color: var(--card-accent);
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-body {
  padding: 24px 22px 22px;
}

.card-body h3 {
  margin: 0 0 10px;
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-size: 26px;
  line-height: 1.18;
  font-weight: 700;
}

.card-body p {
  margin: 0 0 20px;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.7;
}

.price-list {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.price-list div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid #d9d3cb;
}

.price-list dt,
.price-list dd {
  margin: 0;
  font-size: 15px;
  line-height: 1.4;
}

.price-list dd {
  font-family: 'RetinaAvenirHeavy', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
}

.card-cta {
  display: inline-flex;
  margin-top: 18px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 15px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.pagination-nav {
  margin-top: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.pagination-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.pagination-link,
.pagination-arrow {
  color: inherit;
  text-decoration: none;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.4;
}

.pagination-link {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #b5ada1;
  background: #fff;
}

.pagination-link.is-active {
  background: #000;
  border-color: #000;
  color: #fff;
}

@media (max-width: 1020px) {
  .catalog-shell,
  .hero-shell {
    width: calc(100% - 32px);
  }

  .hero-stage {
    display: block;
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
    margin: 16px 0 0;
    padding: 24px 20px;
  }

  .hero-copy h1 {
    font-size: clamp(2.3rem, 10vw, 52px);
  }

  .catalog-summary {
    padding-top: 22px;
  }

  .listing-header {
    padding-top: 18px;
  }

  .catalog-grid {
    grid-template-columns: 1fr;
  }

  .pagination-nav {
    flex-direction: column;
  }
}
</style>
