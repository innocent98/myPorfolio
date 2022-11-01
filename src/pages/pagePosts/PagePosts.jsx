import React from "react";
import PagePost from "../../components/pagePost/PagePost";
import { users } from "../../data";

const PagePosts = () => {
  return (
    <div className="pagePosts">
      {users.map((u) => (
        <PagePost u={u} key={u.id} />
      ))}
    </div>
  );
};

export default PagePosts;
