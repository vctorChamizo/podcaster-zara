import { formatDurationByMs } from "utils/functions/time.functions"

export const manageDuration = (duration?: number | string) => {
  if (!duration) return "-"
  if (typeof duration === "string") return duration
  return formatDurationByMs(duration)
}
