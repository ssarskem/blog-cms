import React, { Fragment } from 'react'
import Image from 'next/image'
import moment from 'moment';

const PostDetail = ({ post }) => {
  
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <i key={index}>{text}</i>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className="text-3xl font-semibold mb-4 border-b">
            {
              modifiedText.map((item, itemIndex) => (
                <Fragment key={itemIndex}>{item}</Fragment>
              ))
            }
          </h2>
        );
        case "heading-three":
          return (
            <h3 key={index} className="text-2xl font-semibold mb-4 border-b">
              {
                modifiedText.map((item, itemIndex) => (
                  <Fragment key={itemIndex}>{item}</Fragment>
                ))
              }
            </h3>
          );
      case "paragraph":
        return (
          <p key={index} className='mb-4'>
            {
              modifiedText.map((item, itemIndex) => (
                <Fragment key={itemIndex}>{item}</Fragment>
              ))
            }
          </p>
        )
      case "image":
        return (
          <img 
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return (
          modifiedText
        );
    }
  }
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 mb-8'>
      <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
      <div className='relative overflow-hidden shadow-md mb-4'>
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
          className='object-top h-full w-full rounded-t-lg'
        />
      </div>
      <div className='block lg:flex text-center items-center justify-start w-full mb-8'>
        <div className='flex items-center justify-start w-full lg:w-auto mr-8'>
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            height={30}
            width={30}
            className="align-middle rounded-full"
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
        </div>
        <div className='flex items-center justify-start w-full lg:w-auto mr-8 font-medium text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2 text-pink-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <p className="inline align-middle">{moment(post.createdAt).format("YYYY/MM/DD")}</p>
        </div>
      </div>
      {
        post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          // index, text, obj, type
          return getContentFragment(index, children, typeObj, typeObj.type);
        })
      }
    </div>
  );
};

export default PostDetail;