import Head from "next/head";
import { getPosts } from '@/services';
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";
import { Categories } from "@/components";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {
            posts.map((post) => (
              <PostCard post={post.node} key={post.node.title} />
            ))
          }
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 space-y-4">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async() => {
  const posts = await getPosts() || [];

  return {
    props: {
      posts
    }
  }
};