import { FC } from "react";
import classess from "./all-posts.module.css";
import PostsGrid from "./posts-grid";
export type AllPostsProps = {
  posts: any;
};
const AllPosts: FC<AllPostsProps> = (props) => {
  return (
    <section className={classess.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
