import React, { createContext, useContext, useState } from "react";
import { forumData as data } from "../data/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [forumData, setForumData] = useState(data);
  const [sortBy, setSortBy] = useState("latest");

  const sortedForumData =
    sortBy === "latest"
      ? {
          ...forumData,
          posts: [
            ...forumData.posts.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            ),
          ],
        }
      : {
          ...forumData,
          posts: [
            ...forumData.posts.sort(
              (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
            ),
          ],
        };

  //   const [isUpvoted, setIsUpvoted] = useState(false);
  //   const [isDownvoted, setIsDownvoted] = useState(false);

  const bookmarkHandler = (id) => {
    const updatedPosts = forumData?.posts?.map((post) =>
      id === post.postId ? { ...post, isBookmarked: !post.isBookmarked } : post
    );

    setForumData({ ...forumData, posts: updatedPosts });
  };

  const upvoteHandler = (id) => {
    const updatedPosts = forumData?.posts?.map((post) =>
      id === post.postId ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setForumData({ ...forumData, posts: updatedPosts });
  };
  const downvoteHandler = (id) => {
    const updatedPosts = forumData?.posts?.map((post) =>
      id === post.postId ? { ...post, downvotes: post.downvotes + 1 } : post
    );
    setForumData({ ...forumData, posts: updatedPosts });
  };

  return (
    <DataContext.Provider
      value={{
        forumData,
        bookmarkHandler,
        upvoteHandler,
        downvoteHandler,
        setSortBy,
        sortedForumData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
