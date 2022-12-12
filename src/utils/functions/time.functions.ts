const padTo2Digits = (num: number) => num.toString().padStart(2, "0")

export const formatDurationByMs = (time: number) => {
  let seconds = time / 1000
  let minutes = Math.floor(seconds / 60)

  seconds = seconds % 60
  minutes = seconds >= 60 ? minutes + 1 : minutes
  minutes = minutes % 60

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
}
