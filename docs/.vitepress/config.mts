import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/powerkit-web/',
  lang: 'zh-CN',
  title: 'PowerKit',
  description: 'Windows 11 电源管理工具箱：满电静置自动限充、摄像头感光自动亮度、托盘飞窗',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#2f81f7' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'PowerKit — Windows 11 电源管理工具箱' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'ThinkPad 满电静置自动限充 80%，摄像头当环境光传感器调亮度，纯 Rust 托盘小工具',
      },
    ],
  ],

  themeConfig: {
    nav: [
      { text: '功能', link: '/guide/features' },
      { text: '安装', link: '/guide/install' },
      { text: '常见问题', link: '/guide/faq' },
      { text: '关于', link: '/guide/about' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'PowerKit',
          items: [
            { text: '功能详解', link: '/guide/features' },
            { text: '下载与安装', link: '/guide/install' },
            { text: '常见问题', link: '/guide/faq' },
            { text: '关于与致谢', link: '/guide/about' },
          ],
        },
      ],
    },

    outline: { level: [2, 3], label: '本页目录' },

    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',

    footer: {
      message: 'PowerKit 为闭源发行；充电阈值接口桩基于 MIT 协议的 LenPwrCtl。',
      copyright: 'Copyright © 2026 PowerKit',
    },
  },
})
