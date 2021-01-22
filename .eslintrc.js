module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // "@react-native-community",
    // "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    // jest: true,
  },
  plugins: ["@babel", "react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/no-find-dom-node": "off",
  },
}
