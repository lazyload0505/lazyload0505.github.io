module.exports = {
    base: "/",
    title: "码农王小胖",
    description: "记录成长 记录美好",
    theme: "reco",
    themeConfig: {
        type: "blog",
        huawei: false,
        authorAvatar: "/tim.jpg",
        sidebar: "auto",
        author: '码农王小胖',
        nav: [
            { text: '首页', link: '/' },
            { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
            { text: '关于小胖', link: '/aboutme' }
        ],
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            }
        },
        vssueConfig: {
            platform: 'github',
            owner: 'lazyload0505',
            repo: 'lazyload0505.github.io',
            clientId: '',
            clientSecret: '',
        },
        markdown: {
            lineNumbers: true
        },
    },

    plugins: [
        "@vuepress-reco/vuepress-plugin-pagation",
        "@vuepress-reco/vuepress-plugin-screenfull"]
}