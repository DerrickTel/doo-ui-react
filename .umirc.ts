import { defineConfig } from 'dumi';

const env = process.env.NODE_ENV;

export default defineConfig({
  title: 'doo-ui-react',
  exportStatic: {},
  favicon: env === 'production' ? '/doo-ui-react/favicon.png' : '/favicon.png',
  logo: env === 'production' ? '/doo-ui-react/logo.png' : '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/doo-ui-react/',
  publicPath:
    env === 'production'
      ? 'https://derricktel.github.io/doo-ui-react/'
      : undefined,
  navs: [
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/DerrickTel/doo-ui-react',
    },
  ],
  // more config: https://d.umijs.org/config
});
