
# VPage

VPage 是一个轻量级的单页应用模板项目，主要基于 `petite-vue` 和 `tailwindcss-jit-cdn` 构建，专为快速创建线上活动、节日祝福、企业资讯等单页设计。
模板内置基本的 JavaScript 库和工具函数，为设计和调试提供便捷，请根据实际项目需求进行增加或替换。

## 功能特点

- **模块化开发**：代码分离，便于维护和扩展
- **快速样式开发**：集成 Tailwind CSS 和 JIT 模式
- **动态数据模拟**：使用 Mock.js 和 Mock-SVG 生成模拟数据
- **简洁易用**：仅需轻量级依赖即可快速搭建 SPA

## 安装与运行

1. 作为模板新建项目：  
   ```bash
   git clone https://gitee.com/wavef/vpage.git <你的项目名称>
   cd <你的项目目录>
   ```
2. 安装依赖：  
   ```bash
   pnpm install
   ```
3. 启动开发服务器：  
   ```bash
   pnpm run dev
   ```
4. 构建生产环境版本：  
   ```bash
   pnpm run build
   ```

## 使用说明
1. 修改 `src/main.js` 以添加页面逻辑 
2. 更新 `src/style.css` 以自定义样式 
3. 配置 `public/config.json` 是作为静态配置数据的示例
4. 修改 `src/data.js` 是作为数据需要编译的示例


## 目录结构

```plaintext
.
├── LICENSE                     # 许可证
├── README.md                   # 项目说明文件
├── dist                        # 构建后的生产环境文件
│   ├── assets                  # 静态资源
│   ├── favicon.svg             # 网站图标
│   ├── images                  # 图片资源
│   ├── index.html              # 入口文件
│   └── js                      # 外部脚本
├── index.html                  # 开发环境入口文件
├── node_modules                # 项目依赖
├── package.json                # 项目配置
├── pnpm-lock.yaml              # 包管理器锁文件
├── public                      # 公共文件夹
│   ├── config.json             # 配置文件
│   ├── favicon.svg             # 网站图标
│   ├── images                  # 图片资源
│   └── js                      # 外部脚本
└── src                         # 源代码
    ├── data.js                 # 模拟数据
    ├── main.js                 # 主程序入口
    ├── style.css               # 全局样式
    ├── tailwind.config.js      # Tailwind CSS 配置文件
    └── utils.js                # 工具函数
```

## 核心库

- [petite-vue](https://github.com/vuejs/petite-vue) - 轻量级 Vue.js 框架
- [tailwindcss-jit-cdn](https://beyondco.de/blog/tailwind-jit-compiler-via-cdn) - 基于 JIT 的 Tailwindcss CDN版本
- [Mock.js](http://mockjs.com/) - 数据模拟库
- [Mock-SVG](https://www.npmjs.com/package/mock-svg) - 动态生成 SVG 图片
- [RemixIcon](https://github.com/Remix-Design/RemixIcon) - 开源图标库

### 工具函数

#### 获取 JSON 数据

`getJson(jsonPath)`：从指定路径加载 JSON 数据

#### 简易 CSS 压缩

`minifyCSS(css)`：对 CSS 内容进行基本压缩

## 开源许可证

本项目采用 [MIT License](./LICENSE) 许可证