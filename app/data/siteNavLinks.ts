export type NavLink = {
  label: string
  to: string
  children?: Array<{ label: string; to: string }>
}

export const siteNavLinks: NavLink[] = [
  { label: 'Αρχική', to: '/' },
  { label: 'Νέα', to: '/news' },
  { label: 'Η δουλειά μας', to: '/projects' },
  { label: 'Ενοικίαση Εξοπλισμού', to: '/rentals' },
  { label: 'Επικοινωνία', to: '/contact' },
]
