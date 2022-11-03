import Link from "next/link";
import React from "react";
import { Post } from "../models/Post";

type Props = {
  post: Post;
};

const PostCard = (props: Props) => {
  const { post } = props;
  return (
    <Link
      href={`/posts/${post.id}`}
      className="cursor-pointer p-5 max-w-md  ring-2 ring-slate-500   group hover:ring-white duration-300"
    >
      <h1 className="text-2xl font-bold py-2  text-slate-400   group-hover:text-white duration-300">
        {post.title}
      </h1>
      <p className=" text-slate-400   group-hover:text-white duration-300">
        {post.body}
      </p>
    </Link>
  );
};

export default PostCard;
