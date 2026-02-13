# next-blog
next for personal blog

# 预期的 项目目录结构
my-large-app/
├── .next/                          # Next.js 构建输出（自动生成，gitignore）
├── .github/                        # GitHub Actions 工作流
├── .husky/                         # Git hooks
├── public/                         # 静态资源
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── favicon.ico
├── src/                            # 源代码目录（可选，但推荐）
│   ├── app/                        # App Router (Next.js 13.4+)
│   ├── pages/                      # Pages Router (旧版本/混合使用)
│   ├── components/                 # 可复用组件
│   ├── lib/                        # 工具库和配置
│   ├── hooks/                      # 自定义 React Hooks
│   ├── services/                   # API 服务和业务逻辑
│   ├── stores/                     # 状态管理
│   ├── types/                      # TypeScript 类型定义
│   ├── utils/                      # 工具函数
│   └── styles/                     # 全局样式
├── scripts/                        # 构建和部署脚本
├── tests/                          # 测试文件
├── docs/                           # 项目文档
├── cicd/                           # CI/CD 配置
├── .env.local                      # 本地环境变量
├── .env.production                 # 生产环境变量
├── next.config.js                  # Next.js 配置
├── tsconfig.json                   # TypeScript 配置
├── tailwind.config.js              # Tailwind CSS 配置
├── package.json
└── README.md

# App Router 结构
src/app/
├── globals.css                     # 全局样式
├── layout.tsx                      # 根布局
├── page.tsx                       # 首页 (/)
├── loading.tsx                    # 加载状态
├── error.tsx                      # 错误页面
├── not-found.tsx                  # 404 页面
├── api/                           # API 路由 (可选，也可放 pages/api)
│   └── auth/
│       └── route.ts
├── (auth)/                        # 路由组（不影响 URL）
│   ├── login/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── register/
│       └── page.tsx
├── dashboard/                     # 仪表板路由
│   ├── layout.tsx
│   ├── page.tsx
│   ├── analytics/
│   │   └── page.tsx
│   └── settings/
│       └── page.tsx
├── products/
│   ├── page.tsx
│   ├── loading.tsx
│   └── [id]/
│       ├── page.tsx
│       └── reviews/
│           └── page.tsx
└── blog/
    ├── page.tsx
    └── [slug]/
        └── page.tsx

# 组件目录结构
src/components/
├── ui/                            # 基础 UI 组件
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Input/
│   ├── Modal/
│   └── index.ts                   # 统一导出
├── forms/                         # 表单组件
│   ├── LoginForm/
│   ├── RegistrationForm/
│   └── ContactForm/
├── layout/                        # 布局组件
│   ├── Header/
│   ├── Footer/
│   ├── Sidebar/
│   └── Navigation/
├── business/                      # 业务组件
│   ├── ProductCard/
│   ├── UserProfile/
│   └── ShoppingCart/
└── shared/                        # 共享组件
    ├── LoadingSpinner/
    ├── ErrorBoundary/
    └── Pagination/

# 工具和配置目录
src/lib/
├── auth.ts                         # 认证配置
├── database.ts                     # 数据库连接
├── redis.ts                        # Redis 客户端
├── email.ts                        # 邮件服务
└── constants.ts                    # 应用常量

src/utils/
├── formatters/                     # 数据格式化
│   ├── date.ts
│   ├── currency.ts
│   └── string.ts
├── validators/                     # 数据验证
│   ├── schema.ts                   # Zod 等验证库
│   └── patterns.ts
├── helpers/                        # 辅助函数
│   ├── api.ts
│   ├── dom.ts
│   └── common.ts
└── index.ts                        # 统一导出

# API 服务层
src/services/
├── api/                           # API 客户端
│   ├── client.ts                  # Axios 实例配置
│   ├── interceptors.ts            # 请求拦截器
│   └── endpoints.ts               # API 端点定义
├── auth/                          # 认证服务
│   ├── auth.service.ts
│   └── types.ts
├── user/                          # 用户服务
│   ├── user.service.ts
│   └── user.types.ts
├── product/                       # 产品服务
│   ├── product.service.ts
│   └── product.types.ts
├── order/                         # 订单服务
│   ├── order.service.ts
│   └── order.types.ts
└── index.ts                       # 服务统一导出

# 状态管理
src/stores/
├── auth.store.ts                   # 认证状态
├── user.store.ts                   # 用户状态
├── cart.store.ts                   # 购物车状态
├── ui.store.ts                     # UI 状态
└── index.ts                        # Store 组合

# 类型定义
src/types/
├── api/                           # API 相关类型
│   ├── response.ts
│   └── request.ts
├── domain/                        # 领域模型
│   ├── user.ts
│   ├── product.ts
│   └── order.ts
├── components/                    # 组件 Props 类型
│   ├── ui.ts
│   └── forms.ts
└── global.d.ts                    # 全局类型声明

# 样式和主题
src/styles/
├── globals.css                    # 全局样式
├── components/                    # 组件样式
│   ├── button.css
│   └── input.css
├── themes/                        # 主题配置
│   ├── light.css
│   └── dark.css
└── utils/                         # CSS 工具类
    ├── variables.css              # CSS 变量
    └── mixins.css

    
