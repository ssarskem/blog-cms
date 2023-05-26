import { useEffect, useState } from 'react';
import { getCategories } from '@/services';
import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    })
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 flex flex-col'>
      <h3 className='text-xl mb-8 font-semibold border-b'>
        カテゴリー
      </h3>
      {
        categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block mb-3'>{category.name}</span>
          </Link>
        ))
      }
    </div>
  );
};

export default Categories;