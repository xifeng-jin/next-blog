
// 准备实现 import 的导入规则

export default {
    rules: {
        "import/order": [
            "error",
            {
                groups: [
                    ["react", "react-dom"],
                    ["react-redux", "redux", "zustand"],
                    ["next", "next/**"],
                    "external", // 其他第三方库
                    "internal", // 内部组别名
                    "parent", // 父级导入
                    "sibling", // 同级导入
                    "type", // 类型
                    "style",
                ],
                pathGroups:[
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "before",
                    },
                    {
                        pattern: "react-dom",
                        group: "builtin",
                        position: "before",
                    },
                    {
                        pattern: "next",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "next/**",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "redux",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "classnames",
                        group: "external",
                        position: "after",
                    },
                    {
                        pattern: "lodash/**",
                        group: "external",
                    },
                    {
                        pattern: "axios",
                        group: "external",
                    },
                    {
                        pattern: "dayjs",
                        group: "external",
                    },
                    {
                        pattern: "@/components/**",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "@/hooks/**",
                        group: "internal",
                    },
                    {
                        pattern: "@/utils/**",
                        group: "internal",
                    },
                    {
                        pattern: "../**",
                        group: "parent",
                    },
                    {
                        pattern: "./**",
                        group: "sibling",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react", "next"],
                
            }
        ],
        "newlines-between": "always",
        alphabetize: {
            order: "asc",
            caseInsensitive: true,
        }
    },
    settings: {
        "import/parsers":{
            "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
                alwaysTryTypes: true,
            }
        },
        node: {
            extenstions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"]
        }
    }
}
