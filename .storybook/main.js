/* eslint-disable */
// @ts-ignore
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    './Introduction.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-react-i18next',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
