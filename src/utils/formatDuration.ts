import { padStart } from 'lodash'

export function formatDuration(duration: number) {
  const isNegative = duration < 0

  const positiveDuration = Math.abs(duration)

  const seconds = Math.floor(positiveDuration) % 60
  const minutes = Math.floor(positiveDuration / 60) % 60
  const hours = Math.floor(positiveDuration / (60 * 60))

  let result = ''

  if (hours > 0) {
    result = [
      padStart(hours.toString(), 2, '0'),
      padStart(minutes.toString(), 2, '0'),
      padStart(seconds.toString(), 2, '0'),
    ].join(':')
  } else {
    result = [
      padStart(minutes.toString(), 2, '0'),
      padStart(seconds.toString(), 2, '0'),
    ].join(':')
  }

  return isNegative ? `-${result}` : result
}
