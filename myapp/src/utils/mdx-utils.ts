import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { serialize } from 'next-mdx-remote/serialize';
// import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export interface Post {
    content: string,
    data: {
      title: string,
      date: string,
      description: string,
    },
    filePath: string
}

export const sortPostsByDate = (posts: Array<Post>) => {
    return posts.sort((a, b) => {
        const aDate: Date = new Date(a.data.date);
        const bDate: Date = new Date(b.data.date);
        return bDate.getTime() - aDate.getTime();
    });
};

export const getPosts = () => {
    let posts: Array<Post> = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);
  
      return {
        content,
        data,
        filePath,
      };
    });
  
    posts = sortPostsByDate(posts);
  
    return posts;
};