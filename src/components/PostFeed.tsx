"user client";

import Image from "next/image";
import React from "react";

interface Post {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
}

interface PostFeedProps {
  posts: Post[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.caption}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center mb-4">
              <Image
                src={post.avatar}
                alt={post.username}
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <p className="text-gray-800 font-medium">{post.username}</p>
            </div>
            <p className="text-gray-700">{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
