
export async function generateStaticParams() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await postsResponse.json();

  return posts.map((post: any) => ({
    id: String(post.id),
  }));
}

async function getPost(id: string) {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

  return post.json();
}
async function Post({ params }: any) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="cursor-pointer p-5  duration-200   ">
      <h1 className="text-5xl font-bold py-10 ">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
