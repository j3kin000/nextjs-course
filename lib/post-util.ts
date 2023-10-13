import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "posts");
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  const PostData = postFiles?.map((item: any) => {
    return getPostData(item);
  });

  const sortedPost = PostData.sort((a: any, b: any) =>
    a.date > b.date ? -1 : 1
  );
  return sortedPost;
};

export const getPostData = (fileName: any) => {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getFeatuedPosts = () => {
  const allPosts = getAllPosts();
  const featuedPosts = allPosts.filter((post: any) => post.isFeatured);
  return featuedPosts;
};
