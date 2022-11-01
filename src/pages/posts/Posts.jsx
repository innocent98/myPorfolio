import React from "react";
import Post from "../../components/post/Post";
import { users } from "../../data";

const Posts = () => {
  return (
    <div className="posts">
      {users.map((u) => (
        <Post u={u} key={u.id} />
      ))}
    </div>
  );
};

export default Posts;
