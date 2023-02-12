import React from 'react';
import { Post } from '../../context/Blog/blogContext.model';

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  const formatDate = (date: string): string => {
    const newDate = new Date(date);
    const day = newDate.toLocaleString('pt-BR', { day: '2-digit' })
    const month = newDate.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')
    const year = newDate.toLocaleString('pt-BR', { year: 'numeric'})

    return `${day} de ${month}, ${year}`
  }

  return (
    <div className='flex flex-col gap-4 py-6 px-8 bg-slate-50 shadow-sm'>
      <span className='text-[#717171]'>{formatDate(post.date)}</span>
      <div className='flex flex-col gap-2'>
        <span className='text-xl'>{post.title}</span>
        <p className='text-[#717171]'>{post.content}</p>
      </div>
    </div>
  )
}

export default PostCard;
