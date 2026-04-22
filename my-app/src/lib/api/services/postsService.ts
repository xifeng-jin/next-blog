import { apiClient } from "../client";
import { API_ENDPOINTS } from "../endpoints";
import type { Post, Comment, CreatePostData } from '../types/post';

// 帖子相关的api 服务
export const postService = {
    // 获取所有帖子
  getAllPosts: async (): Promise<Post[]> => {
    return apiClient.get<Post[]>(API_ENDPOINTS.posts.getAll);
  },
  
  // 获取单个帖子
  getPostById: async (id: number): Promise<Post> => {
    return apiClient.get<Post>(API_ENDPOINTS.posts.getById(id));
  },
  
  // 获取帖子的评论
  getPostComments: async (postId: number): Promise<Comment[]> => {
    return apiClient.get<Comment[]>(API_ENDPOINTS.posts.getComments(postId));
  },
  
  // 创建新帖子
  createPost: async (data: CreatePostData): Promise<Post> => {
    return apiClient.post<Post>(API_ENDPOINTS.posts.create, data);
  },
  
  // 更新帖子
  updatePost: async (id: number, data: Partial<CreatePostData>): Promise<Post> => {
    return apiClient.put<Post>(API_ENDPOINTS.posts.update(id), data);
  },
  
  // 删除帖子
  deletePost: async (id: number): Promise<{}> => {
    return apiClient.delete<{}>(API_ENDPOINTS.posts.delete(id));
  },
  
  // 通过查询参数获取评论
  getCommentsByPostId: async (postId: number): Promise<Comment[]> => {
    return apiClient.get<Comment[]>(API_ENDPOINTS.comments.getByPost(postId));
  },
}