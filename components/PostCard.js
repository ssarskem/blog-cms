import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 space-y-6'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <Image src={post.featuredImage.url} alt={post.title}
          className="object-top w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          width={1980}
          height={1150}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <h1 className='transition duration-700 text-center cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-start justify-center w-full">
        <div className="flex items-center justify-center w-full lg:w-auto mr-8">
          <Image src={post.author.photo.url} alt={post.author.name} height={30} width={30} 
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700 flex flex-row items-center justify-center w-full lg:w-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2 text-pink-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <p className="inline align-middle">{moment(post.createdAt).format("YYYY/MM/DD")}</p>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-10 mb-b">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">記事を読む</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;