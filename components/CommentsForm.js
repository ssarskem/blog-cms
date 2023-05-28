import React, { useRef, useState } from 'react'
import { submitComment } from '@/services';

const CommentsForm = ({slug}) => {
  const [ error, setError ] = useState(false);
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);

  const nameEl = useRef();
  const emailEl = useRef();
  const commentEl = useRef();

  const handleCommentSubmit = () => {
    setError(false);
    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentData = {
      name,
      email,
      comment,
      slug,
    };
    submitComment(commentData).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        コメントはこちら
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          name='comment'
          placeholder='コメントをご入力ください'
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          ref={nameEl}
          type="text"
          placeholder='お名前'
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        />
        <input
          ref={emailEl}
          type="email"
          placeholder='メールアドレス'
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        />
      </div>
      {error && <p className='text-xs text-red-500'>すべての項目をご記載ください。</p>}
      <div className='mt-8'>
        <button 
          type="button"
          onClick={handleCommentSubmit}
          className="transition duration-500 ease-in hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 curosor-pointer"
        >
          コメントを投稿する
        </button>
        {showSuccessMessage && (
          <span className='text-xl float-right font-semibold mt-3 text-green-500'>
            コメントを送信しました
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;