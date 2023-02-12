import React, { useEffect, useState } from 'react';
import { useBlog } from '../../context/Blog/BlogContext';
import PostCard from '../PostCard';
import { faker } from '@faker-js/faker';
import { Post } from '../../context/Blog/blogContext.model';
import { useSearch } from '../../context/Search/SearchContext';

const PostsList: React.FC = () => {
  const { posts } = useBlog()
  const { search } = useSearch()
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)

  const filterPosts = () => {
    const searchTermLowerCase = search.toLowerCase()
    setFilteredPosts(
      posts.filter(post => post.content.toLowerCase().includes(searchTermLowerCase) || post.title.toLowerCase().includes(searchTermLowerCase))
    )
  }

  useEffect(() => {
    filterPosts()
  })

  return (
    <div className='flex flex-col gap-12 px-[25%] my-24'>
      {filteredPosts.map(post => (<PostCard key={faker.datatype.uuid()} post={post} />))}
    </div>
  )
}

export default PostsList;