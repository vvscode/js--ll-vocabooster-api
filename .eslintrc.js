module.exports = {
  extends: "google",
  plugins: ["node"],
  extends: ["eslint:recommended", "plugin:node/recommended"],
  rules: {
    "node/exports-style": ["error", "module.exports"],
    "no-console": "off"
  }
};
