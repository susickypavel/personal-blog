import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Audiowide",
      styles: ["400"]
    }
  ],
  baseLineHeight: 1.666,
  headerFontFamily: ["Audiowide"],
  bodyFontFamily: ["Audiowide", "sans-serif"],
  includeNormalize: true,
  overrideStyles: () => {
    return {
      "h1, h2, h3, h4, h5, h6": {
        fontWeight: 500
      }
    }
  }
})

export default typography
