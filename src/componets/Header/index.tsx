import React from 'react';
import SearchBar from '../SearchBar';

const Header: React.FC = () => {
  return (
    <div className='flex flex-col gap-20 px-[25%] py-10 bg-gradient-to-l from-[#3EA1DB] to-[#574AE8]'>
      <div className='flex justify-between w-full'>
        <span className='text-slate-50'>Codelândia</span>
        <span className='text-slate-50'>blog</span>
      </div>
      <SearchBar placeholder='Pesquisar no blog' />
    </div>
  )
}

export default Header;