import React, { useState } from 'react';
import { Post } from '../../context/Blog/blogContext.model';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const [isFav, setIsFav] = useState(false);

  const formatDate = (date: string): string => {
    const newDate = new Date(date);
    const day = newDate.toLocaleString('pt-BR', { day: '2-digit' })
    const month = newDate.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')
    const year = newDate.toLocaleString('pt-BR', { year: 'numeric'})

    return `${day} de ${month}, ${year}`
  }

  const handleFav = () => {
    console.log(isFav)
    setIsFav(!isFav)
    console.log(isFav)
  }

  return (
    <div className='flex flex-col gap-4 py-6 px-8 bg-slate-50 shadow-sm rounded-md'>
      <div className='flex items-center justify-between'>
        <span className='text-[#717171]'>{formatDate(post.date)}</span>
        <button onClick={handleFav}>
          {
            isFav ? <MdFavorite className='text-2xl text-[#574AE8]' /> : <MdFavoriteBorder className='text-2xl text-[#574AE8]' />
          }
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-xl'>{post.title}</span>
        <p className='text-[#717171]'>{post.content}</p>
      </div>
    </div>
  )
}

export default PostCard;
