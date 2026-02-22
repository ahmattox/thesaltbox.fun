export function parseLooseTime(value: string) {
  const segments = value.split(':').map((segment) => segment.trim())

  if (segments.length != 2) {
    return null
  }

  let hours = parseInt(segments[0])
  const minutes = parseInt(segments[1])

  if (isNaN(hours) || isNaN(minutes)) {
    return null
  }

  if (value.toLowerCase().includes('p')) {
    hours += 12
  }

  return {
    hours,
    minutes,
  }
}
