export type Region = "europe" | "asia" | "america" | "africa" | "oceania"

interface RegionStyle {
  background: string
  color: string
}

export const getRegionStyle = (region: Region): RegionStyle => {
  switch (region) {
    case "europe":
      return {
        background: "#E6F0FF",
        color: "#1D4ED8",
      }

    case "asia":
      return {
        background: "#FEE2E2",
        color: "#B91C1C",
      }

    case "america":
      return {
        background: "#DCFCE7",
        color: "#166534",
      }

    case "africa":
      return {
        background: "#FEF3C7",
        color: "#92400E",
      }

    case "oceania":
      return {
        background: "#E0E7FF",
        color: "#3730A3",
      }

    default:
      return {
        background: "#F3F4F6",
        color: "#374151",
      }
  }
}
