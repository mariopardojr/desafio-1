export interface Post {
  content: string;
  title: string;
  date: string;
}

export interface BlogContextState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
} 

export interface Props {
  children: React.ReactNode
}