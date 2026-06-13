<script setup lang="ts">
import {
  equipmentCategories,
  equipmentCategoryCounts,
  equipmentItems,
  equipmentItemsPerPage,
  formatEquipmentPrice,
  getEquipmentPagePath,
} from '~/data/equipmentCatalog'
import type { EquipmentCategoryKey } from '~/data/equipmentCatalog'

const props = defineProps<{
  currentPage: number
}>()

const route = useRoute()
const catalogSection = ref<HTMLElement | null>(null)
const filterTags = ref<HTMLElement | null>(null)
const categoryDialog = ref<HTMLDialogElement | null>(null)
const filterDragStart = {
  pointerX: 0,
  scrollLeft: 0,
}
let isDraggingFilters = false
let didDragFilters = false

const selectedCategory = computed<EquipmentCategoryKey | null>(() => {
  const category = route.query.category

  if (typeof category !== 'string' || !(category in equipmentCategories)) {
    return null
  }

  return category as EquipmentCategoryKey
})

const filteredItems = computed(() => {
  if (!selectedCategory.value) {
    return equipmentItems
  }

  return equipmentItems.filter((item) => item.categoryKey === selectedCategory.value)
})

const filteredPageCount = computed(() =>
  Math.max(1, Math.ceil(filteredItems.value.length / equipmentItemsPerPage)),
)

const pagedItems = computed(() => {
  const safePage = Math.min(props.currentPage, filteredPageCount.value)
  const start = (safePage - 1) * equipmentItemsPerPage
  return filteredItems.value.slice(start, start + equipmentItemsPerPage)
})

const pageLabel = computed(() => {
  const safePage = Math.min(props.currentPage, filteredPageCount.value)
  return `Σελίδα ${safePage} από ${filteredPageCount.value}`
})

function getCategoryLink(categoryKey: EquipmentCategoryKey | null, page = 1) {
  return {
    path: `/rentals/page/${page}`,
    query: categoryKey ? { category: categoryKey } : {},
    hash: '#catalog',
  }
}

function scrollActiveCategoryIntoView() {
  const container = filterTags.value
  const activeTag = container?.querySelector<HTMLElement>('.filter-tag.is-active')

  if (!container || !activeTag) {
    return
  }

  const left = activeTag.offsetLeft - (container.clientWidth - activeTag.offsetWidth) / 2
  container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' })
}

function openCategoryDialog() {
  categoryDialog.value?.showModal()
}

function closeCategoryDialog() {
  categoryDialog.value?.close()
}

function startFilterDrag(event: PointerEvent) {
  if (event.pointerType === 'touch' || !filterTags.value) {
    return
  }

  filterDragStart.pointerX = event.clientX
  filterDragStart.scrollLeft = filterTags.value.scrollLeft
  isDraggingFilters = true
  didDragFilters = false
  filterTags.value.setPointerCapture(event.pointerId)
}

function moveFilterDrag(event: PointerEvent) {
  if (!isDraggingFilters || !filterTags.value) {
    return
  }

  const distance = event.clientX - filterDragStart.pointerX
  didDragFilters = didDragFilters || Math.abs(distance) > 4
  filterTags.value.scrollLeft = filterDragStart.scrollLeft - distance
}

function stopFilterDrag(event: PointerEvent) {
  if (!isDraggingFilters || !filterTags.value) {
    return
  }

  isDraggingFilters = false
  filterTags.value.releasePointerCapture(event.pointerId)
  window.setTimeout(() => {
    didDragFilters = false
  })
}

function preventClickAfterFilterDrag(event: MouseEvent) {
  if (!didDragFilters) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  didDragFilters = false
}

onMounted(() => {
  nextTick(scrollActiveCategoryIntoView)

  if (route.hash === '#catalog' || selectedCategory.value || props.currentPage > 1) {
    nextTick(() => {
      catalogSection.value?.focus({ preventScroll: true })
      catalogSection.value?.scrollIntoView({ block: 'start' })
    })
  }
})

