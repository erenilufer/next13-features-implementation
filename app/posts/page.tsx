import Link from "next/link";
import PostCard from "../../components/PostCard";
import { Post } from "../../models/Post";

async function fetchPosts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return posts.json();
}
async function Blog() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-wrap justify-center   py-4 gap-4">
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
