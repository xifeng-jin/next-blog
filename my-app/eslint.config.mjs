import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from 'eslint-plugin-import';
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
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "@/components/**",
              group: "internal",
            },
            {
              pattern: "./*.css",
              group: "sibling",
              position: "after",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  // 通用导入规则
  // {
  //   files:["**/*.{js,jsx,ts,tsx}"],
  //   plugins:{
  //     import: importPlugin
  //   },
  //   rules: importOrderConfig.rules,
  //   settings: importOrderConfig.settings,
  // }
]);

export default eslintConfig;
