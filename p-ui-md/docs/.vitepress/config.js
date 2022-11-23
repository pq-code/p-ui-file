module.exports = {
    title: 'P-UI',
    description: 'vue3组件库',
    search: true,
    siteTitle: false,
    themeConfig: {
        nav: [
            { text: "文档", link: "/P-UI/article/home" },
            { text: '组件', link: '/P-UI/component/home' },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/pq-code/ui" }],
        sidebar: {
            '/component/': [
                {
                    text: '组件',
                    children: [
                        { text: '表格', link: '/P-UI/component/pTabel' },
                    ],
                },
            ],
        },
    },
}
