export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  updated_at: string;
  image_url: string; // 이미지 URL 필드 추가
}