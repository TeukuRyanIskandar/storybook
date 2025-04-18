/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/**/*.stories.ts'],
   staticDirs: ['../public'],
   addons: [
     '@storybook/addon-links',
     '@storybook/addon-essentials',
     '@storybook/addon-interactions',
   ],
   framework: {
     name: '@storybook/vue3-vite',
     options: {},
   },
 };
 export default config;