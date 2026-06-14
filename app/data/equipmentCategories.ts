export const equipmentCategoryDefinitions = [
  {
    key: 'bundles',
    label: 'Bundles',
    description: 'Συνδυασμοί εξοπλισμού έτοιμοι για συγκεκριμένα είδη παραγωγής.',
    accent: '#20484d',
    surface: '#ebf2f1',
  },
  {
    key: 'cameras',
    label: 'Cameras',
    description: 'Camera bodies για φωτογραφία, video και υβριδική παραγωγή.',
    accent: '#20484d',
    surface: '#ebf2f1',
  },
  {
    key: 'lenses',
    label: 'Lenses',
    description: 'Prime και zoom φακοί για πορτρέτα, προϊόντα, interiors και video.',
    accent: '#5d4430',
    surface: '#f6efe8',
  },
  {
    key: 'lighting',
    label: 'Lighting',
    description: 'LED lights, modifiers και φωτιστικά εργαλεία για studio και location.',
    accent: '#b7681d',
    surface: '#fbefe2',
  },
  {
    key: 'audio',
    label: 'Sound',
    description: 'Μικρόφωνα και audio εργαλεία για καθαρές ηχογραφήσεις σε παραγωγές και συνεντεύξεις.',
    accent: '#46602b',
    surface: '#edf4e6',
  },
  {
    key: 'video',
    label: 'Video',
    description: 'Εργαλεία υποστήριξης video production, monitoring και κινηματογραφικής λήψης.',
    accent: '#5e4f74',
    surface: '#f0ecf7',
  },
  {
    key: 'film',
    label: 'Film',
    description: 'Φιλμ, διαφανή και ειδικά φίλτρα για έλεγχο φωτός και χαρακτήρα εικόνας.',
    accent: '#6a5a3d',
    surface: '#f4f0e7',
  },
  {
    key: 'filters',
    label: 'Filters',
    description: 'ND, diffusion και ειδικά φίλτρα για έλεγχο φωτός και χαρακτήρα εικόνας.',
    accent: '#6a5a3d',
    surface: '#f4f0e7',
  },
  {
    key: 'mediaPower',
    label: 'Power',
    description: 'Μπαταρίες, φορτιστές και απαραίτητη τροφοδοσία γυρίσματος.',
    accent: '#3b5e67',
    surface: '#e9f2f4',
  },
  {
    key: 'media',
    label: 'Media',
    description: 'Κάρτες μνήμης, adapters, και card readers.',
    accent: '#3b5e67',
    surface: '#e9f2f4',
  },
  {
    key: 'gripSupport',
    label: 'Grip & Support',
    description: 'Τρίποδα, stands και βοηθητικός εξοπλισμός για ασφαλές και ακριβές στήσιμο.',
    accent: '#4c4c4c',
    surface: '#efefef',
  },
  {
    key: 'stylingSet',
    label: 'Styling & Set Design',
    description: 'Props, backgrounds και στοιχεία set design για still life και branded λήψεις.',
    accent: '#7b4f57',
    surface: '#f7ecef',
  },
] as const

export type EquipmentCategoryDefinition = typeof equipmentCategoryDefinitions[number]
export type EquipmentCategoryKey = EquipmentCategoryDefinition['key']
export type EquipmentCategoryMeta = Omit<EquipmentCategoryDefinition, 'key'>

export const equipmentCategoryKeys = equipmentCategoryDefinitions.map(({ key }) => key) as [EquipmentCategoryKey, ...EquipmentCategoryKey[]]

export const equipmentCategories = Object.fromEntries(
  equipmentCategoryDefinitions.map(({ key, ...meta }) => [key, meta]),
) as Record<EquipmentCategoryKey, EquipmentCategoryMeta>
