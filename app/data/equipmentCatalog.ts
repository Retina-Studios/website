import {
  equipmentCategories,
  equipmentCategoryKeys,
} from './equipmentCategories'

export type {
  EquipmentCategoryKey,
  EquipmentCategoryMeta,
} from './equipmentCategories'
export {
  equipmentCategories,
  equipmentCategoryKeys,
} from './equipmentCategories'

export const rentalPriceDurations = [1, 3, 7] as const

export type RentalPriceDuration = typeof rentalPriceDurations[number]
export type RentalPriceKey = `${RentalPriceDuration}`
export type EquipmentPrices = Partial<Record<RentalPriceKey, number | null>>

export type EquipmentDocument = {
  path: string
  title: string
  order: number
  categories: EquipmentCategoryKey[]
  images: string[]
  prices: EquipmentPrices
  description?: string
  body?: unknown
}

export type EquipmentItem = {
  path: string
  slug: string
  order: number
  name: string
  categories: EquipmentCategoryKey[]
  summary: string
  images: string[]
  prices: EquipmentPrices
}

const priceFormatter = new Intl.NumberFormat('el-GR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export const equipmentItemsPerPage = 12

export function isEquipmentCategoryKey(value: string): value is EquipmentCategoryKey {
  return equipmentCategoryKeys.includes(value as EquipmentCategoryKey)
}

export function parseEquipmentCategoryQuery(value: unknown): EquipmentCategoryKey | null {
  return typeof value === 'string' && isEquipmentCategoryKey(value) ? value : null
}

export function getEquipmentSlugFromPath(path: string) {
  return path.split('/').filter(Boolean).pop() ?? ''
}

export function normalizeEquipmentDocument(document: EquipmentDocument): EquipmentItem {
  return {
    path: document.path,
    slug: getEquipmentSlugFromPath(document.path),
    order: document.order,
    name: document.title,
    categories: document.categories,
    summary: getEquipmentSummary(document),
    images: document.images,
    prices: normalizeEquipmentPrices(document.prices),
  }
}

export function normalizeEquipmentDocuments(documents: EquipmentDocument[]) {
  return documents
    .map(normalizeEquipmentDocument)
    .sort((left, right) => left.order - right.order || left.slug.localeCompare(right.slug))
}

export function getPrimaryEquipmentCategoryKey(item: Pick<EquipmentItem, 'categories'>) {
  return item.categories[0]
}

export function getPrimaryEquipmentImage(item: Pick<EquipmentItem, 'images'>) {
  return item.images[0] ?? ''
}

function extractFirstSentence(text: string) {
  const normalized = text.replace(/\s+/g, ' ').trim()

  if (!normalized) {
    return ''
  }

  const match = normalized.match(/^.*?[.!?](?=\s|$)/)
  return match ? match[0].trim() : normalized
}

export function getEquipmentSummary(document: Pick<EquipmentDocument, 'description' | 'title'>) {
  const summary = extractFirstSentence(document.description ?? '')

  return summary || document.title
}

export function normalizeEquipmentPrices(prices: EquipmentPrices) {
  return rentalPriceDurations.reduce<EquipmentPrices>((acc, duration) => {
    const key = String(duration) as RentalPriceKey
    const price = prices[key]

    if (price !== undefined) {
      acc[key] = price
    }

    return acc
  }, {})
}

export function formatGreekUppercase(value: string) {
  return value
    .normalize('NFD')
    .replace(/\u0301/g, '')
    .toLocaleUpperCase('el-GR')
    .normalize('NFC')
}

export function getEquipmentCategoryCounts(items: EquipmentItem[]) {
  return equipmentCategoryKeys.map((categoryKey) => ({
    categoryKey,
    count: items.filter((item) => item.categories.includes(categoryKey)).length,
    ...equipmentCategories[categoryKey],
  }))
}

export function getAllEquipmentCount(items: EquipmentItem[]) {
  return items.filter((item) => !item.categories.includes('bundles')).length
}

export function filterEquipmentItems(items: EquipmentItem[], selectedCategory: EquipmentCategoryKey | null) {
  if (!selectedCategory) {
    return items.filter((item) => !item.categories.includes('bundles'))
  }

  return items.filter((item) => item.categories.includes(selectedCategory))
}

export function getEquipmentFilteredPageCount(items: EquipmentItem[], selectedCategory: EquipmentCategoryKey | null) {
  return Math.max(1, Math.ceil(filterEquipmentItems(items, selectedCategory).length / equipmentItemsPerPage))
}

export function formatEquipmentPrice(price: number | null) {
  return price === null ? 'Κατόπιν συνεννόησης' : priceFormatter.format(price)
}

export function getEquipmentPrice(item: Pick<EquipmentItem, 'prices'>, duration: RentalPriceDuration) {
  const key = String(duration) as RentalPriceKey
  return item.prices[key] ?? null
}

export function getEquipmentPriceEntries(item: Pick<EquipmentItem, 'prices'>) {
  return rentalPriceDurations.map((duration) => ({
    duration,
    price: getEquipmentPrice(item, duration),
  }))
}

export function getEquipmentPagePath(page: number) {
  return page <= 1 ? '/rentals' : `/rentals/page/${page}`
}

export function getEquipmentItemsForPage(
  items: EquipmentItem[],
  page: number,
  selectedCategory: EquipmentCategoryKey | null,
) {
  const filteredItems = filterEquipmentItems(items, selectedCategory)
  const start = (page - 1) * equipmentItemsPerPage
  return filteredItems.slice(start, start + equipmentItemsPerPage)
}

export function getRelatedEquipmentItems(items: EquipmentItem[], item: EquipmentItem, limit = 3) {
  const itemCategories = new Set(item.categories)

  return items
    .filter((entry) => entry.slug !== item.slug)
    .map((entry) => ({
      entry,
      overlap: entry.categories.filter((category) => itemCategories.has(category)).length,
    }))
    .filter(({ overlap }) => overlap > 0)
    .sort((left, right) => right.overlap - left.overlap || left.entry.order - right.entry.order)
    .slice(0, limit)
    .map(({ entry }) => entry)
}
