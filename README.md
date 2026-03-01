# 小不丢API 文档网站

这是小不丢API的完整文档网站，提供AI接口聚合管理服务的详细文档和API参考。

## 🌟 特性

- **完整的API文档**：包含417个文档，涵盖所有API接口和使用教程
- **扁平化导航**：清晰的文档分类结构，快速查找所需内容
- **夜间模式**：支持明暗主题切换，保护视力
- **响应式设计**：适配各种设备屏幕
- **Markdown渲染**：使用marked.js实时渲染文档内容
- **现代化UI**：采用渐变色设计，视觉效果出色

## 📁 项目结构

```
APIDoc/
├── index.html          # 首页
├── viewer.html         # 文档查看器
├── styles.css          # 样式文件
├── script.js           # 首页脚本
├── docs-loader.js      # 文档加载器和导航配置
├── images/             # 图片资源
│   └── 小不丢AI网站logo设计 (1).png
└── docs/               # 文档内容
    ├── Docs/           # 教程和说明文档（89个）
    └── API_Docs/       # API接口文档（328个）
```

## 🚀 快速开始

### 本地运行

1. 克隆或下载项目到本地

2. 在项目根目录启动本地服务器：

```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

3. 在浏览器中访问：
   - 首页：http://localhost:8000/APIDoc/index.html
   - 文档：http://localhost:8000/APIDoc/viewer.html

### 部署到生产环境

将 `APIDoc` 文件夹上传到你的 Web 服务器即可。

支持的服务器：
- Nginx
- Apache
- IIS
- 任何静态文件托管服务（如 GitHub Pages、Vercel、Netlify 等）

## 📚 文档分类

### 基础文档
- 引言
- 在线调试说明
- 发出请求
- 中转站基本介绍

### API 接口
- 聊天(Chat)
- 聊天(Responses)
- 系统API
- 绘画模型
- 视频模型
- 文生音乐Suno
- Rerank重排序模型

### 平台集成
- 可灵Kling平台
- 海螺Minimax平台
- vidu平台
- Replicate聚合平台
- Fal-ai聚合平台

### 开发教程
- Python配置方式
- nodejs配置方式
- php配置方式
- 各种插件/软件使用教程

### 其他
- GPTs相关
- 帮助中心

## 🎨 主题切换

网站支持明暗主题切换：
- 点击顶部导航栏的主题切换按钮（太阳/月亮图标）
- 主题选择会自动保存到浏览器本地存储

## 🔧 技术栈

- **HTML5**：页面结构
- **CSS3**：样式和动画
- **JavaScript (ES6+)**：交互逻辑
- **marked.js**：Markdown 渲染
- **LocalStorage**：主题持久化

## 📝 文档格式

所有文档使用 Markdown 格式编写，支持：
- 标题（H1-H6）
- 列表（有序/无序）
- 代码块（带语法高亮）
- 表格
- 链接和图片
- 引用块
- 粗体和斜体

## 🔗 相关链接

- **API 地址**：https://api.augmentproxy.com
- **立即登录**：https://api.augmentproxy.com/login
- **令牌管理**：https://api.augmentproxy.com/token
- **余额管理**：https://api.augmentproxy.com/topup

## 📄 许可证

© 2026 小不丢API. 保留所有权利.

## 🤝 支持

如有问题或建议，请联系客服。
