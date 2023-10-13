import PostHeader from "./post-header";
import classess from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { FC } from "react";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export type PostContentProps = {
  posts: any;
};
const PostContent: FC<PostContentProps> = (props) => {
  const { posts } = props;
  const imagePath = `/images/posts/${posts.slug}/${posts.image}`;

  const customRenders = {
    p: ({ node, ...props }: any) => {
      if (node.children[0].type === "element") {
        const src = node.children[0].properties?.src;

        return (
          <div className={classess.image}>
            <Image
              src={`/images/posts/${posts.slug}/${src}`}
              alt={"asdasds"}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{props.children}</p>;
    },
    code(code: any) {
      const { className, children } = code;
      return (
        <SyntaxHighlighter style={atomDark} language={className}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classess.content}>
      <PostHeader title={posts.title} image={imagePath} />
      <ReactMarkdown components={customRenders}>{posts.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
