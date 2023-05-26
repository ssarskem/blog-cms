import { getPostDetails } from '@/services';
import { Author, CommentsForm, PostDetail } from '@/components';
import React from 'react'

const PostDetails = ({ post }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          {/* CommentForm */}
          {/* Comments */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getServerSideProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);

  return {
    props: {
      post: data,
    },
  };
};
