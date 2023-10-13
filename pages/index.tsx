import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeatuedPosts } from "@/lib/post-util";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { FC, Fragment } from "react";

export type HomePageProps = {
  posts: any;
};
const HomePage: FC<HomePageProps> = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>jats sadls</title>
        <meta name="description" content="new nxex" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const featuredPosts = getFeatuedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}
export default HomePage;
