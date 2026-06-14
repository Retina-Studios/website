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

export type EquipmentDocument = {
  path: string
  title: string
  order: number
  categories: EquipmentCategoryKey[]
  summary: string
  images: string[]
  price1Day: number | null
  price3Days: number | null
  price7Days: number | null
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
  price1Day: number | null
  price3Days: number | null
  price7Days: number | null
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
    summary: document.summary,
    images: document.images,
    price1Day: document.price1Day,
    price3Days: document.price3Days,
    price7Days: document.price7Days,
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
