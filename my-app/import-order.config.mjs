
// 准备实现 import 的导入规则

// 依赖包
// npm i eslint-plugin-import typescript-eslint/parser --save-dev
// ctrl +shift + p => 输入 ESLint:Restart ESLint Server

const importOrderConfig =  {
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
          // 排除不参与的
          pathGroupsExcludedImportTypes: ["react"],
          // 表示分组前面需要有空行
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
}
export default importOrderConfig;
