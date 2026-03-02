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
  return snapshotManifest[path] ?? null
}
