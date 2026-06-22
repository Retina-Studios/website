export function extractFirstSentence(text: string) {
  const normalized = text.replace(/\s+/g, ' ').trim()

  if (!normalized) {
    return ''
  }

  const match = normalized.match(/^.*?[.!?](?=\s|$)/)
  return match ? match[0].trim() : normalized
}

export function getContentSummary(document: Pick<{ description?: string, title: string }, 'description' | 'title'>) {
  const summary = extractFirstSentence(document.description ?? '')

  return summary || document.title
}
