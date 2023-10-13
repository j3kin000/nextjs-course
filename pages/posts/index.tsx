import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/post-util";
import Head from "next/head";
import { FC, Fragment } from "react";

const DUMMY_POSTS = [
  {
    title: "nasdas",
    image: "coding-event.jpg",
    excerpt: "asd adsasd adwadwda ",
    date: "2022/12/12",
    slug: "slug",
  },
];

export type PostsPageProps = {
  posts: any;
};
const PostsPage: FC<PostsPageProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>jats posts</title>
        <meta name="description" content="new nxex" />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default PostsPage;
