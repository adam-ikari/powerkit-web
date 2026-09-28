# 关于与致谢

PowerKit 是一个 Windows 11 电源管理托盘工具，用 Rust 编写，界面基于 egui/eframe。

- **当前版本**：0.2.0（设置页「关于」页签显示的就是运行中程序的版本号）
- **版权**：© 2026 PowerKit · 保留所有权利
- **形态**：单进程托盘程序，无 .NET、无 WebView、无 VC++ 运行时依赖
- **权限**：不需要管理员权限，配置与自启项都写在 HKCU

## 许可与分发

程序**闭源发行**，源码仓库不公开。本站只提供安装版与便携版的下载说明，见
[下载与安装](/guide/install)。

## 第三方组件

充电阈值接口使用的 RPC 客户端桩来自 MIT 协议的开源项目
[LenPwrCtl](https://github.com/alandau/LenPwrCtl)（作者 Alan Lau），其文件头保留原始许可声明。
该桩由联想电源管理接口的 IDL 经 MIDL 生成，按 x64 / ARM64 各编一份。

## 硬件接口说明

自动限充调用的是本机联想电源管理驱动提供的本地接口，不经过网络，也不依赖 Vantage 运行；
亮度控制走 WMI 或 DDC/CI。你机器上的支持情况可以用 `powerkit.exe --selftest` 查（只读，
不会改任何设置）。
