export type NavLink = {
  label: string
  to: string
  children?: Array<{ label: string; to: string }>
}

export const siteNavLinks: NavLink[] = [
  { label: 'Αρχική', to: '/' },
  { label: 'Νέα', to: '/news' },
  { label: 'Υπηρεσίες', to: '/services' },
  { label: 'Η δουλειά μας', to: '/work' },
  {
    label: 'Δημιουργικά project',
    to: '/projects',
    children: [
      { label: 'Παραγωγές ταινιών', to: '/film-productions' },
      { label: 'Φωτογραφίσεις "Vignettes"', to: '/projects/vignettes' },
      { label: 'Μουσικά Retina Sessions', to: '/retina-sessions' },
    ],
  },
  { label: 'Το στούντιο', to: '/studior1' },
  { label: 'Ποιοι είμαστε', to: '/aboutus' },
  { label: 'Επικοινωνία', to: '/contact' },
]
