const padTo2Digits = (num: number) => num.toString().padStart(2, "0")

export const formatDurationByMs = (duration: number) => {
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? 0 + hours : hours
  minutes = minutes < 10 ? 0 + minutes : minutes
  seconds = seconds < 10 ? 0 + seconds : seconds

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
}
