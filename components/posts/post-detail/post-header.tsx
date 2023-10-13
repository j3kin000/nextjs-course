import Image from "next/image";
import React, { FC } from "react";
import classess from "./post-header.module.css";
export type PostHeaderProps = {
  title: any;
  image: any;
};
const PostHeader: FC<PostHeaderProps> = (props) => {
  const { title, image } = props;
  return (
    <header className={classess.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
