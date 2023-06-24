import "./FeedSection.css";

import React from "react";
import { useData } from "../../contexts/DataContext";
import { Post } from "../Post/Post";

export const FeedSection = () => {
  const { forumData, sortedForumData } = useData();
  return (
    <div className="feed">
      <h2>Latest Posts</h2>
      {sortedForumData?.posts?.map((userPost) => {
        return <Post key={userPost.postId} userPost={userPost} />;
      })}
    </div>
  );
};
