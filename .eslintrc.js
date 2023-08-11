module.exports = {
  root: true,
  extends: [
    "@react-native",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native"],
  parserOptions: {
    project: [
      "./tsconfig.json",
      "./App.tsx",
      "./babel.config.js",
      "./index.js",
      "./metro.config.js",
      "./services.js",
    ],
    requireConfigFile: false,
    ecmaVersion: "latest",
  },
  rules: {
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
  },
}
