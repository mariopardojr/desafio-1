import { createContext, useContext, useState } from "react";
import { BlogContextState, Post, Props } from "./blogContext.model";
import data from '../../data.json'

const BlogContext = createContext<BlogContextState>({} as BlogContextState)

export const BlogProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(data)

  return (
    <BlogContext.Provider value={{ posts, setPosts}}>
      { children }
    </BlogContext.Provider>)
}

export const useBlog = () => {
  const context = useContext(BlogContext)

  if(!context) {
    throw new Error('useBlog must be used within an UserProvider');
  }

  return context
}
