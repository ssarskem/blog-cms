import React, { useEffect, useState } from 'react'
import { getComments } from '@/services';
import moment from 'moment';

const Comments = ({ slug }) => {
  const [comments, setComments] = React.useState([]);
  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    })
  }, [])

  return (
    <div>
      {comments.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            コメント数： {comments.length}
          </h3>
          {comments.map((comment) => (
            <div key={ comment.createdAt } className='border-b border-gray-100 mb-4 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>
                  投稿者： {comment.name}
                </span>
              </p>
              <p className='mb-4'>
                投稿日： {" "}
                {moment(comment.createdAt).format("YYYY年MM月DD日")}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;