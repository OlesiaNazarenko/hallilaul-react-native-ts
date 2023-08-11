/* eslint-disable global-require */
import { Theme } from "src/redux/theme/themeReducer"

export const currentScreenBackground = (theme: Theme) =>
  theme.name === "Dark"
    ? require("@assets/images/bgDarkMode.png")
    : require("@assets/images/bgLightMode.png")
