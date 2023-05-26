import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-6'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl'>ssarskem Tech Blog</span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer'>
            React
          </span>
          <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer'>
            Web開発
          </span>
          <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer'>
            アプリ開発
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;