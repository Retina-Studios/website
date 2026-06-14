export const equipmentCategoryKeys = [
  'bundles',
  'cameras',
  'lenses',
  'lighting',
  'audio',
  'video',
  'filters',
  'mediaPower',
  'gripSupport',
  'stylingSet',
] as const

export type EquipmentCategoryKey = typeof equipmentCategoryKeys[number]

export type EquipmentCategoryMeta = {
  label: string
  description: string
  accent: string
  surface: string
}

export type EquipmentDocument = {
  path: string
  title: string
  order: number
  categories: EquipmentCategoryKey[]
  summary: string
  image: string
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
  image: string
  price1Day: number | null
  price3Days: number | null
  price7Days: number | null
}

const priceFormatter = new Intl.NumberFormat('el-GR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export const equipmentCategories: Record<EquipmentCategoryKey, EquipmentCategoryMeta> = {
  bundles: {
    label: 'Πακέτα',
    description: 'Έτοιμα πακέτα εξοπλισμού με συνδυαστική έκπτωση για ολοκληρωμένα production setups.',
    accent: '#7c1f2b',
    surface: '#f5d9dd',
  },
  cameras: {
    label: 'Κάμερες',
    description: 'Bodies για studio shoots, interviews, podcasts και παραγωγές πεδίου.',
    accent: '#0f3d3e',
    surface: '#d9f2f0',
  },
  lenses: {
    label: 'Φακοί',
    description: 'Zoom, prime και macro επιλογές για φωτογραφία, video και κινηματογραφική χρήση.',
    accent: '#4d3522',
    surface: '#f1dfd0',
  },
  lighting: {
    label: 'Φωτισμός',
    description: 'Continuous lights, flashes και modifiers για ελεγχόμενο φως σε κάθε setup.',
    accent: '#7a4710',
    surface: '#fbe3c5',
  },
  audio: {
    label: 'Ήχος',
    description: 'Μικρόφωνα και recorders για καθαρές συνεντεύξεις, podcasts και location sound.',
    accent: '#1b2a5b',
    surface: '#dbe2ff',
  },
  video: {
    label: 'Video Assist',
    description: 'Monitoring, wireless video, teleprompter και motion tools για πιο άνετο γύρισμα.',
    accent: '#61214d',
    surface: '#f4d7ea',
  },
  filters: {
    label: 'Φίλτρα & Adapters',
    description: 'ND, diffusion, polarizers και adapters για μεγαλύτερο έλεγχο στην εικόνα.',
    accent: '#35512f',
    surface: '#dcede0',
  },
  mediaPower: {
    label: 'Media & Power',
    description: 'Μπαταρίες, κάρτες και αποθηκευτικά μέσα για να μείνει το γύρισμα online.',
    accent: '#303030',
    surface: '#e6e6e6',
  },
  gripSupport: {
    label: 'Grip & Support',
    description: 'Stands, rigs, clamps και support gear για ασφαλές και λειτουργικό setup.',
    accent: '#5a2d1b',
    surface: '#f3d5c8',
  },
  stylingSet: {
    label: 'Styling & Set',
    description: 'Set support, styling εργαλεία και βοηθητικά αξεσουάρ για οργανωμένη παραγωγή.',
    accent: '#5f5a18',
    surface: '#f5efbf',
  },
}

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
    image: document.image,
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
