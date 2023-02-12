import { createContext, useContext, useState } from "react";

interface SearchContextState {
  search: string;
  setSearch: (search: string) => void;
}

interface Props {
  children: React.ReactNode
}

const SearchContext = createContext<SearchContextState>({} as SearchContextState)

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState<string>('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch must be used within an UserProvider.')
  }

  return context
}