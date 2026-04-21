type Currency = Record<
  string,
  {
    name: string
    symbol: string
  }
>

export const formatterCurrencyFields = (c?: Currency) => {
  if (!c) return ""

  const objs: { name: string; symbol: string }[] = Object.values(c)
  const code = Object.keys(c)

  const result: string[] = []
  for (let i = 0; i < objs.length; i++) {
    result.push(`${objs[i].name} - ${code[i]} - ${objs[i].symbol}`)
  }

  return result.join(', ')
}
