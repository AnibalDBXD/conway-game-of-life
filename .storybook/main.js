module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "typescript": {
      "reactDocgen": "none",
      "reactDocgenTypescriptOptions": {
          "compilerOptions": {
              "allowSyntheticDefaultImports": true,
              "esModuleInterop": false
          }
      }
  },
  "babel": async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
}
}