module.exports = {
  root: true,
  extends: [
    "@react-native",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native"],
  parserOptions: {
    project: [
      "./tsconfig.json",
      //   "./App.tsx",
      //   "./babel.config.js",
      //   "./index.js",
      //   "./metro.config.js",
      //   "./services.js",
    ],
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
  },
}
