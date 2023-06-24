import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Post } from "../../components/Post/Post";
import { Link } from "react-router-dom";

export const PostDetail = () => {
  const { sortedForumData } = useData();
  const { id } = useParams();

  const selectedPost = sortedForumData?.posts?.find(
    ({ postId }) => postId === id
  );

  console.log("selecte", selectedPost);
  return (
    <div>
      <Link to="/posts">Back to home</Link>
      <Post userPost={selectedPost} />

      <div className="comments-section">
        {selectedPost?.comments?.map(
          ({ commentId, username, picUrl, comment, createdAt }) => (
            <div key={commentId}>
              <div>
                <img className="profile-pic" src={picUrl} />
                <span>{comment}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
