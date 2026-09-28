# 下载与安装

<Downloads />

## 安装版

per-user 安装：装到 `%LOCALAPPDATA%\Programs\PowerKit`，全程不弹 UAC、不需要管理员权限。

- 开始菜单会创建 PowerKit 项，桌面图标可选（默认不勾）；
- 卸载时一并清掉配置注册表 `HKCU\Software\PowerKit`、开机自启项与 `%APPDATA%\PowerKit` 日志目录；
- 安装或卸载前请先从托盘退出正在运行的 PowerKit（程序占用会导致安装失败）。

## 便携版

解压后直接运行 `powerkit.exe` 即可，不写安装目录、不留卸载项；配置同样写在
`HKCU\Software\PowerKit`，所以便携版与安装版可以共用同一份设置。

## Windows on ARM

ARM 机（骁龙 X / 8cx 等）请取包名带 `arm64` 的两份。ARM64 包的安装器本体是 x64
（Inno Setup 目前还不产出原生 ARM64 的 Setup.exe），在 ARM 机上经转译运行，
装进去的 `powerkit.exe` 是原生 ARM64。

## 开机自启

设置页 →「通用」勾选「开机自动启动」，程序会写入
`HKCU\Software\Microsoft\Windows\CurrentVersion\Run`；取消勾选即移除。

## 先决条件

自动限充依赖**联想电源管理驱动**：设备管理器 → 系统设备 → `Lenovo Power and Battery`
（旧名 `Lenovo Power Manager`）。近年 ThinkPad（T / X / P / E 系列、部分 Legion）只要装过
Vantage 或联想电源管理驱动即可使用。

装好后运行一次自检，确认这台机器支持到什么程度（只读，不改任何设置）：

```powershell
powerkit.exe --selftest
```

它会分别报告：充电阈值接口、亮度控制通道（WMI / DDC/CI）、前置摄像头、机器自带光线感应器。
