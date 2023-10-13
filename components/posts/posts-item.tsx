import React, { FC } from "react";
import classess from "./posts-item.module.css";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { getPostData } from "@/lib/post-util";
export type PostItemProps = {
  post: { title: any; image: string; excerpt: any; date: any; slug: any };
};
const PostItem: FC<PostItemProps> = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classess.post}>
      <Link href={linkPath}>
        <div className={classess.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classess.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p> {excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