watch(selectedCategory, () => nextTick(scrollActiveCategoryIntoView))
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

      <section id="catalog" ref="catalogSection" tabindex="-1" class="catalog-listing">
        <div class="catalog-shell listing-shell">
          <div class="listing-layout">
            <aside class="filter-sidebar">
              <div class="filter-panel">
                <p class="filter-label">Κατηγορίες</p>

                <div
                  ref="filterTags"
                  class="filter-tags"
                  @pointerdown="startFilterDrag"
                  @pointermove="moveFilterDrag"
                  @pointerup="stopFilterDrag"
                  @pointercancel="stopFilterDrag"
                  @click.capture="preventClickAfterFilterDrag"
                >
                  <NuxtLink
                    :to="getCategoryLink(null)"
                    class="filter-tag"
                    :class="{ 'is-active': !selectedCategory }"
                  >
                    <span>Όλος ο εξοπλισμός</span>
                    <span>{{ equipmentItems.length }}</span>
                  </NuxtLink>

                  <NuxtLink
                    v-for="category in equipmentCategoryCounts"
                    :key="category.categoryKey"
                    :to="getCategoryLink(category.categoryKey)"
                    class="filter-tag"
                    :class="{ 'is-active': selectedCategory === category.categoryKey }"
                  >
                    <span>{{ category.label }}</span>
                    <span>{{ category.count }}</span>
                  </NuxtLink>

                  <button type="button" class="filter-tag filter-tag-more" @click="openCategoryDialog">
                    <span>Προβολή όλων</span>
                    <span aria-hidden="true">↓</span>
                  </button>
                </div>
              </div>
            </aside>

            <div class="listing-content">
              <div class="listing-header">
                <h2>Κατάλογος</h2>
                <p>Όλες οι τιμές περιλαμβάνουν το αντίστοιχο διάστημα ενοικίασης ανά τεμάχιο.</p>
              </div>

              <div class="catalog-grid">
                <article
                  v-for="item in pagedItems"
                  :key="item.slug"
                  class="catalog-card"
                  :style="{
                    '--card-accent': equipmentCategories[item.categoryKey].accent,
                    '--card-surface': equipmentCategories[item.categoryKey].surface,
                  }"
                >
                  <NuxtLink :to="`/rentals/${item.slug}`" class="card-link">
                    <div class="card-media">
                      <img
                        v-if="item.image"
                        :src="item.image"
                        :alt="item.name"
                        width="600"
                        height="600"
                        loading="eager"
                        decoding="async"
                      />
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

              <p v-if="!pagedItems.length" class="empty-state">
                Δεν βρέθηκαν items σε αυτή την κατηγορία για τη συγκεκριμένη σελίδα.
              </p>

              <nav
                v-if="filteredPageCount > 1"
                class="pagination-nav"
                aria-label="Σελίδες καταλόγου"
              >
                <div class="pagination-links">
                  <NuxtLink
                    v-if="currentPage > 1"
                    :to="getCategoryLink(selectedCategory, currentPage - 1)"
                    class="pagination-link pagination-arrow"
                    aria-label="Προηγούμενη σελίδα"
                  >
                    &lt;
                  </NuxtLink>
                  <span
                    v-else
                    class="pagination-link pagination-arrow is-disabled"
                    aria-disabled="true"
                  >
                    &lt;
                  </span>

                  <NuxtLink
                    v-for="page in filteredPageCount"
                    :key="page"
                    :to="getCategoryLink(selectedCategory, page)"
                    class="pagination-link"
                    :class="{ 'is-active': page === currentPage }"
                  >
                    {{ page }}
                  </NuxtLink>

                  <NuxtLink
                    v-if="currentPage < filteredPageCount"
                    :to="getCategoryLink(selectedCategory, currentPage + 1)"
                    class="pagination-link pagination-arrow"
                    aria-label="Επόμενη σελίδα"
                  >
                    &gt;
                  </NuxtLink>
                  <span
                    v-else
                    class="pagination-link pagination-arrow is-disabled"
                    aria-disabled="true"
                  >
                    &gt;
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>

    <dialog ref="categoryDialog" class="category-dialog" @click.self="closeCategoryDialog">
      <div class="category-sheet">
        <div class="category-sheet-header">
          <p>Όλες οι κατηγορίες</p>
          <button type="button" aria-label="Κλείσιμο κατηγοριών" @click="closeCategoryDialog">×</button>
        </div>

        <div class="category-sheet-links">
          <NuxtLink
            :to="getCategoryLink(null)"
            class="category-sheet-link"
            :class="{ 'is-active': !selectedCategory }"
            @click="closeCategoryDialog"
          >
            <span>Όλος ο εξοπλισμός</span>
            <span>{{ equipmentItems.length }}</span>
          </NuxtLink>

          <NuxtLink
            v-for="category in equipmentCategoryCounts"
            :key="category.categoryKey"
            :to="getCategoryLink(category.categoryKey)"
            class="category-sheet-link"
            :class="{ 'is-active': selectedCategory === category.categoryKey }"
            @click="closeCategoryDialog"
          >
            <span>{{ category.label }}</span>
            <span>{{ category.count }}</span>
          </NuxtLink>
        </div>
      </div>
    </dialog>
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

