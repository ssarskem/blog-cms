import { getSimilarPosts, getRecentPosts } from '@/services';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) => {
        setRelatedPosts(result);
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      })
    } 
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 flex flex-col'>
      <h3 className='text-xl font-semibold border-b mb-4'>
        {slug ? '関連記事' : '新着記事'}
      </h3>
      {
        relatedPosts.map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-1/3 flex-none'>
              <Link href={`/post/${post.slug}`} >
                <Image 
                  src={post.featuredImage.url}
                  alt={post.title}
                  width={1980}
                  height={1150}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className='align-middle rounded-lg'
                />
              </Link>
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>{moment(post.createdAt).format("YYYY/MM/DD")}</p>
              <Link href={`/post/${post.slug}`} className='text-gray-800 font-semibold hover:text-gray-600'>
                {post.title}
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default PostWidget;