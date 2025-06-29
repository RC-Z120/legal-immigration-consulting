# 部署指南

## 部署选项

### 1. Vercel (推荐)

Vercel 是 Next.js 官方推荐的部署平台，提供最佳的性能和开发体验。

#### 步骤：

1. **准备代码**
   ```bash
   # 确保代码已提交到 Git 仓库
   git add .
   git commit -m "准备部署"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的代码仓库

3. **配置项目**
   - 项目名称: `xindalaw-website`
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **环境变量** (可选)
   ```
   NODE_ENV=production
   ```

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得生产 URL

#### 自动部署
- 每次推送到 `main` 分支都会自动触发部署
- 可以设置预览部署用于测试

### 2. Netlify

Netlify 提供类似的服务，适合静态网站部署。

#### 步骤：

1. **构建配置**
   ```bash
   # 构建命令
   npm run build
   
   # 发布目录
   .next
   ```

2. **部署设置**
   - 连接 Git 仓库
   - 设置构建命令: `npm run build`
   - 设置发布目录: `.next`

### 3. 传统服务器部署

#### 使用 PM2

1. **安装 PM2**
   ```bash
   npm install -g pm2
   ```

2. **构建项目**
   ```bash
   npm run build
   ```

3. **启动服务**
   ```bash
   pm2 start npm --name "xindalaw-website" -- start
   ```

4. **配置 Nginx**
   ```nginx
   server {
       listen 80;
       server_name xindalaw.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 环境配置

### 生产环境变量

创建 `.env.production` 文件：

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://xindalaw.com
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

### 开发环境变量

创建 `.env.local` 文件：

```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 域名配置

### 1. 购买域名
- 推荐域名: `xindalaw.com`
- 备选域名: `xindalaw.ca`, `xindalaw.net`

### 2. DNS 配置

#### Vercel 部署
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: xindalaw.vercel.app
```

#### 传统服务器
```
Type: A
Name: @
Value: [你的服务器IP]

Type: CNAME
Name: www
Value: xindalaw.com
```

### 3. SSL 证书

#### Vercel/Netlify
- 自动提供 SSL 证书
- 无需额外配置

#### 传统服务器
```bash
# 使用 Let's Encrypt
sudo certbot --nginx -d xindalaw.com -d www.xindalaw.com
```

## 性能优化

### 1. 图片优化
- 使用 WebP 格式
- 压缩图片大小
- 使用 Next.js Image 组件

### 2. 代码分割
- 自动代码分割
- 懒加载组件
- 预加载关键资源

### 3. 缓存策略
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## 监控和分析

### 1. Google Analytics
```javascript
// 添加到 _app.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
```

### 2. 错误监控
```bash
npm install @sentry/nextjs
```

### 3. 性能监控
- Vercel Analytics
- Web Vitals
- Lighthouse CI

## 备份策略

### 1. 代码备份
- 使用 Git 版本控制
- 定期推送到远程仓库
- 设置自动备份

### 2. 数据备份
- 定期备份配置文件
- 备份用户数据
- 设置自动备份脚本

### 3. 恢复计划
```bash
# 恢复代码
git clone https://github.com/your-repo/xindalaw-website.git
cd xindalaw-website
npm install
npm run build
npm start
```

## 安全配置

### 1. 环境变量
- 不要提交敏感信息到代码仓库
- 使用环境变量存储密钥
- 定期轮换密钥

### 2. 安全头
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### 3. HTTPS 强制
```javascript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    if (request.headers.get('x-forwarded-proto') !== 'https') {
      return NextResponse.redirect(
        `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
        301
      )
    }
  }
  return NextResponse.next()
}
```

## 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 清理缓存
   rm -rf .next
   npm run build
   ```

2. **部署失败**
   - 检查环境变量
   - 查看构建日志
   - 验证依赖版本

3. **性能问题**
   - 检查图片大小
   - 优化代码分割
   - 启用缓存

### 联系支持

- Vercel 支持: [vercel.com/support](https://vercel.com/support)
- Next.js 文档: [nextjs.org/docs](https://nextjs.org/docs)
- 社区论坛: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

*部署完成后，请定期检查网站性能和安全性。* 