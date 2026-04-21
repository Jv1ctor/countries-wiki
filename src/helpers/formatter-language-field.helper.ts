export const formatterLanguageField = (l?: Record<string, string>) => {
  if (!l) return ""

  return Object.values(l).join(", ")
}
