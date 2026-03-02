export type SnapshotEntry = {
  path: string
  title: string
  snapshotPath: string
  template: 'standard' | 'blog-post'
}

export const snapshotManifest: Record<string, SnapshotEntry> = {
  '/': {
    path: '/',
    title: 'Retina Studios | Homepage',
    snapshotPath: '/wix-snapshots/index.html',
    template: 'standard',
  },
  '/services': {
    path: '/services',
    title: 'Retina Studios | Services',
    snapshotPath: '/wix-snapshots/services.html',
    template: 'standard',
  },
  '/aboutus': {
    path: '/aboutus',
    title: 'Ποιοι είμαστε | Retina Studios',
    snapshotPath: '/wix-snapshots/aboutus.html',
    template: 'standard',
  },
  '/work': {
    path: '/work',
    title: 'Η δουλειά μας | Retina Studios',
    snapshotPath: '/wix-snapshots/work.html',
    template: 'standard',
  },
  '/contact': {
    path: '/contact',
    title: 'Επικοινωνία | Retina Studios',
    snapshotPath: '/wix-snapshots/contact.html',
    template: 'standard',
  },
  '/projects': {
    path: '/projects',
    title: 'Δημιουργικά project | Retina Studios',
    snapshotPath: '/wix-snapshots/projects.html',
    template: 'standard',
  },
  '/projects/vignettes': {
    path: '/projects/vignettes',
    title: 'Φωτογραφίσεις "Vignettes" | Retina Studios',
    snapshotPath: '/wix-snapshots/projects-vignettes.html',
    template: 'standard',
  },
  '/retina-sessions': {
    path: '/retina-sessions',
    title: 'Μουσικά Retina Sessions | Retina Studios',
    snapshotPath: '/wix-snapshots/retina-sessions.html',
    template: 'standard',
  },
  '/studior1': {
    path: '/studior1',
    title: 'Το στούντιο | Retina Studios',
    snapshotPath: '/wix-snapshots/studior1.html',
    template: 'standard',
  },
  '/blog': {
    path: '/blog',
    title: 'Νέα | Retina Studios',
    snapshotPath: '/wix-snapshots/blog.html',
    template: 'standard',
  },
  '/product-photography': {
    path: '/product-photography',
    title: 'Φωτογράφιση Καταλόγου | Retina Studios',
    snapshotPath: '/wix-snapshots/product-photography.html',
    template: 'standard',
  },
  '/παραγωγές-ταινιών': {
    path: '/παραγωγές-ταινιών',
    title: 'Productions | Retina Studios',
    snapshotPath: '/wix-snapshots/paragoges-tainiwn.html',
    template: 'standard',
  },
  '/projects/vignettes/cowgirl': {
    path: '/projects/vignettes/cowgirl',
    title: 'Cowgirl | Retina Studios',
    snapshotPath: '/wix-snapshots/projects-vignettes-cowgirl.html',
    template: 'standard',
  },
  '/projects/vignettes/peakyblinders': {
    path: '/projects/vignettes/peakyblinders',
    title: 'Peaky Blinders | Retina Studios',
    snapshotPath: '/wix-snapshots/projects-vignettes-peakyblinders.html',
    template: 'standard',
  },
  '/projects/vignettes/retro-retina': {
    path: '/projects/vignettes/retro-retina',
    title: 'Retro Retina | Retina Studios',
    snapshotPath: '/wix-snapshots/projects-vignettes-retro-retina.html',
    template: 'standard',
  },
  '/projects/vignettes/sweet-pin-up': {
    path: '/projects/vignettes/sweet-pin-up',
    title: 'Sweet Pin-up | Retina Studios',
    snapshotPath: '/wix-snapshots/projects-vignettes-sweet-pin-up.html',
    template: 'standard',
  },
  '/post/white-night-2025': {
    path: '/post/white-night-2025',
    title: 'Λευκή Νύχτα 2025',
    snapshotPath: '/wix-snapshots/post-white-night-2025.html',
    template: 'blog-post',
  },
  '/post/retina-at-disff-2025': {
    path: '/post/retina-at-disff-2025',
    title: 'H Retina στο DISFF 2025',
    snapshotPath: '/wix-snapshots/post-retina-at-disff-2025.html',
    template: 'blog-post',
  },
  '/post/ευχαριστούμε-που-ήσασταν-εκεί': {
    path: '/post/ευχαριστούμε-που-ήσασταν-εκεί',
    title: 'Ευχαριστούμε που ήσασταν εκεί!',
    snapshotPath: '/wix-snapshots/post-eyxaristoume-pou-isastan-ekei.html',
    template: 'blog-post',
  },
}

export function getSnapshot(path: string): SnapshotEntry | null {
  const direct = snapshotManifest[path]
  if (direct) {
    return direct
  }

  try {
    const decoded = decodeURI(path)
    if (snapshotManifest[decoded]) {
      return snapshotManifest[decoded]
    }

    const encoded = encodeURI(path)
    if (snapshotManifest[encoded]) {
      return snapshotManifest[encoded]
    }
  } catch {
    return null
  }

  return null
}
