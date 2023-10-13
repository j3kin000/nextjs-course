import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/post-util";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import { FC, Fragment } from "react";

export type PostDetailPageProps = {
  posts: any;
};
const PostDetailPage: FC<PostDetailPageProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>jats {props.posts.title}</title>
        <meta name="description" content="new nxex" />
      </Head>
      <PostContent posts={props.posts} />;
    </Fragment>
  );
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }
  const { slug } = params;
  const posts = getPostData(slug);
  return {
    props: {
      posts: posts,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(context: GetStaticPathsContext) {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export default PostDetailPage;
