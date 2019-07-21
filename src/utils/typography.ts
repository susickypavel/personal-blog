import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["300", "400", "500", "600", "700"]
    }
  ],
  baseLineHeight: 1.666,
  headerFontFamily: ["Open Sans"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  includeNormalize: true
})

export default typography