.catalog-listing {
  background: #fff;
  padding: 30px 0 72px;
  scroll-margin-top: 20px;
  outline: none;
}

.listing-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.filter-sidebar {
  position: sticky;
  top: 24px;
}

.filter-panel {
  padding: 20px 18px;
  background: #fff;
  border: 1px solid #d9d3cb;
}

.filter-label {
  margin: 0 0 14px;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 22px;
  line-height: 1.1;
}

.filter-tags {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid #d9d3cb;
  background: #fff;
  color: inherit;
  text-decoration: none;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.35;
}

.filter-tag-more {
  display: none;
  cursor: pointer;
}

.filter-tag span:last-child,
.category-sheet-link span:last-child {
  font-size: 12px;
  opacity: 0.68;
}

.filter-tag.is-active {
  border-color: #000;
  background: #000;
  color: #fff;
}

.category-dialog {
  width: min(100%, 520px);
  max-width: none;
  max-height: min(78vh, 680px);
  margin: auto 0 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: #000;
}

.category-dialog::backdrop {
  background: rgb(0 0 0 / 48%);
}

.category-sheet {
  overflow: hidden;
  padding: 18px 16px max(24px, env(safe-area-inset-bottom));
  border-radius: 18px 18px 0 0;
  background: #fff;
}

.category-sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.category-sheet-header p {
  margin: 0;
  font-family: 'RetinaGeo', 'Arial Narrow', sans-serif;
  font-size: 24px;
  line-height: 1.1;
}

.category-sheet-header button {
  width: 44px;
  height: 44px;
  border: 1px solid #d9d3cb;
  background: #fff;
  color: #000;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.category-sheet-links {
  overflow-y: auto;
  max-height: calc(78vh - 100px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  overscroll-behavior: contain;
}

.category-sheet-link {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid #d9d3cb;
  color: #000;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.3;
  text-decoration: none;
}

.category-sheet-link.is-active {
  border-color: #000;
  background: #000;
  color: #fff;
}

.listing-content {
  min-width: 0;
}

.listing-header {
  padding: 0 0 30px;
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.empty-state {
  margin: 0;
  padding: 24px;
  background: #fff;
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.7;
}

.catalog-card {
  background: #fff;
  border-top: 12px solid var(--card-accent);
}

.card-link {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.card-media {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 240px;
  padding: 22px;
  background: #fff;
}

.card-media img {
  width: 100%;
  height: 196px;
  object-fit: contain;
  display: block;
}

.card-category {
  position: absolute;
  top: 18px;
  left: 18px;
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
  font-family: 'RetinaProxima', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.4;
  text-decoration: none;
}

.pagination-link {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #b5ada1;
  background: #fff;
  color: #000;
}

.pagination-link.is-active {
  background: #000;
  border-color: #000;
  color: #fff;
}

.pagination-arrow {
  font-size: 18px;
}

.pagination-link.is-disabled {
  border-color: #d5d0c8;
  color: #b1aaa0;
  background: #f5f3ef;
  pointer-events: none;
}

@media (max-width: 1180px) {
  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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

  .listing-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .filter-sidebar {
    position: static;
  }

  .filter-panel {
    position: relative;
    overflow: hidden;
    padding: 18px 0 16px 16px;
  }

  .filter-tags {
    overflow-x: auto;
    overflow-y: hidden;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    padding-right: 32px;
    scroll-padding-inline: 16px 32px;
    scrollbar-width: none;
    overscroll-behavior-inline: contain;
    cursor: grab;
    touch-action: pan-x;
    user-select: none;
    -webkit-overflow-scrolling: touch;
  }

  .filter-tags:active {
    cursor: grabbing;
  }

  .filter-tags::-webkit-scrollbar {
    display: none;
  }

  .filter-tag {
    min-height: 44px;
    flex: 0 0 auto;
    width: auto;
    min-width: 0;
    padding: 10px 13px;
    white-space: nowrap;
  }

  .filter-tag-more {
    display: flex;
  }

  .filter-panel::after {
    position: absolute;
    right: 0;
    bottom: 16px;
    width: 28px;
    height: 44px;
    background: linear-gradient(90deg, rgb(255 255 255 / 0%), #fff 78%);
    content: '';
    pointer-events: none;
  }

  .listing-header {
    padding-top: 0;
  }

  .catalog-grid {
    grid-template-columns: 1fr;
  }

  .card-media {
    min-height: 220px;
  }

  .card-media img {
    height: 176px;
  }

  .pagination-nav {
    display: flex;
    justify-content: center;
  }
}
</style>
