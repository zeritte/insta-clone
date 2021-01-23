module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "plugin:react-hooks/recommended"
  ],
  rules: { "no-alert": "off", "react/prop-types": "off", "react/display-name": "off" }
};
