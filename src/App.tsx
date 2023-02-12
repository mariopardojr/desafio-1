import Header from "./componets/Header"
import PostsList from "./componets/PostsList"
import { BlogProvider } from "./context/Blog/BlogContext"
import { SearchProvider } from "./context/Search/SearchContext"

export const App: React.FC = () => {
  return (
    <BlogProvider>
      <SearchProvider>
        <Header />
        <PostsList />
      </SearchProvider>
    </BlogProvider>
  )
}
