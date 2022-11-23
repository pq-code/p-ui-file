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
      { text: '文档', link: '/P-UI/article/home' },
      { text: '组件', link: '/P-UI/component/home' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/pq-code/ui' }],
    sidebar: {
      '/component/': [
        {
          text: '组件',
          children: [{ text: '表格', link: '/P-UI/component/pTabel' }],
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
