# Backlog

## Main Tasks

### 基础
#### 链接与导航
- generateStaticParams
定义：对于动态路由，我们告诉服务器，这个是静态片段；
实现：[参考示例](./src/app/(blog)/blog/[slug]/page.tsx)
用途：build之后,会发现有/blog/1111,/blog/2222,/blog/3333生成
解释：
这个属于构建时的优化，在构建时，遇到动态路由时，检查是否有generateStaticParams,然后根据需要渲染的id数量，提前执行对应的page逻辑，并生成对应数量的html；
当用户访问的时候，如果是预构建的，那么急速返回，否则正常执行；
当数量过大(超过1万)，则将采取**增量在生成ISR**和**动态回退**，前者只提前预定最热门的几百产品，并且在一定时间内进行轮替，只要数据没变一直是这个静态html, 数据变了则先展示静态内容，再更新数据，后面则只需要在数据发生变化时，再更新；而动态回退，则是再访问动态页面后，缓存不在预定的动态页面。

## Side Tasks
- [复习tsconfig ](./tsconfig.json)
- [移除devTools](./next.config.ts)
- [导入规则/noConsole/noUnused](./import-order.config.mjs)
