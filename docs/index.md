---
layout: home

hero:
  name: PowerKit
  text: Windows 11 电源管理工具箱
  tagline: ThinkPad 满电静置自动限充、摄像头当环境光传感器调亮度——纯 Rust 托盘小工具，无 .NET、无 WebView、无运行时依赖
  actions:
    - theme: brand
      text: 下载 Windows 版
      link: /guide/install
    - theme: alt
      text: 功能详解
      link: /guide/features

features:
  - icon: 🔋
    title: 满电静置自动限充
    details: 电量充满后继续插电超过设定时长，自动把充电阈值降到 75%–80%；拔电即恢复默认策略。
    link: /guide/features
  - icon: 💡
    title: 摄像头感光自动亮度
    details: 用前置摄像头测环境光，按感知曲线映射到 20–100% 亮度；带防抖闸门，亮度不会来回抖。
    link: /guide/features
  - icon: 🌓
    title: 浅色 / 深色主题
    details: 默认跟随系统深浅色，也可在设置页固定；切换即时生效。
    link: /guide/features
  - icon: 🪟
    title: Win11 形态托盘飞窗
    details: 无边框飞窗固定右下角、跟随系统圆角，左键托盘图标即开，失焦自动收起。
    link: /guide/features
  - icon: 🧍
    title: 常驻约 27 MB
    details: 单进程：托盘 + 界面 + 监测循环，隐藏态工作集约 27 MB，显示态约 39 MB。
    link: /guide/faq
  - icon: 🛡️
    title: 免管理员权限
    details: 充电阈值走联想电源管理驱动的本地接口，配置写 HKCU，安装与运行都不弹 UAC。
    link: /guide/install
---
