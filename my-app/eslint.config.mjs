import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([ // ESLint 的配置定义辅助函数，提供类型提示
  ...nextVitals, // Next.js 的核心 Web 指标规则（性能相关
  ...nextTs, // Next.js 的 TypeScript 特定规则
  // Override default ignores of eslint-config-next.
  globalIgnores([ // 全局忽略文件/目录的配置函数
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
