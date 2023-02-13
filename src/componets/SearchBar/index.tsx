import React, { useState } from 'react';
import { useBlog } from '../../context/Blog/BlogContext';
import { useSearch } from '../../context/Search/SearchContext';

interface Props {
  placeholder?: string;
  label?: string;
}

const SearchBar: React.FC<Props> = ({ placeholder, label}) => {
  const { setSearch } = useSearch()

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  return (
    <div>
      <label className='text-slate-50' htmlFor="input">
        {label}
        <input
          id='input'
          className='
            w-full
            py-2
            px-12
            outline-none
            text-slate-50
            bg-slate-50
            placeholder:text-slate-50
            bg-opacity-20
            placeholder:opacity-50
            bg-[url("src/assets/search.svg")]
            bg-no-repeat
            bg-[left_10px_bottom_5px]
            rounded
          '
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </div>

  )
}

export default SearchBar;