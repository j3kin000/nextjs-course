import React, { FC } from "react";
import classess from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";
export type FeaturedPostsProps = { posts: any };
const FeaturedPosts: FC<FeaturedPostsProps> = (props) => {
  const { posts } = props;
  return (
    <section className={classess.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
