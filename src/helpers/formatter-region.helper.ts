import type { Region } from "./get-region-style.helper"

export const formatterRegion = (r: string): Region => {
  const region = r.toLowerCase().trim()
  if (region === "north america") return "america"
  if (region === "south america") return "america"
  return region as Region
}
