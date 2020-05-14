export function formatVideoTime(time) {
  time /= 1000
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor((time % 3600) / 60)
  const hours = Math.floor(time / 3600)
  const secondStr = seconds > 9 ? seconds : `0${seconds}`
  const minuteStr = minutes > 9 ? minutes : `0${minutes}`
  const hourStr = hours > 9 ? hours : `0${hours}`

  if (hours) {
    return `${hourStr}:${minuteStr}:${secondStr}`
  }

  return `${minuteStr}:${secondStr}`
}

