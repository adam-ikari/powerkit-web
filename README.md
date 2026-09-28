# powerkit-web

PowerKit 的公开站点（VitePress），部署到 GitHub Pages：
<https://adam-ikari.github.io/powerkit-web/>

程序本体闭源，源码不在这里——本仓库只有站点内容与 Pages 部署流水线。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173/powerkit-web/
npm run build    # 产出 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

## 结构

```
docs/
  .vitepress/
    config.mts            站点配置（base 必须是 /powerkit-web/）
    theme/index.ts        扩展默认主题，注册全局组件
    theme/components/     Downloads.vue：读站点仓库自己的 latest Release 列包
  index.md                首页（hero + 功能卡片）
  guide/                  功能详解 / 下载与安装 / 常见问题 / 关于
  public/.nojekyll        跳过 Pages 的 Jekyll 处理
.github/workflows/deploy.yml   build → upload-pages-artifact → deploy-pages
```

## 发布下载包

`Downloads.vue` 取的是**本仓库**的 `releases/latest`。正常路径不需要手工传：主仓库
`adam-ikari/powerkit` 打 `v*` 标签后，其 CI 的 `publish-site` 任务会把四份包同步到这里的
同名 Release（靠主仓库的 `WEB_RELEASE_TOKEN` secret，一个只授权本仓库写 Contents 的
fine-grained PAT）。文件名里的 `Setup`/`arm64` 决定页面上的「安装版/便携版」「x64/ARM64」文案。
