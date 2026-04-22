// 根据JSONPlaceholder数据结构定义类型
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface CreatePostData {
  title: string;
  body: string;
  userId: number;
}