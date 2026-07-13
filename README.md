# 虚拟展厅建设平台调研报告

基于《廉花郑放·赓续清风——红色廉洁文化档案展》项目，对主流虚拟展厅平台进行系统性调研的单页 HTML 网站。

## 快速开始

双击 `index.html` 即可在浏览器中打开，无需安装任何依赖。

也可以部署到任意静态托管服务：

```bash
# GitHub Pages
git push origin main

# Vercel
vercel --prod
```

## 项目结构

```
├── index.html          # 单页完整网站（HTML + CSS + JavaScript）
├── images/             # 平台截图
│   ├── image1.png      # 星河元宇宙引擎 截图1
│   ├── image2.png      # 星河元宇宙引擎 截图2
│   ├── image3.jpeg     # 元美名片 截图1
│   ├── image4.png      # 元美名片 截图2
│   ├── image5.png      # 视创云展 截图1
│   ├── image6.png      # 视创云展 截图2
│   └── image7.png      # 视创云展 截图3
└── readme.md
```

## 页面结构

| 章节 | 内容 |
|---|---|
| Hero | 标题、副标题、项目简介、蓝色科技渐变背景 |
| 项目背景 | 项目简介 + 4 个统计卡片（含数字滚动动画） |
| 评价指标 | 6 大核心评估维度（展厅效果 / 交互体验 / 移动端适配 / 讲解能力 / 制作便捷性 / 开放程度） |
| 平台详情 | 3 张平台大卡片（星河元宇宙引擎 / 元美名片 / 视创云展），各含截图、评分、优劣势分析 |
| 综合对比 | 7 维度横向对比表格，高亮最佳平台 |
| 综合分析 | 3 栏卡片，每平台约 300 字适用性分析 |
| 最终推荐 | 视创云展推荐卡片 + 呼吸发光动画 |

## 功能特性

- 🌙 深色模式切换（localStorage 持久化）
- 🖼️ 截图灯箱预览（点击放大）
- ⬆️ 返回顶部按钮
- 📊 页面加载动画 + 滚动进度条
- 🎯 导航栏滚动吸附 + 当前章节高亮
- ✨ IntersectionObserver 滚动渐显动画
- 📱 完全响应式（PC / 平板 / 手机）
- ⌨️ ESC 关闭灯箱 / 移动端菜单

## 技术栈

纯原生 HTML + CSS + JavaScript，零框架、零依赖、零 CDN。

- CSS 变量驱动的主题系统
- `requestAnimationFrame` 合并滚动事件
- `IntersectionObserver` 驱动动画
- `easeOutCubic` 缓动数字动画

## 调研平台

| 平台 | 体验地址 |
|---|---|
| 星河元宇宙引擎（北师大） | [vr.chaoxing.com](https://vr.chaoxing.com/#/showCustomerSpace?id=NjE4NjI) |
| 元美名片 | [y.fozmoly.com](https://y.fozmoly.com/xhs/) |
| 视创云展 | [www.3dyunzhan.com](https://www.3dyunzhan.com/) |
| 视创云展案例：中国航天50周年 | [obs.3dyunzhan.com](https://obs.3dyunzhan.com/sceneFront/index.html?G_TEMP_ID=ef73e8053fad4115870d074143ce8abf) |
| 视创云展案例：党建100周年 | [meta.3dyunzhan.com](https://meta.3dyunzhan.com/view.html?G_TEMP_ID=ecfd0e88265849989cf3d3b1f1088601) |

## License

MIT
