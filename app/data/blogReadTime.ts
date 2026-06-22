export function formatBlogReadTimeLabel(label: string) {
  const minutesMatch = label.match(/\d+/)

  if (!minutesMatch) {
    return label
  }

  const minutes = Number.parseInt(minutesMatch[0], 10)

  if (!Number.isFinite(minutes) || minutes <= 0) {
    return label
  }

  const minuteLabel = minutes === 1 ? 'λεπτό' : 'λεπτά'
  return `Χρόνος ανάγνωσης: ${minutes} ${minuteLabel}`
}
