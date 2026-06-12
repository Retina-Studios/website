import equipmentCatalogCsv from './Retina Studios - Equipment.csv?raw'

export type EquipmentCategoryKey =
  | 'cameras'
  | 'lenses'
  | 'lighting'
  | 'audio'
  | 'video'
  | 'filters'
  | 'mediaPower'
  | 'gripSupport'
  | 'stylingSet'

export type EquipmentCategoryMeta = {
  label: string
  description: string
  accent: string
  surface: string
}

export type EquipmentItem = {
  name: string
  slug: string
  categoryKey: EquipmentCategoryKey
  description: string
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function parsePrice(value: string) {
  const trimmedValue = value.trim()
  return trimmedValue ? Number(trimmedValue) : null
}

function parseEquipmentCatalog() {
  return equipmentCatalogCsv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => line.split(';').map((value) => value.trim()))
    .filter((parts) => parts.length === 7 && parts[0])
    .map(([name, category, description, image, oneDay, threeDays, sevenDays]) => {
      if (!(category in equipmentCategories)) {
        throw new Error(`Unknown equipment category "${category}" for "${name}"`)
      }

      return {
        name,
        slug: slugify(name),
        categoryKey: category as EquipmentCategoryKey,
        description,
        image,
        price1Day: parsePrice(oneDay),
        price3Days: parsePrice(threeDays),
        price7Days: parsePrice(sevenDays),
      }
    })
}

export const equipmentItems: EquipmentItem[] = parseEquipmentCatalog()

export const equipmentPageCount = Math.ceil(equipmentItems.length / equipmentItemsPerPage)

export const equipmentCategoryCounts = Object.entries(
  equipmentItems.reduce(
    (counts, item) => {
      counts[item.categoryKey] += 1
      return counts
    },
    {
      cameras: 0,
      lenses: 0,
      lighting: 0,
      audio: 0,
      video: 0,
      filters: 0,
      mediaPower: 0,
      gripSupport: 0,
      stylingSet: 0,
    } as Record<EquipmentCategoryKey, number>,
  ),
).map(([categoryKey, count]) => ({
  categoryKey: categoryKey as EquipmentCategoryKey,
  count,
  ...equipmentCategories[categoryKey as EquipmentCategoryKey],
}))

export function formatEquipmentPrice(price: number | null) {
  return price === null ? 'Κατόπιν συνεννόησης' : priceFormatter.format(price)
}

export function getEquipmentPagePath(page: number) {
  return page <= 1 ? '/rentals' : `/rentals/page/${page}`
}

export function getEquipmentItemsForPage(page: number) {
  const start = (page - 1) * equipmentItemsPerPage
  return equipmentItems.slice(start, start + equipmentItemsPerPage)
}

export function getEquipmentItemBySlug(slug: string) {
  return equipmentItems.find((item) => item.slug === slug) ?? null
}

export function getRelatedEquipmentItems(item: EquipmentItem, limit = 3) {
  return equipmentItems
    .filter((entry) => entry.categoryKey === item.categoryKey && entry.slug !== item.slug)
    .slice(0, limit)
}
