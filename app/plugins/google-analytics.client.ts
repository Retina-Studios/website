declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function ensureGoogleAnalytics(measurementId: string) {
  if (!document.querySelector(`script[src*="${measurementId}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
  }

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
  })
}

function trackPageView(measurementId: string, pagePath: string) {
  if (typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    send_to: measurementId,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  const { public: publicConfig } = useRuntimeConfig()
  const router = useRouter()
  const measurementId = publicConfig.googleAnalyticsMeasurementId

  if (!measurementId) {
    console.warn('Google Analytics is disabled because no measurement ID is configured.')
    return
  }

  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) {
    console.warn(`Google Analytics is disabled because "${measurementId}" is not a valid GA4 measurement ID.`)
    return
  }

  ensureGoogleAnalytics(measurementId)

  nuxtApp.hook('page:finish', () => {
    trackPageView(measurementId, router.currentRoute.value.fullPath)
  })
})
