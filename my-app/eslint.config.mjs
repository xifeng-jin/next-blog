import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import importOrderConfig from "./import-order.config.mjs";

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
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      // 1. 未使用的导入 - 红色错误
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",  // 改为 error
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
      
      // 2. console 检查 - 红色错误
      "no-console": "error",
      
      ...importOrderConfig.rules,
    },
    settings: importOrderConfig.settings,
  },
]);

export default eslintConfig;
