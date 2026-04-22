// 根据JSONPlaceholder文档定义的API端点
export const API_ENDPOINTS = {
  posts: {
    getAll: '/posts',           // 获取100条帖子
    getById: (id: number) => `/posts/${id}`,  // 获取单条帖子
    getComments: (postId: number) => `/posts/${postId}/comments`, // 获取帖子评论
    create: '/posts',           // 创建帖子
    update: (id: number) => `/posts/${id}`,  // 更新帖子
    delete: (id: number) => `/posts/${id}`,  // 删除帖子
  },
  comments: {
    getAll: '/comments',        // 获取500条评论
    getByPost: (postId: number) => `/comments?postId=${postId}`, // 查询评论
  },
  albums: '/albums',           // 100个相册
  photos: '/photos',           // 5000张照片
  todos: '/todos',             // 200个待办事项
  users: '/users',             // 10个用户
};