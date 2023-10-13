import React, { FC } from "react";
import PostItem from "./posts-item";
import classess from "./posts-grid.module.css";
export type PostsGridProps = {
  posts: any;
};
const PostsGrid: FC<PostsGridProps> = (props) => {
  const { posts } = props;
  return (
    <ul className={classess.grid}>
      {posts.map((item: any) => (
        <PostItem key={item.slug} post={item} />
      ))}
    </ul>
  );
};

export default PostsGrid;
