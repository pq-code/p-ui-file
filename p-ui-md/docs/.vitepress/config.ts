import type { UserConfig } from 'vitepress';
import { mdPlugin } from './utils/mdPlugin';
export const config: UserConfig = {
  title: 'P-UI',
  description: 'vue3组件库',
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
    },
    nav: [
      { text: '文档', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/P-UI/pTabel', activeMatch: '/P-UI/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/pq-code/ui' }],
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          collapsible: true,
          items: [{ text: '安装', link: '/guide/home' }],
        },
      ],
      '/P-UI/': [
        {
          text: '二封组件',
          collapsible: true,
          items: [{ text: '表格', link: '/P-UI/pTabel' }],
        },
        {
          text: '新组件',
          collapsible: true,
          items: [{ text: '组件1', link: '/P-UI/home' }],
        },
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT vangleer and Vangle contributors',
    },
  },
};
export default config;
