my-blog/
├── app/                              # Next.js App Router
│   ├── (marketing)/                  # 营销页面路由组
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (blog)/                       # 博客主路由组
│   │   ├── _components/              # 博客专用组件（私有）
│   │   │   ├── BlogHeader/
│   │   │   │   ├── BlogHeader.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ArticleCard/
│   │   │   │   ├── ArticleCard.tsx
│   │   │   │   └── index.ts
│   │   │   ├── TableOfContents/
│   │   │   │   ├── TableOfContents.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ShareButtons/
│   │   │   │   ├── ShareButtons.tsx
│   │   │   │   └── index.ts
│   │   │   └── CodeBlock/
│   │   │       ├── CodeBlock.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── page.tsx                  # 博客首页 → /
│   │   ├── search/
│   │   │   └── page.tsx              # 搜索页面 → /search
│   │   └── layout.tsx                # 博客专用布局
│   │
│   ├── posts/                        # 文章详情页
│   │   ├── [slug]/                   # 动态路由
│   │   │   ├── page.tsx              # 文章详情页 → /posts/[slug]
│   │   │   └── opengraph-image.tsx   # OpenGraph 图片生成
│   │   └── page.tsx                  # 所有文章列表页 → /posts
│   │
│   ├── categories/                   # 分类页
│   │   ├── [category]/               # 动态路由
│   │   │   └── page.tsx              # 分类文章列表 → /categories/[category]
│   │   └── page.tsx                  # 全部分类页 → /categories
│   │
│   ├── tags/                         # 标签页
│   │   ├── [tag]/                    # 动态路由
│   │   │   └── page.tsx              # 标签文章列表 → /tags/[tag]
│   │   └── page.tsx                  # 全部标签页 → /tags
│   │
│   ├── archive/                      # 归档页
│   │   └── page.tsx                  # 时间归档 → /archive
│   │
│   ├── rss/                          # RSS 订阅
│   │   └── feed.xml/route.ts         # RSS 生成 → /rss/feed.xml
│   │
│   ├── admin/                        # 管理后台（可选）
│   │   ├── (dashboard)/             # 仪表板路由组
│   │   │   ├── posts/
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── [id]/edit/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   └── layout.tsx
│   │
│   ├── api/                          # API 路由
│   │   ├── posts/
│   │   │   ├── route.ts              # 文章相关 API
│   │   │   ├── [slug]/route.ts
│   │   │   └── search/route.ts
│   │   ├── comments/                 # 评论 API
│   │   │   └── route.ts
│   │   └── subscribe/                # 订阅 API
│   │       └── route.ts
│   │
│   ├── _components/                  # 全局共享组件（私有）
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── DesktopNav.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── ProfileCard.tsx
│   │   │   ├── RecentPosts.tsx
│   │   │   ├── Categories.tsx
│   │   │   └── index.ts
│   │   ├── ThemeToggle/
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   ├── BackToTop/
│   │   │   ├── BackToTop.tsx
│   │   │   └── index.ts
│   │   └── SearchBar/
│   │       ├── SearchBar.tsx
│   │       └── index.ts
│   │
│   ├── _ui/                          # 基础 UI 组件
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Tag/
│   │   ├── Loading/
│   │   └── ErrorBoundary/
│   │
│   ├── _hooks/                       # 自定义 Hooks
│   │   ├── useTheme.ts
│   │   ├── useScroll.ts
│   │   ├── useDebounce.ts
│   │   ├── usePosts.ts
│   │   └── useSearch.ts
│   │
│   ├── _lib/                         # 工具函数
│   │   ├── content/                  # 内容处理
│   │   │   ├── markdown.ts
│   │   │   ├── mdx.ts
│   │   │   └── syntaxHighlight.ts
│   │   ├── api/                      # API 客户端
│   │   │   └── client.ts
│   │   ├── utils/                    # 通用工具
│   │   │   ├── formatDate.ts
│   │   │   └── slugify.ts
│   │   └── config/                   # 配置
│   │       ├── site.ts
│   │       └── theme.ts
│   │
│   ├── _styles/                      # 样式文件
│   │   ├── globals.css
│   │   ├── theme.css
│   │   ├── markdown.css
│   │   └── prism.css
│   │
│   ├── layout.tsx                    # 根布局
│   ├── page.tsx                      # 首页（重定向到博客首页）
│   ├── not-found.tsx                 # 404 页面
│   ├── error.tsx                     # 错误页面
│   ├── loading.tsx                   # 加载状态
│   ├── sitemap.ts                    # 站点地图生成
│   └── robots.ts                     # robots.txt
│
├── content/                          # 博客内容（Markdown/MDX）
│   ├── posts/                        # 文章
│   │   ├── 2024-01-01-welcome.md
│   │   ├── 2024-01-15-nextjs-tips.md
│   │   └── 2024-02-01-react-hooks.md
│   ├── pages/                        # 静态页面
│   │   ├── about.md
│   │   └── contact.md
│   ├── config/                       # 内容配置
│   │   ├── authors.json
│   │   └── categories.json
│   └── assets/                       # 内容图片
│       └── posts/
│           └── 2024-01-01/
│               └── cover.jpg
│
├── public/                           # 静态资源
│   ├── images/                       # 图片资源
│   │   ├── avatar.jpg
│   │   ├── logo.png
│   │   └── favicon.ico
│   └── fonts/                        # 字体文件
│       └── custom-font.woff2
│
├── types/                           # TypeScript 类型定义
│   ├── post.ts
│   ├── category.ts
│   ├── comment.ts
│   └── global.d.ts
│
├── components.json                  # shadcn/ui 配置（如果使用）
├── next.config.ts                   # Next.js 配置
├── tailwind.config.ts              # Tailwind CSS 配置
├── postcss.config.js               # PostCSS 配置
├── package.json
└── README.md