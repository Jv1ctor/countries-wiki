export const formatterNumber = (n: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
  })

  return formatter.format(n).toUpperCase()
}
