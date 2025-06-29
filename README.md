# 信达法律移民咨询网站

基于信雅国际教育科技集团网站模板创建的专业法律移民咨询公司网站。

## 项目特点

- 🎨 现代化响应式设计
- ⚡ 基于 Next.js 14 和 React 18
- 🎯 专业的移民法律服务展示
- 📱 移动端友好
- 🔍 SEO 优化
- 🚀 快速加载

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **字体**: Inter

## 功能模块

### 1. 首页 (Hero Section)
- 公司介绍和核心价值主张
- 统计数据展示
- 行动号召按钮

### 2. 服务项目 (Services)
- 签证申请服务
- 移民规划咨询
- 法律咨询服务
- 海外生活服务
- 身份恢复服务
- 永居入籍服务

### 3. 关于我们 (About)
- 公司介绍
- 核心优势
- 统计数据

### 4. 服务流程 (Process)
- 四步服务流程
- 清晰的步骤说明

### 5. 客户评价 (Testimonials)
- 真实客户反馈
- 成功案例展示

### 6. 联系我们 (Contact)
- 联系信息
- 在线咨询表单
- 社交媒体链接

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── Header.tsx         # 网站头部
│   ├── Hero.tsx           # 英雄区域
│   ├── Services.tsx       # 服务项目
│   ├── About.tsx          # 关于我们
│   ├── Process.tsx        # 服务流程
│   ├── Testimonials.tsx   # 客户评价
│   ├── Contact.tsx        # 联系我们
│   └── Footer.tsx         # 网站底部
├── public/                # 静态资源
├── tailwind.config.js     # Tailwind 配置
├── next.config.js         # Next.js 配置
└── package.json           # 项目依赖
```

## 自定义配置

### 修改公司信息

在 `app/layout.tsx` 中修改网站的元数据：

```typescript
export const metadata: Metadata = {
  title: '您的公司名称 - 专业移民法律服务',
  description: '您的公司描述',
  keywords: '您的关键词',
}
```

### 修改联系信息

在各个组件中更新联系信息：

- 电话号码
- 邮箱地址
- 公司地址
- 营业时间

### 修改颜色主题

在 `tailwind.config.js` 中自定义颜色：

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 其他色阶
  }
}
```

## 部署

### Vercel 部署 (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

项目可以部署到任何支持 Node.js 的平台：

- Netlify
- Railway
- DigitalOcean
- AWS
- 阿里云
- 腾讯云

## 维护建议

### 内容更新

1. **服务项目**: 在 `components/Services.tsx` 中更新服务内容
2. **客户评价**: 在 `components/Testimonials.tsx` 中添加新的客户反馈
3. **联系信息**: 在各个组件中更新最新的联系信息
4. **统计数据**: 定期更新成功案例数量和成功率等数据

### SEO 优化

1. 更新页面标题和描述
2. 添加结构化数据
3. 优化图片 alt 属性
4. 添加 sitemap.xml
5. 配置 robots.txt

### 性能优化

1. 图片优化和压缩
2. 代码分割
3. 缓存策略
4. CDN 配置

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系开发团队。 